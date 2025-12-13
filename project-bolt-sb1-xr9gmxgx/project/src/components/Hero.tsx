import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold mb-8 backdrop-blur-sm">
          Stop Wasting Time
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          Launch a Store That
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Updates Itself
          </span>
        </h1>

        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            You're still uploading products manually? Updating stock by hand? <span className="text-orange-500 font-bold">Seriously?</span>
          </p>
          <p className="text-lg md:text-xl text-gray-400">
            Get a website that scrapes every product from Selloship automatically, updates 24/7,
            and sends customers straight to your WhatsApp to buy instantly.
          </p>
          <p className="text-2xl md:text-3xl text-white font-bold mt-8">
            You focus on selling. The site handles the rest.
          </p>
        </div>

        <a
          href="https://wa.me/919408386083?text=Hi%21%20I'm%20interested%20in%20launching%20an%20automated%20store%20that%20scrapes%20products%20from%20Selloship.%20Can%20we%20discuss%20the%20best%20package%20for%20me%3F%20%F0%9F%9A%80"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white text-lg font-bold rounded-lg hover:from-orange-500 hover:to-red-500 transform hover:scale-105 transition-all duration-200 shadow-2xl shadow-orange-600/50"
        >
          Get Your Automated Store Now
          <ArrowRight className="w-6 h-6" />
        </a>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Auto-updating 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>WhatsApp Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Zero Manual Work</span>
          </div>
        </div>
      </div>
    </section>
  );
}
