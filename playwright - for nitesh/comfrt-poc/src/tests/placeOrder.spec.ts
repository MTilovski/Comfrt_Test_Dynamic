import { expect } from '@playwright/test';
import HomeFunctions from "pageFunctions/HomePage";
import { test } from "../browserstack/fixture";
import PLPageFunctions from 'pageFunctions/PLPage';
import PDPFunctions from 'pageFunctions/PDPPage';
import SideCartFunctions from 'pageFunctions/Sidecart';
import CheckOutFunctions from 'pageFunctions/CheckOut';
import Category from 'data/CategoryData';
import HoodieItems from 'data/HoodiesItems';
import Color from 'data/Colors';
import Size from 'data/Size';
import Credentials from 'data/Credentials';

let home: HomeFunctions;
let plp: PLPageFunctions
let pdp: PDPFunctions
let sidecart: SideCartFunctions
let checkout: CheckOutFunctions

test.beforeEach(async ({ page }) => {

    home = new HomeFunctions(page);  
    plp = new PLPageFunctions(page);
    pdp = new PDPFunctions(page);
    sidecart = new SideCartFunctions(page);
    checkout = new CheckOutFunctions(page)

});

test('Complete Shopping Journey', async ({page}) => {
 // Navigate to page    
    await home.launchWebSite();
// Verify the home page banner and logo    
    await home.verifyHomePageBanner();
    await home.verifyLogo();
// Navigate to a specific category    
    await home.navigateToCategory(Category.hoodeis);
// Select an item and specs    
    await plp.selectItem(HoodieItems.cloudZipHoodie);
    await pdp.selectCollor(Color.snow);
    await pdp.selectSize(Size.large);
// Add item to cart and click checkout button    
    await pdp.addItemToCart();
    await sidecart.verifyItemsInCart();
    await sidecart.clickCheckOutButton();
// Insert Email, Country/Region, First name, Last name, Adress, City, Postcode, Phone number
    await checkout.fillCredentials(Credentials.email,Credentials.country,Credentials.firstName,Credentials.lastName,Credentials.adress,Credentials.city,Credentials.zip,Credentials.phone);
    await checkout.clickContinueToShippingButton();


})
