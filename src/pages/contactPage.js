import { BasePage } from "./basePage";

class ContactPage extends BasePage {

	constructor() {
		super(`contact`, `(//input[@formcontrolname="email"])`);

		this.submitBtn = this.getElement(`(//input[@type="submit"])`);
		this.alerts = this.getElements(`(//div[contains(@class,'alert-danger')])`);
		this.firstNameFld = this.getElement(`//input[@id='first_name']`);
		this.lastNameFld = this.getElement(`//input[@id='last_name']`);
		this.emailFld = this.getElement(`//input[@id='email']`);
		this.subjectDropdownArw = this.getElement(`//select[@id='subject']`);
		this.subjectOptions = this.getElements(`(//select[@data-test="subject"])/option`);
		this.messageFld = this.getElement(`//textarea[@id='message']`);

	
	}

	async clickSubmit() {
		return (await this.submitBtn).click();
	}

	async areAlertsVisible() {
		for (let i = 0; i < (await this.alerts).length; i++) {
			await this.alerts[i].isDisplayed();

			if (await this.alerts[i].isDisplayed()) {
				return true;
			} else {
				return false;
			}
		}
	}

	async enterFirstName(firstName) {
		return (await this.firstNameFld).setValue(firstName);
	}

	async enterLastName(lastName) {
		return (await this.lastNameFld).setValue(lastName);
	}

	async enterEmail(email) {
		return (await this.emailFld).setValue(email);
	}

	async clickSubjectDropdownArw() {
		return (await this.subjectDropdownArw).click();
	}

	async selectSubject(subject) {
		for(const option of await this.subjectOptions) {
			if(await option.isDisplayed()) {
				if(await option.getText() == subject) {
					await option.click();
					break;
				}
			}
		}
	}

	async enterMessage(message) {
		return (await this.messageFld).setValue(message);
	}

	async submitFillDataAndSubmitForm() {
		await this.enterFirstName(`John`);
		await this.enterLastName(`Doe`);
		await this.enterEmail(`john@email.com`);
		await this.clickSubjectDropdownArw();
		await this.selectSubject(`Webmaster`);
		await this.enterMessage(`This is a test message`);
	}

}

export { ContactPage }
