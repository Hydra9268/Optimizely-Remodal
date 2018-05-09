## Optimizely A/B Test Adjustments for AJAX Modal

#### Purpose

This script lets Optimizely users make A/B adjustments to their modal content based on certain conditions. For example, I want to A/B test *passive* versus *aggressive* messaging that appears in a modal on a third page after 10 seconds. Optimizely cannot handle complex A/B tests like these.

**Note: Due to Optimizely's automatic A/B switching this script won't work on multi-step modals.**

For example, when a visitor comes to a site, Optimizely routes them to the `Test B variant` modal and messaging. The visitor inserts their email address. They visit Gmail and click on the confirmation link. On their return visit, Optimizely automatically routes them over to the `Test A variant` modal and showing a different message to the visitor. This process breaks the A/B test. I recommend implementing this script on modals that do not have steps.

The script also works with AJAX-driven content.

#### Use

For this script to work a valid cookie name must be found. You can set the cookie name and value pair. 

#### Options

Set the values in the script.

`COOKIENAME`

Name of cookie to check.

`CHECKWAIT`

This Listener waits for the modal's DOM to populate, and it is vital because most modal libraries do not update the DOM until after the modal is triggered either by a click event or some other method. Because of this, you'll want to delay jQuery by about 0.5 - 0.75 seconds (your preference). This action should force the cookie check, modal population, and jQuery adjustments to happen in sequential order.

`CHECKSPEED`

How fast in milliseconds for the listener to check DOM for the existence of the modal.

`THEEND`

How long to way until completing terminating the script if cookie name cannot be found.

#### Files

`optimizely-remodal.js`

Developer version with full comments and console.log output

`optimizely-remodal.min.js`

Minified and compressed; no comments and console.log output
