export default function ArticleCard(props) {
  const picture = props.pic;
  const classes =
    "relative border-[2px] w-290px h-405 top-[-1.5rem] border-solid  border-violet-950" +
    props.className;

  return (
    <div className={classes}>
      <img src={picture} alt="babayaga"></img>
    </div>
  );
}

