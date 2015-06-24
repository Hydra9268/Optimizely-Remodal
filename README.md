## Optimizely A/B Test Adjustments for Modal, Step 1

#### Purpose

This script lets Optimizely users make A/B adjustments to their modal content based on certain conditions. For example I want to A/B test image promotions in a modal that will appear after the third webpage and after 10 seconds based on whether a specific cookie exists. By itself Optimizely is unable to handle these kinds of A/B tests.

#### Use

In order for this script to work the valid cookiename must be found. You can set the cookiename and desire valid to
what it should be.

#### Options

Feel free to adjust the following.

`COOKIENAME`

Name of cookie to check.

`CHECKWAIT`

Forces jQuery to wait this long in milliseconds before doing anything.

`CHECKSPEED`

How fast in milliseconds for listener to check DOM for existance of PC modal.

`THEEND`

When to completely terminate the script.
