import Layout from "../components/layout";
import Head from "next/head";
import { useState, useCallback } from "react";
import Link from "next/link";

const PageSolo = () => {

    const [nameValue, setNameValue] = useState("");
    const [hasOrdered, setHasOrdered] = useState(false);

    const handleNameChange = (event) => {
        const fieldName = event.target.getAttribute("name");
        setNameValue({
            ...nameValue,
            [fieldName]: event.target.value
        });
    }

    const toggle = useCallback(
        () => setHasOrdered(!hasOrdered),
        [hasOrdered, setHasOrdered],
    );

    var coffeePrice;
    switch (nameValue.density) {
        case "10g":
            coffeePrice = 30;
            break;
        case "50g":
            coffeePrice = 50;
            break;
        case "90g":
            coffeePrice = 80;
            break;
        case "100g":
            coffeePrice = 90;
            break;
        case "200g":
            coffeePrice = 165;
            break;
        case "300g":
            coffeePrice = 220;
            break;
        case "500g":
            coffeePrice = 330;
            break;
        default:
            coffeePrice = 0;
    }

    let finalPrice;
    finalPrice = coffeePrice * nameValue.quantity;

    if (isNaN(finalPrice)){
        finalPrice = 0;
    }
    
    let displayPrice = false;
    if (nameValue.density != "") {
        displayPrice = true;
        // console.log(coffeePrice);
    }

    const handleSubmit = useCallback (
        event => {
            event.preventDefault();

            let productsSavedToCart = JSON.parse(
                localStorage.getItem("productsOnCart") || "[]"
            );

            let myDensity = nameValue.density.replace("g", "");
            let totalDensity = myDensity * nameValue.quantity;
            
            var coffeePrice;
            switch (nameValue.density) {
                case "10g":
                    coffeePrice = 30;
                    break;
                case "50g":
                    coffeePrice = 50;
                    break;
                case "90g":
                    coffeePrice = 80;
                    break;
                case "100g":
                    coffeePrice = 90;
                    break;
                case "200g":
                    coffeePrice = 165;
                    break;
                case "300g":
                    coffeePrice = 220;
                    break;
                case "500g":
                    coffeePrice = 330;
                    break;
                default:
                    coffeePrice = 0;
            }
            const totalPrice = nameValue.quantity * coffeePrice;

            let customer = {
                id: 1,
                type: "Drip Solo", 
                density: nameValue.density, 
                quantity: nameValue.quantity,  
                multipliedDensity: totalDensity, 
                coffeePrice: coffeePrice,
                price: totalPrice
            }
            productsSavedToCart.push(customer);
            localStorage.setItem("productsOnCart", JSON.stringify(productsSavedToCart));

            toggle();
        },
        [nameValue]
    );

    let isSoldOut = false;

    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Solo</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">Drip Solo</h1>

                    <div className="grid">
                        <div onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                            <p>Barako Drip in a solo bag.</p><br />
                            <img src="/Products-Solo.JPG" /><br />
                            <span style={{ display: displayPrice ? "block" : "none", fontSize: "13px"}}>&#8369;{finalPrice}.00</span>

                            <form>
                                <select name="density" value={nameValue.density} onChange={handleNameChange} required>
                                    <option value=""></option>
                                    <option value="10g">10g</option>
                                </select>&nbsp;
                                <input type="number" id="txtQuantity" value={nameValue.quantity || "" } onChange={handleNameChange} placeholder="quantity" name="quantity" required />&nbsp;
                                <input type="submit" className="btnSubmit" value="ADD TO CART" disabled={ isSoldOut ? true: false } />
                            </form>

                            <br />
                            <div style={{ display: isSoldOut ? "block": "none" }}>
                                <span className="message">
                                    <strong>Sold Out</strong>
                                </span><br />
                            </div>

                            <br />
                            <div style={{ display: hasOrdered ? "block" : "none"}}>
                                <span className="message">Your order was placed!</span><br />
                                <Link href="/products">
                                    <a>Continue shopping</a>
                                </Link> -&nbsp;
                                <Link href="/cart">
                                    <a>Go to cart</a>
                                </Link>
                            </div>

                        </div>
                    </div>

                </main>

                <style jsx>{`
                    a {
                        font-size: 13px;
                        color: #000;
                        font-weight: bold;
                        text-decoration: none;
                    }
                    a:hover {
                        color: #996515;
                    }
                    .message {
                        font-size: 13px;
                    }
                    img { 
                        max-width: 80%;
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
                    #txtQuantity {
                        width: 70px;
                    }
                    input {
                        text-align: center;
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
                `}</style>

            </div>
        </Layout>
    )
}

export default PageSolo;