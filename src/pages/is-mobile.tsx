import { NextPage, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { isMobileResult } from "ismobilejs/types";

import { checkMobile } from "src/lib/mobile";

interface IsMobilePageProps {
  isMobile?: isMobileResult["any"];
}

const IsMobilePage: NextPage<IsMobilePageProps> = ({ isMobile }) => {
  const [clientIsMobile, setClientIsMobile] = useState<isMobileResult["any"]>();

  useEffect(() => {
    setClientIsMobile(checkMobile());
  }, []);

  return (
    <div>
      <h2>IsMobilePage</h2>
      <div>isMobile from server: {`${isMobile}`}</div>
      <div>isMobile from client: {`${clientIsMobile}`}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isMobile = checkMobile(context);
  return {
    props: { isMobile },
  };
};

export default IsMobilePage;
