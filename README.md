## Optimizely A/B Test Adjustments for Modal, Step 1

#### Purpose

This script lets Optimizely users make A/B adjustments to their modal content based on certain conditions. For example I want to A/B test image promotions that will appear after a third webpage, after 10 seconds based on whether a specific cookie exists. Optimizely is unable to handle these kinds of complex A/B tests. 

**Note: This script won't work on a multi-step modal with Optimizely's automatically A/B test switching.**

For example a visitor comes to a site. Optimizely routes them to the Test B varient modal and messaging. Inside the modal they enter their email address. They visit Gmail. They find the email with a confirmation link. They click on that link. On their revisit Optimizely automatically routes them over to the Test A varient modal and messaging. At this point the visitor would be greeted with a different message. This effectively breaks the A/B test. So it's best to only implement on "Step 1" of a modal... if the modal happens to have multiple steps.

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
