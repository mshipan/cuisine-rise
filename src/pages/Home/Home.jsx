import Navbar from "../../components/home/Navbar/Navbar";
import Header from "../../components/home/header/Header";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Navbar />
      <h1 className="text-2xl text-red-600">Home Page</h1>
    </div>
  );
};

export default Home;
