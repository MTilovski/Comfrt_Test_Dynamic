import { expect } from '@playwright/test';
import HomeFunctions from "pageFunctions/HomePage";
import test from '@playwright/test';
import PLPageFunctions from 'pageFunctions/PLPage';
import PDPFunctions from 'pageFunctions/PDPage';
import SideCartFunctions from 'pageFunctions/Sidecart';
import CheckOutFunctions from 'pageFunctions/CheckOut';
import ShippingFunctions from 'pageFunctions/Shipping';
import Helpers from 'resources/helpers';
import Discount from 'pages/Discount';
import DiscountFunctions from 'pageFunctions/Discount';
import Credentials from 'data/Credentials';

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
    await discount.completeDiscountProcess(Credentials.EMAIL,Credentials.PHONE)
 });

// run test - npx playwright test comfrt-poc/src/tests/Regression/Footer/Validate_Sign_Up_Footer.spec.ts --headed --reporter=html
// cnage remote origin -  git remote set-url origin <new-repository-url>