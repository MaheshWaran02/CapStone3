package StepDefs;

import java.util.List;

import org.openqa.selenium.WebDriver;

import Pages.Login;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import io.restassured.specification.RequestSpecification;


public class ReastAssured {
	
	
    WebDriver driver=Hooks.driver;
    Pages.rest rest;
	
	
	@When("I click the login\\/signup button")
	public void i_click_the_login_signup_button() {
		rest = new Pages.rest (driver);
		
		rest.getLoginbtn1();
		
		
		
	}

	@When("I click on new member")
	public void i_click_on_new_member() {
		rest = new Pages.rest (driver);
		rest.member();
	}

	@When("I enter new credentials using RestAssured")
	public void i_enter_new_credentials_using_RestAssured() {
		Response response = RestAssured.given().contentType(ContentType.TEXT).when().post(
				"/signupaction?email_id=user9@user9.com&pwd=user9&pwd2=user9&name=user9&address=user9&city=user9");

		System.out.println(response.getStatusCode());
		System.out.println(response.getBody().asString());
	}

	
	@When("I click on enter")
	public void i_click_on_enter() {
		rest = new Pages.rest (driver);
		rest.sigup();
	    
	}
	
	@When("i click on loginbutton")
	public void i_click_on_loginbutton() {
		
rest = new Pages.rest (driver);
		
		rest.getLoginbtn1();
		
	}
	

	@When("I enter the email id")
	public void i_enter_the_email_id() {
		rest = new Pages.rest (driver);
		rest.getUsername();
	}

	@When("I enter the password")
	public void i_enter_the_password() {
		rest = new Pages.rest (driver);
		rest.getPwd();
	}

	@Then("I click the login button")
	public void i_click_the_login_button() {
		rest = new Pages.rest (driver);
		rest.getLoginBtn();
	   
	}
}