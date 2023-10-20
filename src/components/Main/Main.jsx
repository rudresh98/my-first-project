import Card from "../../shared/Card/Card";
import Counter from "../Counter/Counter";
export const Main = () => {
  const headingName1 = "Clothes";
  return (
    <div>
      <Card cardHeading={headingName1} />
      {/* <Card cardHeading={headingName1} id="2" />
      <Card /> */}
      <Counter />
    </div>
  );
};
