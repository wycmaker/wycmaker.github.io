"use strict";(self["webpackChunktemplate"]=self["webpackChunktemplate"]||[]).push([[845],{4845:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var o=n(3396),a=n(7139);const l={class:"card-header"},i={style:{"text-align":"center"}},s={style:{display:"inline"}};function c(e,t,n,c,r,_){const d=(0,o.up)("el-card"),u=(0,o.up)("el-scrollbar"),g=(0,o.Q2)("loading");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{class:(0,a.C_)(e.$style.content)},[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,a.C_)(e.$style.stock)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.stockObj,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:(0,a.C_)(e.$style["stock-col"])},[(0,o.Wm)(d,{class:(0,a.C_)(e.$style.card)},{header:(0,o.w5)((()=>[(0,o._)("div",l,[(0,o._)("span",null,(0,a.zw)(t.name)+"  "+(0,a.zw)(t.stock),1)])])),default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o._)("p",{class:(0,a.C_)([e.$style["stock-price"],t.sub>0?e.$style.up:null,t.sub<0?e.$style.down:null])},(0,a.zw)(t.price),3)]),(0,o._)("div",s,[(0,o._)("div",{style:{display:"inline-block",width:"50%","text-align":"left","margin-top":"10px"},class:(0,a.C_)([t.sub>0?e.$style.up:null,t.sub<0?e.$style.down:null])},[(0,o._)("p",null,(0,a.zw)(t.sub),1)],2),(0,o._)("div",{style:{display:"inline-block",width:"50%","text-align":"right","margin-top":"10px"},class:(0,a.C_)([t.sub>0?e.$style.up:null,t.sub<0?e.$style.down:null])},[(0,o._)("p",null,(0,a.zw)(t.trend)+"%",1)],2)])])),_:2},1032,["class"])],2)))),128))],2)])),_:1})],2)),[[g,e.loading]])}var r=n(6265),_=n.n(r),d={setup(){let e=ref(!1);const t=reactive([]);let n,o=new Date((new Date).toString("/")+" 09:00:00").getTime(),a=new Date((new Date).toString("/")+" 13:30:00").getTime();const l="https://script.google.com/macros/s/AKfycbwBUzlpnR4UntyoBJe6CgkLF-HVB_Ja95U7dy2SKzkhk318hWxceHWb-LaYuTzsN8eT1Q/exec",i=()=>{t.forEach((e=>{s(e.stock)})),e.value=!1},s=e=>{_().get(`https://ws.api.cnyes.com/ws/api/v1/quote/quotes/TWS:${e}:STOCK?column=I`).then((n=>{if(null!==n.data){const o=n.data.data[0];t.forEach((t=>{if(t.stock===e){t.price=o["6"].toFixed(2),t.yesterday=o["21"].toFixed(2);const e=1e3*parseInt(o["200007"]);t.updateDateTime=new Date(e).standardTime(),t.name=o["200009"],t.nowDateTime=(new Date).standardTime(),t.sub=(Math.round(100*(t.price-t.yesterday))/100).toFixed(2),t.sub>0?t.trend=(Math.round(1e4*(t.price/t.yesterday-1))/100).toFixed(2):0===t.sub?t.trend=(0).toFixed(2):t.trend=(Math.round(1e4*(1-Math.round(t.price/t.yesterday*1e4)/1e4))/100).toFixed(2)}}))}})).catch((e=>console.log(e))).finally((e=>{let t=(new Date).getTime(),o=new Date((new Date).toString("/")+" 13:30:00").getTime();t>o&&clearInterval(n)}))},c=async()=>{const n=await _().get(l,{params:{type:2,stockType:1}});if(e.value=!0,n)try{const{data:e}=n;e.forEach((e=>{t.push({stock:e})}))}catch{console.log("執行錯誤"),e.value=!1}};return onMounted((async()=>{await c();let e=(new Date).getTime();i(),e>=o&&e<=a&&(n=setInterval(i,5e3))})),{stockObj:t}}},u={content:"Login_content_n60Pl",form:"Login_form_NAqfS","form-info":"Login_form-info_nIWqg",center:"Login_center_j0cHo",query:"Login_query_KDPYC","query-item":"Login_query-item_XzYfy","btn-A":"Login_btn-A_C8aNW","btn-B":"Login_btn-B_jFMnz","btn-C":"Login_btn-C_pzcqi","btn-D":"Login_btn-D_l0fLv","btn-E":"Login_btn-E_sufx9",dialog:"Login_dialog_BK6VG","dialog-title":"Login_dialog-title_lOLOb","dialog-B":"Login_dialog-B_zCQ0J","table-A":"Login_table-A_o1oc9","table-B":"Login_table-B_eRKJI","table-C":"Login_table-C_s2Utq",comment:"Login_comment_ZduHS",popper:"Login_popper_Xd_qK","popper-icon":"Login_popper-icon_IFadH",stock:"Login_stock_HhmR8","stock-col":"Login_stock-col_Q9a4k","stock-price":"Login_stock-price_dRr8O",up:"Login_up_eDckq",down:"Login_down_dQ5fj",card:"Login_card_qAaeK"},g=n(89);const p={};p["$style"]=u;const y=(0,g.Z)(d,[["render",c],["__cssModules",p]]);var w=y}}]);