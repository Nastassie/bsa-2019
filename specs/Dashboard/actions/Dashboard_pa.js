const DashboardPage = require('../page/Dashboard_po');
const page = new DashboardPage();

class DashboardActions {


    addButtonClick() {
        
        page.addButton.waitForDisplayed(2000);
        page.addButton.click();
    }

    clickMyProjectTab(){
        page.menuTabs[1].waitForDisplayed(2000);
        page.menuTabs[1].click();
    }
    clickCardMenuButton() {
        page.menuProjectCard[0].waitForDisplayed(2000);
        page.menuProjectCard[0].click();
    }
    clickProjectDetailsButton() {
        page.detailsProject.waitForDisplayed(2000);
        page.detailsProject.click(); 
    }
    clickProjectSettingsButton() {
        page.settingsProject.waitForDisplayed(2000);
        page.settingsProject.click(); 
    }
    getProjectTitle() {
        page.titleProjectCard[0].waitForDisplayed(2000);
        page.titleProjectCard[0].getText();
    }

  
}

module.exports = DashboardActions;
