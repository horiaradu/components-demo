// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";

const application = Application.start();
let context = require.context(".", true, /_controller(\.js|\.ts)$/);
application.load(definitionsFromContext(context));

context = require.context("../../frontend/components", true, /index(\.js|\.ts)$/)
context.keys().forEach((path) => {
  const mod = context(path);

  // Check whether a module has the Controller export defined
  if (!mod.Controller) return;

  // Convert path into a controller identifier:
  //   example/index.ts -> example
  //   nav/user_info/index.ts -> nav--user-info
  const identifier = path.replace(/^\.\//, '')
    .replace(/\/index(\.js|\.ts)$/, '')
    .replace(/\//, '--');

  application.register(identifier, mod.Controller);
});

import CounterController from "./counter_controller";
application.register("counter-controller", CounterController);
