import Article from "../components/article";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Copyright from "../components/copyright";
import Header from "../components/header";
import Info from "../components/info";
import Ket_1 from "../components/ket_1";
import Ket_2 from "../components/ket_2";
import Side_bar from "../components/side_bar";

export default function Home({menu}) {
  return (
    <>
    <Header/>
    <Banner/>
    <Info/>
    <Article/>
    <Side_bar/>
    <Ket_1/>
    <Ket_2/>
    <Contact/>
    <Copyright/>
    </>

    )

  }

