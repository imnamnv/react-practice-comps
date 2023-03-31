import Button from "../components/Button";
import { GoBell } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click!!!");
  };

  return (
    <div>
      <div>
        <Button className={"mb-5"} secondary rounded onClick={handleClick}>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary>Something!</Button>
      </div>

      <div>
        <Button success>Deleted!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
