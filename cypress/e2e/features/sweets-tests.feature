Feature: Sweets Shop Sweets page

    Scenario Outline: Verify that the user sees the Sweets page
        Given User visits the <url> url
        Then User sees <title> title in the tab
        * User sees <url> url in the searchbar

        Examples:
            | url       | title        |
            | "/sweets" | "Sweet Shop" |

    Scenario Outline: Verify that the user sees the list of sweets
        Given User visits the <url> url
        Then User sees the list of sweets
        
        Examples:
            | url       |
            | "/sweets" |

    Scenario Outline: Verify that the user sees an image, a title, a subtitle, a price and an Add to Basket butto for each sweet
        Given User visits the <url> url
        Then User sees an image within each sweet card
        * User sees a title within each sweet card
        * User sees a subtitle within each sweet card
        * User sees an Add to basket button within each sweet card

        Examples:
            | url       |
            | "/sweets" |