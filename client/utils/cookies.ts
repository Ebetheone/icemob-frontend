import { config } from "./constants";
import { setCookie, destroyCookie } from "nookies";

export const setCookieToken = (token: any) => {
  setCookie(null, config.ACCESS_TOKEN_KEY, token?.accessToken || "", {
    path: "/",
    maxAge: 60 * 60 * 60,
    httpOnly: false,
    secure: false,
  });
  setCookie(null, config.REFRESH_TOKEN_KEY, token?.refreshToken || "", {
    path: "/",
    maxAge: 60 * 60 * 60,
    httpOnly: false,
    secure: false,
  });
};

export const destroyCookieToken = (res: any | undefined) => {
  destroyCookie(res ? { res } : null, config.ACCESS_TOKEN_KEY, {
    path: "/",
  });
  destroyCookie(res ? { res } : null, config.REFRESH_TOKEN_KEY, {
    path: "/",
  });
};
