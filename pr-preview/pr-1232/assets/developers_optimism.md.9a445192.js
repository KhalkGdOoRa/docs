import{c as s}from"./chunks/constants.d2a00a0d.js";import{o as n,c as l,k as e,t,l as a,Q as o}from"./chunks/framework.d468a620.js";const i=o('<h1 id="deploy-an-op-stack-testnet-with-celestia" tabindex="-1">Deploy an OP Stack testnet with Celestia <a class="header-anchor" href="#deploy-an-op-stack-testnet-with-celestia" aria-label="Permalink to &quot;Deploy an OP Stack testnet with Celestia&quot;">​</a></h1><p>In order to deploy a testnet with Celestia, you will need to have a modified version of <code>optimism-bedrock</code>. Refer to the <a href="./optimism-devnet">steps to install dependencies and the modified version of OP Stack</a> for your environment setup.</p><h2 id="pick-your-deployment-type" tabindex="-1">Pick your deployment type <a class="header-anchor" href="#pick-your-deployment-type" aria-label="Permalink to &quot;Pick your deployment type&quot;">​</a></h2><p>Using Celestia and OP stack, you have the option to either run a light node of your own or a <code>local-celestia-devnet</code>, which will give you a local devnet to test things out with.</p><h3 id="using-a-local-devnet" tabindex="-1">Using a local devnet <a class="header-anchor" href="#using-a-local-devnet" aria-label="Permalink to &quot;Using a local devnet&quot;">​</a></h3><p>If you&#39;d like to use the <code>local-celestia-devnet</code>, you&#39;re in luck! This is the default for the OP Stack + Celestia repository. Head to the <a href="./optimism-devnet">previous page</a> to get started.</p><h3 id="using-a-light-node" tabindex="-1">Using a light node <a class="header-anchor" href="#using-a-light-node" aria-label="Permalink to &quot;Using a light node&quot;">​</a></h3><p>This is a <strong>beta integration</strong> and we are working on resolving <a href="https://github.com/celestiaorg/optimism/issues/" target="_blank" rel="noreferrer">open issues</a>.</p><p>In order to allow your light node to post and retrieve data without errors, you will need to change <code>UseShareExchange</code> to <code>false</code> in:</p>',9),c={class:"vp-code-group vp-adaptive-theme"},p=o('<div class="tabs"><input type="radio" name="group-wPXcM" id="tab-ah2PVsm" checked="checked"><label for="tab-ah2PVsm">Mainnet Beta</label><input type="radio" name="group-wPXcM" id="tab-qxc86Kf"><label for="tab-qxc86Kf">Mocha</label><input type="radio" name="group-wPXcM" id="tab-mDNV4Vh"><label for="tab-mDNV4Vh">Arabica</label></div>',1),d={class:"blocks"},r=o('<div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$HOME/.celestia-light/config.toml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$HOME/.celestia-light/config.toml</span></span></code></pre></div>',1),h={class:"language-bash vp-adaptive-theme"},u=e("button",{title:"Copy Code",class:"copy"},null,-1),_=e("span",{class:"lang"},"bash",-1),g={class:"shiki github-dark vp-code-dark"},y={class:"line"},b={style:{color:"#E1E4E8"}},m={class:"shiki github-light vp-code-light"},v={class:"line"},k={style:{color:"#24292E"}},E={class:"language-bash vp-adaptive-theme"},f=e("button",{title:"Copy Code",class:"copy"},null,-1),C=e("span",{class:"lang"},"bash",-1),S={class:"shiki github-dark vp-code-dark"},T={class:"line"},w={style:{color:"#E1E4E8"}},F={class:"shiki github-light vp-code-light"},P={class:"line"},A={style:{color:"#24292E"}},I=o('<p>If you choose to use your own node store, the light node must be <strong>fully synced</strong> and <strong>funded</strong> for you to be able to submit and retrieve <code>PayForBlobs</code> to a Celestia network.</p><p>If it is not synced, you will run into <a href="https://github.com/celestiaorg/celestia-node/issues/2151/" target="_blank" rel="noreferrer">errors similar to this</a>.</p><p>Visit the <a href="./../nodes/arabica-devnet">Arabica page</a> to visit the faucet.</p><p>In order to mount existing data, you must have a node store that is in this directory:</p>',4),O={class:"vp-code-group vp-adaptive-theme"},x=o('<div class="tabs"><input type="radio" name="group-_6Nun" id="tab-o2VywYU" checked="checked"><label for="tab-o2VywYU">Mainnet Beta</label><input type="radio" name="group-_6Nun" id="tab-zjeKc3x"><label for="tab-zjeKc3x">Mocha</label><input type="radio" name="group-_6Nun" id="tab-2ZeWO7k"><label for="tab-2ZeWO7k">Arabica</label></div>',1),B={class:"blocks"},D=o('<div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$HOME/.celestia-light</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$HOME/.celestia-light</span></span></code></pre></div>',1),V={class:"language-bash vp-adaptive-theme"},q=e("button",{title:"Copy Code",class:"copy"},null,-1),N=e("span",{class:"lang"},"bash",-1),M={class:"shiki github-dark vp-code-dark"},R={class:"line"},H={style:{color:"#E1E4E8"}},$={class:"shiki github-light vp-code-light"},U={class:"line"},X={style:{color:"#24292E"}},K={class:"language-bash vp-adaptive-theme"},j=e("button",{title:"Copy Code",class:"copy"},null,-1),z=e("span",{class:"lang"},"bash",-1),Q={class:"shiki github-dark vp-code-dark"},W={class:"line"},L={style:{color:"#E1E4E8"}},Y={class:"shiki github-light vp-code-light"},Z={class:"line"},G={style:{color:"#24292E"}},J=o(`<p>This is the default location of the node store when you initialize and run a new Celestia node.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The user in the <code>docker-compose-testnet.yml</code> is the <code>root</code> user, but this is not meant to be used in production.</p></div><p>By default, the node will run with the account named <code>my_celes_key</code>.</p><p>If you have your own setup you&#39;d like to try, you can always edit <code>optimism/ops-bedrock/docker-compose-testnet.yml</code> to work with your setup.</p><h3 id="using-a-raas-provider" tabindex="-1">Using a RaaS provider <a class="header-anchor" href="#using-a-raas-provider" aria-label="Permalink to &quot;Using a RaaS provider&quot;">​</a></h3><p>If you&#39;d like to use a Rollups as a Service (RaaS) provider, you can do so by going to the RaaS category in the menu.</p><h2 id="build-the-testnet" tabindex="-1">Build the testnet <a class="header-anchor" href="#build-the-testnet" aria-label="Permalink to &quot;Build the testnet&quot;">​</a></h2><p>Build TypeScript definitions for TS dependencies:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">optimism</span></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-ts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">optimism</span></span>
<span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build-ts</span></span></code></pre></div><p>Set environment variables to start network:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> SEQUENCER_BATCH_INBOX_ADDRESS</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0xff00000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> L2OO_ADDRESS</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0x70997970C51812dc3A010C7d01b50e0d17dc79C8</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> SEQUENCER_BATCH_INBOX_ADDRESS</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0xff00000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> L2OO_ADDRESS</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0x70997970C51812dc3A010C7d01b50e0d17dc79C8</span></span></code></pre></div><h2 id="start-the-testnet" tabindex="-1">Start the testnet <a class="header-anchor" href="#start-the-testnet" aria-label="Permalink to &quot;Start the testnet&quot;">​</a></h2><p>First, make sure your light node is synced and funded.</p><p>Next, you can start up the testnet with the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testnet-up</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testnet-up</span></span></code></pre></div><h2 id="view-the-logs-of-the-testnet" tabindex="-1">View the logs of the testnet <a class="header-anchor" href="#view-the-logs-of-the-testnet" aria-label="Permalink to &quot;View the logs of the testnet&quot;">​</a></h2><p>If you&#39;d like to view the logs of the testnet, run the following command from the root of the Optimism directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testnet-logs</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testnet-logs</span></span></code></pre></div><h2 id="stop-the-testnet" tabindex="-1">Stop the testnet <a class="header-anchor" href="#stop-the-testnet" aria-label="Permalink to &quot;Stop the testnet&quot;">​</a></h2><p>To safely stop the testnet, run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testnet-down</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testnet-down</span></span></code></pre></div><h2 id="clean-the-testnet" tabindex="-1">Clean the testnet <a class="header-anchor" href="#clean-the-testnet" aria-label="Permalink to &quot;Clean the testnet&quot;">​</a></h2><p>To remove all data from the testnet, run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testnet-clean</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testnet-clean</span></span></code></pre></div>`,24),le=JSON.parse('{"title":"Deploy an OP Stack testnet with Celestia","description":"Start your own testnet with a modified version of optimism-bedrock.","frontmatter":{"description":"Start your own testnet with a modified version of optimism-bedrock.","next":{"text":"Full stack dapp tutorial","link":"/developers/full-stack-modular-development-guide"},"head":[["meta",{"name":"og:title","content":"Deploy an OP Stack testnet with Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/optimism.md","filePath":"developers/optimism.md","lastUpdated":1698857544000}'),ee={name:"developers/optimism.md"},ie=Object.assign(ee,{setup(se){return(te,ae)=>(n(),l("div",null,[i,e("div",c,[p,e("div",d,[r,e("div",h,[u,_,e("pre",g,[e("code",null,[e("span",y,[e("span",b,"$HOME/.celestia-light-"+t(a(s).mochaChainId)+"/config.toml",1)])])]),e("pre",m,[e("code",null,[e("span",v,[e("span",k,"$HOME/.celestia-light-"+t(a(s).mochaChainId)+"/config.toml",1)])])])]),e("div",E,[f,C,e("pre",S,[e("code",null,[e("span",T,[e("span",w,"$HOME/.celestia-light-"+t(a(s).arabicaChainId)+"/config.toml",1)])])]),e("pre",F,[e("code",null,[e("span",P,[e("span",A,"$HOME/.celestia-light-"+t(a(s).arabicaChainId)+"/config.toml",1)])])])])])]),I,e("div",O,[x,e("div",B,[D,e("div",V,[q,N,e("pre",M,[e("code",null,[e("span",R,[e("span",H,"$HOME/.celestia-light-"+t(a(s).mochaChainId),1)])])]),e("pre",$,[e("code",null,[e("span",U,[e("span",X,"$HOME/.celestia-light-"+t(a(s).mochaChainId),1)])])])]),e("div",K,[j,z,e("pre",Q,[e("code",null,[e("span",W,[e("span",L,"$HOME/.celestia-light-"+t(a(s).arabicaChainId),1)])])]),e("pre",Y,[e("code",null,[e("span",Z,[e("span",G,"$HOME/.celestia-light-"+t(a(s).arabicaChainId),1)])])])])])]),J]))}});export{le as __pageData,ie as default};
