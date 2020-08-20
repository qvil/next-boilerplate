import {
  NextPage,
  // GetStaticProps,
  // GetStaticPaths,
  GetServerSideProps,
} from "next";

import { wrapper } from "src/redux/store";
import { setSetting } from "src/redux/slices/settingSlice";
import Link from "next/link";

const features = ["i18n", "env", "styled-components", "data-fetching"];

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <div>
      <h2>Features</h2>
      <ol>
        {features.map((feature, index) => (
          <Link key={index} href={feature}>
            <a>
              <li>{feature}</li>
            </a>
          </Link>
        ))}
      </ol>
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

export default IndexPage;
