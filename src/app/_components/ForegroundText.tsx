import {FC} from "react";

type Props ={
  className?: string;
}

export const ForegroundText:FC<Props> = ({ className }) => {
  return <div className={`${className} flex flex-col text-4xl lg:text-[4rem] font-bold leading-10 lg:leading-[6rem]`}>
    <span>Super</span>
    <span>Tech Engineer</span>
    <span>House</span>
  </div>
}
