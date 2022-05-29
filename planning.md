This document is meant to help plan the single page application described in `task.md`

Firstly, I should come up with a name. To accurately describe what the app does, `Arithmetic Problem Randomizer` should work for now.

Here are some steps I plan to follow during the creation of the app:

1).  There should be a container for the UI/app.
2).  The page should display the title, the question title, the user's input area, a button to submit, and it should tell
     the user whether or not their answer is correct.
3).  Optional features:
        a).  The app could keep track of the total questions answered correctly or answered.
        b).  The app could allow for multiple wrong guesses
        c).  The app could allow for multiple different types of expressions, and check boxes to save these settings
        d).  Each number in the expressions could have a minimum and maximum value that users can edit!
4).  Each expression should be randomly generated with two variables.  Each variable should have a range.
5).  A function should be called each time the user clicks submit that checks to see if the number in the input box matches the correct answer.