
Feature: Login
    @login @smokeTest
	Scenario Outline: Successful Login with Valid Credentials
		Given User is on Login Page
		When User enters "<username>" and "<password>"
		Then I validate that login is Successful
		And I logout and navigate back to homepage
		Examples:
			| username                  | password |
			| demo@fork-cms.com         | demo     |
    
	@notImplemented
    Scenario Outline: Login with Invalid Credentials
		Given User is on Login Page
		When User enters "<invalidUsername>" and "<invalidPassword>"
		Then validation error message is displayed
		Examples:
			| invalidUsername    | invalidPassword |
			| abc@mailinator.com | jas123          |