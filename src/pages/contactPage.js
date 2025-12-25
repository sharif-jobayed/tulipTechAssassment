import { BasePage } from "./basePage";

class ContactPage extends BasePage {

	constructor() {
		super(`contact`, `(//input[@formcontrolname="email"])`);

		this.submitBtn = this.getElement(`(//input[@type="submit"])`);
		this.alerts = this.getElement(`(//div[contains(@class,'alert-danger')])`);
	}

	async clickSubmit() {
		(await this.submitBtn).click();
		console.log(`The submit button was clicked}`);
	}

	async areAlertsVisible() {
		for(let i = 0; i < (await this.alerts).length; i++) {
			await this.alerts[i].isDisplayed();

			if(await this.alerts[i].isDisplayed()) {
				return true;
			} else {
				return false;
			}
		}
	}
}

export { ContactPage }
