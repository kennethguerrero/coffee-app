import Layout from "../../components/layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Loader from 'react-loader-spinner';
import Link from "next/link";

const DynamicData = () => {
    const [product, setProduct] = useState();
    const [nameValue, setNameValue] = useState("");
    const [hasOrdered, setHasOrdered] = useState(false);
    const router = useRouter();

    const handleNameChange = (event) => {
        const fieldName = event.target.getAttribute("name");
        setNameValue({
            ...nameValue,
            [fieldName]: event.target.value
        });
    }

    useEffect(() => {
        const getProducts = async () => {
            const { id } = router.query;
            const response = await fetch("https://www.json-generator.com/api/json/get/cgoBhpfUya?indent=2");
            let data
    
            try {
                data = await response.json()
            } catch (err) {
            } finally {
                const output = data.find((item) => item.id === +id)
                if (output) {
                    setProduct(output)
                }
            }
        }

        if (router.query.id) {
            getProducts()
        }
    }, [router])

    const toggle = useCallback(
        () => setHasOrdered(!hasOrdered),
        [hasOrdered, setHasOrdered],
    );

    const handleSubmit = useCallback (
        event => {
            event.preventDefault();

            let productsSavedToCart = JSON.parse(
                localStorage.getItem("productsOnCart") || "[]"
            );

            const customer = {
                id: "xmas" + product.id,
                type: product.name,
                coffeePrice: product.price,
                quantity: nameValue.quantity,
                price: totalPrice
            }

            productsSavedToCart.push(customer);
            localStorage.setItem("productsOnCart", JSON.stringify(productsSavedToCart));

            toggle();
        }
    )

    if (!product) {
        return (
            <div style={{ textAlign: "center", transform: "translate( 1%, 300%)" }}>
                <Loader 
                    type="Puff"
                    color="#404040"
                    secondaryColor="#404040" />
            </div>
        );
    }

    let totalPrice;
    let finalQuantity = nameValue.quantity;
    totalPrice = product.price * finalQuantity;

    if (isNaN(totalPrice)){
        totalPrice = 0;
    }

    let displayPrice = false;
    if (nameValue.quantity != "") {
        displayPrice = true;
    }

    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>{product.name}</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">{product.name}</h1>

                    <div className="grid">
                        <div onSubmit={handleSubmit} style={{ textAlign: "center"}}>

                            <p>{product.description}</p><br />
                            <img src={product.url} /><br />

                            <span style={{ display: displayPrice ? "block" : "none", fontSize: "13px"}}>&#8369;{totalPrice}.00</span>

                            <form>
                                <input type="number" id="txtQuantity" name="quantity" placeholder="quantity" value={nameValue.quantity || ""} onChange={handleNameChange} required />&nbsp;

                                <input className="btnSubmit" type="submit" value="ADD TO CART" />
                            </form>

                            <br />
                            <div style={{ display: hasOrdered ? "block" : "none"}}>
                                <span className="message">Your order was placed!</span><br />
                                <Link href="/xmaspackage">
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
                        max-width: 100%;
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
                        text-align: center;
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

export default DynamicData;