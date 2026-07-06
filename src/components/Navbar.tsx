function Navbar() {
  return (
    <nav className="fixed z-50 bg-white/30 font-sans top-0 w-full border-b border-zinc-400 shadow-sm backdrop-blur-lg">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold cursor-pointer">
          Shop<span className="text-blue-700">Easy</span>
        </div>
        <div className="flex gap-2 text-sm text-zinc-500 ">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Card</div>
        </div>
        <div>
          <button className="text-sm cursor-pointer font-normal text-center text-white bg-gray-500 rounded-sm px-3 py-1.5">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
