import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import SidebarMenu from "./components/Layout/SidebarMenu";
import ScrollWrapper from "./components/ScrollWrapper";


export default function Home() {
  return (
    <main className="bg-white text-black">
      <Header />
      <ScrollWrapper />
      <SidebarMenu />
      <Footer />
    </main>
  );
}
