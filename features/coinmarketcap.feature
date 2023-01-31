Feature: Filtering UI and extracting data for comparison

Scenario: As a user I want to filter UI and extract data for comparison

Given I open the site
And I capture the details before filtering
When I click on filters
Then I click on Add filters
Then I toggle Mineable
And I click All Crytocurrencies
And I select Coins in All Crytocurrencies
Then I click on set price and set minvalue and maxvalue
Then I click on Apply fliters
And I click on show results
And I capture the details after filtering
Then I compare the results before filtering and after filtering