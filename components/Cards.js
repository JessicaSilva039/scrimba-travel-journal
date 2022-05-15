import React from "react"

export default function Cards(props){
    return(
        <div className="cardBody">
            <img src={props.items.imageUrl} className="travelImage" />
            <div className="cardTextArea">
                <div className="findLocation">
                    <img src="./images/marker.png" className="markerIcon" />
                    <span className="country">{props.items.location}</span>
                    <span className="maplink" href={props.items.googleMapsUrl}>View on Google Maps</span>
                </div>
                
                <span className="placeName">{props.items.title}</span>
                <span className="dates">{props.items.startDate} - {props.items.endDate}</span>
                <p className = "description">{props.items.description}</p>
            </div>
        </div>
        
    )
}