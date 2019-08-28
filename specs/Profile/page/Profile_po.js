class ProfilePage {

    //get homeButton () {return $$("a.ui-menuitem-link.ui-corner-all.ng-star-inserted")[0]}
    //get dashboardButton () {return $$("a.ui-menuitem-link.ui-corner-all.ng-star-inserted")[1]};
    get profileButton () {return $("button.ng-tns-c3-12.ui-button.ui-widget.ui-state-default.ui-corner-left.ui-button-text-icon-left")};
    get editProfileButton () {return $("button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-icon-left.ng-star-inserted")};
    get editingOptions() {return ("a.ui-menuitem-link.ui-corner-all.ng-star-inserted")};
    get projectsTabpanel () {return ("a#ui-tabpanel-21-label")};
    get editorSettingsTabpanel () {return ("a#ui-tabpanel-22-label")};
    get lineHeightInput() {return $$("input.ng-untouched.ng-pristine.ng-valid")[0]};
    get fontSizeInput() {return $$("input.ng-untouched.ng-pristine.ng-valid")[1]};
    get tabSizeInput() {return $$("input.ng-untouched.ng-pristine.ng-valid")[2]};
    get saveButton() {return $("button.settings-btn.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only.ng-star-inserted")}
};

module.exports = ProfilePage;
