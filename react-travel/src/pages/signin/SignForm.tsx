/*
 * @Author: xiewenhao
 * @Date: 2023-06-21 17:28:13
 * @LastEditTime: 2023-06-27 08:31:50
 * @Description:111222
 */
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { SignIn } from "../../redux/user/slice";

export const SignForm: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { loading, token, error } = useSelector((state) => state.user);
  const onFinish = async (values: any) => {
    try {
      dispatch(SignIn(values));
    } catch {
      message.error("登陆失败");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }
  };
  const onFinishFailed = (errorInfo: any) => {};
  useEffect(() => {
    token ? navigate("/") : navigate("/signin");
  }, [token]);
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ width: "50%", margin: "0 auto" }}
      form={form}
    >
      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
        labelCol={{ span: 2 }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        labelCol={{ span: 2 }}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
