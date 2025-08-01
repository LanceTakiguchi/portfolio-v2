import LinkedInSvg from './assets/LinkedIn.svg';
import { PriceSpiderSvg, SquareSvg } from './assets/page';
import HotPockets from './assets/page/HotPocketsWTB.png';
import WPSDKPng from './assets/page/SquareWPSDKReference.png';

export default function Home() {
  return (
    <div className="grid sm:grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:gap-16 sm:p-20 font-[family-name:var(--font-space-grotesk)]">
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
    ">
          {/* <!-- Name Section --> */}
          <h2 className="
            text-2xl sm:text-5xl md:text-6xl lg:text-7xl
            font-extrabold
            mb-4
            bg-clip-text text-transparent bg-gradient-to-r from-moonRock to-cosmicTitanium
            leading-tight
        ">
            Work Experience
          </h2>

          <div className="
            mt-10 md:mt-12 lg:mt-16
            p-6 md:p-8
            bg-lunarShadow
            rounded-lg
            border-l-4 border-StellarZenith
            text-stellarZenith
            text-base sm:text-lg md:text-xl
            max-w-2xl
            mx-auto
            flex
            flex-col
            justify-center
            align-items-center
            overflow-hidden
        ">
            <PriceSpiderSvg className="PriceSpiderLogo m-auto fill-white" width={160} height={35} aria-hidden />
            <img src={HotPockets.src} alt="Hot Pockets Where to Buy" />
            <h3 className="relative z-10 mb-2">Frontend End Developer - Implementations </h3>
            <ul className="text-sm flex flex-col justify-start items-start text-left list-disc font-[family-name:var(--font-roboto)]">
              <li>Description: Work on "Where to Buy" widgets - widgets placed on client's website, showing clicks to buy their product online or in person</li>
              <li>Technology: <b >HTML, CSS, JS</b></li>
              <li>From Sept 2018 to March 2021 </li>
              <li>Style based on client website and style guides</li>
              <li>Custom features using <b>JavaScript</b>. Features sold by sales, but not officially supported, created ad hoc</li>
              <li>Clients included <b>Nestle, Procter & Gamble, Mattel, Sony, Samsung, etc.</b></li>
              <li>
                <div>
                  Example Links
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 inline-block ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                  :
                </div>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.goodnes.com/hot-pockets/products/ham-cheese-crispy-crust-frozen-sandwich-20-pk/">Nestle's Hot Pockets</a></li>
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.weber.com/US/en/storefinder/">Weber</a></li>
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.haierappliances.com/find-a-haier-store/">Haier</a></li>
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.milwaukeetool.com/products/0970-20 ">Milwaukee Tools</a></li>
                </ul>
              </li>
            </ul>
            <h3 className="relative z-10 mb-2">Full Stack Developer</h3>
            <ul className="text-sm flex flex-col justify-start items-start text-left list-disc font-[family-name:var(--font-roboto)]">
              <li>Description: Work on Special projects. Main project was a widget builder, allowing anyone to create Where to Buy widgets</li>
              <li>Technology: <b >React JS, Tailwind CSS, next.js</b></li>
              <li>From March 2021 to June 2022 </li>
            </ul>
          </div>
          <div className="
            mt-10 md:mt-12 lg:mt-16
            p-6 md:p-8
            bg-lunarShadow
            rounded-lg
            border-l-4 border-StellarZenith
            text-stellarZenith
            text-base sm:text-lg md:text-xl
            max-w-2xl
            mx-auto
            flex
            flex-col
            justify-center
            align-items-center
            overflow-hidden
        ">
            {/* <!-- Title Section --> */}
            <SquareSvg className="PriceSpiderLogo m-auto fill-white" width={160} height={35} aria-hidden />
            <img src={WPSDKPng.src} alt="Hot Pockets Where to Buy" />
            {/* <HotPocketsWTBPng /> */}
            <h3 className="relative z-10 mb-2">Developer Success Engineer</h3>
            <ul className="text-sm flex flex-col justify-start items-start text-left list-disc font-[family-name:var(--font-roboto)]">
              <li>Description: Help developers create custom Square paymants and integrations using SDK, APIs, and other developer tools</li>
              <li>From July 2022 to March 2025 </li>
              <li>Help small indie developers to enterprise accounts with account managers</li>
              <li>Supporting developers on email, forum, Discord, and Slack</li>
              <li>Work closely with documentation team, sale engineers, account managers, product & engineering</li>
              <li>Help reference documentation. Check their API logs. Attempt to reproduce their issues. Escalate to the respective engineering teams</li>
              <li>
                <div>
                  Example Developer Resources
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 inline-block ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                  :
                </div>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.goodnes.com/hot-pockets/products/ham-cheese-crispy-crust-frozen-sandwich-20-pk/">Nestle's Hot Pockets</a></li>
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.weber.com/US/en/storefinder/">Weber</a></li>
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.haierappliances.com/find-a-haier-store/">Haier</a></li>
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.milwaukeetool.com/products/0970-20 ">Milwaukee Tools</a></li>
                </ul>
              </li>
              <li>
                <div>
                  Example Links
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 inline-block ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                  :
                </div>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.goodnes.com/hot-pockets/products/ham-cheese-crispy-crust-frozen-sandwich-20-pk/">Nestle's Hot Pockets</a></li>
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.weber.com/US/en/storefinder/">Weber</a></li>
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.haierappliances.com/find-a-haier-store/">Haier</a></li>
                  <li><a className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href="https://www.milwaukeetool.com/products/0970-20 ">Milwaukee Tools</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="p-8 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/lancetakiguchi"
          target="_blank"
          rel="LinkedIn"
        >
          <LinkedInSvg alt="PriceSpider" width={16} height={16} aria-hidden />
        </a>
      </footer>
    </div>
  );
}
