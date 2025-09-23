import team1 from "../assets/images/team/kod-men.png";
import team2 from "../assets/images/team/kod-men2.png";
import team3 from "../assets/images/team/kod-women.png";
import team4 from "../assets/images/team/kod-women2.png";
import team5 from "../assets/images/team/meeting.png";

export default function AboutPage() {
  const teamInfo = [
    {
      img: team1,
      name: "Gökhan Özdemir",
      title: "Planlama ve Ekip Dinamiği Lideri",
    },
    {
      img: team3,
      name: "Gül Aslan",
      title: "Full Stack Geliştirici",
    },
    {
      img: team4,
      name: "Aslı Su",
      title: "Backend Geliştirici",
    },
    {
      img: team2,
      name: "Barış Uslu",
      title: "Frontend Geliştirici",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-8 px-4 py-6 md:px-8 md:py-12 max-w-screen-xl mx-auto text-center">
     <h1 className="text-2xl md:text-4xl font-bold">Hakkımızda</h1>

      <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-screen-md">
        Teknik tutarlılık, görsel uyum ve güvenilir ekip anlayışıyla ilerliyoruz. Her projede planlı ve dikkatli çalışmayı önemsiyoruz.
      </p>

     <div className="flex flex-col md:flex-row gap-6 items-center w-full">
        <img
          src={team5}
          alt="Ekip toplantısı"
          className="block mx-auto w-full md:w-1/2 rounded-md object-cover aspect-[4/3] max-h-[300px]"
        />
        <div className="flex flex-col justify-center md:w-1/2 gap-2 text-center md:text-left">
          <h2 className="text-lg font-semibold">Vizyonumuz</h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Geleceği sade kodlarla, dengeli tasarımlarla ve güvene dayalı ekiplerle inşa etmeyi hedefliyoruz. Her projede sürdürülebilir kalite ve işbirliği bizim için önceliklidir.
          </p>
        </div>
      </div>

    <div className="flex flex-col items-center gap-2">
        <h3 className="text-lg font-semibold">Ekibimiz</h3>
        <p className="text-sm text-gray-600 max-w-screen-sm">
          Her biri sade kod, görsel uyum ve ekip değerleriyle projeye katkı sunan profesyonellerden oluşuyor.
        </p>
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full place-items-center">
        {teamInfo.map(({ img, name, title }, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <img
              src={img}
              alt={name}
              className="block mx-auto w-full max-w-[280px] rounded-md object-cover aspect-square"
            />
            <h3 className="text-sm font-semibold text-gray-900 mt-2">{name}</h3>
            <p className="text-xs text-gray-600">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}