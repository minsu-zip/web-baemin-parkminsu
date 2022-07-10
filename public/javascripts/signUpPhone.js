const $phoneNumber = document.querySelector('.input-phoneNumber')

// 휴대폰 번호 입력 검증
const verifyPhoneNumber = (e) => {
  e.target.value = e.target.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/\-{1,2}$/g, '')
}

// 체크 표시 비/활성화
const checkIcon = () => {
  const phoneNumberLength = 13
  const $inputCheckIcon =
    document.querySelector('.input-checkIcon').childNodes[0]

  if ($phoneNumber.value.length === phoneNumberLength) {
    $inputCheckIcon.style.opacity = 1
  } else {
    $inputCheckIcon.style.opacity = 0.2
  }
}

$phoneNumber.addEventListener('keyup', (e) => {
  verifyPhoneNumber(e)
  checkIcon()
})
