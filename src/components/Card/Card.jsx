export const Card = ({ title, children }) => {
  return (
    <div className="bg-white min-w-96 rounded-md shadow-lg overflow-hidden">
      <div>
        <div className="mb-2 bg-zinc-200 shadow-md">
          <h1 className="font-semibold text-sm px-2 py-2 uppercase">{title}</h1>
        </div>
        <div className="px-6 py-8">{children}</div>
      </div>
    </div>
  );
};
