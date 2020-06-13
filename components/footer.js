import Link from "next/link";

const Footer = () => (
    <div id="divFooter">
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 5 }}>
            <div className="divFooterSubHeader">BTNGÑ</div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 5 }}>
            <div className="divFooterContent">
                <div>
                    <Link href="/">
                        <a>What's new?</a>
                    </Link>
                </div>
                <div>
                    <Link href="/partners">
                        <a>Partners</a>
                    </Link>
                </div>
                <div>
                    <Link href="/faq">
                        <a>FAQ</a>
                    </Link>
                </div>
            </div>
            <div className="divFooterContent">
                <div>
                    Quick Links
                </div>
                <div>
                    <Link href="/beans">
                        <a>Beans</a>
                    </Link>
                </div>
                <div>
                    <Link href="/post/2">
                        <a>Ground</a>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <a>Drip</a>
                    </Link>
                </div>
                <div>
                    <Link href="/post/3">
                        <a>Tablea</a>
                    </Link>
                </div>
                <div>
                    <Link href="/post/4">
                        <a>Pepper</a>
                    </Link>
                </div>
            </div>
            <div className="divFooterContent">
                <div>Follow Us</div>
                <div>
                    <a href="https://www.facebook.com/btngn.ph" target="_blank">
                        <img src="/iconFB.png" />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/btngn.ph" target="_blank">
                        <img src="/iconIG.png" />
                    </a>
                </div>
            </div>
            <div className="divFooterContent">
                <div>Contact Us</div>
                <div>
                <a href="mailto:btngn.ph@gmail.com? Subject=Online%Feedback">
                        <img src="/iconMail.png" />
                    </a>
                </div>
            </div>
        </div>
        <br />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 4 }}>
            <div className="divFooterContent"></div>
            <div className="divFooterContent"></div>
            <div className="divFooterContent"></div>
            <div className="divFooterSmallContent">&copy; 2018 BTNGÑ</div>
        </div>

        <style jsx> {`
            #divFooter {
                background-color: #000;
                color: #FFF;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
                padding-top: 20px;
                padding-bottom: 20px;
            }
            .divFooterContent {
                text-align: center;
                font-size: 11px;
            }
            .divFooterSubHeader {
                text-align: center;
                margin-bottom: 10px;
                font-weight: bold;
            }
            .divFooterSmallContent {
                text-align: center;
                font-size: 9px;
            }
            a {
                color: #FFF;
                text-decoration: none;
                font-family: 'Calibri';
            }
            a:hover {
                color: #CFB53B;
                transition: .10s ease;
            }
        `}
        </style>
    </div>
)

export default Footer;