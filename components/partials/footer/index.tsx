import {CopyRightSVG} from "assets/images";
import Image from "next/image";

export default function PageFooter() {
  return (
    <div className="page-footer fixed bottom-0 min-w-full dark:bg-main-navbar bg-main-navbar h-8">
      <hr></hr>
      <div className="m-1 flex justify-center flex-wrap mr-2 space-x-2">
        <span> copyright </span>
        <Image src={CopyRightSVG} width={12} height={12} alt="copyright" />
        <span>{new Date().getFullYear()}</span>
        <span>{`by zaku33`}</span>
      </div>
    </div>
  );
}
