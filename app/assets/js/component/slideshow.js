const slideshow = (option) => {
    // Default Values
    const autoplay = (option.autoplay !== undefined) ? option.autoplay : false;
    const duration = (option.duration !== undefined) ? option.duration : 3000;
    const control = (option.duration !== undefined) ? option.control : false;

    // Templates
    const controlTemplate = `
<button class="control-button-right">
<i class="feather icon-chevron-right"></i>
</button>
<button class="control-button-left">
<i class="feather icon-chevron-left"></i>
</button>
    `;

    const itemList = document.querySelectorAll('.slideshow .items .item');
    let currentSlide = 0;
    let timer = undefined;

    const clearActive = () => {
        for (let i = 0; i < itemList.length; i++) { // remove each element has active class
            itemList[i].classList.remove('active');
        }
    }
    const setActive = () => {
        itemList[currentSlide].classList.add('active');
    }
    const forward = () => {
        clearActive();

        if (currentSlide < itemList.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }

        setActive();
    }
    const backward = () => {
        clearActive();

        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = itemList.length - 1;
        }

        setActive();
    }
    const timerStart = () => {
        timer = setInterval(forward, duration); // function, duration
    }

    if (autoplay) {
        timerStart();
    }

    if (control) {
        const slideShow = document.querySelector('.slideshow');
        const tag = document.createElement('div');
        tag.setAttribute('class', 'control');
        tag.innerHTML = controlTemplate;
        slideShow.appendChild(tag);

        const controlButtonRight = document.querySelector('.control-button-right');
        const controlButtonLeft = document.querySelector('.control-button-left');
        controlButtonRight.addEventListener('click', () => {
            clearInterval(timer);
            forward();
            timerStart();
        })
        controlButtonLeft.addEventListener('click', () => {
            clearInterval(timer);
            backward();
            timerStart();
        })
    }
}