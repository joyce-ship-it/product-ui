import Sidebar from "@/components/Sidebar";
import MobileLayout from "@/components/MobileLayout";
import DesktopLayout from "@/components/DesktopLayout";

export default function Home() {
  return (
    <div>
      <MobileLayout />
      <Sidebar />
      <DesktopLayout />
    </div>
  );
}
