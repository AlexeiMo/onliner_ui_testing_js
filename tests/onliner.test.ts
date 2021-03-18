import {HomePageSteps} from '../steps/homePage.steps'
import {CatalogPageSteps} from '../steps/catalogPage.steps'
import {ProductPageSteps} from '../steps/productPage.steps'
import {CartPageSteps} from '../steps/cartPage.steps'

const testData = require('../test_data/test.data')

describe('Onliner.by smoke tests', () => {

    const homePageSteps = new HomePageSteps()
    const catalogPageSteps = new CatalogPageSteps()
    const productPageSteps = new ProductPageSteps()
    const cartPageSteps = new CartPageSteps()

    it('should authorize user', () => {
        homePageSteps.openLoginForm()
        homePageSteps.enterCredentials(testData.login.login, testData.login.password)
        homePageSteps.submitCredentials()
        homePageSteps.verifyLogin()
    })
    it('should search item', () => {
        homePageSteps.searchItem(testData.search.searchOption)
        homePageSteps.verifySearchResults(testData.search.searchOption)
    })
    it('should navigate to catalog page', () => {
        homePageSteps.navigateToCategory(testData.navigation.category)
        homePageSteps.verifyNavigation(testData.navigation.categoryURL)
    })
    it('should compare 2 products', () => {
        homePageSteps.navigateToCategory(testData.navigation.category)
        catalogPageSteps.openCategory(testData.compare.category)
        catalogPageSteps.openSubcategory(testData.compare.subCategory)
        catalogPageSteps.openProductCategory(testData.compare.productCategory)
        catalogPageSteps.markProductToCompare(0)
        catalogPageSteps.markProductToCompare(1)
        const title1 = catalogPageSteps.getProductTitle(0)
        const title2 = catalogPageSteps.getProductTitle(1)
        catalogPageSteps.openCompareForm()
        catalogPageSteps.verifyCompare(testData.compare.compareUrl, title1, title2)
    })
    describe('order test', () => {
        it('should create an order', () => {
            homePageSteps.navigateToCategory(testData.navigation.category)
            catalogPageSteps.openCategory(testData.compare.category)
            catalogPageSteps.openSubcategory(testData.compare.subCategory)
            catalogPageSteps.openProductCategory(testData.compare.productCategory)
            catalogPageSteps.openProductPage(0)
            productPageSteps.moveToProductTraders()
            productPageSteps.acceptLocation()
            productPageSteps.addProductToCart(0)
            productPageSteps.openCartPage()
            cartPageSteps.createOrder()
            cartPageSteps.verifyOrderPage(testData.order.orderUrl, testData.order.orderTitle)
        })
        after(() => {
            productPageSteps.removeProduct(testData.order.removeProductUrl)
        })
    })
})
