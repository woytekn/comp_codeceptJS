interface CartPage {
	readonly checkoutButton: string;
	clickCheckoutButton(): Promise<void>;
}

const { I } = inject();

const page: CartPage = {
	checkoutButton: '#checkout',

	async clickCheckoutButton() {
		await I.waitForElement(this.checkoutButton);
		await I.click(this.checkoutButton);
	},
};

export = page;
