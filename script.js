window.onload = () => {

    navigationClickHandler();
    phoneClickHandler();
    phoneSliderHandler()
    portfolioTagsHandler();
    portfolioImgClickHandler();
    formButtonClickHandler();
}

// Navigation
const navigationClickHandler = () => {
    let navigation = document.getElementById('navigation');
    navigation.addEventListener('click', event => {
        removeActiveNavigation();
        event.target.classList.add('active');
    })
}

const removeActiveNavigation = () => {
    navigation.querySelectorAll('a').forEach(el => el.classList.remove('active'))
}

// PhonesScreen

const slider = document.querySelector('.slider');
const verticalScreen = document.querySelector('.screen-vertical');
const horizontalScreen = document.querySelector('.screen-horizontal');
const phones = document.querySelectorAll('.phones');

const phoneClickHandler = () => { 
    let hiddenVertical = false;
    let hiddenHorizontal = false;
    slider.addEventListener('click', (el) => {
        if(el.target.classList.contains('screen-vertical') || 
        el.target.classList.contains ('vertical-phone')) {
           if(!hiddenVertical) {
                verticalScreenRemove();
                hiddenVertical = true;
           } else {
                verticalScreenAdd();
                hiddenVertical = false;
           }
        }

        if(el.target.classList.contains('screen-horizontal') || 
        el.target.classList.contains ('horizontal-phone')) {
           if(!hiddenHorizontal) {
                horizontalScreenRemove();
                hiddenHorizontal = true;
           } else {
                horizontalScreenAdd();
                hiddenHorizontal = false;
           }
        }
    })
}
const verticalScreenRemove = () => {
    verticalScreen.classList.add('hidden')
}
const verticalScreenAdd = () => {
    verticalScreen.classList.remove('hidden')
}
const horizontalScreenRemove = () => {
    horizontalScreen.classList.add('hidden')
}
const horizontalScreenAdd = () => {
    horizontalScreen.classList.remove('hidden')
}
// Phones SLider
const phoneSliderHandler = () => {
    slider.addEventListener('click', el => {
        if(el.target.classList.contains('slider__chev-left')) {
            nextPhone()
        }
        if(el.target.classList.contains('slider__chev-right')) {
            prevPhone()
        }
    })
}
const countReset = () => {
    let counter=0;
    phones.forEach((el,index) => {
        if(el.classList.contains('active-slide')) {
            counter = index;
            el.classList.remove('active-slide')
        }
    })
    return counter;
}
const nextPhone = () => {
    let index = (countReset()+1) % phones.length;
    phones[index].classList.add('active-slide');
}
const prevPhone = () => {
    let index = countReset()-1;
    if (index < 0) index = phones.length - 1;
    
    phones[index].classList.add('active-slide');
}

// Portfolio 
const gallery = document.querySelector('.portfolio__gallery');
const gallery_item = document.querySelectorAll('.portfolio__gallery-item');
const portfolioNavigation = document.querySelector('.portfolio__navigation');
const portfolioNavigationTab = document.querySelectorAll('.portfolio__navigation-item');

const portfolioImgClickHandler = () => {
    gallery.addEventListener('click', event => {
        if(event.target.hasAttribute('alt')){
            imgRemoveBorder()
            event.target.classList.add('active-img')
        }
    })
}
const imgRemoveBorder = () => {
    gallery.querySelectorAll('img').forEach(el=>el.classList.remove('active-img'))
}

const portfolioTagsHandler = () => {
    portfolioNavigation.addEventListener('click', event => {
        if(event.target.classList.contains('portfolio__navigation-item')) {
        removeActivePortfolioNavigation();
        event.target.classList.add('active-tab');
        changeGallery();
        }
    })
}

const removeActivePortfolioNavigation = () => {
    portfolioNavigationTab.forEach(el=> el.classList.remove('active-tab'))
}

const changeGallery = () => {
    let arrImages = [];
    gallery_item.forEach(el => arrImages.push(el) )
    arrImages.sort(()=>Math.random()-0.5)
    gallery.append(...arrImages)
}

// Form modal window

const open_button = document.getElementById('open-button'); 
const close_button = document.getElementById('close-button');
const modal_window = document.getElementById('message-block');

const formButtonClickHandler = () => {
    openModalWindow();
    
    closeModalWindow();
}

const openModalWindow = () => {
    open_button.addEventListener('click', (event) => {
        const form_name = document.getElementById('name').value.toString();
        const form_email = document.getElementById('email').value.toString();
        const form_subject = document.getElementById('subject').value.toString();
        const form_describe = document.getElementById('describe').value.toString();
        let modal_name = document.getElementById('name-result');
        let modal_email = document.getElementById('email-result');
        let modal_subject = document.getElementById('subject-result');
        let modal_describe = document.getElementById('describe-result');

        modal_name.innerText = `Отправитель: ${form_name}`;
        modal_email.innerText = `Эл. Адрес: ${form_email}`;
        if(form_subject){
            modal_subject.innerText = `Тема: ${form_subject}`;
            } else {
            modal_subject.innerText = 'Без темы'
        }
        if(form_describe){
            modal_describe.innerText = `Описание: ${form_describe}`;
        } else {
            modal_describe.innerText = 'Без описания'
        }
        modal_window.classList.remove('hidden')
        document.body.classList.add('overflow-hidden')
        event.preventDefault()
    })
}

const closeModalWindow = () => {
    close_button.addEventListener('click', ()=> {
        modal_window.classList.add('hidden')
        document.body.classList.remove('overflow-hidden')
    })
}