import Layout from "../components/layout";
import Head from "next/head";

export default function About() {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Final</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">
                        Congratulations!
                    </h1>

                    <h2>Your order has been complete.</h2>

                    <p>Send us the screenshot of your order details here:</p>
                    <div className="divContent">
                        <a href="mailto:btngn.ph@gmail.com?subject=Online Order&body=Hi BTNGÑ,%0D%0A%0D%0AAttached is my order details.%0D%0A%0D%0AThank you.%0D%0A%0D%0A"><strong>Gmail</strong></a><br/>
                        <a href="https://www.messenger.com/t/300946867439223?fbclid=IwAR0ZAm-nIimatsLfpjhbm_2eqijKNRZcTZ9mEuGZGYZEZ1eGX1lwTbHHd7c" target="_blank"><strong>Facebook</strong></a><br/>
                        <a href="https://www.instagram.com/btngn.ph" target="_blank"><strong>Instagram</strong></a>
                    </div>     

                    <table>
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <strong>Modes of Payment</strong>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: "50%" }}>BPI<br/>0189369808 (Jo Anna Manuel)</td>
                                <td>BDO<br/>007310065872 (Kenneth Guerrero)</td>
                            </tr>
                            <tr>
                                <td>GCash<br/>09178002691 (Jo Anna Manuel)</td>
                                <td>Palawan<br/>09178002691 (Jo Anna Manuel)</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 style={{ textAlign: "center" }}>Thank You, Barakos!</h2>

                </main>
                
                <style jsx> {`
                    img { 
                        width: 100%;
                    }
                    p {
                        text-align: justify;
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
                    @media (max-width: 600px) {
                        .grid {
                            width: 100%;
                            flex-direction: column;
                        }
                        .title {
                            font-size: 2.5rem;
                        }
                    }
                    a {
                        color: #000;
                    }
                    a:hover {
                        color: #CFB53B;
                    }
                    table {
                        font-size: 9px;
                        margin-top: 3rem;
                        margin-bottom: 3rem;
                    }
                    .divContent {
                        margin-bottom: 4rem;
                    }
                `}
                </style>
            </div>
        </Layout>
    );
}