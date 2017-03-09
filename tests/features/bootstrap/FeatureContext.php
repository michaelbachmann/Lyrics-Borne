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
     * @Given /^I am on “\/”$/
     */
    public function iAmOn()
    {
         assertEquals("dick", "pussy");
        // throw new PendingException();
    }

    /**
     * @Then /^the search bar contains “”$/
     */
    public function theSearchBarContains()
    {
        throw new PendingException();
    }

    /**
     * @When /^I begin typing in an Artist’s name$/
     */
    public function iBeginTypingInAnArtistSName()
    {
        throw new PendingException();
    }

    /**
     * @Then /^a drop-down menu will show below the Search Bar with suggestions$/
     */
    public function aDropDownMenuWillShowBelowTheSearchBarWithSuggestions()
    {
        throw new PendingException();
    }

    /**
     * @When /^I click the “search-button” button$/
     */
    public function iClickTheSearchButtonButton()
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
     * @Given /^the search bar contains “Kedrik Lamar”$/
     */
    public function theSearchBarContainsKedrikLamar()
    {
        throw new PendingException();
    }

    /**
     * @Given /^the search bar contains “Everest”$/
     */
    public function theSearchBarContainsEverest()
    {
        throw new PendingException();
    }

    /**
     * @Given /^the search bar contains “Kendrick Lamar”$/
     */
    public function theSearchBarContainsKendrickLamar()
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
     * @Given /^the search bar contains “Kendrick”$/
     */
    public function theSearchBarContainsKendrick()
    {
        throw new PendingException();
    }

    /**
     * @Given /^there is no match “Kendrick”$/
     */
    public function thereIsNoMatchKendrick()
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
     * @Given /^the search bar contains “Metallica”$/
     */
    public function theSearchBarContainsMetallica()
    {
        throw new PendingException();
    }
}
