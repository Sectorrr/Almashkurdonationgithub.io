// Resize navbar container
const resizeNavParent = () => {
    var _navbar = document.getElementById('topNavigation')
    console.log(_navbar)
    var _height = _navbar.clientHeight
    var _clearFixEl = document.createElement('div')
    _clearFixEl.style.marginBottom = `${_height}px`
    _navbar.after(_clearFixEl)
}

/**
 * Gallery Category Filter

        cat.addEventListener('click', e=>{
            e.preventDefault()
            if(cat.parentElement.querySelector('.active') != undefined){
                cat.parentElement.querySelector('.active').classList.remove('active')
            }
            cat.classList.add('active')
            var catName = cat.dataset.category || 'all'
            var catItems = document.querySelectorAll('#gallery-container .gallery-item')
            catItems.forEach(el => {
                if(el.dataset.category == catName || catName == 'all'){
                    if(el.classList.contains('hide'))
                    el.classList.remove('hide')
                }else{
                    if(!el.classList.contains('hide'))
                    el.classList.add('hide')
                }
            })
        })
    })
}
// Get testimonial container Height
const testimonialHeight = () => {
    var containerHeight = 0;    
    var testimonialItems = document.querySelectorAll('#testimonials .testimony-item')
    testimonialItems.forEach(el => {
        if(el.clientHeight > containerHeight)
        containerHeight = el.clientHeight
    })
    document.querySelector('#testimonials .testimonies-inner').style.height = `${containerHeight}px`
}
/** Testimony slider */
const testimonySlider = () =>{
    var _prev =  document.querySelector('#testimonials .testimony-item-prev-btn')
    var _next =  document.querySelector('#testimonials .testimony-item-next-btn')
    console.log(_next)
    _next.addEventListener('click', e=>{
        e.preventDefault()
        var currentActive = document.querySelector('#testimonials .testimony-item.active')
        if(currentActive != null){
            var nextSibling = currentActive.nextElementSibling || document.querySelector('#testimonials .testimony-item:nth-child(1)')
            if(nextSibling != null){
                _prev.setAttribute('disabled',true)
                _next.setAttribute('disabled',true)
                currentActive.classList.remove('active')
                nextSibling.classList.add('active')
                // if(.)
                currentActive.classList.add('slide-next','slide-start')
                nextSibling.classList.add('slide-next','slide-end')
                setTimeout(()=>{
                    currentActive.classList.remove('slide-next','slide-start')
                    nextSibling.classList.remove('slide-next','slide-end')
                    _prev.removeAttribute('disabled')
                    _next.removeAttribute('disabled')
                },300)
            }
        }
    })
    _prev.addEventListener('click', e=>{
        e.preventDefault()
        var currentActive = document.querySelector('#testimonials .testimony-item.active')
        if(currentActive != null){
            var prevSibling = currentActive.previousElementSibling || document.querySelector('#testimonials .testimony-item:nth-last-child(1)')
            if(prevSibling != null){
                _prev.setAttribute('disabled',true)
                _next.setAttribute('disabled',true)
                currentActive.classList.remove('active')
                prevSibling.classList.add('active')
                // if(.)
                currentActive.classList.add('slide-prev','slide-start')
                prevSibling.classList.add('slide-prev','slide-end')
                setTimeout(()=>{
                    currentActive.classList.remove('slide-prev','slide-start')
                    prevSibling.classList.remove('slide-prev','slide-end')
                    _prev.removeAttribute('disabled')
                    _next.removeAttribute('disabled')
                },300)
            }
        }
    })
}

setTimeout(()=>{
    resizeNavParent()
    window.onresize = () =>{
        resizeNavParent()
        testimonialHeight()
    }
    filterCategory()
    testimonialHeight()
    testimonySlider()
},300)

// copyright-year
const cry = document.getElementById('copyright-year')
var _now = new Date()
cry.innerText = _now.getFullYear()