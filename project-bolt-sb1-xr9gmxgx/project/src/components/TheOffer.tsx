import { Flame, Database, MessageCircle } from 'lucide-react';

export default function TheOffer() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            The Offer <span className="text-gray-500">(Plain and Brutal)</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-950/50 to-black border-2 border-orange-600 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Flame className="w-8 h-8 text-orange-500" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Database className="w-10 h-10 text-orange-500" />
              <h3 className="text-2xl md:text-3xl font-black">
                Automated Product Aggregation
              </h3>
            </div>

            <p className="text-xl font-bold text-orange-400 mb-4">
              Your site becomes a product magnet.
            </p>

            <div className="space-y-3 text-gray-300">
              <p className="text-lg">We scrape everything. Continuously.</p>
              <div className="space-y-2 pl-4 border-l-4 border-orange-600">
                <p>If a supplier updates something → <span className="text-white font-semibold">your site updates instantly</span>.</p>
                <p>If a supplier adds new products → <span className="text-white font-semibold">your site gets them too</span>.</p>
                <p className="text-orange-400 font-bold">And you don't lift a finger.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/50 to-black border-2 border-red-600 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Flame className="w-8 h-8 text-red-500" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-10 h-10 text-red-500" />
              <h3 className="text-2xl md:text-3xl font-black">
                WhatsApp Checkout
              </h3>
            </div>

            <p className="text-xl font-bold text-red-400 mb-4">
              (This Converts Like Crazy)
            </p>

            <div className="space-y-3 text-gray-300 mb-6">
              <p className="text-lg line-through text-gray-500">Forget overpriced payment gateways.</p>
              <p className="text-lg line-through text-gray-500">Forget cart abandonment.</p>
              <p className="text-lg line-through text-gray-500">Forget customers "thinking about it."</p>
            </div>

            <div className="bg-black/50 rounded-lg p-4 border border-red-600/50 mb-4">
              <p className="text-center text-lg font-mono">
                <span className="text-green-400">Buy button</span> → <span className="text-blue-400">WhatsApp message</span> → <span className="text-orange-400">direct sale</span>
              </p>
            </div>

            <p className="text-white font-bold text-center">
              This is the highest-converting checkout flow for modern customers.
            </p>
            <p className="text-red-400 font-black text-center text-xl mt-2">
              Simple. Fast. Proven.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
