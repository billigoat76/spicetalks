import { useNavigate ,useRouteError} from "react-router-dom";
export default function ErrorPage() {
   const navigate = useNavigate(); 
   const error = useRouteError();
  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center text-center px-6 py-12">
      <h3 className="text-[60px] sm:text-[30px] font-bold text-red-500 drop-shadow-lg">{error.status} {error.statusText} {error.data}</h3>
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 text-lg max-w-xl mb-8">
        The page you’re looking for doesn’t exist. It might have been moved or removed. Don’t worry, we’ll get you back on track!
      </p>
      <button
        className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg font-medium hover:bg-red-600 transition"
        onClick={()=> {navigate('/')}}
      >
        Go Back Home
      </button>
    </div>
  );
}
