/*
 * @Author: xiewenhao
 * @Date: 2023-06-09 09:46:37
 * @LastEditTime: 2023-06-21 11:04:56
 * @Description:
 */
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { LanguageState } from "../../redux/language/languageReducer";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import {
  changeLanguageActionCreator,
  addLanguageActionCreator,
} from "../../redux/language/languageActions";
import { useTranslation } from "react-i18next";
import { productSearchSlice } from "../../redux/productSearch/slice";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const language = useSelector((state) => state.language.language);
  const languageList = useSelector((state) => state.language.languageList);
  const searchValue = useSelector((state) => state.productSearch.searchValue);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const menuClickHandler = (e) => {
    const action = changeLanguageActionCreator(e.key);
    dispatch(action);
  };
  const appdispatch = useAppDispatch();
  return (
    <>
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
          <Dropdown.Button
            overlay={
              <Menu
                onClick={menuClickHandler}
                items={languageList.map((item) => ({
                  label: item.name,
                  key: item.code,
                }))}
              />
            }
            icon={<GlobalOutlined />}
          >
            {language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => navigate("/register")}>
              {t("header.register")}
            </Button>
            <Button onClick={() => navigate("/signIn")}>
              {t("header.signin")}
            </Button>
          </Button.Group>
        </div>
      </div>
      <div className={styles["app-header"]}>
        <Layout.Header className={styles["main-header"]}>
          <span onClick={() => navigate("/")}>
            <img src={logo} alt="" className={styles["App-logo"]} />
            <Typography.Title level={3} className={styles.title}>
              {t("header.title")}
            </Typography.Title>
          </span>

          <Input.Search
            placeholder="haha"
            className={styles["search-input"]}
            value={searchValue}
            onSearch={(value) => navigate(`/search?keywords=${value}`)}
            onChange={(e) =>
              appdispatch(
                productSearchSlice.actions.fetchSearchValue(e.target.value)
              )
            }
          ></Input.Search>
        </Layout.Header>
        <Menu
          className={styles["main-menu"]}
          mode={"horizontal"}
          items={[
            { key: "1", label: t("header.home_page") },
            { key: "2", label: t("header.weekend") },
            { key: "3", label: t("header.group") },
            { key: "4", label: t("header.backpack") },
            { key: "5", label: t("header.private") },
            { key: "6", label: t("header.cruise") },
            { key: "7", label: t("header.hotel") },
            { key: "8", label: t("header.local") },
            { key: "9", label: t("header.theme") },
            { key: "10", label: t("header.custom") },
            { key: "11", label: t("header.study") },
            { key: "12", label: t("header.visa") },
            { key: "13", label: t("header.enterprise") },
            { key: "14", label: t("header.high_end") },
            { key: "15", label: t("header.outdoor") },
            { key: "16", label: t("header.insurance") },
          ]}
        ></Menu>
      </div>
    </>
  );
};
