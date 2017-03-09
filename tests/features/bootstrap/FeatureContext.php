<?php

use Behat\Behat\Tester\Exception\PendingException;
use Behat\Behat\Context\Context;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;
use PHPUnit\Framework\TestCase;

require_once './vendor/phpunit/phpunit/src/Framework/Assert/Functions.php';
require_once './vendor/autoload.php';

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends Behat\MinkExtension\Context\MinkContext implements Context, Behat\Behat\Context\CustomSnippetAcceptingContext
{
    // cause
    private $session;
    private $page;
    // element ID's
    private $searchInputField;
    private $currentCloud; // also has a class of word-cloud
    private $grayscaleLabel;
    private $grayscaleCheckbox;
    private $artistResultTable;
    private $searchButton;
    private $shareButton;
    private $addButton;
    private $songListTitle;
    private $songListTable;
    private $songListReturnToSearch;
    private $lyricsTitle;
    private $lyricsData;
    private $lyricsReturnToSearch;
    private $lyricsReturnToSongs;
    // element classes
    private $artistResult;
    private $artistImage;
    private $songResult;
    private $songResultCount;
    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct()
    {
    }
    
    public static function getAcceptedSnippetType()
    {
        return 'regex';
    }




    /**
     * @Then /^the search bar is empty$/
     */
    public function theSearchBarIsEmpty()
    {
        $this->session = $this->getSession()->wait(5000,null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField('search-input-box');
        assertEquals($this->searchInputField->getValue(), "");
    }

    /**
     * @When /^I begin typing in an "([^"]*)" name$/
     */
    public function iBeginTypingInAnName($arg1)
    {
        $this->session = $this->getSession()->wait(5000,null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField('search-input-box');
        $this->searchInputField->setValue($arg1);
    }

    /**
     * @Then /^a drop-down menu will show below the Search Bar with suggestions$/
     */
    public function aDropDownMenuWillShowBelowTheSearchBarWithSuggestions()
    {
        $searchButton = $this->page->getById($arg1);
        assertNotNull($searchButton);
        $searchButton->rightClick();
    }

    /**
     * @Given /^the search bar contains "([^"]*)"$/
     */
    public function theSearchBarContains($arg1)
    {
        throw new PendingException();
    }

    /**
     * @When /^I click the "([^"]*)" button$/
     */
    public function iClickTheButton($arg1)
    {
        throw new PendingException();
    }

    /**
     * @Then /^a popup will produce an error$/
     */
    public function aPopupWillProduceAnError()
    {
        throw new PendingException();
    }

    /**
     * @When /^there is only one artist with that name$/
     */
    public function thereIsOnlyOneArtistWithThatName()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the word cloud should be generated for that artist$/
     */
    public function theWordCloudShouldBeGeneratedForThatArtist()
    {
        throw new PendingException();
    }

    /**
     * @Given /^there is no match "([^"]*)"$/
     */
    public function thereIsNoMatch($arg1)
    {
        throw new PendingException();
    }

    /**
     * @Given /^a word cloud is present$/
     */
    public function aWordCloudIsPresent()
    {
        throw new PendingException();
    }

    /**
     * @Given /^a Word Cloud is being generated$/
     */
    public function aWordCloudIsBeingGenerated()
    {
        throw new PendingException();
    }

    /**
     * @Then /^an error message will popup$/
     */
    public function anErrorMessageWillPopup()
    {
        throw new PendingException();
    }

    /**
     * @When /^a word cloud is not present$/
     */
    public function aWordCloudIsNotPresent()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the Add Button will be not be clickable$/
     */
    public function theAddButtonWillBeNotBeClickable()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the Add Button will be clickable$/
     */
    public function theAddButtonWillBeClickable()
    {
        throw new PendingException();
    }

    /**
     * @Given /^the Add Button is clicked$/
     */
    public function theAddButtonIsClicked()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the Word Cloud will be generated$/
     */
    public function theWordCloudWillBeGenerated()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the word cloud’s title is "([^"]*)"$/
     */
    public function theWordCloudSTitleIs($arg1)
    {
        throw new PendingException();
    }

    /**
     * @Given /^the Word Cloud has been generated$/
     */
    public function theWordCloudHasBeenGenerated()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the Word Cloud will be regenerate$/
     */
    public function theWordCloudWillBeRegenerate()
    {
        throw new PendingException();
    }

    /**
     * @Given /^a word cloud for "([^"]*)" is generated$/
     */
    public function aWordCloudForIsGenerated($arg1)
    {
        throw new PendingException();
    }

    /**
     * @Then /^the STOP words will be removed from the list before the Word Cloud is generated$/
     */
    public function theStopWordsWillBeRemovedFromTheListBeforeTheWordCloudIsGenerated()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the other words above the (\d+) limit will be truncated$/
     */
    public function theOtherWordsAboveTheLimitWillBeTruncated($arg1)
    {
        throw new PendingException();
    }

    /**
     * @When /^the words are populating the Word Cloud$/
     */
    public function theWordsArePopulatingTheWordCloud()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the overall shape of the Word Cloud will be rectangular$/
     */
    public function theOverallShapeOfTheWordCloudWillBeRectangular()
    {
        throw new PendingException();
    }

    /**
     * @When /^they check the color box setting$/
     */
    public function theyCheckTheColorBoxSetting()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the Word Cloud will be colorful$/
     */
    public function theWordCloudWillBeColorful()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the size of the words will be dependent on the frequency of the word$/
     */
    public function theSizeOfTheWordsWillBeDependentOnTheFrequencyOfTheWord()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the Word Cloud will regenerate itself to include the words from the new selected Artist$/
     */
    public function theWordCloudWillRegenerateItselfToIncludeTheWordsFromTheNewSelectedArtist()
    {
        throw new PendingException();
    }

    /**
     * @Then /^I will only have to wait (\d+) second before the Word Cloud has been generated$/
     */
    public function iWillOnlyHaveToWaitSecondBeforeTheWordCloudHasBeenGenerated($arg1)
    {
        throw new PendingException();
    }

    /**
     * @Given /^the user has selected “Lucy” from the Word Cloud of “Kendrick Lamar”$/
     */
    public function theUserHasSelectedLucyFromTheWordCloudOfKendrickLamar()
    {
        throw new PendingException();
    }

    /**
     * @When /^I click on the title of a song$/
     */
    public function iClickOnTheTitleOfASong()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the lyrics of the song shows up$/
     */
    public function theLyricsOfTheSongShowsUp()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the lyrics page is set to the song title and the artist, formatted “SONG-TITLE by ARTIST-NAME”$/
     */
    public function theLyricsPageIsSetToTheSongTitleAndTheArtistFormattedSongTitleByArtistName()
    {
        throw new PendingException();
    }

    /**
     * @Then /^the selected word from the Word Cloud is highlighted on the page$/
     */
    public function theSelectedWordFromTheWordCloudIsHighlightedOnThePage()
    {
        throw new PendingException();
    }

    /**
     * @Given /^a word cloud for “Kendrick Lamar” is generated$/
     */
    public function aWordCloudForKendrickLamarIsGenerated()
    {
        throw new PendingException();
    }

    /**
     * @When /^I clicked the Share Button$/
     */
    public function iClickedTheShareButton()
    {
        throw new PendingException();
    }

    /**
     * @Then /^a popup will produce share to Facebook link$/
     */
    public function aPopupWillProduceShareToFacebookLink()
    {
        throw new PendingException();
    }

    /**
     * @Given /^a word cloud for “Kendrick Lamar” is not generated$/
     */
    public function aWordCloudForKendrickLamarIsNotGenerated()
    {
        throw new PendingException();
    }

    /**
     * @Then /^nothing will happen$/
     */
    public function nothingWillHappen()
    {
        throw new PendingException();
    }

    /**
     * @When /^I am not logged into Facebook$/
     */
    public function iAmNotLoggedIntoFacebook()
    {
        throw new PendingException();
    }

    /**
     * @Then /^I should be logged into Facebook to share it$/
     */
    public function iShouldBeLoggedIntoFacebookToShareIt()
    {
        throw new PendingException();
    }

    /**
     * @When /^I am do not own a Facebook account$/
     */
    public function iAmDoNotOwnAFacebookAccount()
    {
        throw new PendingException();
    }

    /**
     * @Then /^I should be prompted to create a Facebook account$/
     */
    public function iShouldBePromptedToCreateAFacebookAccount()
    {
        throw new PendingException();
    }

    /**
     * @When /^I clicked a word in the word cloud$/
     */
    public function iClickedAWordInTheWordCloud()
    {
        throw new PendingException();
    }

    /**
     * @Then /^I should be able to see a list of all the songs of that Artist that contain the selected word$/
     */
    public function iShouldBeAbleToSeeAListOfAllTheSongsOfThatArtistThatContainTheSelectedWord()
    {
        throw new PendingException();
    }

    /**
     * @Then /^I should be able to see the songs ranked based on the frequency of the word from highest to lowest occurrences$/
     */
    public function iShouldBeAbleToSeeTheSongsRankedBasedOnTheFrequencyOfTheWordFromHighestToLowestOccurrences()
    {
        throw new PendingException();
    }

    /**
     * @Then /^I should be able to see the occurrence of the selected word in parenthesis$/
     */
    public function iShouldBeAbleToSeeTheOccurrenceOfTheSelectedWordInParenthesis()
    {
        throw new PendingException();
    }

    /**
     * @When /^I am looking at the different Song names$/
     */
    public function iAmLookingAtTheDifferentSongNames()
    {
        throw new PendingException();
    }

    /**
     * @Then /^there will be two entries that mean the same thing, but are listed as separate entries in the list$/
     */
    public function thereWillBeTwoEntriesThatMeanTheSameThingButAreListedAsSeparateEntriesInTheList()
    {
        throw new PendingException();
    }
}
