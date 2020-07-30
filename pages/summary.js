import Head from 'next/head'
import Layout from '../components/layout'
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Summary() {

    const [nameValue, setNameValue] = useState("");
    const [alert, setAlert] = useState(true);

    let warning;
    if (nameValue.multipliedDensity > 3000){
        warning = true;
    }
    else {
        warning = false;
    }

    let isManila;
    if (nameValue.shipping == "Within Metro Manila") {
        isManila = true;
    }
    else {
        isManila = false;
    }

    useEffect(() => {
        const result = localStorage.getItem('order');
        setNameValue(JSON.parse(result));
    }, []);

    const handleSubmit = () => {
        fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nameValue.fullName, shipping: nameValue.shipping, courier: nameValue.courier, address: nameValue.address, phone: nameValue.phoneNumber, landmark: nameValue.landmark, emailAddress: nameValue.emailAddress, quantity: nameValue.quantity, type: nameValue.type, density: nameValue.density, totalPrice: nameValue.price})
        });

        console.log("Order complete!");
    }

    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Summary</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">
                        Order Summary
                    </h1>

                    <br />
                    <div className="divAlert" style={{ visibility: alert ? "visible" : "hidden" }}>
                        <span className="closebtn" onClick={() => setAlert(false)}>&times;</span>
                        <strong>Reminder:</strong> Save a screenshot for your own copy.
                    </div>

                    <div className="labelTitle">Breakdown:</div> 
                            
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "75%" }}>Coffee</td>
                                <td style={{ width: "25%" }}>&#8369; {nameValue.coffeePrice}.00</td>
                            </tr>
                            <tr>
                                <td>Quantity</td>
                                <td>{nameValue.quantity}</td>
                            </tr>
                            <tr>
                                <td style={{ paddingRight: "40px" }}>Shipping fee</td>
                                <td>
                                    <span style={{ display: warning ? "none" : "block" }}>&#8369; {nameValue.shippingFee}.00</span>
                                    <span className="summaryWarning" style={{ color: "green", display: warning ? "block" : "none" }}>--</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>
                                    <span style={{ display: warning ? "none" : "block" }}>&#8369; {nameValue.price}.00</span>
                                    <span className="summaryWarning" style={{ color: "green", display: warning ? "block" : "none" }}>--</span>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="2" style={{ textAlign: "center" }}>
                                    <span className="summaryWarning" style={{ color: "green", display: warning ? "block" : "none" }}>For orders more than 3000g/3kg, shipping and total fee are still subject to change.</span>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div className="divContent">
                        <div className="labelTitle">Order:</div> 
                        <div>{nameValue.quantity} {nameValue.type} {nameValue.density}</div>
                    </div>

                    <div className="divContent">
                        <div className="labelTitle">Full Name:</div> 
                        <div>{nameValue.fullName}</div>
                    </div>
                    <div className="divContent">
                        <div className="labelTitle">Shipping:</div> 
                        <div>
                            {nameValue.shipping}&nbsp; 
                            <span style={{ display: isManila ? "inline" : "none" }}>
                                ({nameValue.courier})
                            </span>
                        </div>
                    </div>
                    <div className="divContent">
                        <div className="labelTitle">Address:</div> 
                        <div>{nameValue.address}</div>
                    </div>
                    <div className="divContent">
                        <div className="labelTitle">Phone Number:</div> 
                        <div>{nameValue.phoneNumber}</div>
                    </div>
                    <div className="divContent">
                        <div className="labelTitle">Landmarks and Remarks:</div> 
                        <div>{nameValue.landmark}</div>
                    </div>
                    <div className="divContent">
                        <div className="labelTitle">Email Address:</div> 
                        <div>{nameValue.emailAddress}</div>
                    </div>

                    <div className="divButton">
                        <Link href="/final">
                            <button className="btnSubmit" onClick={handleSubmit}>FINISH</button>
                        </Link>
                    </div>

                </main>

                <style jsx>{`
                    .container {
                        min-height: 100vh;
                        padding: 0 0.5rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    main {
                        padding: 4rem 0;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .grid {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
        
                        max-width: 800px;
                        margin-top: 1rem;
                    }
                    .title {
                        margin: 0;
                        line-height: 1.15;
                        font-size: 4rem;
                    }
                    .labelTitle {
                        font-weight: bold;
                    }
                    p {
                        color: #FF0000;
                    }
                    #tblPayment {
                        font-size: 9px;
                    }
                    @media (max-width: 600px) {
                        .grid {
                            width: 100%;
                            flex-direction: column;
                        }
                        .title {
                            font-size: 2.5rem;
                        }
                    }
                    .divAlert {
                        padding: 20px;
                        background-color: #f44336;
                        color: white;
                        opacity: 1;
                        transition: opacity 0.6s;
                        margin-bottom: 15px;
                        width: 95%;
                        text-align: center;
                    }
                    .closebtn {
                        margin-left: 15px;
                        color: white;
                        font-weight: bold;
                        float: right;
                        font-size: 22px;
                        line-height: 20px;
                        cursor: pointer;
                        transition: 0.3s;
                    }  
                    .btnSubmit {
                        width: 120px;
                        height: 30px;
                        font-weight: 700;
                        color: #FFF;
                        background-color: #404040;
                        font-size: 11px;
                        border-style: none;
                    }
                    .btnSubmit:hover {
                        background-color: #996515;
                        transition: .5s ease;
                    }
                    .divButton {
                        margin-top: 20px;
                        width: 95%;
                    }
                    .closebtn:hover {
                        color: black;
                    }
                    .divContent, table {
                        margin-bottom: 20px;
                        width: 95%;
                    }
                `}</style>

            </div>
        </Layout>
    )
}