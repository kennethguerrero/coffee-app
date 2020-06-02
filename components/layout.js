import Header from "./header";
import Footer from "./footer";

const layoutStyle = {
    margin: 0,
    padding: 0,
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Layout;