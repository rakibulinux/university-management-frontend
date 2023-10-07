import Login from "@/components/ui/Login";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Univarsity Management - Login",
  description: "Univarsity Management System",
};
const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
