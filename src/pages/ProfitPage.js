import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"; //імпортуємо Zod для валідації даних
//zod - бібліотека для валідації даних на клієнті
//react-hook-forms - для роботи з форами на клієнті

//Робимо схему валіації даних
// Схема валідації
const profileSchema = z.object({
    firstName: z
        .string()
        .min(2, "Ім'я має мати щонайменше 2 символи")
        .max(50, "Ім'я занадто довге"),
    lastName: z
        .string()
        .min(2, "Ім'я має мати щонайменше 2 символи")
        .max(50, "Ім'я занадто довге"),
    email: z.string().email("Некоректна email адреса"),
});

//Поля, які будуть на формі
const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
};

const ProfilePage = () =>
{

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues, //Це об'єкт, який описує нашу форму
        mode: "onBlur",
    }); // Налаштувати форму для роботи

    const onSubmit = (data) => {
        //Цей метод буде спрацьовувати, яколи дані у формі буть вірними
        //Тобто валідні- через zod
        console.log("Form Data:", data);
    }

    console.log("--errors--", errors.firstName, isDirty);

    return (
        <>
            <h1 className={"text-center"}>Профіль користувача</h1>

            <div className="container mt-2">
                {/*у нас react-hook-forms - буде обробляти подію відправки форми*/}
                <form onSubmit={handleSubmit(onSubmit)} className="col-md-6 offset-md-3">
                    {/* Ім'я */}
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Ім'я</label>
                        <input
                            type="text"
                            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                            id="firstName"
                            placeholder="Іван"
                            {...register("firstName")}
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                    </div>

                    {/* Прізвище */}
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Прізвище</label>
                        <input
                            type="text"
                            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                            id="lastName"
                            placeholder="Мельник"
                            {...register("lastName")}
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                    </div>

                    {/* Електрона пошта */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Електрона пошта</label>
                        <input
                            type="text"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            id="email"
                            placeholder="ss@ss.ss"
                            {...register("email")}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>

                    <button type="submit" className="btn btn-success">Зберегти</button>
                </form>
            </div>
        </>
    )
}

export default ProfilePage;