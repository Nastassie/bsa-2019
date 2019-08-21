class ProjectPage {

    get addButton () {return $('button.ui-button-raised.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-icon-left')};
    
    get projectNameInput () {return $("input[placeholder=name]")};
    get descriptionInput () {return $('textarea.ng-untouched.ng-pristine.ng-invalid.ui-inputtext.ui-corner-all.ui-state-default.ui-widget')};
    get dropdownListspan () {return $$("div.ui-dropdown-trigger.ui-state-default.ui-corner-right")};
    get publicProjectAccess () {return $("div.ng-trigger.ng-trigger-overlayAnimation.ng-tns-c24-46.ui-dropdown-panel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted")};
    get optionsChoose () {return $$("li.ui-dropdown-item.ui-corner-all")};
    
    get cSharpLanguageChoose () {return $("li[aria-label=C#]")};
    get typeScriptLanguageChoose () {return $("li[aria-label=TypeScript]")};
    get javaScriptLanguageChoose () {return $("li[aria-label=JavaScript]")};
    get goLanguageChoose () {return $("li[aria-label=Go]")};
    get consoleAppTypeChoose () {return $("li[aria-label=Console App]")};
    get webAppTypeChoose () {return $("li[aria-label=Web App]")};
    get libraryTypeChoose () {return $("li[aria-label=Library]")};
    get coreCLRCompilerChoose () {return $("li[aria-label=CoreCLR]")};
    get roslynCompilerChoose () {return $("li[aria-label=Roslyn]")};
    get v8CompilerTypeChoose () {return $("li[aria-label=V8]")};
    get gcCompilerChoose () {return $("li[aria-label=Gc]")};
    get buildssavedInput () {return $("input[placeholder=builds]")};
    get buildsattemptsInput () {return $("input[placeholder='build attempts']")};
   // get colorProjectCardChoose () {return $$("p-dropdownitem.ng-tns-c18-31.ng-star-inserted")};
    get createButton () {return $("button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only")};


    get projectDetailData () {return $$("div.ui-card-content p")};

};

module.exports = ProjectPage;
