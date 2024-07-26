import React from "react";
import TableCell from "./TableCell";

interface TableRowProps {
  value: Record<string, string>;
  columns: string[];
  removeItemById: (id: string) => void;
  updateItemValue: (id: string, key: string, value: string) => void;
  dragging?: boolean;
  position: number;
}

const TableRow: React.FC<TableRowProps> = ({
  value,
  columns,
  removeItemById,
  updateItemValue,
  dragging,
  position,
}) => {
  const setNewValue = (id: string, key: string, value: string) => {
    updateItemValue(id, key, value);
  };

  return (
    <tr className={`${dragging ? "opacity-30" : ""}`}>
      {columns.map((column, index) => (
        <td key={index}>
          <TableCell
            removeItemById={removeItemById}
            setNewValue={setNewValue}
            value={value}
            column={column}
            index={index}
            position={position}
          />
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
