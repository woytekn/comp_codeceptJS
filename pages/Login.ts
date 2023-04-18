interface LoginPage {
	readonly usernameField: string;
	readonly passwordField: string;
	readonly loginButton: string;
	login(username: string, password: string): Promise<void>;
}

const { I } = inject();

const page: LoginPage = {
	usernameField: '#user-name',
	passwordField: '#password',
	loginButton: '#login-button',

	async login(username: string, password: string) {
		await I.waitForElement(this.usernameField);
		await I.fillField(this.usernameField, username);

		await I.waitForElement(this.passwordField);
		await I.fillField(this.passwordField, password);

		await I.waitForElement(this.loginButton);
		await I.click(this.loginButton);
	},
};

export = page;
