Feature: Sweets Shop Your Account page

    Scenario Outline: Verify that the user sees the Your Account page
        Given User visits the <url> url
        * User is logged into the Sweets Shop platorm with <email> email and <password> password
        Then User sees <title> title in the tab
        * User sees the Your account page 

        Examples:
            | url      | email           | password | title        |
            | "/login" | "test@user.com" | "ttt"    | "Sweet Shop" |

    Scenario Outline: Verify that the use sees the correct email in the Your Account page
        Given User visits the <url> url
        * User is logged into the Sweets Shop platorm with <email> email and <password> password
        Then User sees the <email> email in the Your account page

        Examples:
            | url      | email           | password |
            | "/login" | "test@user.com" | "ttt"    |

    Scenario Outline: Verify that the user sees the number of sweets ordered in the last months in the Your Account page
        Given User visits the <url> url
        * User is logged into the Sweets Shop platorm with <email> email and <password> password
        Then User sees the number of sweets ordered in the last months in the Your Account page 

        Examples:
            | url      | email           | password |
            | "/login" | "test@user.com" | "ttt"    |
