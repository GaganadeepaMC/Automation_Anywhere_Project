const { expect } = require('@playwright/test');

class FormPage {
    constructor(page) {
        this.page = page;
        this.formOption = 'text=Form';
        this.textBox = 'input[type="text"]';
        this.fileUpload = 'input[type="file"]';
        this.saveBtn = 'button:has-text("Save")';
    }

    async createForm() {
        await this.page.click(this.formOption);
    }

    async fillForm(text, filePath) {
        await this.page.fill(this.textBox, text);
        await this.page.setInputFiles(this.fileUpload, filePath);

        await expect(this.textBox).toBeVisible();
    }

    async saveForm() {
        await this.page.click(this.saveBtn);
    }
}

module.exports = FormPage;