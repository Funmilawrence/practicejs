// an object to contain users inputed infomation

let userDetailsDatabase = {}



function getUserDetails(){

   let userName = prompt("Enter your username") 

   if (userName == null) {
      return
   }

function validateUserName(username){
   if (userName.length < 10 && userName.length > 0){
    return true
   }else{
    return false
   }
}
// while loop to make sure users dont get past the question till they fill corret infomation
while(validateUserName(userName) == false){
   userName = prompt("username must be less than 10 and greater than 0")
}

userDetailsDatabase["userName"] = userName


let email = prompt("enter your email address")
if (email == null) {
   return
}


function validateEmail(email){
   const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
      emailCheckResult = emailCheck.test(email);
      if (emailCheckResult == true){
         return true
      }else {
         return false
      }
}

while (validateEmail(email) == false){
   email = prompt("Enter a valid email")

}

userDetailsDatabase["email"] = email


// function validatePhoneNumber(Number)
let phoneNumber = prompt("enter your phone number")

if (phoneNumber == null) {
   return
}

function validatephoneNumber(phoneNumber){
   if (phoneNumber.length == 11 ){
      return true
   }else{
      return false
   }
}

while(validatephoneNumber(phoneNumber) == false){
   phoneNumber = prompt("phonenumber must be more than 11 digits")
}

userDetailsDatabase["phoneNumber"] = phoneNumber


let password = prompt("enter your password")
if (password == null) {
   return
}

function validatePassword(password){
   if (password.length < 6 ){
      return false
   }else{
      return true
   }
}

while(validatePassword(password) == false){
   password = prompt("please fill in the correct password")
}

userDetailsDatabase["password"] = password




let confirmPassword = prompt("Confirm your password")

function validateConfirmpassword(confirmPassword){
   if (confirmPassword  != password){
      return false
   }else{
      return true
   }
}

while(validateConfirmpassword(confirmPassword) == false){
   confirmPassword = prompt("Confirm password does not match please try again")
}

userDetailsDatabase["confirmPassword"] = confirmPassword


}

function displayUserDetails(){
   alert(`Your details\n\nUsername: ${userDetailsDatabase.Username}\nPhone Number: ${userDetailsDatabase.Phonenumber}\nEmail: ${userDetailsDatabase.Email}\nPassword: ${userDetailsDatabase.Password}`)}

   console.log(userDetailsDatabase)