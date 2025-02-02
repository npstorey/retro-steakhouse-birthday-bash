import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const RsvpForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    favoriteCut: "",
    memory1982: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "RSVP Received!",
      description: "Get ready for an awesome retro steakhouse experience!",
      duration: 5000,
    });
    setFormData({
      name: "",
      email: "",
      guests: "1",
      favoriteCut: "",
      memory1982: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id="rsvp" className="bg-steakhouse-wood py-16">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-4xl font-bold text-steakhouse-cream text-center mb-8 animate-neonFlicker">
          RSVP
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-steakhouse-cream/20"
        >
          <div>
            <label htmlFor="name" className="block text-steakhouse-cream mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-black/40 text-steakhouse-cream border border-steakhouse-cream/30 focus:border-steakhouse-blue focus:ring-1 focus:ring-steakhouse-blue outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-steakhouse-cream mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-black/40 text-steakhouse-cream border border-steakhouse-cream/30 focus:border-steakhouse-blue focus:ring-1 focus:ring-steakhouse-blue outline-none"
            />
          </div>

          <div>
            <label htmlFor="guests" className="block text-steakhouse-cream mb-2">
              Number of Guests
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-black/40 text-steakhouse-cream border border-steakhouse-cream/30 focus:border-steakhouse-blue focus:ring-1 focus:ring-steakhouse-blue outline-none"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="favoriteCut" className="block text-steakhouse-cream mb-2">
              Favorite Steak Cut
            </label>
            <input
              type="text"
              id="favoriteCut"
              name="favoriteCut"
              value={formData.favoriteCut}
              onChange={handleChange}
              placeholder="e.g., Ribeye, T-Bone..."
              className="w-full px-4 py-2 rounded bg-black/40 text-steakhouse-cream border border-steakhouse-cream/30 focus:border-steakhouse-blue focus:ring-1 focus:ring-steakhouse-blue outline-none"
            />
          </div>

          <div>
            <label htmlFor="memory1982" className="block text-steakhouse-cream mb-2">
              Best Memory from 1982
            </label>
            <textarea
              id="memory1982"
              name="memory1982"
              value={formData.memory1982}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 rounded bg-black/40 text-steakhouse-cream border border-steakhouse-cream/30 focus:border-steakhouse-blue focus:ring-1 focus:ring-steakhouse-blue outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-steakhouse-maroon text-steakhouse-cream border-2 border-steakhouse-cream py-2 rounded font-bold hover:bg-steakhouse-cream hover:text-steakhouse-maroon transition-all duration-300"
          >
            SUBMIT RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RsvpForm;