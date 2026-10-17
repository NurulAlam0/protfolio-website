# Siyam | Portfolio

A personal portfolio for showcasing full-stack development work, skills, and contact information. Built with React and TypeScript, with a responsive layout, light and dark themes, and motion effects.

## Features

- Responsive portfolio sections for about, selected work, capabilities, skills, and contact
- Light and dark theme toggle
- Animated section entrances with reduced-motion support
- Project archive at `/work`
- Contact details with a copy-to-clipboard action

## Tech Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide icons

## Run Locally

Use a recent version of Node.js, then install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal when the server is ready.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Run the TypeScript build and create a production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```text
public/
	projects/       Project images and public assets
src/
	assets/         Imported assets, including the profile photo
	components/     Portfolio sections and shared UI
	context/        Theme state
	data/           Personal details, projects, skills, and experience
	pages/          Home page and project archive
```

## Update Portfolio Content

- Edit `src/data/personal.ts` to update the profile, contact details, and social links.
- Edit `src/data/projects.ts` to update the project archive and featured work.
- Edit `src/data/skills.ts` to update capabilities and skill groups.
- Replace `src/assets/My Pic.png` to use a different Hero portrait.
