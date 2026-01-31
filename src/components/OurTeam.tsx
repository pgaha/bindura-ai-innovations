import Ngonidzashe from "@/assets/NgonidzasheChikuhuhu.jpeg";
import Tanaka from "@/assets/TanakaMadhiko.jpeg";
import PromiseImg from "@/assets/PromiseGaha.jpeg";
import Rumbidzai from "@/assets/RumbidzaiGwinji.jpeg";
import Rosephine from "@/assets/RosephineMaideyi.jpeg";
import Panashe from "@/assets/PanasheSiziba.jpeg";
import Tinashe from "@/assets/TinasheChivhuna.jpeg";

const team = [
  {
    name: "Ngonidzashe Chikuhuhu",
    title: "Automation and Intelligent Systems Engineer",
    img: Ngonidzashe,
  },
  {
    name: "Tanaka Madhiko",
    title: "Junior Data Scientist",
    img: Tanaka,
  },
  {
    name: "Promise Gaha",
    title: "Business Analyst",
    img: PromiseImg,
  },
  {
    name: "Rumbidzai Gwinji",
    title: "Data Scientist",
    img: Rumbidzai,
  },
  {
    name: "Rosephine Maideyi",
    title: "Machine Learning Engineer",
    img: Rosephine,
  },
  {
    name: "Panashe Siziba",
    title: "Automation Engineer",
    img: Panashe,
  },
  {
    name: "Tinashe Chivhuna",
    title: "AI Software Developer",
    img: Tinashe,
  },
];

const OurTeam = () => {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Team</h2>
          <p className="text-muted-foreground mt-2">Meet the people driving our AI research and impact.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-start justify-center">
          {team.map((member) => (
            <div key={member.name} className="max-w-[320px] w-full mx-auto bg-white rounded-lg p-6 text-center shadow-sm border">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-semibold text-foreground text-base">{member.name}</p>
              <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
