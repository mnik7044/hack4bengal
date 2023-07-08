import Card from "./Card";
export default function CardStack() {
  return (
    <div className="flex">
      <Card title="Anxiety" cause1="stress" className="left-[50px]">
        {}
      </Card>
      <Card className="left-[350px]"></Card>
      <Card className="left-[650px]"></Card>
      <Card className="left-[950px]"></Card>
      <Card className="left-[1250px]"></Card>
    </div>
  );
}
