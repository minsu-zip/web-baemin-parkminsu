import { request } from '../apis/signIn.js'

const $form = document.querySelector('.login-form')

const isValid = (email, password) => {
  const emptyId = document.querySelector('.emptyId')
  const emptyPw = document.querySelector('.emptyPw')
  let result = true

  if (email === '') {
    emptyId.style.display = 'block'
    result = false
  } else {
    emptyId.style.display = 'none'
  }

  if (password === '') {
    emptyPw.style.display = 'block'
    result = false
  } else {
    emptyPw.style.display = 'none'
  }

  return result
}

$form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const [email, password] = [e.target.email.value, e.target.password.value]

  if (!isValid(email, password)) {
    return
  }

  await request(email, password)
})
