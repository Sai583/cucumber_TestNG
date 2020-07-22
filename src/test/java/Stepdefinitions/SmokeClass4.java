package Stepdefinitions;


import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;




public class SmokeClass4 {
	
	 WebDriver driver;
	 
	@Given("^Open firefox and start application$")
	public void Open_firefox_and_start_application() throws Throwable {
		System.setProperty("webdriver.gecko.driver", "I:\\Selenium\\geckodriver-v0.26.0-win64\\geckodriver.exe");
		 driver = new FirefoxDriver();
		 driver.manage().window().maximize();
		 driver.get("http://www.newtours.demoaut.com/");
	   
	}
	


	@When("^I provide valid \"(.*?)\" and \"(.*?)\"$")
	public void I_provide_valid_Username_and_Password(String Uname, String pass) throws Throwable {
		
		driver.findElement(By.name("userName")).sendKeys(Uname);
		
		driver.findElement(By.name("password")).sendKeys(pass);
	
	    
	}

	@Then("^User should be able to login successfully$")
	public void User_should_be_able_to_login_successfully() throws Throwable {
		
		driver.findElement(By.cssSelector("table>tbody>tr:nth-child(4)>td:nth-child(2)>div>input")).click();
		
		Thread.sleep(2000);
		
		
	}
	
	@Then("Application closed")
	public void application_closed() throws Exception

	{
     driver.findElement(By.cssSelector("table>tbody>tr>td:nth-child(1)>a")).click();
		
		Thread.sleep(3000);
		driver.quit();
	}
}
