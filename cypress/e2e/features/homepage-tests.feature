Feature: Sweet Shop Homepage

    Scenario Outline: I want to see the Sweet Shop Homepage
        Given I visit the <url> url
        Then I see <title> title in the tab

        Examples:
            | url | title        |
            | "/" | "Sweet Shop" |