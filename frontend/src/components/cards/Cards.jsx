import Card from "./Card";

function Cards() {
  return (
    <div className="h-screen w-full bg-red-300 grid grid-cols-3 gap-2 py-24 px-5">
      <div className="group relative hover:col-span-2">
        <Card className="group-hover:grid-cols-1" />
      </div>
      <div className="group relative hover:col-span-2">
        <Card className="group-hover:grid-cols-1" />
      </div>
      <div className="group relative hover:col-span-2">
        <Card className="group-hover:grid-cols-1" />
      </div>
    </div>
  );
}

export default Cards;
