import React, {useState} from 'react';
import {AuthForm, InputField, ButtonSubmit} from "./Auth.components";
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function safeLoginData(email: string, password: string) {
        let flag: boolean = false;
        for(let i = 0; i < email.length; ++ i) {
            if(email[i] === '@') {
                if(i !== email.length - 1 && i !== 0 ) {
                    flag = true;
                }
            }
        }

        if(!flag) {
            alert('Incorrect email');
            return false;
        }

        if(password.length < 6) {
            alert("Password should be 6 characters at least");
            return false;
        }
        return true;
    }

    const checkInput = (e: any) => {
        e.preventDefault()

        if(email !== "" && password !== "") {
            localStorage.setItem("abc", '123');

            if(localStorage.getItem(email)) {
                if(localStorage.getItem(email) === password) {
                    history.push('/forecast');
                } else {
                    alert("Password is not correct");
                }
            } else {
                let ans = prompt("User not found"
                    + "\nWant to register?");
                if(ans && safeLoginData(email, password)) {
                    localStorage.setItem(email, password);
                    alert("User " + email + " was registered");
                }
            }
        } else {
            alert("There is an empty field");
        }
    }

    return (
        <AuthForm>
            <label htmlFor="email">Email</label>
            <InputField style={{top: "233px"}} className="email" placeholder="Email" value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <InputField style={{top: "300px"}} className="password" placeholder={"Password"} type={"password"}
                        value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <ButtonSubmit type={"submit"} onClick={checkInput}>Log In</ButtonSubmit>
        </AuthForm>
    );

}
export default Login;

