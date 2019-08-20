const LoginActions = require('../specs/Login/actions/Login_pa');
const page = new LoginActions();
const ProjectPageActions = require('../specs/Project_Page/actions/ProjectPage_pa');
const project = new ProjectPageActions();
const DashboardActions = require('../specs/Dashboard/actions/Dashboard_pa');
const dashboard = new DashboardActions();
const credentials = require('./../specs/testData.json');

class HelpClass 
{

    clickItemInList(name) {
        const place = $$(`//div[contains(@class, "place-item")]//h3/a[contains(., "${name}")]`);
        if (place.length === 0) {
            throw new Error("Element not found");
        }
        //place[0].scrollIntoView();
        place[0].click();
    }

    browserClick(elm){ return browser.execute((e) => {document.querySelector(e).click(); }, elm); }

    browserClickOnArrayElement(elm, index){return browser.execute((e, i) => {document.querySelectorAll(e)[i - 1].click();}, elm, index);}
       
    loginWithDefaultUser() {
        browser.maximizeWindow();
        browser.url(credentials.appUrl);
        page.clickloginbtn();
        page.enterEmail(credentials.email);
        page.enterPassword(credentials.password);
        page.clickCreateButton();
    }
    
    loginWithCustomUser(email, password) {
        browser.maximizeWindow();
        browser.url(credentials.appUrl);
        page.clickloginbtn();
        page.enterEmail(email);
        page.enterPassword(password);
        page.clickCreateButton();
    }

    registerNewAccount(name, surname, nickname, email, password) {

        page.clickSignupbtn();
     
        browser.pause(3000);
        page.enterFirstName(name);
        page.enterLastName(surname);
        page.enterNickname(nickname);
        page.enterEmail(email);
        page.enterPassword(password);
        page.clickCreateButton();
    }

    logOut() {
        page.clickLogOutButton();
        this.browserClickOnArrayElement("a.ui-menuitem-link.ui-corner-all.ng-star-inserted", 3);
    }

    createNewProject(ind1, ind2, ind3, ind4) {

        project.addButtonClick();
        browser.pause(2000);
        project.enterProjectName(credentials.projectName);
        project.enterDescription(credentials.description);
        this.browserClickOnArrayElement("div.ui-dropdown-trigger.ui-state-default.ui-corner-right", 1);
        this.browserClickOnArrayElement("li.ui-dropdown-item.ui-corner-all", ind1);
        browser.pause(2000);
        //project.chooseCLanguage();
        this.browserClickOnArrayElement("div.ui-dropdown-trigger.ui-state-default.ui-corner-right", 2);
        this.browserClickOnArrayElement("li.ui-dropdown-item.ui-corner-all", ind2);
        browser.pause(2000);
        //project.chooseConsoleAppType();
        this.browserClickOnArrayElement("div.ui-dropdown-trigger.ui-state-default.ui-corner-right", 3);
        this.browserClickOnArrayElement("li.ui-dropdown-item.ui-corner-all", ind3);
        browser.pause(2000);
        // project.chooseCoreCLRCompiler();
        project.enterBuildsNumbers(credentials.buildsNumber);
        project.enterBuildsAttempts(credentials.buildAttempts);
        this.browserClickOnArrayElement("div.ui-dropdown-trigger.ui-state-default.ui-corner-right", 4);
        this.browserClickOnArrayElement("div.ui-helper-clearfix.ng-star-inserted", ind4);
        browser.pause(2000);
      //  project.chooseProjectCardColor(ind4);

        project.clickCreateButton();

    }

    checkProjectDetailsData(index) {
        assert(page.getTextProjectDetails(index),credentials.projectName);
    }

    clickprojectItemOnDashboard(name) {
        const project = $$(`//h2[contains(., "${name}")]`);
        if (project.length === 0) {
            throw new Error("Element not found");
        }
        project[0].scrollIntoView();
        project[0].click();
    }
    returnNameofDeletedProject(){
        dashboard.clickMyProjectTab();
        browser.pause(5000);
        browser.pause(5000);
        const projectNameDeleted = $$("h2.title-ellipsis")[0].getText();
        return projectNameDeleted;
    }
    clickProjectDetailsOnCard() {

       // dashboard.clickMyProjectTab();
        browser.pause(5000);
        
        dashboard.clickCardMenuButton();
        browser.pause(5000);
        this.browserClickOnArrayElement("a.ui-menuitem-link.ui-corner-all.ng-star-inserted", 3);
    }
    DeleteProject() {
        const deletebtn = $$("button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-icon-left")[2];
        deletebtn.click();
        browser.pause(5000); 
        const deletebtnconfirm = $$("button.undefined.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-icon-left.ng-star-inserted")[0];
        deletebtnconfirm.click();
    }
    returnUrl (){
        const urlPage = new URL(browser.getUrl());
        return urlPage;
    }
}

module.exports = new HelpClass();