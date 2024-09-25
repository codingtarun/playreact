import { ButtonGroup } from "../Button/ButtonGroup";
import { Button } from "../Button/Button";
export const Card = ({ title }) => {
  return (
    <div className="bg-white min-w-96 rounded-md shadow-lg overflow-hidden">
      <div>
        <div className="mb-2 bg-zinc-200 shadow-md">
          <h1 className="font-semibold text-sm px-2 py-2 uppercase">{title}</h1>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <p className="text-7xl font-bold">0</p>
        </div>
        <div className="px-6 py-4 flex justify-center items-center">
          <ButtonGroup>
            <Button>
              <i class="fa-solid fa-minus"></i>
            </Button>
            <Button>
              <i class="fa-solid fa-rotate-left"></i>
            </Button>
            <Button>
              <i class="fa-solid fa-plus"></i>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};
