import Layout from "../components/layout";
import Head from "next/head";

export default function Partners() {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Partners</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">
                        Partners
                    </h1>

                    <div className="grid">
                        <a href="https://beautymnl.com/brands/btngn" target="_blank" className="card">
                            <h3>BeautyMNL</h3>
                            <div className="imgPartner"><img src="/partnerBeauty.png"/></div>
                            <p>
                                BeautyMNL is the no. 1 beauty and wellness destination for every Filipina and their brand believes that health is everyone’s number one investment. With a wide selection of different local and important brands, they offer the best beauty and health products in the market today.
                            </p>
                        </a>

                        {/* <a href="https://www.thenaturalemarket.com/" target="_blank" className="card">
                            <h3>The Naturale Market</h3>
                            <div className="imgPartner"><img src="/partnerNaturale.png" /></div>
                            <p>
                                The Naturale Market is your gateway into the practice of local and sustainable living. It is your home for zero-waste goods from a wide variety of goods from all over the country. 
                            </p>
                        </a>

                        <a href="https://www.facebook.com/barberoatbarako/" target="_blank" className="card">
                            <h3>Barbero at Barako</h3>
                            <div className="imgPartner"><img src="partnerBarbero.png" /></div>
                            <p>
                                Barbero at Barako offers quality barber services at a very reasonable price. They make sure that each of their customers experience a comfortable and relaxing environment with a cup of freshly brewed barako at hand. Their branch is located at V Walk Commercial Center, Romana Pangan Hi-Way Floridablanca, Pampanga. 
                            </p>
                        </a> */}
                        
                    </div>

                </main>

                <style jsx> {`
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
                    a {
                        color: inherit;
                        text-decoration: none;
                    }
                    p {
                        text-align: justify;
                    }
                    .imgPartner {
                        text-align: center;
                    }
                    .card:hover,
                    .card:focus,
                    .card:active {
                        color: #CFB53B;
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