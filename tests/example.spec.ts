import { test, expect } from '@playwright/test';

test.describe('First steps on playwright', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
test('Has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Has a login button', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('User can login', async ({ page }) => {

  // Rellenar el campo de usuario
  await test.step('Fill username input', async () => {
    const usernameInput = page.locator('[data-test="username"]');
    await usernameInput.waitFor({ state: 'visible' });
    await usernameInput.fill('standard_user');
    await expect(usernameInput).toHaveValue('standard_user');
  });

  // Rellenar el campo de contraseña
  await test.step('Fill password input', async () => {
    const passwordInput = page.locator('[data-test="password"]');
    await passwordInput.waitFor({ state: 'visible' });
    await passwordInput.fill('secret_sauce');
    await expect(passwordInput).not.toBe('');
  });

  // Hacer clic en el botón de login
  await test.step('Click login button', async () => {
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();
  });

  // Verificar que la página de eCommerce cargó correctamente
  await test.step('Verify eCommerce page is visible', async () => {
    await page.waitForLoadState('networkidle');
    const eCommerceTitle = page.locator('[data-test="title"]');
    await expect(eCommerceTitle).toBeVisible();
  });
});
})
