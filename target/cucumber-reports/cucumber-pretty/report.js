$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CTMTest.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "To Test Various Functional components within the journey",
  "id": "",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9573325100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Compare the market provided URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_Compare_the_market_provided_URL()"
});
formatter.result({
  "duration": 173590100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Journey from Your Supplier to Price Comparison Result Page",
  "description": "",
  "id": ";journey-from-your-supplier-to-price-comparison-result-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User inputs a valid \"PE2 6YS\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicks on Find Postcode",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user selects \"No, I don\u0027t have my Bill\" option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "selects Electricity",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "selects the \"I don\u0027t Know\" option for Energy Supplier",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks Next",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user is directed to Your Energy Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "selects \"No\" for Prepayment Pay As you Go meter and Economy7 meter",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "inputs the price as £\"35\" and period as \"Monthly\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "clicks on Next",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user is directed to Your Preferences Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "selects \"Fixed Tariff\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "\"Monthly Direct Debit\" as way of payment",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "enters a valid \"test@test.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "confirms to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "clicks on Go to Prices",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User is directed to Price Comparison Results Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6YS",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.user_inputs_a_valid(String)"
});
formatter.result({
  "duration": 273430400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_on_Find_Postcode()"
});
formatter.result({
  "duration": 264530300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, I don\u0027t have my Bill",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.user_selects_option(String)"
});
formatter.result({
  "duration": 292119100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.selects_Electricity()"
});
formatter.result({
  "duration": 185786100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I don\u0027t Know",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.selects_the_option_for_Energy_Supplier(String)"
});
formatter.result({
  "duration": 390764400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_Next()"
});
formatter.result({
  "duration": 470852500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_directed_to_Your_Energy_Page()"
});
formatter.result({
  "duration": 328291800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.selects_for_Prepayment_Pay_As_you_Go_meter_and_Economy_meter(String)"
});
formatter.result({
  "duration": 270524400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 22
    },
    {
      "val": "Monthly",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.inputs_the_price_as(String,String)"
});
formatter.result({
  "duration": 315126100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_on_Next()"
});
formatter.result({
  "duration": 174130200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_is_directed_to_Your_Preferences_Page()"
});
formatter.result({
  "duration": 13750400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fixed Tariff",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.selects(String)"
});
formatter.result({
  "duration": 336016400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly Direct Debit",
      "offset": 1
    }
  ],
  "location": "StepDefinitions.as_way_of_payment(String)"
});
formatter.result({
  "duration": 295280900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.com",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.enters_a_valid(String)"
});
formatter.result({
  "duration": 283448000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.confirms_to_the_Terms_and_Conditions()"
});
formatter.result({
  "duration": 163736000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_on_Go_to_Prices()"
});
formatter.result({
  "duration": 271846800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_directed_to_Price_Comparison_Results_Page()"
});
formatter.result({
  "duration": 3082892000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for url to match the regex \"tariffsForMe\". Current url: \"https://energy.comparethemarket.com/energy/v2/yourDetails\" (tried for 3 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ROMA-LPWIN10\u0027, ip: \u0027192.168.1.107\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.106, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\Roma\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:56467}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f4b2b265187cb502ce67f7cb5e16bb57\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat CTMTechTest.Utils.waitForPageToLoad(Utils.java:37)\r\n\tat CTMTechTest.Pages.PriceResultPage.verifyPriceResultPage(PriceResultPage.java:9)\r\n\tat CTMTechTest.StepDefinitions.user_is_directed_to_Price_Comparison_Results_Page(StepDefinitions.java:125)\r\n\tat ✽.Then User is directed to Price Comparison Results Page(CTMTest.feature:25)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://energy.comparethemarket.com/energy/v2/yourDetails");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 964155900,
  "status": "passed"
});
formatter.before({
  "duration": 8748815300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Compare the market provided URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_Compare_the_market_provided_URL()"
});
formatter.result({
  "duration": 23196300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Journey using Invalid Postcode",
  "description": "",
  "id": ";journey-using-invalid-postcode",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User inputs an invalid \"PE2 6\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "clicks on Find Postcode",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "system does not validates the postcode",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user selects \"No, I don\u0027t have my Bill\" option",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "selects Electricity",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "clicks Next",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user should not be directed to Your Energy Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.userInputsAnInvalid(String)"
});
formatter.result({
  "duration": 349376700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_on_Find_Postcode()"
});
formatter.result({
  "duration": 317043400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.system_Does_Not_Validates_The_Postcode()"
});
formatter.result({
  "duration": 146889200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No, I don\u0027t have my Bill",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.user_selects_option(String)"
});
formatter.result({
  "duration": 172727800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.selects_Electricity()"
});
formatter.result({
  "duration": 170818900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_Next()"
});
formatter.result({
  "duration": 183512000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_Should_Not_Be_Directed_To_Your_Energy_Page()"
});
formatter.result({
  "duration": 33824500,
  "status": "passed"
});
formatter.after({
  "duration": 188624600,
  "status": "passed"
});
formatter.before({
  "duration": 10072127300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Compare the market provided URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_Compare_the_market_provided_URL()"
});
formatter.result({
  "duration": 19659000,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify the display of Help text",
  "description": "",
  "id": ";verify-the-display-of-help-text",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user hovers over the question fields",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the user should be displayed with a help text box",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_Hovers_Over_The_Question_Fields()"
});
formatter.result({
  "duration": 259247300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_User_Should_Be_Displayed_With_A_Help_Text_Box()"
});
formatter.result({
  "duration": 91166300,
  "status": "passed"
});
formatter.after({
  "duration": 153851200,
  "status": "passed"
});
});