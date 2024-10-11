import apple from "./../../img/apple.jpg";
export const Product = () => {
  return (
    <div className="bg-orange-100 flex justify-center">
      <div className="bg-white max-w-xs m-10 p-3 md:grid md:grid-cols-2 md:max-w-3xl md:gap-4 md:p-5">
        <img src={apple} alt="" srcset="" width={500} />
        <section>
          <h1 className="font-bold text-2xl md:text-3xl">Himachal Apple</h1>
          <p className="font-normal text-md md:text-xl">
            Hand picked apples from Shimla
          </p>
          <h2 className="font-light text-2xl my-2">
            ₹ 120.<span className="font-light text-sm md:text-md">00</span>/Kg
          </h2>
          <p className="text-sm text-gray-500">
            Enjoy the crispy taste of organic & hand-picked apples from the
            Kotkhai region of Shimla, Himachal Pradesh.
          </p>
          <div className="flex items-center my-4">
            <button
              type="button"
              className="p-2 bg-gradient-to-b hover:bg-gradient-to-t from-orange-300 to-orange-800 text-white uppercase py-2 px-4 flex-grow md:flex-none"
            >
              Add to card
            </button>
            <svg
              className="ml-2"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.24000000000000005"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="#9c4221"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <p>
            <h3 className="uppercase font-light text-xl">Features</h3>
            <ul className="list-disc marker:text-orange-700 text-sm text-gray-600 font-light">
              <li className="ml-4 pl-3">
                <span className="font-semibold">Lorem ips</span>: Lorem ipsum
                dolor sit amet
              </li>
              <li className="ml-4 pl-3">
                <span className="font-semibold">Voluptate</span>: Voluptate quas
                assumend
              </li>
              <li className="ml-4 pl-3">
                <span className="font-semibold">non provi</span>: non provident
                commodi
              </li>
              <li className="ml-4 pl-3">
                <span className="font-semibold">repellend</span>: repellendus
                aliquid possimus
              </li>
              <li className="ml-4 pl-3">
                <span className="font-semibold">asperiore</span>: asperiores
                distinctio minus!
              </li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};
