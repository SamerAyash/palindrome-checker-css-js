function checkTextPalindrome(text){
    let text2= text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const isPalindrome = text2 === text2.split('').reverse().join('');
    return isPalindrome
}

function buttonClicked(){
    const input_value= document.getElementById("text-input")
    const text_value= input_value.value
    if(text_value){
        const text_status= checkTextPalindrome(text_value)
        const resulte= text_value + (text_status ? " is a palindrome" : " is not a palindrome")
        const message = document.getElementById("result")
        message.innerText= resulte
        message.style.display= "block"
        input_value.value =""
        return true
    }
    alert("Please input a value")
    return false
}

const checkBtn= document.getElementById("check-btn")
checkBtn.onclick= buttonClicked