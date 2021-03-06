# Webdriver Testing

Selenium testing using WebdriverIO framework for "https://onliner.by"


## Key Features
- Tests are written in JavaScript (mocha)
- Tests can be run on Google Chrome browser

## Repo Layout

- onliner_ui_testing_js/pages - Page objects used to manipulate with test pages
- onliner_ui_testing_js/steps - Steps which are used in tests
- onliner_ui_testing_js/tests - tests which can be run on mocha
- onliner_ui_testing_js/test_data - files with data which is used in tests

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
1. npm run build (build JS files from TS sources)
2. npm run test (run Onliner UI tests)
3. npm run report (generate allure report)