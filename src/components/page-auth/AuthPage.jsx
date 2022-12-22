import Button from "../utils/reusable/Button/Button";
import {useState} from "react";

export default function AuthPage(props) {
    const [result, setResult] = useState("");

    function test() {
        console.log(result);
    }

    const data = {
        email: "harleyswiftus@gmail.com", password: "Password123@@"
    };

    function handleSubmit(event) {
        event.preventDefault();
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(result => {
                setResult(result);
            });
    }

    const loggingIn = props.action === "login";
    return (<div className={"auth-page"}>
        <main className="auth-page-content">
            <h2>{loggingIn ? "Login to your account" : "Register an account"}</h2>
            <p>{loggingIn ? "Login to your " : "Register an "} account to get access to profile stats, saved progress and more.</p>
            <form action={loggingIn ? "/login" : "/register"} method="POST" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder={"Your username"}/>

                <div className={loggingIn ? "hidden " : ""}>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" placeholder={"Your email address"}/>
                </div>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder={"Your password"}/>

                <div className={loggingIn ? "hidden " : ""}>
                    <label htmlFor="confirm_password">Password</label>
                    <input type="password" name="confirm_password" placeholder={"Confirm your password"}/>
                </div>
                <Button text={loggingIn ? "Login" : "Register your account"} submit={true}/>
                <button onClick={test}></button>
                <h1>{result}</h1>
            </form>
        </main>
    </div>)
}