// import { LiaGreaterThanSolid } from "react-icons/lia";

const Header = () => {
  return (
    <div>
      <div className="header-top-block bg-black text-white text-center py-4">
        <span>Join us this Earth Day by recycling your Apple devices. </span>
        <a href="#" className="text-blue-500">
          Recycle for free
        </a>
      </div>
      <div className="banner-area">
        <div className="hero-content text-center p-3 rounded-md w-[547px] mx-auto">
          <h2 className="hero-title">Apple 2030</h2>
          <p className="hero-sub-title">
            A plan as innovative as our products.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
