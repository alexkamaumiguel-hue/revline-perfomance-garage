/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
extend: {
colors: {
primary: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
},
secondary: {
50: '#fef2f2',
100: '#fee2e2',
500: '#ef4444',
600: '#dc2626',
700: '#b91c1c',
800: '#991b1b',
},
accent: {
50: '#f8fafc',
100: '#f1f5f9',
500: '#64748b',
600: '#475569',
700: '#334155',
},
neutral: {
dark: '#374151',
light: '#f9fafb',
},
silver: {
50: '#f9fafb',
100: '#f3f4f6',
}
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
},
},
plugins: [],
}
