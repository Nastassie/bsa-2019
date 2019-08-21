const credentials = require('./../testData.json');
const Help = require('../../helpers/helpers');
const Assert = require('../../helpers/validators');
const Wait = require('../../helpers/waiters');
const validate = new Assert();
const wait = new Wait();
const assert = require('chai').assert;
describe('Online-IDE', () => {
    
    beforeEach(() => {
       browser.maximizeWindow();
       browser.url(credentials.appUrl);
       browser.pause(5000);
       Help.loginWithDefaultUser();
       wait.forSpinner();
    
   });

   afterEach(() => {
       browser.reloadSession();
   });

   xit('create a new project with valid data', () => {
       
      browser.pause(5000);
       Help.createNewProject(1, 1, 1, 1, 3);
       validate.successNotificationTextIs(credentials.notificationProjectCreateSuccess);
       wait.forNotificationToDisappear(); 
       
       validate.navigationToPage(credentials.projectDetailsUrl);
       browser.url(credentials.dashboardMyProjectsUrl);
       browser.pause(5000);
       validate.verifyProjectTitle(credentials.projectName)
       browser.pause(5000); 

       Help.logOut();
       
   });
   xit('create a new project with too short name', () => {
       
    browser.pause(5000);
     Help.inputDataInFormCreateProject("1", "test", "1", "0", 1, 1, 1, 8);
     Help.logOut();
     
 });
 it('create a new project with too long name', () => {
       
    browser.pause(5000);
     Help.inputDataInFormCreateProject("this name is too long to be use for our purpose", "test", "1", "0", 1, 1, 1, 8);
     Help.logOut();
     
 });
   
          
   
});