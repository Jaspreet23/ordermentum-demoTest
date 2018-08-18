const config = require('config')
const backEndURL = config.get('backEndURL')

module.exports = {
  url: backEndURL,
  elements:{
      body:'body',
      siteLogo:'img[class="site-icon"]',
      siteTitle:'h1[class="site-title"]',
      siteURL:'a[class="site-url"]',
      inputEmail:'#backendEmail',
      inputPassword:'#backendPassword',
      btnSubmit:'button[name="login"]',
},
  commands: [{
    /**
     * This function will log the user if
     * the username and password are correct. 
     */
    login: function (client, username, password) {
      console.log('--login-- ');
      const slowTimer = client.globals.waitForElementTimeout;
      return this
          .waitForElementVisible('@siteLogo', slowTimer)
          .waitForElementVisible('@siteTitle', slowTimer)
          .waitForElementVisible('@siteURL', slowTimer)
          .setValue('@inputEmail', username)
          .setValue('@inputPassword', password)
          .click('@btnSubmit')
          .api.pause(2000)
    }, 
    /**
     * This function will validate if login was  
     * successful by checking the Dashboard menu item
     */
    validateLogin: function (client) {
      console.log('--validateLogin-- ');
      const myAccount = client.page.myAccountPage();
      return myAccount.waitForElementVisible('@dashboardMenu',1000);       
    },
    /**
     * This function will logout the user
     * from the website
     */
    logout: function (client) {
      console.log('--validateLogout-- ');
      const slowTimer = client.globals.waitForElementTimeout;
      const myAccount = client.page.myAccountPage();
      return myAccount
          .waitForElementVisible('@dropdownToggle',slowTimer)
          .click('@dropdownToggle')
          .click('@signoutLink')   
    },
   
  }]
};