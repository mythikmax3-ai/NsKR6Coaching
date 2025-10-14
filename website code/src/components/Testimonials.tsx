import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex M.",
      rank: "Platinum → Diamond",
      avatar: "AM",
      text: "Went from hardstuck Plat 3 to Diamond in just 3 weeks! The coaching helped me understand the game on a completely different level.",
      rating: 5
    },
    {
      name: "Sarah K.",
      rank: "Gold → Platinum",
      avatar: "SK",
      text: "Best investment I made for my gaming. The VOD reviews showed me mistakes I didn't even know I was making.",
      rating: 5
    },
    {
      name: "James R.",
      rank: "Silver → Gold",
      avatar: "JR",
      text: "Super patient and knowledgeable coach. Helped me with everything from aim to map knowledge. Highly recommend!",
      rating: 5
    },
    {
      name: "Mike T.",
      rank: "Plat → Champion",
      avatar: "MT",
      text: "The personalized training plan was exactly what I needed. Now I'm consistently hitting Champion rank every season.",
      rating: 5
    },
    {
      name: "Emily W.",
      rank: "Bronze → Silver",
      avatar: "EW",
      text: "As a beginner, I was intimidated, but the coaching was perfect for my level. Now I actually understand what I'm doing!",
      rating: 5
    },
    {
      name: "David L.",
      rank: "Gold → Diamond",
      avatar: "DL",
      text: "The team strategy coaching transformed how I play with my squad. We're now winning way more matches together.",
      rating: 5
    }
  ];

  return (
    <div className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Success Stories</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            See what our students have achieved
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="bg-blue-600">
                  <AvatarFallback className="bg-blue-600 text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-blue-400">{testimonial.rank}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-300">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
