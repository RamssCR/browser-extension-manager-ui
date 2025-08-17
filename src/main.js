import { loadData } from "./js/state.js"
import { renderExtensions } from "./js/dom.js"

const init = async () => {
  await loadData()
  renderExtensions()
}

init()
