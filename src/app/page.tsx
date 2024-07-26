"use client";
import OurTable from "@/components/OurTable";

export default function Home() {
  return (
    <div className="mx-4 lg:mx-24">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-center">Rules Creation</h1>
        <div className="bg-red-400 px-8 py-4 rounded-md font-medium cursor-pointer tracking-widest">
          Publish
        </div>
      </div>

      <OurTable/>

      
    </div>
  );
}
