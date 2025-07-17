export default function Footer() {
  return (
    <footer
      className="text-gray-600 text-sm px-6 md:px-20 pt-30 pb-6 bg-no-repeat bg-center bg-cover bg-gradient-to-r from-pink-100/50 to-blue-100/50"

    >
<div className="grid grid-cols-2 md:grid-cols-6 gap-10 text-center">
  <div className="flex flex-col items-center">
    <h3 className="font-semibold mb-3 text-gray-800">About</h3>
    <ul className="space-y-1">
      <li>Press</li>
      <li>About</li>
      <li>Services</li>
      <li>Career</li>
    </ul>
  </div>

  <div className="flex flex-col items-center">
    <h3 className="font-semibold mb-3 text-gray-800">Resources</h3>
    <ul className="space-y-1">
      <li>Terms</li>
      <li>Help</li>
      <li>Privacy</li>
    </ul>
  </div>

  <div className="flex flex-col items-center">
    <h3 className="font-semibold mb-3 text-gray-800">Team</h3>
    <ul className="space-y-1">
      <li>Developer</li>
      <li>Designer</li>
    </ul>
  </div>

  <div className="flex flex-col items-center">
    <h3 className="font-semibold mb-3 text-gray-800">Blog</h3>
    <ul className="space-y-1">
      <li>CEO</li>
      <li>Lifestyle</li>
      <li>Article</li>
      <li>Tech</li>
    </ul>
  </div>

  <div className="col-span-2 flex flex-col items-center space-y-6">
    <div className="text-center">
      <h3 className="font-semibold text-gray-800">Follow Us</h3>
      <div className="flex gap-4 mt-2 text-blue-600 text-lg justify-center">
        <i className="ri-facebook-line" />
        <i className="ri-twitter-line" />
        <i className="ri-linkedin-line" />
        <i className="ri-instagram-line" />
      </div>
    </div>

    <div className="text-center w-full max-w-md">
      <h3 className="font-semibold text-gray-800">
        Subscribe to our newsletter
      </h3>
      <div className="flex flex-col sm:flex-row mt-2 border rounded overflow-hidden">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 w-full outline-none text-center"
        />
        <button className="px-6 py-2 bg-blue-600 text-white whitespace-nowrap">
          →
        </button>
      </div>
    </div>
  </div>
</div>


      <div className="border-t border-gray-200 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs gap-2 md:gap-0">
        <p className="text-center">All rights reserved © Your Company, 2021</p>
        <p className="flex items-center gap-1 text-center">
          Made with <span className="text-red-500">❤</span> by ThemeWagon
        </p>
      </div>
    </footer>
  );
}
