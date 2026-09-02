import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Стани для помилок
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

    // Функції валідації
    const validateEmail = (value) => {
        if (value === "") {
            setEmailError(true);
            setEmailErrorMsg("Введіть електронну пошту");
        } else if (!value.includes("@")) {
            setEmailError(true);
            setEmailErrorMsg("Невірна електронна пошта");
        } else {
            setEmailError(false);
            setEmailErrorMsg("");
        }
    };

    const validatePassword = (value) => {
        if (value === "") {
            setPasswordError(true);
            setPasswordErrorMsg("Введіть пароль");
        } else if (value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMsg("Пароль занадто короткий (мінімум 6 символів)");
        } else {
            setPasswordError(false);
            setPasswordErrorMsg("");
        }
    };

    // Обробники змін
    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
    };

    // Обробник відправки форми
    const onHandleSubmit = (e) => {
        e.preventDefault();

        // Перевіряємо поля при натисканні кнопки
        validateEmail(email);
        validatePassword(password);

        if (!emailError && !passwordError && email !== "" && password !== "") {
            console.log("----Вхід користувача-----");
            console.log("Email = ", email);
            console.log("Password = ", password);
            alert("Успішний вхід!");

            setEmail("");
            setPassword("");
        } else {
            alert("Будь ласка, виправте помилки у формі");
        }
    };

    return (
        <div className="container mt-2">
            <h1 className="text-center">Вхід на сайт</h1>
            <form className="col-md-6 offset-md-3" onSubmit={onHandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Електронна пошта</label>
                    <input
                        type="email"
                        className={`form-control ${
                            emailError
                                ? "is-invalid"
                                : email !== "" && !emailError
                                    ? "is-valid"
                                    : ""
                        }`}
                        id="email"
                        value={email}
                        onChange={onChangeEmail}
                    />
                    {emailError && (
                        <div className="invalid-feedback">{emailErrorMsg}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input
                        type="password"
                        className={`form-control ${
                            passwordError
                                ? "is-invalid"
                                : password !== "" && !passwordError
                                    ? "is-valid"
                                    : ""
                        }`}
                        id="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                    {passwordError && (
                        <div className="invalid-feedback">{passwordErrorMsg}</div>
                    )}
                </div>

                <button type="submit" className="btn btn-primary">Вхід</button>
            </form>
        </div>
    );
};

export default LoginPage;