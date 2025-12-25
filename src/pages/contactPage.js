import { BasePage } from "./basePage";

class ContactPage extends BasePage {

	constructor() {
		super(`contact`, `(//input[@formcontrolname="email"])`);

		this.submitBtn = this.getElement(`(//input[@type="submit"])`);
		this.alerts = this.getElement(`(//div[contains(@class,'alert-danger')])`);
	}

	async clickSubmit() {
		return (await this.submitBtn).click();
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
