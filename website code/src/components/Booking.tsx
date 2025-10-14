import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Calendar, Clock, MessageSquare } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discord: "",
    package: "",
    currentRank: "",
    message: "",
    addOn: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const webhookUrl =
      "https://discord.com/api/webhooks/1427459383469670590/J6-jjyyJSLxIN15IB1EIlcAFAVf7fnGWLG4_9JM74dYbXBSdKE0EeCbblIIGbyxBg76K";

    // Format package name for display
    const packageNames: { [key: string]: string } = {
      "1hour": "1-Hour Session ($15)",
      "90min": "90-Minute Session ($20)",
      "2hour": "2-Hour Session ($25)",
      custom: "Custom Length (2+ hours)",
    };

    const packageDisplay =
      packageNames[formData.package] || formData.package;
    const addOnText = formData.addOn ? "Yes (+$5)" : "No";

    // Create Discord embed message
    const discordMessage = {
      embeds: [
        {
          title: "🎮 New R6 Siege Coaching Booking Request",
          color: 0x3b82f6, // Blue color
          fields: [
            {
              name: "👤 Name",
              value: formData.name,
              inline: true,
            },
            {
              name: "📧 Email",
              value: formData.email,
              inline: true,
            },
            {
              name: "💬 Discord",
              value: formData.discord,
              inline: true,
            },
            {
              name: "📦 Package",
              value: packageDisplay,
              inline: true,
            },
            {
              name: "🏆 Current Rank",
              value: formData.currentRank || "Not specified",
              inline: true,
            },
            {
              name: "📚 Custom Materials Add-On",
              value: addOnText,
              inline: true,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    // Add message field if provided
    if (formData.message) {
      discordMessage.embeds[0].fields.push({
        name: "📝 Additional Information",
        value: formData.message,
        inline: false,
      });
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      });

      if (response.ok) {
        toast.success(
          "Booking request submitted! We'll contact you within 24 hours.",
        );
        setFormData({
          name: "",
          email: "",
          discord: "",
          package: "",
          currentRank: "",
          message: "",
          addOn: false,
        });
      } else {
        toast.error(
          "Failed to submit booking request. Please try again or contact us directly on Discord.",
        );
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error(
        "Failed to submit booking request. Please try again or contact us directly on Discord.",
      );
    }
  };

  return (
    <div
      id="booking"
      className="py-20 px-4 bg-gradient-to-br from-blue-950 to-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Book Your Session
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you
            within 24 hours
          </p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-slate-300"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="bg-slate-900/50 border-slate-600 text-white"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-slate-300"
                >
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="bg-slate-900/50 border-slate-600 text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="discord"
                  className="text-slate-300"
                >
                  Discord Username *
                </Label>
                <Input
                  id="discord"
                  required
                  value={formData.discord}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      discord: e.target.value,
                    })
                  }
                  className="bg-slate-900/50 border-slate-600 text-white"
                  placeholder="username#1234"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="package"
                  className="text-slate-300"
                >
                  Package *
                </Label>
                <Select
                  value={formData.package}
                  onValueChange={(value) =>
                    setFormData({ ...formData, package: value })
                  }
                  required
                >
                  <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    <SelectItem value="1hour">
                      1-Hour Session - $15
                    </SelectItem>
                    <SelectItem value="90min">
                      90-Minute Session - $20
                    </SelectItem>
                    <SelectItem value="2hour">
                      2-Hour Session - $25
                    </SelectItem>
                    <SelectItem value="custom">
                      Custom Length (2+ hours)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="currentRank"
                className="text-slate-300"
              >
                Current Rank
              </Label>
              <Select
                value={formData.currentRank}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    currentRank: value,
                  })
                }
              >
                <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                  <SelectValue placeholder="Select your current rank" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="copper">Copper</SelectItem>
                  <SelectItem value="bronze">Bronze</SelectItem>
                  <SelectItem value="silver">Silver</SelectItem>
                  <SelectItem value="gold">Gold</SelectItem>
                  <SelectItem value="platinum">
                    Platinum
                  </SelectItem>
                  <SelectItem value="diamond">
                    Diamond
                  </SelectItem>
                  <SelectItem value="champion">
                    Champion
                  </SelectItem>
                  <SelectItem value="unranked">
                    Unranked
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-slate-300"
              >
                Additional Information
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="bg-slate-900/50 border-slate-600 text-white min-h-[120px]"
                placeholder="Tell us about your goals, preferred times, or any specific areas you want to focus on..."
              />
            </div>

            <div className="flex items-start space-x-3 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <Checkbox
                id="addon"
                checked={formData.addOn}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    addOn: checked as boolean,
                  })
                }
                className="mt-1"
              />
              <div className="flex-1">
                <Label
                  htmlFor="addon"
                  className="text-slate-300 cursor-pointer"
                >
                  📚 Add custom documents/videos (+$5)
                </Label>
                <p className="text-slate-400 text-sm mt-1">
                  Get personalized training plans, tips, and
                  drill videos tailored to your needs
                </p>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
            >
              Submit Booking Request
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="w-8 h-8 text-blue-400" />
                <p className="text-slate-300">
                  Flexible scheduling
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-8 h-8 text-blue-400" />
                <p className="text-slate-300">
                  24h response time
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MessageSquare className="w-8 h-8 text-blue-400" />
                <p className="text-slate-300">
                  Discord support
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}