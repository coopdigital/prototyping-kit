function exampleModule () {
  const msg = 'I\'m an example module'

  const element = document.getElementById('hello-world')
  const text = document.createTextNode(`${msg}`)

  element.appendChild(text)
  console.log(`${msg}`)
};

export default exampleModule
