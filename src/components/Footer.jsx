export default function Footer() {
  return (
    <footer className=" text-gray-600 text-sm px-6 md:px-20 pt-16 pb-6 bg-no-repeat bg-center bg-cover"
          style={{
          backgroundImage: "url('/assets/footer/image1.png')"
        }}>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">About</h3>
          <ul className="space-y-1">
            <li>Press</li>
            <li>About</li>
            <li>Services</li>
            <li>Career</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Resources</h3>
          <ul className="space-y-1">
            <li>Terms</li>
            <li>Help</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Team</h3>
          <ul className="space-y-1">
            <li>Developer</li>
            <li>Designer</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Blog</h3>
          <ul className="space-y-1">
            <li>CEO</li>
            <li>Lifestyle</li>
            <li>Article</li>
            <li>Tech</li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Follow Us</h3>
            <div className="flex gap-4 mt-2 text-blue-600">
              <i className="ri-facebook-line" />
              <i className="ri-twitter-line" />
              <i className="ri-linkedin-line" />
              <i className="ri-instagram-line" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Subscribe to our newsletter</h3>
            <div className="flex mt-2 border rounded overflow-hidden">
              <input type="email" placeholder="Email" className="px-4 py-2 w-full outline-none" />
              <button className="px-4 bg-blue-600 text-white">→</button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>All rights reserved © Your Company, 2021</p>
        <p className="flex items-center gap-1">
          Made with <span className="text-red-500">❤</span> by ThemeWagon
        </p>
      </div>
    </footer>
  );
}
