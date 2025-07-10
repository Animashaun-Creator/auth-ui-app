function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to Auth UI</h1>
      <div className="flex gap-4">
        <a href="/auth" className="bg-blue-600 text-white px-4 py-2 rounded">Login</a>
        <a href="/auth" className="bg-green-600 text-white px-4 py-2 rounded">Sign Up</a>
      </div>
    </div>
  );
}
export default Landing;
