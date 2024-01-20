
import "@radix-ui/themes/styles.css";
import Navbar from "./navbar";
import { Theme } from "@radix-ui/themes";
import Footer from "../components/footer";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Theme>
        <Navbar></Navbar>
        {children}
        <Footer background={"bg-black"}></Footer>
      </Theme>
    </>
  );
}
