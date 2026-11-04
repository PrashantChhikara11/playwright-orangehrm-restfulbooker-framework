import { test as pomTest } from './pom-fixtures';

// ./pom-fixtures'
// ../fixtures/pom-fixtures


type HooksFixtureType = {
    goToUrl: any;
    logout: any;
}

export const test = pomTest.extend<HooksFixtureType>({
 goToUrl: async ({loginPage}: { loginPage: import('../pages/LoginPage').LoginPage }, use: (r?: any) => Promise<void>) => {
        await loginPage.gotoOrangehrm();
        await use();
    },

 logout: async ({userPage}: { userPage: import('../pages/UserPage').UserPage }, use: (r?: any) => Promise<void>) => {
        await use();
        await userPage.logout();
    }
});

export {expect} from '@playwright/test'
