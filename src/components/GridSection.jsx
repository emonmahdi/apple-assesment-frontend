import Button from "./reusable/Button";
import CardContent from "./reusable/CardContent";

const GridSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid-section relative overflow-hidden flex justify-center">
        <div className="first-grid-content text-white absolute text-center  bottom-4 ">
          <p>
            Apple Worldwide Developers Conference.
            <br />
            Join us online June 10–14.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
      <div className="grid-section2 relative overflow-hidden flex justify-center">
        <div className="first-grid-content text-white absolute text-center bottom-1">
          <CardContent
            title="Vision Pro"
            subtitle="Welcome to the era of spatial computing."
            style={{ color: "#000" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GridSection;
