class CatalogPage {

    get categoriesButtons() {
        return $$('.catalog-navigation-classifier__item-title-wrapper')
    }

    get subCategories() {
        return $$('.catalog-navigation-list__aside-title')
    }

    get productCategoriesButtons() {
        return $$('.catalog-navigation-list__aside-item.catalog-navigation-list__aside-item_active .catalog-navigation-list__dropdown-title')
    }

    get productsTitles() {
        return $$('.schema-product__title span')
    }

    get compareCheckboxes() {
        return $$('.schema-product__control')
    }

    get compareButton() {
        return $('#compare-button-container .compare-button.compare-button_visible')
    }

    get comparedProducts() {
        return $$('.product-table__row.product-table__row_header.product-table__row_top .product-summary__caption')
    }

    get clearCompareButton() {
        return $('.compare-button__state.compare-button__state_clear.compare-button__state_hidden')
    }

    get productPageLinks() {
        return $$('.schema-product__title span')
    }

    clickCategoryButton(text) {
        for (let button of this.categoriesButtons) {
            button.waitForDisplayed()
            if (button.getText() === text) {
                button.click()
                break
            }
        }
    }

    moveToSubCategory(text) {
        for (let el of this.subCategories) {
            el.waitForDisplayed()
            if (el.getText() === text) {
                el.moveTo()
                break
            }
        }
    }

    clickProductCategory(text) {
        for (let button of this.productCategoriesButtons) {
            button.waitForDisplayed()
            if (button.getText() === text) {
                button.click()
                break
            }
        }
    }

    clickCompareCheckbox(index) {
        this.compareCheckboxes[index].waitForDisplayed()
        this.compareCheckboxes[index].click()
    }

    clickCompareButton() {
        this.compareButton.waitForDisplayed()
        this.compareButton.click()
    }

    getProductTitle(index) {
        this.productsTitles[index].waitForDisplayed()
        return this.productsTitles[index].getText()
    }

    getComparedProductTitle(index) {
        this.comparedProducts[index].waitForDisplayed()
        return this.comparedProducts[index].getText()
    }

    clickClearCompareButton() {
        this.clearCompareButton.waitForExist()
        this.clearCompareButton.click()
    }

    clickProductPageLink(index) {
        this.productPageLinks[index].waitForDisplayed()
        this.productPageLinks[index].click()
    }
}

module.exports = new CatalogPage()