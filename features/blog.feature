@smokeTest
Feature: Blog
    @blog
	Scenario: Create a blog article and save as draft
		Given User is on Login Page 
		When User enters "demo@fork-cms.com" and "demo"
		Then I click on Blog from left menu
        And I click on Add Article link
        Then I enter the blog article data and Save as draft
        And I logout from blog page

    @blog
    Scenario: Create a blog article and publish
		Given User is on Login Page 
		When User enters "demo@fork-cms.com" and "demo"
		Then I click on Blog from left menu
        And I click on Add Article link
        Then I enter the blog article data and publish
        And I logout from blog page