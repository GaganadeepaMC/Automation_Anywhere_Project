class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = 'input[name="username"]';
        this.password = 'input[name="password"]';
        this.loginBtn = 'button[type="submit"]';
    }

    async goto() {
        await this.page.goto('https://www.automationanywhere.com/');
    }

    async login(user, pass) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginBtn);
    }
}

module.exports = LoginPage;