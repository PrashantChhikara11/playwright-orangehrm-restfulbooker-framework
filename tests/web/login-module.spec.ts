import {test,expect} from '../../fixtures/hooks-fixtires';
import loginModuleData from '../../testdata/login-module-data.json';

test.use({storageState:{
   cookies:[],
   origins:[]
}})

test('[Login] Verify that user cannot login with invalid password',{
   tag:['@UI','@UAT']
},async({goToUrl,loginPage})=>{

   await loginPage.oragngeHrmLogin(process.env.USER_NAME!,loginModuleData.wrong_password);
   await expect(loginPage.invalidCredsErrorPopUp).toHaveText(loginModuleData.invalid_credentials_text);
   await expect(loginPage.userNameInput).toBeVisible();

})

test.describe('Invaid Login Test',{
   tag:'@InvalidLogin',
   
   annotation:{
      type:'Story Check',
      description:'Demo Purpose'
   }
   
},async()=>{

   
test('[Login] Verify that user cannot login with invalid UserName ',{
   tag:['@UI','@UAT']
},async({goToUrl,loginPage})=>{

   await loginPage.oragngeHrmLogin(loginModuleData.wrong_username,process.env.PASSWORD!);
   await expect(loginPage.invalidCredsErrorPopUp).toHaveText(loginModuleData.invalid_credentials_text);
   await expect(loginPage.userNameInput).toBeVisible();

})

test('[Login] Verify that user cannot login with invalid UserName and Password ',{
   tag:['@UI','@UAT','@DEV']
},async({goToUrl,loginPage})=>{

   await loginPage.oragngeHrmLogin(loginModuleData.wrong_username,loginModuleData.wrong_password);
   await expect(loginPage.invalidCredsErrorPopUp).toHaveText(loginModuleData.invalid_credentials_text);
   await expect(loginPage.userNameInput).toBeVisible();

})

test('[Login] Visual Testing for Logo and LeftHandPannel',{
   tag:['@VISUAL','@UAT'],
   annotation:{
      type:'VisualTest',
      description:'Visual Testing link'
   }
},async({goToUrl,loginPage,leftNavigationPage})=>{

   await loginPage.oragngeHrmLogin(process.env.USER_NAME!,process.env.PASSWORD!)
   await expect(leftNavigationPage.orangeHrmLogo).toHaveScreenshot('OrangeBrandLogo.png');
   await expect(leftNavigationPage.leftNavigationPannel).toHaveScreenshot('LeftPannel.png')


})



})
