import { BasePage } from "./basePage";

class ContactPage extends BasePage {

	constructor() {
		super(`contact`, `(//input[@formcontrolname="email"])`);
	}

	async clickSubmit() {
		return this.clickOnElement(`(//input[@type="submit"])`);
	}

	async areAlertsVisible() {
		const alerts = await this.getElements(`(//div[contains(@class,'alert-danger')])`);

		for(const alert of alerts) {
			await alert.waitForDisplayed({
				timeout: 5000,
				timeoutMsg: `The element isn't visible yet`
			});

			if(await alert.isDisplayed()) {
				return true;
			} else {
				return false;
			}
		}
	}
}

export { ContactPage }
