const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 1500
    },
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const swiper_v2 = new Swiper('.swiper-v2', {
    direction: 'horizontal',
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 30,
    allowTouchMove: true,
    slideToClickedSlide: true,
    freeMode: true,
    autoplay: {
        delay: 1500,
    },
    navigation: {
        nextEl: '.cust-swiper-btn-next',
        prevEl: '.cust-swiper-btn-prev',
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
            width: 400,
        },
        600: {
            slidesPerView: 1,
            spaceBetween: -300,
            centeredSlides: true,
            width: 920
        },
        1000: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: -150,
            width: 820,
        },

        1300: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: -70,
            width: 640,
        },

        1500: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 30,
            width: 650,
        },
        1700: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
            width: 500,
        },
        2000: {
            slidesPerView: 1,
            centeredSlides: false,
            width: 550,
        },
        2300: {
            slidesPerView: 2,
            centeredSlides: true,
            width: 550,
        },
        2400: {
            slidesPerView: 2,
            centeredSlides: false,
            centerInsufficientSlides: true,
            spaceBetween: 100,
            width: 1200,
        },
        4000: {
            slidesPerView: 3,
            centeredSlides: false,
            centerInsufficientSlides: true,
            spaceBetween: 100,
            width: 1200,
        }

    }

});


let burgerCheck = document.getElementById('menu_check')
burgerCheck.onchange = function (event) {
    let a = document.getElementsByClassName('navbar_menu-main')
    if (event.target.checked) {
        a[0].classList.remove('disactive')
    } else {
        a[0].classList.add('disactive')
    }
}

function postData(url, formData) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    var response = JSON.parse(xhr.responseText); // Или xhr.responseText, в зависимости от того, что возвращает сервер
                    resolve(response);
                } catch (error) {
                    reject(new Error('Error parsing response JSON'));
                }
            } else {
                reject(new Error('Network request failed with status ' + xhr.status));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Network request failed'));
        };

        xhr.send(formData);
    });
}





document.getElementById('mySubmit').addEventListener('click', (event) => {
    event.preventDefault()
    let form = document.getElementById('myForm')
    let data = new FormData(form)
    postData('https://jsonplaceholder.typicode.com/posts', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
})


