import test, { Page, expect } from "@playwright/test";
import UIActions from "framework/actions/UIActions";
import Assert from "framework/asserts/Assert";
import PDPPageConstants from "framework/constants/PDPPageConstatnts";
import PDPPage from "../pages/PDPPage";

export default class PDPFunctions {
    private ui: UIActions;

    public getPage(): Page {
        return this.page;
    }

    constructor(private page: Page) {
        this.ui = new UIActions(page);
    }

    // Add Product to Cart
    public async selectCollor(Color: string) {
        let COLOR = `(//input[@value="${Color}"]/..)[1]`

        await test.step(`Select Item Color`, async () => {
            await this.page.waitForTimeout(200);
            await this.page.locator(COLOR).click();
        });
    }
    public async selectSize(Size: string) {
        let SIZE = `(//*[@value="${Size}"]/..)[1]`

        await test.step(`Select Item Size`, async () => {
            await this.page.locator(SIZE).click();
        });
    }

    public async addItemToCart(){
        await test.step('Add item to cart', async() => {
            await this.ui.element(PDPPage.ADD_ITEM_TO_CART_BUTTON,'Add item to cart button').waitForPresent();
            await this.ui.element(PDPPage.ADD_ITEM_TO_CART_BUTTON,'Add item to cart button').click();
        })
    }

}
