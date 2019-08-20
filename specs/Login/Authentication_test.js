const credentials = require('./../testData.json');
const Help = require('../../helpers/helpers');
const Assert = require('../../helpers/validators');
const Wait = require('../../helpers/waiters');
const LoginPage = require('../Login/page/Login_po');
const page = new LoginPage();
const validate = new Assert();
const wait = new Wait();
const assert = require('chai').assert;
describe('Online-IDE', () => {
    
    beforeEach(() => {
       browser.maximizeWindow();
       browser.url(credentials.appUrl);
       browser.pause(5000);
      //browser.url('http://bsa-ide.azurewebsites.net')
       //Help.loginWithDefaultUser(credentials.email, credentials.password);
       //Wait.forSpinner();
    
   });

   afterEach(() => {
       browser.reloadSession();
   });

   xit('registion a new account', () => {
       
      
       Help.registerNewAccount(credentials.name, credentials.surname, credentials.nickname, credentials.email, credentials.password);
       validate.successNotificationTextIs(credentials.notificationRegistrationSuccess);
       wait.forNotificationToDisappear(); 
       browser.pause(5000); 
       Help.logOut();
       
   });

   xit('log in with valid data', () => {
       
      
    Help.loginWithDefaultUser();
    validate.successNotificationTextIs(credentials.notificationLoginSuccess);
    wait.forNotificationToDisappear(); 
    browser.pause(5000); 
    Help.logOut();
    
    });

    xit('log in with invalid data', () => {
       
      
        Help.loginWithCustomUser(credentials.email, credentials.changedPassword);
        validate.errorNotificationTextIs(credentials.notificationLoginError);
        wait.forNotificationToDisappear(); 
       
        
        });
    xit('log in with empty fields', () => {
       
      
        Help.loginWithCustomUser('', '');
        validate.errorNotificationTextIs(credentials.notificationLoginError);
        wait.forNotificationToDisappear(); 
       
        
        });
    xit('registration with empty fields', () => {
       
      
        Help.registerNewAccount('', '', '', '', '');
        validate.errorNotificationTextIs(credentials.notificationError);
        wait.forNotificationToDisappear(); 
           
            
        });
    xit('register with already used email', () => {
       
      
        Help.registerNewAccount(credentials.name, credentials.surname, credentials.nickname, credentials.email, credentials.password);
        validate.errorNotificationTextIs(credentials.notificationError);
        wait.forNotificationToDisappear(); 
                   
                    
            });
    xit('register with email without domain', () => {
           
          
        Help.registerNewAccount(credentials.name, credentials.surname, credentials.nickname, 'test@test', credentials.password);
        validate.errorNotificationTextIs(credentials.notificationError);
        wait.forNotificationToDisappear(); 
               
                
            });

          
   
});