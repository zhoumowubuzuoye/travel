/*
 * @Author: xiewenhao
 * @Date: 2023-06-09 09:46:37
 * @LastEditTime: 2023-06-13 13:43:59
 * @Description: 
 */
import React from "react";
import { Layout, Typography } from "antd";
import {t} from 'i18next'
export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        {t('footer.detail')}
      </Typography.Title>
    </Layout.Footer>
  );
};
