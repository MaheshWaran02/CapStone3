package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;



public class rest extends BaseClass {

	WebDriver driver;

	By loginbtn1 = By.xpath("//a[@href='login']");
	By NewMem = By.xpath("//a[@href='signup']");
	By sigup = By.xpath("//button[text()='Signup']");
	By username = By.xpath("//input[@name='email_id']");
	By pwd = By.xpath("//input[@name='pwd']");
	By loginBtn = By.xpath("//button[text()='Login']");
	By logoutBtnVal = By.xpath("//a[@href='logout']");

	public rest(WebDriver driver) {
		this.driver = driver;
	}

	public void getLoginbtn1() {
		driver.findElement(loginbtn1).click();
		return;
	}

	public void member() {
		driver.findElement(NewMem).click();
		return;
	}

	public void rest() {

	
	}

	public void sigup() {
		driver.findElement(sigup).click();
		return;
	}

	public void getUsername() {
		driver.findElement(username).sendKeys("user9@user9.com");
		return;
	}

	public void getPwd() {
		driver.findElement(pwd).sendKeys("user9");
		return;
	}

	public void getLoginBtn() {
		driver.findElement(loginBtn).click();
		return;
	}

	public void getLogoutBtnVal() {
		driver.findElement(logoutBtnVal).isDisplayed();
		return;
	}

}