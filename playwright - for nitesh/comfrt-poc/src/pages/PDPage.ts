export default class PDPage {
    static readonly ADD_ITEM_TO_CART_BUTTON_MAIN = '//button[@type="submit"]/div[contains(text(),"In-Stock: Ready to Ship")]';
    static readonly ADD_PRE_ORDER_TO_CART_BUTTON = '//*[contains(text(),"Add Pre-Order to Cart")]';
    static readonly CHECKOUT = '//button[text()="Checkout"]';
    static readonly PRODUCT_TITLE = '//*[contains(@id, "product_hero_title")]/h1';
    static readonly PRODUCT_DISCOUNTED_PRICE = '(//*[contains(@id, "product_hero_price")]/div/h2/span)[2]'; // This locator is for items that HAVE a discount price
    static readonly PRODUCT_PRICE = '(//*[contains(@id, "product_hero_price")]/div/h2/span)[1]';  //This locator is forunt products that DO NOT HAVE a discount price
    static readonly SOULD_OUT = '//button[@type="submit"]/span[contains(text(),"Sold Out")]';
}