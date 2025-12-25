
import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { browser } from "@wdio/globals";
import { HomePage } from "../pages/homePage"
import { ContactPage } from "../pages/contactPage";

describe(`Tuliptech Assessment`, async () => {

	const homePage = new HomePage();

	beforeEach(`Setup the browser`, async () => {
		await browser.setWindowSize(1440, 900);
		await homePage.goToURL();

		const pageIsOpen = await homePage.isPageOpen();
		assert.isTrue(pageIsOpen, `Page is not open`);
	});

	it(`Form Submission Validation`, async () => {
		await homePage.goToContactPage();

		const contactPage = new ContactPage();

		if (await contactPage.isPageOpen()) {
			await contactPage.clickSubmit();
			assert.isTrue(await contactPage.areAlertsVisible(), `Alerts are not visible`);
		}


	});

});