## Optimizely A/B Test Adjustments for Modal, Step 1

#### Purpose

This script lets Optimizely users make A/B adjustments to their modal content based on certain conditions. For example I want to A/B test *passive* versus *aggressive* messaging that appears in a modal on a third page after 10 seconds based. Optimizely cannot handle complex A/B tests like these.

**Note: Due to Optimizely's automatically A/B test switching this script won't work on multi-step modals.**

For example a visitor comes to a site. Optimizely routes them to the `Test B varient` modal and messaging. From the modal the visitor inserts their email address. They visit Gmail. They find the email with a confirmation link and click on the link. On their return visit Optimizely automatically routes them over to the `Test A varient` modal and messaging. The visitor is then greeted with a completely different message. This effectively breaks the A/B test. So it's best to only implement the script on a singular modal or "Step 1" if a modal happens to have multiple steps.

#### Use

In order for this script to work the valid cookiename must be found. You can set the cookiename and desire valid to
what it should be.

#### Options

Available adjustments.

`COOKIENAME`

Name of cookie to check.

`CHECKWAIT`

Forces jQuery to wait this long in milliseconds before doing anything.

`CHECKSPEED`

How fast in milliseconds for listener to check DOM for existance of PC modal.

`THEEND`

When to completely terminate the script.
