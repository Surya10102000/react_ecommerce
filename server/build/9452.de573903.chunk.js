"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[9452],{19452:($,B,s)=>{s.d(B,{ProtectedEditView:()=>J,w:()=>V});var e=s(92132),D=s(21272),C=s(38413),p=s(4198),R=s(83997),K=s(94061),u=s(30893),T=s(90151),n=s(68074),M=s(55356),E=s(85963),a=s(2291),Y=s(54514),G=s(61535),y=s(54894),j=s(17703),g=s(12083),I=s(5516),x=s(38216),v=s(99831),O=s(90431),as=s(15126),rs=s(63299),os=s(67014),_s=s(59080),is=s(79275),Es=s(14718),ds=s(82437),ls=s(5790),Ts=s(35223),Ms=s(5409),Ps=s(74930),Ds=s(2600),Os=s(48940),ms=s(41286),fs=s(51187),cs=s(56336),gs=s(39404),vs=s(58692),hs=s(54257),Ls=s(501),As=s(57646),Cs=s(23120),ps=s(44414),Rs=s(25962),Is=s(14664),Us=s(42588),Ws=s(90325),Bs=s(62785),Ks=s(87443),us=s(41032),ys=s(22957),js=s(93179),xs=s(73055),ks=s(15747),Ss=s(85306),Vs=s(77965),Fs=s(26509),zs=s(84624),Ns=s(71210),$s=s(32058),Ys=s(81185),Gs=s(82261);const Q=g.Ik().shape({name:g.Yj().max(100).required(a.iW.required),description:g.Yj().nullable(),lifespan:g.ai().integer().min(0).nullable().defined(a.iW.required),permissions:g.Yj().required(a.iW.required)}),V=()=>{(0,a.L4)();const{formatMessage:o}=(0,y.A)(),{lockApp:_,unlockApp:h}=(0,a.MA)(),d=(0,a.hN)(),m=(0,j.W6)(),{state:L}=(0,j.zy)(),[r,f]=D.useState(L&&"accessKey"in L.transferToken?{...L.transferToken}:null),{trackUsage:P}=(0,a.z1)(),{setCurrentStep:Z}=(0,a.Cx)(),w=(0,I.j)(i=>i.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:b,canUpdate:q,canRegenerate:ss}}=(0,a.ec)(w),U=(0,j.W5)("/settings/transfer-tokens/:id")?.params?.id,l=U==="create",{_unstableFormatAPIError:W,_unstableFormatValidationErrors:F}=(0,a.wq)();D.useEffect(()=>{P(l?"didAddTokenFromList":"didEditTokenFromList",{tokenType:v.T})},[l,P]);const{data:k,error:S}=(0,x.u)(U,{skip:l||r!==null||!U});D.useEffect(()=>{S&&d({type:"warning",message:W(S)})},[S,W,d]),D.useEffect(()=>{k&&f(k)},[k]);const[es]=(0,x.a)(),[ns]=(0,x.b)(),ts=async(i,c)=>{P(l?"willCreateToken":"willEditToken",{tokenType:v.T}),_();const A=i.permissions.split("-");if((t=>t.length===1?t[0]==="push"||t[0]==="pull":t[0]==="push"&&t[1]==="pull")(A))try{if(l){const t=await es({...i,lifespan:i?.lifespan||null,permissions:A});if("error"in t){(0,I.x)(t.error)&&t.error.name==="ValidationError"?c.setErrors(F(t.error)):d({type:"warning",message:W(t.error)});return}f(t.data),d({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),P("didCreateToken",{type:r?.permissions,tokenType:v.T}),m.push(`/settings/transfer-tokens/${t.data.id}`,{transferToken:t.data}),Z("transferTokens.success")}else{const t=await ns({id:U,name:i.name,description:i.description,permissions:A});if("error"in t){(0,I.x)(t.error)&&t.error.name==="ValidationError"?c.setErrors(F(t.error)):d({type:"warning",message:W(t.error)});return}f(t.data),d({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),P("didEditToken",{type:r?.permissions,tokenType:v.T})}}catch{d({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{h()}},z=q&&!l||b&&l;return!l&&!r?(0,e.jsx)(H,{}):(0,e.jsxs)(C.g,{children:[(0,e.jsx)(a.x7,{name:"Transfer Tokens"}),(0,e.jsx)(G.l1,{validationSchema:Q,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",lifespan:r?.lifespan||null,permissions:r?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(i,c)=>ts(i,c),children:({errors:i,handleChange:c,isSubmitting:A,values:N})=>(0,e.jsxs)(a.lV,{children:[(0,e.jsx)(O.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:r,setToken:f,canEditInputs:z,canRegenerate:ss,isSubmitting:A,regenerateUrl:"/admin/transfer/tokens/"}),(0,e.jsx)(p.s,{children:(0,e.jsxs)(R.s,{direction:"column",alignItems:"stretch",gap:6,children:[r&&Boolean(r?.name)&&"accessKey"in r&&(0,e.jsx)(O.c,{token:r.accessKey,tokenType:v.T}),(0,e.jsx)(X,{errors:i,onChange:c,canEditInputs:z,isCreating:l,values:N,transferToken:r})]})})]})})]})},J=()=>{const o=(0,I.j)(_=>_.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,e.jsx)(a.kz,{permissions:o,children:(0,e.jsx)(V,{})})},X=({errors:o={},onChange:_,canEditInputs:h,isCreating:d,values:m,transferToken:L={}})=>{const{formatMessage:r}=(0,y.A)(),f=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,e.jsx)(K.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(R.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(u.o,{variant:"delta",as:"h2",children:r({id:"global.details",defaultMessage:"Details"})}),(0,e.jsxs)(T.x,{gap:5,children:[(0,e.jsx)(n.E,{col:6,xs:12,children:(0,e.jsx)(O.T,{error:o.name,value:m.name,canEditInputs:h,onChange:_})},"name"),(0,e.jsx)(n.E,{col:6,xs:12,children:(0,e.jsx)(O.a,{error:o.description,value:m.description,canEditInputs:h,onChange:_})},"description"),(0,e.jsx)(n.E,{col:6,xs:12,children:(0,e.jsx)(O.L,{isCreating:d,error:o.lifespan,value:m.lifespan,onChange:_,token:L})},"lifespan"),(0,e.jsx)(n.E,{col:6,xs:12,children:(0,e.jsx)(O.b,{name:"permissions",value:m.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:P=>{_({target:{name:"permissions",value:P}})},options:f,canEditInputs:h})},"permissions")]})]})})},H=({transferTokenName:o})=>{const{formatMessage:_}=(0,y.A)();return(0,a.L4)(),(0,e.jsxs)(C.g,{"aria-busy":"true",children:[(0,e.jsx)(a.x7,{name:"Transfer Tokens"}),(0,e.jsx)(M.Q,{primaryAction:(0,e.jsx)(E.$,{disabled:!0,startIcon:(0,e.jsx)(Y.A,{}),type:"button",size:"L",children:_({id:"global.save",defaultMessage:"Save"})}),title:o||_({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,e.jsx)(p.s,{children:(0,e.jsx)(a.Bl,{})})]})}},38216:($,B,s)=>{s.d(B,{a:()=>R,b:()=>u,c:()=>C,d:()=>K,u:()=>p});var e=s(5516);const D=e.n.injectEndpoints({endpoints:T=>({getTransferTokens:T.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:n=>n.data,providesTags:(n,M)=>[...n?.map(({id:E})=>({type:"TransferToken",id:E}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:T.query({query:n=>`/admin/transfer/tokens/${n}`,transformResponse:n=>n.data,providesTags:(n,M,E)=>[{type:"TransferToken",id:E}]}),createTransferToken:T.mutation({query:n=>({url:"/admin/transfer/tokens",method:"POST",data:n}),transformResponse:n=>n.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:T.mutation({query:n=>({url:`/admin/transfer/tokens/${n}`,method:"DELETE"}),transformResponse:n=>n.data,invalidatesTags:(n,M,E)=>[{type:"TransferToken",id:E}]}),updateTransferToken:T.mutation({query:({id:n,...M})=>({url:`/admin/transfer/tokens/${n}`,method:"PUT",data:M}),transformResponse:n=>n.data,invalidatesTags:(n,M,{id:E})=>[{type:"TransferToken",id:E}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:C,useGetTransferTokenQuery:p,useCreateTransferTokenMutation:R,useDeleteTransferTokenMutation:K,useUpdateTransferTokenMutation:u}=D}}]);
