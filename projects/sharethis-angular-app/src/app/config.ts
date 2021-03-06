export const StickyButtonsConfig = {
  alignment: 'left', // alignment of buttons (left, right)
  color: 'social', // set the color of buttons (social, white)
  enabled: true, // show/hide buttons (true, false)
  font_size: 16, // font size for the buttons
  hide_desktop: false, // hide buttons on desktop (true, false)
  labels: 'counts', // button labels (cta, counts, null)
  language: 'en', // which language to use (see LANGUAGES)
  min_count: 0, // hide react counts less than min_count (INTEGER)
  networks: [
    // which networks to include (see SHARING NETWORKS)
    'linkedin',
    'facebook',
    'twitter',
    'pinterest',
    'email',
  ],
  padding: 12, // padding within buttons (INTEGER)
  radius: 4, // the corner radius on each button (INTEGER)
  show_total: true, // show/hide the total share count (true, false)
  show_mobile: true, // show/hide the buttons on mobile (true, false)
  show_toggle: true, // show/hide the toggle buttons (true, false)
  size: 48, // the size of each button (INTEGER)
  top: 160, // offset in pixels from the top of the page

  // OPTIONAL PARAMETERS
  url: 'https://www.sharethis.com', // (defaults to current url)
  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
  description: 'custom text', // (defaults to og:description or twitter:description)
  title: 'custom title', // (defaults to og:title or twitter:title)
  message: 'custom email text', // (only for email sharing)
  subject: 'custom email subject', // (only for email sharing)
  username: 'custom twitter handle', // (only for twitter sharing)
};

export const InlineShareButtonsConfig = {
  alignment: 'center', // alignment of buttons (left, center, right)
  color: 'social', // set the color of buttons (social, white)
  enabled: true, // show/hide buttons (true, false)
  font_size: 16, // font size for the buttons
  labels: 'cta', // button labels (cta, counts, null)
  language: 'en', // which language to use (see LANGUAGES)
  networks: [
    // which networks to include (see SHARING NETWORKS)
    'whatsapp',
    'linkedin',
    'messenger',
    'facebook',
    'twitter',
  ],
  padding: 12, // padding within buttons (INTEGER)
  radius: 4, // the corner radius on each button (INTEGER)
  show_total: true,
  size: 40, // the size of each button (INTEGER)

  // OPTIONAL PARAMETERS
  url: 'https://www.sharethis.com', // (defaults to current url)
  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
  description: 'custom text', // (defaults to og:description or twitter:description)
  title: 'custom title', // (defaults to og:title or twitter:title)
  message: 'custom email text', // (only for email sharing)
  subject: 'custom email subject', // (only for email sharing)
  username: 'custom twitter handle', // (only for twitter sharing)
};

export const InlineReactionButtonsConfig = {
  alignment: 'center', // alignment of buttons (left, center, right)
  enabled: true, // show/hide buttons (true, false)
  language: 'en', // which language to use (see LANGUAGES)
  min_count: 0, // hide react counts less than min_count (INTEGER)
  padding: 12, // padding within buttons (INTEGER)
  reactions: [
    // which reactions to include (see REACTIONS)
    'slight_smile',
    'heart_eyes',
    'laughing',
    'astonished',
    'sob',
    'rage',
  ],
  size: 48, // the size of each button (INTEGER)
  spacing: 8, // the spacing between buttons (INTEGER)

  // OPTIONAL PARAMETERS
  url: 'https://www.sharethis.com', // (defaults to current url)
};

export const InlineFollowButtonsConfig = {
  action: 'Follow us:', // call to action (STRING)
  action_enable: true, // show/hide call to action (true, false)
  action_pos: 'bottom', // position of call to action (left, top, right)
  alignment: 'center', // alignment of buttons (left, center, right)
  color: 'white', // set the color of buttons (social, white)
  enabled: true, // show/hide buttons (true, false)
  networks: [
    // which networks to include (see FOLLOW NETWORKS)
    'twitter',
    'facebook',
    'instagram',
    'youtube',
  ],
  padding: 8, // padding within buttons (INTEGER)
  profiles: {
    // social profile links for buttons
    twitter: 'sharethis',
    facebook: 'sharethis',
    instagram: 'sharethis',
    youtube: '/channel/UCbM93niCmdc2RD9RZbLMP6A?view_as=subscriber',
  },
  radius: 9, // the corner radius on each button (INTEGER)
  size: 32, // the size of each button (INTEGER)
  spacing: 8, // the spacing between buttons (INTEGER)
};
