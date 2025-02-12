import test, { Page, expect } from "@playwright/test";
import UIActions from "framework/actions/UIActions";
// import Assert from "@asserts/Assert";
import CommonConstants from "framework/constants/CommonConstants";
import HomePageConstants from "framework/constants/HomePageConstants";
import HomePage from "../pages/HomePage";
import UIElementActions from "framework/actions/UIElementActions";
import AlertActions from "framework/actions/AlertActions";
import PLPage from "pages/PLPage";
import PDPPage from "pages/PDPPage";
import SideCart from "pages/SideCart";


export default class SideCartFunctions {    
    private ui: UIActions;
    private ae: AlertActions;

    public getPage(): Page {
        return this.page;
    }

    constructor(private page: Page) {
        this.ui = new UIActions(page);
        this.ae = new AlertActions(page);
    }

    public async verifyItemsInCart(){
        await test.step('Verify that itemas are present in the cart', async() =>{
        await this.ui.element(SideCart.ITEMS_IN_CART,'verify that item is present in cart').waitForPresent();
        })
    } 

    public async clickCheckOutButton(){
        await test.step('Click the checkout button', async() =>{
        await this.ui.element(SideCart.CHECK_OUT_BUTTON,'Click the checkout button').click();
        })
    } 
    
    
}