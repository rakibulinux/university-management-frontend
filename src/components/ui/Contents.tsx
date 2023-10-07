import { Content } from "antd/es/layout/layout";
import UMBreadcrumb from "./UMBreadcrumb";
import Header from "./Header";
import { getUserInfo } from "@/services/auth.service";
import { UserInfoType } from "@/types";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const { role } = getUserInfo() as UserInfoType;
  const base = role;
  return (
    <Content
      style={{ padding: "0px 10px", minHeight: "100vh", color: "black" }}
    >
      <Header />
      <UMBreadcrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `student`,
            link: `/${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
