(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"2BA8":function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return g}));r("9VmF");var a=r("q1tI"),i=r.n(a),o=r("Wbzz"),n=r("9eSz"),s=r.n(n),l=r("wKwe"),c=r("7oih"),u=r("EYWl"),d=r("u8+M"),p=r("7TWv"),m=(r("S3Vr"),function(e){var t=e.data;return d.myProjects.map((function(e,r){var a=e.deployUrl,n=e.description,c=e.imgSrc,u=e.links,d=e.technology,m=e.title,g=function(e){var t=e.data,r=e.filename;if(r)return r.startsWith("http")?{external:r}:Object(p.c)({data:t,filename:r,sizingStrategy:"fluid"})}({data:t,filename:c});return i.a.createElement("div",{className:"project"},i.a.createElement("div",{key:m},i.a.createElement("h3",null,i.a.createElement(l.a,{url:a},m)),i.a.createElement("div",{className:"flex portfolio-wrapper"},i.a.createElement("div",{className:"portfolio-text"},i.a.createElement("p",null,n),i.a.createElement("p",null,i.a.createElement("strong",null,"Technology: "),d),i.a.createElement("ul",null,u.map((function(e){var t=e.url.startsWith("/");return i.a.createElement("li",{key:e.title},t?i.a.createElement(o.Link,{to:e.url},e.title):i.a.createElement(l.a,{key:e.url,url:e.url},e.title))})))),g&&i.a.createElement("div",{className:"portfolio-img"},i.a.createElement(l.a,{url:a},g.external?i.a.createElement("img",{src:g.external,alt:m}):i.a.createElement(s.a,{fluid:g,alt:m}))))),i.a.createElement("hr",null))}))});t.default=function(e){var t=e.data;return i.a.createElement(c.a,{className:"tech-projects-wrapper"},i.a.createElement(u.a,{title:"Tech Projects"}),i.a.createElement("div",{className:"text-wrapper"},i.a.createElement("h1",null,"Tech Projects"),i.a.createElement("div",{className:"margin-top-lg"},m({data:t})),i.a.createElement("div",{className:"margin-top-lg"},i.a.createElement("h2",null,"Open Source Contributions"),i.a.createElement("ul",null,d.openSource.map((function(e){return i.a.createElement("li",{key:e.title,className:"margin-top-md"},i.a.createElement(l.a,{url:e.url},e.title)," -"," ",e.description," ",e.links?e.links.map((function(e){return i.a.createElement(l.a,{url:e.url},e.title)})):null)}))))))};var g="1653571581"},"7TWv":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return n}));r("rvZc"),r("dRSK"),r("Z2Ku"),r("L9s1");var a=r("d9uu"),i=function(e){return function(t){return t.node.frontmatter.categories.includes(e)}},o=function(e){var t=e.categories;return t?t.map(a.a).join(", "):"Uncategorized"},n=function(e){var t=e.data,r=e.filename,a=e.sizingStrategy,i=t.allFile.edges.find((function(e){return e.node.relativePath.endsWith(r)}));if(i)return i.node.childImageSharp[a]}},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var i,o=a(r("PJYZ")),n=a(r("VbXa")),s=a(r("8OQS")),l=a(r("pVnL")),c=a(r("q1tI")),u=a(r("17x9")),d=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=k([].concat(t.fluid))),t.fixed&&(t.fixed=k([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,r=e.fixed;return g(t||r).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t]}return e[0]},h=Object.create({}),f=function(e){var t=d(e),r=m(t);return h[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,w=y&&window.IntersectionObserver,v=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,o=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:o}),c.default.createElement("source",{media:i,srcSet:r,sizes:o}))}))}function k(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function V(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,o=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var T=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),v.set(e,t)),function(){r.unobserve(e),v.delete(e)}},P=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?V(e,!0):"")+V(e)})).join("")+"<img "+c+n+s+r+a+t+o+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=c.default.createElement(G,(0,l.default)({src:t},i));return r.length>1?c.default.createElement("picture",null,a(r),o):o},G=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,o=e.style,n=e.onLoad,u=e.onError,d=e.loading,p=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:a,src:i},m,{onLoad:n,onError:u,ref:t,loading:d,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));G.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var x=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&f(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&w&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r}(0,n.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=T(e,(function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=m(t),h[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,o=void 0===i?{}:i,n=e.imgStyle,s=void 0===n?{}:n,u=e.placeholderStyle,p=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,f=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,w=e.Tag,v=e.itemProp,k=e.loading,V=e.draggable,T=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,l.default)({opacity:T?1:0,transition:x?"opacity "+y+"ms":"none"},s),M="boolean"==typeof b?"lightgray":b,R={transitionDelay:y+"ms"},j=(0,l.default)({opacity:this.state.imgLoaded?0:1},x&&R,{},s,{},p),O={title:t,alt:this.state.isVisible?"":r,style:j,className:m,itemProp:v};if(h){var U=h,z=g(h);return c.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),M&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&R)}),z.base64&&c.default.createElement(L,{src:z.base64,spreadProps:O,imageVariants:U,generateSources:I}),z.tracedSVG&&c.default.createElement(L,{src:z.tracedSVG,spreadProps:O,imageVariants:U,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,S(U),c.default.createElement(G,{alt:r,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:k,draggable:V})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,l.default)({alt:r,title:t,loading:k},z,{imageVariants:U}))}}))}if(f){var A=f,N=g(f),H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},o);return"inherit"===o.display&&delete H.display,c.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},M&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:M,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},x&&R)}),N.base64&&c.default.createElement(L,{src:N.base64,spreadProps:O,imageVariants:A,generateSources:I}),N.tracedSVG&&c.default.createElement(L,{src:N.tracedSVG,spreadProps:O,imageVariants:A,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,S(A),c.default.createElement(G,{alt:r,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:k,draggable:V})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,l.default)({alt:r,title:t,loading:k},N,{imageVariants:A}))}}))}return null},t}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),M=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});x.propTypes={resolutions:C,sizes:M,fixed:u.default.oneOfType([C,u.default.arrayOf(C)]),fluid:u.default.oneOfType([M,u.default.arrayOf(M)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var R=x;t.default=R},INYr:function(e,t,r){"use strict";var a=r("XKFU"),i=r("CkkT")(6),o="findIndex",n=!0;o in[]&&Array(1)[o]((function(){n=!1})),a(a.P+a.F*n,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(o)},"u8+M":function(e,t){e.exports={myProjects:[{title:"Random Music Generators",deployUrl:"https://random-music-generators.onrender.com/",description:"Generate unlimited unique melodies with easily changed parameters including tonality, rhythm, and interval jumps. These melodies can be previewed in-browser and downloaded as MIDI.",technology:"React, Redux, Express, PostgreSQL, Semantic UI, MIDIwriterJS, ToneJS",links:[{title:"Random Music Generators",url:"https://random-music-generators.onrender.com/"},{title:"View on GitHub",url:"https://github.com/scraggo/Random-Music-Generators"},{title:"Video Presentation",url:"https://www.youtube.com/watch?v=D46ujdZg4o0"}],imgSrc:"https://media.giphy.com/media/lpt5YtiWgLU9tpClnA/giphy.gif"},{title:"scraggo.com",deployUrl:"https://www.scraggo.com",description:"",technology:"Gatsby, React, scss, markdown",links:[{title:"View on GitHub",url:"https://github.com/scraggo/scraggo.github.io"}]},{title:"Tone Rhythm",deployUrl:"https://github.com/scraggo/tone-rhythm",description:"As a musician developing music applications, I wanted an API that would allow me to put rhythms along with a melody into Tone.Part. The example on Tone's docs shows how this is expected and it's far from ideal. With the help of this small library, the developer-musician can generate an array of Tone.Transport times given an array of musical rhythms in various formats that Tone.js understands.",technology:"JavaScript (Mocha, Chai, Babel, Webpack, Tone.js)",links:[{title:"View on GitHub",url:"https://github.com/scraggo/tone-rhythm"},{title:"View on NPM",url:"https://www.npmjs.com/package/tone-rhythm"}]},{title:"Comparing JavaScript Test Runners",deployUrl:"https://github.com/scraggo/comparing-javascript-test-runners",description:"Article and companion app that compares AVA, Jest, Mocha, and mocha-parallel-tests testing frameworks.",technology:"AVA, Jest, Mocha",links:[{title:"Article (GitHub)",url:"https://github.com/scraggo/comparing-javascript-test-runners"},{title:"Benchmarking Application (GitHub)",url:"https://github.com/scraggo/comparing-javascript-test-runners/blob/master/docs/test-runner.md"},{title:"Blog Post",url:"/comparing-javascript-test-runners/"}]},{title:"Design patterns",deployUrl:"https://github.com/scraggo/design-patterns-refactoring-guru",description:"TypeScript runner for all design patterns on refactoring.guru. Accompanying blog posts for students of design patterns.",technology:"TypeScript, node, oclif, mocha",links:[{title:"View on GitHub",url:"https://github.com/scraggo/design-patterns-refactoring-guru"},{title:"How to Learn Design Patterns (Blog Post)",url:"/design-patterns-curriculum"},{title:"Introduction to Design Patterns: Why they're worth learning (Blog Post)",url:"/design-patterns-intro/"}]},{title:"Question Prompter",deployUrl:"https://github.com/scraggo/question-prompter",description:"CLI tool to prompt for user configured questions and notes",technology:"node (commander, inquirer)",links:[{title:"View on GitHub",url:"https://github.com/scraggo/question-prompter"},{title:"Blog Post",url:"/using-question-prompter/"}]},{title:"ImmutableJS Tutorial",deployUrl:"https://github.com/scraggo/immutable-tutorial-sandbox",description:"Centralized ImmutableJS tutorial and sandbox",technology:"React, ImmutableJS",links:[{title:"View on GitHub",url:"https://github.com/scraggo/immutable-tutorial-sandbox"}]},{title:"Vocode",deployUrl:"https://vocode.herokuapp.com",description:"Vocode is a desktop application that allows users to perform a number of useful commands with their voice. The app can populate a user's clipboard with a snippet (a text template) which can be pasted into any text editor. Users can add other user snippets, create new snippets, and manage all this information in one central place. The app also provides a user the ability to display websites in the app with a voice command.",technology:"Electron JS, WebAudio API, Google Cloud Speech Service, Ant, React, Redux, Express, PostgreSQL",links:[{title:"Vocode - Heroku",url:"https://vocode.herokuapp.com"},{title:"View on GitHub",url:"https://github.com/daft-thunk/electricVocode"},{title:"Video Presentation",url:"https://www.youtube.com/watch?v=-_gCMrigUcw"}],imgSrc:"vocode.png"},{title:"Daft Thunk Direct",deployUrl:"https://daft-thunk-direct.herokuapp.com",description:"Daft Thunk Direct is a full stack e-commerce platform to sell music equipment. Customers can create carts and add products with and without accounts. Administrators are able to update core business functionality.",technology:"Google Auth, Passport.js, React, Redux, Express, PostgreSQL, Semantic UI, Sequelize",links:[{title:"Daft Thunk Direct - Heroku",url:"https://daft-thunk-direct.herokuapp.com"},{title:"View on GitHub",url:"https://github.com/daft-thunk/daft-thunk"}],imgSrc:"daft-thunk-direct.png"},{title:"SongMind Studios",deployUrl:"http://songmindstudios.com",description:"Music education business website with blog. Includes CTA buttons, contact forms, and a bold color palette.",technology:"Wordpress - https://tesseracttheme.com/, mobile-responsive design with Twitter Bootstrap, professionally hosted with domain name, Mailchimp for email list management and Hootsuite for social media.",links:[{title:"SongMind Studios",url:"http://songmindstudios.com"}],imgSrc:"sms-site.png"},{title:"Bookmarks to Markdown Utilities",deployUrl:"https://github.com/scraggo/bookmarks-markdown-utils",description:'Collection of command-line tools for Chrome bookmark management. (There is some functionality for OneTab, Evernote, and FireFox.) Designed for personal use and other users who may dislike managing a large bookmark collection inside of Chrome, use Chrome for both Desktop and Mobile bookmarking (and mainly use the "Mobile Bookmarks" folder), want to convert bookmarks into individual markdown files, want a way to visit a site and tag the bookmark with minimal mouse movement, and more.',technology:"Python (pytest, pyperclip, argparse)",links:[{title:"View on GitHub",url:"https://github.com/scraggo/bookmarks-markdown-utils"}]},{title:"Subnotes - Organize Your Notes",deployUrl:"https://scraggo.github.io/subnotes/",description:"Web adaptation of a productivity app originally written in Python. Users can input their notes in a certain format and can easily sort, filter, and copy the result to their clipboard.",technology:"Python, Javascript, Bootstrap, clipboard.js, Gulp, Babel",links:[{title:"Subnotes - Organize Your Notes",url:"https://scraggo.github.io/subnotes/"},{title:"View on GitHub",url:"https://github.com/scraggo/subnotes/"}]},{title:"ScragMark: Markdown Notes/Bookmarks",deployUrl:"https://github.com/scraggo/ScragMark",description:"Chrome Extension that allows a user to write notes in markdown format and easily put current tab link in notes. User can display their notes rendered in a separate tab. Notes save persistently.",technology:"Chrome API, Chrome local storage, Javascript, highlight.js, markdown-it.js",links:[{title:"View on GitHub",url:"https://github.com/scraggo/ScragMark"}]},{title:"GitHub User Search",deployUrl:"https://scraggo.github.io/Aurelia-Github-Users/",description:"Web app that allows the user to retrieve data based on a search for a GitHub user name. For example, if you search for `scraggo` (my username) you can easily find my contribution activity (pull requests on others' repositories.)",technology:"AureliaJS, Gulp, GitHub API",links:[{title:"GitHub User Search",url:"https://scraggo.github.io/Aurelia-Github-Users/"},{title:"View on GitHub",url:"https://github.com/scraggo/Aurelia-Github-Users"}]}],openSource:[{title:"Testing ImmutableJS With Sinon Custom Matchers",url:"/testing-immutable-js-with-sinon-custom-matchers/",description:"Post featured on the How To section of the sinonjs site",links:[{title:"https://sinonjs.org/how-to/",url:"https://sinonjs.org/how-to/"}]},{title:"@sindresorhus/is",url:"https://github.com/sindresorhus/is/pull/132",description:"Fix assertion message for .all and .any"},{title:"@sindresorhus/is",url:"https://github.com/sindresorhus/is/pull/104",description:"Add support for multiple predicates to is.any"},{description:"♬ A JavaScript library which provides an API for programmatically generating and creating expressive multi-track MIDI files and JSON objects.",title:"grimmdude/MidiWriterJS",url:"https://github.com/grimmdude/MidiWriterJS"},{description:"Back up and parse Google Chrome's Bookmarks.bak file",title:"DavidMetcalfe/Chrome-Bookmarks-Parser",url:"https://github.com/DavidMetcalfe/Chrome-Bookmarks-Parser"},{description:"Freely available programming books",title:"EbookFoundation/free-programming-books",url:"https://github.com/EbookFoundation/free-programming-books"}]}}}]);
//# sourceMappingURL=component---src-pages-tech-projects-index-js-5eb7541a7a47ba5f418a.js.map