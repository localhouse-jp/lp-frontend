import TitlePin from "@/app/_components/TitlePin";

export default function Calendar() {
  return (
    <div className="mx-auto max-w-[1400px] pt-1 pb-32 justify-center my-16" id="calendar">

      <div className="my-16 md:px-32 sm:w-full md:h-[720px] h-[420px]">
        <div className="flex md:ml-4">
          <TitlePin title="Calendar" />
        </div>
        <p className="md:text-2xl text-xl px-4 py-4 font-bold">カレンダー</p>

        <iframe src="https://calendar.google.com/calendar/embed?src=classroom108557204569355481911%40group.calendar.google.com&ctz=Asia%2FTokyo" className="w-full h-full border-none rounded-2xl md:p-4 bg-[#f0f4f9]"></iframe>
      </div>
    </div>
  );
}