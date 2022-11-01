const colors = [
  'green',
  'red',
  'blue',
  'yellow',
  'orange',
  'purple',
  'pink',
  'black',
  'orange',
  'hotpink',
  'springgreen',
  'gray',
  'brown',
  'cyan',
  'magenta',
  'teal',
  'indigo',
  'violet',
  'lime',
  'maroon',
  'navy',
  'olive',
  'silver',
  'aqua',
  'fuchsia',
  'gold'
]

const colorContainer = document.getElementById('color-container')
const button = document.getElementById('button')

button.addEventListener('click', () => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)]

  colorContainer.style.background = randomColor
  button.style.background = randomColor

  const h1 = document.createElement('h1')
  colorContainer.innerHTML = ''
  colorContainer.appendChild(h1)

  const colorText =
    randomColor.charAt(0).toUpperCase() + randomColor.substring(1)
  h1.textContent = colorText
})
