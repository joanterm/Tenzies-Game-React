import "../Styling/Die.css"

const Die = (props) => {
    return ( 
        <div className="die">
            <h1>{props.value}</h1>
        </div>
     );
}
 
export default Die;