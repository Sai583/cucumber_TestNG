 	
Feature: Test Facebook Smoke Scenarios

  Scenario Outline: Test Facebook with valid Creditionals
    Given Open firefox and start application
    When I provide valid "<Username>" and "<Password>"
    Then User should be able to login successfully
    Then Application closed

 

    Examples: 
      | Username | Password |
      | demo1    | demo1    |
      | demo     | demo     |
      | value    | value    |
