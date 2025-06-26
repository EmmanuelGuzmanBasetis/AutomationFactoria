# 🎯 Playwright Cheatsheet (con TypeScript)

## 🔧 Instalación
```bash
npm init playwright@latest
# o manualmente:
npm install -D @playwright/test
npx playwright install
```

## 🧱 Estructura Básica de un Test
```ts
import { test, expect } from '@playwright/test';

test('mi primer test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
```

## 🌐 Navegación
```ts
await page.goto('https://example.com');
await page.reload();
await page.goBack();
await page.goForward();
```

## 🎯 Selectores
```ts
await page.locator('text=Login');
await page.locator('css=button.login');
await page.locator('role=button[name="Login"]');
await page.getByTestId('submit-button');
```

## ✍️ Interacción con la Página
```ts
await page.click('text=Login');
await page.fill('#username', 'usuario123');
await page.type('#password', '123456');
await page.press('#input', 'Enter');
await page.selectOption('#pais', 'argentina');
await page.check('#terminos');
await page.uncheck('#newsletter');
```

## 📸 Screenshots y Video
```ts
await page.screenshot({ path: 'screenshot.png' });
await page.video().saveAs('test-video.webm');
```

## ✅ Assertions (Validaciones)
```ts
await expect(page).toHaveURL(/.*dashboard/);
await expect(page.locator('h1')).toHaveText('Bienvenido');
await expect(page.locator('input')).toBeVisible();
await expect(page.locator('button')).toBeEnabled();
```

## 🔁 Esperas y Tiempo
```ts
await page.waitForTimeout(2000);
await page.waitForSelector('#result');
```

## 📚 Hooks y Test Configuration
```ts
test.beforeEach(async ({ page }) => {
  await page.goto('https://miapp.com');
});

test.describe('Grupo de pruebas', () => {
  test('caso A', async ({ page }) => {});
});
```

## 🔄 Parámetros de Test / Fixtures
```ts
test.use({
  viewport: { width: 1280, height: 720 },
  storageState: 'estado.json',
});
```

## 🗂 Page Object Model (POM) – Ejemplo
```ts
import { Locator, Page } from '@playwright/test'

export class StorePage{
  readonly page: Page
  readonly title: Locator

  constructor(page: Page) {
    this.page = page
    this.title = page.locator('[data-test="title"]')
  }

}
```

## 📦 Ejecutar Tests
```bash
npx playwright test
npx playwright test login.spec.ts
npx playwright test --project=chromium
npx playwright show-report
```

## 🌍 Dispositivos y Navegadores
```ts
projects: [
  { name: 'chromium', use: { browserName: 'chromium' }},
  { name: 'firefox', use: { browserName: 'firefox' }},
  { name: 'mobile', use: devices['iPhone 12'] },
]
```

## 📬 Test de API
```ts
const requestContext = await request.newContext();
const response = await requestContext.get('https://api.com/user');
expect(response.status()).toBe(200);
const data = await response.json();
```

## ⚙️ Configuración `playwright.config.ts`
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://miapp.com',
  },
});
```