import { test, expect } from '@playwright/test';

test('пустая форма показывает две ошибки', async ({ page }) => {
  // Открываем главную страницу 
  await page.goto('/');

  // Открываем попап входа
  await page.locator('[data-marker="login-open-button"]').click(); 
 
  // Отправка пустой формы
  await page.locator('[data-marker="login-submit-button"]').click();

  // Проверка сообщения Email
  await expect(page.locator('[data-marker="email-error"]'))
    .toHaveText('Email обязателен');

  // Проверка сообщения Пароля
  await expect(page.locator('[data-marker="password-error"]'))
    .toHaveText('Пароль обязателен');
});
