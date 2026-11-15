const SIGN_IN_STATUS  = 1;
const SIGN_OUT_STATUS = 2;

const setMenuStatus = (statusNo) => {
    console.log('setMenuStatus CALLED()');

    switch(statusNo) {
        case SIGN_IN_STATUS:
            document.querySelector('div.menu_wrap a.sign_up').style.display = 'none'
            document.querySelector('div.menu_wrap a.sign_in').style.display = 'none'
            document.querySelector('div.menu_wrap a.sign_out').style.display = 'inline-block'
        break;

        case SIGN_OUT_STATUS:
            document.querySelector('div.menu_wrap a.sign_up').style.display = 'inline-block'
            document.querySelector('div.menu_wrap a.sign_in').style.display = 'inline-block'
            document.querySelector('div.menu_wrap a.sign_out').style.display = 'none'
        break;
    }
}