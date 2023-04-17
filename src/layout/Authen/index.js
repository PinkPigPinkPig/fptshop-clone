import { Button } from "@mui/material";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SignIn from "./SignIn";
import styles from "./layout.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import SignUp from "./SignUp";

function Authentication({ children }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [toggleView, setToggleView] = useState(true);
  const isLogin = false;

  return (
    <div className="px-2">
      <Popup
        open={modalVisible}
        modal
        onOpen={() => setModalVisible(true)}
        trigger={children}
      >
        {
          <div className={styles.container}>
            <div
              className="bg-white px-5 pt-5 pb-4 position-relative rounded-3"
              style={{ width: 400 }}
            >
              <CloseIcon
                className="position-absolute top-0 end-0 m-3"
                onClick={() => {
                  setToggleView(true);
                  setModalVisible(false);
                }}
              />
              {!isLogin ? (
                <>
                  {toggleView ? <SignIn /> : <SignUp />}
                  <div className="d-flex justify-content-between">
                    <p>{"Quên mật khẩu"}</p>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setToggleView(!toggleView)}
                    >
                      {toggleView ? "Đăng ký" : "Đăng nhập"}
                    </p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        }
      </Popup>
    </div>
  );
}

export default Authentication;
