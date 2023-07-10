export default function ArticleCard(props) {
  const picture = props.pic;
  const classes =
    "relative border-[2px] shadow-md rounded-[39px] object-cover transition duration-500 cursor-pointer  hover:scale-110 w-290px h-405 top-[-1.5rem] border-solid  border-violet-950" +
    props.className;

  return (
    <div className={classes}>
      <img className="" src={picture} alt="babayaga"></img>
    </div>
  );
}
