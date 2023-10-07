"use client";

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLogingedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    if (!userLogingedIn) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router, userLogingedIn]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Layout hasSider>
      <Sidebar />

      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
