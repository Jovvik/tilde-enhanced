const CONFIG = {
	/**
	 * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
	 * Icons must be added to "icons" folder and their values/names must be updated.
	 * If none of the specified keys are matched, the '*' key is used.
	 * Commands without a category don't show up in the help menu.
	 * Update line 11 and 13 if you prefer using Google.
	 */
	commands: [
		{
			name: 'Google',
			key: '*',
			url: 'https://google.com',
			search: '/search?q={}',
		},
		{
			category: 'General',
			name: 'Mail',
			key: 'm',
			url: 'https://gmail.com',
			search: '/#search/text={}',
			color: 'linear-gradient(135deg, #dd5145, #dd5145)',
			icon: 'mail',
			quickLaunch: true,
		},
		{
			category: 'General',
			name: 'Drive',
			key: 'd',
			url: 'https://drive.google.com',
			search: '/drive/search?q={}',
			color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
			icon: 'drive',
			quickLaunch: false,
		},
		{
			category: 'General',
			name: 'Notion',
			key: 'ns',
			url: 'https://www.notion.so',
			color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
			icon: 'notion',
			quickLaunch: true,
		},
		{
			category: 'General',
			name: 'Translate',
			key: 'tr',
			url: 'https://translate.google.com/',
			search: '/#view=home&op=translate&sl=auto&tl=en&text={}',
			color: 'linear-gradient(135deg, #FFF, #0394fc)',
			icon: 'translate',
			quickLaunch: false,
		},

		{
			category: 'Programming',
			name: 'GitHub',
			key: 'g',
			url: 'https://github.com',
			search: '/search?q={}',
			color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
			icon: 'github',
			quickLaunch: true,
		},
		{
			category: 'Programming',
			name: 'StackOverflow',
			key: 'st',
			url: 'https://stackoverflow.com',
			search: '/search?q={}',
			color: 'linear-gradient(135deg, #53341C, #F48024)',
			icon: 'stackoverflow',
			quickLaunch: true,
		},
		{
			category: 'Programming',
			name: 'CppReference',
			key: 'cr',
			url: 'https://en.cppreference.com',
			search: '/mwiki/index.php?search={}',
			color: 'linear-gradient(135deg, #FFF, #0394fc)',
			icon: 'cppreference',
			quickLaunch: true,
		},

		{
			category: 'Fun',
			name: 'YouTube',
			key: 'y',
			url: 'https://youtube.com',
			search: '/results?search_query={}',
			color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
			icon: 'youtube',
			quickLaunch: false,
		},
		{
			category: 'Fun',
			name: 'Smotret-anime',
			key: 'sa',
			url: 'https://smotret-anime.online',
			search: '/catalog/search?q={}',
			color: 'linear-gradient(135deg, #54ffa1, #5fff54)',
			icon: 'smotret-anime',
			quickLaunch: false,
		},

		{
			category: 'Fun',
			name: 'Reddit',
			key: 'r',
			url: 'https://reddit.com',
			search: '/search?q={}',
			color: 'linear-gradient(135deg, #FF8456, #FF4500)',
			icon: 'reddit',
			quickLaunch: false,
		},
		{
			category: 'Fun',
			name: 'VK',
			key: 'vk',
			url: 'https://vk.com',
			search: '/search?q={}',
			color: 'linear-gradient(135deg, #4747c9, #2c2c36)',
			icon: 'vk',
			quickLaunch: false,
		},

		{
			category: 'TUM',
			name: 'Intranet',
			key: 'tu',
			url: 'http://campus.tum.de/',
			color: 'linear-gradient(135deg, #4747c9, #AcAcA6)',
			icon: 'tumonline',
		},
		{
			category: 'TUM',
			name: 'Uni-assist',
			key: 'ua',
			url: 'https://my.uni-assist.de/',
			color: 'linear-gradient(135deg, #4747c9, #2c2c36)',
			icon: 'uni-assist',
		},
	],

	/**
	 * Get suggestions as you type.
	 */
	suggestions: true,
	suggestionsLimit: 4,

	/**
	 * The order and limit for each suggestion influencer. An "influencer" is
	 * just a suggestion source. The following influencers are available:
	 *
	 * - "Commands" suggestions come from CONFIG.commands
	 * - "Default" suggestions come from CONFIG.defaultSuggestions
	 * - "DuckDuckGo" suggestions come from the duck duck go search api
	 * - "History" suggestions come from your previously entered queries
	 */
	influencers: [
		{
			name: 'Commands',
			limit: 2,
		},
		{
			name: 'Default',
			limit: 4,
		},
		{
			name: 'History',
			limit: 1,
		},
		{
			name: 'DuckDuckGo',
			limit: 4,
		},
	],

	/**
	 * Default search suggestions for the specified queries.
	 */
	defaultSuggestions: {
		g: ['g/issues', 'g/pulls', 'gist.github.com'],
		r: ['r/r/unixporn', 'r/r/startpages', 'r/r/technology'],
	},

	/**
	 * Instantly redirect when a key is matched. Put a space before any other
	 * queries to prevent unwanted redirects.
	 */
	instantRedirect: false,

	/**
	 * Open triggered queries in a new tab.
	 */
	newTab: false,

	/**
	 * Dynamic overlay background colors when command domains are matched.
	 */
	colors: true,

	/**
	 * Invert color theme
	 */
	invertedColors: false,

	/**
	 * Show keys instead of icons
	 */
	showKeys: false,

	/**
	 * The delimiter between a command key and your search query. For example,
	 * to search GitHub for potatoes, you'd type "g:potatoes".
	 */
	searchDelimiter: ':',

	/**
	 * The delimiter between a command key and a path. For example, you'd type
	 * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
	 */
	pathDelimiter: '/',

	/**
	 * The delimiter between the hours and minutes on the clock.
	 */
	clockDelimiter: ' ',

	/**
	 * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
	 */
	twentyFourHourClock: true,

	/**
	 * File extension for icon images
	 */
	iconExtension: 'png',
};
