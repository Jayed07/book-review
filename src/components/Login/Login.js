const Login = () => {
    return (
        <main class="content-wrapper">
            <div class="form-container">
                <h1>Login</h1>
                <form action="">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter username.." />

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password.." />

                    <input type="submit" value="Login" />
                </form>
            </div>
        </main>
    );
};

export default Login;