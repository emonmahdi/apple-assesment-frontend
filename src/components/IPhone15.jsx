import Button from "./reusable/Button";
import Button2 from "./reusable/Button2";

const IPhone15 = () => {
  return (
    <div className="Iphone15_section">
      <div className="content-card text-center text-black py-8">
        <h2 className="iphone-title">iPhone 15</h2>
        <p className="iphone-subtitle mt-2">
          New camera. New design. Newphoria.
        </p>
        <div className="mt-3">
          <Button>Learn More</Button>
          <Button2>Buy</Button2>
        </div>
      </div>
    </div>
  );
};

export default IPhone15;
