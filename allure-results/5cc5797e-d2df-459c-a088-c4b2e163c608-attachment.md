# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Global.Setup.ts >> Gobal Setup
- Location: tests\Global.Setup.ts:6:5

# Error details

```
Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login/web/index.php/auth/login
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login/web/index.php/auth/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This opensource-demo.orangehrmlive.com page can’t be found" [level=1] [ref=e7]
    - paragraph [ref=e9]:
      - text: "No webpage was found for the web address:"
      - strong [ref=e10]: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login/web/index.php/auth/login
    - generic [ref=e11]: HTTP ERROR 404
  - button "Reload" [ref=e14] [cursor=pointer]
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
  24 |         
> 25 |         await this.page.goto(`${process.env.BASE_URL!}/web/index.php/auth/login`);
     |                         ^ Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login/web/index.php/auth/login
  26 |     }
  27 | 
  28 |     async oragngeHrmLogin(userName:string,password:string)
  29 |     {
  30 |         await this.userNameInput.fill(userName)
  31 |         await this.passwordInput.fill(password)
  32 |         await this.loginButton.click()
  33 |     }
  34 | 
  35 | }
```