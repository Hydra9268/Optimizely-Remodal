## Optimizely A/B Test Adjustments for AJAX Modal

#### Purpose

This script lets Optimizely users make A/B adjustments to their modal content based on certain conditions. For example I want to A/B test *passive* versus *aggressive* messaging that appears in a modal on a third page after 10 seconds. Optimizely cannot handle complex A/B tests like these.

**Note: Due to Optimizely's automatic A/B switching this script won't work on multi-step modals.**

For example a visitor comes to a site. Optimizely routes them to the `Test B variant` modal and messaging. From the modal the visitor inserts their email address. They visit Gmail and click on the confirmation link. On their return visit Optimizely automatically routes them over to the `Test A variant` modal and messaging. The visitor is then greeted with a completely different message. This effectively breaks the A/B test. I recommend implementing this script on singular modals, or "Step 1" if a modal happens to have multiple steps.

The script also works with AJAX-driven content. (Lots of stuff going on. :))

#### Use

In order for this script to work a valid cookiename must be found. You can set the cookiename and desired valid. 

#### Options

Set the values in the script.

`COOKIENAME`

Name of cookie to check.

`CHECKWAIT`

Listener waits for modal DOM to populate. This is important because most modal libraries do not update the DOM until after the modal is triggered; either by a click event or some other method. Because of this you'll want to delay jQuery by about 0.5 - 0.75 seconds (your preference). This should force the cookie check, modal population and jQuery adjustments to happen in sequential order.

`CHECKSPEED`

How fast in milliseconds for listener to check DOM for existance of PC modal.

`THEEND`

If the cookiename cannot be found this will tell how long to wait until completely terminating the script.

#### Files

`optimizely-remodal.js`

Developer version with full comments and console.log output

`optimizely-remodal.min.js`

Minified and compressed; no comments and console.log output
