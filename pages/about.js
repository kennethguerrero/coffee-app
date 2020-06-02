import Layout from "../components/layout";
import Head from "next/head";

export default function About() {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>About</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">
                        About us
                    </h1>

                    <div className="grid">
                        <p>
                            BTNGÑ is an uprising coffee brand hailing from Batangas. Aiming to promote the local products from Lipa City, Batangas, BTNGÑ makes sure that everyone will get that strong, bold, and intense profile that only barako beans can offer. Due to the continues growth of international coffee shops in the Philippines, the brand wishes to honor their heritage and bring Kapeng Barako back in the spotlight. BTNGÑ also carries other popular products from Lipa like Tablea and Black Pepper or "Paminta".
                        </p>
                        <img src="/about1.jpg" />
                    </div>

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
                `}
                </style>
            </div>
        </Layout>
    );
}