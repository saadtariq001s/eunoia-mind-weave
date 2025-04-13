import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				eunoia: {
					// Updated color palette
					purple: '#4A3AFF',        // Deep Purple/Blue (primary)
					'medium-purple': '#7B68EE', // Medium Purple
					'light-purple': '#A78BFA', // Lighter Purple
					'soft-purple': '#DDD6FE',  // Very light purple for borders
					'bg-purple': '#F5F3FF',    // Light lavender background
					gold: '#F0B429',          // Gold accent
					success: '#10B981',       // Success state
					error: '#EF4444',         // Error state
					dark: '#1F2937',          // Primary text dark gray
					'dark-secondary': '#4B5563', // Secondary text medium gray
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'serif': ['Playfair Display', 'serif'],
				'sans': ['Nunito Sans', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'glow': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 5px rgba(74, 58, 255, 0.7))',
						opacity: '0.7'
					},
					'50%': { 
						filter: 'drop-shadow(0 0 20px rgba(74, 58, 255, 0.9))',
						opacity: '1'
					}
				},
				'orbit': {
					'0%': { transform: 'translateX(-1rem) translateY(0) rotate(0deg) translateX(1rem) rotate(0deg)' },
					'100%': { transform: 'translateX(-1rem) translateY(0) rotate(360deg) translateX(1rem) rotate(-360deg)' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
				'spin-slow': 'spin-slow 15s linear infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'orbit': 'orbit 3s linear infinite'
			},
			boxShadow: {
				'purple-sm': '0 1px 2px 0 rgba(74, 58, 255, 0.05)',
				'purple-md': '0 4px 6px -1px rgba(74, 58, 255, 0.1), 0 2px 4px -1px rgba(74, 58, 255, 0.06)',
				'purple-lg': '0 10px 15px -3px rgba(74, 58, 255, 0.1), 0 4px 6px -2px rgba(74, 58, 255, 0.05)',
				'purple-xl': '0 20px 25px -5px rgba(74, 58, 255, 0.1), 0 10px 10px -5px rgba(74, 58, 255, 0.04)',
				'purple-2xl': '0 25px 50px -12px rgba(74, 58, 255, 0.25)',
				'gold-glow': '0 0 15px rgba(240, 180, 41, 0.6)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'purple-gradient': 'linear-gradient(to right, #4A3AFF, #A78BFA)',
				'purple-gold-gradient': 'linear-gradient(to right, #4A3AFF, #7B68EE, #F0B429)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;