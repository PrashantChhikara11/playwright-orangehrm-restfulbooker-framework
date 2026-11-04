# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\login-module.spec.ts >> Invaid Login Test >> [Login] Visual Testing for Logo and LeftHandPannel
- Location: tests\web\login-module.spec.ts:50:5

# Error details

```
Error: A snapshot doesn't exist at C:\Users\Lenovo\Desktop\AutomationProjects\Frameworks\Manual_Framework1\tests\web\login-module.spec.ts-snapshots\LeftPannel-chromium-win32.png, writing actual.
```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: Demo Source
              - generic [ref=f1e128]: 
      - navigation "Topbar Menu" [ref=f1e130]:
        - list [ref=f1e131]:
          - button "" [ref=f1e133] [cursor=pointer]
  - generic [ref=f1e135]:
    - generic [ref=f1e137]:
      - generic [ref=f1e139]:
        - generic [ref=f1e141]:
          - generic [ref=f1e142]: 
          - paragraph [ref=f1e143]: Time at Work
        - separator [ref=f1e144]
      - generic [ref=f1e148]:
        - generic [ref=f1e150]:
          - generic [ref=f1e151]: 
          - paragraph [ref=f1e152]: My Actions
        - separator [ref=f1e153]
        - generic [ref=f1e155]:
          - img "No Content" [ref=f1e156]
          - paragraph [ref=f1e157]: No Pending Actions to Perform
      - generic [ref=f1e159]:
        - generic [ref=f1e161]:
          - generic [ref=f1e162]: 
          - paragraph [ref=f1e163]: Quick Launch
        - separator [ref=f1e164]
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: Buzz Latest Posts
        - separator [ref=f1e173]
      - generic [ref=f1e177]:
        - generic [ref=f1e178]:
          - paragraph [ref=f1e183]: Employees on Leave Today
          - generic [ref=f1e184] [cursor=pointer]: 
        - separator [ref=f1e185]
      - generic [ref=f1e189]:
        - generic [ref=f1e191]:
          - generic [ref=f1e192]: 
          - paragraph [ref=f1e193]: Employee Distribution by Sub Unit
        - separator [ref=f1e194]
      - generic [ref=f1e198]:
        - generic [ref=f1e200]:
          - generic [ref=f1e201]: 
          - paragraph [ref=f1e202]: Employee Distribution by Location
        - separator [ref=f1e203]
    - generic [ref=f1e206]:
      - paragraph [ref=f1e207]: OrangeHRM OS 5.9
      - paragraph [ref=f1e208]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e209] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  45 |    await expect(loginPage.invalidCredsErrorPopUp).toHaveText(loginModuleData.invalid_credentials_text);
  46 |    await expect(loginPage.userNameInput).toBeVisible();
  47 | 
  48 | })
  49 | 
  50 | test('[Login] Visual Testing for Logo and LeftHandPannel',{
  51 |    tag:['@VISUAL','@UAT'],
  52 |    annotation:{
  53 |       type:'VisualTest',
  54 |       description:'Visual Testing link'
  55 |    }
  56 | },async({goToUrl,loginPage,leftNavigationPage})=>{
  57 |    
  58 |    await loginPage.oragngeHrmLogin(process.env.USER_NAME!,process.env.PASSWORD!)
  59 |    await expect(leftNavigationPage.orangeHrmLogo).toHaveScreenshot('OrangeBrandLogo.png');
> 60 |    await expect(leftNavigationPage.leftNavigationPannel).toHaveScreenshot('LeftPannel.png')
     |    ^ Error: A snapshot doesn't exist at C:\Users\Lenovo\Desktop\AutomationProjects\Frameworks\Manual_Framework1\tests\web\login-module.spec.ts-snapshots\LeftPannel-chromium-win32.png, writing actual.
  61 | 
  62 | 
  63 | })
  64 | 
  65 | 
  66 | 
  67 | })
  68 | 
```