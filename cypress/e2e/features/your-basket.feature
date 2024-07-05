Feature: Sweets Shop Your Basket page

    Scenario Outline: Verify that the user sees the Your Basket page
        Given User visits the <url> url
        Then User sees <title> title in the tab
        * User sees <url> url in the searchbar

        Examples:
            | url       | title        |
            | "/basket" | "Sweet Shop" |