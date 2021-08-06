import "../styles/globals.css";
import { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14">
      <div className="col-span-12 bg-white lg:col-span-3 rounded-2xl ">
        <Sidebar />
      </div>
      <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl ">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
