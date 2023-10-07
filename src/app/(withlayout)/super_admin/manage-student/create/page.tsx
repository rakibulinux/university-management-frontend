"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import StudentBasicInfo from "@/components/StudentForm/StudentBasicInfo";
import GuardianInfo from "@/components/StudentForm/GuardianInfo";
import StudentInfo from "@/components/StudentForm/StudentInfo";
import LocalGuardianInfo from "@/components/StudentForm/LocalGuardianInfo";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Info",
      content: <StudentInfo />,
    },
    {
      title: "Student Basic",
      content: <StudentBasicInfo />,
    },
    {
      title: "Student Guardian Info",
      content: <GuardianInfo />,
    },
    {
      title: "Student Local Guardian Info",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        margin: "10px 0px",
      }}
    >
      <h1>This is Student Create page</h1>
      <StepperForm
        steps={steps}
        submitHandler={(value) => handleStudentSubmit(value)}
      />
    </div>
  );
};

export default CreateStudentPage;
