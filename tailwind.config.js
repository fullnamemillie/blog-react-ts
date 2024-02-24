/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif'],
        sourceSerif: ['Source Serif Pro', 'serif'],
      },
      fontSize: {
        logo: '3.5rem',
        articleBanner: '2.8rem',
        articleSize: '1.25rem',
      },
      borderRadius: {
        articleTag: '10rem',
      },
      colors: {
        blog: {
          blue: '#42B4E6',
          darkBlue: '#abc6d5',
          lightGray: '#f3f3f3',
          gray: '#bbb',
          darkGray: '#818a91',
          darkestGray: '#667078',
          black: 'black',
          lightBlack: '#333',
          silver: '#ccc',
        },
      },
      spacing: {
        navItem: '0.425rem',
        banner: '2.30rem',
        container: '68.75rem',
        articleText: '1rem',
        articleTag: '0.125rem',
        authorContainer: '57.5rem',
        authorImage: '6.25rem',
        commentsContainer: '52.9rem',
      },
      boxShadow: {
        banner:
          'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);',
      },
      dropShadow: {
        logo: '0px 1px 3px rgb(0 0 0 /30%)',
      },
      lineHeight: {
        articleBanner: '1.1',
      },
    },
  },
  plugins: [],
};
