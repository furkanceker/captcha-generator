let captcha = document.querySelector('.captcha')
let user_input = document.querySelector('.user-input')
let check_btn = document.querySelector('.check-btn')
let generate_btn = document.querySelector('.generate-btn')
let message = document.querySelector('.message')
let container = document.querySelector('.container')

let captchacharacter = ['A','B','C','D','E','F','G','H','I','J','K','L',
'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t',
'u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9]

let generateCaptcha =()=>{
    captcha.innerHTML = '';
    for(let i=0;i<6;i++){
        let randomCaptcha = captchacharacter[Math.floor(Math.random()*captchacharacter.length)]
        captcha.innerHTML += ' ' + randomCaptcha; 
    }
    message.style.display = "none";
    container.style.height = '350px'
}

let captchaCheck =()=>{
    let rightCaptcha = captcha.textContent;
    let userInput = user_input.value;

    if(rightCaptcha.replaceAll(' ','')== userInput.replaceAll(' ','')){
        message.innerHTML = '<i class="fa-solid fa-circle-check"></i> Captcha matched. You are not a robot';
        message.style.color = 'green';
        message.style.display = "block";
        container.style.height = '380px'
    }else {
        message.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Captcha not matched. please try again!'
        message.style.color = 'red';
        message.style.display = "block";
        container.style.height = '380px'
    }
}

check_btn.addEventListener('click',()=>{
    if(user_input.value != ''){
        captchaCheck();
    }else {
        user_input.classList.add('input-shaked')
        setTimeout(()=>{
            user_input.classList.add('input-shaked')
        },400)
    }
})
generate_btn.addEventListener('click',generateCaptcha)

generateCaptcha();