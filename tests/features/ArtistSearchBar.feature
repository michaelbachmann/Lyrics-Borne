Feature: Artist Search Bar
	The Search Bar is supposed to allow me to be able to 
	search for a song artist and generate a drop-down 
	menu beneath the Search Bar. 

	@javascript
	Scenario: Search Bar is empty when the page first loads.
		Given I am on "/"
		Then the search bar is empty

	@javascript
	Scenario: Search Bar clicked from Word Cloud Page.
		Given I am on "/"
		And the search bar is empty
		When I begin typing in an "an artists" name
		Then a drop-down menu will show below the Search Bar with suggestions		

	@javascript
	Scenario: No artist entered
		Given I am on "/"
		And the search bar contains ""
		When I click the "search-button" button
		Then a popup will produce an error

	@javascript
	Scenario: Artist name is spelled incorrectly
		Given I am on "/"
		And the search bar contains "Kedrik Lamar"
		When I click the "search-button" button
		Then a popup will produce an error

	@javascript
	Scenario: Multiple artists with the same name
		Given I am on "/"
		And the search bar contains "Everest"
		When I click the "search-button" button
		Then a drop-down menu will show below the Search Bar with suggestions

	@javascript
	Scenario: Artist name is spelled correctly
		Given I am on "/"
		And the search bar contains "Kendrick Lamar"
		When I click the "search-button" button
		And there is only one artist with that name
		Then the word cloud should be generated for that artist

	@javascript
	Scenario: Artist name is partially entered
		Given I am on "/"
		And the search bar contains "Kendrick"
		And there is no match "Kendrick"
		Then a popup will produce an error

	@javascript
	Scenario: Search for a second artist to add to the cloud
		Given I am on "/"
		And a word cloud is present
		And the search bar contains "Metallica"
		When I click the "search-button" button
		Then a drop-down menu will show below the Search Bar with suggestions
