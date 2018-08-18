const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Then('I click on Blog from left menu', function () {
    const myAccountPage = client.page.myAccountPage();
    return myAccountPage.selectBlog(client);
});

Then('I click on Add Article link', function () {
    const myAccountPage = client.page.myAccountPage();
    return myAccountPage.clickArticle(client);
});

Then('I enter the blog article data and Save as draft', function () {
    const myAccountPage = client.page.myAccountPage();
    return myAccountPage.saveDraftArticle(client);
});