import { Link, NavLink } from "react-router-dom";
import { images } from "../assets/image";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer
            className="relative w-full text-white overflow-hidden selection:bg-blue-500/15 sm:min-h-[calc(100vh-500px)] flex flex-col justify-between" style={{
                background:
                    "radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)",
            }}>
            <div className="absolute -left-100 -top-32 w-1/2 h-[60vh] opacity-10 bg-image bg-left bg-contain pointer-events-none">
            </div>

            <div className="relative z-10 flex-1 flex items-center py-10">
                <div className="max-w-7xl mx-auto w-full px-4">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
                        <div className="max-w-55.75">
                            <Link to="/" className="flex items-center justify-start">
                                <img className="w-40" src={images.navbarLogo} alt="logo" />
                            </Link>
                            <p className="text-[#B7D8FF] text-base font-medium mt-4">
                                Empowering Precision, One Data Point at a Time.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#6994D4] text-xl font-semibold mb-4">
                                Quick Links
                            </h3>

                            <div className="flex justify-start gap-10">
                                <ul className="space-y-2 text-[#CBD5E1]">
                                    <li><NavLink to="/privacy-policy" className={({ isActive }) => `hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-[#CBD5E1]'}`}>Privacy Policy</NavLink></li>
                                    <li><NavLink to="/terms-condition" className={({ isActive }) => `hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-[#CBD5E1]'}`}>Terms & Condition</NavLink></li>
                                </ul>

                                <ul className="space-y-2 text-[#CBD5E1]">
                                    <li><NavLink to="/contact-us" className={({ isActive }) => `hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-[#CBD5E1]'}`}>Contact Us</NavLink></li>
                                    <li><NavLink to="/help-support" className={({ isActive }) => `hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-[#CBD5E1]'}`}>Help & Support</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#6994D4] text-xl font-semibold mb-4">
                                Contact Information
                            </h3>

                            <div className="space-y-3 text-[#CBD5E1]">
                                <div className="flex items-center gap-2">
                                    <Mail size={18} />
                                    <p>ahasanhabib2912@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone size={18} />
                                    <p>+1-234-567-8901</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[#6994D4] text-xl font-semibold mb-4">
                                Follow Us
                            </h3>
                            <div className="flex gap-3 items-center">
                                <Link to='/'>
                                    <img className="w-7 h-7" src={images.facebookIcon} alt="facebookIcon" />
                                </Link>
                                <Link to='/'>
                                    <img className="w-7 h-7" src={images.instagramIcon} alt="instagramIcon" />
                                </Link>
                                <Link to='/'>
                                    <img className="w-7 h-7" src={images.youtubeIcon} alt="youtubeIcon" />
                                </Link>
                                <Link to='/'>
                                    <img className="w-7 h-7" src={images.linkedinIcon} alt="linkedinIcon" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="relative z-10 border-t border-white/10 py-5 text-sm text-[#94A3B8] text-center">
                © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;