const credentials = require('./../testData.json');
const Help = require('../../helpers/helpers');
const Assert = require('../../helpers/validators');
const Wait = require('../../helpers/waiters');
//const LoginPage = require('../Login/page/Login_po');
//const page = new LoginPage();

const validate = new Assert();
const wait = new Wait();
const assert = require('chai').assert;
describe('Online-IDE', () => {
    
    beforeEach(() => {
       browser.maximizeWindow();
       browser.url(credentials.appUrl);
       browser.pause(5000);
      //browser.url('http://bsa-ide.azurewebsites.net')
       Help.loginWithDefaultUser();
       //Wait.forSpinner();
    
   });

   afterEach(() => {
       browser.reloadSession();
   });

   it('delete a project', () => {
       
       browser.pause(5000);
       const number1 = $$("h2.title-ellipsis").length;
       projectNameDeleted = Help.returnNameofDeletedProject();
//Help.returnNameofDeletedProject(0);
       Help.clickProjectDetailsOnCard();
       browser.pause(5000);
       validate.navigationToPage(credentials.projectDetailsUrl);
       const projectUrl = Help.returnUrl();
        Help.DeleteProject();
     
        const expectednotification = `Project "${projectNameDeleted}" was successfully deleted`
        validate.successNotificationTextIs(expectednotification);
      // wait.forNotificationToDisappear(); 
       browser.pause(5000); 
       const number2 = $$("h2.title-ellipsis").length;
       assert.equal(number1, number2 +1);
       browser.url(projectUrl.toString());
       validate.errorNotificationTextIs(credentials.errormessage);
       Help.logOut();
       
   });

   
          
   
});