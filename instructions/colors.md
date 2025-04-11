Color Palette defined in :root:
Main Background (--background-color): #f8f9fa (Light Gray). Note: The image appears slightly more blue/cyan, but the code defines it as light gray.
Primary Content Background (--primary-color): #ffffff (White). Used for the header, skill cards, and project cards.
Main Text (--text-color): #212529 (Dark Gray/Almost Black). Used for body text, headers, and card content.
Accent Color (--accent-color): #007bff (Vibrant Blue). Used for section title underlines (like under "Skills" and "Projects"), project titles, and footer links.
Secondary Text (--secondary-text-color): #6c757d (Medium Gray). Used for the subtitle below your name ("Developer | San Francisco, CA") and footer text.
Borders (--border-color): #dee2e6 (Light Gray). Used for card borders and the profile image border.
Shadows (--shadow-color): rgba(0, 0, 0, 0.05) (Very light, subtle black). Used for header and card shadows.
Things to Remember:
Consistency: Use the defined CSS variables (like --background-color, --text-color, --accent-color) consistently across components to maintain the theme.
Background Discrepancy: Be mindful that the main background color defined in the CSS (#f8f9fa) is light gray, even though the image might look slightly blueish. Decide which one is correct and ensure consistency.
Accent Usage: The vibrant blue (#007bff) is used specifically for highlighting elements like links, section underlines, and key titles within cards. Use it purposefully.
Hierarchy: Use --text-color for primary text and --secondary-text-color for less important text (like subtitles or metadata) to create visual hierarchy.
Card Styling: Cards use a white background (--primary-color), light gray border (--border-color), and a subtle shadow (--shadow-color). Maintain this style for similar elements.
Hover Effects: Footer links use a darker blue (#0056b3) on hover. Consider applying consistent hover effects to other interactive elements if needed.
