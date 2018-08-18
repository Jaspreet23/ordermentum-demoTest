const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Then('I click on Blog from left menu', () => {
    const myAccountPage = client.page.myAccountPage();
    return myAccountPage.selectBlog(client);
});

Then('I click on Add Article link',  () => {
    const myAccountPage = client.page.myAccountPage();
    return myAccountPage.clickArticle(client);
});

Then('I enter the blog article data and Save as draft',  () => {
    const myAccountPage = client.page.myAccountPage();
    return myAccountPage.saveDraftArticle(client);
});

Then('I enter the blog article data and publish',  () => {
    const myAccountPage = client.page.myAccountPage();
    return myAccountPage.publishArticle(client);
});

Then('I logout from blog page', () => {
    const loginPage = client.page.loginPage();
    return loginPage.logout(client);
  });
