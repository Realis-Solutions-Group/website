import { useEffect } from 'react';
import { FONT_LINKS } from '../constants/themes';

const FONT_LINK_ID = 'realis-fonts';

/**
 * Injects or updates the Google Fonts stylesheet link for the active theme.
 */
export function useThemeFonts(themeId) {
  useEffect(() => {
    const href = FONT_LINKS[themeId];
    if (!href) return;

    let link = document.getElementById(FONT_LINK_ID);
    if (!link) {
      link = document.createElement('link');
      link.id = FONT_LINK_ID;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = href;
  }, [themeId]);
}
