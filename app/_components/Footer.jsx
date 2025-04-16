import { motion } from "framer-motion";
import { GitHub, LinkedIn, Twitter } from "lucide-react"; // Icons for social media

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#EAF0FF] to-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-semibold text-gray-900">Get In Touch</h2>
          <p className="mt-2 text-gray-600">
            Feel free to reach out via email or phone, or connect with me on social media.
          </p>
          <div className="mt-4">
            <p className="text-gray-600">Email: <a href="mailto:bharath.rajashekar3@gmail.com" className="text-[#274DF0]">bharath.rajashekar3@gmail.com</a></p>
            <p className="text-gray-600">Phone: <a href="tel:+919686698498" className="text-[#274DF0]">+91 96866 98498</a></p>
          </div>
        </motion.div>

        {/* Social Media Links Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900">Follow Me</h3>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://github.com/Bharathco" target="_blank" rel="noopener noreferrer">
              <GitHub className="w-8 h-8 text-[#274DF0] hover:text-[#274DF0] transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/bharath-rajashekar-69b2591a7" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="w-8 h-8 text-[#274DF0] hover:text-[#274DF0] transition-all duration-300" />
            </a>
            <a href="https://twitter.com/Bharath_raj_naik" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-8 h-8 text-[#274DF0] hover:text-[#274DF0] transition-all duration-300" />
            </a>
          </div>
        </motion.div>

        {/* Terms & Privacy Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10"
        >
          <p className="text-sm text-gray-600">
            © 2025 Bharath Rajashekar. All rights reserved. <br />
            <Link href="/terms" className="text-[#274DF0] hover:text-[#1E40AF] transition-all duration-300">Terms of Service</Link> | <Link href="/privacy" className="text-[#274DF0] hover:text-[#1E40AF] transition-all duration-300">Privacy Policy</Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
