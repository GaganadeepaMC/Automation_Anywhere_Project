class DashboardPage {
  constructor(page) {
    this.page = page;
    this.automationMenu = 'text=Automation';
    this.createDropdown = '#createBtn';
  }

  async goToAutomation() {
    await this.page.click(this.automationMenu);
  }

  async clickCreate() {
    await this.page.click(this.createDropdown);
  }
}

module.exports = DashboardPage;
