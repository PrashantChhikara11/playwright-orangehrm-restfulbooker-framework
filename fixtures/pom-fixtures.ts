import {test as baseTest} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';
import { LeftNavigationPage } from '../pages/LeftNavigationPage';
import { PimPage } from '../pages/PimPage';
import { commonApiUtils } from '../utils/CommonApiUtils';

 type PomFixturesType= 
{
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    userPage:UserPage;
    leftNavigationPage:LeftNavigationPage;
    pimPage:PimPage;
    commonApiUtils:commonApiUtils; // Using here because did not create fixture class for commonutils

}

export const test=baseTest.extend<PomFixturesType>({

    loginPage:async({page},use) =>{await use(new LoginPage(page))},
    dashboardPage:async({page},use)=>{await use(new DashboardPage(page))},
    userPage:async({page},use)=>{await use(new UserPage(page))},
    leftNavigationPage:async({page},use)=>{await use(new LeftNavigationPage(page))},
    pimPage:async({page},use)=>{use(new PimPage(page))},

    // Using here because did not create fixture class for commonutils
    commonApiUtils:async({request},use)=>{
        use(new commonApiUtils(request))
    }

})
