---
layout: post
---

We welcome [Michael Arnaldi][MA] to talk about [effect-ts][EffectTS]!

## Practical FP in TypeScript with Effect-Ts

In this talk we are going to take a look at the fundamental modules of [effect-ts][EffectTS], a full port of [ZIO][ZIO] and [ZIO-prelude][ZIOP] in typescript. As in ZIO the backbone of effect-ts is a stack-safe, fiber-based, highly scalable, effect system that enables development of highly concurrent applications that performs well (up to 4x better compared to native javascript Promise) and are both pleasant to maintain and easy to write. 

Furthermore the effect-system is used to provide a set of modules that target very common use cases that every application needs like: type-safe dependency injection, environment construction, managed resources, concurrent queues, streams and many more. 

By leveraging the full power of the TypeScript static type system and its ability to infer really well we are able to provide both a very safe environment while not paying too much in terms of boilerplate.

With the effect-ts we are able target efficient development both in node.js (making it a perfect choice for io-bound workloads that don’t require the full power and tradeoffs of a JVM or of a native implementation) and in the browser (with lightweight dedicated data types).

Join us and help shape the exploration by commenting on our [YouTube stream][Livestream] or [Discord][Discord] page.

Get tickets on [EventBrite][EventBrite] or see the box below. Watch the [Livestream][Livestream].

<!-- begin widget -->
<div id="eventbrite-widget-container-136168516699"></div>

<script src="https://www.eventbrite.co.uk/static/widgets/eb_widgets.js"></script>

<script type="text/javascript">
    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '136168516699',
        iframeContainerId: 'eventbrite-widget-container-136168516699',

        // Optional
        iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
</script>
<!-- end widget -->

---

[Livestream]: https://www.youtube.com/watch?v=LhCPPrxUUNM
[Discord]: https://discord.gg/JExyX9V
[EventBrite]: https://www.eventbrite.co.uk/e/lambdalounge-jan-fp-in-typescript-with-effect-ts-tickets-136168516699
[EffectTS]: https://github.com/Matechs-Garage/effect-ts
[ZIO]: https://zio.dev/
[ZIOP]: https://github.com/zio/zio-prelude
[MA]: https://twitter.com/michaelarnaldi?lang=en