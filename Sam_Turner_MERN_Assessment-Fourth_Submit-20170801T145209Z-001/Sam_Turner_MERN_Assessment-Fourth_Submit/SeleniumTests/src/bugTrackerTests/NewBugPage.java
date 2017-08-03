package bugTrackerTests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewBugPage {
	
	WebDriver driver;
	
	public NewBugPage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//*[@id=\"content\"]/main/div/h1")
	private WebElement newBugTitle;
	
	public WebElement getNewBugTitle() {
		return newBugTitle;
	}

}
