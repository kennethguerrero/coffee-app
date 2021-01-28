import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

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

                    <h2 style={{ textAlign: "center" }}>Your order has been placed.</h2>  

                    <h2 style={{ textAlign: "center" }}>Please check your email for receipt.</h2>  

                    <table style={{ visibility: "hidden" }}>
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

                    <h4 style={{ textAlign: "center" }}>
                        We'd love to hear your&nbsp;
                        <Link href="/feedback">
                            <a>feedback!</a>
                        </Link>
                    </h4>
                    <h2 style={{ textAlign: "center" }}>Thank You!</h2>

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