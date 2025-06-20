const Footer = () => {
  return (
    <footer className="text-center py-4 fixed bottom-0 w-full bg-white text-gray-500 border-t shadow-md">
      &copy; {new Date().getFullYear()} E-Pharmacy. All rights reserved.
    </footer>
  );
};

export default Footer;
