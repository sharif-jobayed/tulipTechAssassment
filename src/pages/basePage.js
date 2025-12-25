import { BaseURL, Timeouts } from "../data/testData.json" assert {type: "json"};
import { $, $$, browser } from "@wdio/globals";

class BasePage {

	constructor(path, pageIdentifier) {
		this.path = path;
		this.pageIdentifier = async () => {
			return this.getElement(pageIdentifier);
		};
	}

	getPath() {
		return this.path;
	}

	async getFullPath() {
		return `${BaseURL}${this.getPath()}`;
	}

	async getElement(locator) {
		return $(locator);
	}

	async getElements(locator) {
		return $$(locator);
	}

	async goToURL() {
		return browser.url(await this.getFullPath());
	}

	async isPageOpen(timeout = Timeouts.Min) {
		(await this.pageIdentifier()).waitForDisplayed({
			timeout: timeout,
			timeoutMsg: `The element isn't visible yet`
		});

		if ((await this.pageIdentifier()).isDisplayed()) {
			console.log(`The page is open`);
			return true;
		} else {
			console.log(`The page isn't open`);
			return false;
		}
	}

}

export { BasePage }
