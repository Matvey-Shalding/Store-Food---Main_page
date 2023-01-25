
const burger = document.querySelector('.menu-burger')
burger.addEventListener('click',e => {
  document.body.classList.toggle('menu-burger-open')
})
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const email = document.querySelector('.subscribe-form input[type="text"]')
const submitButton = document.querySelector('.subscribe-form input[type="submit"]')
const subscribeForm = document.querySelector('.subscribe-form')
  document.addEventListener('input',e => {
    if (EMAIL_REGEXP.test(email.value)) {
      email.classList.remove('wrong')
      email.classList.add('correct')
      submitButton.classList.remove('disabled')
    }
    else if (!EMAIL_REGEXP.test(email.value) && email.value){
      email.classList.remove('correct')
      email.classList.add('wrong')
      submitButton.classList.add('disabled')
    }
    else if(!email.value) {
      submitButton.classList.remove('disabled')
      email.classList.remove('correct')
      email.classList.remove('wrong')
    }
  })
subscribeForm.addEventListener('submit',function (e) {
  if (email.classList.contains('wrong') || email.value === "") {
    e.preventDefault()
  }
})
submitButton.addEventListener('click',function () {
  if(email.classList.contains('wrong') || email.value === "") {
    let createdSpan = document.createElement('span')
    let createdSpanText = document.createTextNode('Injected email address is invalid')
    createdSpan.appendChild(createdSpanText)
    document.body.appendChild(createdSpan)
    createdSpan.setAttribute('class', 'pop-up')
    setTimeout(() => createdSpan.classList.add('delete'),4000)
  }
})
const tabSitem = document.querySelectorAll('.recruitment-header-item')
const tabsBody = document.querySelectorAll('.recruitment-body')
tabSitem.forEach(item => {
  item.addEventListener('click',e => {
    tabSitem.forEach(i => i.classList.remove('current'))
    item.classList.add('current')
    switch (item.textContent) {
      case 'TREASURE':
        tabsBody.forEach(i => i.classList.remove('show'))
        tabsBody.forEach(i => i.classList.add('hide'))
        document.querySelector('.recruitment-body.treasure-item').classList.remove('hide')
        document.querySelector('.recruitment-body.treasure-item').classList.remove('show')
        break;

      case 'Новый мир':
        tabsBody.forEach(i => i.classList.remove('show'))
        tabsBody.forEach(i => i.classList.add('hide'))
        document.querySelector('.recruitment-body.new-world-item').classList.remove('hide')
        document.querySelector('.recruitment-body.new-world-item').classList.remove('show')
        break;

      case 'Здоровье тела':
        tabsBody.forEach(i => i.classList.remove('show'))
        tabsBody.forEach(i => i.classList.add('hide'))
        document.querySelector('.recruitment-body.body-health-item').classList.remove('hide')
        document.querySelector('.recruitment-body.body-health-item').classList.remove('show')
        break;

      case 'Detox':
        tabsBody.forEach(i => i.classList.remove('show'))
        tabsBody.forEach(i => i.classList.add('hide'))
        document.querySelector('.recruitment-body.detox-item').classList.remove('hide')
        document.querySelector('.recruitment-body.detox-item').classList.remove('show')
        break;

      default:
        break;
    }
  })
})

tabSitem[0].click()
const swiper = new Swiper(".swiper", {
  spaceBetween: 123,
  slidesPerView: 'auto',
  pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },
});
const goodsSubtitles = document.querySelectorAll('.goods-subtitle')
const goodsCards = document.querySelectorAll('.goods-cards')
goodsSubtitles.forEach(item => {
  item.addEventListener('click',e => {
    goodsSubtitles.forEach(i => i.classList.remove('current'))
    item.classList.add('current')
    switch (item.textContent) {
      case 'Популярные товары':
        goodsCards.forEach(it  => {
          it.classList.remove('show')
          it.classList.add('hide')
          document.querySelector('.goods-cards.popular').classList.add('show')
        })
        break;
      case 'Акции':
        goodsCards.forEach(it => {
          it.classList.remove('show')
          it.classList.add('hide')
          document.querySelector('.goods-cards.sales').classList.add('show')
        })
      case 'Просмотренные':
        goodsCards.forEach(it => {
          it.classList.remove('show')
          it.classList.add('hide')
          document.querySelector('.goods-cards.seen').classList.add('show')
        })
      default:
        break;
    }
  })
})
goodsSubtitles[0].click()
