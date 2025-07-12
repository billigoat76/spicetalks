import { useDispatch } from "react-redux";
import { IMAGE_CDN } from "../utils/constants";
import { addItem } from "../utils/slices/cartSlice";
export default function ItemsList({ items }) {

  const dispatch = useDispatch();
  function handleAddItem(item){
    dispatch(addItem(item))
  }
  return (
    <div className="px-6 py-4 space-y-6 bg-gray-50">
      {items?.map((itemCard) => {
        const item = itemCard?.card?.info;
        return (
          <div key={item.id} className="flex justify-between gap-4 border-b pb-6">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
              <p className="text-base text-gray-800 font-semibold">₹{item.defaultPrice/100 || item.price/100 }</p>
              {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
              <button className="mt-2 px-4 py-1 cursor-pointer bg-red-500 text-white text-sm rounded hover:bg-red-600 transition"
              onClick={() => {handleAddItem(item)}}>Add</button>
            </div>
            {item.imageId && (
              <div className="w-28 h-24 rounded-lg overflow-hidden border">
                <img
                  src={`${IMAGE_CDN}/${item.imageId}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
