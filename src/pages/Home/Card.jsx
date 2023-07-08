export default function Card(props) {
  const classes =
    "rounded-[39px] w-56 m-4 relative top-[-69vh] h-72 bg-pink-1 object-cover transition duration-500 cursor-pointer  hover:scale-110 " +
    props.className;

  const title = props.title;
  const cause1 = props.cause1;
  const cause2 = props.cause2;
  const cause3 = props.cause3;
  console.log(props.title);
  return (
    <div>
      <div className={classes}>
        <h1>{title}</h1>
        <h2>{cause1}</h2>
        <h2>{cause2}</h2>
        <h2>{cause3}</h2>
      </div>
    </div>
  );
}
