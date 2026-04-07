class DashboardPage {
    constructor(page) {
        this.page = page;
        this.automationMenu = 'text=Automation';
        this.createDropdown = 'text=Create';
    }

    async navigateToAutomation() {
        await this.page.click(this.automationMenu);
    }

    async clickCreate() {
        await this.page.click(this.createDropdown);
    }
}

module.exports = DashboardPage;