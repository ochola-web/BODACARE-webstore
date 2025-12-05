
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">BODACARE-WebStore</h3>
          <p className="opacity-80">Your trusted store for quality products.</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Follow Us</h4>
          <p className="opacity-80">Facebook • Instagram • Twitter</p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8">
        © {new Date().getFullYear()} Motocycle spare parts-Store. All rights reserved.
      </p>
    </footer>
  );
}
