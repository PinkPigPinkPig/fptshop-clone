import logoImg from '../../assets/images/logo.png'
import styles from './Header.module.scss'

function Header() {
  return (
    <div className="container-fluid header position-static px-0">
      <div className={`container-fluid ${styles.subHeader}`}>
        <div className="container">
            <p>Đây là header</p>
            {/* <a href="/">
                <img className='img-fluid' src={logoImg} alt="" />
            </a> */}
        </div>
      </div>
      <div className="container-fluid"></div>
    </div>
  );
}

export default Header;
