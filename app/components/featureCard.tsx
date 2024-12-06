import Shield from "@/app/assets/images/content.png";
import Key from "@/app/assets/images/elements.png";
import Ticket from "@/app/assets/images/ticket.png";
import Image from "next/image";

const FeatureCards = () => {
  const features = [
    {
      icon: Shield,
      title: "Early Access",
      description:
        "For upcoming gamses on the platform, allowing holders to play advance releases and influence game development",
    },
    {
      icon: Key,
      title: "Exclusive Access",
      description: "To game modes with IQ, IRL token rewards and wagering",
    },
    {
      icon: Ticket,
      title: "Battle Pass For Life",
      description:
        "With rewards in game rewards, both boxes airdrops, and IRL prizes",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {features.map((feature, index) => {
        return (
          <div
            key={index}
            className="relative p-6 rounded-2xl max-w-[250px] overflow-hidden
                       bg-gradient-to-b from-purple-900/20 to-transparent
                       border border-purple-900/20"
          >
            <div
              className="w-10 h-10 flex items-center justify-center 
                          bg-purple-500/20 rounded-lg mb-4"
            >
              <Image
                src={feature.icon}
                className="w-5 h-5 text-purple-400"
                alt={"card image"}
              />
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCards;
