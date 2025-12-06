import { Page } from '@playwright/test';

export class App {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto('/app');
  }

  async navigateToCommunication(submenu: 'notice board' | 'add notice' | 'manage notices' | 'notice recipients'): Promise<void> {
    // Open Communication menu (use first() since there might be duplicates)
    await this.page.getByTestId('menu-communication').first().click();
    
    // Click on submenu item (use first() since there might be duplicates)
    const submenuId = `submenu-${submenu.toLowerCase().replace(/\s+/g, '-')}`;
    await this.page.getByTestId(submenuId).first().click();
  }
}
