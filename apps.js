(function() {
    const form=document.querySelector("#message-form")
    form.addEventListener('submit',function(e){
    e.preventDefault()

    const message = document.querySelector('#msg')
    const feedback = document.querySelector('.feedback')
    const msgContent = document.querySelector('.msgcontent')


    if(message.value === ''){
        feedback.classList.add('show')
        setTimeout(function(){
            feedback.classList.remove('show')
            
        },4000)
    } else {
        msgContent.textContent=message.value
        message.value = ''
    }       


})
})()