const Navbar = () => {
  return (
    <nav className="w-full flex space-x-8 border-b border-border bg-white px-8 py-4">
      <button className="text-foreground font-semibold border-b-2 border-primary pb-2">
        Summary
      </button>

      <button className="text-gray-500 hover:text-foreground pb-2">
        Sales
      </button>

      <button className="text-gray-500 hover:text-foreground pb-2">
        Chats
      </button>
    </nav>
  );
};

export default Navbar;
