import React, { useEffect, useState } from "react";
import DragTable from "./table/DragTable";
import Button from "./Button";

export type Item = {
  [key: string]: string;
};

export default function OurTable() {
  const [data, setData] = useState<Item[]>(() =>
    JSON.parse(localStorage.getItem("data_inital") || "[]")
  );
  const [columns, setColumns] = useState<string[]>(() =>
    JSON.parse(
      localStorage.getItem("columns_initial") ||
        '["Product Filter", "Primary Variant"]'
    )
  );
  const [columnCounter, setColumnCounter] = useState<number>(() => {
    const storedValue = localStorage.getItem("columns_counter");
    const parsedValue = storedValue ? parseInt(storedValue, 10) : 1;
    return isNaN(parsedValue) ? 1 : parsedValue;
  });

  //Storing important data in local storage to fetch after reloading
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("data_inital", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("columns_initial", JSON.stringify(columns));
    }
  }, [columns]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("columns_counter", JSON.stringify(columnCounter));
    }
  }, [columnCounter]);

  const addItem = () => {
    const newItem: Item = {};
    newItem["id"] = "id_" + data.length;

    setData((prevData) => [...prevData, newItem]);
  };

  const addColumn = () => {
    setColumns((prevColumns) => [...prevColumns, "Variant " + columnCounter]);
    setColumnCounter((prev) => prev + 1);
  };

  const updateItemValue = (id: string, key: keyof Item, newValue: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [key]: newValue } : item
      )
    );
  };

  const removeItemById = (id: string) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const removeColumn = (value: string) => {
    setColumns((prevColumns) => prevColumns.filter((item) => item !== value));
  };

  return (
    <div className="mt-24 w-full flex flex-col gap-4 bg-gray-100 rounded-xl p-4 h-[70vh] overflow-auto">
      <DragTable
        data={data}
        setData={setData}
        columns={columns}
        updateItemValue={updateItemValue}
        removeItemById={removeItemById}
        removeColumn={removeColumn}
        addColumn={addColumn}
      />
      <div className="flex gap-4">
        <Button onClick={() => addItem()} text="Add Item" />
        <Button onClick={() => addColumn()} text="Add Variant" />
      </div>
    </div>
  );
}
