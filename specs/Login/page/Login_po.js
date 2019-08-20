class LoginPage {

    get loginbtn () {return $("button.login-btn.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only")};
    get signupbtn () {return $("button.signup-btn.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only")};
    get firstNameInput () {return $("input#float-firstName-input")};
    get lastNameInput () {return $("input#float-lastName-input")};
    get nicknameInput () {return $("input#float-nickName-input")}
    get emailInput () {return $('input#float-email-input')};
    get passwordInput () {return $('input[type=password]')};
    get createButton () {return $('button.auth-btn.ng-star-inserted')};
    get googleButton () {return $('button.google-btn')};
    get notificationSuccess () {return $("div.toast-success.ngx-toastr.ng-trigger.ng-trigger-flyInOut")}; 
    get logOutButton () {return $("button.ui-splitbutton-menubutton.ui-button.ui-widget.ui-state-default.ui-corner-right.ui-button-icon-only")};
    get logOutLink () {return $("a.ui-menuitem-link.ui-corner-all.ng-tns-c3-22.ng-star-inserted")};
    get profileButton() {return $('button.ng-tns-c3-22.ui-button.ui-widget.ui-state-default.ui-corner-left.ui-button-text-icon-left')};
};

module.exports = LoginPage;

