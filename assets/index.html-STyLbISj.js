import{_ as s,c as i,o as a,a as e}from"./app-Y7YybkpV.js";const t="/assets/image-20240915145023033-CJzK_Ke7.png",n="/assets/image-20240915142512947-DiB6luZl.png",p="/assets/image-20240915145142914-BVzC5GFe.png",l="/assets/image-20240915144744872-nKUfgBKy.png",h="/assets/image-20240915144809103-Cyux_nGe.png",d="/assets/image-20240915144720146-ByqXtGOg.png",c="/assets/image-20240915145228888-DiLIZsg9.png",o="/assets/image-20240915145307900-8L0MCkw1.png",k="/assets/image-20240915163826717-CXptwJBy.png",r="/assets/image-20240915163851648-CUc4kLL5.png",g={},m=e('<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h3><blockquote><p>本次安装使用的是 <code>Docker</code>与<code>docker-compose</code>，相对于传统的二进制文件安装相比，不需要关心复杂的服务器环境，只需要在服务器上安装 <code>Docker</code>即可；使用 <code>Docker</code>的时候我们只关注数据的持久化和<code>Docker容器</code>与<code>宿主机</code>的端口映射即可，其中数据持久化包括 <code>conf</code>、<code>data</code>等。</p></blockquote><h3 id="基础环境" tabindex="-1"><a class="header-anchor" href="#基础环境"><span>基础环境</span></a></h3><table><thead><tr><th>名称</th><th>版本</th></tr></thead><tbody><tr><td>服务器及操作系统</td><td>Linux、Centos 7</td></tr><tr><td>Docker</td><td>Docker version 26.1.3</td></tr><tr><td>Docker Compose</td><td>Docker Compose version v2.27.1</td></tr></tbody></table><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><ol><li><p>创建 mysql 文件夹及进入mysql 文件夹</p><div class="language-bash" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/redis</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/redis</span></span></code></pre></div><p><img src="'+t+'" alt="image-20240915145023033" width="2086" height="198"></p></li><li><p>创建配置文件<code>redis.conf</code></p><blockquote><p>由于配置文件内容很多，并且容器内也没有配置文件，因此我就放到了我的<code>github</code>中；</p><p>仓库地址：<a href="https://github.com/HiCheer-O/redis-conf" target="_blank" rel="noopener noreferrer">redis.conf</a></p><p>包含版本：<code>5.x</code>、<code>6.x</code>、<code>7.x</code></p><p>我因为<code>redis</code>下载的是最新版本（7.x），因此用的是<code>7.x.conf</code></p></blockquote><p><img src="'+n+'" alt="image-20240915142512947" width="5076" height="1440"></p><div class="language-bash" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> redis.conf</span></span></code></pre></div><p><img src="'+p+`" alt="image-20240915145142914" width="1812" height="2034"></p><blockquote><p>⚠️注意需要修改<code>redis.conf</code>中<code>三个</code>位置</p></blockquote><div class="language-conf" data-ext="conf" data-title="conf"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span># 允许任何 ip 地址可以访问，默认只允许本机访问，在文件的 87 行左右</span></span>
<span class="line"><span>bind 0.0.0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 保护模式，默认 yes，在文件的 112 行左右</span></span>
<span class="line"><span>protected-mode no</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 密码，默认 空，在文件的 1037 行左右</span></span>
<span class="line"><span>requirepass 123456</span></span></code></pre></div><p><img src="`+l+'" alt="image-20240915144744872" width="1964" height="568"></p><p><img src="'+h+'" alt="image-20240915144809103" width="1672" height="362"></p><p><img src="'+d+`" alt="image-20240915144720146" width="2116" height="448"></p></li><li><p>创建<code>docker-compose.yml</code></p><div class="language-bash" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker-compose.yml</span></span></code></pre></div><div class="language-yml" data-ext="yml" data-title="yml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">3.8</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">services</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  redis</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> redis:latest</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    container_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> base-redis</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> always</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    volumes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./data:/data</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                                  # 挂载数据目录</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./redis.conf:/usr/local/etc/redis/redis.conf</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 挂载配置文件</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    command</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">redis-server</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/etc/redis/redis.conf</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 使用挂载的配置文件启动 Redis</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    ports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">6379:6379</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre></div><p><img src="`+c+'" alt="image-20240915145228888" width="2264" height="634"></p></li><li><p>启动</p><div class="language-bash" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker-compose</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> up</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span></span></code></pre></div><p><img src="'+o+'" alt="image-20240915145307900" width="3566" height="798"></p></li></ol><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h3><p><img src="'+k+'" alt="image-20240915163826717" width="3920" height="1578"></p><p><img src="'+r+'" alt="image-20240915163851648" width="5198" height="1532"></p>',9),y=[m];function u(A,v){return a(),i("div",null,y)}const D=s(g,[["render",u],["__file","index.html.vue"]]),B=JSON.parse(`{"path":"/article/a66kh2i2/","title":"Redis 安装及配置","lang":"zh-CN","frontmatter":{"title":"Redis 安装及配置","author":"HiCheer","createTime":"2024/09/12 11:27:54","permalink":"/article/a66kh2i2/","tags":["运维","Docker","Redis"],"head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"基础环境","slug":"基础环境","link":"#基础环境","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]}],"readingTime":{"minutes":1.44,"words":433},"git":{"createdTime":1726124423000,"updatedTime":1726390502000,"contributors":[{"name":"HiCheer-O","email":"chendangdang1998@gmail.com","commits":2}]},"filePathRelative":"中间键/redis/Redis 安装及配置.md","categoryList":[{"id":"57f88c","sort":10003,"name":"中间键"},{"id":"4a86b1","sort":10005,"name":"redis"}]}`);export{D as comp,B as data};
