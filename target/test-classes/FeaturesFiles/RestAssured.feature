@sanity
Feature: Login Using RestAssured

Scenario: Login Using RestAssured
  When I click the login/signup button
  And I click on new member
  And I enter new credentials using RestAssured
  And I click on enter

Scenario: Login Using RestAssured Credentials
When i click on loginbutton
  When I enter the email id
  And I enter the password
  Then I click the login button
