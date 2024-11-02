import {FC} from "react";

type BackgroundTextProps = {
  className?: string;
}

export const BackgroundText: FC<BackgroundTextProps> = ({className}) => {
  return (
    <div className={`font-open-sans ${className} text-gray-8 text-8xl lg:text-[16rem] font-black flex flex-col lg:leading-[16rem]`}>
      <span>LOCAL</span>
      <span>HOUSE</span>
    </div>
  );
}