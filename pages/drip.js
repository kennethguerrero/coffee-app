import Layout from "../components/layout";
import Head from "next/head";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

const PageDrip = () => {

    const [nameValue, setNameValue] = useState("");
    const [product, setProduct] = useState();
    const router = useRouter();

    const handleNameChange = (event) => {
        const fieldName = event.target.getAttribute("name");
        setNameValue({
            ...nameValue,
            [fieldName]: event.target.value
        });
    }

    const handleSubmit = useCallback (
        event => {
            event.preventDefault();

            let myDensity = nameValue.density.replace("bags", "");
            let totalDensity = myDensity * nameValue.quantity;
            
            var coffeePrice;
            switch (nameValue.density) {
                case "50g":
                    coffeePrice = 45;
                    break;
                case "90g":
                    coffeePrice = 80;
                    break;
                case "100g":
                    coffeePrice = 80;
                    break;
                case "200g":
                    coffeePrice = 150;
                    break;
                case "300g":
                    coffeePrice = 200;
                    break;
                case "500g":
                    coffeePrice = 300;
                    break;
                case "10bags":
                    coffeePrice = 200;
                    break;
                default:
                    coffeePrice = 0;
            }
            const totalPrice = nameValue.quantity * coffeePrice;

            const customer = {type: "Barako Drip", density: nameValue.density, quantity: nameValue.quantity, price: totalPrice, multipliedDensity: totalDensity, coffeePrice: coffeePrice}
            localStorage.setItem('order', JSON.stringify(customer));

            router.push("/forms")
        },
        [nameValue]
    );

    var coffeePrice;
    switch (nameValue.density) {
        case "50g":
            coffeePrice = 45;
            break;
        case "90g":
            coffeePrice = 80;
            break;
        case "100g":
            coffeePrice = 80;
            break;
        case "200g":
            coffeePrice = 150;
            break;
        case "300g":
            coffeePrice = 200;
            break;
        case "500g":
            coffeePrice = 300;
            break;
        case "10bags":
            coffeePrice = 200;
            break;
        default:
            coffeePrice = 0;
    }

    let displayPrice = false;
    if (nameValue.density != "") {
        displayPrice = true;
        //console.log(coffeePrice);
    }

    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Barako Drip</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">Barako Drip</h1>

                    <div className="grid">
                        <div onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                            <p>10 drip bags of instant kapeng barako.</p><br />
                            <img src="https://do6gbw1x8hs3.cloudfront.net/spree/product_images/162315/large/RE_2653.jpg?1556536940" /><br />
                            <span style={{ display: displayPrice ? "block" : "none", fontSize: "13px"}}>&#8369;{coffeePrice}.00</span>

                            <form>
                                <select name="density" value={nameValue.density} onChange={handleNameChange} required>
                                    <option value=""></option>
                                    <option value="10bags">10 bags</option>
                                </select>&nbsp;
                                <input type="number" id="txtQuantity" value={nameValue.quantity || "" } onChange={handleNameChange} placeholder="quantity" name="quantity" required />&nbsp;
                                <input type="submit" className="btnSubmit" value=" CHECK OUT" />
                            </form>

                        </div> 
                    </div>

                </main>

                <style jsx>{`
                    img { 
                        max-width: 500px;
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
                        width: 62px;
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

export default PageDrip;