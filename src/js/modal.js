const CLASS_LIST = {
    MODAL: 'modal',
    MODAL_ACTIVE: 'modal--active',
    MODAL_DIALOG_BODY: 'modal__dialog-body',
    TRIGGER_OPEN: 'js-modal-open',
    TRIGGER_CLOSE: 'js-modal-close',
}

document.addEventListener('click', (e) => {
    if(e.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)){
        e.preventDefault()

        const target = e.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)
        const modalId = target.getAttribute('href').replace('#','')
        const modal = document.getElementById(modalId)

        document.body.style.paddingRight = `${getScrollbarWidth()}px`
        document.body.style.overflow = `hidden`

        modal.classList.add(CLASS_LIST.MODAL_ACTIVE)
    }
    if(e.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) || e.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)) {
        e.preventDefault()
        
        const modal = e.target.closest(`.${CLASS_LIST.MODAL}`)
        modal.classList.remove(CLASS_LIST.MODAL_ACTIVE)
        document.body.style.overflow = 'unset'
        document.body.style.paddingRight = '0'
    }
})

const getScrollbarWidth = () => {
    const item = document.createElement('div')

    item.style.position = 'absolute'
    item.style.top = '-9999px'
    item.style.width = '50px'
    item.style.height = '50px'
    item.style.overflow = 'scroll'
    item.style.visibility = 'hidden'

    document.body.appendChild(item)
    const ScrollbarWidth = item.offsetWidth - item.clientWidth 
    document.body.removeChild(item)

    return ScrollbarWidth
}