Feature: Sweets Shop Your Basket page

    Scenario Outline: Verify that the user sees the Your Basket page
        Given User visits the <url> url
        Then User sees <title> title in the tab
        * User sees <url> url in the searchbar

        Examples:
            | url       | title        |
            | "/basket" | "Sweet Shop" |

    Scenario Outline: Verify that the user sees all elements in the Your Basket page
        Given User visits the <url> url
        Then User sees the First name textbox
        * User sees the Last name textbox
        * User sees the Email textbox
        * User sees the Address textbox
        * User sees the Address 2 textbox
        * User sees the Country dropdown menu
        * User sees the City dropdown menu
        * User sees the Zip texbox
        * User sees the Name on card textbox
        * User sees the Credit card number textbox
        * User sees the Expiration texbox
        * User sees the CVV textbox
        * User sees the Continue to checkout button

        Examples:
            | url       |
            | "/basket" |