const assert = require('chai').assert;
const expect = require('chai').expect;

class CustomValidates {

    

    elementCountIs(locator, expectedQty) {
        const els = locator;
        const actualQty = els.length;

        assert.strictEqual(actualQty, expectedQty, `Expected ${expectedQty} is not equal to ${actualQty}`);
    }

    wrongValueIndicationOnField(locator) {
        const attr = locator.getAttribute('class');
        expect(attr, `${attr} doesn't include validation class`).to.include("is-danger");
    }

    wrongValueIndicationOnLable(locator) {

        const attr = locator.getAttribute('class');
        expect(attr, `${attr} doesn't include error class`).to.include("error");
    }



    errorNotificationTextIs(expectedText) {
        const notification = $('div.toast-message.ng-star-inserted');
        const actualText = notification.getText()
        assert.equal(actualText, expectedText, `Expected ${actualText} to be equal to ${expectedText}`);
    }
    tooltipNotificationTextIs(expectedText, index) {
        const notification = $("div.invalid.ng-star-inserted")[index];
        const actualText = notification.getText()
        assert.equal(actualText, expectedText, `Expected ${actualText} to be equal to ${expectedText}`);
    }

    successNotificationTextIs(expectedText) {
        
        const notification = $("div.toast-success.ngx-toastr.ng-trigger.ng-trigger-flyInOut");
        const actualText = notification.getText()
        assert.equal(actualText, expectedText, `Expected ${actualText} to be equal to ${expectedText}`);
        
    }
    InfoNotificationTextIs(expectedText) {
      
        const notification = $('div.toast.is-info.is-top div');
        const actualText = notification.getText()
        assert.equal(actualText, expectedText, `Expected ${actualText} to be equal to ${expectedText}`);
        
    }
    ChooseListForDeletion(choosenTitle) {
        assert.strictEqual(pageSteps.getListTitle(), credentials.listName);
    }
    successCreationList(expectedTitle) {
        const recentList = $$("div.media h3.title.has-text-primary")[0];
        assert.strictEqual(recentList.getText(), expectedTitle);
    }
    successnavigationToPage(expectedUrl) {
        const url = new URL(browser.getUrl());
        const actualUrl = url.hostname.toString() + url.pathname.toString();
        assert.equal(actualUrl, expectedUrl);
    }
    navigationToPage(expectedUrl) {
        const url = new URL(browser.getUrl());
        const pathname = url.pathname.slice(0,9);
        const actualUrl = url.hostname.toString() + pathname.toString();
        assert.equal(actualUrl, expectedUrl);
    }
    verifyProjectTitle(expectedProjectName) {
        const titles =  $$("h2.title-ellipsis");
        const actualProjectName = titles[titles.length-1].getText()
        assert.equal(actualProjectName, expectedProjectName)
    }

}

module.exports = CustomValidates;