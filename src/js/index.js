document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY');

    init() 
});

const init = () => {
    console.log('init() CALLED');

    initViews();

    addEvents();
}

const addEvents = () => {
    console.log('addEvents() CALLED');

    //MENU CLICK EVENTS START
    
    let SignUpMenuBtn=document.querySelector('div.menu_wrap a.sign_up');
    SignUpMenuBtn.addEventListener('click', function() {
        console.log('SignUpMenuBtn CLICKED');

        showSelectedViews(SIGN_UP_VIEW);
    });

    let SignInMenuBtn=document.querySelector('div.menu_wrap a.sign_in');
    SignInMenuBtn.addEventListener('click', function() {
        console.log('SignInMenuBtn CLICKED');

        showSelectedViews(SIGN_IN_VIEW);
    });

    let SignOutMenuBtn=document.querySelector('div.menu_wrap a.sign_out');
    SignOutMenuBtn.addEventListener('click', function() {
        console.log('SignOutMenuBtn CLICKED');

        signInedMemberId = '';
        showSelectedViews(SIGN_OUT_VIEW);
        setMenuStatus(SIGN_OUT_STATUS);
        
    
    });

    let writeMenuBtn=document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function() {
        console.log('writeMenuBtn CLICKED');

        if(signInedMemberId === '') {
            alert('Please Sign In');

            showSelectedViews(SIGN_IN_VIEW);
            return;
        }

        showSelectedViews(DIARY_WRITE_VIEW);
    });

    let listMenuBtn=document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function() {
        console.log('listMenuBtn CLICKED');

        if(signInedMemberId === '') {
            alert('Please Sign In');

            showSelectedViews(SIGN_IN_VIEW);
            return;
        }

        showSelectedViews(DIRY_LIST_VIEW);
    });


//BUTTON CLICK EVENTS START

let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    signUpBtn.addEventListener('click', function() {
        console.log('signUpBtn CALLED!!');

        let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
        let u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]').value;

        addMember(u_id, u_pw, u_mail);

        alert('SIGN UP SUCCESS!!');

        u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value = '';
        u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value = '';
        u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]').value = '';


    });

let signInBtn=document.querySelector('div.sign_in_wrap input[type="button"]');
signInBtn.addEventListener('click', function() {
    console.log('signInBtn CALLED');

    let u_id=document.querySelector('div.sign_in_wrap input[name="u_id"]').value; 
    let u_pw=document.querySelector('div.sign_in_wrap input[name="u_pw"]').value;
    
    let isMember=searchMember(u_id,u_pw);

    if (isMember) {
        alert('SIGN IN SUCCESS');

        signInedMemberId = u_id;

        setMenuStatus(SIGN_IN_STATUS);

    } else {
        alert('SIGN IN FAIL');

        signInedMemberId = '';
    }

    u_id=document.querySelector('div.sign_in_wrap input[name="u_id"]').value = ''; 
    u_pw=document.querySelector('div.sign_in_wrap input[name="u_pw"]').value = '';

});

let writeBtn=document.querySelector('div.write_wrap button');
writeBtn.addEventListener('click', function() {
    console.log('writeBtn() CALLED');

    let txt=getCurrentDateTime() + document.querySelector('div.write_wrap input').value;
    addDiary(txt);

    document.querySelector('div.write_wrap input').value = '';

    listUpDiaries();
    
    showSelectedViews(DIRY_LIST_VIEW);
});

}

const listUpDiaries = () => {
    console.log('listUpDiaries() CALLED');

    listWrap.textContent = '';
    let diaryArr = searchDiaries();

    for(i=0; i<diaryArr.length; i++) {

        let tpl = document.querySelector('#list_item');
        let clone = document.importNode(tpl.content, true);
        let txt = clone.querySelector('div.txt');
        txt.textContent = diaryArr[i]

        listWrap.prepend(clone);
    }
}
