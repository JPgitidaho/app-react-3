export default function Services() {
  return (
    <section className="relative w-full bg-gradient-to-r from-white to-blue-50 py-10 px-6 md:px-40 text-center overflow-hidden">
      <h2 className="text-4xl font-semibold text-gray-800 ">Service</h2>
      <p className="text-gray-500  max-w-xl mx-auto mb-20">
        We offer youth with chances for career development in their practice. We also support a wide range of services to ensure client satisfaction
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 px-20 py-10">
        <div className="bg-white/50 px-8 pt-10 rounded-2xl shadow-sm hover:shadow-md transition text-left">
          <img src="/assets/2.services/icon1.png" alt="Icon 1" className="h-1/6 mx-auto m-10" />
          <h3 className=" text-xl font-semibold text-gray-800 mb-6">Send Texts Instantly</h3>
          <p className="text-md text-gray-500 mb-6">
            Financial planning, forecasting and adjusting rapidly with customer demands and budgets.
          </p>
          <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:underline">
            Learn More →
          </a>
        </div>

        <div className="bg-white/50 px-8 pt-10 rounded-2xl shadow-sm hover:shadow-md transition text-left">
          <img src="/assets/2.services/icon2.png" alt="Icon 2" className="h-1/6 mx-auto m-10" />
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Better Organized</h3>
          <p className="text-md text-gray-500 mb-6">
            Latest technology and experienced guidance, trained HR specialists to keep updated.
          </p>
          <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:underline">
            Learn More →
          </a>
        </div>

        <div className="bg-white/50 px-8 pt-10 rounded-2xl shadow-sm hover:shadow-md transition text-left">
          <img src="/assets/2.services/icon3.png" alt="Icon 3" className="h-1/6 mx-auto m-10" />
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Analytical Statistics</h3>
          <p className="text-md text-gray-500 mb-6">
            Messages, real-time reminders, memos, and many more will keep your team in sync.
          </p>
          <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:underline">
            Learn More →
          </a>
        </div>
      </div>

      <img
        src="/assets/2.services/illustration1.png"
        alt="Decorative Illustration"
        className="absolute top-30 left-[230px] -translate-x-1/2 w-[250px]  z-0 pointer-events-none"
      />
    </section>
  );
}
