
import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { browser } from "@wdio/globals";
import { HomePage } from "../pages/homePage"
import { ContactPage } from "../pages/contactPage";

describe(`Tuliptech Assessment`, async () => {

	let homePage;
	let contactPage;

	beforeEach(`Setup the browser & go to the home page`, async () => {
		homePage = new HomePage();

		await browser.setWindowSize(1440, 900);
		await homePage.goToURL();

		const pageIsOpen = await homePage.isPageOpen();
		assert.isTrue(pageIsOpen, `Page is not open`);
	});

	it(`Form Submission Validation`, async () => {
		await homePage.clickContactMenuLink();

		contactPage = new ContactPage();

		await contactPage.isPageOpen();
		await contactPage.clickSubmit();

		const alertsAreVisible = await contactPage.areAlertsVisible();
		assert.isTrue(alertsAreVisible, `Alerts are not visible`);

		await contactPage.submitFillDataAndSubmitForm();
	});

});
