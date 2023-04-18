interface CartPage {
	readonly firstNameInput: string;
	readonly lastNameInput: string;
	readonly zipCodeInput: string;
	readonly continueButton: string;
	readonly finishButton: string;

	fillForm(firstName: string, lastName: string, zipCode: string): Promise<void>;
	clickContinueButton(): Promise<void>;
	clickFinishButton(): Promise<void>;
}

const { I } = inject();

const page: CartPage = {
	firstNameInput: '#first-name',
	lastNameInput: '#last-name',
	zipCodeInput: '#postal-code',
	continueButton: '.btn_primary.cart_button',
	finishButton: '.btn_action.cart_button',

	async fillForm(firstName, lastName, zipCode) {
		await I.waitForElement(this.firstNameInput);
		await I.fillField(this.firstNameInput, firstName);
		await I.waitForElement(this.lastNameInput);
		await I.fillField(this.lastNameInput, lastName);
		await I.waitForElement(this.zipCodeInput);
		await I.fillField(this.zipCodeInput, zipCode);
	},

	async clickContinueButton() {
		await I.waitForElement(this.continueButton);
		await I.click(this.continueButton);
	},

	async clickFinishButton() {
		await I.waitForElement(this.finishButton);
		await I.click(this.finishButton);
	},
};

export = page;
