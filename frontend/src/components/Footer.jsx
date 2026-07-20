import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    
                    <div>
                        <h1 className="text-2xl font-bold mb-4">
                            Job<span className="text-[#F83002]">Portal</span>
                        </h1>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Find your dream job with us. We connect talented professionals with the best companies.
                        </p>
                        <div className="flex gap-3 mt-5">
                            <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-gray-300 hover:bg-[#6A38C2] hover:border-[#6A38C2] hover:text-white transition-colors">
                                <FaFacebook className="h-4 w-4" />
                            </a>
                            <a href="#" aria-label="Twitter" className="p-2 rounded-full border border-gray-300 hover:bg-[#6A38C2] hover:border-[#6A38C2] hover:text-white transition-colors">
                                <FaTwitter className="h-4 w-4" />
                            </a>
                            <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-gray-300 hover:bg-[#6A38C2] hover:border-[#6A38C2] hover:text-white transition-colors">
                                <FaInstagram className="h-4 w-4" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border border-gray-300 hover:bg-[#6A38C2] hover:border-[#6A38C2] hover:text-white transition-colors">
                                <FaLinkedin className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="/" className="hover:text-[#6A38C2] transition-colors">Home</a></li>
                            <li><a href="/jobs" className="hover:text-[#6A38C2] transition-colors">Jobs</a></li>
                            <li><a href="/browse" className="hover:text-[#6A38C2] transition-colors">Browse</a></li>
                            <li><a href="/about" className="hover:text-[#6A38C2] transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">For Job Seekers</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[#6A38C2] transition-colors">Browse Jobs</a></li>
                            <li><a href="#" className="hover:text-[#6A38C2] transition-colors">My Applications</a></li>
                            <li><a href="#" className="hover:text-[#6A38C2] transition-colors">Career Advice</a></li>
                            <li><a href="#" className="hover:text-[#6A38C2] transition-colors">Resume Builder</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-[#6A38C2]" />
                                Navi Mumbai Kharghar, Maharashtra, India
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-[#6A38C2]" />
                                support@jobportal.com
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-[#6A38C2]" />
                                +91 9146710051
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} JobPortal. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-[#6A38C2] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#6A38C2] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer