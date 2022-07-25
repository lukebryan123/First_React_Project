export default function ServiceBlock(props) {
    return (
      <div className="service-block">
        {/* <img src={URL}(props.img)/> */}
        <img src={props.img} />
        <p>{props.text}</p>
      </div>
    );
  }