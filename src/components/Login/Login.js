import { auth } from '../../utils/firebase';

const Login = ({
    history
}) => {
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        auth.signInWithEmailAndPassword(email, password)
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
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="Enter email.." />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password.." />

                    <input type="submit" value="Login" />
                </form>
            </div>
        </main>
    );
};

export default Login;