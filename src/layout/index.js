import Header from "./Header";
import styles from './layout.module.scss'
function Layout({ background, children }) {
    console.log('background', background)
    return (
        <div >
            <Header />
            <div className={`container-fluid ${background ? styles.main : ''}`}>
                <div className="container">
                    <div>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout;