import { BasePage } from "./basePage";

class HomePage extends BasePage {

	constructor() {
		super(``, `(//div[@class='container'])[3]`);

		this.contactMenuLink = this.getElement(`(//a[@routerlink="/contact"])`);
	}

	async clickContactMenuLink() {
		return (await this.contactMenuLink).click();
	}
}

export { HomePage }
