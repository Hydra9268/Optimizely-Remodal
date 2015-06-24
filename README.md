## Optimizely A/B Test Adjustments for Modal, Step 1

#### Purpose

This script lets Optimizely users make A/B adjustments to their modal content based on certain conditions. For example I want to A/B test *passive* versus *aggressive* messaging that appears in a modal on a third page after 10 seconds. Optimizely cannot handle complex A/B tests like these.

**Note: Due to Optimizely's automatic A/B switching this script won't work on multi-step modals.**

For example a visitor comes to a site. Optimizely routes them to the `Test B variant` modal and messaging. From the modal the visitor inserts their email address. They visit Gmail and click on the confirmation link. On their return visit Optimizely automatically routes them over to the `Test A variant` modal and messaging. The visitor is then greeted with a completely different message. This effectively breaks the A/B test. I recommend implementing this script on singular modals, or "Step 1" if a modal happens to have multiple steps.

#### Use

In order for this script to work the valid cookiename must be found. You can set the cookiename and desire valid to
what it should be.

#### Options

Set the values in the script.

`COOKIENAME`

Name of cookie to check.

`CHECKWAIT`

Forces jQuery to wait this long in milliseconds before doing anything.

`CHECKSPEED`

How fast in milliseconds for listener to check DOM for existance of PC modal. This is important because most modal libraries do not update the DOM until after the modal is triggered; either by a click event or some other method. Because of this you'll want to delay jQuery by about 0.5 - 0.75 seconds (your preference). This should force the cookie check, modal population and jQuery adjustments to happen in sequential order.

`THEEND`

When to completely terminate the script.
