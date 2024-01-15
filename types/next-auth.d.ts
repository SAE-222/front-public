// noinspection ES6UnusedImports

import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    data: {
      id: string;
      lastName?: string;
      firstName?: string;
      email: string;
      phone?: string;
      age?: number;
      password: string;
    };
  }
}

declare module "next-auth" {
  interface User {
    accessToken: string;
    data: {
      id: string;
      lastName?: string;
      firstName?: string;
      email: string;
      phone?: string;
      age?: number;
      password: string;
    };
  }
  interface Session {
    accessToken: string;
    user: {
      id: string;
      email: string;
      password: string;
      firstName?: string;
      lastName?: string;
      age?: number;
      phone?: string;
    };
  }
}
