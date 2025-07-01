import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="h-screen w-20 bg-success flex flex-col items-center py-6 space-y-8">
      {/* Home Icon */}
      <button aria-label="House">
        <Image src="/svg/House.svg" alt="House" width={24} height={24} />
      </button>

      {/* User Icon */}
      <button aria-label="Chat">
        <Image src="/svg/ChatTeardrop.svg" alt="Chat" width={24} height={24} />
      </button>

      {/* Settings Icon */}
      <button aria-label="Users">
        <Image src="/svg/UsersFour.svg" alt="Users" width={24} height={24} />
      </button>
    </aside>
  );
};

export default Sidebar;
