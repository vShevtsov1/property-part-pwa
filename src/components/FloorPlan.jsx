import "../styles/floorPlan.scss"
import floorplan from "../assets/floorPlan.png"
const FloorPlan = ({plan,type}) => {
    function formatNumberWithCommas(value) {
        value = (Number(value)/3.16).toFixed(0).toString()
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return(<div className={"floor-plan"}>
            <div className="image-container"><img src={plan.imgSrc}/></div>
        <div className="plan-info">
            <div className="price-info">
                <div>
                    <div>Price from </div>
                    <div>${formatNumberWithCommas(plan.price)}</div>
                </div>
                <div>{plan.size} sq.ft</div>
            </div>
        </div>
    </div>)
}
export default FloorPlan