import logoImg from '../../assets/images/logo.png'
import './styles.scss'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="container-fluid header position-static px-0">
      <div className={`container-fluid top-bar py-2`}>
        <div className="container d-flex align-items-center">
            <a href="/">
                <img className='logo' src={logoImg} alt="" />
            </a>
            <div className='search-box'>
              <input type='text' />
              <button type="submit" aria-label="Tìm kiếm" className="search-button" title="Tìm kiếm">
                <SearchIcon />
              </button>
            </div>

        </div>
      </div>
      <div className="container-fluid top-menu"></div>
    </div>
  );
}

export default Header;
