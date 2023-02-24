let eventCallback = event => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
};

export function blockActions(boolean){
    if (typeof document !== 'undefined') {
        if (boolean) {
            document.addEventListener('click', eventCallback, true);
        } else {
            document.removeEventListener('click', eventCallback, true);
        }
    }
}