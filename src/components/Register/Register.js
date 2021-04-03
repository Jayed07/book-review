import { auth } from '../../utils/firebase';

const Register = ({
    history,
}) => {

    const onCreateUserSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.passwordConfirm.value;

        if (password !== confirmPassword) {
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                history.push('/');
            });
    }
    return (
        <main className="content-wrapper">
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={onCreateUserSubmitHandler}>
                    
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Enter email.." />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password.." />

                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Confirm password.." />


                    <input type="submit" value="Register" />
                </form>
            </div>
        </main>
    );
};

export default Register;