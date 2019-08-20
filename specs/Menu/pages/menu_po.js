class MenuPage {
    get homeButton () {return $$("a.ui-menuitem-link.ui-corner-all.ng-star-inserted")[0]}
    get dashboardButton () {return $$("a.ui-menuitem-link.ui-corner-all.ng-star-inserted")[1]};
    get profileButton () {return $("button.ng-tns-c3-12.ui-button.ui-widget.ui-state-default.ui-corner-left.ui-button-text-icon-left")};
    get searchInput () {return $("input.ng-tns-c2-11.ui-inputtext.ui-widget.ui-state-default.ui-corner-all.ui-autocomplete-input.ng-star-inserted")};
    get logOutButton () {return $("button.ui-splitbutton-menubutton.ui-button.ui-widget.ui-state-default.ui-corner-right.ui-button-icon-only")};
    get logOutLink () {return $("a.ui-menuitem-link.ui-corner-all.ng-tns-c3-22.ng-star-inserted")};
};

module.exports = MenuPage;

