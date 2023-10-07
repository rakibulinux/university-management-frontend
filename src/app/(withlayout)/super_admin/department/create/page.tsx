"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { departmentSchema } from "@/schema/department";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

const CreateDepartmentPage = () => {
  const [addDepartment] = useAddDepartmentMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating......");
    try {
      addDepartment(data);
      message.success("Management Department Added Successfully");
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
    <div
      style={{
        margin: "10px 0px",
      }}
    >
      <Form submitHandler={onSubmit} resolver={yupResolver(departmentSchema)}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Department Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput type="text" name="title" size="large" label="Title" />
            </Col>
          </Row>
        </div>
        <Button htmlType="submit" type="primary">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartmentPage;
