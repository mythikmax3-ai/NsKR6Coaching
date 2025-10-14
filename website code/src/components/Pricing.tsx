import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const packages = [
    {
      name: "1-Hour Session",
      price: "$15",
      duration: "1 hour",
      features: [
        "Personalized feedback & strategy help",
        "Live Q&A and performance breakdowns",
        "Goal-based improvement tracking",
        "Replay analysis and feedback",
        "Live feedback while watching or playing with you"
      ],
      popular: false
    },
    {
      name: "90-Minute Session",
      price: "$20",
      duration: "90 minutes",
      features: [
        "Personalized feedback & strategy help",
        "Live Q&A and performance breakdowns",
        "Goal-based improvement tracking",
        "Replay analysis and feedback",
        "Live feedback while watching or playing with you",
        "Extended practice time"
      ],
      popular: true
    },
    {
      name: "2-Hour Session",
      price: "$25",
      duration: "2 hours",
      features: [
        "Personalized feedback & strategy help",
        "Live Q&A and performance breakdowns",
        "Goal-based improvement tracking",
        "Replay analysis and feedback",
        "Live feedback while watching or playing with you",
        "Extended practice & deep-dive analysis"
      ],
      popular: false
    }
  ];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="pricing" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-blue-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">🎯 Coaching Sessions</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the session length that fits your goals and budget
          </p>
          <div className="mt-6 inline-block bg-blue-900/30 border border-blue-500/30 rounded-lg px-6 py-4">
            <p className="text-slate-300">
              <span className="text-blue-400">📚 Optional Add-On:</span> +$5 for custom documents/videos with training plans, tips, and drills
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Additional time above 2 hours: $2 for every 5 minutes
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative p-8 ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-blue-900/50 to-slate-800/50 border-blue-500 scale-105 shadow-2xl shadow-blue-500/20' 
                  : 'bg-slate-800/50 border-slate-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2 text-white">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl text-white">{pkg.price}</span>
                </div>
                <p className="text-slate-400">{pkg.duration}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  pkg.popular 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-slate-700 hover:bg-slate-600'
                } text-white`}
                onClick={scrollToBooking}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
