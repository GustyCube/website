/**
 * Utility function to dynamically update meta tags for SPA routing
 * This ensures proper SEO when navigating between different sections
 */

interface MetaTagsConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

export function updateMetaTags(config: MetaTagsConfig): void {
  // Update title
  if (config.title) {
    document.title = config.title;
    updateMetaTag('name', 'title', config.title);
    updateMetaTag('property', 'og:title', config.ogTitle || config.title);
    updateMetaTag('property', 'twitter:title', config.twitterTitle || config.title);
  }

  // Update description
  if (config.description) {
    updateMetaTag('name', 'description', config.description);
    updateMetaTag('property', 'og:description', config.ogDescription || config.description);
    updateMetaTag('property', 'twitter:description', config.twitterDescription || config.description);
  }

  // Update keywords
  if (config.keywords) {
    updateMetaTag('name', 'keywords', config.keywords);
  }

  // Update URLs
  if (config.ogUrl) {
    updateMetaTag('property', 'og:url', config.ogUrl);
    updateMetaTag('property', 'twitter:url', config.ogUrl);
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = config.ogUrl;
    }
  }
}

function updateMetaTag(attrName: 'name' | 'property', attrValue: string, content: string): void {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  
  element.content = content;
}

// Default meta tags for main page
export const DEFAULT_META_TAGS: MetaTagsConfig = {
  title: 'Bennett Schwartz | GustyCube - Full Stack Developer & Systems Architect',
  description: 'Bennett Schwartz, also known as GustyCube, is a full-stack developer and founder building infrastructure-level software, scalable systems, and AI tooling. CEO of Ignyte Solutions.',
  keywords: 'Bennett Schwartz, GustyCube, Bennett Schwartz developer, GustyCube developer, Full Stack Developer, Ignyte Solutions',
  ogUrl: 'https://gustycube.com/',
};

// Meta tags for Minecraft Portfolio page
export const MINECRAFT_META_TAGS: MetaTagsConfig = {
  title: 'Minecraft Portfolio - Bennett Schwartz | GustyCube',
  description: 'Bennett Schwartz (GustyCube) Minecraft portfolio showcasing creative projects, custom builds, and development work in the Minecraft ecosystem.',
  keywords: 'Bennett Schwartz, GustyCube, Minecraft, Portfolio, Game Development, Creative Builds',
  ogUrl: 'https://gustycube.com/#minecraft-portfolio',
};