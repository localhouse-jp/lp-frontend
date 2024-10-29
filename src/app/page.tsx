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
      <Projects />
      <Sponsors />
      <News />
      <Calendar />
    </>
  );
}
