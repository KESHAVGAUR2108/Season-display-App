import React from "react";
import './SeasonDisplay.css';

const getSeason = (lat,month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfigure = {
    summer : {
        iconName : 'sun',
        text : "Let's hit the beach!"
    },
    winter : {
        iconName : 'snowflake',
        text : "Burr, it's chilly!"
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat,new Date().getMonth());
    const {iconName,text} = seasonConfigure[season];
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive icon ${iconName}`} />
            <h1>{text}</h1> 
            <i className={`icon-right massive icon ${iconName}`} />
        </div>
    )
};

export default SeasonDisplay;