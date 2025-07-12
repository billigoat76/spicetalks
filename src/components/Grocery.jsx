import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GROCERY_API } from '../utils/constants';
export default function Grocery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchGroceryItems() {
    try {
      const res = await axios.get(GROCERY_API);
      setItems(res.data.products);
    } catch (error) {
      console.error('Failed to fetch groceries:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGroceryItems();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-orange-400 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Grocery Store 🛒</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-4 flex flex-col"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 w-full object-cover rounded-md mb-3"
            />
            <h3 className="font-semibold text-gray-800 text-lg truncate">{item.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-orange-500 font-bold">${item.price}</span>
              <span className="text-xs text-gray-400">Stock: {item.stock}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
