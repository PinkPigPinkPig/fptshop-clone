import logoImg from "../../assets/images/logo.png"
import styles from "./header.module.scss"
import SearchIcon from "@mui/icons-material/Search"
import { MENU_DATA, CATE_DATA } from "../helper"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, IconButton } from "@mui/material"

function Header() {
  const renderMenu = (item, index) => {
    return (
      <Link
        to={item.route}
        key={index}
        className='d-flex flex-column align-items-center text-decoration-none text-white px-2'
      >
        <FontAwesomeIcon className="fs-4" icon={item.icon} />
        <span className='mt-1'>{item.title}</span>
      </Link>
    )
  }

  const renderCate = (item, index) => {
    return (
      <Link
        to={item.route}
        key={index}
        className='text-decoration-none text-white'
      >
        <FontAwesomeIcon icon={item.icon} />
        <span className='ms-1'>{item.title}</span>
      </Link>
    )
  }

  return (
    <div className='container-fluid header position-static px-0'>
      <div className={`container-fluid ${styles.topBar} py-2`}>
        <div className='container d-flex align-items-center justify-content-between'>
          <a href='/'>
            <img className={`${styles.logo}`} src={logoImg} alt='' />
          </a>
          <div className='search-box'>
            <input
              type='text'
              placeholder='Nhập tên điện thoại, máy tính, phụ kiện... cần tìm'
            />
            <Button variant='contained' color='primary'>
              <SearchIcon />
            </Button>
          </div>
          <div className='d-flex justify-content-between'>{MENU_DATA.map(renderMenu)}</div>
        </div>
      </div>
      <div className={`container-fluid ${styles.topMenu}`}>
        <div className='container d-flex justify-content-xl-between flex-wrap px-0 py-2'>
          {CATE_DATA.map(renderCate)}
        </div>
      </div>
    </div>
  )
}

export default Header
