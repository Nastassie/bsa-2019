const credentials = require('./../testData.json');
const Help = require('../../helpers/helpers');
const Assert = require('../../helpers/validators');
const Wait = require('../../helpers/waiters');
const validate = new Assert();
const wait = new Wait();


describe('Online-IDE User profile', () => {
    
    beforeEach(() => {
       browser.maximizeWindow();
       browser.url(credentials.appUrl);
       Help.loginWithDefaultUser();
       wait.forSpinner();
    
   });

   afterEach(() => {
       browser.reloadSession();
   });


    xit('change project settings', () => {
        
        browser.pause(1000);
        Help.clickProjectSettingsOnCard();
        //wait.forSpinner();
        browser.pause(3000);
        Help.inputChangedDataInForm(credentials.changedProjectName, credentials.changeddescription, credentials.changedBuildsNumber, credentials.changedBuildAttempts, 4);
        //wait.forSpinner();

        validate.notificationTextIs(credentials.successchangedsettingsnotification);
        wait.forNotificationToDisappear();

        Help.clickProjectDetailsOnCard();
        browser.pause(3000);
        validate.checkProjectDetailsData(0, "Name: "+ credentials.changedProjectName);
        validate.checkProjectDetailsData(1, "Description: "+ credentials.changeddescription);
        validate.checkProjectDetailsData(7, "Amount of saved builds: "+ credentials.changedBuildsNumber);
        validate.checkProjectDetailsData(8, "Amount of build attempts: "+ credentials.changedBuildAttempts);
        Help.logOut();
        
    });








   
});