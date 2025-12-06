import { Page } from '@playwright/test';

type NoticeData = { title: string; description: string };

export class Notices {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto('/app/notices');
  }

  async new(noticeData: NoticeData): Promise<void> {
    const titleInput = this.page.getByTestId('add-notice-title');
    const descriptionInput = this.page.getByTestId('add-notice-description');
    const statusSelect = this.page.getByTestId('add-notice-status');

    await titleInput.fill(noticeData.title);
    await descriptionInput.fill(noticeData.description);
    
    // Select first valid status (skip "None" which is disabled)
    await statusSelect.click();
    await this.page.getByRole('option').nth(1).click();

    const submitButton = this.page.getByTestId('save-notice-button');
    await submitButton.click();
  }
}
