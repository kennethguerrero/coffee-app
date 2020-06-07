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

    useEffect(() => {
        const result = localStorage.getItem('order');
        setNameValue(JSON.parse(result));
    }, []);

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
                    <div className="divAlert" style={{ display: alert ? "block" : "none" }}>
                        <span className="closebtn" onClick={() => setAlert(false)}>&times;</span>
                        <strong>Reminder:</strong> Please save a screenshot of your order details.
                    </div>

                    <div className="divContainer">

                        <div className="divContent">
                            <div className="labelTitle">Order:</div> 
                            <div>{nameValue.quantity} {nameValue.type} {nameValue.density}</div>
                        </div>

                        <div className="divContent">
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
                                            <span className="summaryWarning" style={{ color: "green", display: warning ? "block" : "none" }}>For orders more than 3000g/3kg, shipping fee is still subject to change.</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>
                                            <span style={{ display: warning ? "none" : "block" }}>&#8369; {nameValue.price}.00</span>
                                            <span className="summaryWarning" style={{ color: "green", display: warning ? "block" : "none" }}>For orders more than 3000g/3kg, shipping fee is still subject to change.</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <div className="divContent">
                            <div className="labelTitle">Full Name:</div> 
                            <div>{nameValue.fullName}</div>
                        </div>
                        <div className="divContent">
                            <div className="labelTitle">Shipping:</div> 
                            <div>{nameValue.shipping}</div>
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
                                <button className="btnSubmit">FINISH</button>
                            </Link>
                        </div>

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
                    }
                    .closebtn:hover {
                        color: black;
                    }
                    .divContent {
                        margin-bottom: 20px;
                    }
                    .divContainer {
                        max-width: 800px;
                        width: 18rem;
                    }
                `}</style>

            </div>
        </Layout>
    )
}