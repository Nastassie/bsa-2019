const ProjectPage = require('../page/ProjectPage_po');
const page = new ProjectPage();

class ProjectPageActions {


    addButtonClick() {
        
        page.addButton.waitForDisplayed(2000);
        page.addButton.click();
    }
    enterProjectName(value) {
        page.projectNameInput.waitForDisplayed(2000);
        page.projectNameInput.setValue(value);
    }
    enterDescription(value) {
        page.descriptionInput.waitForDisplayed(2000);
        page.descriptionInput.setValue(value);
    }
   /* chooseLanguage(index) {
        page.dropdownListspan[0].waitForDisplayed(2000);
        page.dropdownListspan[0].click();
        page.optionsChoose(index).waitForDisplayed;
        page.optionsChoose(index).click();
    }
    chooseType(index) {
        page.dropdownListspan[1].waitForDisplayed(2000);
        page.dropdownListspan[1].click();
        page.optionsChoose(index).waitForDisplayed;
        page.optionsChoose(index).click();
    }
    chooseCompiler(index) {
        page.dropdownListspan[2].waitForDisplayed(2000);
        page.dropdownListspan[2].click();
        page.optionsChoose(index).waitForDisplayed;
        page.optionsChoose(index).click();
    }*/

   /* chooseCLanguage() {
        //page.dropdownListspan[0].waitForDisplayed(2000);
        //page.dropdownListspan[0].click();
        $("label.ng-tns-c10-13.ui-dropdown-label.ui-inputtext.ui-corner-all.ui-placeholder.ng-star-inserted").click();
        page.cSharpLanguageChoose.waitForDisplayed(2000);
        page.cSharpLanguageChoose.click();
    }
    chooseTypeScriptLanguage() {
        page.dropdownListspan[0].waitForDisplayed(2000);
        page.dropdownListspan[0].click();
        page.typeScriptLanguageChoose.waitForDisplayed(2000);
        page.typeScriptLanguageChoose.click();
    }
    chooseJavaScriptLanguage() {
        page.dropdownListspan[0].waitForDisplayed(2000);
        page.dropdownListspan[0].click();
        page.javaScriptLanguageChoose.waitForDisplayed(2000);
        page.javaScriptLanguageChoose.click();
    }
    chooseGoLanguage() {
        page.dropdownListspan[0].waitForDisplayed(2000);
        page.dropdownListspan[0].click();
        page.goLanguageChoose.waitForDisplayed(2000);
        page.goLanguageChoose.click();
    }
    chooseConsoleAppType() {
        page.dropdownListspan[1].waitForDisplayed(2000);
        page.dropdownListspan[1].click();
        page.consoleAppTypeChoose.waitForDisplayed(2000);
        page.consoleAppTypeChoose.click();
    }

    chooseWebAppType() {
        page.dropdownListspan[1].waitForDisplayed(2000);
        page.dropdownListspan[1].click();
        page.webAppTypeChoose.waitForDisplayed(2000);
        page.webAppTypeChoose.click();
    }
    chooseLibraryType() {
        page.dropdownListspan[1].waitForDisplayed(2000);
        page.dropdownListspan[1].click();
        page.libraryTypeChoose.waitForDisplayed(2000);
        page.libraryTypeChoose.click();
    }

    chooseCoreCLRCompiler() {
        page.dropdownListspan[2].waitForDisplayed(2000);
        page.dropdownListspan[2].click();
        page.coreCLRCompilerChoose.waitForDisplayed(2000);
        page.coreCLRCompilerChoose.click();
    }
    chooseRoslynCompiler() {
        page.dropdownListspan[2].waitForDisplayed(2000);
        page.dropdownListspan[2].click();
        page.roslynCompilerChoose.waitForDisplayed(2000);
        page.roslynCompilerChoose.click();
    }
    chooseV8Compiler() {
        page.dropdownListspan[2].waitForDisplayed(2000);
        page.dropdownListspan[2].click();
        page.v8CompilerChoose.waitForDisplayed(2000);
        page.v8CompilerChoose.click();
    }
    chooseGcCompiler() {
        page.dropdownListspan[2].waitForDisplayed(2000);
        page.dropdownListspan[2].click();
        page.gcCompilerChoose.waitForDisplayed(2000);
        page.gcCompilerChoose.click();
    }*/
    enterBuildsNumbers(value) {
        page.buildssavedInput.waitForDisplayed(2000);
        page.buildssavedInput.setValue(value);
    }
    enterBuildsAttempts(value) {
        page.buildsattemptsInput.waitForDisplayed(2000);
        page.buildsattemptsInput.setValue(value);
    }
  /*  chooseProjectCardColor(index) {
        page.dropdownListspan[3].waitForDisplayed(2000);
        page.dropdownListspan[3].click();
        page.colorProjectCardChoose(index).click();
    }*/
    clickCreateButton() {
        page.createButton.waitForDisplayed(2000);
        page.createButton.click();
    }
    getTextProjectDetails(index) {
        page.projectDetailData(index).waitForDisplayed(2000);
        page.projectDetailData.getText();
    }
  
}

module.exports = ProjectPageActions;
