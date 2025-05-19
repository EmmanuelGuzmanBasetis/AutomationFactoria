import { Locator, Page } from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]')
    }
    
    async fillUsername(username: string): Promise<void> {
        await this.usernameInput.waitFor({ state: "visible" });
        await this.usernameInput.fill(username);
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.waitFor({ state: "visible" });
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }
}