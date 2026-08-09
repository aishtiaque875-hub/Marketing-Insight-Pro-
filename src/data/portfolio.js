import { portfolioImages } from './portfolioImages.js'

/**
 * Portfolio items — one per service we actually deliver.
 * Meta Ads · SEO · Content Writing · Video Editing ·
 * Social Media Post Design · Social Media Managing
 */
export const portfolioItems = [
  {
    slug: 'meta-ads',
    category: 'Meta Ads',
    title: 'Facebook & Instagram Ad Campaigns',
    image: portfolioImages['meta-ads'],
    description:
      'Full campaign builds for e-commerce and service brands — audience research, creative testing and daily optimisation inside Meta Ads Manager.',
    highlights: [
      'Audience, interest & lookalike targeting structures',
      'Scroll-stopping image and video ad creatives',
      'A/B tested headlines, hooks and offers',
      'Pixel setup with clean conversion tracking',
    ],
    tools: ['Meta Ads Manager', 'Meta Business Suite', 'Pixel & Events'],
  },
  {
    slug: 'seo',
    category: 'SEO',
    title: 'Search Engine Optimization Projects',
    image: portfolioImages['seo'],
    description:
      'On-page, technical and content SEO work that moves business websites onto page one for the keywords their buyers actually search.',
    highlights: [
      'Keyword research & search intent mapping',
      'On-page optimisation, titles, meta & schema',
      'Technical fixes: speed, indexing, Core Web Vitals',
      'Monthly ranking and traffic reporting',
    ],
    tools: ['Google Search Console', 'SEMrush', 'Google Analytics'],
  },
  {
    slug: 'content-writing',
    category: 'Content Writing',
    title: 'Website Copy, Blogs & Ad Copy',
    image: portfolioImages['content-writing'],
    description:
      'Clear, persuasive writing for landing pages, blog articles, email sequences and ad copy — written to be read and to convert.',
    highlights: [
      'Landing page & sales page copy',
      'SEO blog articles and pillar content',
      'Email sequences and newsletters',
      'Ad copy variations for Meta campaigns',
    ],
    tools: ['SurferSEO', 'Grammarly', 'Google Docs'],
  },
  {
    slug: 'video-editing',
    category: 'Video Editing',
    title: 'Reels, Shorts & Ad Video Edits',
    image: portfolioImages['video-editing'],
    description:
      'Short-form edits built for retention — strong opening hooks, clean captions, motion graphics, colour grading and sound design.',
    highlights: [
      'Hook-first Reels, TikToks & YouTube Shorts',
      'Animated subtitles and motion graphics',
      'Colour grading & audio clean-up',
      'Vertical (9:16) and landscape (16:9) exports',
    ],
    tools: ['Adobe Premiere Pro', 'After Effects', 'CapCut'],
  },
  {
    slug: 'social-media-post-design',
    category: 'Social Media Post Design',
    title: 'Branded Post & Carousel Design',
    image: portfolioImages['social-media-post-design'],
    description:
      'Consistent, on-brand graphics for Instagram, Facebook and LinkedIn — single posts, carousels, promotions and story sets.',
    highlights: [
      'Reusable branded post templates',
      'Multi-slide carousel layouts',
      'Offer, promo & announcement creatives',
      'Story and highlight cover sets',
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Canva Pro'],
  },
  {
    slug: 'social-media-managing',
    category: 'Social Media Managing',
    title: 'Page Management & Content Calendars',
    image: portfolioImages['social-media-managing'],
    description:
      'Day-to-day management of business pages: planned content calendars, scheduled posting, captions, hashtags and community replies.',
    highlights: [
      '30-day content calendars & scheduling',
      'Captions, hashtags and posting strategy',
      'Comment & DM community management',
      'Monthly growth and engagement reports',
    ],
    tools: ['Meta Business Suite', 'Later', 'Canva Pro'],
  },
]
