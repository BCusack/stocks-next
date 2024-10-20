import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


export default function Home() {

  return (
    <div className="min-h-screen bg-background text-gray-100">
      <header className="fixed w-full z-10 bg-background border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <Navbar />
        </div>
      </header>
      <main>
        <section id="banner" className="pt-40 pb-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl mb-6 bg-clip-text text-white">
              We invest in <span className="text-primary">high growth</span> ASX
              companies.
            </h2>
            <p className="text-3xl mb-4 text-gray-300">
              We share our opinions on the progress of each investment over
              time.
            </p>
            <p className="text-3xl text-gray-300">
              Quality over quantity and long term holding has proven to be a
              success.
            </p>
          </div>
        </section>
        <section id="funds" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl text-center mb-12 text-white">
              Our Portfolios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Early Stage Portfolio",
                "Opportunities Portfolio",
                "Growth Portfolio",
                "Biotech Portfolio",
              ].map((portfolio, index) => (
                <div
                  key={index}
                  className="bg-gray-700 border border-gray-600 rounded-lg overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {portfolio}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Short description of the portfolio goes here.
                    </p>
                    <p className="font-bold text-gray-200">Time Frame</p>
                    <p className="text-gray-300">2 to 3 years</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl text-center mb-12 text-white">
              Our Investment Process
            </h2>
            <div className="space-y-4">
              {[
                "Our network introduces us to pre screened investment opportunities.",
                "Our trusted advisors and sector experts help us assess the investment.",
                "We conduct regular meetings with management to build trust and a relationship.",
                "Our inhouse analysts conduct due diligence and analysis",
                "The investment committee makes the final investment decision.",
                "We announce the investment to our followers and update them as the company progresses",
                "We aim to increase position as the company delivers over time.",
                "We aim for free carry within 24 months of investing.",
              ].map((step, index) => (
                <div key={index} className="text-2xl text-gray-300">
                  <div className="text-gray-200 text-center">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="esg"
          className="py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=800')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="bg-gray-900/80 p-8 border border-gray-700 rounded-lg">
              <h2 className="text-3xl text-center mb-12">
                Mandatory: Environmental, Social and Governance (ESG) reporting
              </h2>
              <p className="text-lg mb-4 text-gray-200  text-center">
                Best in class ESG companies attract more capital, better
                customers and top talent – this leads to better shareholder
                returns over time.
              </p>
              <p className="text-lg text-gray-200  text-center">
                We require that all new investments sign on to an ongoing ESG
                improvement program and quarterly ESG reporting.
              </p>
            </div>
          </div>
        </section>

        <section id="awareness" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl  text-center mb-12">
              Mandatory: Comprehensive Investor Awareness Program
            </h2>
            <div className="max-w-3xl mx-auto">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Investor Awareness"
                width={600}
                height={300}
                className="mb-8 rounded-lg"
              />
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-6">
                <p className="text-gray-200 mb-4">
                  We research and invest in quality companies with strong
                  management and top class projects.
                </p>
                <p className="text-gray-200 mb-4">
                  But with over 2,000 companies listed on the ASX it is critical
                  for our investments to stand out from the crowd.
                </p>
                <p className="text-gray-200">
                  We have a large following of investors. We require that our
                  portfolio companies engage in our comprehensive investor
                  awareness program to reach new investors.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-us" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text- text-center mb-12">Contact Us</h2>
            <div className="max-w-lg mx-auto bg-gray-800 border border-gray-700 rounded-lg p-6">
              <form>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 mb-4 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  placeholder="Enter Message"
                  rows={4}
                  className="w-full px-3 py-2 mb-4 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border hover:bg-primary hover:border-primary text-white font-bold rounded-md transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
