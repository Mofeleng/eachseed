const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      {/* Navigation Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#services" className="hover:underline">
          Services
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <a href="#privacy" className="hover:underline">
          Privacy Policy
        </a>
      </div>

      {/* Copyright Information */}
      <div className="text-center text-sm mb-4">
        <p>&copy; 2025 Eachseed. All rights reserved.</p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img
            src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png"
            alt="Facebook"
          />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img
            src="https://img.icons8.com/ios-filled/30/ffffff/twitter.png"
            alt="Twitter"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img
            src="https://img.icons8.com/ios-filled/30/ffffff/instagram-new.png"
            alt="Instagram"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img
            src="https://img.icons8.com/ios-filled/30/ffffff/linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
