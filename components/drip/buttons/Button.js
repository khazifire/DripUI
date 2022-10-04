import { useRef, useState } from "react";
import copyToClipboard from "../../../utils/function/copyToClipBoard";
import SingleButton from "./SingleButton";

export default function Button(btns) {
  return (
    <div className="flex flex-col gap-2 ">
      <h2>{btns.type + btns.text}</h2>

      <div className="flex flex-wrap w-full gap-8 p-4 rounded-lg shadow-inner shadow-drip-black/30">
        {btns.category?.map((btn) => (
            <SingleButton {...btn} key={btn.id} btns={btns} />
        ))}
      </div>
    </div>
  );
}
