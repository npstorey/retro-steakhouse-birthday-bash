const RsvpForm = () => {
  return (
    <div id="rsvp" className="bg-steakhouse-wood py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-steakhouse-cream text-center mb-8 animate-neonFlicker">
          RSVP
        </h2>
        <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-steakhouse-cream/20">
          <iframe
            src="YOUR_GOOGLE_FORM_URL_HERE"
            className="w-full min-h-[800px] border-0"
            title="RSVP Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default RsvpForm;