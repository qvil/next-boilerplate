import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

import { Row } from "src/styles/layout";
import { useRouter } from "next/router";

interface LayoutProps {}

const Header: FC<LayoutProps> = () => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";

  return (
    <HeaderContainer>
      {!isHome && (
        <Link href="/">
          <a>
            <div>{`< Back`}</div>
          </a>
        </Link>
      )}
      <h1>Next.js Boilerplate</h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled(Row)`
  justify-content: center;
  div {
    position: absolute;
  }
  > h1 {
    margin: 0 auto;
  }
`;
