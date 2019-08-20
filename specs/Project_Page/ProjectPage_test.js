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

   xit('create a new project', () => {
       
      browser.pause(5000);
       Help.createNewProject(1, 1, 1,3);
       validate.successNotificationTextIs(credentials.notificationProjectCreateSuccess);
       wait.forNotificationToDisappear(); 
       
       validate.navigationToPage(credentials.projectDetailsUrl);
       browser.url(credentials.dashboardMyProjectsUrl);
       browser.pause(5000);
       validate.verifyProjectTitle(credentials.projectName)
       browser.pause(5000); 

       Help.logOut();
       
   });

   
          
   
});