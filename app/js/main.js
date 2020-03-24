$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu_md, .header').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.menu-list__link_md').click(function (event) {
    $('.header__burger, .header__menu_md, .header').removeClass('active');
    $('body').removeClass('lock');
  });

  $('.catalog-item__slider, .production__slider, .feedbacks__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button class="slick-arrow slick-prev"><svg width="9"height="15"viewBox="0 0 9 15"fill="none"xmlns="http://www.w3.org/2000/svg"> <path d="M0.219231 6.96469L6.96466 0.221501C7.26065 -0.0737362 7.74019 -0.0737362 8.03692 0.221501C8.33291 0.516738 8.33291 0.996281 8.03692 1.29152L1.82653 7.49966L8.03618 13.7078C8.33216 14.003 8.33216 14.4826 8.03618 14.7786C7.74019 15.0738 7.2599 15.0738 6.96392 14.7786L0.218484 8.03545C-0.0729542 7.74326 -0.0729542 7.25619 0.219231 6.96469Z"fill="#1A3152"/> </svg></button>',
    nextArrow: '<button class="slick-arrow slick-next"><svg width="9"height="15"viewBox="0 0 9 15"fill="none"xmlns="http://www.w3.org/2000/svg"> <path d="M8.78077 8.03531L2.03534 14.7785C1.73936 15.0737 1.25981 15.0737 0.96308 14.7785C0.667094 14.4833 0.667094 14.0037 0.963079 13.7085L7.17347 7.50034L0.963824 1.29219C0.667838 0.996956 0.667838 0.517414 0.963823 0.221429C1.25981 -0.0738087 1.7401 -0.0738087 2.03608 0.221429L8.78152 6.96455C9.07295 7.25674 9.07295 7.74381 8.78077 8.03531Z"fill="#1A3152"/> </svg></button>',

  });

  $('.clients__slider').slick({
    responsive: [
      {
        breakpoint: 1000000,
        settings: 'unslick'
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          prevArrow: '<button class="slick-arrow slick-prev"><svg width="9"height="15"viewBox="0 0 9 15"fill="none"xmlns="http://www.w3.org/2000/svg"> <path d="M0.219231 6.96469L6.96466 0.221501C7.26065 -0.0737362 7.74019 -0.0737362 8.03692 0.221501C8.33291 0.516738 8.33291 0.996281 8.03692 1.29152L1.82653 7.49966L8.03618 13.7078C8.33216 14.003 8.33216 14.4826 8.03618 14.7786C7.74019 15.0738 7.2599 15.0738 6.96392 14.7786L0.218484 8.03545C-0.0729542 7.74326 -0.0729542 7.25619 0.219231 6.96469Z"fill="#1A3152"/> </svg></button>',
          nextArrow: '<button class="slick-arrow slick-next"><svg width="9"height="15"viewBox="0 0 9 15"fill="none"xmlns="http://www.w3.org/2000/svg"> <path d="M8.78077 8.03531L2.03534 14.7785C1.73936 15.0737 1.25981 15.0737 0.96308 14.7785C0.667094 14.4833 0.667094 14.0037 0.963079 13.7085L7.17347 7.50034L0.963824 1.29219C0.667838 0.996956 0.667838 0.517414 0.963823 0.221429C1.25981 -0.0738087 1.7401 -0.0738087 2.03608 0.221429L8.78152 6.96455C9.07295 7.25674 9.07295 7.74381 8.78077 8.03531Z"fill="#1A3152"/> </svg></button>',
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          prevArrow: '<button class="slick-arrow slick-prev"><svg width="9"height="15"viewBox="0 0 9 15"fill="none"xmlns="http://www.w3.org/2000/svg"> <path d="M0.219231 6.96469L6.96466 0.221501C7.26065 -0.0737362 7.74019 -0.0737362 8.03692 0.221501C8.33291 0.516738 8.33291 0.996281 8.03692 1.29152L1.82653 7.49966L8.03618 13.7078C8.33216 14.003 8.33216 14.4826 8.03618 14.7786C7.74019 15.0738 7.2599 15.0738 6.96392 14.7786L0.218484 8.03545C-0.0729542 7.74326 -0.0729542 7.25619 0.219231 6.96469Z"fill="#1A3152"/> </svg></button>',
          nextArrow: '<button class="slick-arrow slick-next"><svg width="9"height="15"viewBox="0 0 9 15"fill="none"xmlns="http://www.w3.org/2000/svg"> <path d="M8.78077 8.03531L2.03534 14.7785C1.73936 15.0737 1.25981 15.0737 0.96308 14.7785C0.667094 14.4833 0.667094 14.0037 0.963079 13.7085L7.17347 7.50034L0.963824 1.29219C0.667838 0.996956 0.667838 0.517414 0.963823 0.221429C1.25981 -0.0738087 1.7401 -0.0738087 2.03608 0.221429L8.78152 6.96455C9.07295 7.25674 9.07295 7.74381 8.78077 8.03531Z"fill="#1A3152"/> </svg></button>',
        }
      }
    ]
  });

  $('.header__btn, .footer__btn, .catalog__fixed-btn_calc, .catalog__fixed-btn_des, .intro__btn, .header__menu-btn, .tab-bar__item_des, .tab-bar__item_calc, .tab-bar__item_tel, .catalog-item__btn').magnificPopup({
    type: 'inline',
    midClick: true
  });

  $(document).ready(function () {
    $('.production__video-start').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  });


  $(".tel-input__field,.catalog__get-field").mask("+375 (99) 999-99-99");

  $(".form-designer").validate({
    rules: {
      tel: {
        required: true,
      },
    },
    messages: {
      tel: {
        required: "Укажите, пожалуйста, номер телефона",
      }
    },
    submitHandler: function () {
      const succesModal = document.querySelector('#succes-modal');
      succesModal.style.display = "block";
    }
  });

  $(".form-loc").validate({
    rules: {
      tel: {
        required: true,
      },
    },
    messages: {
      tel: {
        required: "Укажите, пожалуйста, номер телефона",
      }
    },
    submitHandler: function () {
      const succesModal = document.querySelector('#succes-modal');
      succesModal.style.display = "block";
    }
  });

  $(".form-calc").validate({
    rules: {
      tel: {
        required: true,
      },
    },
    messages: {
      tel: {
        required: "Укажите, пожалуйста, номер телефона",
      }
    },
    submitHandler: function () {
      const succesModal = document.querySelector('#succes-modal');
      succesModal.style.display = "block";
    }
  });

  $(".form-call").validate({
    rules: {
      tel: {
        required: true,
      },
    },
    messages: {
      tel: {
        required: "Укажите, пожалуйста, номер телефона",
      }
    },
    submitHandler: function () {
      const succesModal = document.querySelector('#succes-modal');
      succesModal.style.display = "block";
    }
  });

  $(".form-des").validate({
    rules: {
      tel: {
        required: true,
      },
    },
    messages: {
      tel: {
        required: "Укажите, пожалуйста, номер телефона",
      }
    },
    submitHandler: function () {
      const succesModal = document.querySelector('#succes-modal');
      succesModal.style.display = "block";
    }
  });

  $(".form-get").validate({
    rules: {
      tel: {
        required: true,
      },
    },
    messages: {
      tel: {
        required: "Укажите, пожалуйста, номер телефона",
      }
    },
    submitHandler: function () {
      const succesModal = document.querySelector('#succes-modal');
      succesModal.style.display = "block";
    }
  });


  $(".form-calculate").validate({
    rules: {
      tel: {
        required: true,
      },
    },
    messages: {
      tel: {
        required: "Укажите, пожалуйста, номер телефона",
      }
    },
    submitHandler: function () {
      const succesModal = document.querySelector('#succes-modal');
      succesModal.style.display = "block";
    }
  });


  $(".header__menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });


        $('.catalog-item__slider').magnificPopup({
          delegate: 'a',
          type: 'image',
          mainClass: 'mfp-img-mobile',
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><svg width="9"height="15"viewBox="0 0 9 15"fill="none"xmlns="http://www.w3.org/2000/svg"> <path d="M0.219231 6.96469L6.96466 0.221501C7.26065 -0.0737362 7.74019 -0.0737362 8.03692 0.221501C8.33291 0.516738 8.33291 0.996281 8.03692 1.29152L1.82653 7.49966L8.03618 13.7078C8.33216 14.003 8.33216 14.4826 8.03618 14.7786C7.74019 15.0738 7.2599 15.0738 6.96392 14.7786L0.218484 8.03545C-0.0729542 7.74326 -0.0729542 7.25619 0.219231 6.96469Z"fill="#1A3152"/> </svg></button>',
          gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
        });    
    


});


const select = document.querySelector('.calc-form__select');
const succesModal = document.querySelector('#succes-modal');

select.addEventListener('click', function () {
  select.classList.toggle('active');
});

const modalClose = document.querySelector('.succes__modal-btn_close');

modalClose.addEventListener('click', function () {
  succesModal.style.display = "none";
});

window.addEventListener('click', function () {
  succesModal.style.display = "none";
});












