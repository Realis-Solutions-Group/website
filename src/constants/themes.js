/**
 * Theme configuration: display labels, data-theme values, and Google Fonts URLs.
 * Used by ThemeSwitcher and App for font loading.
 */

export const THEME_IDS = {
  DARK: 'dark',
  EXECUTIVE: 'executive',
  EDITORIAL: 'editorial',
};

export const THEMES = [
  { id: THEME_IDS.DARK, label: 'Dark Intelligence' },
  { id: THEME_IDS.EXECUTIVE, label: 'Platinum Executive' },
  { id: THEME_IDS.EDITORIAL, label: 'Bold Editorial' },
];

export const FONT_LINKS = {
  [THEME_IDS.DARK]:
    'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
  [THEME_IDS.EXECUTIVE]:
    'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400;700&display=swap',
  [THEME_IDS.EDITORIAL]:
    'https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;1,9..40,400&display=swap',
};

export const DEFAULT_THEME = THEME_IDS.DARK;
