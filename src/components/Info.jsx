import Card from "./Card";
import data from "../data";

const Info = () => {
  return (
    <div className="max-w-md mx-auto grid grid-cols-3 gap-48 items-center mb-5">
      {data.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Info;
