import Authentication from "layout/Authen"
import logoImg from "../../assets/images/logo.png"
import styles from "./header.module.scss"
import SearchIcon from "@mui/icons-material/Search"
import { MENU_DATA, CATE_DATA } from "../helper"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Badge,
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material"
import { useEffect, useState } from "react"
import { localStorageHelper } from "helpers"
import { LOCAL_STORE } from "constants/system"

function Header() {
  const [badgeContent, setBadgeContent] = useState(0)
  const location = useLocation()
  useEffect(() => {
    const data = JSON.parse(localStorageHelper.getItem(LOCAL_STORE.CART))
    if (data?.length > 0) {
      setBadgeContent(data?.length)
    }
  }, [location])

  const renderCate = (item, index) => {
    const data = { id: 123, name: "example" }
    return (
      <Link
        to={`/product/${item.cate}`}
        state={data}
        key={index}
        className="text-decoration-none text-white"
      >
        <FontAwesomeIcon icon={item.icon} />
        <span className="ms-1">{item.title}</span>
      </Link>
    )
  }

  return (
    <div className="container-fluid header position-static px-0">
      <div className={`container-fluid ${styles.topBar} pt-3 pb-2`}>
        <div className="container d-flex align-items-center justify-content-between">
          <a href="/">
            <img className={`${styles.logo}`} src={logoImg} alt="" />
          </a>
          <div className="search-box w-50">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
          </div>
          <div className="d-flex justify-content-between">
            <Authentication
              children={
                <Link
                  to="#"
                  className="d-flex flex-column align-items-center text-decoration-none text-white px-2 pointer-event"
                >
                  <FontAwesomeIcon className="fs-4" icon="circle-user" />

                  <span className="mt-1">Tài khoản của tôi</span>
                </Link>
              }
            />
            <Link
              to="/cart"
              className="d-flex flex-column align-items-center text-decoration-none text-white px-2"
            >
              <Badge badgeContent={badgeContent} color="primary">
                <FontAwesomeIcon className="fs-4" icon="cart-shopping" />
              </Badge>
              <span className="mt-1">Giỏ hàng</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${styles.topMenu}`}>
        <div className="container d-flex justify-content-center flex-wrap px-0 py-2">
          <Stack direction="row" spacing={5}>
            {CATE_DATA.map(renderCate)}
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Header
