import React from "react";
import { Item } from "../OurTable";
import VariantCell from "./VariantCell";
import FilterCell from "./FilterCell";

interface MyComponentProps {
  removeItemById: (id: string) => void;
  setNewValue: (id: string, column: string, value: string) => void;
  value: Item;
  column: string;
  index: number;
  position: number;
}

const TableCell: React.FC<MyComponentProps> = ({
  removeItemById,
  setNewValue,
  value,
  column,
  index,
  position,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 capitalize justify-center">
      {index == 0 ? (
        <FilterCell
          setNewValue={setNewValue}
          value={value}
          column={column}
          removeItemById={removeItemById}
          position={position}
        />
      ) : (
        <VariantCell setNewValue={setNewValue} value={value} column={column} />
      )}
    </div>
  );
};

export default TableCell;
