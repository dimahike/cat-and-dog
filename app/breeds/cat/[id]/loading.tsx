export default function Loading() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 h-64 bg-gray-300"></div>
        <div className="p-6 sm:w-2/3">
          <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
          <ul className="text-sm text-gray-600 mb-4">
            <li className="h-4 bg-gray-300 rounded w-full mb-2"></li>
            <li className="h-4 bg-gray-300 rounded w-3/4 mb-2"></li>
            <li className="h-4 bg-gray-300 rounded w-2/3 mb-2"></li>
            <li className="h-4 bg-gray-300 rounded w-1/2 mb-2"></li>
          </ul>
          <div className="flex flex-wrap justify-between text-sm text-blue-500">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
