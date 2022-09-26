"use strict"
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    async function formSend(e){
        e.preventDefault();

        let eror = formValidate(form);

        let formData = new FormData(form);

        if(eror === 0){
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok){
                let result = await response.json();
                form.reset();
            }
        }

    }

    function formValidate(form){
        let eror = 0;
        let formReq = document.querySelectorAll('._req');
        for(let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            if(input.classList.contains('_emails')){
                if(emailTest(input)){
                    formAddEror(input);
                    eror++;
                }
            }
        }
    }
    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,8})+$/.test(input.value);
    }
});