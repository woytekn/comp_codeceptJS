import { expect } from 'chai';
import LoginPage from '../pages/Login';
import LandingPage from '../pages/Landing';
import CartPage from '../pages/Cart';
import CheckoutPage from '../pages/Checkout';
import testData from '../helpers/testData';

Feature('Login');

Scenario('Successful login', async ({ I }) => {
	const username = 'standard_user';
	const password = 'secret_sauce';

	await I.amOnPage('https://www.saucedemo.com/');
	await LoginPage.login(username, password);

	// Verify that the user has been logged in by checking the page URL
	const currentUrl = await I.grabCurrentUrl();
	expect(currentUrl).to.include('/inventory.html');

	// Add product to cart and open the cart
	await LandingPage.clickBackpackProduct();
	await LandingPage.clickIconCart();
	expect(LandingPage.appLogo).to.exist;

	// Click checkout
	await CartPage.clickCheckoutButton();

	// Fill the checkout form and continue
	await CheckoutPage.fillForm(
		testData.shippingInfo.firstName,
		testData.shippingInfo.lastName,
		testData.shippingInfo.zipCode
	);
	await CheckoutPage.clickContinueButton();

	// Click finish
	await CheckoutPage.clickFinishButton();
});
