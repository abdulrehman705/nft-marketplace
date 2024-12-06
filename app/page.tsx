import Image from "next/image";
import robotImage from "@/app/assets/images/authon.png";
import MarketPrice from "./components/amountButton";
import FeatureCards from "./components/featureCard";
import Footer from "./components/footer";

const NFTMarketplace = () => {
  const navigationLinks = ["Data Sheet", "Team", "Tokenomics"];
  const milestones = [
    { title: "Bidding Date", date: "12/08/2024", isActive: true },
    { title: "Results", date: "12/08/2024", isActive: false },
    { title: "Receive rewards", date: "12/08/2024", isActive: false },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <nav className="flex items-center space-x-6">
          {navigationLinks.map((link, index) => (
            <span key={index} className="text-sm text-gray-400">
              {link}
            </span>
          ))}
          <div className="flex items-center">
            <span className="text-sm text-gray-400">NFT</span>
            <div className="ml-1 px-1 text-[10px] bg-purple-600 rounded">
              NEW
            </div>
          </div>
        </nav>
        <button className="px-4 py-2 bg-purple-500 rounded-full text-sm font-medium">
          Connect Wallet
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/3">
            <div className="bg-gradient-to-br from-pink-100/10 to-transparent p-1 rounded-2xl">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={robotImage}
                  alt="Robot astronaut NFT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="text-sm text-purple-400 mb-2">New marketplace</div>
            <h1 className="text-3xl font-bold mb-4">Wonderverse Season 0</h1>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquand. Ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquand.
            </p>

            <ol className="items-center sm:flex">
              {milestones.map((milestone, index) => (
                <li key={index} className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div
                      className={`z-10 flex items-center justify-center w-3 h-3 rounded-full ring-8 ring-[#BA83FF1F] ${
                        milestone.isActive ? "bg-[#BA83FF]" : "bg-[#BA83FF33]"
                      }`}
                    />
                    {index < milestones.length - 1 && (
                      <div className="hidden sm:flex w-full min-w-[250px] border-t border-dashed border-[#BA83FF80]" />
                    )}
                  </div>
                  <div
                    className={`mt-3 sm:pe-8 ${
                      milestone.isActive ? "" : "text-gray-500"
                    }`}
                  >
                    <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    <p className="text-base font-normal">{milestone.date}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex items-center gap-2 my-3">
              <MarketPrice min={100} max={10000} step={100} value={1000} />
            </div>

            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-base text-[#BC84FF]">Total Price</p>
                <span className="text-[28px] font-bold">$45,346.56</span>
              </div>
              <button className="py-3 px-16 bg-purple-500 rounded-full font-medium">
                Place a Bid
              </button>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            NFT Utility &<br />
            Benefits Section
          </h2>
          <p className="text-gray-400 max-w-[400px] mx-auto mb-8">
            Owning an NFT grants premier access to the entire ecosystem,
            offering exclusive benefits like
          </p>
          <button className="px-6 py-2 border border-gray-700 rounded-full text-sm">
            Learn More
          </button>
        </section>
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
};

export default NFTMarketplace;
