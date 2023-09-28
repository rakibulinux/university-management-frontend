import { Content } from "antd/es/layout/layout";
import UMBreadcrumb from "./UMBreadcrumb";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content style={{ minHeight: "100vh", color: "black" }}>
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
