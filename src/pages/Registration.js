import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "./global.css";

const Registration = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    console.log(watch("example"));
    return (
        <Layout>
            <div className="register-page">
                <div className="register-form container">
                    <h1 className="register-title text-center">Register Here</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder="User Name"
                            {...register("user_name", {
                                required: true,
                            })}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                        <input
                            className="btn btn-register"
                            type="submit"
                            value="Register"
                        />
                    </form>
                    <span>
                        Already have an account?
                        <Link to="/login"> Login from here.</Link>
                    </span>
                </div>
            </div>
        </Layout>
    );
};

export default Registration;
