import React from "react";

interface Props {
  available: true | false;
}
export const InputText = ({ available = false }: Props) => {
  return (
    <div className="my-auto w-full relative">
      <input
        className="box-border shadow appearance-none  mx-0  w-full rounded text-sm py-0.5 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        // id="username"
        type="text"
        placeholder="Image Name"
      />
      <span
        className={`block h-4 w-4 ${
          !available ? "bg-red-600" : "bg-green-600"
        } rounded-[50%] absolute right-1 my-auto top-0 bottom-0`}
      ></span>
    </div>
  );
};
