const credentials = require('./../testData.json');
const Help = require('../../helpers/helpers');
const Assert = require('../../helpers/validators');
const Wait = require('../../helpers/waiters');
const LoginPage = require('./page/Auhtentication_po');
const page = new LoginPage();
const validate = new Assert();
const wait = new Wait();
const assert = require('chai').assert;
describe('Online-IDE', () => {
    
    beforeEach(() => {
       browser.maximizeWindow();
       browser.url(credentials.appUrl);
       browser.pause(1000);

    
   });

   afterEach(() => {
       browser.reloadSession();
   });

   xit('registion a new account', () => {
       
      
       Help.registerNewAccount(credentials.name, credentials.surname, credentials.nickname, credentials.email, credentials.password);
      /* validate.notificationTextIs(credentials.notificationRegistrationSuccess);
       wait.forNotificationToDisappear();      
       validate.notificationTextIs(credentials.notificationInfo);
       wait.forNotificationToDisappear(); */

       browser.pause(5000); 
       Help.logOut();
       Help.loginWithCustomUser(credentials.email, credentials.password);
       validate.notificationTextIs(credentials.notificationLoginSuccess);
       wait.forNotificationToDisappear(); 

       Help.logOut();
       
   });

   xit('log in with valid data', () => {
       
      
    Help.loginWithDefaultUser();
    validate.notificationTextIs(credentials.notificationLoginSuccess);
    wait.forNotificationToDisappear(); 
    browser.pause(5000); 
    Help.logOut();
    
    });

    xit('log in with invalid data', () => {
       
      
        Help.loginWithCustomUser(credentials.email, credentials.changedPassword);
        validate.notificationTextIs(credentials.notificationLoginError);
        wait.forNotificationToDisappear(); 
       
        
        });
    xit('log in with empty fields', () => {
       
      
        Help.loginWithCustomUser('', '');
        validate.notificationTextIs(credentials.notificationLoginError);
        wait.forNotificationToDisappear(); 
       
        
        });
    xit('registration with empty fields', () => {
       
      
        Help.registerNewAccount('', '', '', '', '');
        validate.notificationTextIs(credentials.notificationError);
        wait.forNotificationToDisappear(); 
           
            
        });
    xit('register with already used email', () => {
       
      
        Help.registerNewAccount(credentials.name, credentials.surname, credentials.nickname, credentials.email, credentials.password);
        validate.notificationTextIs(credentials.notificationError);
        wait.forNotificationToDisappear(); 
                   
                    
        });
    xit('register with email without domain', () => {
           
          
        Help.registerNewAccount(credentials.name, credentials.surname, credentials.nickname, 'test@test', credentials.password);
        validate.notificationTextIs(credentials.notificationError);
        wait.forNotificationToDisappear(); 
               
                
        });
    xit('recovery password with invalid email', () => {
           
          
        Help.recoveryPassword(credentials.notRegisteredEmail);
        validate.notificationTextIs(credentials.notificationErrorRecovery);
        wait.forNotificationToDisappear(); 
               
                
        });
    xit('recovery password with registered email', () => {
           
          
        Help.recoveryPassword(credentials.email);
        validate.notificationTextIs(credentials.notificationSuccessRecovery);
        wait.forNotificationToDisappear(); 
                   
                    
        });
    xit('recovery password with invalid data', () => {
           
          
        Help.recoveryPassword(credentials.invalidEmail);
        validate.notificationTextIs(credentials.notificationInvalidDataRecovery);
        wait.forNotificationToDisappear(); 
                       
                        
        });
   
});