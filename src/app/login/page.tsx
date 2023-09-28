"use client";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import loginImage from "@/assets/login.svg";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };
  return (
    <div>
      <Row
        justify={"center"}
        align={"middle"}
        style={{
          minHeight: "100vh",
        }}
      >
        <Col xs={12} sm={12} md={16} lg={10}>
          <Image src={loginImage} width={500} alt="login image" />
        </Col>
        <Col xs={12} sm={12} md={8} lg={8}>
          <h2
            style={{
              margin: "15px 0px",
            }}
          >
            Login First In Your Account
          </h2>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
