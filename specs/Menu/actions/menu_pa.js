const MenuPage = require('../pages/menu_po');
const menu = new MenuPage();

class MenuActions {

    _moveToMenu() {
        menu.dropdown.waitForDisplayed(10000);
        menu.dropdown.moveTo();
    }

    navigateToProfile() {
        this._moveToMenu();
        menu.profile.waitForDisplayed(2000);
        menu.profile.click();
    }

    navigateToMyTastes() {
        this._moveToMenu();
        menu.tastes.waitForDisplayed(2000);
        menu.tastes.click();
    }

    navigateToLists() {
        this._moveToMenu();
        menu.lists.waitForDisplayed(2000);
        menu.lists.click();
    }

    navigateToVisited() {
        this._moveToMenu();
        menu.visited.waitForDisplayed(2000);
        menu.visited.click();
    }

    navigateToNewPlace() {
        this._moveToMenu();
        menu.newPlace.waitForDisplayed(2000);
        menu.newPlace.click();
    }

    navigateToSettings() {
        this._moveToMenu();
        menu.settings.waitForDisplayed(10000);
        menu.settings.click();
    }

    navigateToNotifications() {
        this._moveToMenu();
        menu.notifications.waitForDisplayed(2000);
        menu.notifications.click();
    }

    logOut() {
        this._moveToMenu();
        menu.dropdown.click();
        menu.logOut.waitForDisplayed(2000);
        menu.logOut.click();
    }

}

module.exports = MenuActions;
