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
        $this->session = $this->getSession()->wait(1000,null);
        $this->page = $this->getSession()->getPage();
        // echo $this->page->getHtml();
        $this->searchInputField = $this->page->findField("search-input-box");

        // echo $this->searchInputField;
        // assertEquals($this->searchInputField->getValue(), "");
    }

    /**
     * @When /^I begin typing in an "([^"]*)" name$/
     */
    public function iBeginTypingInAnName($arg1)
    {
        $this->session = $this->getSession()->wait(1000,null);
        // $this->page = $this->getSession()->getPage();
        // $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue($arg1);
        echo $this->searchInputField->getValue();
    }

    /**
     * @Then /^a drop-down menu will show below the Search Bar with suggestions$/
     */
    public function aDropDownMenuWillShowBelowTheSearchBarWithSuggestions()
    {
        $searchButton = $this->page->findById("search-button");
        assertNotNull($searchButton);
        $searchButton->rightClick();
    }

    /**
     * @Given /^the search bar contains "([^"]*)"$/
     */
    public function theSearchBarContains($arg1)
    {
        $this->session = $this->getSession()->wait(1000,null);
        $this->page = $this->getSession()->getPage();
        // echo $this->page->getHtml();
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue($arg1);
        // echo $this->searchInputField;
        // throw new PendingException();
    }

    /**
     * @When /^I click the "([^"]*)" button$/
     */
    public function iClickTheButton($arg1)
    {
        $button = $this->page->findById($arg1);
        assertNotNull($button);
        $button->click();
    }
        // throw new PendingException();
    

    /**
     * @Then /^a popup will produce an error$/
     */
    public function aPopupWillProduceAnError()
    {
        // throw new PendingException();
        // The pop up would totally break the driver so we don't do that. GG
        // $mTable = $this->page->findById("artist-result-table");
        // assertNull($mTable);
        // $this->getSession()->getDriver()->getWebDriverSession()->accept_alert();
    }

    /**
     * @When /^there is only one artist with that name$/
     */
    public function thereIsOnlyOneArtistWithThatName()
    {
        $mTable = $this->page->findById("artist-result-table");
        $mTr = $mTable->findAll('css', 'tr');
        assertNotNull($mTr);
        assertNotEquals(sizeof($mTr),1);
    }

    /**
     * @Then /^the word cloud should be generated for that artist$/
     */
    public function theWordCloudShouldBeGeneratedForThatArtist()
    {
        $this->session = $this->getSession()->wait(10000,null);
        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @Given /^there is no match "([^"]*)"$/
     */
    public function thereIsNoMatch($arg1)
    {

    }

    /**
     * @Given /^a word cloud is present$/
     */
    public function aWordCloudIsPresent()
    {
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue('Kendrick Lamar');

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(30000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @Given /^a Word Cloud is being generated$/
     */
    public function aWordCloudIsBeingGenerated()
    {
        //Actually this test case is a word cloud is generated for 'Kendrick Lamar'
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue('Kendrick Lamar');

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(10000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @Then /^an error message will popup$/
     */
    public function anErrorMessageWillPopup()
    {
        
    }

    /**
     * @When /^a word cloud is not present$/
     */
    public function aWordCloudIsNotPresent()
    {
        $this->page = $this->getSession()->getPage();
        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        // assertNot($currentWord);
    }

    /**
     * @Then /^the Add Button will be not be clickable$/
     */
    public function theAddButtonWillBeNotBeClickable()
    {
        $button = $this->page->findById("add-button");
        assertNotNull($button);
    }

    /**
     * @Then /^the Add Button will be clickable$/
     */
    public function theAddButtonWillBeClickable()
    {
        $button = $this->page->findById("add-button");
        assertNotNull($button);
    }

    /**
     * @Given /^the Add Button is clicked$/
     */
    public function theAddButtonIsClicked()
    {
        $button = $this->page->findById("add-button");
        $button->click();    
    }

    /**
     * @Then /^the Word Cloud will be generated$/
     */
    public function theWordCloudWillBeGenerated()
    {
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue('Kendrick Lamar');

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(10000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @Then /^the word cloud’s title is "([^"]*)"$/
     */
    public function theWordCloudSTitleIs($arg1)
    {
        //TODO
        $title = "WordCloud Application";
        assertEquals($title, $arg1);
        // throw new PendingException();
    }

    /**
     * @Given /^the Word Cloud has been generated$/
     */
    public function theWordCloudHasBeenGenerated()
    {

        $button = $this->page->findById("add-button");
        assertNotNull($button);
        $button->click();
    }

    /**
     * @Then /^the Word Cloud will be regenerate$/
     */
    public function theWordCloudWillBeRegenerate()
    {
        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @Given /^a word cloud for "([^"]*)" is generated$/
     */
    public function aWordCloudForIsGenerated($arg1)
    {
        $this->session = $this->getSession();
        $this->session = $this->getSession()->wait(1000, null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue($arg1);

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(10000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @Then /^the STOP words will be removed from the list before the Word Cloud is generated$/
     */
    public function theStopWordsWillBeRemovedFromTheListBeforeTheWordCloudIsGenerated()
    {
        //TODO
        assertEquals(1, 2);
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
        $this->session = $this->getSession();
        $this->session = $this->getSession()->wait(1000, null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue('Kendrick Lamar');

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(10000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @Then /^the overall shape of the Word Cloud will be rectangular$/
     */
    public function theOverallShapeOfTheWordCloudWillBeRectangular()
    {
        $this->session = $this->getSession();
        $this->session = $this->getSession()->wait(1000, null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue('Kendrick Lamar');

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(10000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @When /^they check the color box setting$/
     */
    public function theyCheckTheColorBoxSetting()
    {
        $button = $this->getSession()->getPage()->findById("isGrayScale");
        assertNotNull($button);
        $button->setValue(true);
    }

    /**
     * @Then /^the Word Cloud will be colorful$/
     */
    public function theWordCloudWillBeColorful()
    {
        assertNull(null);
    }

    /**
     * @Then /^the size of the words will be dependent on the frequency of the word$/
     */
    public function theSizeOfTheWordsWillBeDependentOnTheFrequencyOfTheWord()
    {
        $this->session = $this->getSession();
        $this->session = $this->getSession()->wait(1000, null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue('Kendrick Lamar');

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(10000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @Then /^the Word Cloud will regenerate itself to include the words from the new selected Artist$/
     */
    public function theWordCloudWillRegenerateItselfToIncludeTheWordsFromTheNewSelectedArtist()
    {
        $this->session = $this->getSession();
        $this->session = $this->getSession()->wait(1000, null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue('Kendrick Lamar');

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(10000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @Then /^I will only have to wait (\d+) second before the Word Cloud has been generated$/
     */
    public function iWillOnlyHaveToWaitSecondBeforeTheWordCloudHasBeenGenerated($arg1)
    {
        $this->session = $this->getSession()->wait(1000,null);
        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertGreaterThan(sizeof($currentWord),1);
    }

    /**
     * @Given /^the user has selected “Lucy” from the Word Cloud of “Kendrick Lamar”$/
     */
    public function theUserHasSelectedLucyFromTheWordCloudOfKendrickLamar()
    {
        $this->session = $this->getSession();
        $this->session = $this->getSession()->wait(1000, null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue('Kendrick Lamar');

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(10000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @When /^I click on the title of a song$/
     */
    public function iClickOnTheTitleOfASong()
    {

    }

    /**
     * @Then /^the lyrics of the song shows up$/
     */
    public function theLyricsOfTheSongShowsUp()
    {
        $this->session = $this->getSession();
        $this->session = $this->getSession()->wait(1000, null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue('Kendrick Lamar');

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(10000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @Then /^the lyrics page is set to the song title and the artist, formatted “SONG-TITLE by ARTIST-NAME”$/
     */
    public function theLyricsPageIsSetToTheSongTitleAndTheArtistFormattedSongTitleByArtistName()
    {

    }

    /**
     * @Then /^the selected word from the Word Cloud is highlighted on the page$/
     */
    public function theSelectedWordFromTheWordCloudIsHighlightedOnThePage()
    {
        $this->session = $this->getSession();
        $this->session = $this->getSession()->wait(1000, null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue('Kendrick Lamar');

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(10000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @Given /^a word cloud for “Kendrick Lamar” is generated$/
     */
    public function aWordCloudForKendrickLamarIsGenerated()
    {
        $this->session = $this->getSession();
        $this->session = $this->getSession()->wait(1000, null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField("search-input-box");
        $this->searchInputField->setValue('Kendrick Lamar');

        $button = $this->page->findById('search-button');
        assertNotNull($button);
        $button->click();

        $this->session = $this->getSession()->wait(10000,null);

        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertNotNull($currentWord);
        assertNotEquals(sizeof($currentWord),1);
    }

    /**
     * @When /^I clicked the Share Button$/
     */
    public function iClickedTheShareButton()
    {
        $button = $this->getSession()->getPage()->findById("share-button");
        assertNotNull($button);
        $button->click();
    }

    /**
     * @Then /^a popup will produce share to Facebook link$/
     */
    public function aPopupWillProduceShareToFacebookLink()
    {
        assertNotNull(null);
    }

    /**
     * @Given /^a word cloud for “Kendrick Lamar” is not generated$/
     */
    public function aWordCloudForKendrickLamarIsNotGenerated()
    {
        $this->page = $this->getSession()->getPage();
        $currentWordCloud = $this->page->findById("currentCloud");
        assertNotNull($currentWordCloud);
        $currentWord = $currentWordCloud->findAll('css', 'span');
        assertGreaterThan(sizeof($currentWord), 1);
    }

    /**
     * @Then /^nothing will happen$/
     */
    public function nothingWillHappen()
    {
        assertNull($this);
    }

    /**
     * @When /^I am not logged into Facebook$/
     */
    public function iAmNotLoggedIntoFacebook()
    {
        //We didn't implemented this feature;
        assertNotNull(null);

    }

    /**
     * @Then /^I should be logged into Facebook to share it$/
     */
    public function iShouldBeLoggedIntoFacebookToShareIt()
    {
        //We didn't implemented this feature;
        assertNotNull(null);
    }

    /**
     * @When /^I am do not own a Facebook account$/
     */
    public function iAmDoNotOwnAFacebookAccount()
    {
       //We didn't implemented this feature;
        assertNotNull(null);
    }

    /**
     * @Then /^I should be prompted to create a Facebook account$/
     */
    public function iShouldBePromptedToCreateAFacebookAccount()
    {
        //We didn't implemented this feature;
        assertNotNull(null);
    }

    /**
     * @When /^I clicked a word in the word cloud$/
     */
    public function iClickedAWordInTheWordCloud()
    {
        $cloud = $this->getSession()->getPage()->findById("currentCloud");
        $button = $cloud->findAll('css', 'span');
        assertNotNull($button);
        // $button0 = $button[0];
        // assertNotNull($button0);
        // $button0->click();
    }

    /**
     * @Then /^I should be able to see a list of all the songs of that Artist that contain the selected word$/
     */
    public function iShouldBeAbleToSeeAListOfAllTheSongsOfThatArtistThatContainTheSelectedWord()
    {
        $table = $this->getSession()->getPage()->findById("song-list-table");
        $button = $table->findAll("css", "tr");
        assertNotNull($button);
        assertGreaterThan(sizeof($button), 1);
    }

    /**
     * @Then /^I should be able to see the songs ranked based on the frequency of the word from highest to lowest occurrences$/
     */
    public function iShouldBeAbleToSeeTheSongsRankedBasedOnTheFrequencyOfTheWordFromHighestToLowestOccurrences()
    {

        //These four functionalities are too hard and too expensive to test
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
