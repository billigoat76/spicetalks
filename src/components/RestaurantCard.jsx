import { IMAGE_CDN } from "../utils/constants";
export default function RestaurantCard({ resData }) {
  const { name, avgRating, sla, cuisines, costForTwo, cloudinaryImageId } =
    resData;
  const imageUrl = `${IMAGE_CDN}${cloudinaryImageId}`;
  return (
    <div className="w-72 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer" data-testid='rescard'>
      {/* Image */}
      <div className="h-44 w-full bg-gray-100">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-1.5">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-semibold text-gray-900 truncate">
            {name}
          </h3>
          <span className="flex items-center gap-1 text-sm font-medium text-gray-800 bg-gray-100 px-2 py-0.5 rounded-full">
            ⭐ {avgRating}
          </span>
        </div>

        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>

        <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
          <span>{sla?.deliveryTime} min</span>
          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
}

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return(
    <div className="relative">
      <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs rounded">
          OPEN 🟢
      </span>
      <RestaurantCard {...props} />
    </div>);
  };
};
