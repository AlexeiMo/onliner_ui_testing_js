# Webdriver Testing

Selenium testing using WebdriverIO framework for "https://onliner.by"


## Key Features
- Tests are written in JavaScript (mocha)
- Tests can be run on Google Chrome browser

## Repo Layout

- onliner_ui_testing_js/pages - Page objects used to manipulate with test pages
- onliner_ui_testing_js/tests - tests which can be run on mocha

## Config
- onliner_ui_testing_js/package.json - file which is used to install dependencies
- onliner_ui_testing_js/wdio.conf.js - configuration file for WebdriverIO framework


## Usage

### Install/Build
Run commands in terminal IDE:
1. Install node JS
2. npm install


### Run Project Tests (Locally)
Run commands in terminal IDE:
1. npm run test (run Onliner UI tests)
2. allure generate allure-results --clean -o allure-report (generate allure report)