const $checkbox = document.querySelector('.clickEvent')
const $checkList = document.querySelectorAll('.box-img')
const $normalList = document.querySelectorAll('.normal')
const $ageSelect = document.querySelector('.age-select-wrapper')
const $nextBtn = document.querySelector('.square-button')

// 체크박스 전체 off
const checkOff = () => {
  $checkList.forEach((item) => {
    item.classList.remove('checked')
    item.src = '/images/checkbox.png'
  })
}

// 체크박스 전체 on
const checkOn = () => {
  $checkList.forEach((item) => {
    item.classList.add('checked')
    item.src = '/images/checkedbox.png'
  })
}

// 다음으로 버튼 활성화 체크
const nextButton = () => {
  let checkValid = true
  $normalList.forEach((item) => {
    if (!item.classList.contains('checked')) {
      checkValid = false
    }
  })
  if (checkValid) {
    $nextBtn.disabled = false
    $nextBtn.classList.remove('disabled')
  } else {
    $nextBtn.disabled = true
    $nextBtn.classList.add('disabled')
  }
}

// 약관 클릭 이벤트
$checkbox.addEventListener('click', (e) => {
  const { className, classList } = e.target
  // 체크 박스 버튼만 적용
  if (classList.contains('box-img')) {
    // 전체동의 클릭 시 - 미선택된 상태
    if (className === 'box-img all') {
      checkOn()
      nextButton()
    }
    // 전체동의 클릭 시 - 선택된 상태
    else if (className === 'box-img all checked') {
      checkOff()
      nextButton()
    }
    // 그 외에 각각의 요소 클릭
    else if (classList.contains('checked')) {
      e.target.src = '/images/checkbox.png'
      classList.remove('checked')
      // 하나의 요소 체크 해제 시 전체동의 미선택으로 상태 변경
      $allCheckBtn = document.querySelector('.all')
      $allCheckBtn.classList.remove('checked')
      $allCheckBtn.src = '/images/checkbox.png'
      nextButton()
    } else {
      e.target.src = '/images/checkedbox.png'
      classList.add('checked')
      nextButton()
    }
  }
})

// 나이 체크 이벤트
$ageSelect.addEventListener('click', (e) => {
  const { className, classList } = e.target
  if (classList.contains('age-old-btn')) {
    e.target.src = '/images/age-old-checked.png'
    document.querySelector('.age-young-btn').src = '/images/age-young.png'
  } else {
    e.target.src = '/images/age-young-checked.png'
    document.querySelector('.age-old-btn').src = '/images/age-old.png'
  }
})

// 다음 페이지 이동 클릭 이벤트
$nextBtn.addEventListener('click', () => {
  if (!$nextBtn.classList.contains('disabled')) {
    location.href = '/signUp/phone'
  }
})
