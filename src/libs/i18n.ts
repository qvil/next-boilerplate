import NextI18Next from "next-i18next";
import path from "path";

import { LanguageType } from "src/types";

// const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;

// next-i18next
// export const namespacesRequired = ["common", "settings", "validation"];
export const namespacesRequired = ["common"];

export const defaultLanguage: LanguageType = "ko-KR";
export const otherLanguages: LanguageType[] = ["en-US"];
const NextI18NextInstance = new NextI18Next({
  defaultLanguage,
  otherLanguages,
  // localeSubpaths,
  localePath: path.resolve("./public/static/locales"),
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
  i18n,
  useTranslation,
} = NextI18NextInstance;
export const withCommonNamespace = (ns: string[]) => ["common", ...ns];
export const allNamespaces = () => namespacesRequired;
