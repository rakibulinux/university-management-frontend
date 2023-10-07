import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { UserInfoType } from "@/types";
const { Header: AntHeader } = Layout;
const Header = () => {
  const router = useRouter();
  const { role } = getUserInfo() as UserInfoType;
  const loginOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={() => loginOut()} type="text" danger>
          LogOut
        </Button>
      ),
    },
  ];
  return (
    <div>
      <AntHeader
        style={{
          background: "#fff",
        }}
      >
        <Row
          justify="end"
          align="middle"
          style={{
            height: "100%",
          }}
        >
          <Dropdown menu={{ items }}>
            <Space wrap size={16}>
              {role}
              <Avatar icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        </Row>
      </AntHeader>
    </div>
  );
};

export default Header;
