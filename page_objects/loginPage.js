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
    login: function (client, username, password) {
      console.log('--login-- ');
      const slowTimer = client.globals.waitForElementTimeout;
      console.log('slowTimer= '+ slowTimer);
      return this
          .waitForElementVisible('@siteLogo', slowTimer)
          .waitForElementVisible('@siteTitle', slowTimer)
          .waitForElementVisible('@siteURL', slowTimer)
          .setValue('@inputEmail', username)
          .setValue('@inputPassword', password)
          .click('@btnSubmit')
          .api.pause(2000)
    }, 
    validateLogin: function (client) {
      console.log('--validateLogin-- ');
      const myAccount = client.page.myAccount();
      return myAccount.waitForElementVisible('@dashboardMenu',1000);       
    },
    logout: function (client) {
      console.log('--validateLogout-- ');
      const slowTimer = client.globals.waitForElementTimeout;
      const myAccount = client.page.myAccount();
      return myAccount
          .waitForElementVisible('@dropdownToggle',slowTimer)
          .click('@dropdownToggle')
          .click('@signoutLink')   
    },
   
  }]
};