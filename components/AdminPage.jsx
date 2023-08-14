import React from 'react';
import "@styles/styles.css"

const AdminPage = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-xl">Admin Dashboard</h1>
      </header>
      <main className="flex flex-1">
        <div className="bg-gray-800 text-white p-4 w-1/4">
          <nav className="space-y-2">
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-700 transition"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-700 transition"
            >
              Users
            </a>
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-700 transition"
            >
              Products
            </a>
            {/* Add more navigation links */}
          </nav>
        </div>
        <div className="p-4 flex-3">
          {children}
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center py-2">
        <p>&copy; {new Date().getFullYear()} Admin Example</p>
      </footer>
    </div>
  );
};

export default AdminPage;
