import './Card.css'

function Card(props){
    return (
        <>
        <div className="Card" style={{backgroundColor:props.bg , color:props.fg}}>
        <h1 >Hello {props.name} <br />
        age {props.age}
        </h1>
        </div>
       
        </>
    );
}
export default Card;