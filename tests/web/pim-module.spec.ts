import{test,expect} from '../../fixtures/hooks-fixtires'
import pimModuleData from '../../testdata/pim-moudle-data.json'

test('[PIM] verify that a new emp is created under PIM',{
   tag:['@UI','@UAT','@PIM']
},async({goToUrl,leftNavigationPage,pimPage})=>{

   await test.step('Click on PIM',async()=>{
        await leftNavigationPage.openPimModule();
    })
    
    await test.step('Populating FirstName-MiddleName-LastName and saving the emp',async()=>{
        await pimPage.addEmployee(pimModuleData.first_name,pimModuleData.middle_name,pimModuleData.last_name)
    })
    
     await test.step('Verifying the added emp name',async()=>{
        await expect(pimPage.newEmpNameHeading).toHaveText(`${pimModuleData.first_name} ${pimModuleData.last_name}`)
    })
    

})
