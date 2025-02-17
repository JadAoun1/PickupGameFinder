
export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <p className="text-lg text-gray-700 text-center max-w-xl">
        Welcome back! This is your central hub where you can view your upcoming pickup games, manage your profile, and stay updated with notifications.
      </p>
      {/* You can add additional dashboard widgets or sections here */}
    </div>
  );
}
