const Register = () => {
    return (
        <main className="content-wrapper">
            <div className="form-container">
                <h1>Register</h1>
                <form action="">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter username.." />

                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Enter email.." />

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password.." />

                    <label for="passwordConfirm">Confirm Password</label>
                    <input type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Confirm password.." />


                    <input type="submit" value="Register" />
                </form>
            </div>
        </main>
    );
};

export default Register;