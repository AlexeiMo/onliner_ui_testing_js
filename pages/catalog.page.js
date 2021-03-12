class CatalogPage {

    get categoriesButtons() {
        return $$('.catalog-navigation-classifier__item-title-wrapper')
    }

    get subCategories() {
        return $$('.catalog-navigation-list__aside-title')
    }

    get productCategoriesButtons() {
        return $$('.catalog-navigation-list__dropdown-title')
    }

    get productsField() {
        return $('.js-schema-results.schema-grid__center-column')
    }

    get productsTitles() {
        return $$('.schema-product__title span')
    }

    get compareCheckboxes() {
        return $$('.i-checkbox.i-checkbox_yellow')
    }

    get compareButton() {
        return $('#compare-button-container .compare-button.compare-button_visible')
    }

    get comparedProducts() {
        return $$('.product-table__row.product-table__row_header.product-table__row_top .product-summary__caption')
    }

    clickCategoryButton(text) {
        for(let button of this.categoriesButtons) {
            button.waitForDisplayed()
            if (button.getText() === text) {
                button.click()
                break
            }
        }
    }

    moveToSubCategory(text) {
        for(let el of this.subCategories) {
            el.waitForDisplayed()
            if (el.getText() === text) {
                el.moveTo()
                break
            }
        }
    }

    clickProductCategory(text) {
        for(let button of this.productCategoriesButtons) {
            button.waitForDisplayed()
            console.log(button.getText())
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
}
module.exports = new CatalogPage()