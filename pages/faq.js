import Layout from "../components/layout";
import Head from "next/head";

export default function FAQ() {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>FAQ</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">FAQ</h1>

                    <div className="grid">
                        <div className="divContent">
                            <div className="divQuestion">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="QHeader">Q.</td>
                                            <td>How do we place our orders?</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="divAnswer">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="AHeader">A.</td>
                                            <td>You can go to the shop button on our site or you may directly message us through Instagram or Facebook (@btngn.ph).</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="divContent">
                            <div className="divQuestion">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="QHeader">Q.</td>
                                            <td>What if we want to order in bulk for events, souvenirs, etc.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="divAnswer">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="AHeader">A.</td>
                                            <td>For bulk orders, we suggest messaging us on our IG or FB account so we can discuss further the details.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="divContent">
                            <div className="divQuestion">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="QHeader">Q.</td>
                                            <td>Do you accept resellers?</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="divAnswer">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="AHeader">A.</td>
                                            <td>Soon! &#128521;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="divContent">
                            <div className="divQuestion">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="QHeader">Q.</td>
                                            <td>What are your shipping options?</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="divAnswer">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="AHeader">A.</td>
                                            <td>For Metro Manila orders, we partnered with Fifth Express to deliver your items. You may also choose to have your orders delivered through Lalamove or Grab especially if they are in bulk. For provincial orders, we only trust LBC as our courier to ensure that our products will be handled and delivered to you with outmost care.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="divContent">
                            <div className="divQuestion">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="QHeader">Q.</td>
                                            <td>I’m so excited for my orders! How do we track it?</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="divAnswer">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="AHeader">A.</td>
                                            <td>We feel you &#128522; We will provide you with the tracking no. of your orders which you may check out the status on their site. </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="divContent">
                            <div className="divQuestion">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="QHeader">Q.</td>
                                            <td>How do we pay our orders?</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="divAnswer">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="AHeader">A.</td>
                                            <td>We accept BPI, BDO, GCASH and Palawan Express Payment</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="divContent">
                            <div className="divQuestion">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="QHeader">Q.</td>
                                            <td>How do we store your products?</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="divAnswer">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="AHeader">A.</td>
                                            <td>For our kapeng barako, we highly suggest storing them in tight containers free from moisture and away from direct sunlight to prolong the freshness and quality of the product. For our tablea, make sure that they are stored in a tight container on room temperature condition as extreme heat may melt the chocolate.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="divContent">
                            <div className="divQuestion">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="QHeader">Q.</td>
                                            <td>Are your tablea de cacao pure?</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="divAnswer">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="AHeader">A.</td>
                                            <td>Yes! Our tablea de cacao are definitely pure and unsweetened &#128522; </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
                    .divQuestion {
                        background-color: #f9f9f9;
                    }
                    .divAnswer {
                        background-color: #FFF;
                    }
                    .QHeader {
                        color: red;
                        font-size: 25px;
                        padding-right: 13px;
                        vertical-align: top;
                    }
                    .AHeader {
                        color: green;
                        font-size: 25px;
                        padding-right: 15px;
                        vertical-align: top;
                    }
                    .divContent {
                        margin-top: 30px;
                        width: 100%;
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