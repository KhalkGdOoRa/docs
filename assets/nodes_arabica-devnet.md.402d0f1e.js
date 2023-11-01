import{_ as a}from"./chunks/arabica-devnet.19e59c2c.js";import{A as t}from"./chunks/ArabicaVersionTags.8f970d14.js";import{o,c as i,H as n,Q as e}from"./chunks/framework.51d6c45b.js";import"./chunks/arabica_versions.d0d52bfc.js";import"./chunks/constants.d2a00a0d.js";const s=e('<h1 id="arabica-devnet" tabindex="-1">Arabica devnet <a class="header-anchor" href="#arabica-devnet" aria-label="Permalink to &quot;Arabica devnet&quot;">​</a></h1><p><img src="'+a+'" alt="arabica-devnet"></p><p>Arabica devnet is a new testnet from Celestia Labs that is focused exclusively on providing developers with enhanced performance and the latest upgrades for testing their rollups and applications.</p><p>Arabica does not focus on validator or consensus-level testing, rather, that is what Mocha testnet is used for. If you are a validator, we recommend testing your validator operations on the <a href="./mocha-testnet">Mocha testnet</a>.</p><p>With Arabica having the latest updates from all Celestia&#39;s products deployed on it, it can be subject to many changes. Therefore, as a fair warning, Arabica can break unexpectedly but given it will be continuously updated, it is a useful way to keep testing the latest changes in the software.</p><p>Developers can still deploy on Mocha testnet their sovereign rollups if they chose to do so, it just will always lag behind Arabica devnet until Mocha undergoes Hardfork Upgrades in coordination with Validators.</p><h2 id="software-version-numbers" tabindex="-1">Software version numbers <a class="header-anchor" href="#software-version-numbers" aria-label="Permalink to &quot;Software version numbers&quot;">​</a></h2>',7),r=e('<h2 id="integrations" tabindex="-1">Integrations <a class="header-anchor" href="#integrations" aria-label="Permalink to &quot;Integrations&quot;">​</a></h2><p>This guide contains the relevant sections for how to connect to Arabica, depending on the type of node you are running.</p><p>Your best approach to participating is to first determine which node you would like to run. Each node&#39;s guide will link to the relevant networks in order to show you how to connect to them.</p><p>You have a list of options on the type of nodes you can run in order to participate in Arabica:</p><p>Data Availability:</p><ul><li><a href="./bridge-node">Bridge node</a></li><li><a href="./full-storage-node">Full storage node</a></li><li><a href="./light-node">Light node</a></li></ul><p>Select the type of node you would like to run and follow the instructions on each respective page. Whenever you are asked to select the type of network you want to connect to in those guides, select <code>Arabica</code> in order to refer to the correct instructions on this page on how to connect to Arabica.</p><h2 id="rpc-endpoints" tabindex="-1">RPC endpoints <a class="header-anchor" href="#rpc-endpoints" aria-label="Permalink to &quot;RPC endpoints&quot;">​</a></h2><p>The RPC endpoint is to allow users to interact with Celestia&#39;s nodes by querying the node&#39;s state and broadcasting transactions on the Celestia network. The default port is 26657.</p><p>Below is a list of RPC endpoints you can use to connect to Arabica devnet:</p><h3 id="bridge-full-and-light-nodes" tabindex="-1">Bridge, full, and light nodes <a class="header-anchor" href="#bridge-full-and-light-nodes" aria-label="Permalink to &quot;Bridge, full, and light nodes&quot;">​</a></h3><ul><li><code>consensus-validator.celestia-arabica-10.com</code></li><li><code>validator.consensus.celestia-arabica-10.com</code></li><li><code>consensus-full.celestia-arabica-10.com</code></li></ul><h3 id="full-and-light-nodes-only" tabindex="-1">Full and light nodes ONLY <a class="header-anchor" href="#full-and-light-nodes-only" aria-label="Permalink to &quot;Full and light nodes ONLY&quot;">​</a></h3><p>These RPC endpoints do not allow you to download full blocks from them. We advise that if you are running a bridge node, that you also run a local <a href="./consensus-node">full consensus node</a> in order to download full blocks from it.</p><ul><li><code>rpc.consensus.celestia-arabica-10.com</code></li><li><code>rpc-2.consensus.celestia-arabica-10.com</code></li></ul><h2 id="api-endpoints" tabindex="-1">API endpoints <a class="header-anchor" href="#api-endpoints" aria-label="Permalink to &quot;API endpoints&quot;">​</a></h2><p>The API endpoint is to allow users to interact with the REST API in Cosmos SDK which is implemented using gRPC-gateway, which exposes gRPC endpoints as REST endpoints. This allows for communication with the node using REST calls, which can be useful if the client does not support gRPC or HTTP2. The default port is 1317.</p><ul><li><a href="https://api.consensus.celestia-arabica-10.com/" target="_blank" rel="noreferrer">https://api.consensus.celestia-arabica-10.com/</a></li><li><a href="https://api-2.consensus.celestia-arabica-10.com/" target="_blank" rel="noreferrer">https://api-2.consensus.celestia-arabica-10.com/</a></li></ul><h2 id="grpc-endpoints" tabindex="-1">gRPC endpoints <a class="header-anchor" href="#grpc-endpoints" aria-label="Permalink to &quot;gRPC endpoints&quot;">​</a></h2><p>The gRPC endpoint is to allow users to interact with a Celestia Node using gRPC, a modern open-source and high-performance RPC framework. The default port is 9090. In the Cosmos SDK, gRPC is used to define state queries and broadcast transactions.</p><ul><li><code>grpc.consensus.celestia-arabica-10.com:443</code></li><li><code>grpc-2.consensus.celestia-arabica-10.com:443</code></li><li><code>validator.consensus.celestia-arabica-10.com:9090</code></li><li><code>consensus-validator.celestia-arabica-10.com:9090</code></li></ul><h2 id="arabica-devnet-faucet" tabindex="-1">Arabica devnet faucet <a class="header-anchor" href="#arabica-devnet-faucet" aria-label="Permalink to &quot;Arabica devnet faucet&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER DISTRIBUTION OF MAINNET CELESTIA TOKENS. THERE ARE NO PUBLIC SALES OF ANY MAINNET CELESTIA TOKENS.</p></div><h3 id="discord" tabindex="-1">Discord <a class="header-anchor" href="#discord" aria-label="Permalink to &quot;Discord&quot;">​</a></h3><p>You can request from Arabica devnet Faucet on the #arabica-faucet channel on Celestia&#39;s Discord server with the following command:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$request &lt;CELESTIA-ADDRESS&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$request &lt;CELESTIA-ADDRESS&gt;</span></span></code></pre></div><p>Where <code>&lt;CELESTIA-ADDRESS&gt;</code> is a <code>celestia1******</code> generated address.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Faucet has a limit of 10 tokens per week per address/Discord ID.</p></div><h3 id="web" tabindex="-1">Web <a class="header-anchor" href="#web" aria-label="Permalink to &quot;Web&quot;">​</a></h3><p>The web faucet is available at <a href="https://faucet.celestia-arabica-10.com/" target="_blank" rel="noreferrer">https://faucet.celestia-arabica-10.com/</a>.</p><h2 id="explorers" tabindex="-1">Explorers <a class="header-anchor" href="#explorers" aria-label="Permalink to &quot;Explorers&quot;">​</a></h2><p>There are multiple explorers you can use for Arabica:</p><ul><li><a href="https://explorer.celestia-arabica-10.com" target="_blank" rel="noreferrer">https://explorer.celestia-arabica-10.com</a></li><li><a href="https://celestiascan.com" target="_blank" rel="noreferrer">https://celestiascan.com</a></li></ul><h2 id="network-upgrades" tabindex="-1">Network upgrades <a class="header-anchor" href="#network-upgrades" aria-label="Permalink to &quot;Network upgrades&quot;">​</a></h2><p>Join our <a href="https://t.me/+smSFIA7XXLU4MjJh" target="_blank" rel="noreferrer">Telegram announcement channel</a> for network upgrades.</p>',35),m=JSON.parse('{"title":"Arabica devnet","description":"A guide to Arabica devnet.","frontmatter":{"description":"A guide to Arabica devnet.","head":[["meta",{"name":"og:title","content":"Arabica devnet | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/arabica-devnet.md","filePath":"nodes/arabica-devnet.md","lastUpdated":1698755971000}'),l={name:"nodes/arabica-devnet.md"},v=Object.assign(l,{setup(c){return(d,h)=>(o(),i("div",null,[s,n(t),r]))}});export{m as __pageData,v as default};
