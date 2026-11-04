# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-module.spec.ts >> Invaid Login Test >> [Login] Visual Testing for Logo and LeftHandPannel
- Location: tests\web\login-module.spec.ts:51:5

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: getByRole('link', { name: 'client brand banner' })
Timeout: 30000ms
  Timeout 30000ms exceeded.

  Snapshot: OrangeBrandLogo.png

Call log:
  - Expect "toHaveScreenshot(OrangeBrandLogo.png)" getByRole('link', { name: 'client brand banner' }) with timeout 30000ms
    - verifying given screenshot expectation
  - waiting for getByRole('link', { name: 'client brand banner' })
  - Timeout 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f1e4]:
  - generic [ref=f1e6]:
    - img "company-branding" [ref=f1e8]
    - generic [ref=f1e9]:
      - heading "Login" [level=5] [ref=f1e10]
      - generic [ref=f1e11]:
        - generic [ref=f1e12]:
          - alert [ref=f1e13]:
            - generic [ref=f1e14]:
              - generic [ref=f1e15]: 
              - paragraph [ref=f1e16]: CSRF token validation failed
          - generic [ref=f1e18]:
            - paragraph [ref=f1e19]: "Username : Admin"
            - paragraph [ref=f1e20]: "Password : admin123"
        - generic [ref=f1e21]:
          - generic [ref=f1e23]:
            - generic [ref=f1e24]:
              - generic [ref=f1e25]: 
              - generic [ref=f1e26]: Username
            - textbox "Username" [active] [ref=f1e28]
          - generic [ref=f1e30]:
            - generic [ref=f1e31]:
              - generic [ref=f1e32]: 
              - generic [ref=f1e33]: Password
            - textbox "Password" [ref=f1e35]
          - button "Login" [ref=f1e37] [cursor=pointer]
          - paragraph [ref=f1e39] [cursor=pointer]: Forgot your password?
      - generic [ref=f1e40]:
        - generic [ref=f1e41]:
          - link [ref=f1e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=f1e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=f1e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=f1e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=f1e54]:
          - paragraph [ref=f1e55]: OrangeHRM OS 5.9
          - paragraph [ref=f1e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=f1e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=f1e59]
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/hooks-fixtires';
  2  | import loginModuleData from '../../testdata/login-module-data.json';
  3  | 
  4  | test.use({storageState:{
  5  |    cookies:[],
  6  |    origins:[]
  7  | }})
  8  | 
  9  | test('[Login] Verify that user cannot login with invalid password',{
  10 |    tag:['@UI','@UAT']
  11 | },async({goToUrl,loginPage})=>{
  12 | 
  13 |    await loginPage.oragngeHrmLogin(process.env.USER_NAME!,loginModuleData.wrong_password);
  14 |    await expect(loginPage.invalidCredsErrorPopUp).toHaveText(loginModuleData.invalid_credentials_text);
  15 |    await expect(loginPage.userNameInput).toBeVisible();
  16 | 
  17 | })
  18 | 
  19 | test.describe('Invaid Login Test',{
  20 |    tag:'@InvalidLogin',
  21 |    
  22 |    annotation:{
  23 |       type:'Story Check',
  24 |       description:'Demo Purpose'
  25 |    }
  26 |    
  27 | },async()=>{
  28 | 
  29 |    
  30 | test('[Login] Verify that user cannot login with invalid UserName ',{
  31 |    tag:['@UI','@UAT']
  32 | },async({goToUrl,loginPage})=>{
  33 | 
  34 |    await loginPage.oragngeHrmLogin(loginModuleData.wrong_username,process.env.PASSWORD!);
  35 |    await expect(loginPage.invalidCredsErrorPopUp).toHaveText(loginModuleData.invalid_credentials_text);
  36 |    await expect(loginPage.userNameInput).toBeVisible();
  37 | 
  38 | })
  39 | 
  40 | test('[Login] Verify that user cannot login with invalid UserName and Password ',{
  41 |    tag:['@UI','@UAT','@DEV']
  42 | },async({goToUrl,loginPage})=>{
  43 | 
  44 |    await loginPage.oragngeHrmLogin(loginModuleData.wrong_username,loginModuleData.wrong_password);
  45 |    //await expect(loginPage.invalidCredsErrorPopUp).toHaveText(loginModuleData.invalid_credentials_text);
  46 |    await expect(loginPage.invalidCredsErrorPopUp).toHaveText("qwerty");
  47 |    await expect(loginPage.userNameInput).toBeVisible();
  48 | 
  49 | })
  50 | 
  51 | test('[Login] Visual Testing for Logo and LeftHandPannel',{
  52 |    tag:['@VISUAL','@UAT'],
  53 |    annotation:{
  54 |       type:'VisualTest',
  55 |       description:'Visual Testing link'
  56 |    }
  57 | },async({goToUrl,loginPage,leftNavigationPage})=>{
  58 | 
  59 |    await loginPage.oragngeHrmLogin(process.env.USER_NAME!,process.env.PASSWORD!)
> 60 |    await expect(leftNavigationPage.orangeHrmLogo).toHaveScreenshot('OrangeBrandLogo.png');
     |                                                   ^ Error: expect(locator).toHaveScreenshot(expected) failed
  61 |    await expect(leftNavigationPage.leftNavigationPannel).toHaveScreenshot('LeftPannel.png')
  62 | 
  63 | 
  64 | })
  65 | 
  66 | 
  67 | 
  68 | })
  69 | 
```