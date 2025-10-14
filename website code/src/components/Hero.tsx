import { Button } from "./ui/button";
import heroImage from "figma:asset/ae1db97b42fd8bde06addd897821e44d4b089502.png";
import { Target, TrendingUp, Users } from "lucide-react";

export function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={heroImage}
          alt="Rainbow Six Siege"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
          <span className="text-blue-300">Elite Rainbow Six Siege Coaching</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6 text-white max-w-4xl mx-auto">
          Level Up Your <span className="text-blue-400">R6 Siege</span> Game
        </h1>
        
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Professional 1-on-1 coaching from experienced players. Master tactics, improve your aim, and climb the ranks faster.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
            onClick={scrollToBooking}
          >
            Book Your Session
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-400 text-blue-300 hover:bg-blue-950 px-8 py-6"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Pricing
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
            <Target className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl text-white mb-2">350+</div>
            <div className="text-slate-400">Students Coached</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
            <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl text-white mb-2">95%</div>
            <div className="text-slate-400">Rank Improvement</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
            <Users className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl text-white mb-2">600+</div>
            <div className="text-slate-400">Hours Coached</div>
          </div>
        </div>
      </div>
    </div>
  );
}
