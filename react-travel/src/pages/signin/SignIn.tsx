/*
 * @Author: xiewenhao
 * @Date: 2023-06-15 16:54:41
 * @LastEditTime: 2023-06-21 14:15:04
 * @Description: 
 */
import React from "react";
import { UserLayout } from "../../layout/userLayout";
import {SignForm} from './SignForm'

export const SignIn: React.FC = () => {
  return <>
    <UserLayout>
    <SignForm></SignForm>
    </UserLayout>
  </>;
};
