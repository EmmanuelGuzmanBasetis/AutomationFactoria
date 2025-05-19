import { Locator, Page } from '@playwright/test';

export class StorePage{
    readonly page: Page;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]');
    }
    
}