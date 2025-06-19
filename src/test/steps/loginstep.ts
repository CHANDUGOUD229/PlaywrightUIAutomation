import{Given,When,Then} from"@cucumber/cucumber"
import {chromium,Page,Browser, expect} from"@playwright/test"

let browser:Browser;
let page:Page;


        Given('user navigates to the Application',{timeout:20000}, async function () {
          browser=await chromium.launch({headless:false});
          page=await browser.newPage();
          await page.goto("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
          await page.waitForLoadState("networkidle");
    
        });
        
         Given('user enter the username as {string}', async function (username) {        
          await page.locator("#Email").fill(username);

         });

        Given('user enter the password as {string}', async function (password) {
           
          await page.locator("#Password").fill(password);

         });

           When('user click on the login button',{timeout:20000}, async function () {
            await page.locator(".login-button").click();
           
         });
         Then('Login should be Success',{timeout:20000}, async function () {
             await  page.waitForLoadState('domcontentloaded');
          const logout=await page.getByText("Logout").isVisible();
          expect(logout).toBeTruthy();
            await  browser.close();
         });

         Then('Login should fail', async function () {
          const invaliderror=await page.locator("#Email-error").textContent();
         console.log(invaliderror);
         await  browser.close();
        });
         
