import React, { useState } from "react";
import { Button } from "../Button";
import Hamberger from "./../../assets/hamburger.png";
import { ToggleSwitch } from "../Button/toggle";
import { MaterialIcon } from "../Icons/icon";
import { InputText } from "./input_text";

type Props = {
  /**
   * props,
   */
  submit: any;
  cancel: any;
  available: true | false;
};

export const InputImage = ({ available, submit, cancel }: Props) => {
  //   const [name, setName] = useState(true);
  const [image, setImage] = useState(Hamberger);
  const input_file = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
    } else setImage(Hamberger);
  };
  return (
    <div
      className={`max-w-[400px] flex rounded-lg bg-black bg-opacity-50 p-0.5`}
    >
      <div className=" relative  max-h-[100px] max-w-[100px]">
        <img
          src={image}
          className="object-contain h-[100px] w-[100px] hover:h-[200px] hover:w-[200px] rounded-lg"
        />
        <span className="float-right right-0 absolute top-0 bg-white rounded-md items-center align-super">
          <MaterialIcon icon="cancel" cursor="pointer" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 justify-around p-1">
        <div className="flex flex-row-reverse gap-1">
          <div className="w-fit">
            <ToggleSwitch color="blue" onChange={null} size="md" />
          </div>
          <div className="flex-1">
            <InputText available={available} />
          </div>
        </div>
        <div>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            type="file"
            onChange={(e) => input_file(e)}
          />
        </div>
        <div className="flex flex-row-reverse gap-1">
          <Button text="Submit" onclick={submit} />
          <Button text="Cancel" color="hot" onclick={cancel} />
        </div>
      </div>
    </div>
  );
};

InputImage.defaultProps = {
  // width: "w-64",
};
