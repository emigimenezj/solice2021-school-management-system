import { test, expect } from '@playwright/test';
import { Login } from '../pom/login-pom';
import { App } from '../pom/app-pom';
import { Notices } from '../pom/notices-pom';

test.describe('Notice Page', () => {
  let login: Login;
  let app: App;
  let notices: Notices;

  test.beforeEach(async ({ page }) => {
    // Login first
    login = new Login(page);
    await login.goto();

    const credentials = {
      email: 'admin@school-admin.com',
      password: '3OU4zn3q6Zh9'
    };

    await login.with(credentials);

    // Wait for dashboard/app to load
    await expect(page).toHaveURL(/.*\/app/);

    // Initialize POMs
    app = new App(page);
    notices = new Notices(page);
  });

  test('should create a new notice and verify it appears in notice board', async ({ page }) => {
    // Arrange
    const noticeData = {
      title: `Test Notice ${Date.now()}`,
      description: 'This is a test notice to verify the description field is working correctly'
    };

    // Act - Navigate to add notice page
    await app.navigateToCommunication('add notice');
    await page.waitForURL(/.*notices\/add/);

    // Act - Create new notice
    await notices.new(noticeData);

    // Wait for notice to be saved (could be redirect or toast message)
    await page.waitForTimeout(2000);

    // Assert - Check if the notice appears in the notice board
    await expect(page.getByText(noticeData.title)).toBeVisible();
  });
});