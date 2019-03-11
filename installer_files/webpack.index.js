import exampleModule from './exampleModule.js'

function entryPoint () {
  const msg = "I'm the entry point!"
  const element = document.getElementById('hello-world')
  const text = document.createTextNode(`${msg}`)

  element.appendChild(text)
  console.log(`${msg}`)
}

entryPoint()
exampleModule()
