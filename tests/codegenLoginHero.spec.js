import { test, expect } from '@playwright/test';

test.describe('Login page generated by Codegen', () => {

	test('Codegen Login with Correct Username and Correct Password', async ({ page }) => {
		await page.goto('https://the-internet.herokuapp.com/login');
		await page.getByLabel('Username').click();
		await page.getByLabel('Username').fill('tomsmith');
		await page.getByLabel('Password').click();
		await page.getByLabel('Password').fill('SuperSecretPassword!');
		await page.getByRole('button', { name: ' Login' }).click();
		await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
		await expect(page.locator('h2')).toContainText('Secure Area');
		await expect(page.locator('h4')).toContainText('Welcome to the Secure Area. When you are done click logout below.');
	});

	test('Codegen Login with Correct Username and Wrong Password', async ({ page }) => {
		await page.goto('https://the-internet.herokuapp.com/login');
		await page.getByLabel('Username').click();
		await page.getByLabel('Username').fill('tomsmith');
		await page.getByLabel('Password').click();
		await page.getByLabel('Password').fill('UknownPassword');
		await page.getByRole('button', { name: ' Login' }).click();
		await expect(page.getByText('Your password is invalid! ×')).toBeVisible();
		await expect(page.locator('#flash')).toContainText('Your password is invalid!');
	});

	test('Codegen Login with Wrong Username and Correct Password', async ({ page }) => {
		await page.goto('https://the-internet.herokuapp.com/login');
		await page.getByLabel('Username').click();
		await page.getByLabel('Username').fill('someone');
		await page.getByLabel('Password').click();
		await page.getByLabel('Password').fill('SuperSecretPassword!');
		await page.getByRole('button', { name: ' Login' }).click();
		await expect(page.getByText('Your username is invalid! ×')).toBeVisible();
	});

	test('Codegen Login with Wrong Username and Wrong Password', async ({ page }) => {
		await page.goto('https://the-internet.herokuapp.com/login');
		await page.getByLabel('Username').click();
		await page.getByLabel('Username').fill('wrongUser');
		await page.getByLabel('Password').click();
		await page.getByLabel('Password').fill('wrongPassword');
		await page.getByRole('button', { name: ' Login' }).click();
		await expect(page.getByText('Your username is invalid! ×')).toBeVisible();
	});

	test('Codegen Login with empty fields', async ({ page }) => {
		await page.goto('https://the-internet.herokuapp.com/login');
		await page.getByLabel('Username').click();
		await page.getByLabel('Password').click();
		await page.getByRole('button', { name: ' Login' }).click();
		await expect(page.getByText('Your username is invalid! ×')).toBeVisible();
	});
})
