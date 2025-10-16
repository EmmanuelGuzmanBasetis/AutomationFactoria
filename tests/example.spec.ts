import { test, expect } from '@playwright/test';

test('Has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Login page elements', async ({ page }) => {
  await page.goto('/');

  // Verify login form elements are present
  await expect(page.locator('#user-name')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await expect(page.locator('#login-button')).toBeVisible();
});

test('Login form functionality', async ({ page }) => {
  await page.goto('/');

  // Fill in the login form
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  
  // Verify form values
  await expect(page.locator('#user-name')).toHaveValue('standard_user');
  await expect(page.locator('#password')).toHaveValue('secret_sauce');
  
  // Note: We don't click login to avoid navigating away in this basic test
});
