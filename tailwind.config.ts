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
				},
				// Cyberpunk colors
				cyber: {
					background: '#0a0e17',
					darkpurple: '#1A1F2C',
					neonpurple: '#8B5CF6',
					neonblue: '#1EAEDB',
					neonpink: '#D946EF',
					neongreen: '#10B981',
					text: '#aaadb0'
				}
			},
			fontFamily: {
				mono: ['Source Code Pro', 'Courier New', 'monospace'],
				cyber: ['JetBrains Mono', 'Source Code Pro', 'monospace']
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
				glitch: {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				typing: {
					from: { width: '0' },
					to: { width: '100%' }
				},
				blink: {
					'50%': { borderColor: 'transparent' }
				},
				'text-flicker': {
					'0%': { opacity: '0.1' },
					'2%': { opacity: '1' },
					'8%': { opacity: '0.1' },
					'9%': { opacity: '1' },
					'12%': { opacity: '0.1' },
					'20%': { opacity: '1' },
					'25%': { opacity: '0.3' },
					'30%': { opacity: '1' },
					'100%': { opacity: '1' }
				},
				float: {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'neon-glow': {
					'0%': { textShadow: '0 0 2px rgba(139, 92, 246, 0.8), 0 0 4px rgba(139, 92, 246, 0.8)' },
					'50%': { textShadow: '0 0 8px #8B5CF6, 0 0 12px #8B5CF6, 0 0 16px #8B5CF6' },
					'100%': { textShadow: '0 0 2px rgba(139, 92, 246, 0.8), 0 0 4px rgba(139, 92, 246, 0.8)' }
				},
				'glitch-text': {
					'0%': { textShadow: '0.05em 0 0 rgba(139, 92, 246, 0.8), -0.05em -0.025em 0 rgba(217, 70, 239, 0.8), -0.025em 0.05em 0 rgba(30, 174, 219, 0.8)' },
					'15%': { textShadow: '-0.05em -0.025em 0 rgba(139, 92, 246, 0.8), 0.025em 0.025em 0 rgba(217, 70, 239, 0.8), -0.05em -0.05em 0 rgba(30, 174, 219, 0.8)' },
					'30%': { textShadow: '0.025em 0.05em 0 rgba(139, 92, 246, 0.8), 0.025em 0 0 rgba(217, 70, 239, 0.8), 0 -0.05em 0 rgba(30, 174, 219, 0.8)' },
					'45%': { textShadow: '-0.025em -0.025em 0 rgba(139, 92, 246, 0.8), -0.025em -0.05em 0 rgba(217, 70, 239, 0.8), -0.025em -0.025em 0 rgba(30, 174, 219, 0.8)' },
					'60%': { textShadow: '-0.025em 0 0 rgba(139, 92, 246, 0.8), 0.025em -0.025em 0 rgba(217, 70, 239, 0.8), -0.025em -0.05em 0 rgba(30, 174, 219, 0.8)' },
					'75%': { textShadow: '0.025em -0.025em 0 rgba(139, 92, 246, 0.8), 0 -0.05em 0 rgba(217, 70, 239, 0.8), 0 0 0 rgba(30, 174, 219, 0.8)' },
					'100%': { textShadow: '0.05em 0 0 rgba(139, 92, 246, 0.8), -0.05em -0.025em 0 rgba(217, 70, 239, 0.8), -0.025em 0.05em 0 rgba(30, 174, 219, 0.8)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				glitch: 'glitch 500ms infinite',
				typing: 'typing 3.5s steps(40, end), blink 1s step-end infinite',
				'text-flicker': 'text-flicker 1.5s linear forwards',
				float: 'float 6s ease-in-out infinite',
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate',
				'glitch-text': 'glitch-text 3s infinite linear alternate'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
