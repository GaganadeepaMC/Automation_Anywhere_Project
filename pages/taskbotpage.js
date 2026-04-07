const { expect } = require('@playwright/test');

class TaskBotPage {
    constructor(page) {
        this.page = page;
        this.taskBotOption = 'text=Task Bot';
        this.nameField = 'input[name="name"]';
        this.createBtn = 'button:has-text("Create")';
        this.messageBoxSearch = 'input[placeholder="Search actions"]';
        this.messageBox = 'text=Message Box';
        this.saveBtn = 'button:has-text("Save")';
    }

    async createTaskBot(name) {
        await this.page.click(this.taskBotOption);
        await this.page.fill(this.nameField, name);

        await expect(this.nameField).toBeVisible();

        await this.page.click(this.createBtn);
    }

    async addMessageBox() {
        await this.page.fill(this.messageBoxSearch, 'Message Box');
        await this.page.dblclick(this.messageBox);

        await expect(this.messageBox).toBeVisible();
    }

    async saveTask() {
        await this.page.click(this.saveBtn);
    }
}

module.exports = TaskBotPage;