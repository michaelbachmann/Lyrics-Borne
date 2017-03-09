Feature: Generate Word Cloud 
	if I have selected an artist and wants a Word Cloud to be generated showing the Word Cloud

	@javascript
	Scenario: Artist does not exist
		Given I am on "/"
		And the search bar contains "Li@$@(@" 
		And there is no match "Li@$@(@" 
		And a Word Cloud is being generated
		Then an error message will popup

	@javascript
	Scenario: The Add Button is not clickable when a word cloud is not present
		Given I am on "/"
		When a word cloud is not present
		Then the Add Button will be not be clickable 

	@javascript
	Scenario: The Add Button is clickable when a word cloud is present
		Given I am on "/"
		When a word cloud is present
		Then the Add Button will be clickable

	@javascript
	Scenario: When clicked the Add Button, I am brought to a Word Cloud for the selected Artist
		Given I am on "/"
		And the search bar contains "Kendrick Lamar"
		And the Add Button is clicked
		Then the Word Cloud will be generated 

	@javascript
	Scenario: The Word Cloud is titled with the artist name that I have Clicked
		Given I am on "/"
		And the search bar contains "Kendrick Lamar"
		And I click the "search-button" button
		And there is only one artist with that name
		And a word cloud is present
		Then the word cloud’s title is "Kendrick Lamar"

	@javascript
	Scenario: When I have added another artist, the Word Cloud is reinitialized with all the current artist(s) and the additional artist, delimited by commas
		Given I am on "/" 
		And the search bar contains "Kendrick Lamar" 
		And I click the "search-button" button 
		And the Word Cloud has been generated 
		And the search bar contains "Drake" 
		When the Add Button is clicked
		Then the Word Cloud will be regenerate 

	@javascript
	Scenario: The Word Cloud omits STOP words (commonly used words)
		Given a word cloud for "Kendrick Lamar" is generated
		Then the STOP words will be removed from the list before the Word Cloud is generated

	@javascript
	Scenario: The Word Cloud contains a maximum of 250 words
		Given a word cloud for "Kendrick Lamar" is generated
		Then the other words above the 250 limit will be truncated

	@javascript
	Scenario: The Word Cloud is rectangular
		Given a word cloud for "Kendrick Lamar" is generated
		When the words are populating the Word Cloud 
		Then the overall shape of the Word Cloud will be rectangular

	@javascript
	Scenario: The Word Cloud is colorful
		Given a word cloud for "Kendrick Lamar" is generated
		When they check the color box setting 
		Then the Word Cloud will be colorful

	@javascript
	Scenario: The size of the words in Word Cloud should be proportional to the frequency of the word’s occurrence
		Given a word cloud for "Kendrick Lamar" is generated
		Then the size of the words will be dependent on the frequency of the word

	@javascript
	Scenario: When an additional artist is searched and clicked, their data is added to the Word Cloud
		Given a word cloud for "Kendrick Lamar" is generated
		And the search bar contains "Drake" 
		When the Add Button is clicked
		Then the Word Cloud will regenerate itself to include the words from the new selected Artist 

	@javascript
	Scenario: The Word Cloud is generated within 1 second
		Given a word cloud for "Kendrick Lamar" is generated
		Then I will only have to wait 1 second before the Word Cloud has been generated 