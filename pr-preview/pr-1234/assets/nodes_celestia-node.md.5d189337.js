import{a as n}from"./chunks/arabica_versions.d0d52bfc.js";import{m as l}from"./chunks/mocha_versions.46bb62b1.js";import{m as c}from"./chunks/mainnet_versions.bd478c02.js";import{o as i,c as p,k as s,t as e,l as a,a as t,Q as o}from"./chunks/framework.e094bcbb.js";const d=s("h1",{id:"install-celestia-node",tabindex:"-1"},[t("Install celestia-node "),s("a",{class:"header-anchor",href:"#install-celestia-node","aria-label":'Permalink to "Install celestia-node"'},"​")],-1),r=s("p",null,[t("This tutorial goes over building and installing celestia-node. This tutorial assumes you completed the steps in "),s("a",{href:"./environment"},"setting up your development environment"),t(".")],-1),h=s("p",null,"Install the celestia-node binary by running the following commands:",-1),_=o(`<li><p>Remove any existing copy of celestia-node, clone the repository, and change into the directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-node</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/celestiaorg/celestia-node.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-node/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-node</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/celestiaorg/celestia-node.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-node/</span></span></code></pre></div></li>`,1),y=s("p",null,"Check out to the desired version, based on the network you will use:",-1),u={class:"vp-code-group vp-adaptive-theme"},g=o('<div class="tabs"><input type="radio" name="group-3YKCl" id="tab-kZrSXRa" checked="checked"><label for="tab-kZrSXRa">Mainnet Beta</label><input type="radio" name="group-3YKCl" id="tab-i8ObnB4"><label for="tab-i8ObnB4">Mocha</label><input type="radio" name="group-3YKCl" id="tab-AUQ3fSO"><label for="tab-AUQ3fSO">Arabica</label></div>',1),b={class:"blocks"},v={class:"language-bash vp-adaptive-theme active"},E=s("button",{title:"Copy Code",class:"copy"},null,-1),k=s("span",{class:"lang"},"bash",-1),F={class:"shiki github-dark vp-code-dark"},m={class:"line"},C=s("span",{style:{color:"#B392F0"}},"git",-1),f=s("span",{style:{color:"#E1E4E8"}}," ",-1),B=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),T=s("span",{style:{color:"#E1E4E8"}}," ",-1),S={style:{color:"#9ECBFF"}},V={class:"shiki github-light vp-code-light"},A={class:"line"},I=s("span",{style:{color:"#6F42C1"}},"git",-1),P=s("span",{style:{color:"#24292E"}}," ",-1),x=s("span",{style:{color:"#032F62"}},"checkout",-1),N=s("span",{style:{color:"#24292E"}}," ",-1),w={style:{color:"#032F62"}},R={class:"language-bash vp-adaptive-theme"},O=s("button",{title:"Copy Code",class:"copy"},null,-1),U=s("span",{class:"lang"},"bash",-1),D={class:"shiki github-dark vp-code-dark"},M={class:"line"},q=s("span",{style:{color:"#B392F0"}},"git",-1),H=s("span",{style:{color:"#E1E4E8"}}," ",-1),j=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),K=s("span",{style:{color:"#E1E4E8"}}," ",-1),L={style:{color:"#9ECBFF"}},Q={class:"shiki github-light vp-code-light"},Y={class:"line"},X=s("span",{style:{color:"#6F42C1"}},"git",-1),Z=s("span",{style:{color:"#24292E"}}," ",-1),$=s("span",{style:{color:"#032F62"}},"checkout",-1),G=s("span",{style:{color:"#24292E"}}," ",-1),J={style:{color:"#032F62"}},z={class:"language-bash vp-adaptive-theme"},W=s("button",{title:"Copy Code",class:"copy"},null,-1),ss=s("span",{class:"lang"},"bash",-1),es={class:"shiki github-dark vp-code-dark"},as={class:"line"},os=s("span",{style:{color:"#B392F0"}},"git",-1),ts=s("span",{style:{color:"#E1E4E8"}}," ",-1),ns=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),ls=s("span",{style:{color:"#E1E4E8"}}," ",-1),cs={style:{color:"#9ECBFF"}},is={class:"shiki github-light vp-code-light"},ps={class:"line"},ds=s("span",{style:{color:"#6F42C1"}},"git",-1),rs=s("span",{style:{color:"#24292E"}}," ",-1),hs=s("span",{style:{color:"#032F62"}},"checkout",-1),_s=s("span",{style:{color:"#24292E"}}," ",-1),ys={style:{color:"#032F62"}},us=o('<li><p>Build the <code>celestia</code> binary:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre></div></li><li><p>Install the binary:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-RA1Hj" id="tab-VkbVx2_" checked="checked"><label for="tab-VkbVx2_">Ubuntu</label><input type="radio" name="group-RA1Hj" id="tab-3o3PUl9"><label for="tab-3o3PUl9">Mac</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">go-install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">go-install</span></span></code></pre></div></div></div></li><li><p>Build the <code>cel-key</code> utility:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cel-key</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cel-key</span></span></code></pre></div></li><li><p>Verify that the binary is working and check the version:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span></span></code></pre></div></li>',4),gs=o('<p>The output will show the semantic version of celestia-node, commit hash, build date, system version, and Golang version.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>First, we recommend <a href="./overview">reading the overview</a> of our node types, if you haven&#39;t yet.</p><p>Now that you&#39;ve installed Celestia Node, it&#39;s time to <a href="./decide-node">pick your node type</a> and run your node!</p><p>If you&#39;re planning to run a light node, we recommend the <a href="./../developers/node-tutorial">node RPC CLI tutorial</a>.</p><h2 id="upgrading-your-binary" tabindex="-1">Upgrading your binary <a class="header-anchor" href="#upgrading-your-binary" aria-label="Permalink to &quot;Upgrading your binary&quot;">​</a></h2><p>To upgrade your binary, you can install the latest version from the instructions above and restart your node. If you run into any issues, Refer to the <a href="./celestia-node-troubleshooting">troubleshooting section</a>.</p>',7),Bs=JSON.parse('{"title":"Install celestia-node","description":"Learn to build and install celestia-node.","frontmatter":{"description":"Learn to build and install celestia-node.","head":[["meta",{"name":"og:title","content":"Install celestia-node | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-node.md","filePath":"nodes/celestia-node.md","lastUpdated":1698861264000}'),bs={name:"nodes/celestia-node.md"},Ts=Object.assign(bs,{setup(vs){return(Es,ks)=>(i(),p("div",null,[d,r,h,s("ol",null,[_,s("li",null,[y,s("div",u,[g,s("div",b,[s("div",v,[E,k,s("pre",F,[s("code",null,[s("span",m,[C,f,B,T,s("span",S,"tags/"+e(a(c)["node-latest-tag"]),1)])])]),s("pre",V,[s("code",null,[s("span",A,[I,P,x,N,s("span",w,"tags/"+e(a(c)["node-latest-tag"]),1)])])])]),s("div",R,[O,U,s("pre",D,[s("code",null,[s("span",M,[q,H,j,K,s("span",L,"tags/"+e(a(l)["node-latest-tag"]),1)])])]),s("pre",Q,[s("code",null,[s("span",Y,[X,Z,$,G,s("span",J,"tags/"+e(a(l)["node-latest-tag"]),1)])])])]),s("div",z,[W,ss,s("pre",es,[s("code",null,[s("span",as,[os,ts,ns,ls,s("span",cs,"tags/"+e(a(n)["node-latest-tag"]),1)])])]),s("pre",is,[s("code",null,[s("span",ps,[ds,rs,hs,_s,s("span",ys,"tags/"+e(a(n)["node-latest-tag"]),1)])])])])])])]),us]),gs]))}});export{Bs as __pageData,Ts as default};
