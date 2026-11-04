# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Global.Setup.ts >> Gobal Setup
- Location: tests\Global.Setup.ts:6:5

# Error details

```
Error: page.waitForURL: Target page, context or browser has been closed
=========================== logs ===========================
waiting for navigation to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index" until "load"
============================================================
```

# Test source

```ts
  1  | import { expect } from 'allure-playwright'
  2  | import {test} from '../fixtures/pom-fixtures'
  3  | import { Expect } from '@playwright/test'
  4  | 
  5  | 
  6  | test('Gobal Setup',async({page,loginPage,dashboardPage})=>{
  7  | 
  8  | await loginPage.gotoOrangehrm()
  9  | await loginPage.oragngeHrmLogin(process.env.USER_NAME!,process.env.PASSWORD!)
> 10 | await page.waitForURL(`${process.env.BASE_URL!}/web/index.php/dashboard/index`)
     |            ^ Error: page.waitForURL: Target page, context or browser has been closed
  11 | await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard')
  12 | await page.context().storageState({
  13 | 
  14 |     path:'./playwright/.auth/auth.json'
  15 | 
  16 | })
  17 | 
  18 | })
```