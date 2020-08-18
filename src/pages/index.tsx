import {
  NextPage,
  // GetStaticProps,
  // GetStaticPaths,
  // GetServerSideProps,
} from "next";
import Button from "src/components/Button";

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <div>
      <h1>IndexPage</h1>
      <Button>Custom Button</Button>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {};

// export const getStaticPaths: GetStaticPaths = async () => {};

// export const getServerSideProps: GetServerSideProps = async (context) => {};

export default IndexPage;
