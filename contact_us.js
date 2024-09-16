document.getElementById('messagefromuser').addEventListener('submit', (event)=>{
event.preventDefault()

const username= document.getElementById('Name').value
const useremail= document.getElementById('emailx').value
const usernumber= document.getElementById('PhoneNumber').value
const usermessage= document.getElementById('message').value
const prefferedEmail=document.getElementById('email').checked
const prefferedPhone=document.getElementById('phone').checked

console.log(username,useremail, usernumber,usermessage,prefferedEmail, prefferedPhone);

if(!username ){
    alert('Name can\'t be empty' )
    return
}

var wordCount = username.split(" ").length;

if(wordCount<2){
 alert('Name must be minimal two words')
 return
}

if(username.length<5 || username.length>15){
    alert('Name length must be between 5-15 characters')
    return
}


for(var i=0; i<username.length; i++){
    if(!isNaN((parseInt(username[i])))) {
        alert('Name can\'t be contain with number ')
        return 
    }
}






if(!useremail){
    alert('Email can\'t be empty' )
    return
}

if(!useremail.endsWith('@gmail.com')){
    alert('Email must end with @gmail.com')
    return
}

if(!usernumber){
    alert('Number can\'t be empty' )
    return
}

if(!usernumber.startsWith('+62') && !usernumber.startsWith('0')){
    alert('Telephone number must be start with +62 or 0')
    return
}


if(!usermessage){
    alert('Message can\'t be empty' )
    return
}

if(usermessage.length<10 || usermessage.length>100){
    alert('Message must be between 10-100 characters')
    return
}

if(!prefferedEmail && !prefferedPhone){
    alert('You must select minimal one option')
    return
}

alert('Your message is already sent')
window.location.href='contact_us.html'
})


document.querySelector('#hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });