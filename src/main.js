import { renderExtensions } from "./js/dom.js"
import { setThemeToggle } from "./js/events.js"
import { setFilter } from "./js/events.js";

const init = () => {
  renderExtensions()
  setThemeToggle()
  setFilter()
}

init()