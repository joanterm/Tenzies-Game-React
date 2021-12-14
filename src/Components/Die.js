import "../Styling/Die.css"

const Die = (props) => {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : ""
    }
    
    return ( 
        <div className="die" style={styles} onClick={props.holdDice}>
            <h1>{props.value}</h1>
        </div>
     );
}
 
export default Die;