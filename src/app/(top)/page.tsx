import Calendar from "./_components/Calendar";
import Home from "./_components/Home";
import ImageView from "./_components/ImageView";
import News from "./_components/News";
import Projects from "./_components/Projects";
import Sponsors from "./_components/Sponsors";
import Why from "./_components/Why";

export default function Root() {
  return (
    <>
      <Home />
      <ImageView />
      <Why />
      <div className={"px-4 md:px-32 mx-auto max-w-[1400px] justify-center py-16 flex flex-col gap-8"}>
        <Projects />
        <Sponsors />
        <News />
      </div>
      <Calendar />
    </>
  );
}
