import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";
import axios from "axios";

export const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        async function fetchData() {
            const response = await axios.get(MENU_API_URL+resId);
            setResInfo(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        }
        fetchData();
    },[]);
    return resInfo;
}

