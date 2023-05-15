import Authentication from "layout/Authen"
import logoImg from "../../assets/images/logo.png"
import styles from "./header.module.scss"
import SearchIcon from "@mui/icons-material/Search"
import { MENU_DATA, CATE_DATA } from "../helper"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Autocomplete,
  Badge,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import { Fragment, useCallback, useEffect, useRef, useState } from "react"
import { localStorageHelper } from "helpers"
import { LOCAL_STORE } from "constants/system"
import { useDispatch } from "react-redux"
import { ProductActions } from "ReduxSaga/Product/ProductRedux"
import { debounce } from "lodash"

function Header() {
  const [badgeContent, setBadgeContent] = useState(0)
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [debouncedFetchSuggestions, setDebouncedFetchSuggestions] =
    useState(null)
  const loading = open && suggestions.length === 0
  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    const data = JSON.parse(localStorageHelper.getItem(LOCAL_STORE.CART))
    if (data?.length > 0) {
      setBadgeContent(data?.length)
    }
  }, [location])

  useEffect(() => {
    if (!open) {
      setSuggestions([])
    }
  }, [open])

  const fetchSuggestions = useCallback(async (searchTerm) => {
    if (searchTerm) {
      dispatch(
        ProductActions.getSuggestSearchRequest({
          data: {
            textSearch: searchTerm,
          },
          callback: (res) => {
            if (res) {
              setSuggestions(res)
            } else {
              setSuggestions([])
            }
          },
        })
      )
    } else {
      setSuggestions([])
    }
  }, [])

  useEffect(() => {
    const debounced = debounce(fetchSuggestions, 500)
    setDebouncedFetchSuggestions(() => debounced)
    return () => {
      debounced.cancel()
    }
  }, [fetchSuggestions])

  const renderCate = (item, index) => {
    const data = { id: item?.id, name: "example" }
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

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${handleSearchText(searchTerm)}`, {
        state: { searchText: searchTerm },
      })
      setOpen(false)
    }
  }

  const handleSearchText = (searchText) => {
    return searchText?.toLowerCase()?.split(" ")?.join("-")
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
                padding: 0,
              }}
            >
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                open={open}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch()
                  }
                }}
                onOpen={() => {
                  setOpen(true)
                }}
                onClose={() => {
                  setOpen(false)
                }}
                onInputChange={(event, value) => {
                  setSearchTerm(value)
                  debouncedFetchSuggestions(value)
                }}
                options={suggestions.map((option) => option?.productName)}
                renderOption={(props, option) => {
                  console.log(props, option)
                  return (
                    <li
                      {...props}
                      onClick={() => {
                        navigate(`/search/${handleSearchText(option)}`, {
                          state: { searchText: option },
                        })
                        setOpen(false)
                      }}
                    >
                      <Typography>{option}</Typography>
                    </li>
                  )
                }}
                loading={loading}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    // variant="standard"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      disableUnderline: true,
                      endAdornment: (
                        <Fragment>
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </Fragment>
                      ),
                    }}
                    sx={{ borderRadius: 0 }}
                  />
                )}
              />
              <IconButton type="button" sx={{ p: "15px" }} aria-label="search" onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
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
