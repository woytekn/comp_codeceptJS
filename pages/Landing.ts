interface LandingPage {
	readonly backpackProduct: string;
	readonly cartIcon: string;
	readonly appLogo: string;
	clickBackpackProduct(): Promise<void>;
	clickIconCart(): Promise<void>;
	getAppLogo(): Promise<string>;
}

const { I } = inject();

const page: LandingPage = {
	backpackProduct: '#add-to-cart-sauce-labs-backpack',
	cartIcon: '.shopping_cart_link',
	appLogo: '.app_logo',

	async clickBackpackProduct() {
		await I.waitForElement(this.backpackProduct);
		await I.click(this.backpackProduct);
	},

	async clickIconCart() {
		await I.waitForElement(this.cartIcon);
		await I.click(this.cartIcon);
	},

	async getAppLogo() {
		return await I.grabAttributeFrom(this.appLogo, 'src');
	},
};

export = page;
