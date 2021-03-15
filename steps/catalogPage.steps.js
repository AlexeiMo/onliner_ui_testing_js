const catalogPage = require('../pages/catalog.page')
const allure = require('@wdio/allure-reporter').default
const log = require('@wdio/logger').default
const logger = log('test-basic')


class CatalogPageSteps {

    get openCatMsg() { return 'Open specified category' }
    get openSubCatMsg() { return 'Open specified subcategory' }
    get openProdCatMsg() { return 'Open specified product category' }
    get markProdMsg() { return 'Mark product as "Compared"' }
    get openComp() { return 'Open compare form' }
    get getProdTitleMsg() { return 'Getting product title'}
    get verifyCompMsg() { return 'Verifying compare process'}
    get clearCompMsg() { return 'Clear compare popup'}
    get openProdPageMsg() { return 'Opening specified product page'}

    openCategory(name) {
        logger.info(this.openCatMsg)
        allure.startStep(this.openCatMsg)
        browser.waitUntil(() => {
            return catalogPage.categoriesButtons.length > 0
        })
        catalogPage.clickCategoryButton(name)
        allure.endStep()
    }

    openSubcategory(name) {
        logger.info(this.openSubCatMsg)
        allure.startStep(this.openSubCatMsg)
        browser.waitUntil(() => {
            return catalogPage.subCategories.length > 0
        })
        catalogPage.moveToSubCategory(name)
        allure.endStep()
    }

    openProductCategory(name) {
        logger.info(this.openProdCatMsg)
        allure.startStep(this.openProdCatMsg)
        browser.waitUntil(() => {
            return catalogPage.productCategoriesButtons.length > 0
        })
        catalogPage.clickProductCategory(name)
        allure.endStep()
    }

    markProductToCompare(index) {
        logger.info(this.markProdMsg)
        allure.startStep(this.markProdMsg)
        browser.waitUntil(() => {
            return catalogPage.compareCheckboxes.length > 0
        })
        catalogPage.clickCompareCheckbox(index)
        allure.endStep()
    }

    openCompareForm() {
        logger.info(this.openComp)
        allure.startStep(this.openComp)
        catalogPage.clickCompareButton()
        allure.endStep()
    }

    getProductTitle(index) {
        logger.info(this.getProdTitleMsg)
        allure.startStep(this.getProdTitleMsg)
        browser.waitUntil(() => {
            return catalogPage.productsTitles.length > 0
        })
        allure.endStep()
        return catalogPage.getProductTitle(index)
    }

    verifyCompare(url, title1, title2) {
        logger.info(this.verifyCompMsg)
        allure.startStep(this.verifyCompMsg)
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
        logger.info(this.clearCompMsg)
        allure.startStep(this.clearCompMsg)
        catalogPage.clickClearCompareButton()
        allure.endStep()
    }

    openProductPage(index) {
        logger.info(this.openProdPageMsg)
        allure.startStep(this.openProdPageMsg)
        browser.waitUntil(() => {
            return catalogPage.productPageLinks.length > 0
        })
        catalogPage.clickProductPageLink(index)
        allure.endStep()
    }

}

module.exports = new CatalogPageSteps()