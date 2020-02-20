package CTMTechTest;

import CTMTechTest.Pages.CurrentSupplierPage;
import CTMTechTest.Pages.PriceResultPage;
import CTMTechTest.Pages.YourEnergyPage;
import CTMTechTest.Pages.YourDetailsPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {
    private CurrentSupplierPage currentSupplierPage = new CurrentSupplierPage();
    private YourEnergyPage yourEnergyPage = new YourEnergyPage();
    private YourDetailsPage yourDetailsPage = new YourDetailsPage();
    private PriceResultPage priceResultPage = new PriceResultPage();

    @Given("^User is on the Compare the market provided URL$")
    public void user_is_on_the_Compare_the_market_provided_URL()  {
        currentSupplierPage.providedUrlPage();

    }
    @When("^User inputs a valid \"([^\"]*)\"$")
    public void user_inputs_a_valid(String arg1) {
     currentSupplierPage.enterPostCode(arg1);
    }

    @When("^clicks on Find Postcode$")
    public void clicks_on_Find_Postcode() {
        currentSupplierPage.clickOnFindPostcodeButton();
    }

    @When("^user selects \"([^\"]*)\" option$")
    public void user_selects_option(String arg1){
        currentSupplierPage.selectsNoBillOption(arg1);

    }

    @When("^selects Electricity$")
    public void selects_Electricity()  {
        currentSupplierPage.selectElectricityOption();

    }

    @When("^selects the \"([^\"]*)\" option for Energy Supplier$")
    public void selects_the_option_for_Energy_Supplier(String arg1)  {
        currentSupplierPage.dontKnowOption();

    }

    @When("^clicks Next$")
    public void clicks_Next()  {
        currentSupplierPage.clickOnNext();

    }

    @Then("^user is directed to Your Energy Page$")
    public void user_is_directed_to_Your_Energy_Page()  {
        yourEnergyPage.verifyUserIsOnYourEnergyPage();

    }

    @When("^selects \"([^\"]*)\" for Prepayment Pay As you Go meter and Economy7 meter$")
    public void selects_for_Prepayment_Pay_As_you_Go_meter_and_Economy_meter(String arg1)  {
        yourEnergyPage.selectNoForPayAsYouGoAndEcoMeter(arg1);

    }

    @When("^inputs the price as £\"([^\"]*)\" and period as \"([^\"]*)\"$")
    public void inputs_the_price_as(String arg1, String arg2) {
        yourEnergyPage.currentSpendAndPeriod(arg1,arg2);

    }

    @When("^clicks on Next$")
    public void clicks_on_Next(){
        // Write code here that turns the phrase above into concrete actions
        yourEnergyPage.clickOnNextButton();

    }

    @Then("^the user is directed to Your Preferences Page$")
    public void the_user_is_directed_to_Your_Preferences_Page() {
        // Write code here that turns the phrase above into concrete actions
        yourDetailsPage.verifyPreferencesPAgeHeading();


    }

    @When("^selects \"([^\"]*)\"$")
    public void selects(String arg1) {
        yourDetailsPage.selectTypeOfTariff(arg1);

    }

    @Then("^\"([^\"]*)\" as way of payment$")
    public void as_way_of_payment(String arg1) {
        yourDetailsPage.selectMonthlyPayment();

    }

    @Then("^enters a valid \"([^\"]*)\"$")
    public void enters_a_valid (String arg1){
        yourDetailsPage.enterEmailAddress(arg1);

    }

    @Then("^confirms to the Terms and Conditions$")
    public void confirms_to_the_Terms_and_Conditions() {
        // Write code here that turns the phrase above into concrete actions
        yourDetailsPage.confirmTerms();

    }

    @Then("^clicks on Go to Prices$")
    public void clicks_on_Go_to_Prices()  {
        yourDetailsPage.goToPrices();


    }

    @Then("^User is directed to Price Comparison Results Page$")
    public void user_is_directed_to_Price_Comparison_Results_Page()  {
        priceResultPage.verifyPriceResultPage();

    }


    @When("^User inputs an invalid \"([^\"]*)\"$")
    public void userInputsAnInvalid(String arg0)  {
        // Write code here that turns the phrase above into concrete actions
        currentSupplierPage.enterPostCode(arg0);

    }

    @When("^system does not validates the postcode$")
    public void system_Does_Not_Validates_The_Postcode() {
        currentSupplierPage.invalidPostcodeErrorMessage();
    }

    @Then("^user should not be directed to Your Energy Page$")
    public void user_Should_Not_Be_Directed_To_Your_Energy_Page() {
        currentSupplierPage.completeThePostcodeMessage();

    }

    @When("^user hovers over the question fields$")
    public void user_Hovers_Over_The_Question_Fields() {
        currentSupplierPage.hoverOverPostcodeQuestion();

    }

    @Then("^the user should be displayed with a help text box$")
    public void the_User_Should_Be_Displayed_With_A_Help_Text_Box() {
        currentSupplierPage.verifyHelpTextBoxDisplayed();
    }
}
