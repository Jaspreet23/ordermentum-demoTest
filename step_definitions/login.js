const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

    Given('User is on Login Page', () => {
      const loginPage = client.page.loginPage();
      return loginPage
          .navigate()
          .waitForElementVisible('@body', 10000)
    });
    When('User enters {string} and {string}',  (username, password) => {
        const loginPage = client.page.loginPage();
        return loginPage.login(client,username,password);
      });
    Then('I validate that login is Successful', () => {
        const loginPage = client.page.loginPage();
        return loginPage.validateLogin(client);
    });
    Then('I logout and navigate back to homepage', ()=> { 
        const loginPage = client.page.loginPage();
        return loginPage.logout(client);
      });

