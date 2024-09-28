export const Card = ({ title, children }) => {
  return (
    <div className="bg-white w-11/12 sm:w-3/4 md:w-3/5 rounded-md shadow-md hover:shadow-lg overflow-hidden border-solid border-1 border-zinc-200 hover:cursor-pointer">
      <div>
        <div className="mb-2 bg-zinc-200 ">
          <h1 className="font-semibold text-gray-950 text-sm p-2 uppercase">
            {title}
          </h1>
        </div>
        <div className="px-6 py-8">{children}</div>
      </div>
    </div>
  );
};
