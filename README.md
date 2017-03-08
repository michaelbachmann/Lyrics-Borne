#LyricsBorne Frontend

##Running frontend development server
1. Install node.js
2. Run `cd src && npm install`
3. Start development server with `npm run dev`
4. Open your browser to `localhost:8080`

##Setting up behat
1. From the project root run `cd tests`
2. Run `curl -sS https://getcomposer.org/installer | php`
3. Run `php composer.phar update`
4. Run `bin/behat --init`
5. Download **[Selenium Stanalone Server 3.2.0](https://goo.gl/dR7Lg2)**
6. Copy `selenium-server-standalone-3.2.0.jar` into the tests directory
7. Download the appropriate **[WebDriver for Chrome](https://chromedriver.storage.googleapis.com/index.html?path=2.27/) version for your OS.
8. Copy the `chromedriver` executable into the tests directory.
9. Open a new terminal window, navigate to the tests directory and run `java -jar selenium-server-standalone-3.2.0.jar`
10. Open another new terminal window, navigate to the tests directory and run `./chromedriver`
11. From a seperate terminal window, navigate to the tests directory
12. If you added a feature file you can run `bin/behat --append-snippets` and it should ask you if you want to append the snippets to a Context, **type 1 and hit enter to select FeatureContext`
13. This FeatureContext corresponds to the file in `features/bootstrap/FeatureContext.php`
14. In the `FeatureContext.php` file change your class definition to `class FeatureContext extends Behat\MinkExtension\Context\MinkContext implements Context`
15. In one of the functions add 
```
$page = $this->getSession()->getPage();
$button = $page->findButton('search-button');
if (null === $button) {
    echo "button null";
} else {
    echo "omg i found it";
}
```
16. To run the tests from the root directory run `bin/behat`
