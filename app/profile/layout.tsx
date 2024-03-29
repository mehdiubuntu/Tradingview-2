import Navbar from "../home/navbar";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Theme>
        <Navbar></Navbar>
        {children}
      </Theme>
    </>
  );
}
