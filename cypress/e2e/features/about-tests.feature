Feature: Sweets Shop About page

    Scenario Outline: Verify that the user sees the About Homepage
        Given User visits the <url> url
        Then User sees <title> title in the tab
        * User sees <url> url in the searchbar
        * User sees services about the Sweets Shops websi

        Examples:
            | url      | title        |
            | "/about" | "Sweet Shop" |