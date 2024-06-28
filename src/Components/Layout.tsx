import { Outlet } from "react-router-dom";
import "../styles/components/layout.scss";
import { TopNav } from "./TopNav";
import { Footer } from "./Footer";
import { Widjet } from "./Widjet";

export const Layout = () => {
  return (
    <main className='layout'>
      <header>
        <TopNav />
      </header>
      <section className='layout__content'>
        <Outlet />
      </section>
      <Footer />
      <Widjet />
    </main>
  );
};
