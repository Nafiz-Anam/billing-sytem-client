import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "./global.css";

const Login = () => {
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
            <div className="login-page">
                <div className="container">
                    <h1 className="text-center login-title">Login Here</h1>
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: true,
                                })}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    minLength: 6,
                                    required: true,
                                })}
                            />
                            <input
                                className="btn login-btn"
                                type="submit"
                                value="Login"
                            />
                        </form>
                        <span>
                            Don't have an account?
                            <Link to="/registration"> Create an account.</Link>
                        </span>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
