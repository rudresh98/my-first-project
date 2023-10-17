import "./Card.css";
const Card = ({ cardHeading = "" }) => {
  return (
    <>
      <div className="card-main">
        <div className="card-header">
          <h1>{cardHeading || "heading"}</h1>
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
              aperiam quos illo recusandae cupiditate tempora
            </p>
          </div>
          <h1>OBJECT DESTRUCTURING</h1>
        </div>
      </div>
    </>
  );
};
export default Card;
