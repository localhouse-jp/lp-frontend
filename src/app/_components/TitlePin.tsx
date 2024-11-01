export default function TitlePin({ title }: { title: string }) {
  return <div className="flex bg-gradient-to-r from-white to-[#FFC7C7] rounded-full py-2 px-4">
    <span className="bg-red-800 w-2 h-2 my-auto mx-2 rounded-full" />
    <p className="font-bold text-red-800">{title}</p>
  </div>
}