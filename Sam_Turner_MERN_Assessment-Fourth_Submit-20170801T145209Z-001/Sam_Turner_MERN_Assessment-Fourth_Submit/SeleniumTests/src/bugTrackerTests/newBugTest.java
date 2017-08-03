package bugTrackerTests;

import static org.junit.Assert.*;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class newBugTest {
	
	private static WebDriver driver;
	HomePage home;
	NewBugPage newbug;

	@Before
	public void beforeClass(){
		System.setProperty("webdriver.chrome.driver", "C:\\LocalInstall\\Selenium\\Selenium\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--start-maximized");
		driver = new ChromeDriver( options );
		driver.get("http://localhost:3000/");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	@Test
	public void HighPriorityTest() {
		home = new HomePage(driver);
		assertNotNull(home.getNewBug());
		home.clickNewBug();
		
		newbug = new NewBugPage(driver);
		assertNotNull(newbug.getNewBugTitle());
	}
	
	@After
	public void tearDown() throws Exception {
		driver.quit();
//		String verificationErrorString = verificationErrors.toString();
//		if (!"".equals(verificationErrorString)) {
//			fail(verificationErrorString);
//		}
	}
}
