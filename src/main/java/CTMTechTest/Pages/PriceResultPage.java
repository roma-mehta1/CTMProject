package CTMTechTest.Pages;

import CTMTechTest.Utils;
import org.testng.Assert;

public class PriceResultPage extends Utils {

    public void verifyPriceResultPage(){
        waitForPageToLoad("tariffsForMe",3);
        String PriceResultPageUrl = driver.getCurrentUrl();
        Assert.assertTrue(PriceResultPageUrl.contains("tariffsForMe"));
    }
}
