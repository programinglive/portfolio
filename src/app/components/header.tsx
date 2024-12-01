import DarkButton from "@/app/components/dark_button";

export default function Header() {
  return (
      <header className="">
      <div className="container mx-auto p-6 flex justify-between">
        <div className="text-left">
          <h1 className="text-2xl font-bold">Mahatma Mahardhika</h1>
          <p className="text-lg">
            Founder on <a className="dark:text-white text-[#0A2540]" href="https://programinglive.com">ProgramingLive</a>
          </p>
        </div>
        <DarkButton />
      </div>
    </header>
  );
}