import { Page } from '@playwright/test';

type Credentials = { email: string; password: string };

export class Login {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto('/auth/login');
  }

  async with(credentials: Credentials): Promise<void> {
    const emailInput = this.page.getByTestId('username-input');
    const passwordInput = this.page.getByTestId('password-input');

    await emailInput.fill(credentials.email);
    await passwordInput.fill(credentials.password);

    const submitButton = this.page.getByTestId('submit-login-button');
    await submitButton.click();
  }
}
