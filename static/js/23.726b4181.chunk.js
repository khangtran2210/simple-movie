"use strict";(self.webpackChunksimple_movie=self.webpackChunksimple_movie||[]).push([[23],{3258:function(e,n,t){t.r(n);var r=t(2791),i=t(7092),o=t(1281),s=(t(2532),t(4432),t(6871)),l=t(9434),a=t(7209),c=t(804),u=t(184);function d(e){var n=e.item,t=(0,s.s0)(),r=n.title,i=n.backdrop_path,o=n.genre_ids,a=n.id,c=[],d=(0,l.v9)((function(e){return e.genreAPI.genres}))||[];return d.length>0&&(c=d.filter((function(e){return o.includes(e.id)}))),(0,u.jsxs)("div",{className:"relative w-full h-full ",children:[(0,u.jsx)("div",{className:"overlay absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.7)] rounded-lg"}),(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(i),alt:"",className:"object-cover w-full h-full rounded-lg"}),(0,u.jsxs)("div",{className:"absolute w-full text-white content left-5 bottom-5",children:[(0,u.jsx)("h2",{className:"mb-3 text-4xl font-bold cursor-pointer",onClick:function(){return t("/movies/".concat(a))},children:r}),(0,u.jsx)("div",{className:"flex items-center mb-8 gap-x-3",children:c.length>0&&c.map((function(e){return(0,u.jsx)("span",{className:"px-4 py-1 border border-white rounded-md cursor-pointer",children:e.name},e.id)}))}),(0,u.jsx)("button",{className:"px-6 py-3 mb-3 font-bold rounded-lg bg-primary hover:opacity-80",onClick:function(){return t("/movies/".concat(a))},children:"Watch Now"})]})]})}n.default=function(){var e=(0,l.v9)((function(e){return e.movieAPI.upcoming_movies})),n=(0,l.I0)();(0,r.useEffect)((function(){n((0,c.JZ)()),n((0,a.yB)()),document.title="Home Page"}),[n]);var t=e||[];return(0,u.jsx)("section",{className:"h-[40rem] mb-5 banner page-container overflow-hidden rounded-lg",children:(0,u.jsx)(i.tq,{grabCursor:!1,navigation:!0,modules:[o.W_],slidesPerView:"auto",children:t.length>0&&t.map((function(e){return(0,u.jsx)(i.o5,{children:(0,u.jsx)(d,{item:e})},e.id)}))})})}}}]);
//# sourceMappingURL=23.726b4181.chunk.js.map