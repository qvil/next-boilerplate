import { NextPage } from "next";

interface StyledComponentsPageProps {}

const StyledComponentsPage: NextPage<StyledComponentsPageProps> = () => {
  return (
    <div>
      <h2>StyledComponentsPage</h2>
      <div
        css={`
          background: papayawhip;
        `}
      >
        CSS Prop
      </div>
    </div>
  );
};

export default StyledComponentsPage;
