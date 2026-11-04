import {Page,Locator} from '@playwright/test'

//https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

export class LoginPage
{
    readonly page:Page;
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly invalidCredsErrorPopUp:Locator;


    constructor(page:Page)
    {
        this.page=page
        this.userNameInput = page.getByRole('textbox',{name:'Username'});
        this.passwordInput=page.getByRole('textbox',{name:'Password'})
        this.loginButton=page.getByRole('button',{name:'Login'})
        this.invalidCredsErrorPopUp=page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text');

    }

    async gotoOrangehrm()
    {
        
        await this.page.goto(`${process.env.BASE_URL!}/web/index.php/auth/login`);
    }

    async oragngeHrmLogin(userName:string,password:string)
    {
        await this.userNameInput.fill(userName)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    
}