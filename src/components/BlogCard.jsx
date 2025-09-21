import { Timer, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ image, title, tags, date, comments, description }) {
  return (
    <div className="flex flex-col w-full max-w-sm bg-white rounded-lg shadow overflow-hidden">
      
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">NEW</span>
      </div>

      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>

        <div className="flex gap-2 flex-wrap text-xs text-gray-500">
          {tags.map((tag, index) => (
            <span key={index} className={tag === "Google" ? "text-blue-600 font-medium" : ""}>
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-2">
          <span className="flex items-center gap-1">
            <Timer className="w-4 h-4 text-blue-500" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4 text-gray-500" />
            {comments} comments
          </span>
        </div>

        <Link to="/blog-detail" className="flex items-center gap-1 text-sm font-medium hover:underline mt-2">
          <span className="text-gray-800">Learn More</span>
          <ArrowRight className="w-4 h-4 text-blue-600" />
        </Link>
      </div>
    </div>
  );
}
