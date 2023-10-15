import "./Card.css";
const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className="card-main">
        <div className="card-header">
          <h1>{props.cardHeading || "heading"}</h1>
        </div>
        <div className="card-body">
          <div className="card-image">
            <img src="https://picsum.photos/200/300" alt="random " />
          </div>
          <div className="card-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, similique natus repellendus quis non perspiciatis.
              Dolorum numquam totam fugiat inventore quas exercitationem,
              eligendi, suscipit, dignissimos doloremque tenetur dolores quae
              aperiam quos illo recusandae cupiditate tempora nisi tempore!
              Voluptatibus, modi possimus facere quis sequi cumque nam qui.
              Ipsum quis nam repellat?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
