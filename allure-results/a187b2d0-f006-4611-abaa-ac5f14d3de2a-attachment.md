# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim-module.spec.ts >> [PIM] verify that a new emp is created under PIM
- Location: tests\web\pim-module.spec.ts:4:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'PIM' })

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class LeftNavigationPage
  4  | {
  5  |     readonly page:Page;
  6  |     readonly pimLink:Locator;
  7  |     readonly orangeHrmLogo:Locator;
  8  |     readonly leftNavigationPannel:Locator;
  9  | 
  10 | 
  11 |     constructor(page:Page)
  12 |     {
  13 |         this.page=page;
  14 |         this.pimLink=page.getByRole('link',{name:'PIM'});
  15 |         this.orangeHrmLogo=page.getByRole('link',{name:'client brand banner'})
  16 |         this.leftNavigationPannel=page.locator('div .oxd-sidepanel-body')
  17 |     }
  18 | 
  19 |    async openPimModule()
  20 |    {
> 21 |    await this.pimLink.click();
     |                       ^ Error: locator.click: Test timeout of 60000ms exceeded.
  22 |    }
  23 |    
  24 | }
```