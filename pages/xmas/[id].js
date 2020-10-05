import Layout from "../../components/layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Loader from 'react-loader-spinner';

const DynamicData = () => {
    const [product, setProduct] = useState();
    const [nameValue, setNameValue] = useState("");
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

            const customer = {
                type: product.name,
                coffeePrice: product.price,
                quantity: nameValue.quantity,
                price: totalPrice
            }

            localStorage.setItem("order", JSON.stringify(customer));

            router.push("/forms");
        }
    )

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

                                <input className="btnSubmit" type="submit" value="CHECK OUT" />
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