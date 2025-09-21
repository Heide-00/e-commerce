import { Facebook, Instagram, Twitter } from "lucide-react";

const columns = [
  { title: "Company Info", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
  { title: "Legal", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
  { title: "Features", links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"] },
  { title: "Resources", links: ["IOS & Android", "Watch a Demo", "Customers", "API"] },
];

export default function FooterContent() {
  return (
    <div className="flex flex-col gap-10 px-4 py-10 bg-gray-100 md:px-8 lg:px-16">
     <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b pb-4">
        <span className="text-xl font-bold text-gray-800">Bandage</span>
        <div className="flex gap-4">
          <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-700" />
          <Instagram className="w-5 h-5 text-blue-600 hover:text-pink-500" />
          <Twitter className="w-5 h-5 text-blue-600 hover:text-blue-400" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {columns.map((col, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold text-gray-800">{col.title}</h4>
              {col.links.map((link, i) => (
                <a key={i} href="#" className="text-sm text-gray-500 hover:text-gray-700">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

   <div className="flex flex-col gap-3 w-full">
  <h4 className="text-sm font-semibold text-gray-800">Get in Touch</h4>

  <div className="flex w-full">
    <input
      type="email"
      placeholder="Your Email"
      className="px-3 py-2 border border-r-0 rounded-l text-sm w-full"
    />
    <button
      className="bg-blue-600 text-white text-sm px-4 py-2 rounded-r hover:bg-blue-700"
    >
      Subscribe
    </button>
  </div>

  <p className="text-xs text-gray-500">Lore imp sum dolor Amit.</p>
</div>
      </div>

      <div className="text-center text-xs text-gray-500 border-t pt-4">
        Made With Love By Finland All Right Reserved
      </div>
    </div>
  );
}
