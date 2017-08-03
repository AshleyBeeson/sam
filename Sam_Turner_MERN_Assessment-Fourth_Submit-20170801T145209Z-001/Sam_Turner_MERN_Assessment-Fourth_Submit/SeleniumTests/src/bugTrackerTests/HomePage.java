package bugTrackerTests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	
	WebDriver driver;
	
	@FindBy(xpath = "//*[@id=\"content\"]/main/div/div[2]/div[1]/input[1]")
	private WebElement highPriority;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/div[1]/header/div/nav/div[2]/a/span")
	private WebElement newBug;
	
	@FindBy(xpath = "//*[@id=\"content\"]/main/div/div[2]/div[2]/div[3]/div[1]/div/div[4]/text()")
	private WebElement falseLabel;
	
	public HomePage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getHighPriority() {
		return highPriority;
	}
	
	public WebElement getNewBug() {
		return newBug;
	}
	
	public WebElement getFalseLabel() {
		return falseLabel;
	}
	
	public void clickNewBug(){
		newBug.click();
	}
	
	public void clickHighPriority(){
		highPriority.click();
	}
}
