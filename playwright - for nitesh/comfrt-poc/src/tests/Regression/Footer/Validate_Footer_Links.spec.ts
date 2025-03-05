import { expect } from '@playwright/test';
import HomeFunctions from "pageFunctions/HomePage";
import test from '@playwright/test';
import PLPageFunctions from 'pageFunctions/PLPage';
import PDPFunctions from 'pageFunctions/PDPage';
import SideCartFunctions from 'pageFunctions/Sidecart';
import CheckOutFunctions from 'pageFunctions/CheckOut';
import ShippingFunctions from 'pageFunctions/Shipping';
import Helpers from 'resources/helpers';
import DiscountFunctions from 'pageFunctions/Discount';

let home: HomeFunctions;
let plp: PLPageFunctions;
let pdp: PDPFunctions;
let sidecart: SideCartFunctions;
let checkout: CheckOutFunctions;
let shipping: ShippingFunctions;
let helpers: Helpers;
let discount: DiscountFunctions;

test.beforeEach(async ({ page }) => {

    home = new HomeFunctions(page);  
    plp = new PLPageFunctions(page);
    pdp = new PDPFunctions(page);
    sidecart = new SideCartFunctions(page);
    checkout = new CheckOutFunctions(page);
    shipping = new ShippingFunctions(page);
    helpers = new Helpers(page);
    discount = new DiscountFunctions(page)

});

test('Verify that "Sign up now" button works', async ({page}) => {
 // Navigate to page       
await home.launchWebSite();
// Verify the home page banner and logo    
    await home.verifyHomePageBanner();
    await home.verifyLogo();
// Verify links under "About Us"    
   await home.checkMindsetLinks('Comfrt Mindset');
   await home.checkFAQLinks('FAQ');
   await home.checkLinks('Resources')
   await home.checkContactLinks('Contact');
// Verify links under "Help"   
   await home.checkLinks('Privacy Policy')
   await home.checkLinks('Terms of Service')
   await home.checkLinks('Pre-Order')
   await home.checkLinks('Refund Policy')
   await home.checkLinks('Pricing Policy')
   await home.checkExchangestLinks('Exchanges')
// Verify links under "Social"   
//    await home.checkLinks('Instagram')
//    await home.checkLinks('TikTok')

 });

// run test - npx playwright test comfrt-poc/src/tests/Regression/Footer/Validate_Footer_Links.spec.ts --headed --reporter=html
// cnage remote origin -  git remote set-url origin <new-repository-url>