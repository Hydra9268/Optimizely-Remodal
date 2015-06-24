Optimizely A/B Test Adjustments for Modal, Step 1

The purpose of this script is to give Optimizely users the ability to make A/B adjustments to modal content on after
the modal triggers based on certain condition. For example the modal will appear on a third pages after 10 seconds.

USE

In order for this script to work the valid cookiename must be found. You can set the cookiename and desire valid to
what it should be.

#### Options

Feel free to adjust the following.

`COOKIENAME`

Name of cookie to check

`CHECKWAIT`

Wait value (forces jQuery to wait this long in millaseconds before doing anything)

`CHECKSPEED`

How fast in milliseconds for OptimizelyPcCheck to check DOM for PC modal

`THEEND`

When to completely terminate the script
