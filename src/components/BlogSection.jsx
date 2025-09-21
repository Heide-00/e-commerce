import BlogCard from "./BlogCard";
import road from "../assets/images/blog/picture1.png";
import car from "../assets/images/blog/picture2.png";
import umbrella from "../assets/images/blog/picture3.png";

const posts = [
  {
    image: road,
    title: "Loudest à la Madison #1 (L'intégral)",
    tags: ["Google", "Trending", "New"],
    date: "22 April 2021",
    comments: 10,
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    image: car,
    title: "Loudest à la Madison #1 (L'intégral)",
    tags: ["Google", "Trending", "New"],
    date: "22 April 2021",
    comments: 10,
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    image: umbrella,
    title: "Loudest à la Madison #1 (L'intégral)",
    tags: ["Google", "Trending", "New"],
    date: "22 April 2021",
    comments: 10,
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
];

export default function BlogSection() {
  return (
    <section className="flex flex-col gap-8 px-4 py-12">
      
     <div className="flex flex-col items-center text-center gap-2 px-4">
        <span className="text-sm font-medium text-blue-600">Practice Advice</span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Posts</h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}