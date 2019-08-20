class DashboardPage {

    get menuTabs () {return $$("div.menu li")};
    get addButton () {return $('button.ui-button-raised.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-icon-left')};
    get starProjectCard () {return $$("div.star")};
    get menuProjectCard () {return $$("div.menu-icon i")};
    get detailsProject () {return $$("a.ui-menuitem-link.ui-corner-all.ng-star-inserted")[2]};
    get settingsProject () {return $$("a.ui-menuitem-link.ui-corner-all.ng-star-inserted")[3]};
    get titleProjectCard () {return $$("h2.title-ellipsis")};
    get authorProject () {return $$("div.ui-card-subtitle.ng-star-inserted")};
    get createddateProjectCard () {return $$("div.ui-card-content p")};

    get homeButton () {return $$("a.ui-menuitem-link.ui-corner-all.ng-star-inserted")[0]}
    get dashboardButton () {return $$("a.ui-menuitem-link.ui-corner-all.ng-star-inserted")[1]};
    get profileButton () {return $("button.ng-tns-c3-12.ui-button.ui-widget.ui-state-default.ui-corner-left.ui-button-text-icon-left")};
    get searchInput () {return $("input.ng-tns-c2-11.ui-inputtext.ui-widget.ui-state-default.ui-corner-all.ui-autocomplete-input.ng-star-inserted")};
    
};

module.exports = DashboardPage;
