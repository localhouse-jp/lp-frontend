export default function Calendar() {
  return (
    <div className="bg-[#f0f4f9] py-32">
      <div className="m-auto md:w-[80%] sm:w-[90%] md:h-[820px] sm:h-[420px]">
        <p className="text-3xl px-4 py-8 font-bold">カレンダー</p>
        <iframe src="https://calendar.google.com/calendar/embed?src=classroom108557204569355481911%40group.calendar.google.com&ctz=Asia%2FTokyo" className="w-full h-full border-none"></iframe>
      </div>
    </div>
  );
}