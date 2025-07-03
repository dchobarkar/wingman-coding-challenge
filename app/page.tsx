import AtGlance from "@/components/dashboard/AtGlance";
import Insights from "@/components/dashboard/Insights";
import Orders from "@/components/dashboard/Orders";

export default function Home() {
  return (
    <>
      <AtGlance />
      <Insights />
      <Orders />
    </>
  );
}
