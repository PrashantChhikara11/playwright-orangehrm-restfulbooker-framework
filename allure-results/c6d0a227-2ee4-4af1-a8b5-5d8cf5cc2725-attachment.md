# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: temp-test.spec.ts >> TempTest @master
- Location: tests\web\temp-test.spec.ts:4:5

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test'
  2  | 
  3  | //https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  4  | 
  5  | export class LoginPage
  6  | {
  7  |     readonly page:Page;
  8  |     readonly userNameInput:Locator;
  9  |     readonly passwordInput:Locator;
  10 |     readonly loginButton:Locator;
  11 | 
  12 | 
  13 |     constructor(page:Page)
  14 |     {
  15 |         this.page=page
  16 |         this.userNameInput = page.getByRole('textbox',{name:'Username'});
  17 |         this.passwordInput=page.getByRole('textbox',{name:'Password'})
  18 |         this.loginButton=page.getByRole('button',{name:'Login'})
  19 | 
  20 |     }
  21 | 
  22 |     async gotoOrangehrm()
  23 |     {
> 24 |         await this.page.goto(process.env.BASE_URL);
     |                         ^ Error: page.goto: url: expected string, got undefined
  25 |     }
  26 | 
  27 |     async oragngeHrmLogin(userName:string,password:string)
  28 |     {
  29 |         await this.userNameInput.fill(userName)
  30 |         await this.passwordInput.fill(password)
  31 |         await this.loginButton.click()
  32 |     }
  33 | 
  34 | }
```