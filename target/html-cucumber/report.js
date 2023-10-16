$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FeaturesFiles/SearchFlight.feature");
formatter.feature({
  "name": "Login to FlyAway website and Search for flights",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "I logout and againg login with this EmailAdress and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click On Login and SingUp button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_click_On_Login_and_SingUp_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter User Name \"user2@user.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_enter_User_Name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password \"user2\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_enter_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on loginbutton",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_click_on_loginbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I valided Logoutbutton in my homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_valided_Logoutbutton_in_my_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "sadasd",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Home button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_click_on_the_Home_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the Departure city",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_select_the_Departure_city()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the Destination city",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_select_the_Destination_city()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_click_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the Booking Flight ID",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_validate_the_Booking_Flight_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "asdasda",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Book Flight button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_click_on_the_Book_Flight_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_validate_the_page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cFly Away[]\u003e but was:\u003cFly Away[ - Make Flight Booking]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat Pages.CBooking.valid(CBooking.java:25)\r\n\tat StepDefs.SearchFlight.i_validate_the_page(SearchFlight.java:111)\r\n\tat ✽.I validate the page(file:///C:/Users/el/eclipse-workspace/Phase5-Selenium/src/test/java/FeaturesFiles/SearchFlight.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on the Complete Booking button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_click_on_the_Complete_Booking_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate this page as well",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.SearchFlight.i_validate_this_page_as_well()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});