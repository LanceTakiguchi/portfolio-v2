// import Image from 'next/image'; // If you're using Next.js Image component for optimization
import LinkedInSvg from './assets/LinkedIn.svg';
import SolarSystem from './assets/solarsystem.svg';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-space-grotesk)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="
        bg-gradient-to-r from-midnightNebula to-midnightNebula-900
        text-white
        p-8 md:p-12 lg:p-16
        rounded-xl
        shadow-2xl
        max-w-4xl
        w-full
        text-center
        border border-gray-700
        transform transition-all duration-500 ease-in-out
        hover:scale-[1.01] hover:shadow-lg
    ">
          {/* <!-- Name Section --> */}
          <h1 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-extrabold
            mb-4
            bg-clip-text text-transparent bg-gradient-to-r from-moonRock to-cosmicTitanium
            leading-tight
        ">
            Lance Takiguchi
          </h1>

          {/* <!-- Title Section --> */}
          <p className="
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
            font-semibold
            text-stellarZenith
            mb-8
            tracking-wide
        ">
            Frontend Web Developer
          </p>

          {/* <!-- Quote Section (Job 9:9 ESV) --> */}
          <div className="
            mt-10 md:mt-12 lg:mt-16
            p-6 md:p-8
            bg-lunarShadow
            rounded-lg
            border-l-4 border-StellarZenith
            italic
            text-stellarZenith
            text-base sm:text-lg md:text-xl
            max-w-2xl
            mx-auto
            relative
            overflow-hidden
        ">
            <p className="relative z-10">
              "who made the Bear and Orion,
            </p>
            <p className="relative z-10">
              the Pleiades and the chambers of the south"
            </p>
            <p className="text-right mt-4 text-sm sm:text-base text-moonRock relative z-10">
              — Job 9:9 (ESV)
            </p>
            {/* <!-- Subtle background effect for the quote --> */}
            <div className="absolute inset-0 bg-gradient-to-br from-lunarShadow-100 to-lunarShadow-900 opacity-10 rounded-lg"></div>
          </div>

          {/* <!-- Optional: Add a subtle call to action or navigation hint --> */}
          <div className="mt-12 text-moonRock text-sm">
            <p>Explore my work below &darr;</p>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/lancetakiguchi"
          target="_blank"
          rel=""
        >
          <LinkedInSvg width={16} height={16} aria-hidden />
        </a>
                <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/lancetakiguchi"
          target="_blank"
          rel=""
        >
          <SolarSystem width={160} height={160} aria-hidden />
        </a>
      </footer>
    </div>
  );
}
