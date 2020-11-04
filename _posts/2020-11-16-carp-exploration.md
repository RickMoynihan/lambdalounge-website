---
layout: post
---

## Exploring Carp in unison (No not that Unison!)

Next in our occasional series of "Let's explore..." we're going to look at [Carp][Carp], a statically-typed Lisp with a Rust-like lifetime checker.

> Carp is a small programming language designed to work well for interactive and performance sensitive use cases like games,
> sound synthesis and visualizations.

So we'll explore and see what's interesting about Carp. We'll do a bit of research over the next 2 weeks, so when we stream, we'll have taken literally just a few steps more than a complete newbie!
This means YOU can help us to shape the exploration by commenting on our YouTube stream or Discord page, even if you've never looked at
Carp (or Lisp or Rust) before!

A few random facts about Carp, gleaned from HARD and THOROUGH research (a quick google) to whet your appetite:

* it has Haskell-like static type inference
* ... a Rust-like borrow-checker
* ... and a dynamic, untyped macro facility
* (excitingly, classic Lisp lists and the famous `cons` and `car` keywords only exist for the dynamic compilation phase)
* Carp compiles to readable C,
* ... and though an alpha project, it has a surprisingly rich set of libraries already
* ... including graphics and animation (its initial intended purpose)

Join us and help shape the exploration by commenting on our [YouTube stream][Livestream] or [Discord][Discord] page.

Get tickets on [EventBrite][EventBrite] or see the box below. Watch the [Livestream][Livestream].

<!-- begin widget -->
<div id="eventbrite-widget-container-128050164489"></div>
<script src="https://www.eventbrite.co.uk/static/widgets/eb_widgets.js"></script>
<script type="text/javascript">
var exampleCallback = function() {
console.log('Order complete!');
};
window.EBWidgets.createWidget({
// Required
widgetType: 'checkout',
eventId: '128050164489',
iframeContainerId: 'eventbrite-widget-container-128050164489',
// Optional
iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
onOrderComplete: exampleCallback  // Method called when an order has successfully completed
});
</script>
<!-- end widget -->

---

[Livestream]: https://www.youtube.com/watch?v=DkAVO0DJ3xg
[Discord]: https://discord.gg/JExyX9V
[EventBrite]: https://www.eventbrite.co.uk/e/lambdalounge-november-carp-tickets-128050164489
[Carp]: https://github.com/carp-lang/Carp
