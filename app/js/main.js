import tabs from './tabs';


window.addEventListener('DOMContentLoaded', () => {

  $('.works__items').slick({
    slidesToShow: 4,
    prevArrow: '.left-arrow',
    nextArrow: '.right-arrow',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },

    ]
  })
  $('.news__slider').slick({
    slidesToShow: 3,
    prevArrow: '.news__left',
    nextArrow: '.news__right',
    responsive: [
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 500,
        settings:'unslick'
      }
    ]
  })
  $('.instagram__slider').slick({
    slidesToShow: 6,
    prevArrow: '.instagram__left',
    nextArrow: '.instagram__right',
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 650,
        settings:'unslick'
      }

    ]
  })


  $('.header__burger').on('click', function () {
    $('.header__list').slideToggle()
  })

  const size = () => {
    const items = document.querySelectorAll('.news__slide');
    const wrapper = document.querySelector('.news__slider');
    window.addEventListener('resize', e => {
      if (window.innerWidth < 500 && items.length > 3) {
        wrapper.textContent = '';
        for (let i = 0; i < 3; i++) {
          wrapper.append(items[i])
        }
      }
    })
    if(window.innerWidth < 500 && items.length > 3){
      wrapper.textContent = '';
      for (let i = 0; i < 3; i++) {
        wrapper.append(items[i])
      }
    }
  }
  size();

  if(document.body.dataset.title === 'card'){
    tabs('.tabs__buttons','.tabs__button','.tabs__item','tabs__button--active');
    $('.card__slider').slick({
      slidesToShow: 4,
      prevArrow: '.card-left',
      nextArrow: '.card-right',
      asNavFor: '.card__slider-top',
      focusOnSelect: true
    })
  
    $('.card__slider-top').slick({
      slidesToShow: 1,
      arrows:false,
      fade:true,
      asNavFor: '.card__slider'
    })

    const mobile = () => {
      const inner = document.querySelector('.card__inner');
      const title = document.querySelector('.card__title');
      let height = title.scrollHeight;
      window.addEventListener('resize', e => {
        height = title.scrollHeight;
        if (window.innerWidth < 1000) {
          inner.style.paddingTop = 30 + height + 'px';
        }
      })
      if(window.innerWidth < 1000){
        inner.style.paddingTop = 30 + height + 'px';
      }
    }
    mobile();

  }


})

