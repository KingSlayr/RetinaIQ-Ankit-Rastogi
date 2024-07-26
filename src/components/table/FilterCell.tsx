import React, { useState } from "react";
import { Item } from "../OurTable";
import Image from "next/image";
import ImageGrid from "../ImagesDummy";
import { SortableHandle } from "react-sortable-hoc";
import Button from "../Button";

interface MyComponentProps {
  removeItemById: (id: string) => void;
  setNewValue: (id: string, column: string, value: string) => void;
  value: Item;
  column: string;
  position: number;
}

const RowHandler = SortableHandle(() => (
  <div
    className="cursor-pointer flex flex-col gap-1 justify-center"
    title="Reorder items"
  >
    <div className="w-4 bg-gray-500 h-[2px]"></div>
    <div className="w-4 bg-gray-500 h-[2px]"></div>
    <div className="w-4 bg-gray-500 h-[2px]"></div>
  </div>
));

const FilterCell: React.FC<MyComponentProps> = ({
  setNewValue,
  value,
  column,
  removeItemById,
  position,
}) => {
  const [input, setinput] = useState("");
  const [showModal, setshowModal] = useState(false);
  return (
    <div className="w-full gap-4 border-2 p-2 bg-white border-dashed full min-h-[20vh] flex items-center justify-between text-gray-700">
      <div className="flex gap-4 items-center">
        <RowHandler />
        <div className="text-xl">{position}</div>
        <div
          onClick={() => removeItemById(value.id)}
          className="text-2xl px-2 py-0 rounded-full cursor-pointer"
        >
          <p title="Delete Item">✗</p>
        </div>
      </div>
      {showModal ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-10">
          <div className="bg-slate-100 p-4 rounded-md relative flex flex-col items-center">
            <div
              onClick={() => setshowModal(false)}
              className="absolute top-0 right-0"
            >
              x
            </div>
            <input
              type="text"
              value={input}
              onChange={(event) => setinput(event.target.value)}
              className="outline-none p-2"
              placeholder="Enter Filter"
            />
            <Button
              onClick={() => {
                setNewValue(value.id, column, input);
                setshowModal(false);
              }}
              text="Apply"
            />
          </div>
        </div>
      ) : null}
      <div className="flex justify-center items-center gap-4 w-full">
        <div
          onClick={() => {
            setshowModal(true);
          }}
          className="border border-gray-300 p-4 flex-grow max-w-[150px] lg:max-w-[200px] text-clip overflow-auto flex gap-1"
        >
          {value[column]?.split(" ").map((word, index) => (
            <div className="border p-1 rounded-lg capitalize">{word}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FilterCell;
