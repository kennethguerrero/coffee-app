import Layout from "../components/layout";
import Head from "next/head";

export default function News1() {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Barako Drip</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">
                        Barako Drip
                    </h1>

                    <p>How to take our barako drip?</p>

                    <ol>
                        <li>Tear along the arrow of the drip bag.</li>
                        <li>Set bag on cup using the hooks.</li>
                        <li>Pour hot water and wait until the water drips completely.</li>
                        <li>Remove the drip bag and enjoy!</li>
                    </ol>

                    <div className="grid">
                        <img src="drip2.jpg" />
                        <img src="drip1.jpg" />
                    </div>

                    <p>Watch the video <a href="https://www.facebook.com/btngn.ph/videos/261954168451152/" target="_blank">here.</a></p>

                </main>

                <style jsx> {`
                    a {
                        color: inherit;
                    }
                    a:hover {
                        color: #CFB53B;
                    }
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