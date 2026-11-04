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

Locator:  locator('.orangehrm-edit-employee-name')
Expected: "Tom D Luffy"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveText" locator('.orangehrm-edit-employee-name') with timeout 5000ms
  - waiting for locator('.orangehrm-edit-employee-name')
    - locator resolved to <div data-v-af86f9aa="" class="orangehrm-edit-employee-name">…</div>
    - unexpected value ""

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Admin Administrator
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading [level=6]
- img "profile picture"
- tablist:
  - tab "Personal Details":
    - link "Personal Details":
      - /url: /web/index.php/pim/viewPersonalDetails/empNumber/372
  - tab "Contact Details":
    - link "Contact Details":
      - /url: /web/index.php/pim/contactDetails/empNumber/372
  - tab "Emergency Contacts":
    - link "Emergency Contacts":
      - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/372
  - tab "Dependents":
    - link "Dependents":
      - /url: /web/index.php/pim/viewDependents/empNumber/372
  - tab "Immigration":
    - link "Immigration":
      - /url: /web/index.php/pim/viewImmigration/empNumber/372
  - tab "Job":
    - link "Job":
      - /url: /web/index.php/pim/viewJobDetails/empNumber/372
  - tab "Salary":
    - link "Salary":
      - /url: /web/index.php/pim/viewSalaryList/empNumber/372
  - tab "Report-to":
    - link "Report-to":
      - /url: /web/index.php/pim/viewReportToDetails/empNumber/372
  - tab "Qualifications":
    - link "Qualifications":
      - /url: /web/index.php/pim/viewQualifications/empNumber/372
  - tab "Memberships":
    - link "Memberships":
      - /url: /web/index.php/pim/viewMemberships/empNumber/372
- heading "Personal Details" [level=6]
- separator
- text: Employee Full Name*
- textbox "First Name"
- textbox "Middle Name"
- textbox "Last Name"
- separator
- text: Employee Id
- textbox
- text: Other Id
- textbox
- text: Driver's License Number
- textbox
- text: License Expiry Date
- textbox "yyyy-dd-mm"
- text: 
- separator
- text: Nationality -- Select --  Marital Status -- Select --  Date of Birth
- textbox "yyyy-dd-mm"
- text:  Gender
- radio "Male"
- text: Male
- radio "Female"
- text: Female
- separator
- paragraph: "* Required"
- button "Save"
- separator
- heading "Attachments" [level=6]
- button " Add"
- table
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
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