package bugTrackerTests;


import java.util.NoSuchElementException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.junit.Test;

public class LoadTest {

static WebDriver driver;

	public static void main(String [] args){
		
		System.setProperty("webdriver.chrome.driver", "C:\\LocalInstall\\Selenium\\Selenium\\chromedriver.exe");
		
		driver = new ChromeDriver();
		
		driver.get("http://localhost:3000");
		boolean result;
		
		
		try{
			driver.findElement(By.id("title"));
			result = true;
		}
		catch (NoSuchElementException e){
			System.out.println(e);
			result = false;
		}
		finally{
			driver.close();
		}
		
		if(result){
			System.out.println("---passed---");
		}else{
			System.out.println("---failed---");
		}
	}	
}	


