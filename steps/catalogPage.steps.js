const catalogPage = require('../pages/catalog.page')
const allure = require('@wdio/allure-reporter')


class CatalogPageSteps {

    openCategory(name) {
        // allure.startStep('Open specified category')
        browser.waitUntil(() => {
            return catalogPage.categoriesButtons.length > 0
        })
        catalogPage.clickCategoryButton(name)
    }

    openSubcategory(name) {
        // allure.startStep('Open specified subcategory')
        browser.waitUntil(() => {
            return catalogPage.subCategories.length > 0
        })
        catalogPage.moveToSubCategory(name)
    }

    openProductCategory(name) {
        // allure.startStep('Open specified product category')
        browser.waitUntil(() => {
            return catalogPage.productCategoriesButtons.length > 0
        })
        catalogPage.clickProductCategory(name)
    }

    markProductToCompare(index) {
        // allure.startStep('Mark product as "Compared"')
        browser.waitUntil(() => {
            return catalogPage.compareCheckboxes.length > 0
        })
        catalogPage.clickCompareCheckbox(index)
    }

    openCompareForm() {
        // allure.startStep('Open compare form')
        catalogPage.clickCompareButton()
    }

    getProductTitle(index) {
        // allure.startStep('Getting product title')
        browser.waitUntil(() => {
            return catalogPage.productsTitles.length > 0
        })
        return catalogPage.getProductTitle(index)
    }

    verifyCompare(url, title1, title2) {
        // allure.startStep('Verifying compare process')
        browser.waitUntil(() => {
            return catalogPage.comparedProducts.length === 2
        })
        assert.equal(true, browser.getUrl().includes(url))
        const compTitle1 = catalogPage.getComparedProductTitle(0)
        const compTitle2 = catalogPage.getComparedProductTitle(1)
        assert.equal(title1, compTitle1)
        assert.equal(title2, compTitle2)
    }

    clearCompare() {
        // allure.startStep('Clear compare popup')
        catalogPage.clickClearCompareButton()
    }

    openProductPage(index) {
        // allure.startStep('Opening specified product page')
        browser.waitUntil(() => {
            return catalogPage.productPageLinks.length > 0
        })
        catalogPage.clickProductPageLink(index)
    }

}

module.exports = new CatalogPageSteps()