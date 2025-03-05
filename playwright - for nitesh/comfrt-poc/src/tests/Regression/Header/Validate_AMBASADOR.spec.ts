import { expect } from '@playwright/test';
import HomeFunctions from "pageFunctions/HomePage";
import test from '@playwright/test';
import PLPageFunctions from 'pageFunctions/PLPage';
import PDPFunctions from 'pageFunctions/PDPage';
import SideCartFunctions from 'pageFunctions/Sidecart';
import CheckOutFunctions from 'pageFunctions/CheckOut';
import Category from 'data/CategoryData';
import ShippingFunctions from 'pageFunctions/Shipping';
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

test('Validate Header', async ({page}) => {
 // Navigate to page       
await home.launchWebSite();
// Verify the home page banner and logo    
    await home.verifyHomePageBanner();
    await home.verifyLogo();
// Navigate and verify Ambassador program     
    await home.navigateToCategory(Category.AMBASSADOR_PROGRAM);
    await home.verifyAmbassadorProgram();
    


});

// run test - npx playwright test comfrt-poc/src/tests/Regression/Header/Validate_AMBASSADOR.spec.ts --headed --reporter=html
// cnage remote origin -  git remote set-url origin <new-repository-url>