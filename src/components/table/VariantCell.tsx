import React, { useState } from "react";
import { Item } from "../OurTable";
import Image from "next/image";
import ImageGrid from "../ImagesDummy";
import Button from "../Button";

interface MyComponentProps {
  setNewValue: (id: string, column: string, value: string) => void;
  value: Item;
  column: string;
}

const VariantCell: React.FC<MyComponentProps> = ({
  setNewValue,
  value,
  column,
}) => {
  const [input, setinput] = useState("");
  const [showModal, setshowModal] = useState(false);
  return (
    <div className="border-2 p-2 bg-white border-dashed w-full min-h-[20vh] flex items-center justify-between">
      {showModal ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-10">
          <div className="bg-slate-100 p-4 rounded-md relative flex flex-col items-center gap-2">
            <div
              onClick={() => setshowModal(false)}
              className="absolute top-0 right-0"
            >
              x
            </div>
            <ImageGrid setinput={setinput} input={input} />
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
      <div className="flex justify-center flex-col items-center gap-2 w-full">
        {value[column] ? (
          <>
            <Image
              src={value[column]}
              width={160}
              height={160}
              alt="image"
              className="rounded-lg cursor-pointer"
              onClick={() => {
                setshowModal(true);
              }}
            />
          </>
        ) : (
          <Button
            onClick={() => {
              setshowModal(true);
            }}
            text="Add Design"
          />
        )}
      </div>
    </div>
  );
};
export default VariantCell;
