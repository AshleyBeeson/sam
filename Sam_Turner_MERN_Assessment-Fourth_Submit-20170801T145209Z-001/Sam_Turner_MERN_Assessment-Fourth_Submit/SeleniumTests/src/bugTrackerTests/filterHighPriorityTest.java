package bugTrackerTests;

import static org.junit.Assert.*;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class filterHighPriorityTest {
	
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
	public void test() {
		home = new HomePage(driver);
		assertNotNull(home.getHighPriority());
		home.clickHighPriority();
		assertNull(home.getFalseLabel());
	}
	
	@After
	public void tearDown() throws Exception {
		driver.quit();
	}
}
