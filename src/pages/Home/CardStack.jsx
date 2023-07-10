import Card from "./Card";
export default function CardStack(props) {
  return (
    <div className="relative flex justify-between left-56 ">
      <Card title="Generic Medicines"></Card>
      <Card className="Tele-Medicine"></Card>
      <Card className="Mental Health"></Card>
      <Card className="Hospital Services"></Card>
    </div>
  );
}
