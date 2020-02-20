package CTMTechTest.Pages;

import CTMTechTest.Utils;
import org.openqa.selenium.By;
import org.testng.Assert;

public class YourDetailsPage extends Utils {

    private By _tariffType = By.className("fixed-rate");
    private By _monthlyPayment = By.xpath("//*[@id=\"payment-selection-question\"]/div/div[1]/label[1]");
    private By _emailAddressField = By.id("Email");
    private By _termsButton = By.id("terms-label");
    private By _goToPricesButton = By.id("email-submit");

    public void verifyPreferencesPAgeHeading(){
       String DetailsPageUrl = driver.getCurrentUrl();
       Assert.assertTrue(DetailsPageUrl.contains("yourDetails"));
    }
    public void selectTypeOfTariff(String arg1){
        clickOnElement(_tariffType);
    }
    public void selectMonthlyPayment(){
        clickOnElement(_monthlyPayment);
    }
    public void enterEmailAddress(String arg1){
        enterText(_emailAddressField,arg1);
    }
    public void confirmTerms(){
        clickOnElement(_termsButton);
    }
    public void goToPrices(){
        waitForElementToBeClickable(_goToPricesButton,2);
        clickOnElement(_goToPricesButton);
    }


}
