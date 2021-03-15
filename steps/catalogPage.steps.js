const catalogPage = require('../pages/catalog.page')
const allure = require('@wdio/allure-reporter').default
const log = require('@wdio/logger').default
const logger = log('test-basic')


class CatalogPageSteps {

    openCategory(name) {
        logger.info('Open specified category')
        allure.startStep('Open specified category')
        browser.waitUntil(() => {
            return catalogPage.categoriesButtons.length > 0
        })
        catalogPage.clickCategoryButton(name)
        allure.endStep()
    }

    openSubcategory(name) {
        logger.info('Open specified subcategory')
        allure.startStep('Open specified subcategory')
        browser.waitUntil(() => {
            return catalogPage.subCategories.length > 0
        })
        catalogPage.moveToSubCategory(name)
        allure.endStep()
    }

    openProductCategory(name) {
        logger.info('Open specified product category')
        allure.startStep('Open specified product category')
        browser.waitUntil(() => {
            return catalogPage.productCategoriesButtons.length > 0
        })
        catalogPage.clickProductCategory(name)
        allure.endStep()
    }

    markProductToCompare(index) {
        logger.info('Mark product as "Compared"')
        allure.startStep('Mark product as "Compared"')
        browser.waitUntil(() => {
            return catalogPage.compareCheckboxes.length > 0
        })
        catalogPage.clickCompareCheckbox(index)
        allure.endStep()
    }

    openCompareForm() {
        logger.info('Open compare form')
        allure.startStep('Open compare form')
        catalogPage.clickCompareButton()
        allure.endStep()
    }

    getProductTitle(index) {
        logger.info('Getting product title')
        allure.startStep('Getting product title')
        browser.waitUntil(() => {
            return catalogPage.productsTitles.length > 0
        })
        allure.endStep()
        return catalogPage.getProductTitle(index)
    }

    verifyCompare(url, title1, title2) {
        logger.info('Verifying compare process')
        allure.startStep('Verifying compare process')
        browser.waitUntil(() => {
            return catalogPage.comparedProducts.length === 2
        })
        assert.equal(true, browser.getUrl().includes(url))
        const compTitle1 = catalogPage.getComparedProductTitle(0)
        const compTitle2 = catalogPage.getComparedProductTitle(1)
        assert.equal(title1, compTitle1)
        assert.equal(title2, compTitle2)
        allure.endStep()
    }

    clearCompare() {
        logger.info('Clear compare popup')
        allure.startStep('Clear compare popup')
        catalogPage.clickClearCompareButton()
        allure.endStep()
    }

    openProductPage(index) {
        logger.info('Opening specified product page')
        allure.startStep('Opening specified product page')
        browser.waitUntil(() => {
            return catalogPage.productPageLinks.length > 0
        })
        catalogPage.clickProductPageLink(index)
        allure.endStep()
    }

}

module.exports = new CatalogPageSteps()