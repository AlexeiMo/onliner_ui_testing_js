export class CatalogPage {

    get categoriesButtons() {
        return $$('.catalog-navigation-classifier__item-title-wrapper');
    }

    get subCategories() {
        return $$('.catalog-navigation-list__aside-title');
    }

    get productCategoriesButtons() {
        return $$('.catalog-navigation-list__aside-item.catalog-navigation-list__aside-item_active .catalog-navigation-list__dropdown-title');
    }

    get productsTitles() {
        return $$('.schema-product__title span');
    }

    get compareCheckboxes() {
        return $$('.schema-product__control');
    }

    get compareButton() {
        return $('#compare-button-container .compare-button.compare-button_visible');
    }

    get comparedProducts() {
        return $$('.product-table__row.product-table__row_header.product-table__row_top .product-summary__caption');
    }

    get clearCompareButton() {
        return $('.compare-button__state.compare-button__state_clear.compare-button__state_hidden');
    }

    get productPageLinks() {
        return $$('.schema-product__title span');
    }

    public clickCategoryButton(text: string) {
        for (let button of this.categoriesButtons) {
            button.waitForDisplayed();
            if (button.getText() === text) {
                button.click();
                break;
            }
        }
    }

    public moveToSubCategory(text: string) {
        for (let el of this.subCategories) {
            el.waitForDisplayed();
            if (el.getText() === text) {
                el.moveTo();
                break;
            }
        }
    }

    public clickProductCategory(text: string) {
        for (let button of this.productCategoriesButtons) {
            button.waitForDisplayed();
            if (button.getText() === text) {
                button.click();
                break;
            }
        }
    }

    public clickCompareCheckbox(index: number) {
        this.compareCheckboxes[index].waitForDisplayed();
        this.compareCheckboxes[index].click();
    }

    public clickCompareButton() {
        this.compareButton.waitForDisplayed();
        this.compareButton.click();
    }

    public getProductTitle(index: number) {
        this.productsTitles[index].waitForDisplayed();
        return this.productsTitles[index].getText();
    }

    public getComparedProductTitle(index: number) {
        this.comparedProducts[index].waitForDisplayed();
        return this.comparedProducts[index].getText();
    }

    public clickClearCompareButton() {
        this.clearCompareButton.waitForExist();
        this.clearCompareButton.click();
    }

    public clickProductPageLink(index: number) {
        this.productPageLinks[index].waitForDisplayed();
        this.productPageLinks[index].click();
    }
}
