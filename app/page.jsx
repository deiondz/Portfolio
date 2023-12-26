import HeroMain from "@components/Layout/HeroMain";
import About from "@components/Layout/About";
import Work from "@components/Layout/Work";
import Time from "@components/Layout/Time";

export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen py-10 pb-28 md:pb-10">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center px-4 ">
          <HeroMain />
          <About />
          <Work />
          <Time />
        </div>
      </div>
    </main>
  );
}
