//Inlcude Element selector
const _incEl = document.querySelectorAll('.include-html')

// Load Files
_incEl.forEach(el => {
    var _src = el.dataset.src
    var _type = el.dataset.type || 'div'
    var _id = el.dataset.id || ''
    if(_src != undefined || _src != ""){
        fetch(_src)
        .then(response=>{
            return response.text()
        })
        .then(data=>{
            var newEl = document.createElement(_type)
                newEl.classList.add('included-file')
                if(_id != "")
                newEl.id = _id
                newEl.innerHTML = data
            el.replaceWith(newEl)
            
            // el.remove()
        })
    } 
})