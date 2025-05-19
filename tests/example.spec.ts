import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page.ts";
import { StorePage } from "../pages/store.page.ts";

let loginPage: LoginPage;
let storePage: StorePage;

test.describe("First steps on playwright", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    storePage = new StorePage(page);
    await page.goto("/");
  });
  test("Has a login form", async ({ page }) => {
    test.step("Has title", async () => {
      await expect(page).toHaveTitle(/Swag Labs/);
    });

    test.step("Has a login button", async () => {
      await expect(loginPage.loginButton).toBeVisible();
    });
  });

  test("User can login", async ({ page }) => {
    // Rellenar el campo de usuario
    await test.step("Fill username input", async () => {
      await loginPage.fillUsername("standard_user");
      await expect(loginPage.usernameInput).toHaveValue("standard_user");
    });

    // Rellenar el campo de contraseña
    await test.step("Fill password input", async () => {
      await loginPage.fillPassword("secret_sauce");
      await expect(loginPage.passwordInput).not.toBe("");
    });

    // Hacer clic en el botón de login
    await test.step("Click login button", async () => {
      await loginPage.clickLoginButton();
      await expect(page).toHaveURL(/inventory/);
    });

    // Verificar que la página de eCommerce cargó correctamente
    await test.step("Verify eCommerce page is visible", async () => {
      await page.waitForLoadState("networkidle");
      await expect(storePage.title).toBeVisible();
    });
  });
});
