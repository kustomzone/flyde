# React Counters List - Flyde Example - WIP

![preview](preview.gif)

This is an experimental example of how to use Flyde to build a React app. It's not meant to be used in production, but rather to showcase the capabilities of Flyde.

An app that manages a list of counters. The main component is built using Flyde and integrates with an existing React code-base.

This example shows how Flyde can be used to build functional-reactive interfaces. It's far from intuitive right now and doesn't come near the performance of a modern UI library. ~~But hey, it works!~~ stopped working after some core changes. Making it work will require adding a "map" node that outputs indexed signals

## Where is the state?

- The model of the app is an array of values.
- At first, the default value (`[4, 8, 15, 16, 23, 42]`) is published.
- The subscribe node will emit it and trigger the rendering of the components
- each time a button is pressed, a new value is published, causing everything to rerender again with the right state, which is stored in the node's pins.

---

Looking to learn more about Flyde? Visit the official website at https://www.flyde.dev
