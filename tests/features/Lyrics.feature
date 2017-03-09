Feature: Get lyrics for song.
	Should expect the songs lyrics to be returned after clicking on the Song Title from the list of songs. 

	@javascript
	Scenario: Once a song is clicked, the lyrics show up
		Given I am on "/"	 
		And a word cloud for "Kendrick Lamar" is generated
		And the user has selected “Lucy” from the Word Cloud of “Kendrick Lamar”
		When I click on the title of a song
		Then the lyrics of the song shows up

	@javascript
	Scenario: The title of the lyrics page is set to the song title and the artist, formatted “SONG-TITLE by ARTIST-NAME”
		Given I am on "/"	 
		And a word cloud for "Kendrick Lamar" is generated
		And the user has selected “Lucy” from the Word Cloud of “Kendrick Lamar”
		When I click on the title of a song
		Then the lyrics page is set to the song title and the artist, formatted “SONG-TITLE by ARTIST-NAME”

	@javascript
	Scenario: The selected word from the Word Cloud is highlighted on the page.
		Given I am on "/"	 
		And a word cloud for "Kendrick Lamar" is generated
		And the user has selected “Lucy” from the Word Cloud of “Kendrick Lamar”
		When I click on the title of a song
		Then the selected word from the Word Cloud is highlighted on the page
