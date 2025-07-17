export default function Home() {
  return (
    <>
      <section className="relative grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-80px)] bg-gradient-to-r from-pink-100/50 to-blue-100/50 overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-transparent"
          style={{
            backgroundImage: "url('/assets/1.home/background.png')"
          }}
        ></div>

        <div className="relative h-full w-full col-span-1 z-10">
          <div className="absolute top-1/4 left-[300px] w-full space-y-6">
            <h1 className="text-xl md:text-4xl font-bold text-gray-800 leading-tight">
              Bootstrap 5 theme
            </h1>
            <h2 className="text-gray-600 text-3xl">crafted by ThemeWagon</h2>
            <p className="text-gray-600 text-xs">
              ThemeWagon offers an wide array of category-oriented <br />
              Free and Premium Bootstrap HTML Templates and Themes.
            </p>
            <button className="bg-gradient-to-r from-[#A18CD1] to-[#6C63FF] text-white px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition">
              Check Demo
            </button>
          </div>
        </div>

        <div
          className="relative h-full w-full bg-no-repeat bg-contain z-10"
          style={{
            backgroundImage: "url('/assets/1.home/illustration1.png')"
          }}
        ></div>
      </section>

      <section className="absolute w-full top-130 left-10 flex flex-wrap justify-center items-center gap-10 mb-10 z-30">
        <img src="/assets/1.home/google.png" alt="Google" className="h-6 md:h-8 hover:scale-105 transition-transform duration-300" />
        <img src="/assets/1.home/netflix.png" alt="Netflix" className="h-6 md:h-8 hover:scale-105 transition-transform duration-300" />
        <img src="/assets/1.home/microsoft.png" alt="Microsoft" className="h-6 md:h-8 hover:scale-105 transition-transform duration-300" />
        <img src="/assets/1.home/mailbuster.png" alt="MailBluster" className="h-6 md:h-8 hover:scale-105 transition-transform duration-300" />
        <img src="/assets/1.home/themewagon.png" alt="ThemeWagon" className="h-6 md:h-8 hover:scale-105 transition-transform duration-300" />
      </section>
    </>
  );
}
