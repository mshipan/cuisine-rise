import headerLogo from "../../../assets/kfc-logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-2 py-2">
        <img className="w-20" src={headerLogo} alt="" />
        <p className="text-5xl font-bold text-red-600 ">
          কেন্টাকি ফ্রাইড চিকেন KFC
        </p>
        <img className="w-20" src={headerLogo} alt="" />
      </div>
    </div>
  );
};

export default Header;
