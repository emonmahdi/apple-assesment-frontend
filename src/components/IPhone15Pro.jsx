import Button from "./reusable/Button";
import Button2 from "./reusable/Button2";

const IPhone15Pro = () => {
  return (
    <div className="Iphone15_pro_section">
      <div className="content-card text-center text-white py-8">
        <h2 className="iphone-pro-title">iPhone 15 Pro</h2>
        <p className="iphone-pro-subtitle mt-2">
          Titanium. So strong. So light. So Pro.
        </p>
        <div className="mt-3">
          <Button>Learn More</Button>
          <Button2>Buy</Button2>
        </div>
      </div>
    </div>
  );
};

export default IPhone15Pro;
