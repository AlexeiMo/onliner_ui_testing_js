const catalogPage = require('../pages/catalog.page')


class CatalogPageSteps {
    openCategory(name) {
        browser.waitUntil(() => {
            return catalogPage.categoriesButtons.length > 0
        })
        catalogPage.clickCategoryButton(name)
    }

    openSubcategory(name) {
        browser.waitUntil(() => {
            return catalogPage.subCategories.length > 0
        })
        catalogPage.moveToSubCategory(name)
    }

    openProductCategory(name) {
        browser.waitUntil(() => {
            return catalogPage.productCategoriesButtons.length > 0
        })
        catalogPage.clickProductCategory(name)
    }

    markProductToCompare(index) {
        browser.waitUntil(() => {
            return catalogPage.compareCheckboxes.length > 0
        })
        catalogPage.clickCompareCheckbox(index)
    }

    openCompareForm() {
        catalogPage.clickCompareButton()
    }

    getProductTitle(index) {
        browser.waitUntil(() => {
            return catalogPage.productsTitles.length > 0
        })
        return catalogPage.getProductTitle(index)
    }

    verifyCompare(url, title1, title2) {
        browser.waitUntil(() => {
            return catalogPage.comparedProducts.length === 2
        })
        assert.equal(true, browser.getUrl().includes(url))
        const compTitle1 = catalogPage.getComparedProductTitle(0)
        const compTitle2 = catalogPage.getComparedProductTitle(1)
        assert.equal(title1, compTitle1)
        assert.equal(title2, compTitle2)
    }

}

module.exports = new CatalogPageSteps()