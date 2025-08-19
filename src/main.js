import { loadData } from "./js/state.js"
import { renderExtensions } from "./js/dom.js"
import { setThemeToggle } from "./js/events.js"

const init = async () => {
  await loadData()
  renderExtensions()
  setThemeToggle()
}

await init()
