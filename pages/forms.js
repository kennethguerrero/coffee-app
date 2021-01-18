import Layout from "../components/layout";
import Head from "next/head";
import React, { useState, useCallback } from "react";
import { router, useRouter } from "next/router";

export default function Forms() {

    const [nameValue, setNameValue] = useState("");
    const router = useRouter();

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

            const productsFromCart = localStorage.getItem('productsFromCart');
            const parsed = JSON.parse(productsFromCart);

            var convertedShipFee;
            if (nameValue.shipping == "Within Metro Manila") {
                switch (nameValue.courier) {
                    case "Fifth Express":
                        convertedShipFee = 100;
                        break;
                    case "Grab":
                        convertedShipFee = 0;
                        break;
                    case "Lalamove":
                        convertedShipFee = 0;
                        break;
                    default:
                        convertedShipFee = 0;
                }
            }
            else {
                convertedShipFee = 300;
            }
            
            const totalPrice = convertedShipFee + parsed.totalPriceOnCart;

            const customerDetails = {
                fullName: nameValue.fullName, 
                shipping: nameValue.shipping, 
                address: nameValue.address, 
                phoneNumber: nameValue.phoneNumber, 
                landmark: nameValue.landmark, 
                emailAddress: nameValue.emailAddress, 
                // type: parsed.type, 
                // density: parsed.density, 
                // quantity: parsed.quantity, 
                price: totalPrice, 
                // multipliedDensity: parsed.multipliedDensity, 
                shippingFee: convertedShipFee, 
                coffeePrice: parsed.totalPriceOnCart, 
                courier: nameValue.courier
            };

            if ((parsed.cartWithColdBrew == true) && (nameValue.shipping == "Outside Metro Manila")){
                //console.log("id-7");
            }
            else {

                localStorage.setItem('order', JSON.stringify(customerDetails));
                router.push("/summary")
            }
        },
        [nameValue]
    ); 

    let isManila;
    let isFifth;
    let isGrabMove;

    if (nameValue.shipping == "Within Metro Manila") {
        isManila = true;

        if (nameValue.courier == "Fifth Express") {
            isFifth = true;
        }
        else {
            isFifth = false;
        }

        if (nameValue.courier == "Grab" || nameValue.courier == "Lalamove") {
            isGrabMove = true;
        }
        else {
            isGrabMove = false;
        }

    }
    else {
        isManila = false;
    }

    let outsideManila;
    if (nameValue.shipping == "Outside Metro Manila") {
        outsideManila = true;
        nameValue.courier = "LBC";
    }
    else {
        outsideManila = false;
    }

    const productsFromCart = localStorage.getItem('productsFromCart');
    const parsed = JSON.parse(productsFromCart);

    let isColdBrewProvince;
    if (nameValue.shipping == "Outside Metro Manila" && parsed.cartWithColdBrew == true) {
        isColdBrewProvince = true;
    }

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

                                <select name="courier" value={nameValue.courier} onChange={handleNameChange} style={{ display: isManila ? "inline" : "none" }} required={ isManila ? true : false }>
                                    <option value=""></option>
                                    {/* <option value="Fifth Express">Fifth Express</option> */}
                                    <option value="Grab">Grab</option>
                                    <option value="Lalamove">Lalamove</option>
                                </select>
                                <br />

                                {/* <span style={{ display: isFifth ? "inline" : "none", fontSize: "13px" }}>
                                    Courier: Fifth Express - &#8369;100.00
                                </span> */}
                                <span style={{ display: isGrabMove ? "inline" : "none", fontSize: "13px", color: "green" }}>
                                    Booking care of customer.
                                </span>
                                <span style={{ display: outsideManila ? "inline" : "none", fontSize: "13px", color: "green" }}>
                                    Courier: <strong>LBC</strong> - &#8369;300.00
                                </span>

                                <span className="message" style={{ display: isColdBrewProvince ? "block": "none" }}>
                                    <br />Cold Brew cannot be shipped outside Metro Manila.
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
                                <input type="email" name="emailAddress" className="myInput" value={nameValue.emailAddress || "" } onChange={handleNameChange} />
                            </div>
                            <br/>
                            <input className="btnSubmit" type="submit" value="SUBMIT" />

                        </form>
                    </div>
                </main>

                <style jsx> {`
                    .message {
                        color: red;
                        font-size: 13px;
                        text-align: default
                    }
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