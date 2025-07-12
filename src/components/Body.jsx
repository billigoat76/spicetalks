import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI"; // Import shimmer component
import axios from "axios";
import RestaurantCard from "./RestaurantCard";
import { EXTERNAL_API } from "../utils/constants";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { Link } from "react-router-dom";
import { withOpenLabel } from "./RestaurantCard";
export default function Body() {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const OpenedRestaurantCard = withOpenLabel(RestaurantCard);

  useEffect(() => {
    // You can't use async directly in useEffect
    async function fetchData() {
      try {
        const response = await axios.get(EXTERNAL_API);
        const restData =
          response.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setResList(restData || []);
        setFilteredList(restData || []);
      } catch (error) {
        console.error("Failed to fetch restaurant data", error);
      }
    }

    fetchData();
  }, []);

  function filterTopRatedRestaurants() {
    const topres = resList.filter((res) => res.info?.avgRating >= 4.4);
    setFilteredList(topres);
  }

  if (!onlineStatus) {
    return <h1>It looks like you are offline!!</h1>;
  }
  console.log(resList);
    return (
    <main className="bg-cream min-h-screen p-6">
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-orange-600 transition cursor-pointer"
            onClick={() => {
              const searchFiltered = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(searchFiltered);
            }}
          >
            Search
          </button>
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-orange-600 transition cursor-pointer"
            onClick={filterTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Loading shimmer or restaurant list */}
      {resList.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 max-w-7xl mx-auto">
          {filteredList.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <OpenedRestaurantCard resData={restaurant.info} />
              ) : (
                <RestaurantCard resData={restaurant.info} />
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
