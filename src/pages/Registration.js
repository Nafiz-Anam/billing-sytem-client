import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registration, reset } from "../redux/features/auth/authSlice";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "./global.css";
import Spinner from "../components/Spinner";

const Registration = () => {
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
        //     toast.error(message);
        // }
        if (isSuccess || user) {
            navigate("/billings");
        }
        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onSubmit = (data) => {
        console.log("form data =>", data);
        const userData = {
            user_name: data?.user_name,
            email: data?.email,
            password: data?.password,
        };
        dispatch(registration(userData));
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Layout>
            <div className="register-page">
                <div className="register-form container">
                    <h1 className="register-title text-center">
                        Register Here
                    </h1>
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
