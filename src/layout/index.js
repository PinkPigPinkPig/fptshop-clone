import Header from "./Header";
import './styles.scss'

function Layout({ children }) {
    return (
        <div >
            <Header />
            <div className="container-fluid main">
                <div className="container-sm">
                    <div>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout;