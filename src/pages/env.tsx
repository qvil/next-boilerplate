import { NextPage } from "next";

interface EnvPageProps {}

const EnvPage: NextPage<EnvPageProps> = () => {
  return (
    <div>
      <h2>.env</h2>
      <div>NODE_ENV: {process.env.NODE_ENV}</div>
      <div>NEXT_PUBLIC_NAME: {process.env.NEXT_PUBLIC_NAME}</div>
      <div>NEXT_PUBLIC_API_URL: {process.env.NEXT_PUBLIC_API_URL}</div>
    </div>
  );
};

export default EnvPage;
