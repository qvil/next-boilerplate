import Link from "next/link";
import { NextPage } from "next";
import { WithTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { i18n, withTranslation } from "src/libs/i18n";

interface I18nPageProps extends WithTranslation {}

const I18nPage: NextPage<I18nPageProps> = ({ t }) => {
  const { locale, locales, defaultLocale } = useRouter();

  const handleClickLocale = (locale) => () => i18n.changeLanguage(locale);

  const renderLocales = () =>
    locales?.map((locale, index) => (
      <li key={index}>
        <Link href="/i18n" locale={locale}>
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
    </div>
  );
};

export default withTranslation()(I18nPage);
