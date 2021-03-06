import Layout from "../components/layout";
import Head from "next/head";

export default function NewsRaffle() {
    return (
        <Layout>
            <div className="container">

                <Head>
                    <title>Raffle</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">The Awesome Barako Raffle</h1>

                    <p>&nbsp;</p>

                    <img src="/news-raffle.jpg" />
                    <br />

                    <div>Rules and Mechanics:</div>

                    <ul>
                        <li>
                            For every single purchase of BTNGÑ products worth 500 php and above entitles the customer to 1 raffle entry.
                        </li>
                        <li>
                            Customer should be following our social media accounts in order to claim the prize.
                        </li>
                        <li>
                            No need to keep your tickets to redeem the prize. We got you covered! ;)
                        </li>
                        <li>
                            Draw date will be announced on our social media accounts so stay tuned! :)
                        </li>
                        <li>
                            Winner will be notified through text / e-mail or direct message on IG and FB.
                        </li>
                        <li>
                            Prizes are non-convertible to cash.
                        </li>
                    </ul>
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
                        max-width: 500px;
                        opacity: 1;
                        backface-visibility: hidden;
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