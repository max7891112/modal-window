$.modal = function(options) {
    let modalWindow = document.getElementById('vmodal')
    let ANIMATION_SPEED = 200
    let closing = false
    let heading = document.getElementById('title')
    let modalBody = document.getElementById('modalBody')
    let modal = document.getElementsByClassName('modal-window')
    let destroyed = false

    heading.textContent = options.title
    
    if(options.closable) {
        closeIcon.classList.remove('hidden')
    } else {
        closeIcon.classList.add('hidden')
    }

    modalBody.innerHTML = options.content
    
    modal[0].style.width = options.width

    createAndShowFooterButtons(options.footerButtons, modalBody)

    createandShowListOfCard(fruits, document.querySelector('.row'))

    return {
        open() {
            if(destroyed) {
                return console.log('modal window is destroyed')
            }
            if(!closing) {
            modalWindow.classList.remove('hidden')
            modalWindow.classList.add('open')
            }
        },
        close() {   
            closing = true
            modalWindow.classList.remove('open')
            modalWindow.classList.add('disappearance')
            setTimeout(() => {
                modalWindow.classList.remove('disappearance')
                modalWindow.classList.add('hidden')
                closing = false
            },ANIMATION_SPEED)
        },
        destroy() {
            modalWindow.parentElement.removeChild(modalWindow)
            closeIcon.removeEventListener('click', listenerForCloseICon)
            document.removeEventListener('click', listenerForCloseOverlay)
            destroyed = true
        },
        setContent(content) {
            modalBody.innerHTML = content
        }
    }
}

function noop() {}

function createAndShowFooterButtons(buttons = [], neighboor) {
    if(buttons.length == 0) {
        document.createElement('div')
    } else {
        const wrap = document.createElement('div')
        wrap.classList.add('modal-footer')
        buttons.forEach((button) => {
            let btn = document.createElement('button')
            btn.textContent = button.text || ''
            btn.classList.add('btn')
            btn.classList.add(`btn-${button.type || 'secondary'}`)
            btn.onclick = button.handler || noop
            wrap.append(btn)
        })
        neighboor.after(wrap)
    }
}

function createandShowListOfCard(arrFruits = [],container) {
    if(arrFruits.length == 0) {
        document.createElement('div')
    } else {
       arrFruits.forEach((dataFruit) => {
            let column = document.createElement('div')
            column.classList.add('col')
            column.insertAdjacentHTML('afterbegin', `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${dataFruit.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${dataFruit.title}</h5>
                    <button class="btn btn-primary">See price</button>
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
            `)
            container.append(column)
       })
       
    }
}