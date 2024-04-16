import Footer from "../../components/home/Footer/Footer";
import ItemMenu from "../../components/home/ItemMenu/ItemMenu";
import Navbar from "../../components/home/Navbar/Navbar";
import Header from "../../components/home/header/Header";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Navbar />
      <div className="flex items-center justify-center gap-8">
        <h1 className="text-2xl text-red-600">Home Page</h1>
        <ItemMenu />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
