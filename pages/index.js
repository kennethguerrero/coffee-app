import Head from "next/head";
import Layout from '../components/layout'

export default function Home() {
  return (
      <Layout>
        <div className="container">
            <Head>
                <title>BTNGÑ</title>
                <link rel="icon" href="/coffeeicon.png" />
            </Head>

            <main>
                <h1 className="title">
                    Love at first <span id="textSIP">sip</span>
                </h1>

                <div className="grid">

                    <a href="https://beautymnl.com/brands/btngn" target="_blank" className="card">
                        <img src="/newsPreview.PNG" />
                        <h3>We made it to PREVIEW's List! &rarr;</h3>
                        <p>We are number seven on the list of instagram shops where you can buy premium quality drip coffee.</p>
                    </a>

                    <a href="/news1" className="card">
                        <img src="/newsDripHow.PNG" />
                        <h3>Barako Drip &rarr;</h3>
                        <p>Here's how to take our Barako Drip.</p>
                    </a>

                    <a href="https://beautymnl.com/brands/btngn" target="_blank" className="card">
                        <img src="/newsBeauty.jpg" />
                        <h3>We Are In BeautyMNL! &rarr;</h3>
                        <p>Check us out on BeautyMNL’s Wellness Section under Drinks</p>
                    </a>

                    <a href="https://www.thenaturalemarket.com/collections/scoop-and-weigh" className="card" target="_blank">
                        <img src="/newsNaturale.jpg" />
                        <h3>Naturale Market &rarr;</h3>
                        <p>Yes to Local and Sustainable Living!</p>
                    </a>

                    <a href="news2" className="card">
                        <img src="/newsDripSolo.PNG" />
                        <h3>On the go? &rarr;</h3>
                        <p>Check out and try our Barako Drip Solo.</p>
                    </a>

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

                a {
                color: inherit;
                text-decoration: none;
                }

                .title #textSIP {
                color: #CFB53B;
                text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                text-decoration: underline;
                }

                .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
                }

                .title,
                .description {
                text-align: center;
                }

                .description {
                line-height: 1.5;
                font-size: 1.5rem;
                }

                code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                }

                .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                max-width: 800px;
                margin-top: 3rem;
                }

                .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
                }

                .card:hover,
                .card:focus,
                .card:active {
                color: #CFB53B;
                border-color: #CFB53B;
                }

                .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
                }

                .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
                }

                .logo {
                height: 1em;
                }

                img {
                    width: 100%;
                }

                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                    .title {
                        font-size: 3rem;
                    }
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>
        </div>
    </Layout>
  )
}
