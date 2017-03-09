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
     * @Given /^the search bar contains "([^"]*)"$/
     */
    public function theSearchBarContains($arg1)
    {
        $this->session = $this->getSession()->wait(5000,null);
        $this->page = $this->getSession()->getPage();
        $this->searchInputField = $this->page->findField('search-input-box');

        // throw new PendingException();
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
        // throw new PendingException();
    }

    /**
     * @Then /^a drop-down menu will show below the Search Bar with suggestions$/
     */
    public function aDropDownMenuWillShowBelowTheSearchBarWithSuggestions()
    {
        throw new PendingException();
    }

    /**
     * @When /^I click the "([^"]*)" button$/
     */
    public function iClickTheButton($arg1)
    {
        $this->page->getById($arg1)->rightClick();
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
}
