
//   var message = document.getElementById('msg');
//   var greeting = "hello world";
//   message.innerText = greeting;

function pwdTest() {
    event.preventDefault();
    var pwd = document.getElementById('access-code').value;
    console.log(pwd);
    var msg = document.getElementById('msg');
    var output;
    var password = 'h3ll0';
    if(pwd === password) {
        console.log('yes')
        output = 'Access Granted';
        msg.innerText = output;
    } else {
        console.log('no');
        output = 'Access Denied';
        msg.innerText = output;
    }

    // event.preventDefault();
    // var pwd = document.getElementById('pwd').value 
    // var message = document.getElementById('msg');
    // var password = 'h3ll0';
    // var output;
    // var tries = 3;
    // var access = false;

    // if (pwd === password) {
    //     output = 'Yay';
    //     message.innerText = output;
    // }

//     while(access === false){
//         if(pwd === password) {
//             access = true;
//             output = 'Access Granted.';
//             message.innerText = output;
//         } else {
//             response = 'Access Denied. Try Again.'
//             message.innerText = output;
//             tries--;     
//         }
//     }

//     if(tries === 0) {
//         response = 'You Have Been Denied';
//         message.innerText = output;
//     }
// }
}