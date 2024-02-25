Feature: This is an example

    Scenario Outline: I want to see the Hyntelo website
        Given I want to visit the Hyntelo website
        Then I see <title> title in the tab

        Examples:
            | title                           |
            | "Hyntelo - Power up your data!" |