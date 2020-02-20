Feature:
  To Test Various Functional components within the journey

  Background:
    Given User is on the Compare the market provided URL

    @Test
    Scenario: Journey from Your Supplier to Price Comparison Result Page
      When User inputs a valid "PE2 6YS"
      And clicks on Find Postcode
      And user selects "No, I don't have my Bill" option
      And selects Electricity
      And selects the "I don't Know" option for Energy Supplier
      And clicks Next
      Then user is directed to Your Energy Page
      When selects "No" for Prepayment Pay As you Go meter and Economy7 meter
      And inputs the price as £"35" and period as "Monthly"
      And clicks on Next
      Then the user is directed to Your Preferences Page
      When selects "Fixed Tariff"
      And "Monthly Direct Debit" as way of payment
      And enters a valid "test@test.com"
      And confirms to the Terms and Conditions
      And clicks on Go to Prices
      Then User is directed to Price Comparison Results Page

      @Test
      Scenario: Journey using Invalid Postcode
        When User inputs an invalid "PE2 6"
        And clicks on Find Postcode
        And system does not validates the postcode
        And user selects "No, I don't have my Bill" option
        And selects Electricity
        And clicks Next
        Then user should not be directed to Your Energy Page

      @Test
      Scenario: Verify the display of Help text
          When user hovers over the question fields
          Then the user should be displayed with a help text box


