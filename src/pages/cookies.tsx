import { NextPage, GetServerSideProps } from "next";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useState } from "react";

interface CookiesPageProps {
  cookies: any;
}

const CookiesPage: NextPage<CookiesPageProps> = ({ cookies }) => {
  const [clientCookie, setClientCookie] = useState<string>("");

  const handleClick = () => {
    setCookie(null, "fromClient", "I'm from Client", {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    const { fromClient } = parseCookies();
    setClientCookie(fromClient);
  };

  const handleDestory = () => {
    destroyCookie(null, "fromClient");
    setClientCookie("");
  };

  return (
    <div>
      <h2>CookiesPage</h2>
      <div>Cookie from server: {`${cookies.fromGetServerSideProps}`}</div>
      <div>
        Cookie from client: {`${clientCookie}`}
        <button onClick={handleClick}>Set Cookie</button>
        <button onClick={handleDestory}>Destroy Client Cookie</button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Parse
  const cookies = parseCookies(context);

  // Set
  setCookie(context, "fromGetServerSideProps", "I'm from GetServerSideProps", {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  // Destroy
  // destroyCookie(context, 'cookieName')

  return { props: { cookies } };
};

export default CookiesPage;
