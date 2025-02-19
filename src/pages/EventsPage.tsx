import EventDetails from "../components/EventDetails";

export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient bg-[length:400%_400%] z-0" />
      <div className="relative z-10 pt-16">
        <EventDetails />
      </div>
    </div>
  );
}
