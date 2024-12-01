import Image from "next/image";

function Hero() {
  return (
    <section className="min-h-[300px] justify-center px-6">
      <div className="text-center flex flex-col gap-4 border rounded py-8 px-6">
        <Image
          src="/assets/images/pp.jpg"
          alt="Mahatma Mahardhika"
          width="200"
          height="200"
          className="rounded-full mx-auto"
          priority
        />
        <h1 className="text-lg font-bold">Software Engineer</h1>
        <p className="text-sm max-w-[500px] mx-auto leading-relaxed">
          With over a decade of coding experience, I have had the privilege of
          solving complex problems and delivering impactful solutions. My journey
          in technology has led me to develop robust ERP, HRIS, and POS systems,
          combining technical expertise with a deep understanding of user needs.
        </p>
        <p className="text-sm max-w-[500px] mx-auto leading-relaxed">
          Currently, I am channeling my passion for open source by nurturing
          innovative projects through ProgrammingLive, where I aim to contribute
          tools and knowledge that empower developers and businesses alike.
        </p>
        <p className="text-sm max-w-[500px] mx-auto leading-relaxed">
          Need help, or just want to chat? Please don&apos;t  hesitate to:
          <a
            href="https://linktr.ee/programinglive"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            get in touch
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Hero;