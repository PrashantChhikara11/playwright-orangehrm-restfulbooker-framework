# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\login-module.spec.ts >> Invaid Login Test >> [Login] Visual Testing for Logo and LeftHandPannel
- Location: tests\web\login-module.spec.ts:50:5

# Error details

```
Error: A snapshot doesn't exist at C:\Users\Lenovo\Desktop\AutomationProjects\Frameworks\Manual_Framework1\tests\web\login-module.spec.ts-snapshots\OrangeBrandLogo-chromium-win32.png, writing actual.
```

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('div.oxd-sidepannel-body')
Timeout: 30000ms
  Timeout 30000ms exceeded.

  Snapshot: LeftPannel.png

Call log:
  - Expect "toHaveScreenshot(LeftPannel.png)" locator('div.oxd-sidepannel-body') with timeout 30000ms
    - generating new stable screenshot expectation
  - waiting for locator('div.oxd-sidepannel-body')
  - Timeout 30000ms exceeded.

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
              - paragraph [ref=f1e127]: TrainingPlaywright Abdurasul
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
        - generic [ref=f1e146]:
          - generic [ref=f1e147]:
            - img "profile picture" [ref=f1e149]
            - generic [ref=f1e150]:
              - paragraph [ref=f1e151]: Punched Out
              - paragraph [ref=f1e152]: "Punched Out: Oct 16th at 01:00 AM (GMT 5.5)"
          - generic [ref=f1e153]:
            - generic [ref=f1e154]: 4h 49m Today
            - button "" [ref=f1e155] [cursor=pointer]
          - separator [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: This Week
              - paragraph [ref=f1e161]: Oct 05 - Oct 11
            - generic [ref=f1e162]:
              - generic [ref=f1e163]: 
              - paragraph [ref=f1e164]: 148h 49m
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: My Actions
        - separator [ref=f1e173]
        - generic [ref=f1e176]:
          - button [ref=f1e177] [cursor=pointer]
          - paragraph [ref=f1e186] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=f1e188]:
        - generic [ref=f1e190]:
          - generic [ref=f1e191]: 
          - paragraph [ref=f1e192]: Quick Launch
        - separator [ref=f1e193]
        - generic [ref=f1e195]:
          - generic [ref=f1e196]:
            - button "Assign Leave" [ref=f1e197] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e200]:
              - paragraph [ref=f1e201]: Assign Leave
          - generic [ref=f1e202]:
            - button "Leave List" [ref=f1e203] [cursor=pointer]
            - generic "Leave List" [ref=f1e210]:
              - paragraph [ref=f1e211]: Leave List
          - generic [ref=f1e212]:
            - button "Timesheets" [ref=f1e213] [cursor=pointer]
            - generic "Timesheets" [ref=f1e219]:
              - paragraph [ref=f1e220]: Timesheets
          - generic [ref=f1e221]:
            - button "Apply Leave" [ref=f1e222] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e225]:
              - paragraph [ref=f1e226]: Apply Leave
          - generic [ref=f1e227]:
            - button "My Leave" [ref=f1e228] [cursor=pointer]
            - generic "My Leave" [ref=f1e233]:
              - paragraph [ref=f1e234]: My Leave
          - generic [ref=f1e235]:
            - button "My Timesheet" [ref=f1e236] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e239]:
              - paragraph [ref=f1e240]: My Timesheet
      - generic [ref=f1e242]:
        - generic [ref=f1e244]:
          - generic [ref=f1e245]: 
          - paragraph [ref=f1e246]: Buzz Latest Posts
        - separator [ref=f1e247]
        - generic [ref=f1e249]:
          - generic [ref=f1e250]:
            - generic [ref=f1e251] [cursor=pointer]:
              - img "profile picture" [ref=f1e253]
              - generic [ref=f1e254]:
                - paragraph [ref=f1e255]: TrainingPlaywright Abdurasul Abdurasul
                - paragraph [ref=f1e256]: 2026-05-10 07:42 PM
            - separator [ref=f1e257]
            - paragraph [ref=f1e258]: QA IS THE FUTURE 1791182576432
          - generic [ref=f1e259]:
            - generic [ref=f1e260] [cursor=pointer]:
              - img "profile picture" [ref=f1e262]
              - generic [ref=f1e263]:
                - paragraph [ref=f1e264]: TrainingPlaywright Abdurasul Abdurasul
                - paragraph [ref=f1e265]: 2026-05-10 07:42 PM
            - separator [ref=f1e266]
            - paragraph [ref=f1e267]: QA IS THE FUTURE 1791182556127
          - generic [ref=f1e268]:
            - generic [ref=f1e269] [cursor=pointer]:
              - img "profile picture" [ref=f1e271]
              - generic [ref=f1e272]:
                - paragraph [ref=f1e273]: TrainingPlaywright Abdurasul Abdurasul
                - paragraph [ref=f1e274]: 2026-05-10 07:41 PM
            - separator [ref=f1e275]
            - paragraph [ref=f1e276]: QA IS THE FUTURE 1791182488349
          - generic [ref=f1e277]:
            - generic [ref=f1e278] [cursor=pointer]:
              - img "profile picture" [ref=f1e280]
              - generic [ref=f1e281]:
                - paragraph [ref=f1e282]: TrainingPlaywright Abdurasul Abdurasul
                - paragraph [ref=f1e283]: 2026-05-10 07:02 PM
            - separator [ref=f1e284]
            - paragraph [ref=f1e285]: Hi Everyone Good Afternoon
          - generic [ref=f1e286]:
            - generic [ref=f1e287] [cursor=pointer]:
              - img "profile picture" [ref=f1e289]
              - generic [ref=f1e290]:
                - paragraph [ref=f1e291]: TrainingPlaywright Abdurasul Abdurasul
                - paragraph [ref=f1e292]: 2020-08-10 04:38 PM
            - separator [ref=f1e293]
            - paragraph [ref=f1e294]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
      - generic [ref=f1e296]:
        - generic [ref=f1e297]:
          - paragraph [ref=f1e302]: Employees on Leave Today
          - generic [ref=f1e303] [cursor=pointer]: 
        - separator [ref=f1e304]
        - generic [ref=f1e306]:
          - img "profile picture" [ref=f1e308]
          - generic [ref=f1e309]:
            - paragraph [ref=f1e310]: TrainingPlaywright Abdurasul
            - paragraph [ref=f1e311]: CAN - Personal (Half Day - Morning)
          - paragraph [ref=f1e312]: "770771"
      - generic [ref=f1e314]:
        - generic [ref=f1e316]:
          - generic [ref=f1e317]: 
          - paragraph [ref=f1e318]: Employee Distribution by Sub Unit
        - separator [ref=f1e319]
        - list [ref=f1e324]:
          - listitem [ref=f1e325] [cursor=pointer]:
            - generic "Engineering" [ref=f1e327]
          - listitem [ref=f1e328] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e330]
          - listitem [ref=f1e331] [cursor=pointer]:
            - generic "Administration" [ref=f1e333]
          - listitem [ref=f1e334] [cursor=pointer]:
            - generic "Client Services" [ref=f1e336]
          - listitem [ref=f1e337] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e339]
      - generic [ref=f1e341]:
        - generic [ref=f1e343]:
          - generic [ref=f1e344]: 
          - paragraph [ref=f1e345]: Employee Distribution by Location
        - separator [ref=f1e346]
        - list [ref=f1e351]:
          - listitem [ref=f1e352] [cursor=pointer]:
            - generic "Texas R&D" [ref=f1e354]
          - listitem [ref=f1e355] [cursor=pointer]:
            - generic "New York Sales Office" [ref=f1e357]
          - listitem [ref=f1e358] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e360]
    - generic [ref=f1e361]:
      - paragraph [ref=f1e362]: OrangeHRM OS 5.9
      - paragraph [ref=f1e363]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e364] [cursor=pointer]:
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
     |                                                          ^ Error: expect(locator).toHaveScreenshot(expected) failed
  61 | 
  62 | 
  63 | })
  64 | 
  65 | 
  66 | 
  67 | })
  68 | 
```