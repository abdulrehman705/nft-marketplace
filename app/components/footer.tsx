import Twitter from "@/app/assets/images/twitter.png";
import Telegram from "@/app/assets/images/telegram.png";
import Youtube from "@/app/assets/images/youtube.png";
import Subtract from "@/app/assets/images/subtract.png";
import Boot from "@/app/assets/images/boot.png";
import ETL from "@/app/assets/images/ETL.png";
import BSC from "@/app/assets/images/BSC.png";
import Image from "next/image";

const Footer = () => {
  const contractAddresses = [
    { name: "BSC Contract Address", address: "0x000...000", icon: ETL },
    { name: "ETL Contract Address", address: "0x000...000", icon: BSC },
  ];

  const SocialMedia = [
    { icon: Telegram, name: "Telegram" },
    { icon: Youtube, name: "Youtube" },
    { icon: Subtract, name: "Subtract" },
    { icon: Twitter, name: "Twitter" },
    { icon: Boot, name: "Boot" },
  ];

  const navLinks = ["DUEL Token", "Team", "Docs", "Tokenomics"];

  return (
    <footer className="bg-[#0D0D0F] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex items-center gap-2">
              {SocialMedia.map((item, index) => (
                <span>
                  <Image key={index} src={item.icon} alt={item.name} />
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-400">Developed by Prime</p>
          </div>

          <div className="flex flex-col gap-4 items-center">
            {contractAddresses.map((contract, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Image key={index} src={contract.icon} alt={contract.name} />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="p-1 hover:bg-white/10 rounded-md transition-colors"
                    aria-label={`Copy ${contract.name}`}
                  >
                    <span className="w-4 h-4 text-gray-400">
                      {contract.name}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 items-center md:items-end">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer