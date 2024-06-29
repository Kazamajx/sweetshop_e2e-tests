Feature: Sweet Shop Homepage

    Scenario Outline: Verify that the user sees the Sweet Shop Homepage
        Given User visits the <url> url
        Then User sees <title> title in the tab

        Examples:
            | url | title        |
            | "/" | "Sweet Shop" |

    Scenario Outline: Verify that the user sees all sweets available in the platform
        Given User visits the <url> url
        When User clicks on the Browse Sweets button
        Then User sees <title> title in the tab
        * User sees the Sweets page

        Examples:
            | url | title        |
            | "/" | "Sweet Shop" |

    Scenario Outline: Verify that the user sees the four most popular sweets
        Given User visits the <url> url
        Then User sees the four most popular sweets
        
        Examples:
            | url |
            | "/" |