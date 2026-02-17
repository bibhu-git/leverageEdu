import { Search, Phone, User } from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img className="w-32 h-12" src="https://publicassets.leverageedu.com/landing-pages-new/logo-dark.svg" alt="logo" />
                </div>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <a href="#" className="hover:text-blue-600">STUDY GLOBAL</a>
                    <a href="#" className="hover:text-blue-600">WORK GLOBAL</a>
                    <a href="#" className="hover:text-blue-600">LEARN ONLINE</a>
                    <a href="#" className="hover:text-blue-600">LE AI</a>
                    <a href="#" className="hover:text-blue-600">COMMUNITY</a>
                    <a href="#" className="hover:text-blue-600">ABOUT</a>
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-5 text-gray-600">
                    <Search className="w-5 h-5 cursor-pointer hover:text-blue-600" />
                    <Phone className="w-5 h-5 cursor-pointer hover:text-blue-600" />
                    <User className="w-5 h-5 cursor-pointer hover:text-blue-600" />
                </div>
            </div>
        </header>
    );
}