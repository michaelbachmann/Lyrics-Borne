Feature: Share Word Cloud on Facebook
	I should have the ability to share the Word Cloud that was generated as an image to Facebook.

	@javascript
	Scenario: Image is created from the Word Cloud. 
		Given a word cloud for “Kendrick Lamar” is generated 
		When I clicked the Share Button
		Then a popup will produce share to Facebook link

	@javascript
	Scenario: No word cloud is present.
		Given a word cloud for “Kendrick Lamar” is not generated 
		When I clicked the Share Button
		Then nothing will happen

	@javascript
	Scenario: I have not logged into Facebook.
		Given a word cloud for “Kendrick Lamar” is generated 
		And I clicked the Share Button
		When I am not logged into Facebook
		Then I should be logged into Facebook to share it 

	@javascript
	Scenario: I do not  have a Facebook account.
		Given a word cloud for “Kendrick Lamar” is generated 
		And I clicked the Share Button
		When I am do not own a Facebook account
		Then I should be prompted to create a Facebook account 
