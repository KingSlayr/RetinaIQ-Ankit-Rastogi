import React, { useEffect, useState } from "react";
import DragTable from "./table/DragTable";
import Button from "./Button";

export type Item = {
  [key: string]: string;
};

export default function OurTable() {
  const [data, setData] = useState<Item[]>([]);
  const [columns, setColumns] = useState<string[]>([
    "Product Filter",
    "Primary Variant",
  ]);
  const [columnCounter, setColumnCounter] = useState<number>(1);
  const [initalseDone, setinitalseDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Fetch data from localStorage only on the client side
      const storedData = localStorage.getItem("data_inital");
      if (storedData) {
        setData(JSON.parse(storedData));
      }

      const storedColumns = localStorage.getItem("columns_initial");
      if (storedColumns) {
        setColumns(JSON.parse(storedColumns));
      }

      const storedColumnCounter = localStorage.getItem("columns_counter");
      const parsedColumnCounter = storedColumnCounter
        ? parseInt(storedColumnCounter, 10)
        : 1;
      setColumnCounter(isNaN(parsedColumnCounter) ? 1 : parsedColumnCounter);
      setinitalseDone(true);
    }
  }, []);

  //Storing important data in local storage to fetch after reloading
  useEffect(() => {
    if (initalseDone) {
      localStorage.setItem("data_inital", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    if (initalseDone) {
      localStorage.setItem("columns_initial", JSON.stringify(columns));
    }
  }, [columns]);

  useEffect(() => {
    if (initalseDone) {
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
