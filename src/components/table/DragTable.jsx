import React, { useState, useCallback } from "react";
import TableRow from "./TableRow";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMove } from "../../utils";

const SortableCont = SortableContainer(({ children }) => {
  return <tbody>{children}</tbody>;
});

const SortableItem = SortableElement((props) => <TableRow {...props} />);

const DragTable = ({
  data,
  setData,
  columns,
  updateItemValue,
  removeItemById,
  removeColumn,
  addColumn,
}) => {
  const onSortEnd = useCallback(({ oldIndex, newIndex }) => {
    setData((oldItems) => arrayMove(oldItems, oldIndex, newIndex));
    setdragging(false);
  }, []);

  const [dragging, setdragging] = useState(false);

  return (
    <div className="h-[60vh] overflow-auto">
      <table>
        <thead className="relative">
          <tr>
            {columns.map((value, key) => (
              <th key={key}>
                <div className="flex justify-between items-center text-gray-500">
                  <div>{value}</div>
                  {key > 1 ? (
                    <div
                      onClick={() => removeColumn(value)}
                      className="text-2xl px-2 py-0 rounded-full cursor-pointer"
                    >
                      <p title="Delete Variant">✗</p>
                    </div>
                  ) : null}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <SortableCont
          onSortEnd={onSortEnd}
          onSortStart={() => setdragging(true)}
          axis="y"
          lockAxis="y"
          lockToContainerEdges={true}
          useDragHandle={true}
        >
          {data.map((value, index) => (
            <SortableItem
              key={`item-${index}`}
              index={index}
              value={value}
              columns={columns}
              removeItemById={removeItemById}
              updateItemValue={updateItemValue}
              addColumn={addColumn}
              dragging={dragging}
              position={index}
            />
          ))}
        </SortableCont>
      </table>
    </div>
  );
};

export default DragTable;
