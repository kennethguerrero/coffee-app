import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

const layoutStyle = {
    margin: 0,
    padding: 0,
};

const Layout = props => (
    <div style={layoutStyle}>

        <Head>
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=[GA-TRACKING-ID]"
            />
            <script
                dangerouslySetInnerHTML={{
                __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '[GA-TRACKING-ID]');
                    `,
                }}
            />
        </Head>

        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Layout;