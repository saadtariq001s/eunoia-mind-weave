import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  // Check for saved theme preference or use system preference
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      // Check for saved preference
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        return savedTheme;
      }
      
      // Check for system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    
    // Default to light
    return 'light';
  });

  // Apply theme class to HTML element
  useEffect(() => {
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    // Save preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-eunoia-bg-purple dark:bg-eunoia-dark-secondary/20 border border-eunoia-soft-purple/30 dark:border-eunoia-purple/30 text-eunoia-purple dark:text-eunoia-light-purple transition-colors duration-300 shadow-purple-sm hover:shadow-purple-md"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon size={18} className="transition-transform duration-300 ease-in-out hover:rotate-12" />
      ) : (
        <Sun size={18} className="transition-transform duration-300 ease-in-out hover:rotate-90" />
      )}
    </button>
  );
};

export default ThemeToggle;