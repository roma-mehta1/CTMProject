$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CTMTest.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "To Test Various Functional components within the journey",
  "id": "",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14485187700,
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
  "duration": 162514900,
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
  "duration": 249421300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_on_Find_Postcode()"
});
formatter.result({
  "duration": 219479800,
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
  "duration": 234738200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.selects_Electricity()"
});
formatter.result({
  "duration": 312033100,
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
  "duration": 381632700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_Next()"
});
formatter.result({
  "duration": 394073900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_directed_to_Your_Energy_Page()"
});
formatter.result({
  "duration": 370807300,
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
  "duration": 335268200,
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
  "duration": 247866500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_on_Next()"
});
formatter.result({
  "duration": 296464200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_is_directed_to_Your_Preferences_Page()"
});
formatter.result({
  "duration": 163097300,
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
  "duration": 260957600,
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
  "duration": 140508300,
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
  "duration": 230276200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.confirms_to_the_Terms_and_Conditions()"
});
formatter.result({
  "duration": 115401400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_on_Go_to_Prices()"
});
formatter.result({
  "duration": 275184700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_directed_to_Price_Comparison_Results_Page()"
});
formatter.result({
  "duration": 838062300,
  "status": "passed"
});
formatter.after({
  "duration": 244184700,
  "status": "passed"
});
formatter.before({
  "duration": 7901265400,
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
  "duration": 15095800,
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
  "duration": 214484100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_on_Find_Postcode()"
});
formatter.result({
  "duration": 214194800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.system_Does_Not_Validates_The_Postcode()"
});
formatter.result({
  "duration": 88720400,
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
  "duration": 135248500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.selects_Electricity()"
});
formatter.result({
  "duration": 167754500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.clicks_Next()"
});
formatter.result({
  "duration": 122646800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_Should_Not_Be_Directed_To_Your_Energy_Page()"
});
formatter.result({
  "duration": 35573300,
  "status": "passed"
});
formatter.after({
  "duration": 206219100,
  "status": "passed"
});
formatter.before({
  "duration": 7624940100,
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
  "duration": 12127400,
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
  "duration": 190642600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_User_Should_Be_Displayed_With_A_Help_Text_Box()"
});
formatter.result({
  "duration": 107344500,
  "status": "passed"
});
formatter.after({
  "duration": 2108099800,
  "status": "passed"
});
});