"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91567,10361],{71871:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},15236:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(5730),o=n(34875),i=n(86010);const c="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,d=e.block,p=e.defaultValue,u=e.values,m=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=u?u:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),b=v.tabGroupChoices,y=v.setTabGroupChoices,C=(0,r.useState)(N),D=C[0],A=C[1],x=[],B=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var w=b[m];null!=w&&w!==D&&g.some((function(e){return e.value===w}))&&A(w)}var E=function(e){var t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==D&&(B(t),A(a),null!=m&&y(m,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:E,onClick:E},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(h.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function d(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},26410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],i={},c=void 0,s={unversionedId:"component_usage/CheckBox",id:"component_usage/CheckBox",title:"CheckBox",description:"",source:"@site/docs/component_usage/CheckBox.mdx",sourceDirName:"component_usage",slug:"/component_usage/CheckBox",permalink:"/docs/next/component_usage/CheckBox",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/component_usage/CheckBox.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE CheckBox","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20CheckBox%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20CheckboxComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20CheckboxComponent%3A%20React.FunctionComponent%3CCheckboxComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bcheck1%2C%20setCheck1%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck2%2C%20setCheck2%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck3%2C%20setCheck3%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck4%2C%20setCheck4%5D%20%3D%20useState(false)%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%22Click%20Here%22%0A%20%20%20%20%20%20checked%3D%7Bcheck1%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck1(!check1)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%22Click%20Here%22%0A%20%20%20%20%20%20checkedIcon%3D%22dot-circle-o%22%0A%20%20%20%20%20%20uncheckedIcon%3D%22circle-o%22%0A%20%20%20%20%20%20checked%3D%7Bcheck2%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck2(!check2)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%7B%60Click%20Here%20to%20%24%7Bcheck3%20%3F%20'Remove'%20%3A%20'Add'%7D%20This%20Item%60%7D%0A%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20iconType%3D%22material%22%0A%20%20%20%20%20%20checkedIcon%3D%22clear%22%0A%20%20%20%20%20%20uncheckedIcon%3D%22add%22%0A%20%20%20%20%20%20checkedColor%3D%22red%22%0A%20%20%20%20%20%20checked%3D%7Bcheck3%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck3(!check3)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20checkedIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D%22radio-button-checked%22%0A%20%20%20%20%20%20%20%20%20%20type%3D%22material%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20uncheckedIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D%22radio-button-unchecked%22%0A%20%20%20%20%20%20%20%20%20%20type%3D%22material%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22grey%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20checked%3D%7Bcheck4%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck4(!check4)%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20CheckboxComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0},82102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=(n(15236),n(71871),n(33671),n(26410)),i=["components"],c={id:"checkbox",title:"CheckBox"},s=void 0,d={unversionedId:"components/checkbox",id:"components/checkbox",title:"CheckBox",description:"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off.",source:"@site/docs/components/CheckBox.mdx",sourceDirName:"components",slug:"/components/checkbox",permalink:"/docs/next/components/checkbox",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/CheckBox.mdx",tags:[],version:"current",frontMatter:{id:"checkbox",title:"CheckBox"},sidebar:"docs",previous:{title:"Card.Title",permalink:"/docs/next/components/card_title"},next:{title:"Chip",permalink:"/docs/next/components/chip"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],m={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off.\nIt provides a clear visual of either a true or false choice."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(o.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"checkboxicon#props"},"CheckBoxIcon"),", ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."))),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Component")),(0,l.kt)("td",{parentName:"tr",align:null},"React Component"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify React Native component for main button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"center")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Aligns checkbox to center.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"checkedTitle")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a custom checked message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of main container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Disables user interaction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabledStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of the checkbox container when disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabledTitleStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of the title when disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fontFamily")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify different font family.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconRight")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Moves icon to right of text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"right")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Aligns checkbox to right.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"textStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"ReactElement<{}, string")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Title of checkbox.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"titleProps")),(0,l.kt)("td",{parentName:"tr",align:null},"TextProps"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}")),(0,l.kt)("td",{parentName:"tr",align:null},"Additional props for the title Text component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wrapperStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for the wrapper of checkbox."))))))}k.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);