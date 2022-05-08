import { useState } from "react";

const useLocation = () => {
    const [locationErrorMsg,setLocationErrorMsg]=useState("");
    const [latLong,setLatLong]=useState('');

    const success=(position)=>{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatLong(`${latitude},${longitude}`);
        setLocationErrorMsg("");
    }

    const error=()=>{
        setLocationErrorMsg('Unable to retrieve your location');
    }

    const handleLocation=()=>{
        if (!navigator.geolocation) {
            setLocationErrorMsg("Geolocation is not supported by your browser");
		} else {
			navigator.geolocation.getCurrentPosition(success, error);
		}
    }

    return {
        latLong,
        handleLocation,
        locationErrorMsg
    };
};

export default useLocation;