function validateEmail(email) {
    let  regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(regexp.test(email)){
        return "ok.sucess " + email;
    }else {
        return "not found! " + email;
    }
}
let mailTest = "trananhtuan2710201@gmail.com";
document.write(validateEmail(mailTest));