export const setThemeToggle = () => {
  const themeButton = document.querySelector('#theme-toggle')
 
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      toggleTheme()
    })
  }
}

const toggleTheme = () => {
  const body = document.body
  const header = document.querySelector('.header')
  const cards = document.querySelectorAll('#cardsContainer > div')
  const extensionsList = document.querySelector('.Extensions-list')
  const buttons = document.querySelectorAll('button')

  body.classList.toggle('bg-light-gradient')
  body.classList.remove('text-white')
  body.classList.add('text-black')

  if (header) {
    header.classList.toggle('bg-white')
  }

  cards.forEach(card => {
    card.classList.toggle('bg-white')           
    card.classList.toggle('border-white')

    const title = card.querySelector('h3')
    const description = card.querySelector('p')

    if (title) {
      if (body.classList.contains('bg-light-gradient')) {
        title.classList.remove('text-white')
        title.classList.add('text-black')
      } else {
        title.classList.remove('text-black')
        title.classList.add('text-white')
      }
    }

    if (description) {
      if (body.classList.contains('bg-light-gradient')) {
        description.classList.remove('text-neutral-300')
        description.classList.add('text-gray-600')
      } else {
        description.classList.remove('text-gray-600')
        description.classList.add('text-neutral-300')
      }
    }

    if (body.classList.contains('bg-light-gradient')) {
      body.classList.remove('text-white')
      body.classList.add('text-black')
    }
    else {
      body.classList.remove('text-black')
      body.classList.add('text-white')
    }
  })

    buttons.forEach(button => {
    if (body.classList.contains('bg-light-gradient')) {
        button.classList.toggle('bg-white')
        button.classList.remove('text-white')
        button.classList.add('text-black')
    }
    else {
        button.classList.remove('text-black')
        button.classList.add('text-white')
        button.classList.remove('bg-white')
        button.classList.add('bg-neutral-700')
        button.classList.remove('border-white')
        button.classList.add('border-neutral-600')
    }
  })
}