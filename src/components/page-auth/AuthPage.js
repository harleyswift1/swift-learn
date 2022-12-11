import Button from "../utils/reusable/Button/Button";

export default function AuthPage(props) {
    const loggingIn = props.action === "login";
    return (<div className={"auth-page"}>
        <div className="auth-page-content">
            <h2>{loggingIn ? "Login to your account" : "Register an account"}</h2>
            <p>{loggingIn ? "Login to your " : "Register an "} account to get access to profile stats, saved progress and more.</p>
            <form action="/courses" method="POST">
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
                <br/>
                <Button text={loggingIn ? "Login" : "Register your account"} submit={true}/>
            </form>
        </div>
    </div>)
}