import { Card } from "./ui/card";
import { Crosshair, Map, Users, Video, BarChart, MessageSquare } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Users,
      title: "Personalized Feedback",
      description: "Get personalized feedback and strategy help tailored specifically to your playstyle and goals."
    },
    {
      icon: MessageSquare,
      title: "Live Q&A",
      description: "Ask questions and get immediate answers with performance breakdowns during your session."
    },
    {
      icon: BarChart,
      title: "Goal-Based Tracking",
      description: "Track your improvement with goal-based metrics and see your progress over time."
    },
    {
      icon: Video,
      title: "Replay Analysis",
      description: "Detailed analysis of your replays to identify mistakes and opportunities for improvement."
    },
    {
      icon: Crosshair,
      title: "Live Feedback",
      description: "Real-time feedback while I watch you play or play alongside you in matches."
    },
    {
      icon: Map,
      title: "Custom Training",
      description: "Optional add-on: custom documents and videos with training plans, tips, and drills."
    }
  ];

  return (
    <div className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">🕒 What's Included</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Every coaching session includes these comprehensive features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="bg-slate-800/50 border-slate-700 p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
