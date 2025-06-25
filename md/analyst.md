## Visual Flow (like Respawn site)

| Header ------------------------- (fixed)
| SidebarMenu (right) ----------- (fixed)
|
| [GameSection: Apex Legends]
| [GameSection: Jedi Fallen Order]
| [GameSection: Titanfall 2]
|
| Scroll down to see new game...

## Suggested Component Structure

/components
├── Header.jsx
├── SidebarMenu.jsx
├── GameSection.jsx ← Each section: Titanfall 2, Apex Legends, etc.
└── ScrollWrapper.jsx ← Holds all scrollable sections

/pages
└── index.jsx ← Combines fixed + scrollable layout
