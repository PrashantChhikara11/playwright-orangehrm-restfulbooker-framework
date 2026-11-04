import {expect} from '@playwright/test'
import {test} from '../fixtures/pom-fixtures'


test('Gobal Setup',async({page,loginPage,dashboardPage})=>{

await loginPage.gotoOrangehrm()
await loginPage.oragngeHrmLogin(process.env.USER_NAME!,process.env.PASSWORD!)
await page.waitForURL(`${process.env.BASE_URL!}/web/index.php/dashboard/index`)
await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard')
await page.context().storageState({

    path:'./playwright/.auth/auth.json'

})

})