"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3193],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5827:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:3},l="Setting Up Environment",c={unversionedId:"getting-started/setting-env",id:"getting-started/setting-env",title:"Setting Up Environment",description:"You need an environment to run contracts. You can either run your node locally or connect to an existing network. For",source:"@site/docs/02-getting-started/03-setting-env.md",sourceDirName:"02-getting-started",slug:"/getting-started/setting-env",permalink:"/fr/docs/1.0/getting-started/setting-env",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/02-getting-started/03-setting-env.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/fr/docs/1.0/getting-started/installation"},next:{title:"Downloading and Compiling Contract",permalink:"/fr/docs/1.0/getting-started/compile-contract"}},p=[{value:"Setup Go CLI",id:"setup-go-cli",children:[],level:2},{value:"Export wasmd Parameters",id:"export-wasmd-parameters",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-environment"},"Setting Up Environment"),(0,o.kt)("p",null,"You need an environment to run contracts. You can either run your node locally or connect to an existing network. For\neasy testing, the cliffnet testnet is live. You can use this to deploy and run your contracts."),(0,o.kt)("p",null,"To verify the testnet is currently running, make sure the following URLs are all working for you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rpc.cliffnet.cosmwasm.com/status"},"https://rpc.cliffnet.cosmwasm.com/status")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://faucet.cliffnet.cosmwasm.com/status"},"https://faucet.cliffnet.cosmwasm.com/status")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lcd.cliffnet.cosmwasm.com/node_info"},"https://lcd.cliffnet.cosmwasm.com/node_info"))),(0,o.kt)("p",null,"We have set up two native tokens - ",(0,o.kt)("inlineCode",{parentName:"p"},"ROCK")," (",(0,o.kt)("inlineCode",{parentName:"p"},"urock"),") for becoming a validator and ",(0,o.kt)("inlineCode",{parentName:"p"},"PEBBLE")," (",(0,o.kt)("inlineCode",{parentName:"p"},"upebble"),") token for paying\nfees.\nAvailable frontends:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Big Dipper Block Explorer: ",(0,o.kt)("a",{parentName:"li",href:"https://block-explorer.cliffnet.cosmwasm.com"},"https://block-explorer.cliffnet.cosmwasm.com"))),(0,o.kt)("p",null,"You can use these to explore txs, addresses, validators and contracts. Feel free to deploy one pointing to our rpc/lcd\nservers and we will list it."),(0,o.kt)("p",null,"When interacting with this network, you can either use ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," which is a Go client, or the Node REPL. The Node REPL is\nrecommended for contract operations, since JSON manipulation is not intuitive with the Shell/Go client."),(0,o.kt)("h2",{id:"setup-go-cli"},"Setup Go CLI"),(0,o.kt)("p",null,"Let's configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," executable, point it to the testnet, create a wallet and ask for tokens from faucet:"),(0,o.kt)("p",null,"First source the ",(0,o.kt)("strong",{parentName:"p"},"cliffnet")," network configuration in the shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"source <(curl -sSL https://raw.githubusercontent.com/CosmWasm/testnets/master/cliffnet-1/defaults.env)\n")),(0,o.kt)("p",null,"Setup the client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# add wallets for testing\nwasmd keys add wallet\n>\n{\n  "name": "wallet",\n  "type": "local",\n  "address": "wasm1pze5wsf0dg0fa4ysnttugn0m22ssf3t4a9yz3h",\n  "pubkey": "{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A09EWZLG2oI9mNLG9SbTHjMJEZvH+DGhshjLsUKP5Ijd"}",\n  "mnemonic": "hobby bunker rotate piano satoshi planet network verify else market spring toward pledge turkey tip slim word jaguar congress thumb flag project chalk inspire"\n}\n\nwasmd keys add wallet2\n')),(0,o.kt)("p",null,"You need some tokens in your address to interact. If you are using local node you can skip this step. Requesting tokens\nfrom faucet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'JSON=$(jq -n --arg addr $(wasmd keys show -a wallet) \'{"denom":"upebble","address":$addr}\') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.cliffnet.cosmwasm.com/credit\nJSON=$(jq -n --arg addr $(wasmd keys show -a wallet2) \'{"denom":"upebble","address":$addr}\') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.cliffnet.cosmwasm.com/credit\n')),(0,o.kt)("h2",{id:"export-wasmd-parameters"},"Export wasmd Parameters"),(0,o.kt)("p",null,"If you intend to use wasmd as client, we recommend you to setup these variables. Otherwise You will have to define type\nin node, chain id and gas-prices details with every command you execute. Also for this tutorial we will use these\nvariables. So make sure you export these before proceeding."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# bash\nexport NODE="--node $RPC"\nexport TXFLAG="${NODE} --chain-id ${CHAIN_ID} --gas-prices 0.025upebble --gas auto --gas-adjustment 1.3"\n\n# zsh\nexport NODE=(--node $RPC)\nexport TXFLAG=($NODE --chain-id $CHAIN_ID --gas-prices 0.025upebble --gas auto --gas-adjustment 1.3)\n')),(0,o.kt)("p",null,"If any of the commands above throws an error, this means your shell is different. If the command succeeded, then try\nrunning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query bank total $NODE\n")),(0,o.kt)("p",null,"Beyond the standard CLI tooling, we have also produced a flexible TypeScript\nlibrary ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmjs"},"CosmJS"),", which runs in Node.js as well as in modern browsers. It handles\nqueries and submitting transactions. Along with this library, we\nproduced ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@cosmjs/cli"},"@cosmjs/cli"),", which is a super-charged Node console. It\nsupports ",(0,o.kt)("inlineCode",{parentName:"p"},"await"),", does type checking for helpful error messages, and preloads many CosmJS utilities. If you are\ncomfortable with the Node console, you will probably find this easier and more powerful than the CLI tooling."),(0,o.kt)("p",null,"Using the REPL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create or load account\nconst mnemonic = loadOrCreateMnemonic('fred.key')\nmnemonicToAddress(mnemonic)\n\nconst {address, client} = await connect(mnemonic, {})\naddress\n\nclient.getAccount()\n// if empty - this only works with CosmWasm\nhitFaucet(defaultFaucetUrl, address, 'PEBBLE')\nclient.getAccount()\n")))}d.isMDXComponent=!0}}]);