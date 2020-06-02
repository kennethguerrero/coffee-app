import Layout from "../components/layout";
import Head from "next/head";
import React, { useState, useCallback } from "react";

export default function Forms() {

    const [nameValue, setNameValue] = useState("");

    let isManila;
    if (nameValue.shipping == "Within Metro Manila") {
        isManila = true;
    }
    else {
        isManila = false;
    }

    let outsideManila;
    if (nameValue.shipping == "Outside Metro Manila") {
        outsideManila = true;
    }
    else {
        outsideManila = false;
    }

    const handleNameChange = (event) => {
        const fieldName = event.target.getAttribute("name");
        setNameValue({
            ...nameValue,
            [fieldName]: event.target.value
        });
    }

    const handleSubmit = useCallback(
        event => {
            event.preventDefault();

            const existing = localStorage.getItem('order');
            const parsed = JSON.parse(existing);

            var convertedShipFee;
            switch (nameValue.shipping) {
                case "Within Metro Manila":
                    convertedShipFee = 100;
                    break;
                case "Outside Metro Manila":
                    convertedShipFee = 250;
                    break;
                default:
                    convertedShipFee = 0;
            }

            const totalPrice = convertedShipFee + parsed.price;

            const customer = {fullName: nameValue.fullName, shipping: nameValue.shipping, address: nameValue.address, phoneNumber: nameValue.phoneNumber, landmark: nameValue.landmark, emailAddress: nameValue.emailAddress, type: parsed.type, density: parsed.density, quantity: parsed.quantity, price: totalPrice, multipliedDensity: parsed.multipliedDensity, shippingFee: convertedShipFee, coffeePrice: parsed.coffeePrice};

            //console.log(totalPrice);

            localStorage.setItem('order', JSON.stringify(customer));
        
            window.location.href = "/summary";
        },
        [nameValue]
        // setNameValue("");
    ); 

    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Forms</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">
                        Order Form
                    </h1>
                
                    <div className="grid">
                        <form onSubmit={handleSubmit}>
                            <div className="divContent">
                                <label>Full Name</label>
                                <br/>
                                <input type="text" name="fullName" className="myInput" value={nameValue.fullName || "" } onChange={handleNameChange} required />
                            </div>

                            <div className="divContent">
                                <label>Shipping</label>
                                <br/>
                                <select name="shipping" value={nameValue.shipping} onChange={handleNameChange} required>
                                    <option value=""></option>
                                    <option value="Within Metro Manila">Within Metro Manila</option>
                                    <option value="Outside Metro Manila">Outside Metro Manila</option>
                                </select>&nbsp;
                                <span style={{ display: isManila ? "inline" : "none", fontSize: "13px" }}>
                                    Courier: Fifth Express - &#8369;100.00 <br/><br/>
                                </span>
                                <span style={{ display: isManila ? "inline" : "none", fontSize: "13px", color: "green" }}>
                                    If you prefer other shipping options like Lalamove/Grab, you may directly inform us.
                                </span>
                                <span style={{ display: outsideManila ? "inline" : "none", fontSize: "13px" }}>
                                    Courier: LBC &#8369;250.00
                                </span>
                            </div>
                            
                            <div className="divContent">
                                <label>Complete Address</label>
                                <br/>
                                <textarea name="address" className="myInput" value={nameValue.address} onChange={handleNameChange} required />
                            </div>
                            <div className="divContent">
                                <label>Phone Number</label>
                                <br/>
                                <input type="text" name="phoneNumber" className="myInput" value={nameValue.phoneNumber || "" } onChange={handleNameChange} required />
                            </div>
                            <div className="divContent">
                                <label>Landmarks and Remarks</label>
                                <br/>
                                <textarea name="landmark" className="myInput" value={nameValue.landmark} onChange={handleNameChange} />
                            </div>
                            <div className="divContent">
                                <label>Email Address</label>
                                <br/>
                                <input type="text" name="emailAddress" className="myInput" value={nameValue.emailAddress || "" } onChange={handleNameChange} />
                            </div>
                            <br/>
                            <input className="btnSubmit" type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </main>

                <style jsx> {`
                    form {
                        margin-top: 40px;
                        width: 350px;
                    }
                    .divContent {
                        margin-bottom: 25px;
                    }
                    .myInput {
                        width: 100%;
                        max-width: 600px;
                    }
                    textarea {
                        font-size: 14px;
                    }
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
                    @media (max-width: 600px) {
                        .grid {
                            width: 100%;
                            flex-direction: column;
                        }
                        .title {
                            font-size: 2.5rem;
                        }
                    }
                `}
                </style>

            </div>
        </Layout>
    );
}