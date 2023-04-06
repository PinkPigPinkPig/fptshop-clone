import { Footer } from "./Footer";
import Header from "./Header";
import styles from './layout.module.scss'
function Layout({ background, children }) {
    console.log('background', background)
    return (
        <div >
            <Header />
            <div className={`container-fluid ${styles.main}`}>
                <div className="container my-5 px-0">
                    <div>{children}</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;