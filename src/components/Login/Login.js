import { auth } from '../../utils/firebase';

const Login = ({
    history
}) => {
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(username, password);

        auth.signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                console.log(userCredential);
                history.push('/');
            });
    };

    return (
        <main className="content-wrapper">
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={onLoginFormSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter username.." />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password.." />

                    <input type="submit" value="Login" />
                </form>
            </div>
        </main>
    );
};

export default Login;