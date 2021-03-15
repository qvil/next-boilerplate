import Link from "next/link";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

interface I18nPageProps {}

const I18nPage: NextPage<I18nPageProps> = () => {
  const { locale, locales, defaultLocale, pathname } = useRouter();
  const { t, i18n } = useTranslation("common");
  const lowercaseLocales = ["en-uk", "ko-kp"];

  const handleClickLocale = (locale) => () => i18n.changeLanguage(locale);

  const renderLocales = () =>
    locales?.map((locale, index) => (
      <li key={index}>
        <Link href={pathname} locale={locale}>
          <a onClick={handleClickLocale(locale)}>{locale}</a>
        </Link>
      </li>
    ));

  const renderLowercaseLocales = () =>
    lowercaseLocales?.map((locale, index) => (
      <li key={index}>
        <Link href={pathname} locale={locale}>
          <a onClick={handleClickLocale(locale)}>{locale}</a>
        </Link>
      </li>
    ));

  return (
    <div>
      <h2>i18nPage</h2>
      <p>
        Current Locale: <strong>{locale}</strong>
      </p>
      <p>
        Default Locale: <strong>{defaultLocale}</strong>
      </p>
      <h3>Supported Locales</h3>
      <ul>{renderLocales()}</ul>
      <div>{t("hello")}</div>
      <h2>Lowercase i18n</h2>
      <ul>{renderLowercaseLocales()}</ul>
      <div>{t("hello")}</div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default I18nPage;
