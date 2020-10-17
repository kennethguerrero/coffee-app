import Link from "next/link";
import Head from "next/head";

const linkStyle = {
    marginLeft: 10,
    marginRight: 5,
};

const Header = () => (
    <div id="divHeader">
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 1 }}>
            <div className="divLogo">
                <Link href="/">
                    <a><img src="/logoMedium.png" alt="logo" id="imgLogo" /></a>
                </Link>
            </div>
            <div className="divLinks" style={{ textAlign: "right", fontWeight: "bold"}}>
                <Link href="/">
                    <a style={linkStyle}>HOME</a>
                </Link>
                <Link href="/products">
                    <a style={linkStyle}>SHOP</a>
                </Link>
                <Link href="/about">
                    <a style={linkStyle}>ABOUT</a>
                </Link>
                <Link href="/cart">
                    <a style={{ display: "none"}}>
                        <i className="fa fa-shopping-cart" style={{ color: "gold" }}></i>
                    </a>
                </Link>
            </div>
        </div>
        <style jsx> {`
            #divHeader {
                background-color: #000;
                height: 85px;
            }
            .divLogo {
                padding-left: 10px;
            }
            .divLinks {
                margin-top: 2rem;
                margin-right: 1.5rem;
            }
            a {
                color: #FFF;
                text-decoration: none;
            }
            a:hover {
                color: #CFB53B;
                transition: .10s ease;
            }
            @media (max-width: 520px) {
                .divLinks {
                    display: inline-flex;
                }
            }
            @media (max-width: 600px) {
                #imgLogo {
                    width: 6rem;
                    margin-top: 25px;
                }
            }
        `}
        </style>

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
);

export default Header;