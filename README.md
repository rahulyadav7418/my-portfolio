# My Portfolio

A single-page personal portfolio built with plain HTML, CSS, and JavaScript, showcasing my frontend/MERN stack skills, project, and background.

**Live preview (Claude-hosted, works right now):**
https://claude.ai/artifact/PHYAgMPdnmFP4AW2DjXmmC

**Live demo (GitHub Pages — set this up below):**
`https://rahulyadav7418.github.io/portfolio/` — replace `portfolio` with whatever you name the repo, once you've deployed it (steps below).

## Tech used to build this page
HTML5, CSS3 (custom properties, no framework), and vanilla JavaScript, split into separate files. No build step, no dependencies — open `index.html` and it just works.

## Folder structure
```
.
├── index.html              # markup only
├── style.css                # all styling
├── script.js                 # theme toggle, hero typing effect, resume modal
├── resume.pdf               # downloadable resume
├── assets/
│   ├── profile.jpg         # hero photo
│   └── resume-preview.png  # image shown in the "My resume" modal
└── README.md
```

## Run it locally
Just open `index.html` in a browser — no server or build tools required.

## Deploy it on GitHub Pages (free, gives you a real live link)
1. Create a new GitHub repository (e.g. `portfolio`) and push all these files to it (keep the folder structure above — `index.html` must be in the repo root).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then **Save**.
5. Wait a minute or two — GitHub will give you a live URL like `https://<your-username>.github.io/<repo-name>/`.
6. Update the "Live demo" link at the top of this README (and anywhere else you share it) with that URL.

## Editing your content
Page text and structure — skills, the project, contact links — lives in `index.html`, grouped into `<section>` blocks (`about`, `skills`, `strengths`, `experience`, `projects`, `certifications`, `contact`). Colors, spacing, and layout are in `style.css`. Interactive behavior (theme toggle, hero typing effect, resume preview modal) is in `script.js`. To update your resume, replace `resume.pdf` and `assets/resume-preview.png` with new versions (same filenames), and edit the hero stats / bio text directly in `index.html`.

## License
Personal project — feel free to fork the structure for your own portfolio, but please swap in your own content, photo, and resume before publishing it as yours.
