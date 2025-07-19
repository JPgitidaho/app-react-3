export default function Home() {
  return (
    <>
<section className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gradient-to-r from-pink-100/50 to-blue-100/50 overflow-hidden pt-0 -mt-35">


        <div className="relative h-full w-full col-span-1 z-10 flex items-center">
          <div className="w-full px-6 md:px-0 md:pl-[300px] space-y-6 text-center md:text-left">
<h1 className="text-2xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-[#A18CD1] to-[#6C63FF] bg-clip-text text-transparent">
  Clone Figma page
</h1>

            <h2 className="text-gray-600 text-xl md:text-3xl">
              crafted by ThemeWagon
            </h2>
            <p className="text-gray-600 text-sm md:text-xs">
              ThemeWagon offers an wide array of category-oriented <br className="hidden md:block" />
              Free and Premium Bootstrap HTML Templates and Themes.
            </p>
            <button className="bg-gradient-to-r from-[#A18CD1] to-[#6C63FF] text-white px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition">
              Check Demo
            </button>
          </div>
        </div>
<div className="relative h-full w-full z-10 overflow-hidden">
  <img
    src="/assets/1.home/illustration1.png"
    alt="Illustration"
    className="absolute top-0 left-0 w-full h-full object-cover md:object-contain"
  />
</div>



      </section>

      <section className="relative w-full mt-10 md:-mt-20 flex flex-wrap justify-center items-center gap-6 md:gap-10 px-4 md:mx-10 z-30">
        <img src="/assets/1.home/google.png" alt="Google" className="h-6 md:h-8 hover:scale-105 transition-transform duration-300" />
        <img src="/assets/1.home/netflix.png" alt="Netflix" className="h-6 md:h-8 hover:scale-105 transition-transform duration-300" />
        <img src="/assets/1.home/microsoft.png" alt="Microsoft" className="h-6 md:h-8 hover:scale-105 transition-transform duration-300" />
        <img src="/assets/1.home/mailbuster.png" alt="MailBluster" className="h-6 md:h-8 hover:scale-105 transition-transform duration-300" />
        <img src="/assets/1.home/themewagon.png" alt="ThemeWagon" className="h-6 md:h-8 hover:scale-105 transition-transform duration-300" />
      </section>
    </>
  );
}
