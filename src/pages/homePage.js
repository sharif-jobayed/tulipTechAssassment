import { BasePage } from "./basePage";

class HomePage extends BasePage {

	constructor() {
		super(``, `(//div[@class='container'])[3]`);
	}

	async goToContactPage() {
		return this.clickOnElement(`(//a[@routerlink="/contact"])`);
	}
}

export { HomePage }
