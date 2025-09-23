import PageContent from "../layout/PageContent";
import { Linkedin } from "lucide-react";
import menImage from "../assets/images/team/kod-men.png";
import womenImage from "../assets/images/team/kod-women.png";
import womenImage1 from "../assets/images/team/kod-women2.png";
import menImage2 from "../assets/images/team/kod-men2.png";

const team = [
  {
    name: "Gökhan Özdemir",
    title: "Project Manager",
    image: menImage,
    linkedin: "https://www.linkedin.com", 
  },
  {
    name: "Gül Aslan",
    title: "Full Stack Developer",
    image: womenImage,
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Aslı Su",
    title: "Backend Developer",
    image: womenImage1,
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Barış Uslu",
    title: "Frontend Developer",
    image: menImage2,
    linkedin: "https://www.linkedin.com",
  },
];

export default function TeamPage() {
  return (
    <PageContent title="Ekibimiz">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded shadow-sm hover:shadow-md transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-contain mb-2 bg-white"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.title}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 hover:text-blue-600 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </PageContent>
  );
}