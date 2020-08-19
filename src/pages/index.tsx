import {
  NextPage,
  // GetStaticProps,
  // GetStaticPaths,
  GetServerSideProps,
} from "next";
import { WithTranslation } from "next-i18next";

import Button from "src/components/Button";
import { withTranslation } from "src/lib/i18n";
import { wrapper } from "src/redux/store";
import { setSetting } from "src/redux/slices/settingSlice";

interface IndexPageProps extends WithTranslation {}

const IndexPage: NextPage<IndexPageProps> = ({ t }) => {
  return (
    <div>
      <h1>IndexPage</h1>
      <Button>Custom Button</Button>
      <h2>i18n</h2>
      <div>{t("hello")}</div>
      <h2>.env</h2>
      <div>NODE_ENV: {process.env.NODE_ENV}</div>
      <div>NEXT_PUBLIC_API_URL: {process.env.NEXT_PUBLIC_API_URL}</div>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {};

// export const getStaticPaths: GetStaticPaths = async () => {};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res, ...etc }) => {
    const dispatch = store.dispatch;
    dispatch(setSetting({ key: "language", value: "ko_KR" }));

    return { props: {} };
  }
);

export default withTranslation()(IndexPage);
