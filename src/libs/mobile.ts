import isMobile, { isMobileResult } from "ismobilejs";
import { NextPageContext, GetServerSidePropsContext } from "next";

export const checkMobile = (
  ctx?: NextPageContext | GetServerSidePropsContext
): isMobileResult["any"] => {
  const userAgent = ctx?.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent;

  return isMobile(userAgent).any;
};
