import { Preloader } from "@src/components/progress/Preloader";
import { AppPage } from "@src/types";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage: AppPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return <Preloader />;
};

NotFoundPage.applyLayout = (a) => a;

export default NotFoundPage;
