import React from "react";
import "./global.css";

const Layout = (props) => {
    return (
        <div className="layout-main">
            <header>
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-6">
                            <span className="logo">Bills.</span>
                        </div>
                        <div className="col-md-6 text-end">
                            <p className="total-top">
                                <b>Paid Total: </b>
                                <span className="total-amount">0</span>
                            </p>
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
    );
};

export default Layout;
