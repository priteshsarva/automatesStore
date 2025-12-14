import { Check, Crown, Zap } from 'lucide-react';

export default function Packages() {
  const wordpress = [
    'Custom branded site',
    'WooCommerce features',
    'Analytics, SEO, ad banners',
    'Thousands of products',
    'Full pages, categories, filters',
    'Security, hosting, maintenance',
    'Affiliate + AdSense ready',
  ];

  const portfolio = [
    'No prices',
    'Just clean product listings',
    'Auto-updating scraper',
    'Lightning-fast loading',
    'WhatsApp button on every item',
    // 'Cheap, fast, and ridiculously effective',
  ];

  return (
    <section id="packages" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Two Brutal Choices
          </h2>
          <p className="text-xl text-gray-400">
            You either want full control or a simple money-making machine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-600 rounded-2xl p-8 relative overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full filter blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-10 h-10 text-orange-500" />
                <div>
                  <h3 className="text-3xl font-black">WordPress Store</h3>
                  <p className="text-orange-400 font-semibold">For Sellers Who Want Everything</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {wordpress.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-orange-600/10 border border-orange-600/30 rounded-lg p-4">
                <p className="text-center text-lg font-bold text-orange-400">
                  This is the "I'm building a serious business" package.
                </p>
              </div>

              <a
                href="https://wa.me/919408386083?text=I%20want%20to%20build%20a%20serious%20eCommerce%20business%20with%20full%20control.%20Tell%20me%20more%20about%20your%20WordPress%20Store%20package%20with%20WooCommerce%2C%20analytics%2C%20and%20SEO%20features.%20What%20are%20the%20pricing%20details%3F%20%F0%9F%93%8A"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-6 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-lg font-bold rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-200 text-center"
              >
                Choose WordPress
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-600 rounded-2xl p-8 relative overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/20 rounded-full filter blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-10 h-10 text-green-500" />
                <div>
                  <h3 className="text-3xl font-black">Portfolio Site</h3>
                  <p className="text-green-400 font-semibold">For Sellers Who Want Speed</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {portfolio.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-4">
                <p className="text-center text-lg font-bold text-green-400">
                  Cheap, fast, and ridiculously effective.
                </p>
              </div>

              <a
                href="https://wa.me/919408386083?text=I%20need%20a%20fast%2C%20auto-updating%20store%20to%20get%20started%20quickly%20without%20manual%20work.%20I'm%20interested%20in%20the%20Portfolio%20Site%20package%20with%20WhatsApp%20checkout.%20What's%20the%20next%20step%3F%20%F0%9F%9A%80"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-6 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white text-lg font-bold rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-200 text-center"
              >
                Choose Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
