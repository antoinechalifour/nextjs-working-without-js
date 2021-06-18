import Cookies from "cookies";

export const protect = (getServerSideProps) => (context) => {
  const { req, res } = context;

  const cookies = new Cookies(req, res);

  if (!cookies.get("auth"))
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return getServerSideProps(context);
};
