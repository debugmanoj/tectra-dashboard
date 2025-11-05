const Loader = ({ message = "Loading..." }) => (
  <div className="flex items-center justify-center h-48">
    <div className="flex flex-col items-center gap-2">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 text-sm">{message}</p>
    </div>
  </div>
);

export default Loader;