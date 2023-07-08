import Card from "./Card";
export default function CardStack() {
  return (
    <div className="flex p-4 justify-items-center">
      <Card title="Anxiety" cause1="stress" className="left-[50px]">
        {}
      </Card>
      <Card className=""></Card>
      <Card className=""></Card>
      <Card className=""></Card>
      <Card className=""></Card>
    </div>
  );
}
