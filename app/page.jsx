import HeroMain from "@components/Layout/HeroMain";

export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <HeroMain />
    </main>
  );
}
