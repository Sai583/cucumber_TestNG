package TestRunner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
@CucumberOptions(features="src/test/resources/Feature/login.feature",
                 glue="Stepdefinitions",
                tags= {"~@ignore"},
                format= {"pretty",
                		"html:target/cucumber-reports/cucumber-pretty"},
                		
                plugin= {"json:target/cucumber-reports/Cucumber_report.json"} )
public class TestRunner {
	
	private TestNGCucumberRunner testNGCucumberRunner;
	 
   @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }
 
    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "Feature")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }
 
    @DataProvider
    public Object[][] Feature() {
    	
        return testNGCucumberRunner.provideFeatures();
   
    }
 
    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        testNGCucumberRunner.finish();
    }
	
	

}






