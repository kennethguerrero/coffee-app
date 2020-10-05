import Layout from "../../components/layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Loader from 'react-loader-spinner';

const UserInput = () => {

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

            let myDensity = nameValue.density.replace("g", "");
            let totalDensity = myDensity * nameValue.quantity;
            
            var coffeePrice;
            switch (nameValue.density) {
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

            const customer = {type: product.name, density: nameValue.density, quantity: nameValue.quantity, price: totalPrice, multipliedDensity: totalDensity, coffeePrice: coffeePrice}
            localStorage.setItem('order', JSON.stringify(customer));

            router.push("/forms")
        },
        [nameValue]
    );

    useEffect(() => {
        const getProducts = async () => {
            const { id } = router.query;
            // console.log("id", id);
            const response = await fetch("https://www.json-generator.com/api/json/get/cfxDrhicCW?indent=2");
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
    
    var coffeePrice;
    switch (nameValue.density) {
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
    let finalQuantity = nameValue.quantity;

    finalPrice = coffeePrice * nameValue.quantity;

    if (isNaN(finalPrice)){
        finalPrice = 0;
    }
    
    console.log('final price:'+finalPrice + ' ' + 'coffee price:'+coffeePrice + ' ' + 'quantity:'+ (finalQuantity));

    let displayPrice = false;
    if (nameValue.density != "") {
        displayPrice = true;
        // console.log(coffeePrice);
    }

    const myOption = product.densities.map(opt => {
        return <option key={opt} value={opt}>{opt}</option>
    })

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
                        <div onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                            <p>{product.description}</p><br />
                            <img src={product.url} /><br />

                            <span style={{ display: displayPrice ? "block" : "none", fontSize: "13px"}}>&#8369;{finalPrice}.00</span>

                            <form>
                                <select name="density" value={nameValue.density} onChange={handleNameChange} required>
                                    <option value=""></option>
                                    {myOption}
                                </select>&nbsp;
                                <input type="number" id="txtQuantity" name="quantity" placeholder="quantity" value={nameValue.quantity || "" } onChange={handleNameChange} required /> &nbsp;
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

export default UserInput;
