import CardContent from "./reusable/CardContent";

const GridSectionThree = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid-section-three relative overflow-hidden flex justify-center">
        <div className="first-grid-content-two text-black absolute text-center top-4">
          <CardContent
            title="Card"
            subtitle="Get up to 3% Daily Cash back
            with every purchase."
            style={{ color: "#000" }}
          />
        </div>
      </div>
      <div className="grid-section2-three relative overflow-hidden flex justify-center">
        <div className="second-grid-content-three text-white absolute text-center top-4">
          <CardContent
            title="Trade In"
            subtitle="Get $180-$630 in credit when you
            trade in iPhone 11 or higher.1"
            style={{ color: "#000" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GridSectionThree;
