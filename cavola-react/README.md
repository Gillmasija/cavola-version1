Cavola React Frontend (Demo)
===========================

This project is a simple React frontend scaffold generated from the Cavola PDF you provided.
It uses React + Zustand + React-Bootstrap and includes a blog system (in-memory).

Important:
- The `src/assets/` folder currently contains placeholder images (generated for demo).
- Replace these with your supplied asset files (logo, photos, etc.) as described below.

How to run locally
------------------
1. Extract the zip file.
2. In the project folder run:
   npm install
   npm start

3. The app will open at http://localhost:3000 (default for react-scripts).

How to replace images/assets
----------------------------
- Copy your real images into `src/assets/` (same names will overwrite placeholders).
- Update image paths in components if you use different filenames.
- If you have an assets zip, extract it into `src/assets/` and restart the dev server.

Notes on design fidelity
------------------------
- Colors and typography were approximated from the provided PDF. If you want *exact* color hex codes or fonts, please provide them (or the brand file) and I will update `src/theme.css` and `index.css`.
- Blog data is stored in `src/store/useStore.js` (sample data). Update or connect to a backend as needed.

Enjoy!
