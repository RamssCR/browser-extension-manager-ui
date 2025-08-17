export const state = {
  extensions: []
}

export const loadData = async () => {
  const res = await fetch('./src/data/data.json')
  state.extensions = await res.json()
}
