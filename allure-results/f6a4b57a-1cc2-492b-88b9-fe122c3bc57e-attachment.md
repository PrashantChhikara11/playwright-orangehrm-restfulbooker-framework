# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\pim-module.spec.ts >> [PIM] verify that a new emp is created under PIM
- Location: tests\web\pim-module.spec.ts:4:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: ' Add' })

```

# Page snapshot

```yaml
- generic [ref=f1e4]:
  - generic [ref=f1e6]:
    - img "company-branding" [ref=f1e8]
    - generic [ref=f1e9]:
      - heading "Login" [level=5] [ref=f1e10]
      - generic [ref=f1e11]:
        - generic [ref=f1e13]:
          - paragraph [ref=f1e14]: "Username : Admin"
          - paragraph [ref=f1e15]: "Password : admin123"
        - generic [ref=f1e16]:
          - generic [ref=f1e18]:
            - generic [ref=f1e19]:
              - generic [ref=f1e20]: 
              - generic [ref=f1e21]: Username
            - textbox "Username" [active] [ref=f1e23]
          - generic [ref=f1e25]:
            - generic [ref=f1e26]:
              - generic [ref=f1e27]: 
              - generic [ref=f1e28]: Password
            - textbox "Password" [ref=f1e30]
          - button "Login" [ref=f1e32] [cursor=pointer]
          - paragraph [ref=f1e34] [cursor=pointer]: Forgot your password?
      - generic [ref=f1e35]:
        - generic [ref=f1e36]:
          - link [ref=f1e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=f1e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=f1e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=f1e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=f1e49]:
          - paragraph [ref=f1e50]: OrangeHRM OS 5.9
          - paragraph [ref=f1e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=f1e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=f1e54]
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class PimPage
  4  | {
  5  |     readonly page:Page;
  6  |     readonly addPimButton:Locator;
  7  |     readonly firstNameTextBox:Locator;
  8  |     readonly middleNameTextBox:Locator;
  9  |     readonly lastNameTextBox:Locator;
  10 |     readonly savButton:Locator;
  11 |     readonly newEmpNameHeading:Locator;
  12 | 
  13 |     constructor(page:Page)
  14 |     {
  15 |         this.page=page;
  16 |         this.addPimButton=page.getByRole('button',{name:' Add'});
  17 |         this.firstNameTextBox=page.getByRole('textbox',{name:'First Name'})
  18 |         this.middleNameTextBox=page.getByRole('textbox',{name:'Middle Name'})
  19 |         this.lastNameTextBox=page.getByRole('textbox',{name:'Last Name'})
  20 |         this.savButton=page.getByRole('button',{name:'Save'})
  21 |         this.newEmpNameHeading=page.locator('.orangehrm-edit-employee-name')
  22 | 
  23 |          
  24 | 
  25 |     }
  26 | 
  27 |     async addEmployee(firstName:string,middleName:string,lastName:string)
  28 |     {
> 29 |         await this.addPimButton.click();
     |                                 ^ Error: locator.click: Test timeout of 60000ms exceeded.
  30 |         await this.firstNameTextBox.fill(firstName);
  31 |         await this.middleNameTextBox.fill(lastName);
  32 |         await this.lastNameTextBox.fill(lastName);
  33 |         await this.savButton.click();
  34 | 
  35 |     }
  36 | 
  37 | 
  38 | 
  39 | }
```