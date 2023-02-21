import logoImg from '../../assets/images/logo.png'
import styles from './Header.module.scss'

function Header() {
  return (
    <div className="container-fluid header position-static">
      <div className={`container-fluid ${styles.subHeader}`}>
        <div className="container">
            {/* <a href="/">
                <img className='img-thumbnail' src={logoImg} alt="" />
            </a> */}
        </div>
      </div>
      <div className="container-fluid"></div>
    </div>
  );
}

export default Header;
