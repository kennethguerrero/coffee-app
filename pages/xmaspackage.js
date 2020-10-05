import Layout from "../components/layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import XmasPost from "./xmaspost";

export default function XmasPackage ({ products }) {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Christmas Package</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">Christmas Package</h1>

                    <div className="grid">
                        {products.map((product) => (
                            <XmasPost {...product} key={product.id} />
                        ))}
                    </div>

                </main>

                <style jsx> {`
                    img {
                        width: 70%; 
                        max-width: 360px;
                        opacity: 1;
                        backface-visibility: hidden;
                    }
                    img:hover {
                        opacity: 0.3;
                        transition: 1 ease;
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

export async function getStaticProps() {
    const res = await fetch("http://www.json-generator.com/api/json/get/cgoBhpfUya?indent=2");
    const products = await res.json();

    return {
        props: {
            products,
        },
    }
}