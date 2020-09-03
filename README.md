# calculator-project

The last project in the 'JavaScripts Basics' section of The Odin Projects Web Dev 101 course.

Turns out calculators have a lot more going on behind the scenes then one might expect!
Lets see..

-I had to program in a way to round to different decimal places based on the size of the number (can't just do variable.toFixed(7)) every time.  For example, 4543.6786 and 0.8675849 have the same number of characters used but a different number of decimal places and I needed it to round to fit the answer to the screen no matter the result.

-Had to keep the equals sign and operators turned off until there were two numbers to calculate.

-needed to allow multiple key presses for each variable and track which variable the user was currently working with

-divide by 0 error catching

-needed to allow decimal points but then turn off the button after it has been used once

So the end result was a simple calculator but there is more going on then meets the eye.  As I was programming, I thought of different(better/more efficient) ways to code the project and I look forward to coming back and re-factoring with these ideas in mind.
