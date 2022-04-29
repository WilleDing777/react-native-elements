"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81567],{36650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>A,contentTitle:()=>l,default:()=>D,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],c={},l=void 0,s={unversionedId:"component_usage/FAB",id:"version-4.0.0-rc.1/component_usage/FAB",title:"FAB",description:"",source:"@site/versioned_docs/version-4.0.0-rc.1/component_usage/FAB.mdx",sourceDirName:"component_usage",slug:"/component_usage/FAB",permalink:"/docs/4.0.0-rc.1/component_usage/FAB",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/component_usage/FAB.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{}},A={},p=[],d={toc:p};function D(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE FAB","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20FAB%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Aconst%20%5Bvisible%2C%20setVisible%5D%20%3D%20React.useState(true)%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20paddingVertical%3A%205%2C%0A%20%20%20%20%20%20%20%20flexGrow%3A%201%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Small%20Size%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20loading%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20size%3D%22small%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Large%20Size%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Primary%20Color%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20title%3D%22Navigate%22%0A%20%20%20%20%20%20%20%20upperCase%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'place'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EDisabled%3C%2FText%3E%0A%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20title%3D%22Extended%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20name%3A%20'place'%2C%0A%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setVisible(!visible)%7D%0A%20%20%20%20%20%20%20%20placement%3D%22right%22%0A%20%20%20%20%20%20%20%20title%3D%22Hide%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20color%3D%22red%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7B!visible%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setVisible(!visible)%7D%0A%20%20%20%20%20%20%20%20placement%3D%22left%22%0A%20%20%20%20%20%20%20%20title%3D%22Show%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'edit'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}D.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>A,kt:()=>D});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},A=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,A=c(e,["components","mdxType","originalType","parentName"]),d=s(r),D=a,m=d["".concat(l,".").concat(D)]||d[D]||p[D]||o;return r?n.createElement(m,i(i({ref:t},A),{},{components:r})):n.createElement(m,i({ref:t},A))}));function D(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);