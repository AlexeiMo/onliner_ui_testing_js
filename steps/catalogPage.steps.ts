import {CatalogPage} from 'pages/catalog.page';
import chai from 'chai';
const expect = chai.expect;
import {Advised} from "aspect.js";
import LoggerAspect from "../utils/logger.aspect";


@Advised(LoggerAspect)
export class CatalogPageSteps{

    private catalogPage = new CatalogPage();

    public openCategory(name: string) {
        browser.waitUntil(() => {
            return this.catalogPage.categoriesButtons.length > 0;
        })
        this.catalogPage.clickCategoryButton(name);
    }

    public openSubcategory(name: string) {
        browser.waitUntil(() => {
            return this.catalogPage.subCategories.length > 0;
        })
        this.catalogPage.moveToSubCategory(name);
    }

    public openProductCategory(name: string) {
        browser.waitUntil(() => {
            return this.catalogPage.productCategoriesButtons.length > 0;
        })
        this.catalogPage.clickProductCategory(name);
    }

    public markProductToCompare(index: number) {
        browser.waitUntil(() => {
            return this.catalogPage.compareCheckboxes.length > 0;
        })
        this.catalogPage.clickCompareCheckbox(index);
    }

    public openCompareForm() {
        this.catalogPage.clickCompareButton();
    }

    public getProductTitle(index: number) {
        browser.waitUntil(() => {
            return this.catalogPage.productsTitles.length > 0;
        })
        return this.catalogPage.getProductTitle(index);
    }

    public verifyCompare(url: string, title1: string, title2: string) {
        browser.waitUntil(() => {
            return this.catalogPage.comparedProducts.length === 2;
        })
        expect(browser.getUrl().includes(url)).to.equal(true);
        const compTitle1 = this.catalogPage.getComparedProductTitle(0);
        const compTitle2 = this.catalogPage.getComparedProductTitle(1);
        expect(compTitle1).to.equal(title1);
        expect(compTitle2).to.equal(title2);
    }

    public clearCompare() {
        this.catalogPage.clickClearCompareButton();
    }

    public openProductPage(index: number) {
        browser.waitUntil(() => {
            return this.catalogPage.productPageLinks.length > 0;
        })
        this.catalogPage.clickProductPageLink(index);
    }
}
