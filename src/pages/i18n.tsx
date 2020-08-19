import { NextPage } from "next";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "src/lib/i18n";

interface I18nPageProps extends WithTranslation {}

const I18nPage: NextPage<I18nPageProps> = ({ t }) => {
  return (
    <div>
      <h2>i18nPage</h2>
      <div>{t("hello")}</div>
    </div>
  );
};

export default withTranslation()(I18nPage);
