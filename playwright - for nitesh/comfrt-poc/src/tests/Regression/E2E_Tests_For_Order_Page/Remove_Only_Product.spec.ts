import { expect } from '@playwright/test';
import HomeFunctions from "pageFunctions/HomePage";
import test from '@playwright/test';
import PLPageFunctions from 'pageFunctions/PLPage';
import PDPFunctions from 'pageFunctions/PDPage';
import SideCartFunctions from 'pageFunctions/Sidecart';
import CheckOutFunctions from 'pageFunctions/CheckOut';
import Category from 'data/CategoryData';
import HoodieItems from 'data/HoodiesItems';
import Color from 'data/Colors';
import Size from 'data/Size';
import Credentials from 'data/Credentials';
import ShippingFunctions from 'pageFunctions/Shipping';
import Titles from 'data/Title';
import Helpers from 'resources/helpers';
import { fail } from 'assert';

let home: HomeFunctions;
let plp: PLPageFunctions;
let pdp: PDPFunctions;
let sidecart: SideCartFunctions;
let checkout: CheckOutFunctions;
let shipping: ShippingFunctions;
let helpers: Helpers;

test.beforeEach(async ({ page }) => {

    home = new HomeFunctions(page);  
    plp = new PLPageFunctions(page);
    pdp = new PDPFunctions(page);
    sidecart = new SideCartFunctions(page);
    checkout = new CheckOutFunctions(page);
    shipping = new ShippingFunctions(page);
    helpers = new Helpers(page);

});

test('Remove the only item from the side cart and validate the product purchase process is disabled', async ({page}) => {
 // Navigate to page       
await home.launchWebSite();
// Verify the home page banner and logo    
    await home.verifyHomePageBanner();
    await home.verifyLogo();
// Navigate to a specific category    
    await home.navigateToCategory(Category.HOODIES);
    await plp.verifyPLPTitle(Titles.HOODEIS,Titles.HOODEIS);                                                 
// Select an item and specs    
    await plp.selectItem(HoodieItems.CLOUD_ZIP_HOODIE);
// Site navigates to PLP 
    await pdp.verifyDynamicItemTitle();
    await pdp.selectCollor(Color.SNOW);
    await pdp.selectSize(Size.LARGE);
// Add item to cart and click checkout button    
    await pdp.addItemToCart();
    await sidecart.verifyItemsInCart1(pdp.itemPDPtitle);
    await sidecart.removeItem();
    await sidecart.verifySidecartNumber('0');
 });

// run test - npx playwright test comfrt-poc/src/tests/Regression/E2E_Tests_For_Order_Page/Remove_Only_Product.spec.ts --headed --reporter=html
// cnage remote origin -  git remote set-url origin <new-repository-url>