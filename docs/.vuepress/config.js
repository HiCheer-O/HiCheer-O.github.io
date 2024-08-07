import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
	// 多语言配置
	locales: {
		'/': {
			lang: 'zh-CN',
		},
		'/en/': {
			lang: 'en-US',
		},
	},

	theme: plumeTheme({
		plugins: {
			markdownEnhance: {
				mermaid: true,
				flowchart: true,
			},
			markdownPower: {
				pdf: true,
			},
			// search: {
			// 	page: true
			// },
			docsearch: {
				appId: "JFCS40HD77",
				apiKey: "b58f47d17386a2185e1371aa8f959ba1",
				indexName: "hicheer-oio",
			},
			shiki: {light: 'vitesse-light', dark: 'vitesse-dark', languages: ["c", "cpp", "css", "go", "html", "http", "json", "lua", "nginx", "scss", "sql", "xml", "yaml", "javascript", "shellscript", "vue", "vue-html"], lineNumbers: false },
		},
		lineNumbers: false,
		// 导航栏左边的 logo，logo浅色时，logoDark深色时
		// logo: '',
		// logoDark: '',
		// 部署站点域名。
		hostname: '',
		// 作者信息
		avatar: {
			// 头像
			url: 'https://coupon.heke100.com/hk-data/2024/05/25/3c3d44c8a08343fda93204a1d121b852.png',
			// 昵称
			name: 'HiCheer',
			// 描述
			description: '',
			circle: false, // 是否为圆形头像
		},
		// 个人社交信息配置（顶部导航栏、博客内社交块）
		social: [
			{ icon: 'github', link: 'https://github.com/HiCheer-O' },
			{ icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.59.59 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'}, link: 'https://gitee.com/chen-dangdang/projects' },
			{ icon: 'linkedin', link: 'https://www.linkedin.com/in/%E5%85%9A%E5%85%9A-%E9%99%88-a756a3222/' },
			{ icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="currentColor" d="M34.146 40.802c.553 0 1-.918 1-2.057c0-1.133-.447-2.059-1-2.059s-1 .926-1 2.059c0 1.139.448 2.057 1 2.057m-4.291-4.115c-.553 0-1 .926-1 2.059c0 1.139.447 2.057 1 2.057s1-.918 1-2.057c0-1.134-.447-2.059-1-2.059m-5.722-6.411c-1.797 1.268-3.272 2.461-3.272 2.461s1.494-1.037 3.272-2.461m-4.54-2.941c-.93.725-1.529 1.23-1.529 1.23s.633-.494 1.529-1.23"/><path fill="currentColor" d="M62 32.968c0-3.787-2.568-6.963-6.057-7.922c-.07-.317-.119-.613-.197-.938c-.254-1.071-.729-3.04-1.938-3.844c-1.846-4.32-5.365-7.475-10.432-9.485c1.145-.604 1.885-.908 1.885-.908c-3.236-1.136-6.045-1.802-8.477-2.105c1.279-.961 2.133-1.327 2.133-1.327C21.698 4.01 12.091 12.047 9.503 20.927c-.717.951-1.05 2.344-1.25 3.182c-.077.322-.126.617-.195.932c-3.49.957-6.057 4.139-6.057 7.928c0 3.553 2.258 6.57 5.416 7.725L2 61.999h11.949c-.422-2.088-.313-8.288.056-10.393c4.278 3.905 10.75 6.393 17.995 6.393c7.245 0 13.719-2.487 17.997-6.393c.369 2.104.479 8.305.055 10.393H62L56.584 40.69C59.742 39.538 62 36.521 62 32.968m-57.121 0c0-1.922 1.031-3.576 2.56-4.515c-.525 3.735-.419 6.839.35 9.257c-1.724-.895-2.91-2.67-2.91-4.742M32 22.06s13.264-7.143 18.198-.665c-.186.223-.367.46-.545.692c-.248.326-.658.861-.969 1.161c-1.486-1.193-5.182-3.81-9.037-3.81c-.326 0-.652.02-.969.059c-.799.091-1.398.576-1.607 1.289a2.136 2.136 0 0 0-.08.388c-.584-.171-1.109-.257-1.576-.257c-1.273 0-2 .587-2.383 1.081c-.825 1.06-.747 2.329.318 3.946c-.37.135-.631.348-.805.536c-.258.284-.529.778-.543 1.517c-.014-.738-.285-1.232-.544-1.517a2.045 2.045 0 0 0-.806-.536c1.064-1.617 1.143-2.887.319-3.946c-.384-.494-1.108-1.081-2.384-1.081c-.466 0-.992.086-1.576.257a2.136 2.136 0 0 0-.08-.388c-.209-.713-.811-1.198-1.608-1.289a7.933 7.933 0 0 0-.97-.059c-3.855 0-7.548 2.616-9.034 3.812c-.313-.302-.722-.837-.971-1.163c-.178-.234-.359-.47-.544-.692C18.737 14.917 32 22.06 32 22.06M9.713 24.455c.542-2.276 1.089-3.052 1.658-3.052c1.215 0 2.532 3.541 4.118 3.541c.055 0 .11-.004.166-.014c0 0 4.337-3.99 8.699-3.99c.266 0 .529.013.793.045c1.688.199-3 4.256-5.553 6.35c2.311-1.795 6.666-4.918 8.994-4.918c.513 0 .928.152 1.199.502c1.145 1.473-2.658 4.961-5.653 7.357c2.038-1.439 4.491-2.976 5.677-2.976c.484 0 .756.257.701.882c-.34 3.865-7.879 12.861-12.484 13.777c-.754.15-1.489.23-2.194.23c-5.506.001-9.201-4.793-6.121-17.734M32 56.602c-8.094 0-14.654-4.929-14.654-11.013c0-.701.096-1.385.266-2.048c.236-.036.469-.062.709-.109c5.296-1.052 13.251-10.513 13.681-15.09c.427 4.577 8.381 14.036 13.678 15.092c.24.046.473.071.709.107c.17.663.266 1.347.266 2.048c-.001 6.084-6.561 11.013-14.655 11.013M48.168 42.19c-.705 0-1.441-.08-2.195-.23c-4.605-.916-12.145-9.912-12.482-13.777c-.055-.625.217-.882.701-.882c1.186 0 3.639 1.536 5.678 2.976c-2.994-2.396-6.799-5.885-5.654-7.357c.273-.35.688-.502 1.199-.502c2.328 0 6.684 3.123 8.992 4.918c-2.551-2.096-7.238-6.15-5.553-6.35c.264-.032.529-.045.793-.045c4.363 0 8.701 3.99 8.701 3.99c.057.01.111.014.166.014c1.584 0 2.9-3.541 4.115-3.541c.57 0 1.117.775 1.658 3.052c3.082 12.94-.615 17.734-6.119 17.734m8.395-13.737c1.527.938 2.559 2.593 2.559 4.515c0 2.072-1.186 3.848-2.908 4.74c.768-2.416.874-5.521.349-9.255"/><path fill="currentColor" d="M44.406 27.335c.896.736 1.529 1.23 1.529 1.23s-.597-.505-1.529-1.23m-4.537 2.941c1.779 1.424 3.271 2.461 3.271 2.461s-1.474-1.193-3.271-2.461"/><ellipse cx="37.001" cy="48.044" fill="currentColor" rx="2.719" ry="4.5" transform="rotate(-106.075 37.001 48.044)"/></svg>' }, link: 'https://blog.csdn.net/weixin_49457704?spm=1011.2415.3001.5343' }
		],
		// 限制导航栏中显示个人社交配置
		navbarSocialInclude: ['github'],
		// 博客设置
		blog: {
			pagination: {
				perPage: 10
			},
			// 是否启用标签页
			tags: true,
			// 是否启用归档页
			archives: true
		},
		// 文章链接前缀
		article: '/article/',
		// 设置导航
		locales: {
			'/': {
				navbar: [
					{ text: '首页', link: '/', icon: 'material-symbols:home-outline' },
					{ text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
					// { text: '简历', link: '/user/resume/', icon: 'mdi:resume' },
					{
						text: '个人',
						icon: 'icon-park:personal-collection',
						items: [
								{
									text: '简历',
									link: '/user/resume/',
									icon: 'mdi:resume',
								},
								{
									text: '学历',
									link: '/user/education/',
									icon: 'mdi:education-outline',
								},
								{
									text: '证书',
									link: '/user/certificate/',
									icon: 'ph:certificate-duotone',
								}
						]
					},
					{
						text: '笔记',
						icon: 'emojione-v1:note-pad',
						items: [
							{
								text: '心得感悟',
								icon: 'emojione:thinking-face',
								items: [
									{
										text: '生活',
										link: '/live/',
										icon: 'game-icons:life-in-the-balance',
									},
									{
										text: '读书',
										link: '/book/',
										icon: 'material-symbols-light:book-outline',
									},
									{
										text: '观影',
										link: '/movie/',
										icon: 'ri:movie-2-line',
									},
								],
							},
							{
								text: '经历',
								icon: 'arcticons:pixel-experience',
								items: [
									{
										text: '工作',
										link: '/experience/work/',
										icon: 'healthicons:military-worker-outline',
									},
									{
										text: '大学',
										link: '/experience/university/',
										icon: 'mdi:university-outline',
									},
									{
										text: '高中',
										link: '/experience/high-school/',
										icon: 'mingcute:school-line',
									},
								],
							}
						],
					},
				],
				notes: {
					dir: '/notes',
					link: '/',
					notes: [
						{
							text: '生活',
							link: '/live/',
							dir: '/live/',
							sidebar: [
								{
									text: '生活',
									link: '/live/',
									dir: '/live/',
									collapsed: true,
									items: [
										{
											text: '自己',
											link: '/live/live-001/',
											dir: '/live/live-001/',
											items: []
										},
										{
											text: '在能力范围内做自己能做的事',
											link: '/live/live-002/',
											dir: '/live/live-002/',
											items: []
										},
										{
											text: '喜欢一个人没必要全心全意的付出',
											link: '/live/live-003/',
											dir: '/live/live-003/',
											items: []
										},
									]
								}
							]
						},
						{
							text: '读书',
							link: '/book/',
							dir: '/book/',
							sidebar: [
								{
									text: '读书',
									link: '/book/',
									dir: '/book/',
									collapsed: true,
									items: [
										{
											text: '钢铁是怎么炼成的',
											link: '/book/book-001/',
											dir:  '/book/book-001/',
											items: []
										}
									]
								}
							]
						},
						{
							text: '观影',
							link: '/movie/',
							dir: '/movie/',
							sidebar: [
								{
									text: '观影',
									link: '/movie/',
									dir: '/movie/',
									collapsed: true,
									items: [
										{
											text: '泰坦尼克号',
											link: '/movie/movie-001/',
											dir:  '/movie/movie-001/',
											items: []
										}
									]
								}
							]
						},
					]
				},
			},
			'/en/': {
				navbar: [
					{ text: 'Home', link: '/en/', icon: 'material-symbols:home-outline' },
					{ text: 'Blog', link: '/en/blog/', icon: 'material-symbols:article-outline' },
					{
						text: 'Individual',
						icon: 'icon-park:personal-collection',
						items: [
							{
								text: 'Resume',
								link: '/en/user/resume/',
								icon: 'mdi:resume',
							},
							{
								text: 'Education',
								link: '/en/user/education/',
								icon: 'mdi:education-outline',
							},
							{
								text: 'Certificate',
								link: '/en/user/certificate/',
								icon: 'ph:certificate-duotone',
							}
						]
					},
					{
						text: 'notes',
						icon: 'emojione-v1:note-pad',
						items: [
							{
								text: 'Experience',
								icon: 'emojione:thinking-face',
								items: [
									{
										text: 'Live',
										link: '/en/live/',
										icon: 'game-icons:life-in-the-balance',
									},
									{
										text: 'Book',
										link: '/en/book/',
										icon: 'material-symbols-light:book-outline',
									},
									{
										text: 'Movie',
										link: '/en/movie/',
										icon: 'ri:movie-2-line',
									},
								],
							},
							{
								text: 'Experience',
								icon: 'arcticons:pixel-experience',
								items: [
									{
										text: 'Work',
										link: '/en/experience/work/',
										icon: 'healthicons:military-worker-outline',
									},
									{
										text: 'University',
										link: '/en/experience/university/',
										icon: 'mdi:university-outline',
									},
									{
										text: 'High-School',
										link: '/en/experience/high-school/',
										icon: 'mingcute:school-line',
									},
								],
							}
						]
					},
				],
				notes: {
					dir: '/en/notes',
					link: '/en',
					notes: [
						{
							text: 'Live',
							link: '/live/',
							dir: '/live/',
							sidebar: [
								{
									text: 'Live',
									link: '/en/live/',
									dir: '/live/',
									collapsed: true,
									items: [
										{
											text: 'The scorching summer heat of 2024',
											link: '/en/live/live-001/',
											dir: '/live/live-001/',
											items: []
										}
									]
								}
							]
						},
						{
							text: 'Book',
							link: '/book/',
							dir: '/book/',
							sidebar: [
								{
									text: 'Book',
									link: '/en/book/',
									dir: '/book/',
									collapsed: true,
									items: [
										{
											text: 'How is steel made?',
											link: '/en/book/book-001/',
											dir:  '/book/book-001/',
											items: []
										}
									]
								}
							]
						},
						{
							text: 'Movie',
							link: '/movie/',
							dir: '/movie/',
							sidebar: [
								{
									text: 'Movie',
									link: '/en/movie/',
									dir: '/movie/',
									collapsed: true,
									items: [
										{
											text: 'Titanic',
											link: '/en/movie/movie-001/',
											dir:  '/movie/movie-001/',
											items: []
										}
									]
								}
							]
						},
					]
				},
			}
		},
		// 链接是否激活
		// activeMatch: '^/(blog|article|notes)/',
		footer: { message: '@All, may there be no war in the world.', copyright: '' },
		// 404 页面
		notFound: {
			code: '404',
			title: '哦吼，😯迷路了～',
			quote: '好好想想🤔~',
			linkLabel: '/',
			linkText: '👉 返回首页 👈'
		},
		// 水印
		watermark: {
			global: false,
			onlyPrint: true,
			content: 'HiCheer',
			fullPage: false,
			textColor: {dark: '#ffffff', light: '#111113'},

		},

	}),
	bundler: viteBundler(),
})
