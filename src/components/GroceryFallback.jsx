
export default function GroceryFallback() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50">
      {/* Spinner */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-orange-500 animate-spin"></div>
        <div className="absolute inset-4 rounded-full bg-orange-100 flex items-center justify-center">
          <span className="text-2xl font-bold text-orange-500">🛒</span>
        </div>
      </div>

      {/* Text */}
      <p className="mt-6 text-lg text-gray-700 font-medium animate-pulse">
        Loading your groceries...
      </p>
    </div>
  );
}
