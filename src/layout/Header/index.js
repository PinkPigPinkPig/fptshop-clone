import Authentication from 'layout/Authen';
import logoImg from '../../assets/images/logo.png'
import styles from './header.module.scss'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="container-fluid header position-static px-0">
      <div className={`d-flex container-fluid ${styles.topBar} py-2 justify-content-between align-items-center`}>
        <div className="container d-flex align-items-center">
          <a href="/">
            <img className={`${styles.logo}`} src={logoImg} alt="" />
          </a>
          <div className='search-box'>
            <input type='text' />
            <button type="submit" aria-label="Tìm kiếm" className="search-button" title="Tìm kiếm">
              <SearchIcon />
            </button>
          </div>

        </div>
        <Authentication />
      </div>
      <div className={`container-fluid ${styles.topMenu}`}></div>
    </div>
  );
}

export default Header;
