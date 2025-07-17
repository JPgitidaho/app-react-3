export default function Services() {
  return (
    <section className="relative w-full bg-gradient-to-r from-white to-blue-50 py-16 px-6 md:px-40 text-center overflow-hidden">
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">Service</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-16">
        We offer youth with chances for career development in their practice. We also support a wide range of services to ensure client satisfaction.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 md:mx-20 md:mt-20 gap-10 relative z-10">
        {[
          {
            icon: "/assets/2.services/icon1.png",
            title: "Send Texts Instantly",
            desc: "Financial planning, forecasting and adjusting rapidly with customer demands and budgets."
          },
          {
            icon: "/assets/2.services/icon2.png",
            title: "Better Organized",
            desc: "Latest technology and experienced guidance, trained HR specialists to keep updated."
          },
          {
            icon: "/assets/2.services/icon3.png",
            title: "Analytical Statistics",
            desc: "Messages, real-time reminders, memos, and many more will keep your team in sync."
          }
        ].map((service, index) => (
          <div key={index} className="bg-white/50 px-6 py-10 rounded-2xl shadow-sm hover:shadow-md transition text-left">
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-md text-gray-500 mb-6">{service.desc}</p>
            <a
              href="#"
              className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:underline"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>

      <img
        src="/assets/2.services/illustration1.png"
        alt="Decorative Illustration"
        className="absolute top-30 left-[230px] -translate-x-1/2 w-[250px]  z-0 pointer-events-none"
      />
    </section>
  );
}
