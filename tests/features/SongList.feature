Feature: Songs List / Get songs and frequency for selected word from Word Cloud.
	Once a word has been selected from the Word Cloud, a new page will display all of the different songs that contain the selected word and their respective frequencies within that song. 

	@javascript
	Scenario: Word is clicked in the Word Cloud, a list should show up with all of the songs of the searched Artist(s) that contain the clicked word
		Given a word cloud for “Kendrick Lamar” is generated
		When I clicked a word in the word cloud
		Then I should be able to see a list of all the songs of that Artist that contain the selected word 

	@javascript
	Scenario: The songs are sorted in descending order according to the word’s occurrence frequency
		Given the user has selected “Lucy” from the Word Cloud of “Kendrick Lamar”
		Then I should be able to see the songs ranked based on the frequency of the word from highest to lowest occurrences

	@javascript
	Scenario: Each of the song title is shown with the occurrence of the word in parenthesis
		Given the user has selected “Lucy” from the Word Cloud of “Kendrick Lamar”
		Then I should be able to see the occurrence of the selected word in parenthesis 

	@javascript
	Scenario: Two of the songs are the same but the string is different.
		Given the user has selected “Lucy” from the Word Cloud of “Kendrick Lamar”
		When I am looking at the different Song names 
		Then there will be two entries that mean the same thing, but are listed as separate entries in the list
