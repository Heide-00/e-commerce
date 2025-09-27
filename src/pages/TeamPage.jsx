import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRolesIfNeeded } from "../store/thunks/fetchRoles";
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
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.client.roles);

  useEffect(() => {
    dispatch(fetchRolesIfNeeded());
  }, [dispatch]);

  return (
    <PageContent title="Ekibimiz">
      {/*Rol verisini sayfa üstünde bir kez gösterme */}
      {roles.length > 0 && (
        <div className="text-sm text-gray-500 mb-6 text-center">
          Rol verisi yüklendi: {roles.length} adet rol
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={member.image}
              alt={`Profil fotoğrafı: ${member.name}`}
              className="w-24 h-24 rounded-full object-cover mb-3 border"
            />
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.title}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 hover:text-blue-600 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </PageContent>
  );
}