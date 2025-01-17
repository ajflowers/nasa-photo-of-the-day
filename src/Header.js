import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

const Header = props => {
    // const photoObj = {
    //     "date":"2019-08-14",
    //     "explanation":"What's that next to the Moon? Saturn. In its monthly trip around the Earth -- and hence Earth's sky -- our Moon passed nearly in front of Sun-orbiting Saturn earlier this week.  Actually the Moon passed directly in front of Saturn from the viewpoints of a wide swath of Earth's Southern Hemisphere.  The featured image from Sydney, Australia captured the pair a few minutes before the eclipse.  The image was a single shot lasting only 1/500th of a second, later processed to better highlight both the Moon and Saturn. Since Saturn is nearly opposite the Sun, it can be seen nearly the entire night, starting at sunset, toward the south and east.  The gibbous Moon was also nearly opposite the Sun, and so also visible nearly the entire night -- it will be full tomorrow night. The Moon will occult Saturn again during every lap it makes around the Earth this year.",
    //     "hdurl":"https://apod.nasa.gov/apod/image/1908/MoonSaturn_Patonai_1280.jpg",
    //     "media_type":"image",
    //     "service_version":"v1",
    //     "title":"Saturn Behind the Moon",
    //     "url":"https://apod.nasa.gov/apod/image/1908/MoonSaturn_Patonai_960.jpg"}

    const [photoObj, setPhotoObj] = useState({});

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=VRlcfujdkif3SC0ygGHIwALggJbHrAhhcei2cTIu&date=${props.thisISO}&hd=true`)
            .then(response => {
                const photoOfDay = response.data;
                console.log(photoOfDay);
                setPhotoObj(photoOfDay);
            });

    });
    
    return (
        <div className="App-header">
            <h2>NASA Astronomy Photo of the Day for {props.thisMonth} {props.thisDate}, {props.thisYear} : "{photoObj.title}"</h2>
            <div className="App-photo-div"></div>
            <PhotoCard key={photoObj.date} photoURL={photoObj.url} photoBigURL={photoObj.hdurl} photoDesc={photoObj.explanation} />
        </div>
    );
}

export default Header;