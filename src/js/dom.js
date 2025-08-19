import { state } from "./state.js"

export const renderExtensions = () => {
  const container = document.querySelector("#cardsContainer")
  container.innerHTML = ""

  state.extensions.forEach(item => {
    const card = `
<div class="mx-[20px] sm:mx-0 md:mx-0 lg:mx-0 bg-neutral-700 rounded-[15px] p-5 border border-neutral-600">
  <div class="flex">
    <div class="flex-shrink-0">
      <img src="${item.logo}" alt="${item.name}" class="h-14 w-14 rounded-xl" />
    </div>
    <div class="flex-1 ml-4">
      <h3 class="text-xl font-semibold text-white">${item.name}</h3>
      <p class="text-sm text-neutral-300">${item.description}</p>
    </div>
  </div>
  <div class="flex justify-between mt-4">
    <button class="cursor-pointer px-5 py-2 bg-neutral-700 text-white rounded-[20px] border border-neutral-600 hover:bg-neutral-500 transition-colors">
      Remove
    </button>
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" ${item.isActive ? 'checked' : ''} class="sr-only peer">
      <div class="relative w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-500 peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
    </label>
  </div>
</div>
    `
    container.insertAdjacentHTML('beforeend', card)
  })
}

