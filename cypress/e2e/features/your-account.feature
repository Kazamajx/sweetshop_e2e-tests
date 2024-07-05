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

    Scenario Outline: Verify that the user sees the correct number of sweets put in the basket in the Your Account page
        Given User visits the <url1> url
        * User adds to the basket <number> sweets clicking on the Add to Basket button
        * User visits the <url2> url
        * User is logged into the Sweets Shop platorm with <email> email and <password> password
        Then User sees <number> sweets in the Your account page
        * User sees <number> sweets in the Basket list

        Examples:
            | url1       | url2     | email           | password | number |
            | "/sweets"  | "/login" | "test@user.com" | "ttt"    | "5"    |
            | "/sweets"  | "/login" | "test@user.com" | "ttt"    | "7"    |

    Scenario Outline: Verify that user can delete some sweets from the basket
        Given User visits the <url1> url
        * User adds to the basket <sweetsToAdd> sweets clicking on the Add to Basket button
        * User visits the <url2> url
        * User is logged into the Sweets Shop platorm with <email> email and <password> password
        When User clicks on the Delete item button for <sweetsToDelete> sweets in the basket
        Then User sees the correct number of sweets in the Basket adding <sweetsToAdd> sweets and deleting <sweetsToDelete> sweets
        * User sees the correct number of sweets in the Basket list adding <sweetsToAdd> sweets and deleting <sweetsToDelete> sweets

        Examples:
            | url1       | url2     | email           | password | sweetsToAdd | sweetsToDelete |
            | "/sweets"  | "/login" | "test@user.com" | "ttt"    | "5"         | "2"            |
            | "/sweets"  | "/login" | "test@user.com" | "ttt"    | "7"         | "2"            |


    Scenario Outline: Verify that the user sees the Previous Orders table
        Given User visits the <url> url
        * User is logged into the Sweets Shop platorm with <email> email and <password> password
        Then User sees the Previous Orders table
        
        Examples:
            | url      | email           | password |
            | "/login" | "test@user.com" | "ttt"    |