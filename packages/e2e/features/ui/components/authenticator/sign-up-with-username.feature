Feature: Sign Up with Username

  Create a new user in the Amazon Cognito UserPool by passing the new user’s email address, password, and other attributes.

  Background:
    Given I'm running the example "ui/components/authenticator/sign-up-with-username"

  @react
  Scenario: Login mechanism set to "username"
    Then I see "Username" as an input field

  @react 
  Scenario: "Preferred Username" is included from `aws_cognito_signup_attributes`
    Then I see "Preferred Username" as a "text" field

  @react 
  Scenario: "Email" is included from `aws_cognito_verification_mechanisms`
    Then I see "Email" as an "email" field
  
  @react 
  Scenario: "Phone Number" is not included
    Then I don't see "Phone Number"
  
  @react 
  Scenario: Sign up a new username & password
    Given I intercept '{ "headers": { "X-Amz-Target": "AWSCognitoIdentityProviderService.SignUp" } }' with fixture "sign-up-with-username"
    When I type a new "username"
    And I type my password
    And I confirm my password
    And I type my "email" with status "UNCONFIRMED"
    And I type a new "preferred username"
    And I click the "Create Account" button
    Then I see "Your code is on the way"
    And I see "Confirmation Code"

  @react
  Scenario: Username field autocompletes username
    Then "Username" field autocompletes "username"

  @react
  Scenario: Password fields autocomplete "new-password"
    Then "Password" field autocompletes "new-password"
    And "Confirm Password" field autocompletes "new-password"
