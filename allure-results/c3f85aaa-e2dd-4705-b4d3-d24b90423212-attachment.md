# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\pim-module.spec.ts >> [PIM] verify that a new emp is created under PIM
- Location: tests\web\pim-module.spec.ts:4:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.orangehrm-edit-employee-name')
Expected: "Tom D Luffy"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('.orangehrm-edit-employee-name') with timeout 5000ms
  - waiting for locator('.orangehrm-edit-employee-name')
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/374"

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: Admin Administrator
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e148]:
      - generic [ref=f3e149]:
        - generic [ref=f3e150]:
          - heading "Tom Luffy" [level=6] [ref=f3e152]
          - img "profile picture" [ref=f3e155] [cursor=pointer]
        - tablist [ref=f3e156]:
          - tab [ref=f3e157]:
            - link "Personal Details" [ref=f3e158] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/374
          - tab [ref=f3e159]:
            - link "Contact Details" [ref=f3e160] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/374
          - tab [ref=f3e161]:
            - link "Emergency Contacts" [ref=f3e162] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/374
          - tab [ref=f3e163]:
            - link "Dependents" [ref=f3e164] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/374
          - tab [ref=f3e165]:
            - link "Immigration" [ref=f3e166] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/374
          - tab [ref=f3e167]:
            - link "Job" [ref=f3e168] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/374
          - tab [ref=f3e169]:
            - link "Salary" [ref=f3e170] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/374
          - tab [ref=f3e171]:
            - link "Report-to" [ref=f3e172] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/374
          - tab [ref=f3e173]:
            - link "Qualifications" [ref=f3e174] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/374
          - tab [ref=f3e175]:
            - link "Memberships" [ref=f3e176] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/374
      - generic [ref=f3e177]:
        - generic [ref=f3e178]:
          - heading "Personal Details" [level=6] [ref=f3e179]
          - separator [ref=f3e180]
          - generic [ref=f3e181]:
            - generic [ref=f3e188]:
              - generic [ref=f3e189]: Employee Full Name*
              - generic [ref=f3e191]:
                - textbox "First Name" [ref=f3e194]: Tom
                - textbox "Middle Name" [ref=f3e197]: Luffy
                - textbox "Last Name" [ref=f3e200]: Luffy
            - separator [ref=f3e201]
            - generic [ref=f3e202]:
              - generic [ref=f3e203]:
                - generic [ref=f3e205]:
                  - generic [ref=f3e206]: Employee Id
                  - textbox [ref=f3e209]: "0576"
                - generic [ref=f3e211]:
                  - generic [ref=f3e212]: Other Id
                  - textbox [ref=f3e215]
              - generic [ref=f3e216]:
                - generic [ref=f3e218]:
                  - generic [ref=f3e219]: Driver's License Number
                  - textbox [ref=f3e222]
                - generic [ref=f3e224]:
                  - generic [ref=f3e225]: License Expiry Date
                  - generic [ref=f3e229]:
                    - textbox "yyyy-dd-mm" [ref=f3e230]
                    - generic [ref=f3e231] [cursor=pointer]: 
            - separator [ref=f3e232]
            - generic [ref=f3e233]:
              - generic [ref=f3e234]:
                - generic [ref=f3e236]:
                  - generic [ref=f3e237]: Nationality
                  - generic [ref=f3e241] [cursor=pointer]:
                    - generic [ref=f3e242]: "-- Select --"
                    - generic [ref=f3e243]: 
                - generic [ref=f3e246]:
                  - generic [ref=f3e247]: Marital Status
                  - generic [ref=f3e251] [cursor=pointer]:
                    - generic [ref=f3e252]: "-- Select --"
                    - generic [ref=f3e253]: 
              - generic [ref=f3e255]:
                - generic [ref=f3e257]:
                  - generic [ref=f3e258]: Date of Birth
                  - generic [ref=f3e262]:
                    - textbox "yyyy-dd-mm" [ref=f3e263]
                    - generic [ref=f3e264] [cursor=pointer]: 
                - generic [ref=f3e266]:
                  - generic [ref=f3e267]: Gender
                  - generic [ref=f3e269]:
                    - generic [ref=f3e273] [cursor=pointer]:
                      - radio "Male" [ref=f3e274]
                      - text: Male
                    - generic [ref=f3e279] [cursor=pointer]:
                      - radio "Female" [ref=f3e280]
                      - text: Female
            - separator [ref=f3e282]
            - generic [ref=f3e283]:
              - paragraph [ref=f3e284]: "* Required"
              - button "Save" [ref=f3e285] [cursor=pointer]
        - generic [ref=f3e286]:
          - separator [ref=f3e287]
          - generic [ref=f3e288]:
            - heading "Custom Fields" [level=6] [ref=f3e289]
            - separator [ref=f3e290]
            - generic [ref=f3e291]:
              - generic [ref=f3e293]:
                - generic [ref=f3e295]:
                  - generic [ref=f3e296]: Blood Type
                  - generic [ref=f3e300] [cursor=pointer]:
                    - generic [ref=f3e301]: "-- Select --"
                    - generic [ref=f3e302]: 
                - generic [ref=f3e305]:
                  - generic [ref=f3e306]: Test_Field
                  - textbox [ref=f3e309]
              - separator [ref=f3e310]
              - button "Save" [ref=f3e312] [cursor=pointer]
        - generic [ref=f3e313]:
          - separator [ref=f3e314]
          - generic [ref=f3e316]:
            - heading "Attachments" [level=6] [ref=f3e317]
            - button " Add" [ref=f3e318] [cursor=pointer]:
              - generic [ref=f3e319]: 
              - text: Add
          - generic [ref=f3e320]:
            - separator [ref=f3e321]
            - generic [ref=f3e322]: No Records Found
          - table [ref=f3e325]:
            - rowgroup [ref=f3e326]:
              - row [ref=f3e327]:
                - columnheader "" [ref=f3e328]:
                  - generic [ref=f3e330] [cursor=pointer]:
                    - checkbox "" [ref=f3e331]
                    - generic [ref=f3e332]: 
                - columnheader "File Name" [ref=f3e334]
                - columnheader "Description" [ref=f3e335]
                - columnheader "Size" [ref=f3e336]
                - columnheader "Type" [ref=f3e337]
                - columnheader "Date Added" [ref=f3e338]
                - columnheader "Added By" [ref=f3e339]
                - columnheader "Actions" [ref=f3e340]
            - rowgroup
    - generic [ref=f3e341]:
      - paragraph [ref=f3e342]: OrangeHRM OS 5.9
      - paragraph [ref=f3e343]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e344] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import{test,expect} from '../../fixtures/hooks-fixtires'
  2  | import pimModuleData from '../../testdata/pim-moudle-data.json'
  3  | 
  4  | test('[PIM] verify that a new emp is created under PIM',async({goToUrl,leftNavigationPage,pimPage})=>{
  5  | 
  6  | 
  7  |     await leftNavigationPage.openPimModule();
  8  |     await pimPage.addEmployee(pimModuleData.first_name,pimModuleData.middle_name,pimModuleData.last_name)
> 9  |     await expect(pimPage.newEmpNameHeading).toHaveText(`${pimModuleData.first_name} ${pimModuleData.middle_name} ${pimModuleData.last_name}`)
     |                                             ^ Error: expect(locator).toHaveText(expected) failed
  10 | 
  11 | })
  12 | 
```