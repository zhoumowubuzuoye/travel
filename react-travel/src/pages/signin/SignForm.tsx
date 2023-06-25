/*
 * @Author: xiewenhao
 * @Date: 2023-06-21 17:28:13
 * @LastEditTime: 2023-06-25 11:05:04
 * @Description: 
 */
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

export const SignForm: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    try {
    } catch {
      message.error("新建失败133333");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ width: "50%", margin: "0 auto" }}
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
        labelCol={{ span: 2  }}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
