import { NextPageContext, GetServerSidePropsContext } from "next";
import isMobile, { isMobileResult } from "ismobilejs";

export const checkMobile = (
  ctx?: NextPageContext | GetServerSidePropsContext
): isMobileResult["any"] => {
  const userAgent = ctx?.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent;

  return isMobile(userAgent).any;
};
