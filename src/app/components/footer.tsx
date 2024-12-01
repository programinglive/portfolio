export default function Footer() {
  return (
    <footer className="md:fixed md:bottom-0 md:left-0 md:right-0 dark:bg-[#141922] bg-white p-6">
      <div className="container mx-auto text-center">
        <p className="text-xs dark:text-white text-[#0A2540]">
          &copy; 2024 <a className="dark:text-white text-[#0A2540]" href="https://programinglive.com">ProgramingLive</a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}