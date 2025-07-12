import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import CategoryAccordion from "./CategoryAccordion";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  //const restaurantInfo = resMenu[0]?.card?.card?.info;

  const categories = resMenu?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const firstItemImageId =
    categories?.[0]?.card?.card?.itemCards?.[0]?.card?.info?.imageId;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* {restaurantInfo && (
        <div className="mb-10 text-center">
          <div className="w-full h-64 rounded-xl overflow-hidden mb-4 relative">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800/${firstItemImageId || restaurantInfo.cloudinaryImageId}`}
              alt={restaurantInfo.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6 text-left">
              <h1 className="text-3xl font-bold text-white mb-1">{restaurantInfo.name}</h1>
              <p className="text-gray-200 text-base">{restaurantInfo.cuisines?.join(", ")} • {restaurantInfo.areaName}</p>
            </div>
          </div>
        </div>
      )} */}

      {categories?.map((category, index) => (
        <CategoryAccordion
          key={category.card.card.title}
          title={category.card.card.title}
          showItems={index === showIndex}
          setShowIndex={() => {
            setShowIndex(index === showIndex ? null : index);
          }}
          items={category.card.card.itemCards}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
