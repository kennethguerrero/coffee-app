import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { useRouter } from 'next/router';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const rehydrate = async () => {
            let cartItems;
            try {
                cartItems = localStorage.getItem("productsOnCart");
                cartItems = await JSON.parse(cartItems);
                setCartItems(cartItems);
            }
            catch (e) {
                console.error("ERROR", e);
            }
        };

        rehydrate();
    }, []);

    let totalPriceOnCart;
    if (cartItems === null){
        totalPriceOnCart = 0;
    }
    else {
        totalPriceOnCart = cartItems.reduce(function(prev, current) {
            return prev + current.price
        }, 0);
    }

    const containsColdBrew = cartItems.find(id => id = "Cold Brew")
    let cartWithColdBrew;
    if (containsColdBrew != undefined){
        // console.log("Cart with Cold Brew");
        cartWithColdBrew = true;
    }
    else {
        // console.log("Cart without Cold Brew");
        cartWithColdBrew = false;
    }

    const AddToCart = () => {
        const SubTotalPrice = { totalPriceOnCart: totalPriceOnCart, cartWithColdBrew: cartWithColdBrew }

        localStorage.setItem("productsFromCart", JSON.stringify(SubTotalPrice));
        router.push("/forms");
    }

    const handleDelete = (itemToRemove) => {
        let newItems = cartItems.filter((_item) => {
            return _item != itemToRemove
        });
        setCartItems(newItems);
        localStorage.setItem("productsOnCart", JSON.stringify(newItems));
    }

    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Cart</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>
        
                <main>
                    <h1 className="title">
                        Cart
                    </h1>

                    <div className="grid">
                        <div style={{ width: "100%" }}>
                            <table style={{ width: "100%" }}>
                                <tbody>
                                    <tr>
                                        <td className="tdCart tdHeader" style={{ width: "50%" }}>
                                            Coffee
                                        </td>
                                        <td className="tdCart tdHeader" style={{ width: "25%" }}>
                                            QTY
                                        </td>
                                        <td className="tdCart tdHeader" style={{ width: "25%" }}>
                                            Price
                                        </td>
                                    </tr>

                                    {cartItems && !!cartItems.length && cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td className="tdCart tdCoffeeName">
                                                <button style={{ color: "red", backgroundColor: "white", border: "solid 1px lightgrey"}} onClick=       { handleDelete.bind(this, item)}>
                                                    <strong>X</strong>
                                                </button> 
                                                &nbsp; {item.type} {item.density}
                                            </td>
                                            <td className="tdCart tdCenter">
                                                {item.quantity}
                                            </td>
                                            <td className="tdCart tdCenter">
                                                &#8369; {item.price}
                                            </td>
                                        </tr>
                                    ))}

                                    <tr>
                                        <td className="tdCart tdHeader" colSpan="2">
                                            TOTAL
                                        </td>
                                        <td className="tdCart tdHeader">
                                            &#8369; {totalPriceOnCart}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="divButton">
                            <button className="btnSubmit" onClick={AddToCart}>CHECK OUT</button>
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
                        margin-bottom: 5rem;
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
                        text-align: center;
                    }
                    .closebtn:hover {
                        color: black;
                    }
                    .divContent, table {
                        margin-bottom: 20px;
                        width: 95%;
                    }
                    .tdCart {
                        border: solid 1px lightgrey;
                        padding: 1rem;
                    }
                    .tdHeader {
                        font-weight: bold;
                        text-align: center;
                    }
                    .tdCenter {
                        text-align: center;
                    }
                    @media (max-width: 767px) {
                        .tdCoffeeName {
                            font-size: 12px !important;
                        }
                    }

                `}</style>

            </div>
        </Layout>
    )
}