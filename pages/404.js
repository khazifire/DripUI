import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Error() {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center justify-between lg:justify-around">
      <div className="space-y-6">
        <h1 className="font-bold text-4xl lg-text-6xl">OOOPS...</h1>
        <h3>
          Looks like this page doesn&apos;t exist, <br /> but don&apos;t let
          that stop you.
        </h3>
        <button
          className=" border-2 border-black font-bold px-6 py-3 hover:bg-black hover:text-white text-xs"
          onClick={() => router.push("/")}
        >
          GO HOME
        </button>
      </div>
      <Image
        src="/404.png"
        loading="lazy"
        alt="404"
        layout="fixed"
        width={225}
        height={225}
      />
    </div>
  );
}

export default Error;
