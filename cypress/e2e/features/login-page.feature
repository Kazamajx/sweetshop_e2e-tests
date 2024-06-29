Feature: Sweets Shop Login page

    Scenario Outline: Verify that the user sees the Sweet Shop Login page
        Given User visits the <url> url
        Then User sees <title> title in the tab
        * User sees <url> url in the searchbar
        * User sees Email address textbox
        * User sees Password textbox
        * User sees Login button

        Examples:
            | url      | title        |
            | "/login" | "Sweet Shop" |

    Scenario Outline: Verify that the user sees an error when types an email with incorrect format
        Given User visits the <url> url
        When User types <email> email in the Email address textbox
        * User types <password> password in the Password textbox
        * User clicks on the Login button
        Then User sees Please enter a valid email address error under the Email address textbox

        Examples:
            | url      | email        | password   |
            | "/login" | "wrongEmail" | "password" |

    Scenario Outline: Verify that the user sees an error when types an empty password
        Given User visits the <url> url
        When User types <email> email in the Email address textbox
        * User types <password> password in the Password textbox
        * User clicks on the Login button
        Then User sees Please enter a valid passowrd address error under the Password textbox

        Examples:
            | url      | email             | password      |
            | "/login" | "email@gmail.com" | "{backspace}" |

    Scenario Outline: Verify that the user sees the Your account page when enters correct credentials
        Given User visits the <url> url
        When User types <email> email in the Email address textbox
        * User types <password> password in the Password textbox
        * User clicks on the Login button
        Then User sees <title> title in the tab
        * User sees the Your account page

        Examples:
            | url      | email             | password |
            | "/login" | "email@gmail.com" | "tttt"   |
            

    
