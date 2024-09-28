export const Header = () => {
  return (
    <div className="max-w-7xl m-auto mb-4">
      <header className="h-32 border-b ">
        <div className="flex justify-between items-center p-4">
          <div className="border border-red-800 flex items-center">
            <a href="http://">App</a>
          </div>
          <div className="border border-yellow-600 flex-col justify-center items-start">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Users</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
