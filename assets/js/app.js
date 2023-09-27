const delay = 400

window.addEventListener('DOMContentLoaded', function() {

    // Меню

    const menu = document.querySelector('.header__menu')
    const header = document.querySelector('.header')
    let lock = false
    const burger = document.querySelector('.header__burger')

    if (burger) {
        burger.addEventListener('click', function() {

            if (lock) return

            lock = true

            toggleMenu()

            setTimeout(() => {
                lock = false
            }, delay)
        })

        function toggleMenu() {

            menu.classList.toggle('active')
            // header.classList.toggle('active')
            lockBody()
        }

        const menuBurger = document.querySelector('.menu__burger')

        menuBurger.addEventListener('click', function() {

            if (lock) return

            lock = true

            toggleMenu()

            setTimeout(() => {
                lock = false
            }, delay)
        })

        window.addEventListener('click', function(e) {
            if (document.querySelector('.menu.active') && !e.target.closest('.menu') && !e.target.closest('.burger')) {
                document.querySelector('.menu.active').classList.remove('active')
                lockBody()
            }

        })
    }

    const bannerMore = document.querySelector('.banner__more')

    if (bannerMore) {

        bannerMore.addEventListener('click', function() {
            const menuBanner = document.querySelector('.menu-banner')

            menuBanner.classList.add('active')
            lockBody()
        })

        closeMenuBanner = document.querySelector('.menu-banner__close')

        closeMenuBanner.addEventListener('click', function() {
            const menuBanner = document.querySelector('.menu-banner')

            menuBanner.classList.remove('active')
            lockBody()
        })
    }



    function lockBody() {
        const scrollWidth = window.innerWidth - document.body.clientWidth

        if (scrollWidth === 0 && document.body.classList.contains('lock')) {
            document.body.classList.remove('lock')
            document.body.style.paddingRight = '0px'
            return

        }
        document.body.classList.toggle('lock')

        document.body.style.paddingRight = scrollWidth + 'px'
    }


    // header.addEventListener('click', function(e) {
    //     if (
    //         document.querySelector('.header__menu.active')
    //         && !e.target.closest('.header__burger')
    //     ) {
    //         toggleMenu()
    //     }
    // })

    // if (document.querySelector('.banner-page__body')) {
    //     const bannerSlider = new Swiper('.banner-page__body', {
    //         spaceBetween: 16,
    //         slidesPerView: 1,
    //         centeredSlides: true,
    //         speed: 1000,
    //         effect: 'fade',
    //         fadeEffect: { crossFade: true },
    //         loop: true,
    //         autoplay: {
    //             delay: 2000,
    //         },
    //         breakpoints: {
    //             767.98: {
    //                 slidesPerGroup: 4,
    //
    //             },
    //             575.98: {
    //                 slidesPerGroup: 3,
    //             }
    //         },
    //
    //         navigation: {
    //             nextEl: '.banner-page__button-next',
    //             prevEl: '.banner-page__button-prev'
    //         },
    //         pagination: {
    //             el: ".banner-page__dots",
    //             clickable: true,
    //         },
    //     })
    //
    // }


    // const baseSliders = document.querySelectorAll('.base-slider__body')
    //
    // if (baseSliders.length > 0) {
    //     for (let index = 0; index < baseSliders.length; index++) {
    //         const slider = baseSliders[index]
    //
    //         new Swiper(slider, {
    //             spaceBetween: 16,
    //             slidesPerView: 1.2,
    //
    //             speed: 800,
    //
    //
    //             breakpoints: {
    //                 991.98: {
    //                     spaceBetween: 16,
    //                     slidesPerView: 4,
    //
    //                 },
    //                 767.98: {
    //                     spaceBetween: 16,
    //                     slidesPerGroup: 3,
    //                 },
    //                 567.98: {
    //                     spaceBetween: 16,
    //                     slidesPerGroup: 2.2,
    //                 }
    //             },
    //
    //             navigation: {
    //                 nextEl: slider.closest('.base-slider').querySelector('.base-slider__button-prev'),
    //                 prevEl: slider.closest('.base-slider').querySelector('.base-slider__button-next')
    //             },
    //
    //         })
    //         // wi
    //     }
    // }

    //
    //
    // fixHeader()
    // function fixHeader() {
    //     if (document.body.scrollTop > 10 && !header.classList.contains('fix')) {
    //         header.classList.add('fix')
    //     }
    //     if (document.body.scrollTop <= 0 && header.classList.contains('fix')) {
    //         header.classList.remove('fix')
    //     }
    // }

    // window.addEventListener('scroll', fixHeader)

    if (document.querySelector('.actions-navigation')) {
        document.querySelector('.block-navigation__content .ss-wrapper').appendChild(document.querySelector('.actions-navigation'))


    }

    if (document.querySelector('.actions-navigation__top')) {
        document.querySelector('.actions-navigation__top').addEventListener('click', function() {
            document.querySelector('.content-navigation .ss-content').scrollTop = 0

        })

    }

    if (document.querySelector('.navigation__buttons')) {
        const navigationButtons = new Swiper('.navigation__buttons', {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: true,
            speed: 1000,



            breakpoints: {

                575.98: {
                    loop: false,
                    slidesPerView: 'auto',

                }
            },

            navigation: {
                nextEl: '.navigation__button-next',
                prevEl: '.navigation__button-prev'
            },

        })

    }

    if (document.querySelector('.live__experts')) {
        const liveSlider = new Swiper('.live__experts', {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: true,
            speed: 1000,



            breakpoints: {
                635.98: {
                    slidesPerView: 2,
                },

            },

            navigation: {
                nextEl: '.live__button-next',
                prevEl: '.live__button-prev'
            },

        })

    }

    if (document.querySelector('.base-side__items')) {
        const baseSideItems = new Swiper('.base-side__items', {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: true,
            speed: 1000,



            breakpoints: {
                635.98: {
                    slidesPerView: 2,
                },

            },

            navigation: {
                nextEl: '.base-side__button-next',
                prevEl: '.base-side__button-prev'
            },

        })

    }



    if (document.querySelector('.news')) {
        const newsMasonry = new Masonry( document.querySelector('.news__items'), {
            // options
            itemSelector: '.item-news',
            percentPosition: true,

        });
    }


    if (document.querySelector('.profile')) {
        window.addEventListener('click', function(e) {
            if (e.target.closest('.profile__phone')) {
                const el = document.createElement('div')

                el.className = 'profile__item'
                el.innerHTML = `
                   <div class="profile__item">
                        <div class="profile__label">Телефон</div>
                        <div class="profile__input input-wrapper">
                            <input class="input" type="text">
                        </div>
                    </div>
                `
                document.querySelector('.profile__phones').appendChild(el)
            }
        })
    }

    const days = [5, 10, 15, 21, 29]
    const baseCalendars = document.querySelectorAll('.base-calendar')

    for (let index = 0; index < baseCalendars.length; index++) {
        const calendar = baseCalendars[index]

        const cal = new Calendar({
            id: '#' + calendar.firstElementChild.id,
            theme: "basic",
            primaryColor: "#1E1E1E",
            weekdayType: "short",
            disableDayClick: true,
            customWeekdayValues: ['СР', 'ПН', 'СБ', 'ЧТ', 'ВТ', 'ВС', 'ПТ'],
            startWeekday: '1',

        });
        const activeDays = calendar.querySelectorAll('.calendar__day-active')

        for (let j = 0; j < days.length; j++) {
            const day = days[j]

            switch (j) {
                case 0:
                    activeDays[day - 1].classList.add('blue')
                    break;
                case 1:
                    activeDays[day - 1].classList.add('brown')
                    break;
                case 2:
                    activeDays[day - 1].classList.add('yellow')
                    break;
                case 3:
                    activeDays[day - 1].classList.add('green')
                    break;
                case 4:
                    activeDays[day - 1].classList.add('red')
                    break;
                default:
                    activeDays[day - 1].classList.add('blue')
                    break;
            }

        }

    }
})
