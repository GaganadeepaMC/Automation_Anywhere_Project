class MessageBoxPage {
  constructor(page) {
    this.page = page;
    this.taskBotOption = 'text=Task Bot';
    this.nameField = '#taskName';
    this.createBtn = '#create';
    this.messageBoxAction = 'text=Message Box';
    this.saveBtn = '#save';
    this.successMsg = '.toast-success';
  }

  async createTask(name) {
    await this.page.click(this.taskBotOption);
    await this.page.fill(this.nameField, name);
    await this.page.click(this.createBtn);
  }

  async addMessageBox() {
    await this.page.dblclick(this.messageBoxAction);
  }

  async saveTask() {
    await this.page.click(this.saveBtn);
  }
}

module.exports = MessageBoxPage;
