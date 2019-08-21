const credentials = require('./../testData.json');
const Help = require('../../helpers/helpers');
const Assert = require('../../helpers/validators');
const Wait = require('../../helpers/waiters');
const validate = new Assert();
const wait = new Wait();

describe('Online-IDE', () => {
    
    beforeEach(() => {
       browser.maximizeWindow();
       browser.url(credentials.appUrl);
       Help.loginWithDefaultUser();
       wait.forSpinner();
    
   });

   afterEach(() => {
       browser.reloadSession();
   });

   xit('delete a project', () => {
       
     
       expectednotification = Help.returnExpectedNotificationDeletionProject();
       
       Help.clickProjectDetailsOnCard();
       browser.pause(1000);
       validate.navigationToPage(credentials.projectDetailsUrl);
       const projectUrl = Help.returnUrl();
       Help.DeleteProject();
     
        
        validate.successNotificationTextIs(expectednotification);
        wait.forNotificationToDisappear(); 
       
       browser.url(projectUrl.toString());
       validate.errorNotificationTextIs(credentials.errormessage);
       wait.forNotificationToDisappear(); 
       Help.logOut();
       
   });

   
          
   
});