// Carousel pictures controller
const handleCarouselPictures = (miliseconds) => {
    // Carousel class for show selected image
    const CLASS_OPACITY_1 = 'picture-opacity-1'

    // CSS Selector for all carousel images
    const CSS_SELECTOR_PICTURES = '.carousel > picture'

    // All carousel images
    const pictures = document.querySelectorAll(CSS_SELECTOR_PICTURES)

    // Max carousel images
    const MAX_LEN = pictures.length - 1
    // Current position of displayed images
    let curPos = 0

    //Show the first carousel image
    pictures[curPos].classList.toggle(CLASS_OPACITY_1)
    curPos++

    const interval = setInterval(() => {
        // Remove previous images class
        if (curPos > 0)
            pictures[curPos - 1].classList.toggle(CLASS_OPACITY_1)

        if (curPos > MAX_LEN)
            curPos = 0
        
        pictures[curPos].classList.toggle(CLASS_OPACITY_1)
        curPos++

    }, miliseconds)
}
//Carousel dots controller
const handleCarouselDots = (miliseconds) => {
    // CSS Selector for all carousel dots
    const CSS_SELECTOR_DOTS = '.carousel .dots > span'
    // All dots of carousel images
    const dots = document.querySelectorAll(CSS_SELECTOR_DOTS)

    const CLASS_DOT_SELECTED = 'dot-selected'

    let curPos = 0

    dots[curPos].classList.toggle(CLASS_DOT_SELECTED)
    curPos++

    const interval = setInterval(() => {
        dots[curPos].classList.toggle(CLASS_DOT_SELECTED)
        curPos++
    }, miliseconds)
}

const EVENT_LOAD = 'load'

// Window load event
window.addEventListener(EVENT_LOAD, () => {
    // Interval time
    const MILISECONDS = 7000

    handleCarouselPictures(MILISECONDS)
    handleCarouselDots(MILISECONDS)
})