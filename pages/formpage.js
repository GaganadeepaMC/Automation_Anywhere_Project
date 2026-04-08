class FormPage {
  constructor(page) {
    this.page = page;
    this.formOption = 'text=Form';
    this.nameField = '#formName';
    this.createBtn = '#create';

    this.textBox = '#textbox';
    this.fileUpload = 'input[type="file"]';
    this.saveBtn = '#save';
    this.successMsg = '.toast-success';
  }

  async createForm(name) {
    await this.page.click(this.formOption);
    await this.page.fill(this.nameField, name);
    await this.page.click(this.createBtn);
  }

  async fillForm(text, filePath) {
    await this.page.fill(this.textBox, text);
    await this.page.setInputFiles(this.fileUpload, filePath);
  }

  async saveForm() {
    await this.page.click(this.saveBtn);
  }
}

module.exports = FormPage;
