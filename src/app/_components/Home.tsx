
import SuperTechEngineerHouse from "#/assets/SuperTechEngineerHouse.svg";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-[80vh]">
      {/* <img src='./assets/SuperTechEngineerHouse.svg' alt="SuperTechEngineerHouse" className="m-auto" /> */}
      {/* <p className="text-xl text-center p-32">Home</p> */}
      <Image src={SuperTechEngineerHouse.src} alt={""} width={512} height={16} className="sm:w-[70%] md:max-w-[520px] md:min-w-[320px] md:m-32 sm:m-16 xs:m-8" />

    </div>
  );
}