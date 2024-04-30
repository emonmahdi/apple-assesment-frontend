import CardContent from "./reusable/CardContent";

const GridSectionTwo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid-section-two relative overflow-hidden flex justify-center">
        <div className="first-grid-content-two text-black absolute text-center top-4">
          <CardContent
            title="MacBook Air"
            subtitle="Lean. Mean. M3 machine."
            style={{ color: "#000" }}
          />
        </div>
      </div>
      <div className="grid-section2-two relative overflow-hidden flex justify-center">
        <div className="second-grid-content-two text-white absolute text-center top-4">
          <CardContent
            title="Watch"
            subtitle="Smarter. Brighter. Mightier."
            style={{ color: "#fff" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GridSectionTwo;
