const $phoneNumber = document.querySelector('.input-phoneNumber')

// 휴대폰 번호 입력 검증
const verifyPhoneNumber = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '')
  e.target.value = e.target.value
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/\-{1,2}$/g, '')
}

$phoneNumber.addEventListener('keyup', (e) => {
  verifyPhoneNumber(e)
})
