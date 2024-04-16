export { auth as middleware } from "@/auth";

export const config = {
  //   matcher: ["/test"],
  matcher: [
    "/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$|.*\\.jpg$).*)",
  ],
};
