import Layout from "../components/layout";
import Head from "next/head";

export default function News2() {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Barako Drip Solo</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">
                        Barako Drip Solo
                    </h1>

                    <p>On the go? Try our Barako Drip Solo Pack.</p>

                    <div className="grid">
                        <img src="dripsolo1.jpg" />
                        <img src="dripsolo2.jpg" />
                        <img src="dripsolo3.jpg" />
                        <img src="dripsolo4.jpg" />
                        <img src="dripsolo5.jpg" />
                        <img src="dripsolo6.jpg" />
                    </div>

                </main>

                <style jsx> {`
                    img {
                        width: 100%; 
                        max-width: 360px;
                        opacity: 1;
                        backface-visibility: hidden;
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
                `}
                </style>
            </div>
        </Layout>
    )
}