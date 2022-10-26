import {
  InlineFollowButtonsConfig as InlineFollowButtonsConfigType,
  InlineShareButtonsConfig as InlineShareButtonsConfigType,
  InlineReactionButtonsConfig as InlineReactionButtonsConfigType,
  StickyShareButtonsConfig as StickyShareButtonsConfigType,
} from 'sharethis-angular';

export const StickyShareButtonsConfig: StickyShareButtonsConfigType = {
  networks: [
    // which networks to include (see SHARING NETWORKS)
    'linkedin',
    'facebook',
    'twitter',
    'pinterest',
    'email',
  ],

  // OPTIONAL PARAMETERS
  url: 'https://www.sharethis.com', // (defaults to current url)
  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
  description: 'custom text', // (defaults to og:description or twitter:description)
  title: 'custom title', // (defaults to og:title or twitter:title)
  message: 'custom email text', // (only for email sharing)
  subject: 'custom email subject', // (only for email sharing)
  username: 'custom twitter handle', // (only for twitter sharing)
};

export const InlineShareButtonsConfig: InlineShareButtonsConfigType = {
  networks: [
    // which networks to include (see SHARING NETWORKS)
    'whatsapp',
    'linkedin',
    'messenger',
    'facebook',
    'twitter',
  ],

  // OPTIONAL PARAMETERS
  url: 'https://www.sharethis.com', // (defaults to current url)
  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
  description: 'custom text', // (defaults to og:description or twitter:description)
  title: 'custom title', // (defaults to og:title or twitter:title)
  message: 'custom email text', // (only for email sharing)
  subject: 'custom email subject', // (only for email sharing)
  username: 'custom twitter handle', // (only for twitter sharing)
};

export const InlineReactionButtonsConfig: InlineReactionButtonsConfigType = {
  reactions: [
    // which reactions to include (see REACTIONS)
    'slight_smile',
    'heart_eyes',
    'laughing',
    'astonished',
    'sob',
    'rage',
  ],
};

export const InlineFollowButtonsConfig: InlineFollowButtonsConfigType = {
  networks: [
    // which networks to include (see FOLLOW NETWORKS)
    'twitter',
    'facebook',
    'instagram',
    'youtube',
  ],
  profiles: {
    // social profile links for buttons
    twitter: 'sharethis',
    facebook: 'sharethis',
    instagram: 'sharethis',
    youtube: '/channel/UCbM93niCmdc2RD9RZbLMP6A?view_as=subscriber',
  },
};
