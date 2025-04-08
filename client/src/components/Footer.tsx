import { Pencil } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Pencil className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold">NoteZap</h1>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NoteZap. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
