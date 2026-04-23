export const SigninSnippets = {
  "default": {
    name: "Default",
    html: `<div class="flex items-center justify-center min-h-screen">
  <div class="bg-white px-8 py-4 md:p-8 rounded-3xl shadow-md max-w-md md:max-w-3xl lg:max-w-2xl xl:max-w-md md:py-16 lg:py-16 xl:p-8 relative">
    <span class="absolute top-4 right-4 hover:cursor-pointer text-slate-400 hover:text-red-400">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64-64 64L169.37 320l64-64-64-64L192 169.37l64 64 64-64L342.63 192l-64 64 64 64z"></path></svg>
    </span>
    <div class="text-center mb-6 md:mb-12 lg:mb-16 xl:mb-6">
      <img src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1718885963/logonew2_pssiep.png" alt="Logo" class="mx-auto mb-4 w-12 h-12 rounded-full shadow-xl shadow-blue-300" />
      <h2 class="text-2xl font-semibold mb-2 lg:text-3xl xl:text-2xl">Welcome back</h2>
      <p class="text-gray-600 lg:text-lg xl:text-sm">Please enter your details to sign in.</p>
    </div>
    <div class="flex justify-center space-x-2 lg:space-x-2 mb-6 md:mb-12 lg:mb-16 xl:mb-6">
      <button class="flex w-10 md:w-28 h-10 lg:w-36 lg:h-14 xl:w-28 xl:h-10 bg-white shadow-md text-white rounded-full items-center justify-center">
        <span class="sr-only">Sign in with Google</span>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
      </button>
      <button class="flex w-10 md:w-28 h-10 lg:w-36 lg:h-14 xl:w-28 xl:h-10 bg-black text-white shadow-md rounded-full items-center justify-center">
        <span class="sr-only">Sign in with Apple</span>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
      </button>
      <button class="flex w-10 md:w-28 h-10 lg:w-36 lg:h-14 xl:w-28 xl:h-10 bg-blue-500 shadow-md text-white rounded-full items-center justify-center">
        <span class="sr-only">Sign in with Twitter</span>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
      </button>
    </div>
    <div class="mb-4 md:mb-8 lg:mb-12 xl:mb-4 flex w-full justify-center items-center">
      <div class="h-[0.8px] w-1/2 bg-slate-300"></div>
      <span class="px-3 font-medium text-slate-500">OR</span>
      <div class="h-[0.8px] w-1/2 bg-slate-300"></div>
    </div>
    <form>
      <div class="mb-4 md:mb-8 lg:mb-12 xl:mb-4 text-left">
        <label class="block text-black font-semibold mb-2" for="email">E-Mail Address</label>
        <input type="email" name="email" autocomplete="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Enter your email..." />
      </div>
      <div class="mb-6 md:mb-12 lg:mb-16 xl:mb-6 text-left font-semibold relative">
        <label class="block text-gray-700 mb-2" for="password">Password</label>
        <input id="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Enter Password." type="password" name="password" autocomplete="password" required="" />
        <button type="button" class="absolute right-3 mt-3 text-lg">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
        </button>
      </div>
      <div class="flex items-center justify-between gap-10 mb-4 md:mb-8 lg:mb-12 xl:mb-4">
        <label class="flex items-center">
          <input type="checkbox" class="form-checkbox" />
          <span class="ml-2 text-black font-semibold">Remember me</span>
        </label>
        <a href="#" class="text-red-400 hover:underline">Forgot password?</a>
      </div>
      <button type="submit" class="w-full py-2 px-4 h-10 bg-red-400 text-white font-semibold rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 flex justify-center items-center">Sign In</button>
    </form>
    <div class="text-center mt-6">
      <p class="text-gray-600">Don't have an account yet? <a href="#" class="text-red-400 hover:underline">Sign Up</a></p>
    </div>
  </div>
</div>`,
    react: `import React, { useState } from "react";
import { FaApple, FaEye, FaEyeSlash, FaTwitter } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

export default function Signin({ handleClose }) {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white px-8 py-4 md:p-8 rounded-3xl shadow-md max-w-md md:max-w-3xl lg:max-w-2xl xl:max-w-md md:py-16 lg:py-16 xl:p-8 relative">
        <span onClick={handleClose} className="absolute top-4 right-4 hover:cursor-pointer text-slate-400 hover:text-red-400">
          <IoMdCloseCircle className="text-2xl" />
        </span>
        <div className="text-center mb-6 md:mb-12 lg:mb-16 xl:mb-6">
          <img src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1718885963/logonew2_pssiep.png" alt="Logo" className="mx-auto mb-4 w-12 h-12 rounded-full shadow-xl shadow-blue-300" />
          <h2 className="text-2xl font-semibold mb-2 lg:text-3xl xl:text-2xl">Welcome back</h2>
          <p className="text-gray-600 lg:text-lg xl:text-sm">Please enter your details to sign in.</p>
        </div>
        <div className="flex justify-center space-x-2 lg:space-x-2 mb-6 md:mb-12 lg:mb-16 xl:mb-6">
          <button className="flex w-10 md:w-28 h-10 lg:w-36 lg:h-14 xl:w-28 xl:h-10 bg-white shadow-md text-white rounded-full items-center justify-center">
            <span className="sr-only">Sign in with Google</span>
            <FcGoogle />
          </button>
          <button className="flex w-10 md:w-28 h-10 lg:w-36 lg:h-14 xl:w-28 xl:h-10 bg-black text-white shadow-md rounded-full items-center justify-center">
            <span className="sr-only">Sign in with Apple</span>
            <FaApple />
          </button>
          <button className="flex w-10 md:w-28 h-10 lg:w-36 lg:h-14 xl:w-28 xl:h-10 bg-blue-500 shadow-md text-white rounded-full items-center justify-center">
            <span className="sr-only">Sign in with Twitter</span>
            <FaTwitter />
          </button>
        </div>
        <div className="mb-4 md:mb-8 lg:mb-12 xl:mb-4 flex w-full justify-center items-center">
          <div className="h-[0.8px] w-1/2 bg-slate-300"></div>
          <span className="px-3 font-medium text-slate-500">OR</span>
          <div className="h-[0.8px] w-1/2 bg-slate-300"></div>
        </div>
        <form>
          <div className="mb-4 md:mb-8 lg:mb-12 xl:mb-4 text-left">
            <label className="block text-black font-semibold mb-2" htmlFor="email">E-Mail Address</label>
            <input type="email" name="email" autoComplete="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Enter your email..." />
          </div>
          <div className="mb-6 md:mb-12 lg:mb-16 xl:mb-6 text-left font-semibold relative">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Enter Password." type={showPassword ? "text" : "password"} name="password" autoComplete="password" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 mt-3 text-lg">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex items-center justify-between gap-10 mb-4 md:mb-8 lg:mb-12 xl:mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-black font-semibold">Remember me</span>
            </label>
            <a href="#" className="text-red-400 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full py-2 px-4 h-10 bg-red-400 text-white font-semibold rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 flex justify-center items-center">Sign In</button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-600">Don't have an account yet?{" "}
            <a href="#" className="text-red-400 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}`
  }
};
