import{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const auth = getAuth();
const signUp = () => {
    console.log(auth);
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    createUserWithEmailAndPassword(auth,email.value ,password.value)
    .then((ressolve)=>{
        alert("sucessfully signup");
    }).catch((reject)=>{
        alert("signup rejected")
    })
}
let btn = document.getElementById("btn-signUp")
btn.addEventListener("onclick",signUp)

const login = () =>{
    console.log(auth);
    let username = document.getElementById("login-name");
    let email = document.getElementById("login-email");
    let password = document.getElementById("login-password");
    signInWithEmailAndPassword(auth,login-email.value ,login-password.value)
    .then((ressolve)=>{
        alert("suucesfully login")
        //window.location.href="./"login-
    }).catch((reject)=>{
        alert("login rejected");
    })
}

let btn1 = document.getElementById("btn-login")
btn1.addEventListener("onclick",login)