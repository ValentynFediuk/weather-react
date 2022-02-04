import './Information.css'
function Information({condition, temperature}) {

    return (
        <div className="information">
            <p className={`temperature ${temperature >= 0 ? "temperature--positive" : "temperature--negative"}`}>Temperature: {temperature}&#8451;
            </p>
            <p>{condition}</p>
        </div>
    )
}

export default Information