import { Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-gray-200 text-xs sm:text-sm m-0 p-0">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-16 py-2 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
       
       <div className="text-center md:text-left leading-none">
          Follow Us and get a chance to win 80% off<span className="font-semibold text-white"></span>
        </div>

      <div className="flex items-center gap-2">
          <span>Follow Us:</span>
          <Instagram className="w-4 h-4 cursor-pointer hover:text-white transition" />
          <Youtube className="w-4 h-4 cursor-pointer hover:text-white transition" />
          <Facebook className="w-4 h-4 cursor-pointer hover:text-white transition" />
          <Twitter className="w-4 h-4 cursor-pointer hover:text-white transition" />
        </div>
      </div>
    </div>
  );
}