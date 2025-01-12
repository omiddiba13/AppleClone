import React, { useState } from "react";
import { images } from "../utils/index";
import { Support, SupportOption } from "../constants/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// ثبت پلاگین ScrollTrigger
gsap.registerPlugin(ScrollTrigger); // اگر SupportData و Support یکی هستند

// در صورت نیاز به `SupportData`
export const SupportS = () => {
  const SupportData = Support;
  const [searchTerm, setSearchTerm] = useState("");
  useGSAP(() => {
    // انیمیشن برای بنر
    gsap.fromTo(
      ".as-banner-image",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".as-banner-image",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );

    // انیمیشن برای بخش SupportData
    gsap.fromTo(
      "#itemsSupport a",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#itemsSupport",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );

    // انیمیشن برای بخش Options
    gsap.fromTo(
      "#options a",
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.25,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: "#options",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );

    // انیمیشن برای بخش جستجو (Search)
    gsap.fromTo(
      ".search-section",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 1,
        scrollTrigger: {
          trigger: ".search-section",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );

    // انیمیشن برای دکمه Start Now
    gsap.fromTo(
      ".start-btn",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 1.5,
        scrollTrigger: {
          trigger: ".start-btn",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );

    // انیمیشن برای YouTube section
    gsap.fromTo(
      ".youtube-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 2,
        scrollTrigger: {
          trigger: ".youtube-section",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );

    // انیمیشن برای my-support
    gsap.fromTo(
      ".my-support",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".my-support",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      },
    );

    // انیمیشن برای Support Section
    gsap.fromTo(
      ".support-section > div", // تغییر selector برای اعمال انیمیشن به هر دیو داخلی
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".support-section",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      },
    );
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Search term:", searchTerm);
    }
  };

  return (
    <section className="my-10 sm:my-12 md:my-14 lg:my-24 xl:my-36 flex flex-col items-center justify-center">
      {/* بنر */}
      <div
        className="as-banner-image w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.supportMin})`,
        }}></div>

      <div className="mt-16 md:mt-20 lg:mt-24 xl:mt-28 text-center">
        <h1 className="font-bold text-3xl sm:text-4xl text-white">
          Apple Support
        </h1>

        {/* Support Items */}
        <div
          id="itemsSupport"
          className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {SupportData.map((item) => (
            <a
              key={item.id}
              href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-zinc flex flex-col items-center justify-center text-center p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 hover:text-gray-200">
              <img
                src={item.img}
                alt={item.title}
                className="mb-3 max-w-[50px] max-h-[50px]"
              />
              <h3 className="text-lg font-medium text-zinc-700">
                {item.title}
              </h3>
            </a>
          ))}
        </div>

        {/* Options Section */}
        <div
          id="options"
          className="mt-16 md:mt-20 flex flex-wrap justify-center gap-4 md:gap-6">
          {SupportOption.map((item) => (
            <a
              key={item.id}
              href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex flex-col items-center justify-center text-center w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 lg:w-40 lg:h-48 p-4 rounded-lg bg-gray-300 hover:bg-zinc-200 transition-all transform hover:scale-110 hover:shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-3 object-contain"
              />
              <h3 className="text-sm md:text-md lg:text-lg font-medium text-zinc-700">
                {item.title}
              </h3>
            </a>
          ))}
        </div>

        {/* Search Section */}
        <div className="mt-12 md:mt-16 w-full px-4 search-section">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center text-black">
            Search for more topics
          </h1>
          <form
            onSubmit={handleSearchSubmit}
            className="flex justify-center items-center mt-5 w-full">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-4 pr-12 border-2 text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                className="absolute start-btn right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none">
                <img src={images.searchImg} className="w-5 h-5" alt="search" />
              </button>
            </div>
          </form>
        </div>

        {/* YouTube Section */}
        <div className="bg-zinc p-6 md:p-8 rounded-lg shadow-2xl mt-12 md:mt-16 max-w-2xl mx-auto youtube-section">
          <h1 className="text-2xl md:text-3xl font-semibold text-white text-center mb-4 md:mb-6">
            Apple Support on YouTube
          </h1>
          <p className="text-white text-center mb-6 md:mb-8">
            Check out our official YouTube channel to get the most out of the
            latest features, devices, and services.
          </p>
          <a
            href="https://www.youtube.com/user/AppleSupport"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-blue-500 hover:underline text-lg font-medium mb-6 md:mb-8">
            Visit Apple Support on YouTube
          </a>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={images.supportAppleYoutube}
              alt="Apple Support YouTube"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* APP support */}
      <div className="my-12 md:my-16 flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 md:px-6 py-8 my-support">
        {/* دیو اول - بزرگ‌تر */}
        <div className="md:w-7/12 bg-zinc text-white p-6 rounded-lg shadow-xl flex flex-col justify-between">
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">
              Get Support
            </h2>
            <p className="text-md md:text-lg opacity-80">
              Give us a few details and we’ll offer the best solution. Connect
              by phone, chat, email, and more.
            </p>
          </div>

          {/* بخش دکمه که باید وسط قرار بگیرد */}
          <div className="mt-auto mb-4 flex justify-center">
            <button className=" start-btn bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-600 transition-all duration-300">
              Start Now
            </button>
          </div>

          <div>
            <img
              src={images.supportGetSupport}
              alt="Support"
              className="w-full object-cover rounded-lg "
            />
          </div>
        </div>

        {/* دیو دوم - کوچک‌تر */}
        <div className="md:w-5/12 bg-zinc text-white rounded-lg shadow-xl flex flex-col justify-between">
          <div className="mb-2 p-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Apple Support App
            </h2>
            <p className="text-md md:text-lg opacity-80">
              Get help for all of your Apple products in one place, or connect
              with an expert.
            </p>
          </div>
          <div className="mt-auto flex flex-col justify-center items-center gap-2">
            <a
              href=""
              className="bg-gray-800 start-btn text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-600 transition-all duration-300">
              Download
            </a>
            <a href="" className="text-white text-md hover:underline">
              Get to know the Apple Support app
            </a>
          </div>
          <div className="flex justify-center p-4">
            <img
              src={images.SupportAppIphone}
              alt="Apple Support App"
              className="max-w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
      {/* more support */}
      <div className="mt-12 md:mt-16 flex flex-col gap-8 items-center max-w-screen-lg mx-auto px-4 support-section">
        {/* دیو اول */}
        <div className="w-full flex flex-col items-center bg-gray-300 rounded-2xl p-6 min-h-[200px]">
          <h2 className="text-xl md:text-2xl font-semibold">My Support</h2>
          <p className="mt-2 text-center text-sm md:text-base">
            Get warranty information, check your coverage status, or look up an
            existing repair.
          </p>
          <a
            href="#"
            className="text-blue-500 mt-4 inline-block hover:underline text-center">
            Sign in with your Apple Account
          </a>
        </div>

        {/* دیو دوم */}
        <div className="w-full flex flex-col items-center bg-gray-300 rounded-2xl p-6 min-h-[200px]">
          <h2 className="text-xl md:text-2xl font-semibold">AppleCare+</h2>
          <p className="mt-2 text-center text-sm md:text-base">
            Get unlimited repairs for accidental damage protection, 24/7
            priority access to Apple experts, and more.
          </p>
          <a
            href="#"
            className="text-blue-500 mt-4 inline-block hover:underline text-center">
            Learn more
          </a>
          <div className="flex justify-center mt-4">
            <img
              src={images.SupportAppleCare}
              alt=""
              className="max-w-full md:w-3/4 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* دیو سوم */}
        <div className="w-full flex flex-col items-center bg-gray-300 rounded-2xl p-6 min-h-[200px]">
          <h2 className="text-xl md:text-2xl font-semibold">
            Designing for longevity
          </h2>
          <p className="mt-2 text-center text-sm md:text-base">
            At Apple, we are always working to create the best experience for
            our customers, which is why we design products that last. Designing
            for longevity is a company-wide effort, informing our earliest
            decisions long before the first prototype is built and guided by
            historical customer-use data and predictions on future usage. It
            requires striking a balance between durability and repairability
            while not compromising on safety, security, and privacy.
          </p>
          <p className="mt-2 text-center text-sm md:text-base">
            Learn more about Apple's approach to designing for longevity, which
            includes access to safe and reliable repairs.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              View (PDF)
            </a>
          </p>
        </div>

        {/* دیو چهارم (با نسبت فلکسی 7 به 5 در حالت موبایل و تبلت) */}
        <div className="w-full flex flex-col md:flex-row justify-center gap-6">
          {/* قسمت اول (7) */}
          <div className="md:w-7/12 flex flex-col items-center bg-gray-300 rounded-2xl p-6 min-h-[200px]">
            <h2 className="text-xl md:text-2xl font-semibold">
              Beware of counterfeit parts
            </h2>
            <p className="mt-2 text-center text-sm md:text-base">
              Some counterfeit and third party power adapters and batteries may
              not be designed properly and could result in safety issues. To
              ensure you receive a genuine Apple battery during a battery
              replacement, we recommend visiting an Apple Store or Apple
              Authorized Service Provider. If you need a replacement adapter to
              charge your Apple device, we recommend getting an Apple power
              adapter. Also non-genuine replacement displays may have
              compromised visual quality and may fail to work correctly.
              Apple-certified screen repairs are performed by trusted experts
              who use genuine Apple parts.
            </p>
          </div>

          {/* قسمت دوم (5) */}
          <div className="md:w-5/12 flex flex-col items-center bg-gray-300 rounded-2xl p-6 min-h-[200px]">
            <h2 className="text-xl md:text-2xl font-semibold">
              Be aware of gift card scams
            </h2>
            <p className="mt-2 text-center text-sm md:text-base">
              Be aware of scams involving Apple Gift Cards, App Store & iTunes
              Gift Cards, and Apple Store Gift Cards.
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline text-center">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
