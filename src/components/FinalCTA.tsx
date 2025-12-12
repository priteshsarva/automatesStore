import { ArrowRight, Eye } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-black via-orange-950/20 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
          Final Punch
        </h2>

        <div className="space-y-6 mb-12">
          <p className="text-2xl md:text-3xl text-gray-300 line-through">
            Stop dreaming about a business.
          </p>
          <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
            Build one that runs itself.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="https://wa.me/919408386083?text=I'm%20ready%20to%20automate%20my%20store%21%20Tell%20me%20more%20about%20your%20automated%20product%20aggregation%20and%20WhatsApp%20checkout%20solution.%20How%20quickly%20can%20we%20get%20started%3F%20%F0%9F%92%BC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xl font-black rounded-lg hover:from-orange-500 hover:to-red-500 transform hover:scale-105 transition-all duration-200 shadow-2xl shadow-orange-600/50"
          >
            Launch Your Automated Store Today
            <ArrowRight className="w-7 h-7" />
          </a>

          <a
            href="https://priteshsarva.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-6 bg-gray-800 border-2 border-gray-700 text-white text-xl font-bold rounded-lg hover:border-orange-500 transition-all duration-200"
          >
            <Eye className="w-7 h-7" />
            See Demo Sites
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-black text-orange-500 mb-2">24/7</p>
            <p className="text-gray-400">Auto-Updates</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-orange-500 mb-2">0</p>
            <p className="text-gray-400">Manual Work</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-orange-500 mb-2">∞</p>
            <p className="text-gray-400">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}
