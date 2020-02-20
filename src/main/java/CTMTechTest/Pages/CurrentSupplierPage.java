package CTMTechTest.Pages;

import CTMTechTest.LoadProp;
import CTMTechTest.Utils;
import org.openqa.selenium.By;
import org.testng.Assert;

public class CurrentSupplierPage extends Utils {

    private LoadProp loadProp = new LoadProp();

    private By _postCodeField = By.id("your-postcode");
    private By _findPostcodeButton = By.id("find-postcode");
    private By _noBillOption = By.id("no-bill-label");
    private By _electricityOption = By.id("compare-electricity-label");
    private By _dontKnowOption = By.className("checkbox-confirm");
    private By _nextButton = By.id("goto-your-supplier-details");
    private By _invalidPostcodeError = By.xpath("//*[@id=\"postcode-question\"]/div/div[2]");
    private By _completeThePostcode = By.id("get-started-view-status");
    private By _postcodeQuestion = By.id("postcode-question");
    private By _helpTextBox = By.xpath("//*[@id=\"postcode-question\"]/div/aside");

    public void providedUrlPage(){
        System.out.println(driver.getCurrentUrl());

    }

    public void enterPostCode(String arg1){
        enterText(_postCodeField,arg1);
    }

    public void clickOnFindPostcodeButton(){
        clickOnElement(_findPostcodeButton);
    }

    public void selectsNoBillOption(String arg1){
        clickOnElement(_noBillOption);
    }

    public void selectElectricityOption(){
        clickOnElement(_electricityOption);
    }
    public void dontKnowOption(){
        clickOnElement(_dontKnowOption);
    }
    public void clickOnNext(){
        clickOnElement(_nextButton);
    }
    public void invalidPostcodeErrorMessage(){
        String ExpectedInvalidPostcodeErrorMessage = loadProp.getProperty("ExpectedInvalidPostcodeErrorMessage");
        waitForElementToBeVisible(_invalidPostcodeError,2);
      String ActualInvalidPostcodeErrorMessage =  getText(_invalidPostcodeError);
        System.out.println(ActualInvalidPostcodeErrorMessage);
        Assert.assertEquals(ActualInvalidPostcodeErrorMessage,ExpectedInvalidPostcodeErrorMessage);
    }
    public void completeThePostcodeMessage(){
        waitForElementToBeVisible(_completeThePostcode,2);
        String ExpectedCurrentSupplierPageUrl = (loadProp.getProperty("URL")).replace("?AFFCLIE=TSTT","");
        String ActualCurrentSupplierPageUrl = driver.getCurrentUrl();
        Assert.assertEquals(ActualCurrentSupplierPageUrl,ExpectedCurrentSupplierPageUrl);
    }
    public void hoverOverPostcodeQuestion(){
        hoverOverElement(_postcodeQuestion);
    }
    public void verifyHelpTextBoxDisplayed(){
        waitForElementToBeVisible(_helpTextBox,2);
        Assert.assertTrue(driver.findElement(_helpTextBox).isDisplayed());
    }
}
