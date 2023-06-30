var Yu=Object.defineProperty;var Ku=(u,F,e)=>F in u?Yu(u,F,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[F]=e;var tu=(u,F,e)=>(Ku(u,typeof F!="symbol"?F+"":F,e),e);import{D as k,b as Y,a9 as au,o as r,R as y,Q as D,as as hu,S as yu,c as A,u as x,a,at as bu,E as Xu,W as V,T as vu,F as $,ak as xu,J as K,r as v,O as i,a6 as q,U as M,Z as I,aj as O,au as R,av as N,V as P,L as Cu,j as u5,w as F5,$ as J,am as e5}from"./@vue-f3f56c11.js";import{A as E5}from"./aos-80360ef4.js";import{E as X,a as t5,b as x5,c as o5,d as n5,e as a5,f as C5,g as B5,h as s5,i as r5,j as ku,k as i5,l as l5,m as Su,n as wu,o as Lu,p as Pu,q as A5,r as c5}from"./element-plus-57978b99.js";import{f as Mu,g as D5}from"./@vueuse-eb97cd29.js";import{c as d5,d as p5}from"./pinia-600a5770.js";import{t as Tu,s as $u}from"./picture-verification-code-77c40e50.js";import{u as Bu,c as m5,a as _5}from"./vue-router-f3610fff.js";import{d as su,r as f5}from"./dayjs-0e47d17d.js";import{m as g5}from"./markdown-transform-html-09900b72.js";import{n as ru}from"./nprogress-6c9d9548.js";import"./lodash-es-9d35530d.js";import"./async-validator-604317c1.js";import"./@element-plus-009c8a55.js";import"./@ctrl-aa1b1e70.js";import"./vue-demi-3c8f99f1.js";(function(){const F=document.createElement("link").relList;if(F&&F.supports&&F.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))E(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&E(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function E(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const h5=k({__name:"App",setup(u){return Y(()=>E5.init({once:!0})),(F,e)=>{const E=au("router-view");return r(),y(E,null,{default:D(({Component:t})=>[(r(),y(hu,{max:10,include:"editor,home"},[(r(),y(yu(t)))],1024))]),_:1})}}});const y5="modulepreload",b5=function(u,F){return new URL(u,F).href},pu={},p=function(F,e,E){if(!e||e.length===0)return F();const t=document.getElementsByTagName("link");return Promise.all(e.map(o=>{if(o=b5(o,E),o in pu)return;pu[o]=!0;const n=o.endsWith(".css"),B=n?'[rel="stylesheet"]':"";if(!!E)for(let l=t.length-1;l>=0;l--){const m=t[l];if(m.href===o&&(!n||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${B}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":y5,n||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),n)return new Promise((l,m)=>{s.addEventListener("load",l),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>F())},v5={key:0,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","data-v-70b83f88":"",version:"1.0",width:"100%",height:"100%",viewBox:"0 0 340.000000 250.000000",preserveAspectRatio:"xMidYMid meet","color-interpolation-filters":"sRGB",style:{margin:"auto"}},k5=a("rect",{"data-v-70b83f88":"",x:"0",y:"0",width:"100%",height:"100%",fill:"transparent","fill-opacity":"1"},null,-1),S5=a("rect",{"data-v-70b83f88":"",x:"0",y:"0",width:"100%",height:"100%",fill:"url(#watermark)","fill-opacity":"1",class:"watermarklayer"},null,-1),w5={"data-v-70b83f88":"",fill:"#1A1A1A",class:"icon-text-wrapper icon-svg-group iconsvg",transform:"translate(80.79000091552734,67.59225463867188)"},L5={class:"iconsvg-imagesvg",transform:"translate(59.209999084472656,0)"},P5=a("rect",{fill:"#1A1A1A","fill-opacity":"0","stroke-width":"2",x:"0",y:"0",width:"60",height:"73.46548958626684",class:"image-rect"},null,-1),M5={x:"0",y:"0",width:"60",height:"73.46548958626684",filtersec:"colorsb7194309748",class:"image-svg-svg primary",style:{overflow:"visible"}},T5=bu('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.780601501464844 65.8499984741211"><title>c30</title><g data-name="\u56FE\u5C42 2"><g data-name="Layer 1"><path d="M36.67 21.36c1 2.76 2 3.2 4.81 2.4L51 20.38c2.67-.89 3.29-2.23 2.4-4.81A23.23 23.23 0 0 0 48 7.13l-11.47 14c.08.1.11.16.14.23z" fill="#d65fc2"></path><path d="M27.41 15.58c4.9 0 7.55 1.73 9.16 5.59L48 7.13C43.39 2.51 36.56 0 27.41 0h-.52v15.59z" fill="#e94c9b"></path><path d="M27.41 50.29h-.52v15.56h.52c9.11 0 15.92-2.49 20.58-7.08l-11.44-14c-1.46 3.64-4.28 5.52-9.14 5.52z" fill="#ff9845"></path><path d="M17.9 44L6.26 58.27c4.57 4.73 11.54 7.47 20.63 7.58V50.27c-5.43-.12-8.18-2.17-8.99-6.27z" fill="#ff7449"></path><path d="M53.4 50.29c.89-2.58.27-3.92-2.4-4.81l-9.52-3.38c-2.67-1-3.74-.36-4.81 2.4 0 .1-.08.18-.12.28L48 58.79a23.2 23.2 0 0 0 5.4-8.5z" fill="#ffb033"></path><path d="M26.89 15.59V0C17.77.12 10.78 2.84 6.21 7.64l11.67 14.29c.79-4.13 3.54-6.21 9.01-6.34z" fill="#f24671"></path><path d="M17.62 41v-8.1H0v8C0 48.13 2.18 54 6.26 58.27L17.9 44a15.26 15.26 0 0 1-.28-3z" fill="#ff5a54"></path><path d="M17.62 24.83a15.42 15.42 0 0 1 .26-2.9L6.21 7.64C2.16 11.9 0 17.76 0 24.92v8h17.62z" fill="#fd576b"></path></g></g></svg>',1),$5=[T5],j5=a("g",{transform:"translate(0,80.46549224853516)"},[a("g",{"data-gra":"path-name",class:"tp-name iconsvg-namesvg"},[a("g",{transform:"scale(1)"},[a("g",null,[a("path",{d:"M26.08-5.8L26.08 0 10.35 0Q9.15 0 7.72-0.42 6.29-0.85 5.08-1.82 3.86-2.79 3.05-4.34 2.23-5.89 2.23-8.14L2.23-8.14 2.23-16Q2.23-16.82 2.42-17.74 2.61-18.65 3.01-19.56 3.41-20.46 4.05-21.28 4.69-22.11 5.59-22.73 6.49-23.36 7.67-23.74 8.86-24.12 10.35-24.12L10.35-24.12 26.08-24.12 26.08-18.32 10.35-18.32Q9.21-18.32 8.62-17.74 8.03-17.16 8.03-15.95L8.03-15.95 8.03-8.14Q8.03-7.01 8.63-6.4 9.24-5.8 10.4-5.8L10.4-5.8 26.08-5.8ZM56.94-16L56.94-8.14Q56.94-6.65 56.56-5.45 56.18-4.26 55.55-3.36 54.93-2.45 54.1-1.82 53.28-1.18 52.37-0.78 51.47-0.38 50.54-0.19 49.62 0 48.79 0L48.79 0 38.33 0Q37.12 0 35.7-0.42 34.27-0.85 33.05-1.82 31.84-2.79 31.02-4.34 30.21-5.89 30.21-8.14L30.21-8.14 30.21-16Q30.21-18.23 31.02-19.78 31.84-21.33 33.05-22.3 34.27-23.27 35.7-23.69 37.12-24.12 38.33-24.12L38.33-24.12 48.79-24.12Q51.02-24.12 52.59-23.31 54.15-22.51 55.11-21.3 56.07-20.08 56.5-18.65 56.94-17.22 56.94-16L56.94-16ZM51.14-8.14L51.14-15.95Q51.14-17.16 50.53-17.74 49.93-18.32 48.79-18.32L48.79-18.32 38.37-18.32Q37.21-18.32 36.61-17.73 36.01-17.13 36.01-16L36.01-16 36.01-8.14Q36.01-7.01 36.61-6.4 37.21-5.8 38.37-5.8L38.37-5.8 48.79-5.8Q49.98-5.8 50.56-6.4 51.14-7.01 51.14-8.14L51.14-8.14ZM88.33-34.31L88.33-8.14Q88.33-6.65 87.95-5.45 87.57-4.26 86.94-3.36 86.32-2.45 85.49-1.82 84.67-1.18 83.76-0.78 82.86-0.38 81.93-0.19 81.01 0 80.18 0L80.18 0 69.72 0Q68.23 0 67.04-0.38 65.86-0.76 64.96-1.39 64.05-2.03 63.42-2.86 62.78-3.68 62.38-4.58 61.98-5.49 61.79-6.41 61.6-7.34 61.6-8.14L61.6-8.14 61.6-16Q61.6-18.23 62.41-19.78 63.23-21.33 64.44-22.3 65.66-23.27 67.09-23.69 68.52-24.12 69.72-24.12L69.72-24.12 80.18-24.12 80.18-18.32 69.76-18.32Q68.6-18.32 68-17.73 67.4-17.13 67.4-16L67.4-16 67.4-8.19Q67.4-7.01 67.99-6.4 68.58-5.8 69.72-5.8L69.72-5.8 80.18-5.8Q81.37-5.8 81.95-6.4 82.53-7.01 82.53-8.14L82.53-8.14 82.53-34.31 88.33-34.31ZM119.81-16.13L119.81-16.13Q119.81-14.93 119.38-13.53 118.96-12.14 118.01-10.94 117.06-9.75 115.53-8.95 114.01-8.14 111.82-8.14L111.82-8.14 101.36-8.14 101.36-13.65 111.82-13.65Q113-13.65 113.65-14.38 114.3-15.1 114.3-16.18L114.3-16.18Q114.3-17.31 113.57-17.96 112.85-18.61 111.82-18.61L111.82-18.61 101.36-18.61Q100.17-18.61 99.53-17.88 98.88-17.16 98.88-16.09L98.88-16.09 98.88-7.99Q98.88-6.83 99.6-6.18 100.33-5.53 101.4-5.53L101.4-5.53 111.82-5.53 111.82 0 101.36 0Q100.15 0 98.76-0.42 97.36-0.85 96.17-1.8 94.98-2.74 94.17-4.27 93.37-5.8 93.37-7.99L93.37-7.99 93.37-16.13Q93.37-17.34 93.79-18.73 94.22-20.12 95.16-21.32 96.11-22.51 97.64-23.31 99.17-24.12 101.36-24.12L101.36-24.12 111.82-24.12Q113.02-24.12 114.42-23.69 115.81-23.27 117.01-22.32 118.2-21.37 119-19.85 119.81-18.32 119.81-16.13ZM147.07-5.8L147.07 0 131.34 0Q130.14 0 128.71-0.42 127.28-0.85 126.06-1.82 124.85-2.79 124.03-4.34 123.22-5.89 123.22-8.14L123.22-8.14 123.22-16Q123.22-16.82 123.41-17.74 123.6-18.65 124-19.56 124.4-20.46 125.04-21.28 125.67-22.11 126.58-22.73 127.48-23.36 128.66-23.74 129.85-24.12 131.34-24.12L131.34-24.12 147.07-24.12 147.07-18.32 131.34-18.32Q130.2-18.32 129.61-17.74 129.02-17.16 129.02-15.95L129.02-15.95 129.02-8.14Q129.02-7.01 129.62-6.4 130.23-5.8 131.39-5.8L131.39-5.8 147.07-5.8ZM174.49-24.12L180.65-24.12Q179.67-21.06 178.35-18.09 177.03-15.13 175.33-12.44 173.62-9.75 171.51-7.46 169.4-5.18 166.85-3.51 164.29-1.85 161.29-0.9 158.29 0.04 154.79 0.04L154.79 0.04Q154.19 0.04 153.65-0.18 153.12-0.4 152.71-0.79 152.31-1.18 152.09-1.71 151.87-2.23 151.87-2.83L151.87-2.83 151.87-24.12 157.67-24.12 157.67-5.98Q159.79-5.98 161.74-6.89 163.69-7.81 165.43-9.31 167.17-10.82 168.66-12.74 170.14-14.66 171.3-16.68 172.46-18.7 173.27-20.64 174.09-22.58 174.49-24.12L174.49-24.12Z",transform:"translate(-2.2300000190734863, 34.310001373291016)"})])])])],-1),I5=a("defs",null,null,-1),O5={key:1,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","data-v-70b83f88":"",version:"1.0",width:"100%",height:"100%",viewBox:"0 0 340.000000 250.000000",preserveAspectRatio:"xMidYMid meet","color-interpolation-filters":"sRGB",style:{margin:"auto"}},V5=a("rect",{"data-v-70b83f88":"",x:"0",y:"0",width:"100%",height:"100%",fill:"transparent","fill-opacity":"1"},null,-1),Q5=a("rect",{"data-v-70b83f88":"",x:"0",y:"0",width:"100%",height:"100%",fill:"url(#watermark)","fill-opacity":"1"},null,-1),R5={"data-v-70b83f88":"",fill:"#fff",transform:"translate(80.79000091552734,67.59225463867188)"},N5={transform:"translate(59.209999084472656,0)"},z5=a("rect",{fill:"#fff","fill-opacity":"0","stroke-width":"2",x:"0",y:"0",width:"60",height:"73.46548958626684"},null,-1),U5={x:"0",y:"0",width:"60",height:"73.46548958626684",filtersec:"colorsb7194309748",style:{overflow:"visible"}},H5=bu('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.780601501464844 65.8499984741211"><title>c30</title><g data-name="\u56FE\u5C42 2"><g data-name="Layer 1"><path d="M36.67 21.36c1 2.76 2 3.2 4.81 2.4L51 20.38c2.67-.89 3.29-2.23 2.4-4.81A23.23 23.23 0 0 0 48 7.13l-11.47 14c.08.1.11.16.14.23z" fill="#d65fc2"></path><path d="M27.41 15.58c4.9 0 7.55 1.73 9.16 5.59L48 7.13C43.39 2.51 36.56 0 27.41 0h-.52v15.59z" fill="#e94c9b"></path><path d="M27.41 50.29h-.52v15.56h.52c9.11 0 15.92-2.49 20.58-7.08l-11.44-14c-1.46 3.64-4.28 5.52-9.14 5.52z" fill="#ff9845"></path><path d="M17.9 44L6.26 58.27c4.57 4.73 11.54 7.47 20.63 7.58V50.27c-5.43-.12-8.18-2.17-8.99-6.27z" fill="#ff7449"></path><path d="M53.4 50.29c.89-2.58.27-3.92-2.4-4.81l-9.52-3.38c-2.67-1-3.74-.36-4.81 2.4 0 .1-.08.18-.12.28L48 58.79a23.2 23.2 0 0 0 5.4-8.5z" fill="#ffb033"></path><path d="M26.89 15.59V0C17.77.12 10.78 2.84 6.21 7.64l11.67 14.29c.79-4.13 3.54-6.21 9.01-6.34z" fill="#f24671"></path><path d="M17.62 41v-8.1H0v8C0 48.13 2.18 54 6.26 58.27L17.9 44a15.26 15.26 0 0 1-.28-3z" fill="#ff5a54"></path><path d="M17.62 24.83a15.42 15.42 0 0 1 .26-2.9L6.21 7.64C2.16 11.9 0 17.76 0 24.92v8h17.62z" fill="#fd576b"></path></g></g></svg>',1),q5=[H5],W5=a("g",{transform:"translate(0,80.46549224853516)"},[a("g",{"data-gra":"path-name"},[a("g",{transform:"scale(1)"},[a("g",null,[a("path",{d:"M26.08-5.8L26.08 0 10.35 0Q9.15 0 7.72-0.42 6.29-0.85 5.08-1.82 3.86-2.79 3.05-4.34 2.23-5.89 2.23-8.14L2.23-8.14 2.23-16Q2.23-16.82 2.42-17.74 2.61-18.65 3.01-19.56 3.41-20.46 4.05-21.28 4.69-22.11 5.59-22.73 6.49-23.36 7.67-23.74 8.86-24.12 10.35-24.12L10.35-24.12 26.08-24.12 26.08-18.32 10.35-18.32Q9.21-18.32 8.62-17.74 8.03-17.16 8.03-15.95L8.03-15.95 8.03-8.14Q8.03-7.01 8.63-6.4 9.24-5.8 10.4-5.8L10.4-5.8 26.08-5.8ZM56.94-16L56.94-8.14Q56.94-6.65 56.56-5.45 56.18-4.26 55.55-3.36 54.93-2.45 54.1-1.82 53.28-1.18 52.37-0.78 51.47-0.38 50.54-0.19 49.62 0 48.79 0L48.79 0 38.33 0Q37.12 0 35.7-0.42 34.27-0.85 33.05-1.82 31.84-2.79 31.02-4.34 30.21-5.89 30.21-8.14L30.21-8.14 30.21-16Q30.21-18.23 31.02-19.78 31.84-21.33 33.05-22.3 34.27-23.27 35.7-23.69 37.12-24.12 38.33-24.12L38.33-24.12 48.79-24.12Q51.02-24.12 52.59-23.31 54.15-22.51 55.11-21.3 56.07-20.08 56.5-18.65 56.94-17.22 56.94-16L56.94-16ZM51.14-8.14L51.14-15.95Q51.14-17.16 50.53-17.74 49.93-18.32 48.79-18.32L48.79-18.32 38.37-18.32Q37.21-18.32 36.61-17.73 36.01-17.13 36.01-16L36.01-16 36.01-8.14Q36.01-7.01 36.61-6.4 37.21-5.8 38.37-5.8L38.37-5.8 48.79-5.8Q49.98-5.8 50.56-6.4 51.14-7.01 51.14-8.14L51.14-8.14ZM88.33-34.31L88.33-8.14Q88.33-6.65 87.95-5.45 87.57-4.26 86.94-3.36 86.32-2.45 85.49-1.82 84.67-1.18 83.76-0.78 82.86-0.38 81.93-0.19 81.01 0 80.18 0L80.18 0 69.72 0Q68.23 0 67.04-0.38 65.86-0.76 64.96-1.39 64.05-2.03 63.42-2.86 62.78-3.68 62.38-4.58 61.98-5.49 61.79-6.41 61.6-7.34 61.6-8.14L61.6-8.14 61.6-16Q61.6-18.23 62.41-19.78 63.23-21.33 64.44-22.3 65.66-23.27 67.09-23.69 68.52-24.12 69.72-24.12L69.72-24.12 80.18-24.12 80.18-18.32 69.76-18.32Q68.6-18.32 68-17.73 67.4-17.13 67.4-16L67.4-16 67.4-8.19Q67.4-7.01 67.99-6.4 68.58-5.8 69.72-5.8L69.72-5.8 80.18-5.8Q81.37-5.8 81.95-6.4 82.53-7.01 82.53-8.14L82.53-8.14 82.53-34.31 88.33-34.31ZM119.81-16.13L119.81-16.13Q119.81-14.93 119.38-13.53 118.96-12.14 118.01-10.94 117.06-9.75 115.53-8.95 114.01-8.14 111.82-8.14L111.82-8.14 101.36-8.14 101.36-13.65 111.82-13.65Q113-13.65 113.65-14.38 114.3-15.1 114.3-16.18L114.3-16.18Q114.3-17.31 113.57-17.96 112.85-18.61 111.82-18.61L111.82-18.61 101.36-18.61Q100.17-18.61 99.53-17.88 98.88-17.16 98.88-16.09L98.88-16.09 98.88-7.99Q98.88-6.83 99.6-6.18 100.33-5.53 101.4-5.53L101.4-5.53 111.82-5.53 111.82 0 101.36 0Q100.15 0 98.76-0.42 97.36-0.85 96.17-1.8 94.98-2.74 94.17-4.27 93.37-5.8 93.37-7.99L93.37-7.99 93.37-16.13Q93.37-17.34 93.79-18.73 94.22-20.12 95.16-21.32 96.11-22.51 97.64-23.31 99.17-24.12 101.36-24.12L101.36-24.12 111.82-24.12Q113.02-24.12 114.42-23.69 115.81-23.27 117.01-22.32 118.2-21.37 119-19.85 119.81-18.32 119.81-16.13ZM147.07-5.8L147.07 0 131.34 0Q130.14 0 128.71-0.42 127.28-0.85 126.06-1.82 124.85-2.79 124.03-4.34 123.22-5.89 123.22-8.14L123.22-8.14 123.22-16Q123.22-16.82 123.41-17.74 123.6-18.65 124-19.56 124.4-20.46 125.04-21.28 125.67-22.11 126.58-22.73 127.48-23.36 128.66-23.74 129.85-24.12 131.34-24.12L131.34-24.12 147.07-24.12 147.07-18.32 131.34-18.32Q130.2-18.32 129.61-17.74 129.02-17.16 129.02-15.95L129.02-15.95 129.02-8.14Q129.02-7.01 129.62-6.4 130.23-5.8 131.39-5.8L131.39-5.8 147.07-5.8ZM174.49-24.12L180.65-24.12Q179.67-21.06 178.35-18.09 177.03-15.13 175.33-12.44 173.62-9.75 171.51-7.46 169.4-5.18 166.85-3.51 164.29-1.85 161.29-0.9 158.29 0.04 154.79 0.04L154.79 0.04Q154.19 0.04 153.65-0.18 153.12-0.4 152.71-0.79 152.31-1.18 152.09-1.71 151.87-2.23 151.87-2.83L151.87-2.83 151.87-24.12 157.67-24.12 157.67-5.98Q159.79-5.98 161.74-6.89 163.69-7.81 165.43-9.31 167.17-10.82 168.66-12.74 170.14-14.66 171.3-16.68 172.46-18.7 173.27-20.64 174.09-22.58 174.49-24.12L174.49-24.12Z",transform:"translate(-2.2300000190734863, 34.310001373291016)"})])])])],-1),J5=a("defs",null,null,-1),G5=k({__name:"logo",setup(u){const F=Mu();return(e,E)=>(r(),A("div",{class:"logo",onClick:E[0]||(E[0]=t=>e.$router.replace("/home")),"data-aos":"slide-right"},[x(F)?(r(),A("svg",O5,[V5,Q5,a("g",R5,[a("g",N5,[a("g",null,[z5,(r(),A("svg",U5,q5))])]),W5]),J5])):(r(),A("svg",v5,[k5,S5,a("g",w5,[a("g",L5,[a("g",null,[P5,(r(),A("svg",M5,$5))])]),j5]),I5]))]))}});const Z5={key:0,class:"toast-modal","data-aos":"zoom-in"},Y5=k({__name:"toastModal",props:{width:{default:"500px"},flag:{type:Boolean}},emits:["close"],setup(u){return(F,e)=>(r(),A($,null,[a("div",{class:"toast-modal-container center",style:vu({width:F.width})},[F.flag?(r(),A("div",Z5,[Xu(F.$slots,"default",{},void 0,!0)])):V("",!0)],4),F.flag?(r(),A("div",{key:0,class:"mask",onClick:e[0]||(e[0]=E=>F.$emit("close"))})):V("",!0)],64))}});const T=(u,F)=>{const e=u.__vccOpts||u;for(const[E,t]of F)e[E]=t;return e},G=T(Y5,[["__scopeId","data-v-0b477565"]]),ju=d5();function mu(u,F,e=1e3*60*60*3){const E={value:F,expires:Date.now()+e};return localStorage.setItem(u,JSON.stringify(E)),!0}function z(u){const F=Date.now(),e=localStorage.getItem(u);if(!e)return!1;const E=JSON.parse(e);return E.expires<F?(localStorage.removeItem(u),!1):E.value}function _u(u){return z(u)?(localStorage.removeItem(u),!0):!1}function iu(u){X({showClose:!0,message:u,type:"success"})}function K5(u){X({showClose:!0,message:u,type:"warning"})}function h(u){X({showClose:!0,message:u,type:"error"})}function k7(u,F){X({message:xu("p",null,[xu("span",null,u),xu("strong",{style:"color: teal; margin: 0 5px"},F)]),offset:60})}var H=(u=>(u.NETWORK_ERROR="\u7F51\u7EDC\u53D1\u751F\u4E86\u4E00\u70B9\u5C0F\u6545\u969C\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u95EE\u9898\u518D\u6765\u8BD5\u8BD5\u5427\uFF5E",u.BE_INCOMPLATE="\u8BF7\u8F93\u5165\u5B8C\u6574\u7684\u8D26\u6237\u4FE1\u606F",u.VERIFY_CODE_INVAILED="\u9A8C\u8BC1\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5",u))(H||{});const lu=axios.create({baseURL:"http://175.24.199.136/api",timeout:5e3,withCredentials:!0});lu.interceptors.request.use(u=>(u.url==="/fileUpload/upload"&&(u.headers["Content-Type"]="multipart/form-data"),u),u=>(h(u),Promise.reject(new Error(u))));lu.interceptors.response.use(u=>u.data,u=>(h(u),Promise.reject(new Error(u))));function j(u,F={}){return new Promise((e,E)=>{lu.post(u,F).then(t=>{e(t)},t=>{h(H.NETWORK_ERROR),E(t)}).catch(t=>{h(H.NETWORK_ERROR),E(t)})})}function X5(u){return j("/user/login",u)}function u6(u){return j("/user/register",u)}function F6(u){return j("/user/update",u)}function e6(u){return j("/user/logout",u)}function E6(u){return j("/user/verify",u)}function t6(u){return j("/user/pwdUpdate",u)}function x6(){const u=v(!1);function F(){u.value=!u.value}return{infoModel:u,setInfoModel:F}}const f=K({uid:0,nickName:"",username:"",sex:"",professional:"",graduation:"",school:"",avatar:"",origin:""});function o6(u){async function F(){const{userInfo:e,setUserInfo:E}=Q();f.graduation=String(new Date(f.graduation).getFullYear());const t=await F6(f);t.code==200?(u(),iu(t.msg),E(e,f)):h(t.msg)}return{updateInfo:F}}function n6(){const u=K({username:"",password:"",verify:""}),{login:F,logout:e,verifyLoginState:E}=Q();return Y(()=>{const t=z(U),o=z(Z);t&&o&&E(t,o)}),{user:u,login:F,logout:e}}function a6(u,F){const{loginState:e,loginModelToggle:E}=Q();if(!e.logined){E();return}u.push(F)}function C6(){const u=v(!1),F=K({username:"",password:"",verify:""}),{genVerify:e}=Q();function E(){u.value=!u.value,e()}return{model:u,registerUser:F,toggleModel:E}}function B6(){const u=v(!1),F=v(0);function e(){u.value=!u.value}function E(t){F.value=t}return{tab:F,messageModal:u,msgTabChange:E,toggleMessageModal:e}}function s6(){const u=v(!1);function F(){u.value=!u.value}return{PWDModel:u,setPWDModel:F}}const r6=new Tu,U="TOKEN",Z="USERNAME",i6={uid:0,nickName:"",username:"",sex:"",professional:"",graduation:"",school:"",avatar:"",origin:""},l6=p5("userStore",{state:()=>({userInfo:i6,loginState:{logined:!1,loginModel:!1,verify:"",verifyImg:""},token:z(U)||""}),actions:{login(u,F){if(!u.username||!u.password){h(H.BE_INCOMPLATE);return}if(this.loginState.verify.toLowerCase()!=u.verify.toLowerCase()){h(H.VERIFY_CODE_INVAILED);return}(F?X5:u6)(u).then(E=>{E.code===200?(this.loginState.logined=!0,this.loginModelToggle(),this.setUserInfo(this.userInfo,E.data),this.setUserInfo(f,E.data),mu(U,E.token),mu(Z,E.data.username),iu(E.msg)):h(E.msg)})},logout(){e6({username:z(Z)}).then(u=>{if(u.code!=200){h(u.msg);return}_u(U),_u(Z),location.reload()})},verifyLoginState(u,F){E6({token:u,username:F}).then(e=>{e.code===200?(this.loginState.logined=!0,this.setUserInfo(this.userInfo,e.data),this.setUserInfo(f,e.data)):h(e.msg)})},loginModelToggle(){this.loginState.loginModel=!this.loginState.loginModel,this.genVerify()},genVerify(){this.loginState.verify=$u(),this.loginState.verifyImg=r6.render(this.loginState.verify)},setUserInfo(u,F){u.uid=F.uid,u.nickName=F.nickName,u.username=F.username,u.sex=F.sex,u.professional=F.professional,u.graduation=F.graduation,u.school=F.school,u.avatar=F.avatar,u.origin=F.origin}}}),Q=()=>l6(ju),A6=["Java\u540E\u7AEF","Go","python","C++","\u6570\u636E\u5E93","web\u524D\u7AEF","\u5927\u6570\u636E","\u7B97\u6CD5\u5DE5\u7A0B\u5E08","\u6570\u636E\u5206\u6790","\u6280\u672F\u8FD0\u8425","\u6D4B\u8BD5\u5F00\u53D1","UI\u8BBE\u8BA1","\u7F51\u7EDC\u5B89\u5168","\u8FD0\u7EF4","\u6750\u6599\u5DE5\u7A0B","\u5D4C\u5165\u5F0F\u5F00\u53D1","\u79FB\u52A8\u901A\u4FE1","\u533A\u5757\u94FE","\u571F\u6728\u5DE5\u7A0B\u5E08","\u82AF\u7247\u7814\u53D1","\u8F6F\u4EF6\u7814\u53D1","\u516C\u52A1\u5458"];function c6(u){return j("/fileUpload/upload",u)}function D6(u){return j("/fileUpload/merge",u)}function d6(u){const t=u.name.slice(0,u.name.lastIndexOf(".")),o=u.name.slice(u.name.lastIndexOf(".")+1);return new Promise((n,B)=>{async function C(l){const m=l*1048576;if(u.size>5242880)return h("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7"+5+"M!");if(t.length>80)return h("\u6587\u4EF6\u540D\u592A\u957F\u4E86, \u6539\u4E00\u4E0B\u5427");if(m>u.size)return s(u.name,l);const g=u.slice(m,m+1048576),S=`${t}.${l}.${o}`,w=new File([g],S),b=new FormData;b.append("file",w);try{await c6(b),C(++l)}catch{B("\u4E0A\u4F20\u5931\u8D25\u4E86\uFF0C\u5F85\u4F1A\u518D\u8BD5\u8BD5\u5427\uFF5E")}}async function s(l,m){const g=await D6({name:l,length:m});g.code===200?n(g.url):B(g.msg)}C(0)})}function S7(u){const F=document.createElement("input");F.setAttribute("type","file"),F.setAttribute("accept",u.accept),F.style.cssText="position: absolute; left: -9999px; top: -9999px; opacity: 0",F.multiple=u.multiple;const e=new Promise(function(E){F.addEventListener("change",async function(t){document.body.removeChild(F);try{const o=t.target.files;E(o[0])}catch(o){h(o)}})});return document.body.appendChild(F),F.click(),e}const p6={for:"user_avatar_upload"},m6=["src"],_6=k({__name:"profile",emits:["cancel","submit"],setup(u,{emit:F}){const e=v(),E=v(),t=K({nickName:[{required:!0,message:"\u8BF7\u8F93\u5165\u6635\u79F0",trigger:"blur"},{min:1,max:16,message:"1\uFF5E16\u5B57",trigger:"blur"}],school:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F93\u5165\u4F60\u6240\u5C31\u8BFB\u7684\u9662\u6821",trigger:"blur"},{min:4,max:20,message:"4\uFF5E20\u5B57",trigger:"blur"}],sex:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B",trigger:"change"}],professional:[{required:!0,message:"\u8BF7\u9009\u62E9\u610F\u5411\u5C97\u4F4D",trigger:"blur"}],graduation:[{required:!0,message:"\u8BF7\u9009\u62E9\u6BD5\u4E1A\u65F6\u95F4",trigger:"blur"}],origin:[{required:!0,message:"\u8BF7\u8F93\u5165\u4F60\u6240\u5728\u7684\u5730\u533A",trigger:"blur"},{max:10,min:2,message:"2\uFF5E10\u5B57",trigger:"blur"}]}),o=async B=>{!B||await B.validate(C=>{C&&F("submit")})},n=async function(){const B=E.value.files,C=await d6(B[0]);f.avatar=C};return(B,C)=>{const s=t5,l=x5,m=o5,g=B5,S=s5,w=r5,b=n5,L=a5,Fu=C5;return r(),y(Fu,{ref_key:"ruleFormRef",ref:e,model:x(f),rules:t,"label-width":"100px","status-icon":""},{default:D(()=>[i(s,{"label-width":"80px"},{default:D(()=>[a("label",p6,[a("img",{class:"pointer",src:x(f).avatar,alt:"\u5934\u50CF"},null,8,m6)]),a("input",{type:"file",ref_key:"uploadInput",ref:E,id:"user_avatar_upload",accept:".png,.jpg,.jpeg,.gif,.webp",onChange:n},null,544)]),_:1}),i(s,{label:"\u6027\u522B",prop:"sex",required:""},{default:D(()=>[i(m,{modelValue:x(f).sex,"onUpdate:modelValue":C[0]||(C[0]=_=>x(f).sex=_)},{default:D(()=>[i(l,{label:"\u7537"}),i(l,{label:"\u5973"})]),_:1},8,["modelValue"])]),_:1}),i(s,{label:"\u7528\u6237\u6635\u79F0",prop:"nickName",required:""},{default:D(()=>[i(g,{class:"input",modelValue:x(f).nickName,"onUpdate:modelValue":C[1]||(C[1]=_=>x(f).nickName=_),placeholder:"\u7F51\u4E0A\u51B2\u6D6A\u7684\u6635\u79F0"},null,8,["modelValue"])]),_:1}),i(s,{label:"\u6BD5\u4E1A\u9662\u6821",prop:"school",required:""},{default:D(()=>[i(g,{class:"input",modelValue:x(f).school,"onUpdate:modelValue":C[2]||(C[2]=_=>x(f).school=_),placeholder:"\u4F60\u6240\u5C31\u8BFB\u7684\u9662\u6821"},null,8,["modelValue"])]),_:1}),i(s,{label:"\u610F\u5411\u5C97\u4F4D",prop:"professional",required:""},{default:D(()=>[i(w,{modelValue:x(f).professional,"onUpdate:modelValue":C[3]||(C[3]=_=>x(f).professional=_),placeholder:"\u9009\u62E9\u4F60\u7684\u610F\u5411\u5C97\u4F4D"},{default:D(()=>[(r(!0),A($,null,q(x(A6),(_,eu)=>(r(),y(S,{key:eu,label:_,value:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(s,{label:"\u6BD5\u4E1A\u65F6\u95F4",required:"",prop:"graduation"},{default:D(()=>[i(b,{modelValue:x(f).graduation,"onUpdate:modelValue":C[4]||(C[4]=_=>x(f).graduation=_),type:"year",placeholder:"\u6BD5\u4E1A\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),i(s,{label:"\u6240\u5728\u5730\u533A",prop:"origin",required:""},{default:D(()=>[i(g,{class:"input",modelValue:x(f).origin,"onUpdate:modelValue":C[5]||(C[5]=_=>x(f).origin=_)},null,8,["modelValue"])]),_:1}),i(s,null,{default:D(()=>[i(L,{type:"primary",onClick:C[6]||(C[6]=_=>o(e.value))},{default:D(()=>[M("\u63D0\u4EA4\u4FEE\u6539")]),_:1}),i(L,{onClick:C[7]||(C[7]=_=>B.$emit("cancel"))},{default:D(()=>[M("\u53D6\u6D88")]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});const f6=T(_6,[["__scopeId","data-v-4cec3f8c"]]);function g6(u){const F=v({nPassword:"",oPassword:"",verify:""}),e=v(""),E=new Tu;let t="";async function o(){if(F.value.nPassword.trim()===""||F.value.oPassword.trim()==="")return h("\u4FE1\u606F\u8BF7\u586B\u5199\u5B8C\u6574!");if(F.value.verify.trim().toLowerCase()!=t.toLowerCase())return h("\u9A8C\u8BC1\u7801\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5\uFF01");const{userInfo:C}=Q(),s=C.username,{code:l,msg:m}=await t6({username:s,nPassword:F.value.nPassword,oPassword:F.value.oPassword});if(l==200){K5(m),location.reload();return}h(m)}function n(){t=$u(),e.value=E.render(t)}function B(){n(),u("cancel")}return Y(n),{form:F,imgSrc:e,genCode:n,cancel:B,submit:o}}const Iu=u=>(R("data-v-e7d5c15f"),u=u(),N(),u),h6={class:"pwd-update"},y6=Iu(()=>a("h3",null,"\u5BC6\u7801\u4FEE\u6539",-1)),b6=["src"],v6={class:"btn-group"},k6=Iu(()=>a("p",{class:"mt-20 tip"},"ps: \u8BF7\u4FDD\u5B58\u597D\u5BC6\u7801 \u5207\u52FF\u5916\u4F20",-1)),S6=k({__name:"PWDUpdate",emits:["cancel"],setup(u,{emit:F}){const{form:e,imgSrc:E,cancel:t,submit:o,genCode:n}=g6(F);return(B,C)=>(r(),A($,null,[a("div",h6,[y6,I(a("input",{type:"password",placeholder:"\u539F\u5BC6\u7801","onUpdate:modelValue":C[0]||(C[0]=s=>x(e).oPassword=s),maxLength:"16"},null,512),[[O,x(e).oPassword]]),I(a("input",{type:"password",placeholder:"\u65B0\u5BC6\u7801","onUpdate:modelValue":C[1]||(C[1]=s=>x(e).nPassword=s),maxLength:"16"},null,512),[[O,x(e).nPassword]]),I(a("input",{type:"text",placeholder:"\u9A8C\u8BC1\u7801","onUpdate:modelValue":C[2]||(C[2]=s=>x(e).verify=s),maxLength:"4"},null,512),[[O,x(e).verify]]),a("img",{src:x(E),alt:"\u9A8C\u8BC1\u7801",onClick:C[3]||(C[3]=(...s)=>x(n)&&x(n)(...s))},null,8,b6),a("div",v6,[a("button",{class:"btn primary",onClick:C[4]||(C[4]=(...s)=>x(o)&&x(o)(...s))},"\u63D0\u4EA4"),a("button",{class:"btn plain",onClick:C[5]||(C[5]=(...s)=>x(t)&&x(t)(...s))},"\u53D6\u6D88")])]),k6],64))}});const w6=T(S6,[["__scopeId","data-v-e7d5c15f"]]),L6=u=>(R("data-v-86a53625"),u=u(),N(),u),P6={class:"nav-bar flex flex-space-between"},M6={class:"tabs"},T6=["onClick"],$6={class:"primary cursor btn pointer newtemplate"},j6=L6(()=>a("i",{class:"iconfont icon-diy"},null,-1)),I6=k({__name:"navBar",props:{tabs:{},button:{}},emits:["tab-click"],setup(u,{emit:F}){const e=v(0),E=Bu();function t(o){e.value=o,F("tab-click",o)}return(o,n)=>(r(),A("div",P6,[a("ul",M6,[(r(!0),A($,null,q(o.tabs,(B,C)=>(r(),A("li",{key:C,class:Cu(["mr-20","pointer","none",{checked:B==o.tabs[e.value]}]),onClick:s=>t(C)},P(B),11,T6))),128))]),o.button?(r(),A("a",{key:0,class:"ripple-effect newtemplate-container",onClick:n[0]||(n[0]=B=>x(E).push("/editor?type=create"))},[a("button",$6,[j6,M(" "+P(o.button),1)])])):V("",!0)]))}});const O6=T(I6,[["__scopeId","data-v-86a53625"]]);su.extend(f5);su.locale("zh-cn");function fu(u){return su(u).fromNow()}const V6=""+new URL("../svg/empty-88a93747.svg",import.meta.url).href,Q6=u=>(R("data-v-b19665bf"),u=u(),N(),u),R6={class:"empty content-card"},N6=Q6(()=>a("img",{width:"150",src:V6,alt:"\u7A7A\u5360\u4F4D\u7B26"},null,-1)),z6=k({__name:"empty",props:{title:{}},setup(u){return(F,e)=>(r(),A("div",R6,[N6,a("p",null,P(F.title),1)]))}});const U6=T(z6,[["__scopeId","data-v-b19665bf"]]),Ou=u=>(R("data-v-4c06fd77"),u=u(),N(),u),H6={class:"crm"},q6={key:0,class:"list"},W6={class:"flex notification-list list-style-init"},J6=["onClick"],G6={class:"comment-info"},Z6={class:"gray"},Y6={class:"line-2"},K6={class:"gray"},X6={class:"reply-info"},u0={class:"mb-10 flex flex-space-between"},F0=Ou(()=>a("span",null,"\u6765\u81EA\uFF1A",-1)),e0={key:0,class:"line-2"},E0=Ou(()=>a("span",null,"\u8BC4\u8BBA\u5185\u5BB9\uFF1A",-1)),t0={key:1,class:"line-2"},x0=k({__name:"crm",props:{data:{},total:{}},emits:["readNotification","queryData"],setup(u){return(F,e)=>{const E=ku,t=i5,o=l5;return r(),A("div",H6,[F.data.length?(r(),A("div",q6,[a("ul",W6,[(r(!0),A($,null,q(F.data,(n,B)=>(r(),A("li",{key:B,class:"pointer notification-item",onClick:C=>F.$emit("readNotification",n)},[n.read?V("",!0):(r(),y(E,{key:0,class:"is-read",value:"new"})),a("div",G6,[i(t,{lazy:!0,src:n.commentUserInfo.avatar,fit:"cover",loading:"lazy",alt:"\u5934\u50CF",class:"mr-10 avatar"},null,8,["src"]),a("span",Z6,P(n.commentUserInfo.nickName),1),a("p",Y6,[a("span",K6,P(x(fu)(n.commentContent.createTime))+"\u56DE\u590D\u4F60\uFF1A",1),M(" "+P(n.commentContent.content),1)])]),a("div",X6,[a("div",u0,[F0,a("span",null,P(x(fu)(n.replyContent.createTime))+"\u53D1\u5E03\u7684",1)]),i(t,{lazy:!0,src:n.replyUserInfo.avatar,fit:"cover",loading:"lazy",alt:"\u5934\u50CF",class:"mr-10 avatar"},null,8,["src"]),a("span",null,P(n.replyUserInfo.nickName),1),n.replyContent.content?(r(),A("p",e0,[E0,M(" "+P(n.replyContent.content),1)])):(r(),A("p",t0,"....."))])],8,J6))),128))]),i(o,{layout:"prev, pager, next",style:{"padding-top":"15px"},onCurrentChange:e[0]||(e[0]=n=>F.$emit("queryData",n)),"page-size":10,total:F.total},null,8,["total"])])):(r(),y(U6,{key:1,title:"\u8FD9\u662F\u6682\u65F6\u8FD8\u662F\u7A7A\u7684~"}))])}}});const o0=T(x0,[["__scopeId","data-v-4c06fd77"]]);function n0(){const u=Mu(),F=D5(u);return u5(()=>{const e=u.value?"#5745c8":"#ff7449",E=u.value?"#282c34":"#ffffff",t=u.value?"#fffff8":"#555555",o=u.value?"#ab3fb2":"#f24672",n=u.value?"#282c34":"#222222",B=u.value?"#1e2633":"#f3f5f7";document.body.style.setProperty("--theme",e),document.body.style.setProperty("--background",E),document.body.style.setProperty("--font-color",t),document.body.style.setProperty("--strong-color",o),document.body.style.setProperty("--toolbar-bg",n),document.body.style.setProperty("--body-background",B)}),{toggleTheme:F,isDark:u}}function w7(u){const F=v(u!=null?u:!1);function e(){F.value=!F.value}function E(){F.value=!0}function t(){F.value=!1}return{open:F,toggle:e,setTure:E,setFalse:t}}const a0=k({__name:"themeToggle",setup(u){const{isDark:F,toggleTheme:e}=n0();return(E,t)=>{const o=Su;return r(),y(o,{content:"\u4E3B\u9898\u5207\u6362",placement:"bottom-end"},{default:D(()=>[a("i",{style:vu({color:x(F)?"#bfc510":"#ff7449"}),class:Cu(["bold","iconfont",x(F)?"icon-moon":"icon-shine","mr-20","font-25","pointer","hover"]),onClick:t[0]||(t[0]=n=>x(e)())},null,6)]),_:1})}}});function C0(u){return j("/notification/list",u)}function B0(u){return j("/notification/read",u)}function s0(u){const{userInfo:F}=Q(),e=Bu(),E=v(0),t=v(0),o=v({pageNum:1,pageSize:10,uid:0}),n=v([]);async function B(){o.value.uid=F.uid;const l=await C0(o.value);l.code==200?(n.value=l.data,t.value=l.total,E.value=l.commentTotal):h(l.msg)}async function C({commentId:l,articleId:m,read:g,posterCommentId:S}){e.replace({path:"/community/detail",query:{articleId:m,posterCommentId:S}}),u(),g!=1&&(await B0({commentId:l})).code==200&&B()}function s(l){o.value.pageNum=l,B()}return Y(()=>{F.uid!=0&&B()}),F5(()=>F.uid,()=>{F.uid!=0&&B()}),{data:n,total:t,commentTotal:E,readNotification:C,pageNumChange:s}}const Au=u=>(R("data-v-e9340f2e"),u=u(),N(),u),r0={class:"user","data-aos":"slide-left"},i0=Au(()=>a("i",{class:"iconfont icon-edit font-20"},null,-1)),l0={class:"user-nick mr-10"},A0=["src"],c0={key:0,class:"login","data-aos":"zoom-in"},D0=Au(()=>a("h3",null,"\u7528\u6237\u767B\u5F55",-1)),d0=["src"],p0={key:1,class:"register","data-aos":"zoom-in"},m0=Au(()=>a("h3",null,"\u7528\u6237\u6CE8\u518C",-1)),_0=["src"],f0=k({__name:"user",setup(u){const F=Bu(),{user:e,login:E,logout:t}=n6(),{infoModel:o,setInfoModel:n}=x6(),{updateInfo:B}=o6(n),{PWDModel:C,setPWDModel:s}=s6(),{loginModelToggle:l,userInfo:m,genVerify:g,loginState:S}=Q(),{model:w,registerUser:b,toggleModel:L}=C6(),{messageModal:Fu,toggleMessageModal:_,tab:eu,msgTabChange:zu}=B6(),{data:Uu,total:Hu,commentTotal:du,readNotification:qu,pageNumChange:Wu}=s0(_);return(s7,c)=>{const Ju=ku,Eu=wu,Gu=Lu,Zu=Pu;return r(),A($,null,[a("div",r0,[i(a0),x(S).logined?(r(),A($,{key:0},[a("div",{class:"user-creative mr-20 pointer primary",onClick:c[0]||(c[0]=d=>x(a6)(x(F),"/community/editor"))},[M(" \u5199\u9762\u7ECF "),i0]),x(du)?(r(),y(Ju,{key:0,value:x(du),class:"mr-20"},{default:D(()=>[a("i",{class:"iconfont icon-message1 message hover pointer font-25",onClick:c[1]||(c[1]=(...d)=>x(_)&&x(_)(...d))})]),_:1},8,["value"])):(r(),A("i",{key:1,class:"iconfont icon-message1 message hover pointer font-25 mr-10",onClick:c[2]||(c[2]=(...d)=>x(_)&&x(_)(...d))})),a("span",l0,P(x(m).nickName),1),i(Zu,null,{dropdown:D(()=>[i(Gu,null,{default:D(()=>[i(Eu,{onClick:x(n)},{default:D(()=>[M("\u4E2A\u4EBA\u4FE1\u606F")]),_:1},8,["onClick"]),i(Eu,{onClick:x(s)},{default:D(()=>[M("\u4FEE\u6539\u5BC6\u7801")]),_:1},8,["onClick"]),i(Eu,{onClick:x(t)},{default:D(()=>[M("\u9000\u51FA\u767B\u5F55")]),_:1},8,["onClick"])]),_:1})]),default:D(()=>[a("img",{onClick:c[3]||(c[3]=(...d)=>x(n)&&x(n)(...d)),class:"pointer mr-10",src:x(m).avatar},null,8,A0)]),_:1})],64)):(r(),A("span",{key:1,class:"pointer mr-10",onClick:c[4]||(c[4]=(...d)=>x(l)&&x(l)(...d))},"\u767B\u5F55"))]),i(G,{width:"400px",flag:x(o),onClose:x(n)},{default:D(()=>[i(f6,{onCancel:x(n),onSubmit:x(B)},null,8,["onCancel","onSubmit"])]),_:1},8,["flag","onClose"]),i(G,{width:"300px",flag:x(C),onClose:x(s)},{default:D(()=>[i(w6,{onCancel:x(s)},null,8,["onCancel"])]),_:1},8,["flag","onClose"]),i(G,{onClose:x(l),flag:x(S).loginModel,width:"300px"},{default:D(()=>[x(w)?V("",!0):(r(),A("div",c0,[D0,I(a("input",{"onUpdate:modelValue":c[5]||(c[5]=d=>x(e).username=d),placeholder:"\u7528\u6237\u540D"},null,512),[[O,x(e).username]]),I(a("input",{"onUpdate:modelValue":c[6]||(c[6]=d=>x(e).password=d),type:"password",placeholder:"\u5BC6\u7801"},null,512),[[O,x(e).password]]),I(a("input",{"onUpdate:modelValue":c[7]||(c[7]=d=>x(e).verify=d),placeholder:"\u9A8C\u8BC1\u7801"},null,512),[[O,x(e).verify]]),a("img",{onClick:c[8]||(c[8]=(...d)=>x(g)&&x(g)(...d)),class:"verify-code pointer",src:x(S).verifyImg},null,8,d0),a("button",{class:"btn primary",onClick:c[9]||(c[9]=J(d=>x(E)(x(e),!0),["prevent"]))},"\u9A6C\u4E0A\u767B\u5F55"),a("button",{class:"btn plain",onClick:c[10]||(c[10]=J((...d)=>x(L)&&x(L)(...d),["prevent"]))},"\u6211\u8981\u6CE8\u518C")])),x(w)?(r(),A("div",p0,[m0,I(a("input",{"onUpdate:modelValue":c[11]||(c[11]=d=>x(b).username=d),placeholder:"\u7528\u6237\u540D"},null,512),[[O,x(b).username]]),I(a("input",{"onUpdate:modelValue":c[12]||(c[12]=d=>x(b).password=d),type:"password",placeholder:"\u5BC6\u7801"},null,512),[[O,x(b).password]]),I(a("input",{"onUpdate:modelValue":c[13]||(c[13]=d=>x(b).verify=d),placeholder:"\u9A8C\u8BC1\u7801"},null,512),[[O,x(b).verify]]),a("img",{onClick:c[14]||(c[14]=(...d)=>x(g)&&x(g)(...d)),class:"verify-code pointer",src:x(S).verifyImg},null,8,_0),a("button",{class:"btn primary",onClick:c[15]||(c[15]=J(d=>x(E)(x(b),!1),["prevent"]))},"\u6CE8\u518C"),a("button",{class:"btn plain",onClick:c[16]||(c[16]=J((...d)=>x(L)&&x(L)(...d),["prevent"]))},"\u53BB\u767B\u5F55")])):V("",!0)]),_:1},8,["onClose","flag"]),i(G,{onClose:x(_),flag:x(Fu),width:"80%"},{default:D(()=>[i(O6,{tabs:["\u8BC4\u8BBA/\u56DE\u590D"],onTabClick:x(zu)},null,8,["onTabClick"]),x(eu)==0?(r(),y(o0,{key:0,data:x(Uu),total:x(Hu),onReadNotification:x(qu),onQueryData:x(Wu)},null,8,["data","total","onReadNotification","onQueryData"])):V("",!0)]),_:1},8,["onClose","flag"])],64)}}});const Vu=T(f0,[["__scopeId","data-v-e9340f2e"]]),Qu=[{name:"\u7B80\u5386\u5236\u4F5C",path:"/template",tooltip:!1},{name:"\u8BED\u6CD5\u52A9\u624B",path:"/syntax/helper",tooltip:!1},{name:"\u66F4\u65B0\u5185\u5BB9",path:"/update/line",tooltip:!1}],g0={class:"nav"},h0={key:1},y0=k({__name:"nav",setup(u){return(F,e)=>{const E=au("router-link");return r(),A("ul",g0,[(r(!0),A($,null,q(x(Qu),(t,o)=>(r(),A("li",{key:o,"data-aos":"slide-left",class:Cu({checked:F.$route.path.startsWith(t.path)})},[t.tooltip?(r(),A("span",h0,P(t.name),1)):(r(),y(E,{key:0,to:t.path},{default:D(()=>[M(P(t.name),1)]),_:2},1032,["to"]))],2))),128))])}}}),b0=u=>(R("data-v-4c0c453b"),u=u(),N(),u),v0={class:"header-moblie"},k0=b0(()=>a("i",{class:"iconfont icon-home ml-10 bold"},null,-1)),S0=k({__name:"navMoblie",setup(u){return(F,e)=>{const E=wu,t=Lu,o=Pu;return r(),A("div",v0,[i(o,null,{dropdown:D(()=>[i(t,null,{default:D(()=>[(r(!0),A($,null,q(x(Qu),(n,B)=>(r(),y(E,{key:B,onClick:C=>F.$router.push(n.path)},{default:D(()=>[M(P(n.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:D(()=>[k0]),_:1}),i(Vu)])}}});const w0=T(S0,[["__scopeId","data-v-4c0c453b"]]),L0={class:"header-out"},P0={class:"header"},M0={class:"header-800"},T0=k({__name:"header",setup(u){return(F,e)=>(r(),A("div",L0,[a("div",P0,[i(G5),i(y0),i(Vu)]),a("div",M0,[i(w0)])]))}});const $0=T(T0,[["__scopeId","data-v-db41e082"]]),j0=(u,F)=>{const e=u[F];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((E,t)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+F)))})},I0=`## \u5F20\u4E09-Web\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08
::: start
icon:user \u7537 / 2000.01.01 / \u6C5F\u897F\u5357\u660C
icon:phone 155xxxxxx06
:::
[icon:email xxxxxxxx@163.com](xxxxxxxx@163.com)
[icon:github https://github.com/acmenlei](https://github.com/acmenlei)
::: end

## \u6559\u80B2\u80CC\u666F
::: start
- **\u6C5F\u897Fxxxx\u5927\u5B66**
- VR\u73B0\u4EE3\u4EA7\u4E1A\u5B66\u9662 - \u8F6F\u4EF6\u5DE5\u7A0B\uFF08\u672C\u79D1\uFF09
:::

**2019.09 - 2023.07**
::: end

## \u4E13\u4E1A\u6280\u80FD
- \u719F\u6089 Vue \u6846\u67B6\u5E76\u5BF9\u5176\u6E90\u7801\u6709\u8FC7\u6DF1\u5165\u7814\u7A76\uFF0C\u4E14\u719F\u6089 Vue \u76F8\u5173\u6280\u672F\u6808\uFF0C\u5E76\u80FD\u5728\u9879\u76EE\u4E2D\u8FDB\u884C\u5B9E\u9645\u5E94\u7528
- \u719F\u6089 React \u5E93\u53CA\u5176\u751F\u6001\uFF0C\u5982 React-Hooks\u3001Redux \u7B49\uFF0C\u5E76\u80FD\u5728\u9879\u2F6C\u4E2D\u8FDB\u2F8F\u5B9E\u9645\u5E94\u2F64
- \u719F\u6089 JavaScript\u3001ES6 \u8BED\u6CD5\uFF0C\u5982 Promise\u3001Generator\u3001Async/Await \u7B49
- \u719F\u6089 HTML\u3001CSS\uFF0C\u5982 FlexBox\u3001CSS \u52A8\u753B\u7B49\uFF0C\u5E76\u80FD\u7F16\u5199\u7B26\u5408 W3C \u6807\u51C6\u7684\u9875\u9762\u5E03\u5C40
- \u4E86\u89E3\u5E38\u89C1\u7684\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\uFF0C\u5982\u94FE\u8868\u3001\u6811\u3001\u56FE\u8BBA\u7B49\uFF0C\u5E76\u80FD\u6839\u636E\u5B9E\u9645\u5E94\u7528\u573A\u666F\u5BF9\u529F\u80FD\u8FDB\u884C\u4F18\u5316
- \u4E86\u89E3\u524D\u7AEF\u5DE5\u7A0B\u5316\uFF0C\u80FD\u4F7F\u7528 Vite\u3001Webpack \u5BF9\u9879\u76EE\u8FDB\u884C\u57FA\u672C\u7684\u914D\u7F6E
- \u4E86\u89E3\u8BA1\u7B97\u673A\u7F51\u7EDC\u76F8\u5173\u77E5\u8BC6\uFF0C\u5982 TCP/IP\u3001UDP\u3001HTTP\u3001HTTPS\u3001DNS \u534F\u8BAE\u7B49
- \u4E86\u89E3 Nodejs \u53CA\u5176\u751F\u6001\uFF0C\u5982 Express\u3001Sequelize\uFF0C\u5E76\u80FD\u4F7F\u7528 Nodejs \u642D\u5EFA\u57FA\u672C\u7684\u540E\u53F0\u670D\u52A1

## \u5F00\u6E90\u4F5C\u54C1
**[icon:github markdown-transform-html](https://github.com/acmenlei/markdown-transform-html)**
- **\u5DE5\u5177\u4ECB\u7ECD**\uFF1A\u57FA\u4E8E TypeScript \u5F00\u53D1\u7684 MD \u8BCD\u6CD5\u5206\u6790\u5668\uFF0C\u4E00\u7AD9\u5F0F\u89E3\u6790 Markdown \u8BED\u6CD5\u4E3A HTML \u7ED3\u6784\u7684\u5DE5\u5177\uFF0C\u4E14\u53EF\u63D0\u4F9B\u4EE3\u7801\u9AD8\u4EAE\u529F\u80FD
- **\u7EBF\u4E0A\u6F14\u793A**\uFF1A[https://acmenlei.github.io/markdown-transform-html-demo/dist/](https://acmenlei.github.io/markdown-transform-html-demo/dist/)

**[icon:github v3-carousel](https://github.com/acmenlei/v3-carousel)**
- **\u5DE5\u5177\u4ECB\u7ECD**\uFF1A\u57FA\u4E8E Vue3 Composition Api \u5F00\u53D1\u7684\u8F6E\u64AD\u56FE\u7EC4\u4EF6\uFF0C\u8F6E\u64AD\u5185\u5BB9\u53EF\u5B8C\u5168\u81EA\u5B9A\u4E49
- **\u7EBF\u4E0A\u6F14\u793A**\uFF1A[https://acmenlei.github.io/v3-carousel/dist/](https://acmenlei.github.io/v3-carousel/dist/)

## \u5B9E\u4E60\u7ECF\u5386
::: start
**xxxxxx - xxxxxx - web\u524D\u7AEF\u5F00\u53D1\u5B9E\u4E60\u751F - \u676D\u5DDE(xxxx\u4EBA\u4EE5\u4E0A)**
:::
**xxxx.xx - xxxx.xx**
::: end

##### xxxxxxxxx

- **\u6280\u672F\u6808**\uFF1A\`Vue.js\` \`ElementUI\` \`Echarts\` \`Vuex\` \`Vue-Router\`&nbsp;
- **\u9879\u76EE\u7B80\u4ECB**\uFF1Axxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- **\u5DE5\u4F5C\u5185\u5BB9**\uFF1A

1. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
2. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
3. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
4. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
5. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
6. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


## \u9879\u76EE\u7ECF\u5386

::: start
### xxxxxxxxxxxxxx
:::
** 2021.12 - \u81F3\u4ECA **
::: end
- **\u6280\u672F\u6808**\uFF1A\`Vue.js\` \`ElementUI\` \`Echarts\` \`Vuex\` \`Vue-Router\`&nbsp;
- **\u9879\u76EE\u7B80\u4ECB**\uFF1Axxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- **\u5DE5\u4F5C\u5185\u5BB9**\uFF1A

1. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
2. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
3. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
4. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
5. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
6. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
7. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
8. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
`,O0={name:"\u4E92\u8054\u7F51IT\u901A\u7528",primaryColor:"#333",primaryBackground:"#333",img:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7cbae36d47d4ed7ab9c79dca959f3fa~tplv-k3u1fbpfcp-watermark.image?",content:I0},V0=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),Q0=`
::: headStart
::: start
# Baby Shark

::: start
icon:phone 185xxxx5387
icon:github [github.com/Jack](github.com/Jack)
:::
icon:email coderleilei@163.com
icon:link [blog.com](https://blog.com)
:::
icon:wechat wechatnumberxxx
icon:yuque [yueque.com/xiongleixin](yueque.com/xiongleixin)
::: end

:::
![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)
::: end
::: headEnd


## \u4E2A\u4EBA\u6280\u80FD
::: start
PHP/Java/Node
:::
\u719F\u7EC3\u7A0B\u5EA6

::: end
::: start
ThinkPHP/Yaf/Yii/Lavaral/LazyPHP
:::
\u719F\u7EC3\u7A0B\u5EA6
::: end
::: start
Bootstrap/AngularJS/EmberJS/HTML5/Cocos2dJS/ionic
:::
\u719F\u7EC3\u7A0B\u5EA6
::: end
::: start
Bower/Gulp/SaSS/LeSS/PhoneGap
:::
\u719F\u7EC3\u7A0B\u5EA6
::: end
::: start
PHPUnit/SimpleTest/Qunit
:::
\u719F\u7EC3\u7A0B\u5EA6
::: end
::: start
SAE/BAE/AWS/\u5FAE\u535A\u5F00\u653E\u5E73\u53F0/\u5FAE\u4FE1\u5E94\u7528\u5F00\u53D1
:::
\u719F\u7EC3\u7A0B\u5EA6
::: end
...

## \u5F00\u6E90\u9879\u76EE
::: start
### typenet
:::
web typewriter effect with support for chain calls. ( \u7F51\u9875\u6253\u5B57\u673A\u6548\u679C, \u652F\u6301\u94FE\u5F0F\u8C03\u7528 )
::: end
::: start
### markdown-resume-to-pdf
:::
resume writing tool with markdown syntax.( \u5728\u7EBF\u7B80\u5386\u5236\u4F5C\u5DE5\u5177, markdown \u8F6C PDF )
::: end

## \u5DE5\u4F5C\u7ECF\u5386
::: start
#### xxx\u516C\u53F8
:::
2021-21 ~ 2022-01
::: end
- \u8D1F\u8D23\u524D\u7AEF\u6280\u672F\u67B6\u6784\u8BBE\u8BA1\uFF0C\u63A2\u7D22Web\u524D\u7AEF\u4E0E\u6E38\u620F\u524D\u7AEF\u6280\u672F\u7ED3\u5408\u9886\u57DF\uFF0C\u63A8\u8FDB\u65B0\u6280\u672F\u5728\u4E1A\u52A1\u4E2D\u843D\u5730
- \u4E3B\u5BFC\u5E76\u53C2\u4E0E\u7F8E\u56E2\u6E38\u620F\u9879\u76EE\u7684\u8BBE\u8BA1\u8FC7\u7A0B\u548C\u65B9\u6848\u8C03\u7814\uFF0C\u5BF9\u6280\u672F\u65B9\u6848\u3001\u98CE\u9669\u8FDB\u884C\u8BC4\u5BA1\u548C\u5206\u6790
- \u6DF1\u5165\u7406\u89E3\u4E1A\u52A1\uFF0C\u6CE8\u91CD\u4EA7\u54C1\u548C\u7528\u6237\u4F53\u9A8C\uFF0C\u652F\u6301\u548C\u63A8\u52A8\u4E1A\u52A1\u7684\u5FEB\u901F\u8FED\u4EE3\u53D1\u5C55
- \u5177\u5907\u826F\u597D\u5B66\u4E60\u80FD\u529B\u3001\u6C9F\u901A\u80FD\u529B\u3001\u9700\u6C42\u843D\u5730\u80FD\u529B\u3001\u6570\u5B66\u53CA\u62BD\u8C61\u601D\u7EF4\u80FD\u529B\u3001\u627F\u538B\u80FD\u529B

::: start
#### xxx\u516C\u53F8
:::
2021-21 ~ 2022-01
::: end
- \u6211\u5728\u6B64\u9879\u76EE\u8D1F\u8D23\u4E86\u54EA\u4E9B\u5DE5\u4F5C\uFF0C\u5206\u522B\u5728\u54EA\u4E9B\u5730\u65B9\u505A\u5F97\u51FA\u8272/\u548C\u522B\u4EBA\u4E0D\u4E00\u6837/\u6210\u957F\u5FEB
- \u8FD9\u4E2A\u9879\u76EE\u4E2D\uFF0C\u6211\u6700\u56F0\u96BE\u7684\u95EE\u9898\u662F\u4EC0\u4E48\uFF0C\u6211\u91C7\u53D6\u4E86\u4EC0\u4E48\u63AA\u65BD\uFF0C\u6700\u540E\u7ED3\u679C\u5982\u4F55\u3002
- \u8FD9\u4E2A\u9879\u76EE\u4E2D\uFF0C\u6211\u6700\u81EA\u8C6A\u7684\u6280\u672F\u7EC6\u8282\u662F\u4EC0\u4E48\uFF0C\u4E3A\u4EC0\u4E48\uFF0C\u5B9E\u65BD\u524D\u548C\u5B9E\u65BD\u540E\u7684\u6570\u636E\u5BF9\u6BD4\u5982\u4F55\uFF0C\u540C\u4E8B\u548C\u9886\u5BFC\u5BF9\u6B64\u7684\u53CD\u5E94\u5982\u4F55\u3002

## \u9879\u76EE\u7ECF\u5386
::: start
#### MNO\u9879\u76EE
:::
**\u6280\u672F\u603B\u76D1\uFF082022.08 ~ 2023.02\uFF09**
::: end
- \u6211\u5728\u6B64\u9879\u76EE\u8D1F\u8D23\u4E86\u54EA\u4E9B\u5DE5\u4F5C\uFF0C\u5206\u522B\u5728\u54EA\u4E9B\u5730\u65B9\u505A\u5F97\u51FA\u8272/\u548C\u522B\u4EBA\u4E0D\u4E00\u6837/\u6210\u957F\u5FEB
- \u8FD9\u4E2A\u9879\u76EE\u4E2D\uFF0C\u6211\u6700\u56F0\u96BE\u7684\u95EE\u9898\u662F\u4EC0\u4E48\uFF0C\u6211\u91C7\u53D6\u4E86\u4EC0\u4E48\u63AA\u65BD\uFF0C\u6700\u540E\u7ED3\u679C\u5982\u4F55\u3002
- \u8FD9\u4E2A\u9879\u76EE\u4E2D\uFF0C\u6211\u6700\u81EA\u8C6A\u7684\u6280\u672F\u7EC6\u8282\u662F\u4EC0\u4E48\uFF0C\u4E3A\u4EC0\u4E48\uFF0C\u5B9E\u65BD\u524D\u548C\u5B9E\u65BD\u540E\u7684\u6570\u636E\u5BF9\u6BD4\u5982\u4F55\uFF0C\u540C\u4E8B\u548C\u9886\u5BFC\u5BF9\u6B64\u7684\u53CD\u5E94\u5982\u4F55\u3002

::: start
#### xxx\u9879\u76EE
:::
**\u524D\u7AEF\u67B6\u6784\u5E08\uFF082022.08 ~ 2023.02\uFF09**
::: end
- \u6211\u5728\u6B64\u9879\u76EE\u8D1F\u8D23\u4E86\u54EA\u4E9B\u5DE5\u4F5C\uFF0C\u5206\u522B\u5728\u54EA\u4E9B\u5730\u65B9\u505A\u5F97\u51FA\u8272/\u548C\u522B\u4EBA\u4E0D\u4E00\u6837/\u6210\u957F\u5FEB
- \u8FD9\u4E2A\u9879\u76EE\u4E2D\uFF0C\u6211\u6700\u56F0\u96BE\u7684\u95EE\u9898\u662F\u4EC0\u4E48\uFF0C\u6211\u91C7\u53D6\u4E86\u4EC0\u4E48\u63AA\u65BD\uFF0C\u6700\u540E\u7ED3\u679C\u5982\u4F55\u3002
- \u8FD9\u4E2A\u9879\u76EE\u4E2D\uFF0C\u6211\u6700\u81EA\u8C6A\u7684\u6280\u672F\u7EC6\u8282\u662F\u4EC0\u4E48\uFF0C\u4E3A\u4EC0\u4E48\uFF0C\u5B9E\u65BD\u524D\u548C\u5B9E\u65BD\u540E\u7684\u6570\u636E\u5BF9\u6BD4\u5982\u4F55\uFF0C\u540C\u4E8B\u548C\u9886\u5BFC\u5BF9\u6B64\u7684\u53CD\u5E94\u5982\u4F55\u3002


## \u6559\u80B2\u80CC\u666F
::: start
xxx\u5B66\u6821 (\u8F6F\u4EF6\u5DE5\u7A0B)
:::
2016-07 ~ 2016-07
::: end
...
## \u81F4\u8C22
...
\u611F\u8C22\u60A8\u82B1\u65F6\u95F4\u9605\u8BFB\u6211\u7684\u7B80\u5386\uFF0C\u671F\u5F85\u80FD\u6709\u673A\u4F1A\u548C\u60A8\u5171\u4E8B\u3002
`,R0={name:"\u7B80\u7EA6\u98CE(\u5C0F\u9CA8\u9C7C)",primaryColor:"#555",primaryBackground:"#790FAE",img:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1001dfb4cfe947eb8ad5a12b3fa3650e~tplv-k3u1fbpfcp-watermark.image?",content:Q0},N0=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"})),z0=`::: headStart
## \u5C0F\u9ED1\u5B50 - \u524D\u7AEF\u67B6\u6784\u5E08
::: start
**\u5DE5\u4F5C\u7ECF\u9A8C**\uFF1A8\u5E74
:::
**\u5F53\u524D\u5C97\u4F4D**\uFF1A \u524D\u7AEF\u5C0F\u7EC4\u957F
:::
**\u671F\u671B\u5C97\u4F4D**\uFF1A\u524D\u7AEF\u67B6\u6784\u5E08
:::
**\u671F\u671B\u85AA\u8D44**\uFF1A40k
::: end

::: start
**\u90AE\u7BB1**\uFF1Aexamples@163.com
:::
**\u7535\u8BDD\u53F7\u7801**\uFF1A12345678901
::: end
::: headEnd

## \u4E13\u4E1A\u6280\u80FD
1. \u7CBE\u901A Vue.js\u3001React.js \u6846\u67B6\u6E90\u7801\uFF0C\u5BF9\u6B64\u7C7B\u6846\u67B6\u6709\u81EA\u5DF1\u7684\u7406\u89E3\uFF0C\u80FD\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u573A\u666F\u8FDB\u884C\u6280\u672F\u9009\u578B
2. \u7CBE\u901A Nuxt.js\u3001Next.js \u4EE5\u53CA\u793E\u533A\u76F8\u5173\u7684 SSR \u6E32\u67D3\u6846\u67B6\u539F\u7406\u4EE5\u53CA\u4F7F\u7528\uFF0C\u5BF9\u5176\u5B9E\u73B0\u4E5F\u6709\u81EA\u5DF1\u7684\u7406\u89E3
3. \u7CBE\u901A\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u8BA1\u7B97\u673A\u7EC4\u6210\u539F\u7406\u3001\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5BF9 HTTPS\u3001HTTP\u3001TCP\u3001UDP \u6709\u8FC7\u6DF1\u5165\u7814\u7A76
4. \u7CBE\u901A\u5FAE\u524D\u7AEF\u6846\u67B6\uFF0C\u5982 qiankun\u3001EMP\u3001Single-spa\uFF0C\u5E76\u80FD\u591F\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u573A\u666F\u8FDB\u884C\u9879\u76EE\u67B6\u6784\u8BBE\u8BA1
5. \u7CBE\u901A\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u3001\u6D4F\u89C8\u5668\u5E95\u5C42\u539F\u7406\u3001ChromeV8\u5F15\u64CE\uFF0C\u5BF9\u524D\u7AEF\u6027\u80FD\u8C03\u4F18\u6709\u81EA\u5DF1\u7684\u7406\u89E3
....

## \u5DE5\u4F5C\u7ECF\u5386
::: start
**\u963F\u91CC\u5DF4\u5DF4 - \u98DE\u732A - \u5E73\u53F0\u4E8B\u4E1A\u90E8**
:::
**2017.08 - 2019.09**
::: end
**\u5DE5\u4F5C\u5185\u5BB9**\uFF1A
1. \u8D1F\u8D23\u524D\u7AEF\u90E8\u95E8\u6BCF\u5468\u7684 CodeReview \u63A8\u8FDB\uFF0C\u7ED9\u90E8\u95E8\u524D\u7AEF\u505A\u6280\u672F\u5206\u4EAB
2. \u8D1F\u8D23\u642D\u5EFA\u4E1A\u52A1\u7EC4\u4EF6\u5E93\u7684\u6574\u4F53\u67B6\u6784\uFF0C\u89E3\u51B3\u5DE5\u4F5C\u4E2D\u51FA\u73B0\u7684\u590D\u6742\u95EE\u9898
3. \u7F16\u4E0D\u6765\u4E86\u4F60\u4EEC\u81EA\u5DF1\u5199\u5427 xxxxxxxx

::: start
**\u817E\u8BAF - \u5929\u7F8E - \u6E38\u620F\u4F53\u9A8C\u90E8**
:::
**2014.07 - 2017.06**
::: end
**\u5DE5\u4F5C\u5185\u5BB9**\uFF1A
1. \u8D1F\u8D23\u524D\u7AEF\u90E8\u95E8\u6BCF\u5468\u7684 CodeReview \u63A8\u8FDB\uFF0C\u7ED9\u90E8\u95E8\u524D\u7AEF\u505A\u6280\u672F\u5206\u4EAB
2. \u8D1F\u8D23\u642D\u5EFA\u4E1A\u52A1\u7EC4\u4EF6\u5E93\u7684\u6574\u4F53\u67B6\u6784\uFF0C\u89E3\u51B3\u5DE5\u4F5C\u4E2D\u51FA\u73B0\u7684\u590D\u6742\u95EE\u9898
3. \u7F16\u4E0D\u6765\u4E86\u4F60\u4EEC\u81EA\u5DF1\u5199\u5427 xxxxxxxx

....
## \u9879\u76EE\u7ECF\u5386
::: start
### xxxxxx\u7EC4\u4EF6\u5E93
:::
**2018.07 - 2019.09**
::: end
**\u9879\u76EE\u4ECB\u7ECD**\uFF1A\u7EC4\u4EF6\u5E93\u7684\u80CC\u666F\uFF0C\u4E3A\u4F55\u9700\u8981\u8FD9\u4E2A\u7EC4\u4EF6\u5E93...
**\u5DE5\u4F5C\u5185\u5BB9**\uFF1A
1. \u7531\u4E8Exxxxxxxx\uFF0C\u4F7F\u7528xxx\u65B9\u5F0F\u6784\u5EFA\u4E86xxx\u7EC4\u4EF6\u5E93\uFF0C\u5176\u4E2Dxxxx
2. \u89E3\u51B3\u4E86xxxxxxx
3. \u7F16\u4E0D\u6765\u4E86\u81EA\u5DF1\u5199\u5427xxxxxxx
**\u9879\u76EE\u96BE\u70B9**\uFF1A
1. \u6587\u4EF6\u5185\u5BB9\u8FC7\u591A\uFF0C\u4E0A\u4F20\u6587\u4EF6\u8F83\u6162\uFF0C\u7528\u6237\u4F53\u9A8C\u5DEE
2. \u590D\u6742\u4E1A\u52A1\u7EC4\u4EF6\u7684\u591A\u72B6\u6001\u8054\u52A8

::: start
### xxxxxx\u98CE\u63A7\u7CFB\u7EDF
:::
**2017-2019**
::: end

**\u9879\u76EE\u4ECB\u7ECD**\uFF1A\u7CFB\u7EDF\u7684\u80CC\u666F\uFF0C\u4E3A\u4F55\u9700\u8981\u8FD9\u4E2A\u7CFB\u7EDF...

**\u5DE5\u4F5C\u5185\u5BB9**\uFF1A
1. \u7531\u4E8Exxxxxxxx\uFF0C\u4F7F\u7528xxx\u65B9\u5F0F\u6784\u5EFA\u4E86xxx\u7CFB\u7EDF\uFF0C\u5176\u4E2Dxxxx
2. \u89E3\u51B3\u4E86xxxxxxx
3. \u7F16\u4E0D\u6765\u4E86\u81EA\u5DF1\u5199\u5427xxxxxxx

**\u9879\u76EE\u96BE\u70B9**\uFF1A
1. \u6587\u4EF6\u5185\u5BB9\u8FC7\u591A\uFF0C\u4E0A\u4F20\u6587\u4EF6\u8F83\u6162\uFF0C\u7528\u6237\u4F53\u9A8C\u5DEE
2. \u590D\u6742\u4E1A\u52A1\u7EC4\u4EF6\u7684\u591A\u72B6\u6001\u8054\u52A8

## \u6559\u80B2\u80CC\u666F
::: start
**\u5357\u660C\u5927\u5B66**
:::
**2011.09 - 2014.07**
::: end
\u8F6F\u4EF6\u5B66\u9662 - \u7535\u5B50\u4FE1\u606F - \u7855\u58EB
::: start
**\u5357\u660C\u5927\u5B66**
:::
**2007.09 - 2011.07**
::: end
\u8F6F\u4EF6\u5B66\u9662 - \u8F6F\u4EF6\u5DE5\u7A0B - \u672C\u79D1

## \u81EA\u6211\u8BC4\u4EF7
\u81EA\u884C\u53D1\u6325\uFF0C\u611F\u89C9\u662F\u53E3\u6C34\u8BDD\u7684\u53EF\u5199\u53EF\u4E0D\u5199....`,U0={name:"\u4E92\u8054\u7F51\u793E\u62DB\u7C7B(\u9002\u5408\u7ECF\u9A8C\u4E30\u5BCC)",primaryColor:"#333",primaryBackground:"#9ad4eb",img:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee8318e9ad2542ab8b340a1d21a96e9e~tplv-k3u1fbpfcp-watermark.image?",content:z0},H0=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),q0=`
::: headStart

::: start

![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)


### \u5E26\u4F6C

:::
icon:link [coderlei.netlify.app](https://coderlei.netlify.app)
icon:github [github.com/acmenlei](https://github.com/acmenlei)
icon:yuque [yuque.com/xxxxx](https://yuque.com/xxxxx)

:::
icon:phone 155xxxx9999
icon:wechat x972761675
icon:email example@163.com

:::
## xxx\u67B6\u6784\u5E08

::: end
::: headEnd
## \u5DE5\u4F5C\u7ECF\u5386

::: start
#### \u817E\u8BAF\uFF08\u56E2\u961F\u8D1F\u8D23\u4EBA\uFF09

:::
**2019\u5E7406\u6708 \uFF5E \u81F3\u4ECA**

::: end
-  \u57FA\u4E8E Web \u7684 SPA \u9879\u76EE\uFF0C\u4F7F\u7528 Vue3 + Typescript \u76F8\u5173\u751F\u6001\u73AF\u5883\u642D\u5EFA\u5B9E\u73B0\u5728\u7EBF\u7B80\u5386\u5236\u4F5C\u5E73\u53F0
-  \u4F7F\u7528 \`Vue3\` + \`Typescript\` \u7F16\u5199\uFF0C\u4F7F\u7528 \`Vite\` \u6253\u5305, xxxxxxxxxxxxxxxxxxxxxxxx

::: start
#### \u963F\u91CC\u5DF4\u5DF4 \uFF08\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF09

:::
**2017\u5E7406\u6708 \uFF5E 2019\u5E7406\u6708**

::: end
\u8D1F\u8D23\u56E2\u961F\u524D\u7AEF\u516C\u5171\u57FA\u7840\u7684\u5EFA\u8BBE\u4E0E\u89C4\u5212\uFF0Cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
-  \u5DE5\u4F5C\u4E2D\u6211\u505A\u4E86\u4EC0\u4E48\uFF0C\u4EA7\u51FA\u4E86\u4EC0\u4E48\u6837\u7684\u7ED3\u679C\uFF0C\u5F97\u5230\u4E86\u540C\u4E8B\u4EEC\u7684\u4E00\u81F4\u8BA4\u53EF\u7B49...
-  \u5DE5\u4F5C\u4E2D\u6211\u505A\u4E86\u4EC0\u4E48\uFF0C\u4EA7\u51FA\u4E86\u4EC0\u4E48\u6837\u7684\u7ED3\u679C\uFF0C\u5F97\u5230\u4E86\u540C\u4E8B\u4EEC\u7684\u4E00\u81F4\u8BA4\u53EF\u7B49...
-  \u5DE5\u4F5C\u4E2D\u6211\u505A\u4E86\u4EC0\u4E48\uFF0C\u4EA7\u51FA\u4E86\u4EC0\u4E48\u6837\u7684\u7ED3\u679C\uFF0C\u5F97\u5230\u4E86\u540C\u4E8B\u4EEC\u7684\u4E00\u81F4\u8BA4\u53EF\u7B49...
-  \u5DE5\u4F5C\u4E2D\u6211\u505A\u4E86\u4EC0\u4E48\uFF0C\u4EA7\u51FA\u4E86\u4EC0\u4E48\u6837\u7684\u7ED3\u679C\uFF0C\u5F97\u5230\u4E86\u540C\u4E8B\u4EEC\u7684\u4E00\u81F4\u8BA4\u53EF\u7B49...

## \u9879\u76EE\u7ECF\u5386
::: start
**Resume Board**
:::
**2011\u5E7409\u6708 \uFF5E 2015\u5E7407\u6708**
::: end
**\u6280\u672F\u6808**\uFF1A\`TypeScript\` \`Vue3\` \`Vite\` \`pinia\` \`vue-router\`&nbsp;
**\u9879\u76EE\u7B80\u4ECB**\uFF1A\u4E00\u6B3E markdown \u7B80\u5386\u5236\u4F5C\u5DE5\u5177\uFF0C\u53EF\u4EE5\u628A\u4F60\u7F16\u5199\u7684\u7B80\u5386\u8F6C\u6362\u4E3A PDF\uFF0C\u652F\u6301\u591A\u79CD\u6A21\u677F\uFF0C\u7F16\u5199\u4E00\u5957\u7B80\u5386\u5185\u5BB9\u53EF\u9002\u914D\u591A\u79CD\u7B80\u5386\u6A21\u677F
**\u5DE5\u4F5C\u5185\u5BB9**\uFF1A
1. \u57FA\u4E8E Markdown \u7684\u4E66\u5199\u65B9\u5F0F\uFF0C\u7B80\u5355\u6613\u4E0A\u624B\uFF0C\u4E14\u652F\u6301\u591A\u5217\u5E03\u5C40\uFF0C\u7F16\u5199\u4E00\u5957 Markdown \u53EF\u9002\u914D\u6240\u6709\u6A21\u7248
2. \u6839\u636E\u81EA\u8EAB\u559C\u597D DIY \u7B80\u5386\u6837\u5F0F\u3001\u5B57\u4F53\uFF0C\u4E14\u63D0\u4F9B\u5B9E\u65F6\u5206\u9875\u9884\u89C8\uFF0C\u53EF\u6839\u636E\u6BD4\u4F8B\u8C03\u6574 PDF \u9884\u89C8\u5927\u5C0F
3. \u667A\u80FD\u81EA\u52A8\u4E00\u9875\uFF0C\u7B80\u5386\u5185\u5BB9\u4E0D\u8DB3\u6216\u8FC7\u591A\u65F6\uFF0C\u53EF\u901A\u8FC7\u52A8\u6001\u8BA1\u7B97\u540E\u81EA\u52A8\u8FDB\u884C\u5747\u5300\u62C9\u4F38\u6216\u6536\u7F29
**\u9879\u76EE\u96BE\u70B9**\uFF1A
1. \u57FA\u4E8E\u539F\u751F Markdown \u8BED\u6CD5\u7F16\u5199\u7684\u7B80\u5386\u6392\u7248\u8FC7\u4E8E\u5355\u4E00\uFF0C\u4E0D\u80FD\u5B9E\u73B0\u591A\u5217\u5E03\u5C40

## \u6559\u80B2\u7ECF\u5386
::: start
\u5317\u4EAC\u5927\u5B66 - \u8F6F\u4EF6\u5DE5\u7A0B - \u5B66\u58EB\u5B66\u4F4D
:::
**2011\u5E7409\u6708 \uFF5E 2015\u5E7407\u6708**
::: end

## \u81EA\u6211\u8BC4\u4EF7
\u5728\u524D\u7AEF\u9886\u57DF\u6709\u8FC7\u6DF1\u8015\uFF0C\u6709\u7BA1\u7406\u3001\u7EC4\u7EC7\u80FD\u529B....... ok\u7ED3\u675F\uFF0C\u611F\u89C9\u662F\u53E3\u6C34\u8BDD\u7684\u53EF\u5199\u53EF\u4E0D\u5199\u5427
`,W0={name:"\u6697\u9ED1\u6781\u5BA2\u98CE",primaryColor:"#d1d1d1",primaryBackground:"#17A00B",img:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f073c3e4d634acbbb966af2f8c79a9b~tplv-k3u1fbpfcp-watermark.image?",content:q0},J0=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),G0=`
::: headStart

::: start

![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)

:::
## Jack MA - Web\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08
### icon:user \u7537 / icon:city \u6D59\u6C5F\u676D\u5DDE / 22\u5C81 / icon:phone 1334xxxx123

::: end
::: headEnd
## \u4E2A\u4EBA\u4FE1\u606F

::: start
icon:email coderlei@test.cn

:::
icon:wechat x972761675

:::
icon:github [github.com/acmenlei](https://github.com/acmenlei)

:::
icon:yuque [yueque.com/xxxxx](https://yuque.com/xiongleixin)

:::
icon:link [coderlei.netlify.app](https://coderlei.netlify.app)

::: end
## \u5DE5\u4F5C\u7ECF\u5386
### \u817E\u8BAF - \u5929\u7F8E\u5DE5\u4F5C\u5BA4 - \u524D\u7AEF\uFF082019/09 \uFF5E 2023/05\uFF09
xxxx**\u7814\u53D1\u8D1F\u8D23\u4EBA**\uFF0C\u8D1F\u8D23\u524D\u7AEF\u6280\u672F\u67B6\u6784\u8BBE\u8BA1\uFF0C\u63A2\u7D22Web\u524D\u7AEF\u4E0E\u6E38\u620F\u524D\u7AEF\u6280\u672F\u7ED3\u5408\u9886\u57DF\uFF0C\u63A8\u8FDB\u65B0\u6280\u672F\u5728\u4E1A\u52A1\u4E2D\u843D\u5730...
- \u4E3B\u5BFC\u5E76\u53C2\u4E0E\u5FAE\u4FE1\u6E38\u620F\u9879\u76EE\u7684\u8BBE\u8BA1\u8FC7\u7A0B\u548C\u65B9\u6848\u8C03\u7814\uFF0C\u5BF9\u6280\u672F\u65B9\u6848\u3001\u98CE\u9669\u8FDB\u884C\u8BC4\u5BA1\u548C\u5206\u6790
- \u6DF1\u5165\u7406\u89E3\u4E1A\u52A1\uFF0C\u6CE8\u91CD\u4EA7\u54C1\u548C\u7528\u6237\u4F53\u9A8C\uFF0C\u652F\u6301\u548C\u63A8\u52A8\u4E1A\u52A1\u7684\u5FEB\u901F\u8FED\u4EE3\u53D1\u5C55
- \u5177\u5907\u826F\u597D\u5B66\u4E60\u80FD\u529B\u3001\u6C9F\u901A\u80FD\u529B\u3001\u9700\u6C42\u843D\u5730\u80FD\u529B\u3001\u6570\u5B66\u53CA\u62BD\u8C61\u601D\u7EF4\u80FD\u529B\u3001\u627F\u538B\u80FD\u529B

## \u9879\u76EE\u7ECF\u5386
### xxxxxx\u7EC4\u4EF6\u5E93\uFF082018/07 - 2019/09\uFF09
**\u9879\u76EE\u4ECB\u7ECD**\uFF1A\u7EC4\u4EF6\u5E93\u7684\u80CC\u666F\uFF0C\u4E3A\u4F55\u9700\u8981\u8FD9\u4E2A\u7EC4\u4EF6\u5E93\uFF0C\u4E3B\u5BFC\u4E86xxxx\u7684xxxxx\uFF0C\u83B7\u5F97\u4E86\u4EC0\u4E48\u6837\u7684\u7ED3\u679C\uFF0C\u5F97\u5230\u4E86\u540C\u4E8B\u4EEC\u7684\u4E00\u81F4\u597D\u8BC4...
**\u5DE5\u4F5C\u5185\u5BB9**\uFF1A
- \u7531\u4E8Exxxxxxxx\uFF0C\u4F7F\u7528xxx\u65B9\u5F0F\u6784\u5EFA\u4E86xxx\u7EC4\u4EF6\u5E93\uFF0C\u5176\u4E2Dxxxx\u662F\u6700xxxx\u7684\u70B9\uFF0Cxxxxxxxxxxxxxxxxxx
- \u89E3\u51B3\u4E86xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- \u7F16\u4E0D\u6765\u4E86\u81EA\u5DF1\u5199\u5427xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
**\u9879\u76EE\u96BE\u70B9**\uFF1A
- \u6587\u4EF6\u5185\u5BB9\u8FC7\u591A\uFF0C\u4E0A\u4F20\u6587\u4EF6\u8F83\u6162\uFF0C\u7528\u6237\u4F53\u9A8C\u5DEExxxxxxxxxxxxxxxxxxxxxxxxxxxx
- \u590D\u6742\u4E1A\u52A1\u7EC4\u4EF6\u7684\u591A\u72B6\u6001\u8054\u52A8xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

## \u4E13\u4E1A\u6280\u80FD
1.\u7CBE\u901A Vue.js\u3001React.js \u6846\u67B6\u6E90\u7801\uFF0C\u5BF9\u6B64\u7C7B\u6846\u67B6\u6709\u81EA\u5DF1\u7684\u7406\u89E3\uFF0C\u80FD\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u573A\u666F\u8FDB\u884C\u6280\u672F\u9009\u578B
2.\u7CBE\u901A Nuxt.js\u3001Next.js \u4EE5\u53CA\u793E\u533A\u76F8\u5173\u7684 SSR \u6E32\u67D3\u6846\u67B6\u539F\u7406\u4EE5\u53CA\u4F7F\u7528\uFF0C\u5BF9\u5176\u5B9E\u73B0\u4E5F\u6709\u81EA\u5DF1\u7684\u7406\u89E3
3.\u7CBE\u901A\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u8BA1\u7B97\u673A\u7EC4\u6210\u539F\u7406\u3001\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5BF9 HTTPS\u3001HTTP\u3001TCP\u3001UDP \u6709\u8FC7\u6DF1\u5165\u7814\u7A76
4.\u7CBE\u901A\u5FAE\u524D\u7AEF\u6846\u67B6\uFF0C\u5982 qiankun\u3001EMP\u3001Single-spa\uFF0C\u5E76\u80FD\u591F\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u573A\u666F\u8FDB\u884C\u9879\u76EE\u67B6\u6784\u8BBE\u8BA1
5.\u7CBE\u901A\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u3001\u6D4F\u89C8\u5668\u5E95\u5C42\u539F\u7406\u3001ChromeV8\u5F15\u64CE\uFF0C\u5BF9\u524D\u7AEF\u6027\u80FD\u8C03\u4F18\u6709\u81EA\u5DF1\u7684\u7406\u89E3

## \u6559\u80B2\u7ECF\u5386
::: start
### \u6E05\u534E\u5927\u5B66 - \u7535\u5B50\u4FE1\u606F - \u672C\u7855
:::
**2015/09/01 - 2022/07/01**
::: end
## \u81EA\u6211\u8BC4\u4EF7
\u81EA\u884C\u53D1\u6325\uFF0C\u611F\u89C9\u662F\u53E3\u6C34\u8BDD\u7684\u53EF\u5199\u53EF\u4E0D\u5199....\u672C\u4EBA\u4E00\u8D2F\u7231\u5C97\u656C\u4E1A\uFF0C\u63D0\u5021\u56E2\u961F\u534F\u4F5C\u7CBE\u795E\u3002\u5BF9\u5F85\u5DE5\u4F5C\u9996\u5148\u5C31\u8981\u770B\u600E\u6837\u53BB\u770B\u5F85\u8FD9\u4EFD\u5DE5\u4F5C\uFF0C\u662F\u7D2F\u7684\u3001\u82E6\u7684\uFF0C\u80FD\u8E0F\u8E0F\u5B9E\u5B9E\u53BB\u505A\u5C06\u5FC3\u653E\u5165\u8FD9\u4E2A\u7EC4\u7EC7\u5F53\u4E2D\u53BB\u3002
`,Z0={type:"heading",name:"\u7B80\u7EA6\u98CE\u5934\u90E8\u7528\u8272",primaryColor:"#363434",primaryBackground:"#ffdc63",img:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/771883a4312c4d8da4eb919e237757c6~tplv-k3u1fbpfcp-watermark.image?",content:G0},Y0=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),K0=`::: headStart
::: start
![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)
:::
## xxxx **Java\u5F00\u53D1\u5DE5\u7A0B\u5E08**
icon:city \u6D59\u6C5F\u676D\u5DDE / icon:user \u7537 / 22\u5C81 / icon:school \u5E94\u5C4A\u751F
icon:email coderlei@test.cn / icon:wechat x972761675 / icon:phone 123xxxxx223
:::
icon:github [github.com/acmenlei](https://github.com/acmenlei)
icon:yuque [yueque.com/xxxxx](https://yuque.com/xiongleixin)
icon:link [\u4E2A\u4EBA\u7F51\u7AD9 coderlei.netlify.app](https://coderlei.netlify.app)
::: end
::: headEnd

## \u6559\u80B2\u7ECF\u5386
::: start
- **\u5317\u4EAC\u5927\u5B66** - \u5149\u534E\u7BA1\u7406\u5B66\u9662 - \u5DE5\u5546\u7BA1\u7406 - \u7855\u58EB
:::
**2021.09 - 2024.07**
::: end

::: start
- **\u6E05\u534E\u5927\u5B66** - \u5DE5\u5546\u7BA1\u7406\u5B66\u9662 - \u5DE5\u5546\u7BA1\u7406 - \u5B66\u58EB
:::

**2017.09 - 2021.07**

::: end

## \u5DE5\u4F5C\u7ECF\u5386
::: start
### \u676D\u5DDExx\u7F51\u7EDC\u6709\u9650\u516C\u53F8 - xxxxx\u5DE5\u7A0B\u5E08
:::
**2018.03 - 2018.07**
::: end
1. \u5BF9\u7535\u5546\u5E73\u53F0\u6574\u4F53\u89C4\u5212\u8BBE\u8BA1\u3001\u524D\u53F0\u9875\u8FDB\u884C\u66F4\u65B0\u8FED\u4EE3\u8BBE\u8BA1\u3001\u4E3B\u9898\u6D3B\u52A8\u8BBE\u8BA1\u3001\u4E13\u9898\u9875\u8BBE\u8BA1\uFF1B
2. \u5BF9\u7535\u5546\u7F51\u7AD9\u9875\u9762\u8BBE\u8BA1\u3001\u5E97\u94FA\u4EA7\u54C1\u88C5\u4FEE\u3001\u8BE6\u60C5\u9875\u9762\u8BBE\u8BA1\u3001\u63A8\u5E7F\u56FE\u7B49\u56FE\u7247\u8BBE\u8BA1\u5236\u4F5C\u3002
3. \u5BF9\u7167\u7247\u8FDB\u884C\u7CBE\u4FEE\uFF0C\u719F\u6089\u62A0\u56FE\u3001\u8C03\u8272\u53CA\u5404\u79CD\u5E38\u89C4\u53CA\u7279\u6B8A\u8C03\u8272\u624B\u6CD5\uFF1B
4. \u8D1F\u8D23\u56FE\u7247\u3001\u6587\u5B57\u8BBE\u8BA1\u6392\u7248\uFF0C\u8981\u6C42\u5356\u70B9\u7A81\u51FA\u3001\u65B9\u4FBF\u9605\u8BFB\u3001\u5438\u5F15\u8D2D\u4E70\uFF1B
5. \u6839\u636E\u8BBE\u8BA1\u903B\u8F91\u53CA\u6D3B\u52A8/\u5B9D\u8D1D\u7279\u6027\uFF0C\u8FDB\u884C\u6587\u6848\u63CF\u5199\uFF1B
6. \u914D\u5408\u8FD0\u8425\u3001\u4E1A\u52A1\u90E8\u95E8\u53CA\u5BA2\u6237\u53CD\u9988\uFF0C\u4F18\u5316\u3001\u4FEE\u6B63\u5546\u54C1\u56FE\u7247\u4FE1\u606F\uFF1B

## \u9879\u76EE\u7ECF\u5386
::: start
### xxxxB\u7AEF\u7BA1\u7406\u53F0
:::
### 2020.12 - 2021.05
::: end
- **\u6280\u672F\u6808**\uFF1A\`ts\` \`vue3\` \`vite\` \`vue-router\` \`vuex\` \`nodejs\` \`MySQL\`&nbsp;
- **\u9879\u76EE\u7B80\u4ECB**\uFF1A\u8BE5\u9879\u76EE\u662F\u4E00\u4E2A\u4F7F\u7528 Vue.js \u5F00\u53D1\u7684\u7535\u5546\u7C7B\u5C0F\u7A0B\u5E8F\u7684\u5546\u5BB6\u7AEF\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u662F\u4E00\u4E2A\u524D\u540E\u7AEF\u5206\u79BB\u7684 SPA \u5E94
- **\u5DE5\u4F5C\u5185\u5BB9**\uFF1A
1. \u767B\u5F55\u91C7\u7528 Cookie + Token \u7684\u65B9\u5F0F\uFF0C\u7528\u6237\u5206\u4E3A\u5E97\u957F\u4EE5\u53CA\u5458\u5DE5\uFF0C\u5E76\u9488\u5BF9\u8FD9\u51E0\u79CD\u89D2\u8272\u5BF9\u5176\u8FDB\u884C\u6743\u9650\u63A7\u5236
2. \u6743\u9650\u505A\u5230\u6309\u94AE\u7EA7\u522B\uFF0C\u9875\u9762\u7EA7\u6743\u9650\u901A\u8FC7 Vue-Router \u5B88\u536B\u8FDB\u884C\u63A7\u5236\u3001\u6309\u94AE\u7EA7\u6743\u9650\u901A\u8FC7 directive \u5B9E\u73B0\uFF0C\u5E76\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u89E3\u51B3\u4E86\u6309\u94AE\u8FC7\u591A\u5F15\u53D1\u7684\u9891\u7E41\u62C9\u53D6\u6743\u9650\u7684 HTTP \u8BF7\u6C42\u7684\u95EE\u9898
3. \u6839\u636E\u6743\u9650\u83DC\u5355\u7684\u7EA7\u8054\u5173\u7CFB\u5BF9\u6743\u9650\u7801\u7ED3\u6784\u8FDB\u884C\u6539\u9020\uFF0C\u5E76\u4F7F\u7528 Tree \u7EC4\u4EF6\u6E32\u67D3\u6811\u5F62\u7ED3\u6784\u6743\u9650\u5217\u8868\uFF0C\u63D0\u5347\u53EF\u8BFB\u6027
4. \u4F7F\u7528 ECharts \u53EF\u89C6\u5316\u6E32\u67D3\u5E97\u94FA\u5546\u54C1\u9500\u552E\u5360\u6BD4\u3001\u8FD1\u51E0\u4E2A\u6708\u6536\u652F\u3001\u4F1A\u5458\u8D2D\u4E70\u5546\u54C1\u6240\u5360\u4EFD\u989D\u56FE\u8868
5. \u5BF9\u4E8E\u8868\u683C\u4E2D\u6240\u6709\u7684\u6A21\u7CCA\u67E5\u8BE2\uFF0C\u90FD\u4F7F\u7528\u4E86\u8282\u6D41\u8FDB\u884C\u4F18\u5316\uFF0C\u5C3D\u91CF\u51CF\u8F7B\u670D\u52A1\u5668\u7684\u538B\u529B

## \u4E2A\u4EBA\u8363\u8A89
1. \u56DB\u5E74\u73ED\u957F + \u56E2\u652F\u4E66xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
2. \u5927\u5B66\u751F\u521B\u65B0\u521B\u4E1A\u5927\u8D5B\u56FD\u5BB6\u7EA7\u7ACB\u9879xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
3. \u4E92\u8054\u7F51+\u91D1\u878D\u8D5B\u9053\u4E00\u7B49\u5956xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
4. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx......

## \u81EA\u6211\u8BC4\u4EF7
1. \u672C\u4EBA\u70ED\u5FC3\u8BDA\u6073\u3001\u4E50\u89C2\u5411\u4E0A\uFF0C\u6709\u826F\u597D\u7684\u601D\u60F3\u54C1\u5FB7\u548C\u804C\u4E1A\u7D20\u8D28\uFF0C\u5DE5\u4F5C\u8BA4\u771F\u8D1F\u8D23\uFF0C\u7231\u597D\u662F\u770B\u7F8E\u5973\u3002
2. \u901A\u8FC7\u5728\u5B66\u751F\u4F1A\u4EFB\u804C\u7684\u7ECF\u5386\uFF0C\u953B\u70BC\u51FA\u4E86\u826F\u597D\u7684\u7EC4\u7EC7\u534F\u8C03\u80FD\u529B\uFF0C\u5584\u4E8E\u8C03\u52A8\u56E2\u961F\u6210\u5458\u7684\u5DE5\u4F5C\u70ED\u60C5\u4E0E\u79EF\u6781\u6027\u3002
3. \u4E30\u5BCC\u7684\u5728\u5916\u517C\u804C\u7ECF\u5386\u4F7F\u81EA\u5DF1\u62E5\u6709\u8F83\u5F3A\u7684\u4EB2\u548C\u529B\u4E0E\u8D23\u4EFB\u5FC3\uFF0C\u5E76\u6709\u826F\u597D\u7684\u56E2\u961F\u534F\u4F5C\u548C\u656C\u4E1A\u7CBE\u795E\u3002`,X0={name:"\u7B80\u7EA6\u4E07\u80FD\u6A21\u677F",primaryColor:"#333",primaryBackground:"#C42F76",img:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d474637fe9b943ec950eb1047d6d5f37~tplv-k3u1fbpfcp-watermark.image?",content:K0},u8=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),F8=`::: headStart
::: start
![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)
:::
# CodeCV Resume
\u7537 \uFF5C 22\u5C81 | icon:phone 15507942222 | icon:email coderleilei@qq.com
\u6C42\u804C\u610F\u5411\uFF1Aweb\u524D\u7AEF \uFF5C \u671F\u671B\u57CE\u5E02\uFF1A\u676D\u5DDE
::: end
::: headEnd

::: mainStart
## \u4E13\u4E1A\u6280\u80FD
1. \u719F\u6089 Vue \u6846\u67B6\u5E76\u7406\u89E3\u5176\u6838\u5FC3\u539F\u7406\uFF0C\u719F\u6089 Vue \u6280\u672F\u6808\uFF0C\u5E76\u80FD\u8FDB\u884C\u5B9E\u9645\u5E94\u7528
2. \u719F\u6089 React \u5E93\u53CA\u5176\u751F\u6001\uFF0C\u5982 React-Hooks\u3001Redux \u7B49\uFF0C\u5E76\u80FD\u8FDB\u884C\u5B9E\u9645\u5E94\u7528
3. \u719F\u6089\u5E38\u89C1\u7684\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\uFF0C\u5982\u94FE\u8868\u3001\u6811\u3001\u56FE\u7B49\uFF0C\u5E76\u80FD\u5BF9\u5B9E\u9645\u5E94\u7528\u8FDB\u884C\u4F18\u5316
4. \u719F\u6089 JavaScript\u3001ES6 \u8BED\u6CD5\uFF0C\u5982 Promise\u3001Generator\u3001Async/Await \u7B49
5. \u719F\u6089 HTML\u3001CSS \uFF0C\u4E86\u89E3 CSS3 \u52A8\u753B\u5143\u7D20\uFF0C\u80FD\u7F16\u5199\u7B26\u5408 W3C \u6807\u51C6\u7684\u9875\u9762\u5E03\u5C40
6. \u4E86\u89E3\u8BA1\u7F51\u76F8\u5173\u77E5\u8BC6\uFF0C\u5982 TCP/IP\u3001UDP\u3001HTTP\u3001DNS \u534F\u8BAE\u7B49

## \u6559\u80B2\u7ECF\u5386
::: start
::: start
### \u4E0A\u6D77\u4EA4\u901A\u5927\u5B66
:::
\u672C\u79D1
:::
\u8F6F\u4EF6\u5DE5\u7A0B
::: end
:::
2019 - 2023
::: end

## \u5B9E\u4E60\u7ECF\u5386
::: start
::: start
### \u817E\u8BAF
:::
web\u524D\u7AEF
::: end
:::
2022.06 - 2022.09
::: end
1. \u5B9E\u4E60\u671F\u95F4\u4E3B\u8981\u57FA\u4E8E Vue.js \u5BF9\u516C\u53F8 B \u7AEF\u7BA1\u7406\u53F0\u8FDB\u884C\u5F00\u53D1\u7EF4\u62A4\uFF0C\u9AD8\u6BD4\u771F\u8FD8\u539F\u539F\u578B\u8BBE\u8BA1
3. \u6839\u636E\u6743\u9650\u83DC\u5355\u7684\u7EA7\u8054\u5173\u7CFB\u5BF9\u6743\u9650\u7801\u7ED3\u6784\u8FDB\u884C\u6539\u9020\uFF0C\u5E76\u8BBE\u8BA1\u590D\u6742\u6743\u9650\u6811\u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5197\u4F59\u4EE3\u7801\u91CF
4. \u4F7F\u7528 ECharts \u6E32\u67D3\u5E97\u94FA\u53EF\u89C6\u5316\u6570\u636E\uFF0C\u5E76\u8BBE\u8BA1\u56FE\u8868\u7EC4\u4EF6\uFF0C\u6781\u5927\u7684\u51CF\u5C11\u4E86\u9879\u76EE\u4EE3\u7801\u91CF

## \u9879\u76EE\u7ECF\u5386

::: start


::: start
### CodeCV Resume

:::
\u524D\u7AEF\u5F00\u53D1

::: end
:::
2022.09 - \u81F3\u4ECA

::: end
- **\u6280\u672F\u6808**\uFF1A \`TypeScript\` \`Vue3.x\` \`Vite\`&nbsp;
- **\u9879\u76EE\u7B80\u4ECB**\uFF1A\u8BE5\u9879\u76EE\u662F\u4E00\u6B3E Markdown \u7B80\u5386\u5236\u4F5C\u5DE5\u5177\uFF0C\u5B83\u652F\u6301\u4E24\u79CD\u7F16\u8F91\u6A21\u5F0F\uFF0C\u76EE\u524D\u5DF2\u7ECF\u5F00\u6E90\u5230 GitHub \u793E\u533A.
- **\u4E3B\u8981\u529F\u80FD**\uFF1A
  - \u57FA\u4E8E Markdown \u7684\u4E66\u5199\u65B9\u5F0F\uFF0C\u7B80\u5355\u6613\u4E0A\u624B\uFF0C\u4E14\u652F\u6301\u591A\u5217\u5E03\u5C40\uFF0C\u7F16\u5199\u4E00\u5957 Markdown \u53EF\u9002\u914D\u6240\u6709\u6A21\u7248
  - \u6839\u636E\u81EA\u8EAB\u559C\u597DDIY\u7B80\u5386\u6837\u5F0F\u3001\u5B57\u4F53\uFF0C\u4E14\u63D0\u4F9B\u5B9E\u65F6\u5206\u9875\u9884\u89C8\uFF0C\u53EF\u6839\u636E\u6BD4\u4F8B\u8C03\u6574 PDF \u9884\u89C8\u5927\u5C0F
  - \u667A\u80FD\u81EA\u52A8\u4E00\u9875\uFF0C\u7B80\u5386\u5185\u5BB9\u4E0D\u8DB3\u6216\u8FC7\u591A\u65F6\uFF0C\u53EF\u901A\u8FC7\u52A8\u6001\u8BA1\u7B97\u540E\u81EA\u52A8\u8FDB\u884C\u5747\u5300\u62C9\u4F38\u6216\u6536\u7F29
- **\u9879\u76EE\u96BE\u70B9**\uFF1A
  - \u57FA\u4E8E\u539F\u751F Markdown \u8BED\u6CD5\u7F16\u5199\u7684\u7B80\u5386\u6392\u7248\u8FC7\u4E8E\u5355\u4E00\uFF0C\u793E\u533A\u63D2\u4EF6\u4E0D\u6EE1\u8DB3\u4F7F\u7528\u9700\u6C42\uFF0C\u9700\u8981\u81EA\u5DF1\u91CD\u5199 MD \u89E3\u6790\u5668

::: start
::: start
### \u6C5F\u5C0F\u9E7FB\u7AEF\u7BA1\u7406\u53F0
:::
\u524D\u7AEF\u5F00\u53D1
::: end
:::
2022.09 - \u81F3\u4ECA

::: end
- **\u6280\u672F\u6808**\uFF1A \`Vue.js\` \`ElementUI\` \`Echarts\`&nbsp;
- **\u9879\u76EE\u7B80\u4ECB**\uFF1A\u8BE5\u9879\u76EE\u662F\u4E00\u4E2A\u4F7F\u7528 Vue.js \u5F00\u53D1\u7684\u5BF9\u63A5\u7535\u5546\u5C0F\u7A0B\u5E8F\u7684\u5546\u5BB6\u7AEF\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u662F\u4E00\u4E2A\u524D\u540E\u7AEF\u5206\u79BB\u7684 SPA \u5E94\u7528
- **\u5DE5\u4F5C\u5185\u5BB9**\uFF1A
  - \u767B\u5F55\u91C7\u7528 Cookie + Token \u7684\u65B9\u5F0F\uFF0C\u7528\u6237\u5206\u4E3A\u5E97\u957F\u4EE5\u53CA\u5458\u5DE5\uFF0C\u5E76\u9488\u5BF9\u8FD9\u51E0\u79CD\u89D2\u8272\u5BF9\u5176\u8FDB\u884C\u6743\u9650\u63A7\u5236
  - \u6743\u9650\u505A\u5230\u6309\u94AE\u7EA7\u522B\uFF0C\u5E76\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u89E3\u51B3\u4E86\u6309\u94AE\u8FC7\u591A\u5F15\u53D1\u7684\u9891\u7E41\u62C9\u53D6\u6743\u9650\u8BF7\u6C42\u7684\u95EE\u9898
## \u81EA\u6211\u8BC4\u4EF7
\u70ED\u7231\u524D\u7AEF\u5F00\u53D1\uFF0C\u5BF9\u5927\u524D\u7AEF\u6709\u7740\u6D53\u539A\u7684\u5174\u8DA3....
::: mainEnd`,e8={name:"\u7B80\u7EA6\u901A\u7528 \u7A81\u51FA\u5185\u5BB9",primaryColor:"#333",primaryBackground:"#14A25D",img:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b314bd3e1fb4ea79ba6f5166321001c~tplv-k3u1fbpfcp-watermark.image?",content:F8},E8=Object.freeze(Object.defineProperty({__proto__:null,default:e8},Symbol.toStringTag,{value:"Module"})),t8=`::: headStart
::: start
![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)
:::
# \u5F20\u4E09
\u7537 \uFF5C 22\u5C81 \uFF5C \u751F\u65E5\uFF1A1994/10/01 \uFF5C icon:school \u5E94\u5C4A\u751F \uFF5C \u6C5F\u897F\u5357\u660C
icon:phone 15507942222 \uFF5C icon:email coderleilei@qq.com \uFF5C icon:wechat zhangsan03
\u6C42\u804C\u610F\u5411\uFF1A\u9879\u76EE\u7ECF\u7406 \uFF5C \u671F\u671B\u57CE\u5E02\uFF1A\u676D\u5DDE \uFF5C \u671F\u671B\u85AA\u8D44\uFF1A\u9762\u8BAE
::: end
::: headEnd

::: mainStart
## icon:work \u9879\u76EE\u7ECF\u5386
::: start
### CodeCV Resume
:::
### \u5168\u6808\u5F00\u53D1
:::
### 2022/09 \uFF5E 2023/05
::: end

**\u6280\u672F\u6808**\uFF1A \`TypeScript\` \`Vue3.x\` \`markdown-transform-html\` \`Vite\`&nbsp;
**\u9879\u76EE\u7B80\u4ECB**\uFF1A\u8BE5\u9879\u76EE\u662F\u4E00\u6B3E\u57FA\u4E8E Vue3.x + \u81EA\u5DF1\u7F16\u5199\u7684 Markdown \u8BCD\u6CD5\u5206\u6790\u5668\u5F00\u53D1\u7684\u7B80\u5386\u5236\u4F5C\u5DE5\u5177\uFF0C\u5B83\u652F\u6301\u5C06\u6211\u4EEC\u7F16\u5199\u7684 Markdown \u8BED\u6CD5\u8F6C\u6362\u4E3A PDF \u6587\u4EF6\u683C\u5F0F\uFF0C\u76EE\u524D\u5DF2\u7ECF\u5F00\u6E90\u5230 GitHub \u793E\u533A.
**\u7EBF\u4E0A\u5730\u5740**\uFF1A[https://codeleilei.gitee.io/markdown2pdf ](https://codeleilei.gitee.io/markdown2pdf )
**\u4E3B\u8981\u529F\u80FD**\uFF1A
1. \u57FA\u4E8E Markdown \u7684\u4E66\u5199\u65B9\u5F0F\uFF0C\u7B80\u5355\u6613\u4E0A\u624B\uFF0C\u4E14\u652F\u6301\u591A\u5217\u5E03\u5C40\uFF0C\u7F16\u5199\u4E00\u5957 Markdown \u53EF\u9002\u914D\u6240\u6709\u6A21\u7248
2. \u6839\u636E\u81EA\u8EAB\u559C\u597DDIY\u7B80\u5386\u6837\u5F0F\u3001\u5B57\u4F53\uFF0C\u4E14\u63D0\u4F9B\u5B9E\u65F6\u5206\u9875\u9884\u89C8\uFF0C\u53EF\u6839\u636E\u6BD4\u4F8B\u8C03\u6574 PDF \u9884\u89C8\u5927\u5C0F
3. \u667A\u80FD\u81EA\u52A8\u4E00\u9875\uFF0C\u7B80\u5386\u5185\u5BB9\u4E0D\u8DB3\u6216\u8FC7\u591A\u65F6\uFF0C\u53EF\u901A\u8FC7\u52A8\u6001\u8BA1\u7B97\u540E\u81EA\u52A8\u8FDB\u884C\u5747\u5300\u62C9\u4F38\u6216\u6536\u7F29
4. \u52A8\u6001\u8C03\u8282\u7B80\u5386\u5143\u7D20\u4E2D\u7684\u8FB9\u8DDD\u95EE\u9898\uFF0C\u53EF\u6269\u5C55\u6027\u9AD8
**\u9879\u76EE\u96BE\u70B9**\uFF1A
1. \u667A\u80FD\u81EA\u52A8\u4E00\u9875\uFF0C\u6536\u7F29\u4F1A\u51FA\u73B0\u5185\u5BB9\u91CD\u53E0\u95EE\u9898\uFF0C\u7528\u6237\u4F53\u9A8C\u5DEE

## icon:comment \u81EA\u6211\u8BC4\u4EF7
1.\u826F\u597D\u7684\u4EE3\u7801\u7F16\u5199\u4E60\u60EF\uFF0C\u6709\u4EE3\u7801\u6D01\u7656\uFF0C\u5BF9\u4EE3\u7801\u8D28\u91CF\u8981\u6C42\u8F83\u9AD8\uFF0C\u5E76\u5177\u5907\u826F\u597D\u7684\u56E2\u961F\u534F\u4F5C\u80FD\u529B
2.\u70ED\u7231\u524D\u7AEF\u5F00\u53D1\uFF0C\u624E\u5B9E\u7684\u524D\u7AEF\u57FA\u7840\u529F\u5E95\uFF0C\u5E76\u5177\u5907\u8F83\u597D\u7684\u5B66\u4E60\u80FD\u529B\uFF0C\u5BF9\u5F85\u67D0\u4E2A\u95EE\u9898\u559C\u6B22\u63A2\u7A76\u80CC\u540E\u7684\u539F\u7406
3.\u5BF9\u5F85\u4E8B\u60C5\u8BA4\u771F\u8D1F\u8D23\uFF0C\u4E50\u4E8E\u52A9\u4EBA\uFF0C\u5728\u6821\u5E2E\u52A9\u540C\u5B66\u89E3\u51B3\u8FC7\u591A\u79CD\u7591\u96BE\u6742\u75C7

## icon:school \u6BD5\u4E1A\u9662\u6821
::: start
### \u4E2D\u56FD\u77FF\u4E1A\u5927\u5B66 - \u5DE5\u5546\u7BA1\u7406 - \u7855\u58EB
\u7814\u7A76\u751F\u5B66\u751F\u4F1A\u4E3B\u5E2D
...
:::
### 2018/09 \uFF5E 2022/06
::: end
&nbsp;
::: start
### \u5357\u660C\u5927\u5B66 - \u5DE5\u5546\u7BA1\u7406 - \u672C\u79D1
\u672C\u79D1\u5B66\u751F\u4F1A\u4E3B\u5E2D
....
:::
### 2018/09 \uFF5E 2022/06
::: end
## icon:trophy  \u4E2A\u4EBA\u8363\u8A89
- \u82F1\u8BEDCET4\u3001CET6\u7EA7
- \u5927\u5B66\u751F\u521B\u65B0\u521B\u4E1A\u5927\u8D5B\u56FD\u5BB6\u7EA7\u7ACB\u9879
- 2021 - 2023 \u8FDE\u7EED\u4E24\u5E74\u8363\u83B7\u56FD\u5BB6\u52B1\u5FD7\u5956\u5B66\u91D1
::: mainEnd`,x8={name:"\u7B80\u7EA6\u901A\u7528\u6A21\u677F",primaryColor:"#7E817D",primaryBackground:"#112236",img:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2268dbf51af544b9b8202ada31526ca4~tplv-k3u1fbpfcp-watermark.image?",content:t8},o8=Object.freeze(Object.defineProperty({__proto__:null,default:x8},Symbol.toStringTag,{value:"Module"})),n8=`
::: headStart

::: start
# CodeCV

:::
\u5973 \uFF5C \u751F\u65E5\uFF1A2000/08/01 \uFF5C \u5317\u4EAC
icon:phone 13425182004 \uFF5C icon:email qiumengyi@kuaishou.com \uFF5C icon:wechat qiumengyi
\u79BB\u804C-\u968F\u65F6\u5230\u5C97 \uFF5C \u5DE5\u4F5C\u7ECF\u9A8C\uFF1A3\u5E74 \uFF5C \u4EA7\u54C1\u7ECF\u7406 \uFF5C \u671F\u671B\u85AA\u8D44\uFF1A20-30k

:::

![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)



::: end
::: headEnd

::: mainStart

::: start
## icon:work \u5DE5\u4F5C\u7ECF\u5386

:::


::: start
### \u5FEB\u624B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \u9879\u76EE\u7ECF\u7406

:::
**2018/06 - 2021/09**

::: end


::: end

::: start
#### \u5185\u5BB9

:::
\u901A\u8FC7\u5BF9\u5E02\u573A\u548C\u7528\u6237\u9700\u6C42\u7684\u6DF1\u5165\u8C03\u7814\uFF0C\u6211\u5728\u4EA7\u54C1\u8BBE\u8BA1\u9636\u6BB5\u63D0\u51FA\u4E86\u4E00\u7CFB\u5217\u7528\u6237\u53CB\u597D\u3001\u529F\u80FD\u4E30\u5BCC\u7684\u8BBE\u8BA1\u65B9\u6848\u3002\u57FA\u4E8E\u9700\u6C42\u5206\u6790\uFF0C\u4E0E\u56E2\u961F\u4E00\u8D77\u5236\u5B9A\u4E86\u4EA7\u54C1\u7684\u6574\u4F53\u6846\u67B6\u3001\u529F\u80FD\u6A21\u5757\u3001\u6D41\u7A0B\u8BBE\u8BA1\uFF0C\u5E76\u6839\u636E\u4E0D\u540C\u7528\u6237\u7FA4\u4F53\u7684\u9700\u6C42\uFF0C\u8FDB\u884C\u4E86\u5DEE\u5F02\u5316\u8BBE\u8BA1\u3002

::: end

::: start
#### \u6210\u7EE9

:::
1. \u7528\u6237\u6570\u91CF\uFF1A\u5728\u4EA7\u54C1\u4E0A\u7EBF\u540E\u7684\u7B2C\u4E00\u4E2A\u5B63\u5EA6\uFF0C\u7528\u6237\u6570\u91CF\u589E\u957F\u4E8680%\u3002
2. \u7528\u6237\u7559\u5B58\u7387\uFF1A\u5728\u4EA7\u54C1\u4E0A\u7EBF\u540E\u7684\u7B2C\u4E8C\u4E2A\u5B63\u5EA6\uFF0C\u7528\u6237\u7559\u5B58\u7387\u63D0\u9AD8\u4E8620%\u3002

::: end

::: start
:::
::: start
### \u4E9A\u9A6C\u900A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \u9879\u76EE\u7ECF\u7406
:::
**2015/06 - 2028/05**
::: end
::: end

::: start
#### \u5185\u5BB9
:::
\u8D1F\u8D23\u4E9A\u9A6C\u900A\u7535\u5546\u5E73\u53F0\u7684\u641C\u7D22\u548C\u63A8\u8350\u529F\u80FD\uFF0C\u5E26\u9886\u8DE8\u90E8\u95E8\u56E2\u961F\u5236\u5B9A\u5E76\u6267\u884C\u4E86\u4E00\u7CFB\u5217\u6539\u8FDB\u8BA1\u5212\uFF0C\u63D0\u9AD8\u4E86\u641C\u7D22\u548C\u63A8\u8350\u7684\u6548\u679C\u548C\u51C6\u786E\u6027\u3002
::: end

::: start
#### \u6210\u7EE9
:::
1. \u7528\u6237\u7559\u5B58\u7387\uFF1A\u5728\u4EA7\u54C1\u4E0A\u7EBF\u540E\u7684\u7B2C\u4E8C\u4E2A\u5B63\u5EA6\uFF0C\u7528\u6237\u7559\u5B58\u7387\u63D0\u9AD8\u4E8620%\u3002
2. \u4EA7\u54C1\u8BC4\u4EF7\uFF1A\u7528\u6237\u5BF9\u4EA7\u54C1\u7684\u8BC4\u4EF7\u6574\u4F53\u4E0A\u63D0\u9AD8\u4E8630%\u3002
::: end

::: start
## icon:technology \u4E2A\u4EBA\u6280\u80FD

:::
-  \u719F\u7EC3\u638C\u63E1\u6570\u636E\u5206\u6790\u548C\u7528\u6237\u7814\u7A76\u6280\u80FD\uFF0C\u80FD\u591F\u5229\u7528\u6570\u636E\u6307\u5BFC\u4EA7\u54C1\u51B3\u7B56\u548C\u4F18\u5316\u65B9\u6848\u3002
-  \u719F\u6089\u5404\u79CD\u4EA7\u54C1\u7BA1\u7406\u5DE5\u5177\u548C\u65B9\u6CD5\uFF0C\u5305\u62EC\u5E02\u573A\u8C03\u7814\u3001\u7ADE\u54C1\u5206\u6790\u3001\u7528\u6237\u4F53\u9A8C\u8BBE\u8BA1\u3001\u9879\u76EE\u7BA1\u7406\u548C\u63A8\u5E7F\u8425\u9500\u7B49\u3002
-  \u5177\u6709\u4F18\u79C0\u7684\u82F1\u8BED\u542C\u8BF4\u8BFB\u5199\u80FD\u529B\uFF0C\u80FD\u591F\u6D41\u5229\u5730\u8FDB\u884C\u8DE8\u6587\u5316\u4EA4\u6D41\u548C\u56E2\u961F\u5408\u4F5C\u3002

::: end

::: start
## icon:school \u6BD5\u4E1A\u9662\u6821

:::


::: start
**\u4E2D\u56FD\u77FF\u4E1A\u5927\u5B66**&nbsp;&nbsp;&nbsp;&nbsp;\u5DE5\u5546\u7BA1\u7406&nbsp;&nbsp;&nbsp;&nbsp;\u7855\u58EB
\u7814\u7A76\u751F\u5B66\u751F\u4F1A\u4E3B\u5E2D

:::
**2016/10 - 2019/12**

::: end

::: start
**\u5357\u660C\u5927\u5B66**&nbsp;&nbsp;&nbsp;&nbsp;\u5DE5\u5546\u7BA1\u7406&nbsp;&nbsp;&nbsp;&nbsp;\u672C\u79D1
\u672C\u79D1\u5B66\u751F\u4F1A\u4E3B\u5E2D / \u4F18\u79C0\u6BD5\u4E1A\u751F\u4EE3\u8868 / \u73ED\u7EA7\u5B66\u4E60\u59D4\u5458



:::
**2016/10 - 2019/12**

::: end


::: end

::: start
## icon:trophy \u4E2A\u4EBA\u8363\u8A89

:::
\u4F18\u79C0\u6BD5\u4E1A\u751F\uFF0C\u6E05\u534E\u5927\u5B66\uFF0C2018
\u6700\u4F73\u4EA7\u54C1\u7ECF\u7406\u5B9E\u4E60\u751F\uFF0C\u8C37\u6B4C\uFF0C2020
\u6700\u4F73\u4EA7\u54C1\u7ECF\u7406\uFF0C\u4E9A\u9A6C\u900A\uFF0C2021

::: end

::: start
## icon:comment \u81EA\u6211\u8BC4\u4EF7

:::
\u5177\u5907\u7528\u6237\u5BFC\u5411\u3001\u4EA7\u54C1\u89C4\u5212\u3001\u9879\u76EE\u7BA1\u7406\u3001\u6570\u636E\u5206\u6790\u548C\u56E2\u961F\u534F\u4F5C\u7684\u80FD\u529B\u3002\u5584\u4E8E\u601D\u8003\u548C\u89E3\u51B3\u95EE\u9898\uFF0C\u80FD\u591F\u6839\u636E\u5E02\u573A\u548C\u7528\u6237\u9700\u6C42\u5236\u5B9A\u4EA7\u54C1\u65B9\u6848\uFF0C\u5E76\u901A\u8FC7\u6570\u636E\u5206\u6790\u548C\u56E2\u961F\u534F\u4F5C\u5B9E\u73B0\u9AD8\u6548\u7684\u9879\u76EE\u7BA1\u7406\u548C\u5353\u8D8A\u7684\u7528\u6237\u4F53\u9A8C\u3002

::: end
::: mainEnd

`,a8={name:"\u6781\u7B80/\u7B80\u7EA6/\u901A\u7528\u6A21\u677F",primaryColor:"#7D7979",primaryBackground:"#024B4B",img:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3937f62d7509441dad5389a9ef619cfd~tplv-k3u1fbpfcp-watermark.image?",content:n8},C8=Object.freeze(Object.defineProperty({__proto__:null,default:a8},Symbol.toStringTag,{value:"Module"})),B8=`::: headStart
::: start
## \u5F20\u4E09 **\u5927\u6570\u636E\u5F00\u53D1\u5DE5\u7A0B\u5E08** **\u610F\u5411\u57CE\u5E02\uFF1A\u676D\u5DDE**
::: start
icon:user \u7537 / 2000.01.01
icon:phone 155xxxxxx06
:::
icon:email [xxxxxxxx@163.com](xxxxxxxx@163.com)
icon:gitee [gitee.com/codeleilei](https://gitee.com/codeleilei)
:::
icon:github [github.com/acmenlei](https://github.com/acmenlei)
icon:yuque [yuque.com/xiongleixin](https://www.yuque.com/xiongleixin)
::: end
:::
![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)
::: end
::: headEnd

## icon:user \u6559\u80B2\u80CC\u666F Education Background
::: start
- **\u6E05\u534E\u5927\u5B66 - \u4FE1\u606F\u5DE5\u7A0B\u5B66\u9662 - \u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F**
:::
**2019-09-01 \u81F3 2023-07-01**
::: end
- GPA\uFF1A4.0 / \u4E13\u4E1ATop 1

## icon:technology \u4E13\u4E1A\u6280\u80FD Professional Skills
- \u719F\u6089 Java \u7F16\u7A0B\u57FA\u7840\uFF0CIO\u64CD\u4F5C\uFF0C\u96C6\u5408\u7B49\u76F8\u5173\u77E5\u8BC6\uFF0C\u4E86\u89E3\u5E38\u89C1\u7684\u8BBE\u8BA1\u6A21\u5F0F\u548C\u8BA1\u7B97\u673A\u57FA\u7840\u76F8\u5173\u77E5\u8BC6\u3002
- \u719F\u6089 Linux \u57FA\u672C\u547D\u4EE4\uFF0C\u5177\u5907\u7F16\u5199\u7B80\u5355\u7684 Shell \u811A\u672C\u7684\u80FD\u529B\u3002
- \u719F\u6089 MySQL \u4E14\u5177\u6709\u7F16\u5199 SQL \u7684\u80FD\u529B\uFF0C\u4E86\u89E3 MySQL \u903B\u8F91\u67B6\u6784\u3001\u7D22\u5F15\u3001\u9501\u3001\u4E8B\u52A1\u7B49\u3002
- \u719F\u6089 HTML\u3001CSS \u5E76\u80FD\u7F16\u5199\u7B26\u5408 W3C \u6807\u51C6\u7684\u9875\u9762\u5E03\u5C40\u4EE5\u53CA\u719F\u6089 JavaScript\u3002
- \u719F\u6089\u5E38\u7528\u6570\u636E\u7ED3\u6784\u5982\u6570\u7EC4\u3001\u8FDE\u6807\u3001\u6808\u3001\u961F\u5217\u3001\u4E8C\u53C9\u6811\u7B49\uFF0C\u5BF9\u9012\u5F52\u3001\u52A8\u6001\u89C4\u5212\u3001\u5E38\u7528\u6392\u5E8F\u7B97\u6CD5\u6709\u4E00\u5B9A\u7406\u89E3\u3002
- \u719F\u6089 Hadoop \u751F\u6001\u7684\u5927\u6570\u636E\u5B58\u50A8\u5E73\u53F0\u7684\u642D\u5EFA\u4E0E\u90E8\u7F72\u53CA\u76F8\u5173\u7EC4\u4EF6\uFF08HDFS\u3001Yarm\u3001MapReduce \u7F16\u7A0B\u6A21\u578B\uFF09\u3002
- \u719F\u7EC3 Python \u7F16\u7A0B\u57FA\u7840\uFF0C\u6709 PyhtonWeb\u3001\u722C\u866B\u3001\u6570\u636E\u5206\u6790\u3001\u81EA\u52A8\u5316\u811A\u672C\u3001QT \u7F16\u7A0B\u7B49\u7ECF\u9A8C\u3002
- \u719F\u6089 C++ \u7F16\u7A0B\u57FA\u7840\uFF0C\u6709 C++ \u5C0F\u6E38\u620F\u53CA\u7BA1\u7406\u7CFB\u7EDF\u5F00\u53D1\u7ECF\u9A8C\u3002

## icon:trophy \u5956\u9879\u8363\u8A89 Awards & Honor
- 2021 - 2022\u5E74\u56FD\u5BB6\u52B1\u5FD7\u5956\u5B66\u91D1 / 2019 - 2020\u5E74\u56FD\u5BB6\u5956\u5B66\u91D1
- 2020\u5E74\u5168\u56FD\u9AD8\u7B49\u5B66\u6821\u8BA1\u7B97\u673A\u80FD\u529B\u6311\u6218\u8D5B\u4E00\u7B49\u5956
- 2019\u5E74 CCPC \u5927\u5B66\u751F\u7A0B\u5E8F\u8BBE\u8BA1\u5927\u8D5B\u6C5F\u897F\u533A\u9884\u8D5B\u94F6\u724C
- 2022\u5E74 \u201C\u725B\u903C\u676F\u201D xxxxxx\u5927\u5B66\u4FE1\u606F\u5DE5\u7A0B\u5B66\u9662\u725B\u903C\u4F5C\u54C1\u5927\u8D5B \u4E00\u7B49\u5956

## icon:practice \u5B9E\u4E60\u7ECF\u5386 Intership Experience
- **\u5355\u4F4D\u540D\u79F0**\uFF1Axxxxxxxxx
- **\u5B9E\u4E60\u65F6\u95F4**\uFF1Axxxx.xx - xxxx.xx
- **\u5B9E\u4E60\u5185\u5BB9**\uFF1A\u4F7F\u7528 Python \u8BED\u8A00\u7F16\u5199\u7684 Scrapy \u6846\u67B6\u53CA requests \u7B49\u7B2C\u4E09\u65B9\u5E93\uFF0C\u5BF9\u7F51\u7EDC\u4E0A\u516C\u5F00\u7684\u6570\u636E\u8FDB\u884C\u722C\u53D6\uFF0C\u5E76\u5B58\u50A8\u5230 MySQL \u6570\u636E\u5E93\u4E2D\uFF0C\u518D\u5229\u7528 Java \u53CA Python \u7684\u6570\u636E\u79D1\u5B66\u5E93\u5BF9\u6570\u636E\u8FDB\u884C\u6E05\u6D17\u53CA\u5206\u6790\u7B49\u5185\u5BB9\u3002

## icon:project \u9879\u76EE\u7ECF\u5386 Project Experience
- **\u9879\u76EE\u540D\u79F0**\uFF1A\u963F\u91CC\u5DF4\u5DF4\u8FBE\u6469\u9662\u626B\u5730\u9879\u76EE
- **\u9879\u76EE\u65F6\u95F4**\uFF1A2022.06 - 2022.07
- **\u9879\u76EE\u63CF\u8FF0**\uFF1A\u6559\u522B\u4EBA\u5982\u4F55\u626B\u5730\uFF0C\u5982\u4F55\u626B\u597D\u5730
- **\u9879\u76EE\u6280\u672F\u6808**\uFF1AHadoop\u3001Sqoop\u3001Python\u3001Scrapy\u3001Spark\u3001Hive\u3001MySQL\u3001Flask\u3001ECharts
- **\u6307\u8D23\u63CF\u8FF0**\uFF1A\u8FDB\u884C Hadoop \u5E73\u53F0\u642D\u5EFA\uFF0C\u5229\u7528 Scrapy \u722C\u53D6 QTA \u9152\u5E97\u516C\u5F00\u6570\u636E\u81F3 MySQL \u4E2D\u3002\u5C06\u722C\u53D6\u7684\u6570\u636E\u8FDB\u884C\u6E05\u6D17\u548C\u5206\u6790\u3002\u5C06\u5206\u6790\u597D\u7684\u6570\u636E\u8FDB\u884C\u7EF4\u5EA6\u5EFA\u6A21\u5B58\u5165 MySQL \u4E2D\u3002\u7528 Flask \u540C ECharts \u5C06\u6570\u636E\u8FDB\u884C\u53EF\u89C6\u5316\u5C55\u73B0\u3002
- **\u9879\u76EE\u91CD\u70B9\u6536\u83B7**\uFF1A\u719F\u6089\u4E86 Scrapy \u6846\u67B6\u7684\u4F7F\u7528\uFF0C\u5728 Linux \u73AF\u5883\u4E0B\u8FDB\u884C\u4F5C\u4E1A\uFF0C\u6839\u636E\u6307\u6807\u8FDB\u884C\u7EF4\u5EA6\u5EFA\u6A21\u3002

- **\u9879\u76EE\u540D\u79F0**\uFF1A\u963F\u91CC\u5DF4\u5DF4\u8FBE\u6469\u9662\u626B\u5730\u9879\u76EE
- **\u9879\u76EE\u65F6\u95F4**\uFF1A2022.06 - 2022.07
- **\u9879\u76EE\u63CF\u8FF0**\uFF1A\u6559\u522B\u4EBA\u5982\u4F55\u626B\u5730\uFF0C\u5982\u4F55\u626B\u597D\u5730
- **\u9879\u76EE\u6280\u672F\u6808**\uFF1AHadoop\u3001Sqoop\u3001Python\u3001Scrapy\u3001Spark\u3001Hive\u3001MySQL\u3001Flask\u3001ECharts
- **\u6307\u8D23\u63CF\u8FF0**\uFF1A\u8FDB\u884C Hadoop \u5E73\u53F0\u642D\u5EFA\uFF0C\u5229\u7528 Scrapy \u722C\u53D6 QTA \u9152\u5E97\u516C\u5F00\u6570\u636E\u81F3 MySQL \u4E2D\u3002\u5C06\u722C\u53D6\u7684\u6570\u636E\u8FDB\u884C\u6E05\u6D17\u548C\u5206\u6790\u3002\u5C06\u5206\u6790\u597D\u7684\u6570\u636E\u8FDB\u884C\u7EF4\u5EA6\u5EFA\u6A21\u5B58\u5165 MySQL \u4E2D\u3002\u7528 Flask \u540C ECharts \u5C06\u6570\u636E\u8FDB\u884C\u53EF\u89C6\u5316\u5C55\u73B0\u3002
- **\u9879\u76EE\u91CD\u70B9\u6536\u83B7**\uFF1A\u719F\u6089\u4E86 Scrapy \u6846\u67B6\u7684\u4F7F\u7528\uFF0C\u5728 Linux \u73AF\u5883\u4E0B\u8FDB\u884C\u4F5C\u4E1A\uFF0C\u6839\u636E\u6307\u6807\u8FDB\u884C\u7EF4\u5EA6\u5EFA\u6A21\u3002`,s8={name:"\u4E92\u8054\u7F51IT\u901A\u7528-\u5E26\u5934\u50CF",primaryColor:"#333",primaryBackground:"#333",img:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9596edaa90154e8ea291f5cf71798ae9~tplv-k3u1fbpfcp-watermark.image?",content:B8},r8=Object.freeze(Object.defineProperty({__proto__:null,default:s8},Symbol.toStringTag,{value:"Module"})),i8=`## \u9A6C\u51AC\u6885 - web\u524D\u7AEF
::: start
icon:user 2000/01/01
:::
icon:phone 1387848538
:::
icon:email examples.@163.com
:::
icon:github https://github.com/acmenlei
::: end
## \u6559\u80B2\u7ECF\u5386
\u6C5F\u897F\u8D22\u7ECF\u5927\u5B66 \u4FE1\u7535\u5B66\u9662-\u8BA1\u7B97\u673A 2019-2023 \u672C\u79D1

## \u4E13\u4E1A\u6280\u80FD
\u719F\u77E5Javascript \u57FA\u672C\u8BED\u6CD5\u4E0E\u77E5\u8BC6\uFF0C\u719F\u7EC3\u638C\u63E1\u6A21\u5757\u5316\uFF0C\u9762\u5411\u5BF9\u8C61\uFF0CMVC \u7B49\u7F16\u7A0B\u601D\u60F3\uFF0C\u5177\u5907\u5404\u79CD\u6846\u67B6\u7B49\u5B66\u4E60\u80FD\u529B
\u4E86\u89E3\u5E38\u89C1\u7684\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u77E5\u8BC6\uFF0C\u80FD\u591F\u4F7F\u7528JavaScript \u5B9E\u73B0\u5E38\u89C1\u7684\u6570\u636E\u7ED3\u6784
\u638C\u63E1\u524D\u7AEF\u6D41\u884C\u6846\u67B6 React\u3001vue
\u719F\u7EC3\u4F7F\u7528 NPM, webpack \u7B49\u5DE5\u5177
\u4E86\u89E3\u524D\u7AEF\u517C\u5BB9\u6027\u5904\u7406\u3001\u6027\u80FD\u4F18\u5316\u77E5\u8BC6\u4E0E\u6280\u5DE7\uFF0C\u5E76\u80FD\u5728\u9879\u76EE\u4E2D\u52A0\u4EE5\u5B9E\u8DF5
\u638C\u63E1 Node'S\uFF0C\u53EF\u4F7F\u7528 Koa/Express \u642D\u5EFA\u670D\u52A1\u7AEF\u7A0B\u5E8F
\u4E86\u89E3 Canvas/Pixils \u7B49web2D\u76F8\u5173\u6280\u672F

## \u5B9E\u4E60\u7ECF\u5386
**\u963F\u91CC\u5DF4\u5DF4** (2022.4-2022.7)
**\u4E3B\u8981\u6280\u672F**\uFF1A\`JavaScript\` \`A11v\`&nbsp;
\u53C2\u4E0E\u4E92\u52A8\u6E38\u620F\u4E1A\u52A1\u5F00\u53D1\uFF0C\u7ED3\u5408\u524D\u7AEF\u6E38\u620F\u5F15\u64CE\uFF0C\u89E3\u51B3Canvas\u533A\u57DF\u7684\u65E0\u969C\u788D\u95EE\u9898\uFF0C\u5B9E\u73B0\u573A\u666F\u5316\u3001\u81EA\u52A8\u5316\u3001\u6807\u51C6\u5316\u7684\u79FB\u52A8\u7AEF\u6E38\u620F\u65E0\u969C\u788D\u5316\u5DE5\u5177\u3002
\u573A\u666F\u5316\uFF1A\u9762\u5BF9\u65E0\u969C\u788D\u6A21\u5F0F \u4E0B\u53EA\u80FD\u70B9\u6309\u95EE\u9898\uFF0C\u5BF9\u62D6\u52A8\u4EA4\u4E92\u573A\u666F\u8FDB\u884C\u4F18\u5316
\u81EA\u52A8\u5316\uFF1A\u9488\u5BF9\u6E38\u620F\u5BF9\u8C61\uFF0C\u81EA\u52A8\u6DFB\u52A0AOM\u5B9E\u73B0\u65E0\u969C\u788D\u63D0\u793A\u6807\u51C6\u5316\uFF1A\u5BF9\u9F50\u65E0\u969C\u788D\u6807\u51C6\uFF0CWAlI-ARIA\u3001WICG/AOM
\u6210\u679C:\u8FD0\u7528\u5230\u91D1\u5E01\u5C0F\u9547\u3001\u82AD\u82AD\u519C\u573A\u3001\u53CC11\u7B49\u4E92\u52A8\u9879\u76EE\uFF0C\u89E3\u51B3\u9879\u76EE\u65E0\u969C\u788D\u95EE\u9898\uFF0C\u8BA9\u89C6\u529B\u969C\u788D\u8005\u4E5F\u80FD\u4F53\u9A8C\u4E92\u52A8\u4E50\u8DA3\u3002
&nbsp;
**\u5B57\u8282\u8DF3\u52A8** (2022.8-2022.10)
\u4E3B\u8981\u6280\u672F\uFF1ATypescript/React/Mobx/Nodejs
\u53C2\u4E0E\u4E1A\u52A1\u5F00\u53D1\u4E0E\u6280\u672F\u6539\u9020\uFF0C\u4E3B\u5BFC\u4E86\u6027\u80FD\u4F18\u5316\u3001\u6D88\u706Dcode smell\u3001Onview \u6539\u9020\u7B49\u4E00\u7CFB\u5217\u5DE5\u4F5C\u3002
\u8D1F\u8D23\u5168\u7AD9\u5305\u5927\u5C0F\u4F18\u5316\uFF0C\u5BF9build \u4EA7\u7269\u8FDB\u884C\u5206\u6790\u5E76\u9010\u6B65\u4F18\u5316\uFF0C\u6700\u540E\u51CF\u5C1150% InitialJs Size\uFF0C\u9875\u9762\u52A0\u8F7D\u901F\u5EA6\u4ECE 4s\u964D\u81F325
\u4E3B\u5BFC\u6D88\u706Dcode smell \u5DE5\u4F5C\uFF0C\u91CD\u67842K \u4F59\u884C\u4EE3\u7801\uFF0C\u6D88\u706Dcode smell 700 \u4F59\u4E2A\uFF0C\u5E76\u5236\u5B9A ESLint\u89C4\u8303\uFF0C\u964D\u4F4Ecodereview\u6210\u672C
\u4E3B\u5BFCOnview \u6539\u9020\uFF0C\u5F00\u53D1\u4E00\u952EOnview \u529F\u80FD\uFF0C\u6355\u83B7\u9519\u8BEF\u65E5\u5FD7\uFF0C\u5E2E\u52A9\u7814\u53D1\u4EBA\u5458\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\uFF0C\u89E3\u51B3\u53CD\u9988\uFF0C\u63D0\u9AD8\u4EBA\u6548
\u53C2\u4E0E\u9879\u76EE\u7684TS\u6539\u9020\u4EE5\u53CA Monorepo \u8FC1\u79FB\uFF0C\u7F16\u5199\u6587\u6863\uFF0C\u5236\u5B9A\u76F8\u5E94\u7684\u7C7B\u578B\u89C4\u8303
\u7F16\u5199\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u7684\u5C0F\u5DE5\u5177\uFF0C\u4F8B\u5982\u6279\u91CF\u63A5\u53E3\u6253\u6807\u811A\u672C\uFF0C\u63A5\u53E3mock\u811A\u672C\u7B49\u7B49\uFF0C\u4E3A\u5F00\u53D1\u63D0\u6548\uFF0C\u83B7\u5F97\u7EC4\u5185\u4E00\u81F4\u597D\u8BC4\u3002
&nbsp;
## \u6821\u56ED\u9879\u76EE
**\u6210\u7EE9\u67E5\u8BE2**
\u4E3B\u8981\u6280\u672F\uFF1ANode S/lavascript
\u4E3A\u5B66\u751F\u63D0\u4F9B\u6210\u7EE9\u67E5\u8BE2\u7CFB\u7EDF\uFF0C\u89E3\u51B3\u5185\u5916\u7F51\u9694\u79BB\u95EE\u9898\uFF0C\u63D0\u4F9B\u6210\u7EE9\u77ED\u4FE1\u901A\u77E5\u80FD\u529B\uFF0C\u4E3A2\u4E07\u5728\u6821\u751F\u63D0\u4F9B\u5728\u5BB6\u67E5\u6210\u7EE9\u670D\u52A1\u3002\u4F7F\u7528Koa2\u63D0\u4F9BAP\u63A5\u53E3\uFF0C\u4EE5\u4F9B\u524D\u7AEF\u4F7F\u7528\u3001\u8FD0\u7528Node js\u5B9E\u73B0\u5E26\u767B\u9646;\u6001\u8BF7\u6C42\u3001\u4F7F\u7528React/ Antd\u5B9E\u73B0\u524D\u7AEFUI\u754C\u9762\u3001\u63A5\u5165\u963F\u91CC\u4E91\u77ED\u4FE1API\u3002
## \u5176\u4ED6
\u83B7\u5F97\u4E00\u7B49/\u4E09\u7B49\u5956\u5B66\u91D1\uFF0C\u5728\u6821\u7EA7\u793E\u56E2\u62C5\u4EFB\u603B\u8D1F\u8D23\u4EBA\uFF0C\u5728\u9662\u5B66\u751F\u4F1A\u62C5\u4EFB\u526F\u90E8\u957F\u804C\u4F4D`,l8={name:"\u793E\u62DB/\u6821\u62DB\u7B80\u6D01\u6A21\u7248",primaryColor:"#555",primaryBackground:"#333",img:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca4dab18c36043658d4cf4f8bb64e052~tplv-k3u1fbpfcp-watermark.image?",content:i8},A8=Object.freeze(Object.defineProperty({__proto__:null,default:l8},Symbol.toStringTag,{value:"Module"})),c8=`::: headStart
# \u6C42\u804C\u7B80\u5386 - \u8FD0\u8425
::: start
\u5982\u82B1 / \u5973 / xxxx.xx / xxxxx / \u5DE5\u5546\u7BA1\u7406
\u672C\u79D1/xxxx\u5E74\u6BD5\u4E1A/\u515A\u5458

:::

[icon:email xiaoxinxxxxx@163.com](xiaoxinxxxxx@163.com)
icon:phone 155xxxx8888
::: end
::: headEnd
## icon:user \u81EA\u6211\u8BC4\u4EF7
\u672C\u4EBA\u4E00\u8D2F\u7231\u5C97\u656C\u4E1A\uFF0C\u63D0\u5021\u56E2\u961F\u534F\u4F5C\u7CBE\u795E\u3002\u5BF9\u5F85\u5DE5\u4F5C\u9996\u5148\u5C31\u8981\u770B\u600E\u6837\u53BB\u770B\u5F85\u8FD9\u4EFD\u5DE5\u4F5C\uFF0C\u662F\u7D2F\u7684\u3001\u82E6\u7684\uFF0C\u80FD\u8E0F\u8E0F\u5B9E\u5B9E\u53BB\u505A\u5C06\u5FC3\u653E\u5165\u8FD9\u4E2A\u7EC4\u7EC7\u5F53\u4E2D\u53BB\u3002\u8981\u505A\u597D\u4E00\u4EF6\u4E8B\uFF0C\u7B54\u5E94\u53BB\u505A\u7684\u4E8B\uFF0C\u90A3\u4E48\u5C31\u8981\u5B88\u4FE1\u53BB\u505A\uFF0C\u4E0D\u7BA1\u505A\u7684\u597D\u4E0D\u597D\u90FD\u80FD\u5982\u5B9E\u8BB2\u51FA\u6765\u3002
\u6211\u65F6\u523B\u8981\u6CE8\u610F\u5230\u8FD9\u662F\u4E00\u4E2A\u56E2\u961F\uFF0C\u5B83\u6240\u51DD\u96C6\u7684\u662F\u4E00\u80A1\u5F3A\u5927\u7684\u529B\u91CF\u3002\u56E2\u961F\u5F53\u4E2D\u4E00\u4E2A\u4EBA\u7684\u529B\u91CF\u662F\u975E\u5E38\u5C0F\u7684\uFF0C\u59CB\u7EC8\u79BB\u4E0D\u5F00\u5927\u5BB6\u3002


## icon:school \u6559\u80B2\u7ECF\u5386
::: start
- **\u5317\u4EAC\u5927\u5B66**
- \u5149\u534E\u7BA1\u7406\u5B66\u9662 - \u5DE5\u5546\u7BA1\u7406 GPA 3.9 / 4.0
:::

**2021.09 - 2024.07**
::: end

::: start
- **\u6E05\u534E\u5927\u5B66**
- \u5DE5\u5546\u7BA1\u7406\u5B66\u9662 - \u5DE5\u5546\u7BA1\u7406 GPA 3.9 / 4.0

:::

**2017.09 - 2021.07**

::: end

## icon:product \u83B7\u5956\u7ECF\u5386
- 2021 - 2022\u5E74\u56FD\u5BB6\u52B1\u5FD7\u5956\u5B66\u91D1 / 2019 - 2020\u5E74\u56FD\u5BB6\u5956\u5B66\u91D1
- 2020\u5E74\u5168\u56FD\u9AD8\u7B49\u5B66\u6821\u8BA1\u7B97\u673A\u80FD\u529B\u6311\u6218\u8D5B \u5927\u6570\u636E\u5E94\u7528 \u5168\u56FD\u603B\u51B3\u8D5B\u4E00\u7B49\u5956
- 2019\u5E74xxxxxxxxx\u6280\u80FD\u53D1\u5C55\u4E0E\u6280\u80FD\u521B\u65B0\u5927\u8D5B \u5DE5\u4E1A\u5927\u6570\u636E\u5E94\u7528 \u5927\u8D5B \u4E8C\u7B49\u5956
- 2022\u5E74 \u201Cxxx\u676F\u201D \u6E05\u534E\u5927\u5B66xxxx\u4F5C\u54C1\u5927\u8D5B \u4E00\u7B49\u5956

## icon:product \u5DE5\u4F5C\u7ECF\u5386
### \u676D\u5DDExx\u7F51\u7EDC\u6709\u9650\u516C\u53F8 - \u7535\u5546\u8FD0\u8425 \uFF082018.3-2018.7\uFF09
1. \u5BF9\u7535\u5546\u5E73\u53F0\u6574\u4F53\u89C4\u5212\u8BBE\u8BA1\u3001\u524D\u53F0\u9875\u8FDB\u884C\u66F4\u65B0\u8FED\u4EE3\u8BBE\u8BA1\u3001\u4E3B\u9898\u6D3B\u52A8\u8BBE\u8BA1\u3001\u4E13\u9898\u9875\u8BBE\u8BA1\uFF1B
2. \u5BF9\u7535\u5546\u7F51\u7AD9\u9875\u9762\u8BBE\u8BA1\u3001\u5E97\u94FA\u4EA7\u54C1\u88C5\u4FEE\u3001\u8BE6\u60C5\u9875\u9762\u8BBE\u8BA1\u3001\u63A8\u5E7F\u56FE\u7B49\u56FE\u7247\u8BBE\u8BA1\u5236\u4F5C\u3002
3. \u5BF9\u7167\u7247\u8FDB\u884C\u7CBE\u4FEE\uFF0C\u719F\u6089\u62A0\u56FE\u3001\u8C03\u8272\u53CA\u5404\u79CD\u5E38\u89C4\u53CA\u7279\u6B8A\u8C03\u8272\u624B\u6CD5\uFF1B
4. \u8D1F\u8D23\u56FE\u7247\u3001\u6587\u5B57\u8BBE\u8BA1\u6392\u7248\uFF0C\u8981\u6C42\u5356\u70B9\u7A81\u51FA\u3001\u65B9\u4FBF\u9605\u8BFB\u3001\u5438\u5F15\u8D2D\u4E70\uFF1B
5. \u6839\u636E\u8BBE\u8BA1\u903B\u8F91\u53CA\u6D3B\u52A8/\u5B9D\u8D1D\u7279\u6027\uFF0C\u8FDB\u884C\u6587\u6848\u63CF\u5199\uFF1B
6. \u914D\u5408\u8FD0\u8425\u3001\u4E1A\u52A1\u90E8\u95E8\u53CA\u5BA2\u6237\u53CD\u9988\uFF0C\u4F18\u5316\u3001\u4FEE\u6B63\u5546\u54C1\u56FE\u7247\u4FE1\u606F\uFF1B

## icon:project \u9879\u76EE\u7ECF\u5386
- **\u9879\u76EE\u65F6\u95F4**\uFF1A2016-05 \u5230 2015-07
- **\u9879\u76EE\u540D\u79F0**\uFF1A\u901A\u7528\u5B58\u50A8\u9879\u76EE
- **\u9879\u76EE\u63CF\u8FF0**\uFF1A\u8BE5\u9879\u76EE\u5BA2\u6237\u4E3A\u5EFA\u8BBE\u94F6\u884C\uFF0C\u5BA2\u6237\u51FA\u8D27\u5730\u70B9\u6BD4\u8F83\u5206\u6563\u3002Rack\u51FA\u8D27\u65B9\u5F0F\u57FA\u672C\u4E3A\u6574\u673A\u67DC\u51FA\u8D27\uFF0C\u4F46\u5C0F\u6279\u91CF\u6216\u8005\u51E0\u53F0\u51FA\u8D27\u5C31\u4E0D\u80FD\u9009\u53D6\u6574\u673A\u67DC\u51FA\u8D27\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u9879\u76EE\u7EC4\u9884\u8BA1\u5355\u5305\u88C5\u51FA\u8D27\uFF0C\u8BA9\u53EF\u9760\u6027\u8BC4\u4F30\u51FA\u8D27\u8FDB\u884C\u76F8\u5E94\u5305\u88C5\u6D4B\u8BD5\uFF1B\u8BC4\u4F30\u540E\u56E0\u8BE5\u673A\u578B\u65E0\u4E0A\u76D6\u3001\u91CD\u91CF\u8F83\u5927\u3001\u4E14\u673A\u6784\u5F3A\u5EA6\u4E0D\u80FD\u6EE1\u8DB3\u5355\u5305\u88C5\u51FA\u8D27\u6D4B\u8BD5\uFF0C\u5355\u5305\u51FA\u8D27\u6709\u5F88\u5927\u98CE\u9669\uFF1B\u4E0E\u5BA2\u6237\u6C9F\u901A\u5EFA\u8BAE\u540E\u76F4\u63A5\u91C7\u53D6\u6808\u677F\u51FA\u8D27\u65B9\u5F0F\uFF0C\u901A\u8FC7\u4E86\u51FA\u8D27\u6D4B\u8BD5\uFF0C\u4FDD\u8BC1\u4E86\u987A\u5229\u51FA\u8D27\u3002
- **\u6211\u7684\u804C\u8D23**\uFF1A\u4F5C\u4E3A\u9879\u76EE\u7BA1\u7406\u53EF\u9760\u6027\u5DE5\u7A0B\u5E08\uFF0C\u8D1F\u8D23\u6574\u4E2A\u9879\u76EE\u7684\u53EF\u9760\u6027\u6D4B\u8BD5\u7BA1\u7406\u5DE5\u4F5C\uFF0C\u5305\u62EC\u9879\u76EE\u53EF\u9760\u6027\u65B9\u6848\u8BBE\u8BA1\u4E0E\u8BA1\u5212\u6392\u914D\u3001\u6D4B\u8BD5\u62A5\u4EF7\u3001\u6D4B\u8BD5\u8FDB\u5C55\u3001\u6D4B\u8BD5\u62A5\u544A\u7F16\u5199\u7B49\u3002

## icon:technology \u4E13\u4E1A\u6280\u80FD
- **\u5E38\u7528\u6570\u636E\u5206\u6790\u6CD5**\uFF1A\u805A\u7C7B\u5206\u6790\u3001\u5BF9\u6BD4\u5206\u6790\u3001\u6F0F\u6597\u5206\u6790\u6CD5\u3001\u540C\u671F\u7FA4\u5206\u6790\u3002
- **\u6F0F\u6597\u5206\u6790\u6CD5**\uFF1A\u4E00\u5957\u6D41\u7A0B\u5F0F\u6570\u636E\u5206\u6790\uFF0C\u5B83\u80FD\u591F\u79D1\u5B66\u53CD\u6620\u7528\u6237\u884C\u4E3A\u72B6\u6001\u4EE5\u53CA\u4ECE\u8D77\u70B9\u5230\u7EC8\u70B9\u5404\u9636\u6BB5\u7528\u6237\u8F6C\u5316\u7387\u60C5\u51B5\u7684\u91CD\u8981\u5206\u6790\u6A21\u578B\u3002
- **xxxxxxxx**\uFF1A xxxxxxxxxxxxxxxxxxxxxxxx
- **xxxxxxxx**\uFF1A xxxxxxxxxxxxxxxxxxxxxxxx
- **xxxxxxxx**\uFF1A xxxxxxxxxxxxxxxxxxxxxxxx
- **xxxxxxxx**\uFF1A xxxxxxxxxxxxxxxxxxxxxxxx
`,D8={name:"\u8FD0\u8425\u7C7B",primaryColor:"#333",primaryBackground:"#333",img:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31d7efc95b1b4532b2fb88b9249e591c~tplv-k3u1fbpfcp-watermark.image?",content:c8},d8=Object.freeze(Object.defineProperty({__proto__:null,default:D8},Symbol.toStringTag,{value:"Module"})),p8=`::: headStart
## \u9A6C\u725B\u903C **\u793E\u4F1A\u725B\u903C\u5DE5\u7A0B\u5E08**
::: start
icon:city xxxx\u5927\u5B66 / \u793E\u4F1A\u5DE5\u7A0B
icon:email xxxxxxx@163.com
:::
icon:project \u672C\u79D1 / 2023
icon:phone 183xxxxx987
:::
icon:school GPA:3.92 / Top3%
::: end
::: headEnd

## icon:technology \u4E13\u4E1A\u6280\u80FD Professional Skills
- \u719F\u6089 Java \u7F16\u7A0B\u57FA\u7840\uFF0CIO\u64CD\u4F5C\uFF0C\u96C6\u5408\u7B49\u76F8\u5173\u77E5\u8BC6\uFF0C\u4E86\u89E3\u5E38\u89C1\u7684\u8BBE\u8BA1\u6A21\u5F0F\u548C\u8BA1\u7B97\u673A\u57FA\u7840\u76F8\u5173\u77E5\u8BC6\u3002
- \u719F\u6089 Linux \u57FA\u672C\u547D\u4EE4\uFF0C\u5177\u5907\u7F16\u5199\u7B80\u5355\u7684 Shell \u811A\u672C\u7684\u80FD\u529B\u3002
- \u719F\u6089 MySQL \u4E14\u5177\u6709\u7F16\u5199 SQL \u7684\u80FD\u529B\uFF0C\u4E86\u89E3 MySQL \u903B\u8F91\u67B6\u6784\u3001\u7D22\u5F15\u3001\u9501\u3001\u4E8B\u52A1\u7B49\u3002
- \u719F\u6089 HTML\u3001CSS \u5E76\u80FD\u7F16\u5199\u7B26\u5408 W3C \u6807\u51C6\u7684\u9875\u9762\u5E03\u5C40\u4EE5\u53CA\u719F\u6089 JavaScript\u3002
- \u719F\u6089\u5E38\u7528\u6570\u636E\u7ED3\u6784\u5982\u6570\u7EC4\u3001\u8FDE\u6807\u3001\u6808\u3001\u961F\u5217\u3001\u4E8C\u53C9\u6811\u7B49\uFF0C\u5BF9\u9012\u5F52\u3001\u52A8\u6001\u89C4\u5212\u3001\u5E38\u7528\u6392\u5E8F\u7B97\u6CD5\u6709\u4E00\u5B9A\u7406\u89E3\u3002
- \u719F\u6089 Hadoop \u751F\u6001\u7684\u5927\u6570\u636E\u5B58\u50A8\u5E73\u53F0\u7684\u642D\u5EFA\u4E0E\u90E8\u7F72\u53CA\u76F8\u5173\u7EC4\u4EF6\uFF08HDFS\u3001Yarm\u3001MapReduce \u7F16\u7A0B\u6A21\u578B\uFF09\u3002
- \u719F\u7EC3 Python \u7F16\u7A0B\u57FA\u7840\uFF0C\u6709 PyhtonWeb\u3001\u722C\u866B\u3001\u6570\u636E\u5206\u6790\u3001\u81EA\u52A8\u5316\u811A\u672C\u3001QT \u7F16\u7A0B\u7B49\u7ECF\u9A8C\u3002
- \u719F\u6089 C++ \u7F16\u7A0B\u57FA\u7840\uFF0C\u6709 C++ \u5C0F\u6E38\u620F\u53CA\u7BA1\u7406\u7CFB\u7EDF\u5F00\u53D1\u7ECF\u9A8C\u3002

## icon:trophy \u5956\u9879\u8363\u8A89 Awards & Honor
- 2021 - 2022\u5E74\u56FD\u5BB6\u52B1\u5FD7\u5956\u5B66\u91D1 / 2019 - 2020\u5E74\u56FD\u5BB6\u5956\u5B66\u91D1
- 2020\u5E74\u5168\u56FD\u9AD8\u7B49\u5B66\u6821\u8BA1\u7B97\u673A\u80FD\u529B\u6311\u6218\u8D5B\u4E00\u7B49\u5956
- 2019\u5E74 CCPC \u5927\u5B66\u751F\u7A0B\u5E8F\u8BBE\u8BA1\u5927\u8D5B\u6C5F\u897F\u533A\u9884\u8D5B\u94F6\u724C
- 2022\u5E74 \u201C\u725B\u903C\u676F\u201D xxxxxx\u5927\u5B66\u4FE1\u606F\u5DE5\u7A0B\u5B66\u9662\u725B\u903C\u4F5C\u54C1\u5927\u8D5B \u4E00\u7B49\u5956

## icon:practice \u5B9E\u4E60\u7ECF\u5386 Intership Experience
- **\u5355\u4F4D\u540D\u79F0**\uFF1Axxxxxxxxx
- **\u5B9E\u4E60\u65F6\u95F4**\uFF1Axxxx.xx - xxxx.xx
- **\u5B9E\u4E60\u5185\u5BB9**\uFF1A\u4F7F\u7528 Python \u8BED\u8A00\u7F16\u5199\u7684 Scrapy \u6846\u67B6\u53CA requests \u7B49\u7B2C\u4E09\u65B9\u5E93\uFF0C\u5BF9\u7F51\u7EDC\u4E0A\u516C\u5F00\u7684\u6570\u636E\u8FDB\u884C\u722C\u53D6\uFF0C\u5E76\u5B58\u50A8\u5230 MySQL \u6570\u636E\u5E93\u4E2D\uFF0C\u518D\u5229\u7528 Java \u53CA Python \u7684\u6570\u636E\u79D1\u5B66\u5E93\u5BF9\u6570\u636E\u8FDB\u884C\u6E05\u6D17\u53CA\u5206\u6790\u7B49\u5185\u5BB9\u3002

## icon:project \u9879\u76EE\u7ECF\u5386 Project Experience
- **\u9879\u76EE\u540D\u79F0**\uFF1A\u963F\u91CC\u5DF4\u5DF4\u8FBE\u6469\u9662\u626B\u5730\u9879\u76EE
- **\u9879\u76EE\u65F6\u95F4**\uFF1A2022.06 - 2022.07
- **\u9879\u76EE\u63CF\u8FF0**\uFF1A\u6559\u522B\u4EBA\u5982\u4F55\u626B\u5730\uFF0C\u5982\u4F55\u626B\u597D\u5730
- **\u9879\u76EE\u6280\u672F\u6808**\uFF1AHadoop\u3001Sqoop\u3001Python\u3001Scrapy\u3001Spark\u3001Hive\u3001MySQL\u3001Flask\u3001ECharts
- **\u6307\u8D23\u63CF\u8FF0**\uFF1A\u8FDB\u884C Hadoop \u5E73\u53F0\u642D\u5EFA\uFF0C\u5229\u7528 Scrapy \u722C\u53D6 QTA \u9152\u5E97\u516C\u5F00\u6570\u636E\u81F3 MySQL \u4E2D\u3002\u5C06\u722C\u53D6\u7684\u6570\u636E\u8FDB\u884C\u6E05\u6D17\u548C\u5206\u6790\u3002\u5C06\u5206\u6790\u597D\u7684\u6570\u636E\u8FDB\u884C\u7EF4\u5EA6\u5EFA\u6A21\u5B58\u5165 MySQL \u4E2D\u3002\u7528 Flask \u540C ECharts \u5C06\u6570\u636E\u8FDB\u884C\u53EF\u89C6\u5316\u5C55\u73B0\u3002
- **\u9879\u76EE\u91CD\u70B9\u6536\u83B7**\uFF1A\u719F\u6089\u4E86 Scrapy \u6846\u67B6\u7684\u4F7F\u7528\uFF0C\u5728 Linux \u73AF\u5883\u4E0B\u8FDB\u884C\u4F5C\u4E1A\uFF0C\u6839\u636E\u6307\u6807\u8FDB\u884C\u7EF4\u5EA6\u5EFA\u6A21\u3002

- **\u9879\u76EE\u540D\u79F0**\uFF1A\u963F\u91CC\u5DF4\u5DF4\u8FBE\u6469\u9662\u626B\u5730\u9879\u76EE
- **\u9879\u76EE\u65F6\u95F4**\uFF1A2022.06 - 2022.07
- **\u9879\u76EE\u63CF\u8FF0**\uFF1A\u6559\u522B\u4EBA\u5982\u4F55\u626B\u5730\uFF0C\u5982\u4F55\u626B\u597D\u5730
- **\u9879\u76EE\u6280\u672F\u6808**\uFF1AHadoop\u3001Sqoop\u3001Python\u3001Scrapy\u3001Spark\u3001Hive\u3001MySQL\u3001Flask\u3001ECharts
- **\u6307\u8D23\u63CF\u8FF0**\uFF1A\u8FDB\u884C Hadoop \u5E73\u53F0\u642D\u5EFA\uFF0C\u5229\u7528 Scrapy \u722C\u53D6 QTA \u9152\u5E97\u516C\u5F00\u6570\u636E\u81F3 MySQL \u4E2D\u3002\u5C06\u722C\u53D6\u7684\u6570\u636E\u8FDB\u884C\u6E05\u6D17\u548C\u5206\u6790\u3002\u5C06\u5206\u6790\u597D\u7684\u6570\u636E\u8FDB\u884C\u7EF4\u5EA6\u5EFA\u6A21\u5B58\u5165 MySQL \u4E2D\u3002\u7528 Flask \u540C ECharts \u5C06\u6570\u636E\u8FDB\u884C\u53EF\u89C6\u5316\u5C55\u73B0\u3002
- **\u9879\u76EE\u91CD\u70B9\u6536\u83B7**\uFF1A\u719F\u6089\u4E86 Scrapy \u6846\u67B6\u7684\u4F7F\u7528\uFF0C\u5728 Linux \u73AF\u5883\u4E0B\u8FDB\u884C\u4F5C\u4E1A\uFF0C\u6839\u636E\u6307\u6807\u8FDB\u884C\u7EF4\u5EA6\u5EFA\u6A21\u3002

## icon:user \u81EA\u6211\u8BC4\u4EF7 About me
\u672C\u4EBA\u70ED\u5FC3\u8BDA\u6073\u3001\u4E50\u89C2\u5411\u4E0A\uFF0C\u6709\u826F\u597D\u7684\u601D\u60F3\u54C1\u5FB7\u548C\u804C\u4E1A\u7D20\u8D28\uFF0C\u5DE5\u4F5C\u8BA4\u771F\u8D1F\u8D23\uFF0C\u5584\u4E8E\u5728\u5B9E\u8DF5\u4E2D\u79EF\u7D2F\u5B66\u4E60\uFF0C\u4E0D\u65AD\u7684\u5B8C\u5584\u81EA\u6211\u3002
\u901A\u8FC7\u5728\u5B66\u751F\u4F1A\u4EFB\u804C\u7684\u7ECF\u5386\uFF0C\u953B\u70BC\u51FA\u4E86\u826F\u597D\u7684\u7EC4\u7EC7\u534F\u8C03\u80FD\u529B\u548C\u6C9F\u901A\u534F\u4F5C\u80FD\u529B\uFF0C\u5584\u4E8E\u8C03\u52A8\u56E2\u961F\u6210\u5458\u7684\u5DE5\u4F5C\u70ED\u60C5\u4E0E\u79EF\u6781\u6027\u3002
\u540C\u65F6\uFF0C\u4E30\u5BCC\u7684\u5728\u5916\u517C\u804C\u7ECF\u5386\u4F7F\u81EA\u5DF1\u62E5\u6709\u8F83\u5F3A\u7684\u4EB2\u548C\u529B\u4E0E\u8D23\u4EFB\u5FC3\uFF0C\u5E76\u6709\u826F\u597D\u7684\u56E2\u961F\u534F\u4F5C\u548C\u656C\u4E1A\u7CBE\u795E\u3002`,m8={name:"\u4E92\u8054\u7F51IT\u901A\u7528",primaryColor:"#333",primaryBackground:"#333",img:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7f4750d40d4459486b1c9f77918ea50~tplv-k3u1fbpfcp-watermark.image?",content:p8},_8=Object.freeze(Object.defineProperty({__proto__:null,default:m8},Symbol.toStringTag,{value:"Module"})),f8=`::: headStart
::: start
# \u756A\u8304\u7092\u9E21\u86CB
**\u6027\u522B**\uFF1A\u7537 \uFF5C **\u5E74\u9F84**\uFF1A23 \uFF5C **\u7535\u8BDD**\uFF1A11011011011 \uFF5C **\u90AE\u7BB1**\uFF1Aresume@163.com
:::
![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)
::: end
::: headEnd
## icon:practice \u62A5\u8003\u4FE1\u606F
::: start
**\u62A5\u8003\u9662\u6821\uFF1A**xxx\u5927\u5B66
:::
**\u62A5\u8003\u4E13\u4E1A\uFF1A**\u91D1\u878D\u5B66\uFF08020204\uFF09
:::
**\u62A5\u8003\u5C5E\u6027\uFF1A**\u4E13\u7855\u5B66\u4F4D\u7814\u7A76\u751F
::: end
| \u521D\u8BD5\u79D1\u76EE | \u82F1\u8BED\uFF08\u4E00\uFF09 | \u653F\u6CBB | \u4E13\u4E1A\u8BFE1 | \u4E13\u4E1A\u8BFE2 | \u603B\u5206 |
| \u521D\u8BD5\u6210\u7EE9 | 90 | 80 | 130 | 130 | 430 |

## icon:school \u6559\u80B2\u7ECF\u5386
::: start
### xxx\u5927\u5B66
:::
2019\u5E749\u6708 - 2023\u5E747\u6708
::: end
- GPA: 3.9 / 4.0
- \u56FD\u5BB6\u52B1\u5FD7\u5956\u5B66\u91D1\uFF082019 - 2020\u30012020 - 2021\u30012021 - 2022\u30012022 - 2023\uFF09
- xxxx\u5B66\u9662\u4F18\u79C0\u5B66\u751F\u5E72\u90E8\uFF082019 - 2023\uFF09
## icon:head \u79D1\u7814\u7ECF\u5386
::: start
### \u57FA\u4E8Exxx\u7684\u7814\u7A76
:::
xxxx\u5E74xx\u6708 - xxxx\u5E74xx\u6708
::: end
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx

::: start
### \u57FA\u4E8Exxx\u7684\u7814\u7A76
:::
xxxx\u5E74xx\u6708 - xxxx\u5E74xx\u6708
::: end
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx

## icon:application \u9879\u76EE\u7ECF\u5386
::: start
### xxxx\u5E73\u53F0
:::
xxxx\u5E74xx\u6708 - xxxx\u5E74xx\u6708
::: end
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
## icon:technology \u4E2A\u4EBA\u6280\u80FD
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
`,g8={name:"\u7814\u7A76\u751F\u590D\u8BD5\u6A21\u677F",primaryColor:"#3A3939",primaryBackground:"#2186D2",img:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ce5f9d8c876420bbac1a5b0b35ad9f0~tplv-k3u1fbpfcp-watermark.image?",content:f8},h8=Object.freeze(Object.defineProperty({__proto__:null,default:g8},Symbol.toStringTag,{value:"Module"})),y8=`::: headStart
::: start
## \u5C0F\u65B0 **\u8FD0\u8425\u5B9E\u4E60\u751F**
icon:city \u6D59\u6C5F\u676D\u5DDE | icon:user \u7537 / 2000.01.01 | \u4E2D\u5171\u515A\u5458 \uFF5C 2023\u5C4A
:::
![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)
::: end
::: headEnd

## icon:user \u6559\u80B2\u7ECF\u5386 Education Experience
::: start
- **\u5317\u4EAC\u5927\u5B66**
- \u5149\u534E\u7BA1\u7406\u5B66\u9662 - \u5DE5\u5546\u7BA1\u7406 GPA 3.9 / 4.0
:::

**2021.09 - 2024.07**
::: end

::: start
- **\u6E05\u534E\u5927\u5B66**
- \u5DE5\u5546\u7BA1\u7406\u5B66\u9662 - \u5DE5\u5546\u7BA1\u7406 GPA 3.9 / 4.0

:::

**2017.09 - 2021.07**

::: end

## icon:practice \u5DE5\u4F5C\u7ECF\u5386 Intership Experience
### \u676D\u5DDExx\u7F51\u7EDC\u6709\u9650\u516C\u53F8 - \u7535\u5546\u8FD0\u8425 \uFF082018.3-2018.7\uFF09
1. \u5BF9\u7535\u5546\u5E73\u53F0\u6574\u4F53\u89C4\u5212\u8BBE\u8BA1\u3001\u524D\u53F0\u9875\u8FDB\u884C\u66F4\u65B0\u8FED\u4EE3\u8BBE\u8BA1\u3001\u4E3B\u9898\u6D3B\u52A8\u8BBE\u8BA1\u3001\u4E13\u9898\u9875\u8BBE\u8BA1\uFF1B
2. \u5BF9\u7535\u5546\u7F51\u7AD9\u9875\u9762\u8BBE\u8BA1\u3001\u5E97\u94FA\u4EA7\u54C1\u88C5\u4FEE\u3001\u8BE6\u60C5\u9875\u9762\u8BBE\u8BA1\u3001\u63A8\u5E7F\u56FE\u7B49\u56FE\u7247\u8BBE\u8BA1\u5236\u4F5C\u3002
3. \u5BF9\u7167\u7247\u8FDB\u884C\u7CBE\u4FEE\uFF0C\u719F\u6089\u62A0\u56FE\u3001\u8C03\u8272\u53CA\u5404\u79CD\u5E38\u89C4\u53CA\u7279\u6B8A\u8C03\u8272\u624B\u6CD5\uFF1B
4. \u8D1F\u8D23\u56FE\u7247\u3001\u6587\u5B57\u8BBE\u8BA1\u6392\u7248\uFF0C\u8981\u6C42\u5356\u70B9\u7A81\u51FA\u3001\u65B9\u4FBF\u9605\u8BFB\u3001\u5438\u5F15\u8D2D\u4E70\uFF1B
5. \u6839\u636E\u8BBE\u8BA1\u903B\u8F91\u53CA\u6D3B\u52A8/\u5B9D\u8D1D\u7279\u6027\uFF0C\u8FDB\u884C\u6587\u6848\u63CF\u5199\uFF1B
6. \u914D\u5408\u8FD0\u8425\u3001\u4E1A\u52A1\u90E8\u95E8\u53CA\u5BA2\u6237\u53CD\u9988\uFF0C\u4F18\u5316\u3001\u4FEE\u6B63\u5546\u54C1\u56FE\u7247\u4FE1\u606F\uFF1B
## icon:project \u9879\u76EE\u7ECF\u5386 Project Experience
::: start
**xxxxxx - xxxxxx - web\u524D\u7AEF\u5F00\u53D1\u5B9E\u4E60\u751F - \u676D\u5DDE(xxxx\u4EBA\u4EE5\u4E0A)**
:::
**2020.12 - 2021.05**
::: end

##### xxxxB\u7AEF\u7BA1\u7406\u53F0
- **\u9879\u76EE\u7B80\u4ECB**\uFF1A\u8BE5\u9879\u76EE\u662F\u4E00\u4E2A\u4F7F\u7528 Vue.js \u5F00\u53D1\u7684\u7535\u5546\u7C7B\u5C0F\u7A0B\u5E8F\u7684\u5546\u5BB6\u7AEF\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u662F\u4E00\u4E2A\u524D\u540E\u7AEF\u5206\u79BB\u7684 SPA \u5E94
- **\u5DE5\u4F5C\u5185\u5BB9**\uFF1A

1. \u767B\u5F55\u91C7\u7528 Cookie + Token \u7684\u65B9\u5F0F\uFF0C\u7528\u6237\u5206\u4E3A\u5E97\u957F\u4EE5\u53CA\u5458\u5DE5\uFF0C\u5E76\u9488\u5BF9\u8FD9\u51E0\u79CD\u89D2\u8272\u5BF9\u5176\u8FDB\u884C\u6743\u9650\u63A7\u5236
2. \u6743\u9650\u505A\u5230\u6309\u94AE\u7EA7\u522B\uFF0C\u9875\u9762\u7EA7\u6743\u9650\u901A\u8FC7 Vue-Router \u5B88\u536B\u8FDB\u884C\u63A7\u5236\u3001\u6309\u94AE\u7EA7\u6743\u9650\u901A\u8FC7 directive \u5B9E\u73B0\uFF0C\u5E76\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u89E3\u51B3\u4E86\u6309\u94AE\u8FC7\u591A\u5F15\u53D1\u7684\u9891\u7E41\u62C9\u53D6\u6743\u9650\u7684 HTTP \u8BF7\u6C42
3. \u6839\u636E\u6743\u9650\u83DC\u5355\u7684\u7EA7\u8054\u5173\u7CFB\u5BF9\u6743\u9650\u7801\u7ED3\u6784\u8FDB\u884C\u6539\u9020\uFF0C\u5E76\u4F7F\u7528 Tree \u7EC4\u4EF6\u6E32\u67D3\u6811\u5F62\u7ED3\u6784\u6743\u9650\u5217\u8868\uFF0C\u63D0\u5347\u53EF\u8BFB\u6027
4. \u4F7F\u7528 ECharts \u53EF\u89C6\u5316\u6E32\u67D3\u5E97\u94FA\u5546\u54C1\u9500\u552E\u5360\u6BD4\u3001\u8FD1\u51E0\u4E2A\u6708\u6536\u652F\u3001\u4F1A\u5458\u8D2D\u4E70\u5546\u54C1\u6240\u5360\u4EFD\u989D\u56FE\u8868
5. \u5BF9\u4E8E\u8868\u683C\u4E2D\u6240\u6709\u7684\u6A21\u7CCA\u67E5\u8BE2\uFF0C\u90FD\u4F7F\u7528\u4E86\u8282\u6D41\u8FDB\u884C\u4F18\u5316\uFF0C\u5C3D\u91CF\u51CF\u8F7B\u670D\u52A1\u5668\u7684\u538B\u529B

## icon:user \u4E2A\u4EBA\u8363\u8A89 About me
1. \u56DB\u5E74\u73ED\u957F + \u56E2\u652F\u4E66
2. \u5927\u5B66\u751F\u521B\u65B0\u521B\u4E1A\u5927\u8D5B\u56FD\u5BB6\u7EA7\u7ACB\u9879
3. \u4E92\u8054\u7F51+\u91D1\u878D\u8D5B\u9053\u4E00\u7B49\u5956
4. xxxxx......
## icon:user \u81EA\u6211\u8BC4\u4EF7 About me
1. \u672C\u4EBA\u70ED\u5FC3\u8BDA\u6073\u3001\u4E50\u89C2\u5411\u4E0A\uFF0C\u6709\u826F\u597D\u7684\u601D\u60F3\u54C1\u5FB7\u548C\u804C\u4E1A\u7D20\u8D28\uFF0C\u5DE5\u4F5C\u8BA4\u771F\u8D1F\u8D23\uFF0C\u7231\u597D\u662F\u770B\u7F8E\u5973\u3002
2. \u901A\u8FC7\u5728\u5B66\u751F\u4F1A\u4EFB\u804C\u7684\u7ECF\u5386\uFF0C\u953B\u70BC\u51FA\u4E86\u826F\u597D\u7684\u7EC4\u7EC7\u534F\u8C03\u80FD\u529B\uFF0C\u5584\u4E8E\u8C03\u52A8\u56E2\u961F\u6210\u5458\u7684\u5DE5\u4F5C\u70ED\u60C5\u4E0E\u79EF\u6781\u6027\u3002
3. \u4E30\u5BCC\u7684\u5728\u5916\u517C\u804C\u7ECF\u5386\u4F7F\u81EA\u5DF1\u62E5\u6709\u8F83\u5F3A\u7684\u4EB2\u548C\u529B\u4E0E\u8D23\u4EFB\u5FC3\uFF0C\u5E76\u6709\u826F\u597D\u7684\u56E2\u961F\u534F\u4F5C\u548C\u656C\u4E1A\u7CBE\u795E\u3002`,b8={name:"\u901A\u7528\u7C7B\u6A21\u677F",primaryColor:"#333",primaryBackground:"#1a85f0",img:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5560f15292d4f629f6a2fe560165987~tplv-k3u1fbpfcp-watermark.image?",content:y8},v8=Object.freeze(Object.defineProperty({__proto__:null,default:b8},Symbol.toStringTag,{value:"Module"})),k8=`::: headStart
::: start
![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)
# \u5C0F\u65B0 **UI\u8BBE\u8BA1\u5E08**
icon:city \u6D59\u6C5F\u676D\u5DDE | icon:user \u7537 / 2000.01.01 | \u4E2D\u5171\u515A\u5458 \uFF5C 2023\u5C4A
::: end
::: headEnd

## icon:user \u6559\u80B2\u7ECF\u5386
::: start
**\u5317\u4EAC\u5927\u5B66**
:::
\u5149\u534E\u7BA1\u7406\u5B66\u9662 - \u5DE5\u5546\u7BA1\u7406\uFF08\u7855\u58EB\u5B66\u4F4D\uFF09 GPA 3.9 / 4.0
:::
**2021.09 - 2024.07**
::: end

::: start
**\u6E05\u534E\u5927\u5B66**
:::
\u5DE5\u5546\u7BA1\u7406\u5B66\u9662 - \u5DE5\u5546\u7BA1\u7406\uFF08\u5B66\u58EB\u5B66\u4F4D\uFF09 GPA 3.9 / 4.0
:::
**2017.09 - 2021.07**
::: end

## icon:application \u4E2A\u4EBA\u6280\u80FD
::: start
**\u6280\u80FD\u540D\u79F0**\uFF1APS
:::
**\u4F7F\u7528\u65F6\u957F**\uFF1A5\u5E74
:::
**\u719F\u7EC3\u7A0B\u5EA6**\uFF1A\u7CBE\u901A
::: end

::: start
**\u6280\u80FD\u540D\u79F0**\uFF1APR
:::
**\u4F7F\u7528\u65F6\u957F**\uFF1A5\u5E74
:::
**\u719F\u7EC3\u7A0B\u5EA6**\uFF1A\u7CBE\u901A
::: end

::: start
**\u6280\u80FD\u540D\u79F0**\uFF1AAR
:::
**\u4F7F\u7528\u65F6\u957F**\uFF1A5\u5E74
:::
**\u719F\u7EC3\u7A0B\u5EA6**\uFF1A\u7CBE\u901A
::: end

## icon:practice \u5DE5\u4F5C\u7ECF\u5386
::: start
### xxxxxx - xxxxxx - UI\u8BBE\u8BA1\u5E08 - \u676D\u5DDE(xxxx\u4EBA\u4EE5\u4E0A)
:::
**2020.12 - 2021.05**
::: end
1. \u5BF9\u7535\u5546\u5E73\u53F0\u6574\u4F53\u89C4\u5212\u8BBE\u8BA1\u3001\u524D\u53F0\u9875\u8FDB\u884C\u66F4\u65B0\u8FED\u4EE3\u8BBE\u8BA1\u3001\u4E3B\u9898\u6D3B\u52A8\u8BBE\u8BA1\u3001\u4E13\u9898\u9875\u8BBE\u8BA1\uFF1B
2. \u5BF9\u7535\u5546\u7F51\u7AD9\u9875\u9762\u8BBE\u8BA1\u3001\u5E97\u94FA\u4EA7\u54C1\u88C5\u4FEE\u3001\u8BE6\u60C5\u9875\u9762\u8BBE\u8BA1\u3001\u63A8\u5E7F\u56FE\u7B49\u56FE\u7247\u8BBE\u8BA1\u5236\u4F5C\u3002
3. \u5BF9\u7167\u7247\u8FDB\u884C\u7CBE\u4FEE\uFF0C\u719F\u6089\u62A0\u56FE\u3001\u8C03\u8272\u53CA\u5404\u79CD\u5E38\u89C4\u53CA\u7279\u6B8A\u8C03\u8272\u624B\u6CD5\uFF1B
4. \u8D1F\u8D23\u56FE\u7247\u3001\u6587\u5B57\u8BBE\u8BA1\u6392\u7248\uFF0C\u8981\u6C42\u5356\u70B9\u7A81\u51FA\u3001\u65B9\u4FBF\u9605\u8BFB\u3001\u5438\u5F15\u8D2D\u4E70\uFF1B
5. \u6839\u636E\u8BBE\u8BA1\u903B\u8F91\u53CA\u6D3B\u52A8/\u5B9D\u8D1D\u7279\u6027\uFF0C\u8FDB\u884C\u6587\u6848\u63CF\u5199\uFF1B
6. \u914D\u5408\u8FD0\u8425\u3001\u4E1A\u52A1\u90E8\u95E8\u53CA\u5BA2\u6237\u53CD\u9988\uFF0C\u4F18\u5316\u3001\u4FEE\u6B63\u5546\u54C1\u56FE\u7247\u4FE1\u606F\uFF1B

## icon:project \u9879\u76EE\u7ECF\u5386
### xxxxxxx\u7BA1\u7406\u53F0
- **\u9879\u76EE\u7B80\u4ECB**\uFF1A\u8BE5\u9879\u76EE\u662F\u4E00\u4E2A\u4F7F\u7528 Vue.js \u5F00\u53D1\u7684\u7535\u5546\u7C7B\u5C0F\u7A0B\u5E8F\u7684\u5546\u5BB6\u7AEF\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u662F\u4E00\u4E2A\u524D\u540E\u7AEF\u5206\u79BB\u7684 SPA \u5E94
- **\u5DE5\u4F5C\u5185\u5BB9**\uFF1A

1. \u767B\u5F55\u91C7\u7528 Cookie + Token \u7684\u65B9\u5F0F\uFF0C\u7528\u6237\u5206\u4E3A\u5E97\u957F\u4EE5\u53CA\u5458\u5DE5\uFF0C\u5E76\u9488\u5BF9\u8FD9\u51E0\u79CD\u89D2\u8272\u5BF9\u5176\u8FDB\u884C\u6743\u9650\u63A7\u5236
2. \u6743\u9650\u505A\u5230\u6309\u94AE\u7EA7\u522B\uFF0C\u9875\u9762\u7EA7\u6743\u9650\u901A\u8FC7 Vue-Router \u5B88\u536B\u8FDB\u884C\u63A7\u5236\u3001\u6309\u94AE\u7EA7\u6743\u9650\u901A\u8FC7 directive \u5B9E\u73B0\uFF0C\u5E76\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u89E3\u51B3\u4E86\u6309\u94AE\u8FC7\u591A\u5F15\u53D1\u7684\u9891\u7E41\u62C9\u53D6\u6743\u9650\u7684 HTTP \u8BF7\u6C42
3. \u6839\u636E\u6743\u9650\u83DC\u5355\u7684\u7EA7\u8054\u5173\u7CFB\u5BF9\u6743\u9650\u7801\u7ED3\u6784\u8FDB\u884C\u6539\u9020\uFF0C\u5E76\u4F7F\u7528 Tree \u7EC4\u4EF6\u6E32\u67D3\u6811\u5F62\u7ED3\u6784\u6743\u9650\u5217\u8868\uFF0C\u63D0\u5347\u53EF\u8BFB\u6027
4. \u4F7F\u7528 ECharts \u53EF\u89C6\u5316\u6E32\u67D3\u5E97\u94FA\u5546\u54C1\u9500\u552E\u5360\u6BD4\u3001\u8FD1\u51E0\u4E2A\u6708\u6536\u652F\u3001\u4F1A\u5458\u8D2D\u4E70\u5546\u54C1\u6240\u5360\u4EFD\u989D\u56FE\u8868
5. \u5BF9\u4E8E\u8868\u683C\u4E2D\u6240\u6709\u7684\u6A21\u7CCA\u67E5\u8BE2\uFF0C\u90FD\u4F7F\u7528\u4E86\u8282\u6D41\u8FDB\u884C\u4F18\u5316\uFF0C\u5C3D\u91CF\u51CF\u8F7B\u670D\u52A1\u5668\u7684\u538B\u529B

## icon:user \u81EA\u6211\u8BC4\u4EF7
1. \u672C\u4EBA\u70ED\u5FC3\u8BDA\u6073\u3001\u4E50\u89C2\u5411\u4E0A\uFF0C\u6709\u826F\u597D\u7684\u601D\u60F3\u54C1\u5FB7\u548C\u804C\u4E1A\u7D20\u8D28\uFF0C\u5DE5\u4F5C\u8BA4\u771F\u8D1F\u8D23\uFF0C\u7231\u597D\u662F\u770B\u7F8E\u5973\u3002
2. \u901A\u8FC7\u5728\u5B66\u751F\u4F1A\u4EFB\u804C\u7684\u7ECF\u5386\uFF0C\u953B\u70BC\u51FA\u4E86\u826F\u597D\u7684\u7EC4\u7EC7\u534F\u8C03\u80FD\u529B\uFF0C\u5584\u4E8E\u8C03\u52A8\u56E2\u961F\u6210\u5458\u7684\u5DE5\u4F5C\u70ED\u60C5\u4E0E\u79EF\u6781\u6027\u3002
3. \u4E30\u5BCC\u7684\u5728\u5916\u517C\u804C\u7ECF\u5386\u4F7F\u81EA\u5DF1\u62E5\u6709\u8F83\u5F3A\u7684\u4EB2\u548C\u529B\u4E0E\u8D23\u4EFB\u5FC3\uFF0C\u5E76\u6709\u826F\u597D\u7684\u56E2\u961F\u534F\u4F5C\u548C\u656C\u4E1A\u7CBE\u795E\u3002`,S8={name:"\u7B80\u7EA6\u901A\u7528\u7B80\u5386\u6A21\u677F",primaryColor:"#2A2D2D",primaryBackground:"#F98C07",img:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c056ae97ac643549ecb966950529119~tplv-k3u1fbpfcp-watermark.image?",content:k8},w8=Object.freeze(Object.defineProperty({__proto__:null,default:S8},Symbol.toStringTag,{value:"Module"})),L8=`::: headStart
::: start
## \u5C0F\u65B0 **\u5927\u6570\u636E\u5F00\u53D1\u5DE5\u7A0B\u5E08**
::: start
icon:city \u6D59\u6C5F\u676D\u5DDE
icon:user \u7537 / 2000.01.01
:::
icon:phone 155xxxxxx06
icon:email [example@163.com](xxxxxxxx@163.com)
:::
icon:gitee [https://gitee.com/codeleilei](https://gitee.com/codeleilei)
icon:github [https://github.com/acmenlei](https://github.com/acmenlei)
::: end
:::
![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)
::: end
::: headEnd

## icon:user \u6559\u80B2\u7ECF\u5386 Education Experience
::: start
- **\u6E05\u534E\u5927\u5B66 - \u4FE1\u606F\u5DE5\u7A0B\u5B66\u9662 - \u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F**
:::
**2019-09-01 \u81F3 2023-07-01**
::: end
- GPA\uFF1A4.0 / \u4E13\u4E1ATop 1

## icon:technology \u4E13\u4E1A\u6280\u80FD Professional Skills
- \u719F\u6089 Java \u7F16\u7A0B\u57FA\u7840\uFF0CIO\u64CD\u4F5C\uFF0C\u96C6\u5408\u7B49\u76F8\u5173\u77E5\u8BC6\uFF0C\u4E86\u89E3\u5E38\u89C1\u7684\u8BBE\u8BA1\u6A21\u5F0F\u548C\u8BA1\u7B97\u673A\u57FA\u7840\u76F8\u5173\u77E5\u8BC6\u3002
- \u719F\u6089 Linux \u57FA\u672C\u547D\u4EE4\uFF0C\u5177\u5907\u7F16\u5199\u7B80\u5355\u7684 Shell \u811A\u672C\u7684\u80FD\u529B\u3002
- \u719F\u6089 MySQL \u4E14\u5177\u6709\u7F16\u5199 SQL \u7684\u80FD\u529B\uFF0C\u4E86\u89E3 MySQL \u903B\u8F91\u67B6\u6784\u3001\u7D22\u5F15\u3001\u9501\u3001\u4E8B\u52A1\u7B49\u3002
- \u719F\u6089 HTML\u3001CSS \u5E76\u80FD\u7F16\u5199\u7B26\u5408 W3C \u6807\u51C6\u7684\u9875\u9762\u5E03\u5C40\u4EE5\u53CA\u719F\u6089 JavaScript\u3002
- \u719F\u6089\u5E38\u7528\u6570\u636E\u7ED3\u6784\u5982\u6570\u7EC4\u3001\u94FE\u8868\u3001\u6808\u3001\u961F\u5217\u3001\u4E8C\u53C9\u6811\u7B49\uFF0C\u5BF9\u9012\u5F52\u3001\u52A8\u6001\u89C4\u5212\u3001\u5E38\u7528\u6392\u5E8F\u7B97\u6CD5\u6709\u4E00\u5B9A\u7406\u89E3\u3002
- \u719F\u6089 Hadoop \u751F\u6001\u7684\u5927\u6570\u636E\u5B58\u50A8\u5E73\u53F0\u7684\u642D\u5EFA\u4E0E\u90E8\u7F72\u53CA\u76F8\u5173\u7EC4\u4EF6\uFF08HDFS\u3001Yarm\u3001MapReduce \u7F16\u7A0B\u6A21\u578B\uFF09\u3002
- \u719F\u7EC3 Python \u7F16\u7A0B\u57FA\u7840\uFF0C\u6709 PyhtonWeb\u3001\u722C\u866B\u3001\u6570\u636E\u5206\u6790\u3001\u81EA\u52A8\u5316\u811A\u672C\u3001QT \u7F16\u7A0B\u7B49\u7ECF\u9A8C\u3002
- \u719F\u6089 C++ \u7F16\u7A0B\u57FA\u7840\uFF0C\u6709 C++ \u5C0F\u6E38\u620F\u53CA\u7BA1\u7406\u7CFB\u7EDF\u5F00\u53D1\u7ECF\u9A8C\u3002

## icon:trophy \u5956\u9879\u8363\u8A89 Awards & Honor
- 2021 - 2022\u5E74\u56FD\u5BB6\u52B1\u5FD7\u5956\u5B66\u91D1 / 2019 - 2020\u5E74\u56FD\u5BB6\u5956\u5B66\u91D1
- 2020\u5E74\u5168\u56FD\u9AD8\u7B49\u5B66\u6821\u8BA1\u7B97\u673A\u80FD\u529B\u6311\u6218\u8D5B\u4E00\u7B49\u5956
- 2019\u5E74 CCPC \u5927\u5B66\u751F\u7A0B\u5E8F\u8BBE\u8BA1\u5927\u8D5B\u6C5F\u897F\u533A\u9884\u8D5B\u94F6\u724C
- 2022\u5E74 \u201C\u725B\u903C\u676F\u201D xxxxxx\u5927\u5B66\u4FE1\u606F\u5DE5\u7A0B\u5B66\u9662\u725B\u903C\u4F5C\u54C1\u5927\u8D5B \u4E00\u7B49\u5956

## icon:practice \u5B9E\u4E60\u7ECF\u5386 Intership Experience
- **\u5355\u4F4D\u540D\u79F0**\uFF1Axxxxxxxxx
- **\u5B9E\u4E60\u65F6\u95F4**\uFF1Axxxx.xx - xxxx.xx
- **\u5B9E\u4E60\u5185\u5BB9**\uFF1A\u4F7F\u7528 Python \u8BED\u8A00\u7F16\u5199\u7684 Scrapy \u6846\u67B6\u53CA requests \u7B49\u7B2C\u4E09\u65B9\u5E93\uFF0C\u5BF9\u7F51\u7EDC\u4E0A\u516C\u5F00\u7684\u6570\u636E\u8FDB\u884C\u722C\u53D6\uFF0C\u5E76\u5B58\u50A8\u5230 MySQL \u6570\u636E\u5E93\u4E2D\uFF0C\u518D\u5229\u7528 Java \u53CA Python \u7684\u6570\u636E\u79D1\u5B66\u5E93\u5BF9\u6570\u636E\u8FDB\u884C\u6E05\u6D17\u53CA\u5206\u6790\u7B49\u5185\u5BB9\u3002

## icon:project \u9879\u76EE\u7ECF\u5386 Project Experience
- **\u9879\u76EE\u540D\u79F0**\uFF1A\u963F\u91CC\u5DF4\u5DF4\u8FBE\u6469\u9662\u626B\u5730\u9879\u76EE
- **\u9879\u76EE\u65F6\u95F4**\uFF1A2022.06 - 2022.07
- **\u9879\u76EE\u63CF\u8FF0**\uFF1A\u6559\u522B\u4EBA\u5982\u4F55\u626B\u5730\uFF0C\u5982\u4F55\u626B\u597D\u5730
- **\u9879\u76EE\u6280\u672F\u6808**\uFF1AHadoop\u3001Sqoop\u3001Python\u3001Scrapy\u3001Spark\u3001Hive\u3001MySQL\u3001Flask\u3001ECharts
- **\u6307\u8D23\u63CF\u8FF0**\uFF1A\u8FDB\u884C Hadoop \u5E73\u53F0\u642D\u5EFA\uFF0C\u5229\u7528 Scrapy \u722C\u53D6 QTA \u9152\u5E97\u516C\u5F00\u6570\u636E\u81F3 MySQL \u4E2D\u3002\u5C06\u722C\u53D6\u7684\u6570\u636E\u8FDB\u884C\u6E05\u6D17\u548C\u5206\u6790\u3002\u5C06\u5206\u6790\u597D\u7684\u6570\u636E\u8FDB\u884C\u7EF4\u5EA6\u5EFA\u6A21\u5B58\u5165 MySQL \u4E2D\u3002\u7528 Flask \u540C ECharts \u5C06\u6570\u636E\u8FDB\u884C\u53EF\u89C6\u5316\u5C55\u73B0\u3002
- **\u9879\u76EE\u91CD\u70B9\u6536\u83B7**\uFF1A\u719F\u6089\u4E86 Scrapy \u6846\u67B6\u7684\u4F7F\u7528\uFF0C\u5728 Linux \u73AF\u5883\u4E0B\u8FDB\u884C\u4F5C\u4E1A\uFF0C\u6839\u636E\u6307\u6807\u8FDB\u884C\u7EF4\u5EA6\u5EFA\u6A21\u3002

## icon:user \u81EA\u6211\u8BC4\u4EF7 About me
1. \u672C\u4EBA\u70ED\u5FC3\u8BDA\u6073\u3001\u4E50\u89C2\u5411\u4E0A\uFF0C\u6709\u826F\u597D\u7684\u601D\u60F3\u54C1\u5FB7\u548C\u804C\u4E1A\u7D20\u8D28\uFF0C\u5DE5\u4F5C\u8BA4\u771F\u8D1F\u8D23\uFF0C\u7231\u597D\u662F\u770B\u7F8E\u5973\u3002
2. \u901A\u8FC7\u5728\u5B66\u751F\u4F1A\u4EFB\u804C\u7684\u7ECF\u5386\uFF0C\u953B\u70BC\u51FA\u4E86\u826F\u597D\u7684\u7EC4\u7EC7\u534F\u8C03\u80FD\u529B\uFF0C\u5584\u4E8E\u8C03\u52A8\u56E2\u961F\u6210\u5458\u7684\u5DE5\u4F5C\u70ED\u60C5\u4E0E\u79EF\u6781\u6027\u3002
3. \u4E30\u5BCC\u7684\u5728\u5916\u517C\u804C\u7ECF\u5386\u4F7F\u81EA\u5DF1\u62E5\u6709\u8F83\u5F3A\u7684\u4EB2\u548C\u529B\u4E0E\u8D23\u4EFB\u5FC3\uFF0C\u5E76\u6709\u826F\u597D\u7684\u56E2\u961F\u534F\u4F5C\u548C\u656C\u4E1A\u7CBE\u795E\u3002`,P8={name:"\u901A\u7528\u6A21\u677F",primaryColor:"#333",primaryBackground:"#719ba5",img:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fc39c56be044238ae9b9e79036a029d~tplv-k3u1fbpfcp-watermark.image?",content:L8},M8=Object.freeze(Object.defineProperty({__proto__:null,default:P8},Symbol.toStringTag,{value:"Module"})),T8=`::: start
::: headStart
![\u4E2A\u4EBA\u5934\u50CF](https://codeleilei.gitee.io/blog/avatar.jpg)
## \u72C2\u5F92\u5F20\u4E09 - \u6CD5\u5F8B\u987E\u95EE
### icon:user \u57FA\u672C\u4FE1\u606F
**\u751F\u65E5**\uFF1A2000-08-01
**\u6C11\u65CF**\uFF1A\u6C49
**\u653F\u6CBB\u9762\u8C8C**\uFF1A\u5171\u9752\u56E2\u5458
**\u5A5A\u59FB\u72B6\u51B5**\uFF1A\u672A\u5A5A
**\u7C4D\u8D2F**\uFF1A\u5317\u4EAC
**\u8EAB\u9AD8**\uFF1A172
**\u4F53\u91CD**\uFF1A60kg
### icon:trophy \u83B7\u5956\u8BC1\u4E66
\u96C5\u601D\uFF086.5\u5206\uFF09
\u5927\u5B66\u82F1\u8BED\u56DB\u516D\u7EA7
\u5168\u56FD\u8BA1\u7B97\u673A\u56DB\u7EA7\u8BC1\u4E66
\u6821\u7EA7\u793E\u4F1A\u5B9E\u8DF5\u5148\u8FDB\u4E2A\u4EBA
\u5168\u56FD\u5927\u5B66\u751F\u82F1\u8BED\u5199\u4F5C\u5927\u8D5B\u4F18\u79C0\u5956
\u5168\u56FD\u5927\u5B66\u751F\u201C\u4E92\u8054\u7F51+\u201D\u56FD\u5BB6\u4E00\u7B49\u5956
\u5927\u5B66\u82F1\u8BED\u56DB\u516D\u7EA7
\u5168\u56FD\u8BA1\u7B97\u673A\u56DB\u7EA7\u8BC1\u4E66
\u6821\u7EA7\u793E\u4F1A\u5B9E\u8DF5\u5148\u8FDB\u4E2A\u4EBA
\u5168\u56FD\u5927\u5B66\u751F\u82F1\u8BED\u5199\u4F5C\u5927\u8D5B\u4F18\u79C0\u5956
\u5168\u56FD\u5927\u5B66\u751F\u201C\u4E92\u8054\u7F51+\u201D\u56FD\u5BB6\u4E00\u7B49\u5956
\u5927\u5B66\u82F1\u8BED\u56DB\u516D\u7EA7
\u5168\u56FD\u8BA1\u7B97\u673A\u56DB\u7EA7\u8BC1\u4E66

### icon:douyin \u5174\u8DA3\u7231\u597D
- \u6570\u7801\u79D1\u6280\u4EA7\u54C1 / \u65C5\u6E38 / \u9A91\u884C
- \u6570\u7801\u79D1\u6280\u4EA7\u54C1 / \u65C5\u6E38 / \u9A91\u884C
- \u6570\u7801\u79D1\u6280\u4EA7\u54C1 / \u65C5\u6E38 / \u9A91\u884C
- \u6570\u7801\u79D1\u6280\u4EA7\u54C1 / \u65C5\u6E38 / \u9A91\u884C
- \u6570\u7801\u79D1\u6280\u4EA7\u54C1 / \u65C5\u6E38 / \u9A91\u884C
- \u6570\u7801\u79D1\u6280\u4EA7\u54C1 / \u65C5\u6E38 / \u9A91\u884C
- \u6570\u7801\u79D1\u6280\u4EA7\u54C1 / \u65C5\u6E38 / \u9A91\u884C
- \u6570\u7801\u79D1\u6280\u4EA7\u54C1 / \u65C5\u6E38 / \u9A91\u884C
::: headEnd
:::
## icon:user \u81EA\u6211\u8BC4\u4EF7
\u672C\u4EBA\u4E00\u8D2F\u7231\u5C97\u656C\u4E1A\uFF0C\u63D0\u5021\u56E2\u961F\u534F\u4F5C\u7CBE\u795E\u3002\u5BF9\u5F85\u5DE5\u4F5C\u9996\u5148\u5C31\u8981\u770B\u600E\u6837\u53BB\u770B\u5F85\u8FD9\u4EFD\u5DE5\u4F5C\uFF0C\u662F\u7D2F\u7684\u3001\u82E6\u7684\uFF0C\u80FD\u8E0F\u8E0F\u5B9E\u5B9E\u53BB\u505A\u5C06\u5FC3\u653E\u5165\u8FD9\u4E2A\u7EC4\u7EC7\u5F53\u4E2D\u53BB\u3002\u8981\u505A\u597D\u4E00\u4EF6\u4E8B\uFF0C\u7B54\u5E94\u53BB\u505A\u7684\u4E8B\uFF0C\u90A3\u4E48\u5C31\u8981\u5B88\u4FE1\u53BB\u505A\uFF0C\u4E0D\u7BA1\u505A\u7684\u597D\u4E0D\u597D\u90FD\u80FD\u5982\u5B9E\u8BB2\u51FA\u6765\u3002\u6211\u65F6\u523B\u8981\u6CE8\u610F\u5230\u8FD9\u662F\u4E00\u4E2A\u56E2\u961F\uFF0C\u5B83\u6240\u51DD\u96C6\u7684\u662F\u4E00\u80A1\u5F3A\u5927\u7684\u529B\u91CF\u3002\u56E2\u961F\u5F53\u4E2D\u4E00\u4E2A\u4EBA\u7684\u529B\u91CF\u662F\u975E\u5E38\u5C0F\u7684\uFF0C\u59CB\u7EC8\u79BB\u4E0D\u5F00\u5927\u5BB6\u3002

## icon:school \u6559\u80B2\u80CC\u666F
::: start
**\u9999\u6E2F\u4E2D\u6587\u5927\u5B66**
\u65B0\u80FD\u6E90\u79D1\u5B66\u4E0E\u5DE5\u7A0B\u5B66\u9662 - \u7855\u58EB - GPA\uFF1A3.0 / 5
:::
**2019-2020**
::: end
::: start
**\u5357\u660C\u5927\u5B66**
\u80FD\u6E90\u5DE5\u7A0B\u5B66\u9662 - \u672C\u79D1 - GPA\uFF1A3.0 / 5
:::
**2016-2019**
::: end
\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386\u5199\u4F60\u7684\u5728\u6821\u7ECF\u5386
...
## icon:project \u9879\u76EE\u7ECF\u5386
::: start
**\u667A\u80FD\u6C7D\u8F66\u4E4B\u65E0\u9650\u5145\u7535\u6280\u672F**
:::
**2021-09 \u81F3 20212-07**
::: end
\u4ECE\u4E86\u89E3\u5F53\u4EE3\u53EA\u80FD\u5145\u7535\u6C7D\u8F66\u53D1\u96BE\uFF0C\u53D1\u73B0\u5176\u4F18\u7F3A\u70B9\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u4F18\u5316\u8BBE\u8BA1\uFF0C\u63D0\u51FA\u65B0\u578B\u6539\u8FDB\uFF0C\u4ECE\u4E86\u89E3\u5F53\u4EE3\u53EA\u80FD\u5145\u7535\u6C7D\u8F66\u53D1\u96BE\uFF0C\u53D1\u73B0\u5176\u4F18\u7F3A\u70B9\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u4F18\u5316\u8BBE\u8BA1\uFF0C\u63D0\u51FA\u65B0\u578B\u6539\u8FDB
\u4ECE\u4E86\u89E3\u5F53\u4EE3\u53EA\u80FD\u5145\u7535\u6C7D\u8F66\u53D1\u96BE\uFF0C\u53D1\u73B0\u5176\u4F18\u7F3A\u70B9\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u4F18\u5316\u8BBE\u8BA1\uFF0C\u63D0\u51FA\u65B0\u578B\u6539\u8FDB
::: start
**\u667A\u80FD\u6C7D\u8F66\u4E4B\u65E0\u9650\u5145\u7535\u6280\u672F**
:::
**2021-09 \u81F3 20212-07**
::: end
\u4ECE\u4E86\u89E3\u5F53\u4EE3\u53EA\u80FD\u5145\u7535\u6C7D\u8F66\u53D1\u96BE\uFF0C\u53D1\u73B0\u5176\u4F18\u7F3A\u70B9\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u4F18\u5316\u8BBE\u8BA1\uFF0C\u63D0\u51FA\u65B0\u578B\u6539\u8FDB\uFF0C\u4ECE\u4E86\u89E3\u5F53\u4EE3\u53EA\u80FD\u5145\u7535\u6C7D\u8F66\u53D1\u96BE\uFF0C\u53D1\u73B0\u5176\u4F18\u7F3A\u70B9\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u4F18\u5316\u8BBE\u8BA1\uFF0C\u63D0\u51FA\u65B0\u578B\u6539\u8FDB
\u4ECE\u4E86\u89E3\u5F53\u4EE3\u53EA\u80FD\u5145\u7535\u6C7D\u8F66\u53D1\u96BE\uFF0C\u53D1\u73B0\u5176\u4F18\u7F3A\u70B9\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u4F18\u5316\u8BBE\u8BA1\uFF0C\u63D0\u51FA\u65B0\u578B\u6539\u8FDB

## icon:technology \u4E13\u4E1A\u6280\u80FD
- \u7CBE\u901AHTML/DIV+CSS/Less/Sass\u7B49\u524D\u7AEFweb\u5F00\u53D1\u6280\u672F\uFF0C\u517C\u5BB9\u591A\u79CD\u79FB\u52A8\u7AEF\u3001PC\u7AEF\u6D4F\u89C8\u5668\u7684\u4EE3\u7801\uFF0CCSS3\u65B0\u7279\u6027;
- \u719F\u7EC3\u638C\u63E1js\u3001ES6\u7B49\u65B0\u7279\u6027\uFF0C\u4EE5\u53CAAjax(Fetch)\u3001Json\u3001Axios\u3001\u4EE5\u53CA\u4EE3\u7406\u8DE8\u57DF\u4E0E\u540E\u7AEF\u5B9E\u73B0\u6570\u636E\u4EA4\u4E92;
::: end`,$8={name:"\u5546\u52A1\u7C7B(\u4E00\u9875)",primaryColor:"#111",primaryBackground:"#297370",img:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6554138f3682438ba26038d0a2cae194~tplv-k3u1fbpfcp-watermark.image?",content:T8},j8=Object.freeze(Object.defineProperty({__proto__:null,default:$8},Symbol.toStringTag,{value:"Module"})),uu=new Map;uu.set("create",["#333","#333"]);const cu=[],I8=Object.entries(Object.assign({"./modules/10front_end/index.ts":V0,"./modules/11fresh/index.ts":N0,"./modules/12internet_social/index.ts":H0,"./modules/13geek/index.ts":J0,"./modules/14heading/index.ts":Y0,"./modules/15simple_versatile/index.ts":u8,"./modules/16prominent_content/index.ts":E8,"./modules/17business/index.ts":o8,"./modules/18art/index.ts":C8,"./modules/1internet_avatar/index.ts":r8,"./modules/2concise/index.ts":A8,"./modules/3operation/index.ts":d8,"./modules/4internet/index.ts":_8,"./modules/5graduation_reexam/index.ts":h8,"./modules/6operation_avatar/index.ts":v8,"./modules/7simple_avatar/index.ts":w8,"./modules/8general/index.ts":M8,"./modules/9business/index.ts":j8}));for(const[u,F]of I8){const e=F.default;e.id=Math.ceil(Math.random()*1e9),e.type=u.split("/")[2],cu.push(e),uu.set(e.type,[e.primaryColor,e.primaryBackground])}const gu=u=>+u.type.match(/^\d+/)[0];cu.sort((u,F)=>gu(F)-gu(u));function L7(u){return uu.get(u)[1]}function P7(u){return uu.get(u)[0]}const O8=window.open;async function M7(u){return(await j0(Object.assign({"../templates/modules/10front_end/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-60940168.css"],import.meta.url),"../templates/modules/11fresh/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-007e3c6b.css"],import.meta.url),"../templates/modules/12internet_social/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-c3bcfd4a.css"],import.meta.url),"../templates/modules/13geek/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-82917356.css"],import.meta.url),"../templates/modules/14heading/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-91dac8ed.css"],import.meta.url),"../templates/modules/15simple_versatile/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-787bf56f.css"],import.meta.url),"../templates/modules/16prominent_content/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-2a2af7ad.css"],import.meta.url),"../templates/modules/17business/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-ae7db2fb.css"],import.meta.url),"../templates/modules/18art/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-fd08927f.css"],import.meta.url),"../templates/modules/1internet_avatar/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-d9891c7d.css"],import.meta.url),"../templates/modules/2concise/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-709b23b8.css"],import.meta.url),"../templates/modules/3operation/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-18429e39.css"],import.meta.url),"../templates/modules/4internet/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-1519b6bd.css"],import.meta.url),"../templates/modules/5graduation_reexam/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-fca72c68.css"],import.meta.url),"../templates/modules/6operation_avatar/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-37492530.css"],import.meta.url),"../templates/modules/7simple_avatar/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-2709f35e.css"],import.meta.url),"../templates/modules/8general/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-ad2750e2.css"],import.meta.url),"../templates/modules/9business/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-dd290dd3.css"],import.meta.url),"../templates/modules/create/style.scss":()=>p(()=>Promise.resolve({}),["../css/style-a6288e2d.css"],import.meta.url)}),`../templates/modules/${u}/style.scss`)).default}const T7=u=>{for(const F of cu)if(u===F.type)return F.content;return""},$7={h1:{max:30,min:-15,top:0,tag:"",optimal:0},h2:{max:30,min:-15,top:0,tag:"",optimal:0},h3:{max:20,min:-15,top:0,tag:"",optimal:0},h4:{max:20,min:-15,top:0,tag:"",optimal:0},h5:{max:20,min:-15,top:0,tag:"",optimal:0},h6:{max:20,min:-15,top:0,tag:"",optimal:0},li:{max:10,min:-15,top:0,tag:"",optimal:0},p:{max:10,min:-15,top:0,tag:"",optimal:0}},V8=(u,F)=>u.optimal>F.optimal,ou=(u,F,e)=>[u[F],u[e]]=[u[e],u[F]];class j7{constructor(F){tu(this,"container",[]);tu(this,"cmp",V8);this.cmp=F}push(F){const{container:e,cmp:E}=this;e.push(F);let t=e.length-1;for(;t;){const o=Math.floor((t-1)/2);if(!E(e[t],e[o]))return;ou(e,t,o),t=o}}pop(){const{container:F,cmp:e}=this;if(!F.length)return null;ou(F,0,F.length-1);const E=F.pop(),t=F.length;let o=0,n=o*2+1;for(;n<t;){const B=o*2+2;if(B<t&&e(F[B],F[n])&&(n=B),!e(F[n],F[o]))break;ou(F,n,o),o=n,n=o*2+1}return E}top(){return this.container.length?this.container[0]:null}isEmpty(){return this.container.length===0}}function I7(){return document.createElement("style")}function O7(){return document.createElement("div")}function Q8(u){return document.head.querySelector(`style[${u}]`)}function V7(u){var F;(F=Q8(u))==null||F.remove()}function R8(u){return u.match(/\d+/g).map(e=>parseInt(e))}function Q7(u,F){const{showLoading:e,closeLoading:E}=N8();e("\u6B63\u5728\u5BFC\u51FAPDF \u8BF7\u8010\u5FC3\u7B49\u5F85...");const t=getComputedStyle(F).getPropertyValue("background-color"),[o,n,B]=R8(t);html2canvas(F,{allowTaint:!1,logging:!1,useCORS:!0,scale:4,backgroundColor:t}).then(C=>{var b;const s=new jspdf.jsPDF("p","mm","a4");s.setFillColor(o,n,B),s.rect(0,0,s.internal.pageSize.width,s.internal.pageSize.height,"F");const l=C.getContext("2d"),m=210,g=297,S=Math.floor(g*C.width/m);let w=0;for(;w<C.height;){const L=document.createElement("canvas");L.width=C.width,L.height=Math.min(S,C.height-w),(b=L.getContext("2d"))==null||b.putImageData(l==null?void 0:l.getImageData(0,w,C.width,Math.min(S,C.height-w)),0,0),s.addImage(L.toDataURL("image/jpeg",1),"JPEG",0,0,m,Math.min(g,m*L.height/L.width)),w+=S,C.height-w>1&&(s.addPage(),s.setFillColor(o,n,B),s.rect(0,0,s.internal.pageSize.width,s.internal.pageSize.height,"F"))}s.save(`${u}.pdf`),iu("PDF\u5BFC\u51FA\u6210\u529F")}).catch(C=>{h("\u5BFC\u51FA\u5931\u8D25, "+C)}).finally(E)}function N8(){let u=null;function F(E){u=A5.service({lock:!0,text:E,background:"rgba(0, 0, 0, 0.7)"})}function e(){u&&u.close()}return{showLoading:F,closeLoading:e}}function R7(u=0){const F=document.documentElement||document.body;let e=Math.abs(F.scrollTop-u)/20,E=0,t=-1;const o=e;function n(){E=F.scrollTop;const B=E-u;t==E||B==0||(t=E,window.requestAnimationFrame(function(){if(e=B>0?o:-o,E-=e,Math.abs(B)<o){F.scrollTop=u;return}F.scrollTop=E,Math.abs(B)>0&&n()}))}n()}function z8({node:u,latest:F,uid:e}){var t,o;let E="";if(u.nodeType===Node.ELEMENT_NODE){const n=u.classList,B=u.tagName.toLowerCase();n.contains("flex-layout")?E+=`
::: start
`:n.contains("iconfont")?E+=`icon:${n[1].slice(5)} `:n.contains("head-layout")?E+=`
::: headStart
`:n.contains("main-layout")?E+=`
::: mainStart
`:B==="a"?E+="[":["b","strong"].includes(B)?E+="**":B[0]==="h"?E+="#".repeat(+B[1])+" ":B==="li"?E+=`${((t=u.parentElement)==null?void 0:t.tagName.toLowerCase())=="ul"?"- ":e+". "}`:["td","th"].includes(B)?E+="| ":B==="code"?E+="`":B==="i"&&n[0]!="iconfont"?E+="*":B==="br"&&(E+="&nbsp;");const C=u.childNodes;for(let s=0;s<C.length;s++){const l=C[s].nodeType==C[s].ELEMENT_NODE&&((o=C[s].parentElement)==null?void 0:o.tagName.toLowerCase())=="ol";E+=z8({node:C[s],latest:s===C.length-1,uid:l?++e:0})}if(n.contains("flex-layout"))E+="::: end";else if(n.contains("head-layout"))E+="::: headEnd";else if(n.contains("main-layout"))E+="::: mainEnd";else if(n.contains("flex-layout-item")&&!F)E+=`
:::`;else if(B=="a")E+=`](${u.getAttribute("href")})`;else if(["b","strong"].includes(B))E+="**";else if(B=="img"){const s=u.alt,l=s==null?void 0:s.includes("\u4E2A\u4EBA\u5934\u50CF");E+=`![${l?"\u4E2A\u4EBA\u5934\u50CF":s}](${u.src})`}else B==="tr"?E+="|":["th","td"].includes(B)?E+=" ":B==="code"?E+="`":B==="i"&&n[0]!="iconfont"&&(E+="*");["b","span","strong","a","i","td","th","thead","code","ul","ol"].includes(B)||(E+=`
`)}else{const n=u.textContent||"";E+=n}return E}function U8(u){var B;const F=document.createElement("div");F.innerHTML=u;const e=F.querySelector(".main-layout"),E=e||F,t=Array.from(E.childNodes);let o=null,n=document.createElement("div");for(const C of t)C.nodeType!==Node.TEXT_NODE&&(C.tagName.toLocaleLowerCase()==="h2"?(o&&n.appendChild(o),o=document.createElement("div"),o.className="resume-module",o.appendChild(C)):o?o.appendChild(C):n.appendChild(C));return o&&n.appendChild(o),e&&((B=E.parentNode)==null||B.replaceChild(n,E),n.className="main-layout",n=F),n}function N7(u){return U8(g5(u))}function z7(u){switch(u){case"h1":return"\u4E00\u7EA7\u6807\u9898";case"h2":return"\u4E8C\u7EA7\u6807\u9898";case"h3":return"\u4E09\u7EA7\u6807\u9898";case"h4":return"\u56DB\u7EA7\u6807\u9898";case"h5":return"\u4E94\u7EA7\u6807\u9898";case"h6":return"\u516D\u7EA7\u6807\u9898";case"strong":return"\u5F3A\u8C03/\u52A0\u7C97";case"a":return"\u94FE\u63A5";case"p":return"\u666E\u901A\u6587\u672C";case"li":return"\u5217\u8868\u9879";case"ul":return"\u65E0\u5E8F\u5217\u8868";case"ol":return"\u6709\u5E8F\u5217\u8868";case"resume-module":return"\u6574\u4E2A\u5B50\u6A21\u5757";case"single-code":return"\u4EE3\u7801\u6846";case"head-layout":return"\u4E2A\u4EBA\u4FE1\u606F\u680F";case"main-layout":return"\u4E3B\u4F53\u5185\u5BB9";case"flex-layout":return"\u591A\u5217\u5E03\u5C40";case"flex-layout-item":return"\u591A\u5217\u5E03\u5C40\u9879";case"iconfont":return"\u5B57\u4F53\u56FE\u6807";case"img":return"\u8BC1\u4EF6\u7167/\u56FE\u7247";case"table":return"\u8868\u683C";case"thead":return"\u8868\u5934";case"tr":return"\u8868\u884C";case"th":return"\u8868\u5934\u5355\u5143\u683C";case"tbody":return"\u8868\u683C\u4E3B\u4F53";case"td":return"\u8868\u683C\u6570\u636E\u5355\u5143\u683C"}return u}const Ru=u=>(R("data-v-ff4662e1"),u=u(),N(),u),H8={id:"footer"},q8=Ru(()=>a("i",{class:"iconfont icon-github"},null,-1)),W8=Ru(()=>a("span",{class:"item mr-20 pointer"},[a("i",{class:"iconfont icon-wechat"}),M(" x972761675 ")],-1)),J8=k({__name:"footer",setup(u){return(F,e)=>(r(),A("div",H8,[a("span",{class:"item mr-20 pointer",onClick:e[0]||(e[0]=E=>x(O8)("https://github.com/acmenlei/markdown-resume-to-pdf"))},[q8,M(" Github\u5730\u5740 ")]),W8]))}});const G8=T(J8,[["__scopeId","data-v-ff4662e1"]]),Z8={id:"main"},Y8=k({__name:"main",setup(u){return(F,e)=>{const E=c5,t=Su,o=au("router-view");return r(),A($,null,[["/editor","/home"].includes(F.$route.path)?V("",!0):(r(),y($0,{key:0})),a("div",Z8,[i(t,{placement:"bottom",content:"\u8FD4\u56DE\u9876\u90E8"},{default:D(()=>[i(E,{bottom:100})]),_:1}),i(o,null,{default:D(({Component:n})=>[(r(),y(hu,{max:10,include:"editor,syntax,update,theme,community,communityEditor,communityDetail"},[(r(),y(yu(n)))],1024))]),_:1})]),["/home","/editor"].includes(F.$route.path)?V("",!0):(r(),y(G8,{key:1}))],64)}}});const W=T(Y8,[["__scopeId","data-v-35f97c42"]]),K8={name:"editor",path:"/editor",component:W,children:[{path:"/editor",name:"editor",component:()=>p(()=>import("./editor-2a3119b6.js"),["./editor-2a3119b6.js","./element-plus-57978b99.js","./@vue-f3f56c11.js","./lodash-es-9d35530d.js","./async-validator-604317c1.js","./@vueuse-eb97cd29.js","./@element-plus-009c8a55.js","./dayjs-0e47d17d.js","./aos-80360ef4.js","../css/aos-73168167.css","./@ctrl-aa1b1e70.js","../css/element-plus-a2fee63e.css","./vue-codemirror-f88d3c36.js","./codemirror-cfb2c50d.js","./@codemirror-34447281.js","./@lezer-586a54cf.js","./crelt-049b280e.js","./style-mod-12a05deb.js","./w3c-keyname-f555145d.js","./vue-router-f3610fff.js","./pinia-600a5770.js","./vue-demi-3c8f99f1.js","./picture-verification-code-77c40e50.js","./markdown-transform-html-09900b72.js","./nprogress-6c9d9548.js","../css/nprogress-8b89e2e0.css","../css/editor-2fc4c005.css"],import.meta.url)}]},X8=Object.freeze(Object.defineProperty({__proto__:null,default:K8},Symbol.toStringTag,{value:"Module"})),u7={name:"home",path:"/home",component:W,children:[{path:"/home",name:"home",component:()=>p(()=>import("./home-f93ba160.js"),["./home-f93ba160.js","./element-plus-57978b99.js","./@vue-f3f56c11.js","./lodash-es-9d35530d.js","./async-validator-604317c1.js","./@vueuse-eb97cd29.js","./@element-plus-009c8a55.js","./dayjs-0e47d17d.js","./aos-80360ef4.js","../css/aos-73168167.css","./@ctrl-aa1b1e70.js","../css/element-plus-a2fee63e.css","./typenet-5334c2a0.js","../css/typenet-48adb4ec.css","./pinia-600a5770.js","./vue-demi-3c8f99f1.js","./picture-verification-code-77c40e50.js","./vue-router-f3610fff.js","./markdown-transform-html-09900b72.js","./nprogress-6c9d9548.js","../css/nprogress-8b89e2e0.css","../css/home-286d625d.css"],import.meta.url)}]},F7=Object.freeze(Object.defineProperty({__proto__:null,default:u7},Symbol.toStringTag,{value:"Module"})),e7={name:"syntax",path:"/syntax",component:W,children:[{path:"/syntax/helper",name:"syntaxHelper",component:()=>p(()=>import("./syntax-9cc9172b.js"),["./syntax-9cc9172b.js","./@vueuse-eb97cd29.js","./@vue-f3f56c11.js","./aos-80360ef4.js","../css/aos-73168167.css","./element-plus-57978b99.js","./lodash-es-9d35530d.js","./async-validator-604317c1.js","./@element-plus-009c8a55.js","./dayjs-0e47d17d.js","./@ctrl-aa1b1e70.js","../css/element-plus-a2fee63e.css","./pinia-600a5770.js","./vue-demi-3c8f99f1.js","./picture-verification-code-77c40e50.js","./vue-router-f3610fff.js","./markdown-transform-html-09900b72.js","./nprogress-6c9d9548.js","../css/nprogress-8b89e2e0.css","../css/syntax-e8b16f4a.css"],import.meta.url)}]},E7=Object.freeze(Object.defineProperty({__proto__:null,default:e7},Symbol.toStringTag,{value:"Module"})),t7={name:"template",path:"/template",component:W,children:[{path:"/template",name:"template",component:()=>p(()=>import("./template-d9053592.js"),["./template-d9053592.js","./vue-router-f3610fff.js","./@vue-f3f56c11.js","./aos-80360ef4.js","../css/aos-73168167.css","./element-plus-57978b99.js","./lodash-es-9d35530d.js","./async-validator-604317c1.js","./@vueuse-eb97cd29.js","./@element-plus-009c8a55.js","./dayjs-0e47d17d.js","./@ctrl-aa1b1e70.js","../css/element-plus-a2fee63e.css","./pinia-600a5770.js","./vue-demi-3c8f99f1.js","./picture-verification-code-77c40e50.js","./markdown-transform-html-09900b72.js","./nprogress-6c9d9548.js","../css/nprogress-8b89e2e0.css","../css/template-c4a206fd.css"],import.meta.url)}]},x7=Object.freeze(Object.defineProperty({__proto__:null,default:t7},Symbol.toStringTag,{value:"Module"})),o7={name:"update",path:"/update",component:W,children:[{path:"/update/line",name:"updateLine",component:()=>p(()=>import("./update-0b664e0f.js"),["./update-0b664e0f.js","./element-plus-57978b99.js","./@vue-f3f56c11.js","./lodash-es-9d35530d.js","./async-validator-604317c1.js","./@vueuse-eb97cd29.js","./@element-plus-009c8a55.js","./dayjs-0e47d17d.js","./aos-80360ef4.js","../css/aos-73168167.css","./@ctrl-aa1b1e70.js","../css/element-plus-a2fee63e.css","./pinia-600a5770.js","./vue-demi-3c8f99f1.js","./picture-verification-code-77c40e50.js","./vue-router-f3610fff.js","./markdown-transform-html-09900b72.js","./nprogress-6c9d9548.js","../css/nprogress-8b89e2e0.css","../css/update-6339f9ae.css"],import.meta.url)}]},n7=Object.freeze(Object.defineProperty({__proto__:null,default:o7},Symbol.toStringTag,{value:"Module"})),nu=Object.assign({"./modules/editor.ts":X8,"./modules/home.ts":F7,"./modules/syntax.ts":E7,"./modules/template.ts":x7,"./modules/update.ts":n7}),Nu=[];Object.keys(nu).forEach(u=>{nu[u].default&&Nu.push(nu[u].default)});const a7=[{path:"/",redirect:"/home"},{path:"/download",name:"download",component:()=>p(()=>import("./index-cb866c1c.js"),["./index-cb866c1c.js","./vue-router-f3610fff.js","./@vue-f3f56c11.js","./aos-80360ef4.js","../css/aos-73168167.css","./element-plus-57978b99.js","./lodash-es-9d35530d.js","./async-validator-604317c1.js","./@vueuse-eb97cd29.js","./@element-plus-009c8a55.js","./dayjs-0e47d17d.js","./@ctrl-aa1b1e70.js","../css/element-plus-a2fee63e.css","./pinia-600a5770.js","./vue-demi-3c8f99f1.js","./picture-verification-code-77c40e50.js","./markdown-transform-html-09900b72.js","./nprogress-6c9d9548.js","../css/nprogress-8b89e2e0.css","../css/index-469696c5.css"],import.meta.url)},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>p(()=>import("./index-42e52b10.js"),["./index-42e52b10.js","./@vue-f3f56c11.js","./aos-80360ef4.js","../css/aos-73168167.css","./element-plus-57978b99.js","./lodash-es-9d35530d.js","./async-validator-604317c1.js","./@vueuse-eb97cd29.js","./@element-plus-009c8a55.js","./dayjs-0e47d17d.js","./@ctrl-aa1b1e70.js","../css/element-plus-a2fee63e.css","./pinia-600a5770.js","./vue-demi-3c8f99f1.js","./picture-verification-code-77c40e50.js","./vue-router-f3610fff.js","./markdown-transform-html-09900b72.js","./nprogress-6c9d9548.js","../css/nprogress-8b89e2e0.css"],import.meta.url)}],C7=["/community/detail","/syntax/helper","/update/line","/home","/editor"],Du=m5({routes:Nu.concat(a7),history:_5(),scrollBehavior:(u,F,e)=>{if(C7.includes(u.path))return{top:0};if(e)return e}});ru.configure({easing:"ease",speed:300});const B7=["/download"];Du.beforeEach((u,F,e)=>{B7.includes(u.path)||ru.start();const E=z(U);if(["/community/editor"].includes(u.path)&&!E){const{loginModelToggle:t}=Q();e({...F}),t();return}e()});Du.afterEach(()=>{ru.done()});e5(h5).use(Du).use(ju).mount("#app");export{z8 as A,G5 as B,cu as C,R7 as D,U6 as E,j7 as H,O6 as N,T as _,G as a,a0 as b,P7 as c,z as d,I7 as e,_u as f,L7 as g,O7 as h,M7 as i,K5 as j,mu as k,z7 as l,T7 as m,k7 as n,$7 as o,ju as p,Q8 as q,V7 as r,iu as s,N7 as t,w7 as u,Q7 as v,O8 as w,h as x,n0 as y,S7 as z};
