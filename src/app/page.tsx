import RootLayout from "@/app/layout";
import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Footer from "@/app/components/footer";

export const metadata = {
  title: "ProgrammingLive Portfolio",
  description: "ProgrammingLive Portfolio - A showcase of my skills and projects",
};


export default function Page() {
  return (
    <RootLayout>
      <main>
        <div className={`max-w-2xl mx-auto`}>
          <Header/>
          <Hero/>
          <Footer/>
        </div>
      </main>
    </RootLayout>
  );
}