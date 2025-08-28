import BottomText from "@/components/home/BottomText";
import MainText from "@/components/home/MainText";
import Video from "@/components/home/Video";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="h-full w-full fixed">
        <Video/>
      </div>
      <div className="h-screen w-full relative flex flex-col justify-between pb-3 overflow-hidden">
        <MainText/>
        <BottomText/>
      </div>
    </div>
  );
}
