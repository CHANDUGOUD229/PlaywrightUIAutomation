Feature: user Authentication test

Scenario: login should be Success
Given user navigates to the Application
And user enter the username as "admin@yourstore.com"
And user enter the password as "admin"
When user click on the login button
Then Login should be Success 

Scenario: login should not be Success
Given user navigates to the Application
And user enter the username as "Admin"
And user enter the password as "adm"
When user click on the login button
Then Login should fail
