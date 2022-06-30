import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../redux/features/auth/authSlice";
import "./global.css";

const Layout = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/login");
    };

    return (
        <>
            
            <div className="layout-main">
                <header>
                    <div className="container">
                        <div className="row align-items-center py-3">
                            <div className="col-md-6">
                                <span className="logo">Bills.</span>
                            </div>
                            <div className="col-md-4 text-end">
                                <p className="total-top">
                                    <b>Paid Total: </b>
                                    <span className="total-amount">0</span>
                                </p>
                            </div>
                            <div className="col-md-2 text-end">
                                <ul>
                                    {user ? (
                                        <li>
                                            <button
                                                className="btn btn-danger"
                                                onClick={onLogout}
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    ) : (
                                        // justify-content: flex-end
                                        <>
                                            <div className="d-flex justify-content-end">
                                                <li className="px-2">
                                                    <Link to="/login">
                                                        <button className="btn btn-info">
                                                            Login
                                                        </button>
                                                    </Link>
                                                </li>
                                                <li className="px-2">
                                                    <Link to="/registration">
                                                        <button className="btn btn-primary">
                                                            Register
                                                        </button>
                                                    </Link>
                                                </li>
                                            </div>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="container">{props.children}</main>
                <footer className="container text-center py-2">
                    <hr />
                    <p>
                        All right reserved by <b>Nafiz Anam</b> ⓒ 2022
                    </p>
                </footer>
            </div>
        </>
    );
};

export default Layout;
