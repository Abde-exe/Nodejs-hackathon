export function blockActions(boolean){
    if (typeof document !== 'undefined') {
        if (boolean) {
            document.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
            }, true);
        } else {
            document.removeEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
            }, true);
        }
    }
}