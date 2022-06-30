import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../redux/features/auth/authSlice";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import "./global.css";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        // if (isError) {
        //     toast.error("Please check email/password");
        // }
        if (isSuccess || user) {
            // toast.success("Login Successful");
            navigate("/billings");
        }
        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onSubmit = (data) => {
        console.log("form data =>", data);
        const userData = {
            email: data?.email,
            password: data?.password,
        };
        dispatch(login(userData));
    };

    if (isLoading) {
        return <Spinner />;
    }

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
