package CTMTechTest.Pages;

import CTMTechTest.LoadProp;
import CTMTechTest.Utils;
import org.openqa.selenium.By;
import org.testng.Assert;

public class YourEnergyPage extends Utils {

    private LoadProp loadProp = new LoadProp();

    private By _pageHeading = By.xpath("//*[@id=\"yourSupplier\"]/div[1]/h2");
    private By _noPayAsYouGoOption = By.xpath("//*[@id=\"prepay-yes-no\"]/div/div/label[2]");
    private By _noEconomyMeter = By.xpath("//*[@id=\"economy-7-question\"]/div/div/label[2]");
    private By _currentSpendPeriod = By.id("electricity-current-spend-period");
    private By _currentSpend = By.id("electricity-current-spend");
    private By _nextButton = By.id("goto-your-energy");


    public void verifyUserIsOnYourEnergyPage(){
        String ExpectedEnergyPageHeading = loadProp.getProperty("ExpectedEnergyPageHeading");
        String ActualEnergyPageHeading = getText(_pageHeading);
        Assert.assertEquals(ActualEnergyPageHeading,ExpectedEnergyPageHeading);

    }
    public void selectNoForPayAsYouGoAndEcoMeter(String arg1){
        clickOnElement(_noPayAsYouGoOption);
        clickOnElement(_noEconomyMeter);
    }
    public void currentSpendAndPeriod(String arg1,String arg2){
        enterText(_currentSpend,arg1);
        selectByVisibleText(_currentSpendPeriod,arg2);
    }
    public void clickOnNextButton(){
        clickOnElement(_nextButton);
    }
}
