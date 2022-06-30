import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Table from "../components/Table/Table";
import "./global.css";

const Billing = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios("http://localhost:8000/billing/", {
                Headers: {
                    token: "Bearer ",
                },
            });
            console.log(response.data.result);
            setData(response.data.result);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const editBilling = () => {};
    const deleteBilling = () => {};

    const columns = [
        {
            Header: "Name",
            accessor: "full_name",
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "Phone",
            accessor: "phone",
        },
        {
            Header: "Paid Amount",
            accessor: "paid_amount",
        },
        {
            Header: "Action",
            accessor: "action",
            Cell: (props) => (
                <div className="d-flex">
                    <i
                        className="fas fa-edit p-2"
                        onClick={() => editBilling(props)}
                    ></i>
                    <i
                        className="fas fa-trash p-2"
                        onClick={() => deleteBilling(props)}
                    ></i>
                </div>
            ),
        },
    ];

    const itemsPerPage = [
        {
            text: "5",
            value: 5,
        },
        {
            text: "10",
            value: 10,
        },
        {
            text: "25",
            value: 25,
        },
    ];

    return (
        <Layout>
            <h2 className="billing-title">Billing List</h2>
            <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={itemsPerPage}
                isSortable={true}
                pagination={true}
            />
        </Layout>
    );
};

export default Billing;
