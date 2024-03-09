"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[5984,9452],{65984:(F,I,s)=>{s.d(I,{ProtectedCreateView:()=>$});var t=s(92132),M=s(2291),m=s(82437),v=s(51835),A=s(19452),g=s(21272),c=s(55151),D=s(79077),_=s(5516),O=s(15126),d=s(63299),a=s(67014),z=s(59080),N=s(79275),y=s(14718),j=s(61535),C=s(5790),U=s(12083),x=s(35223),L=s(5409),l=s(74930),J=s(2600),H=s(48940),Z=s(41286),w=s(51187),b=s(56336),q=s(39404),ss=s(58692),ts=s(54257),_s=s(501),ns=s(57646),as=s(23120),Es=s(44414),os=s(25962),rs=s(14664),es=s(42588),ds=s(90325),is=s(62785),Ps=s(87443),Ms=s(41032),Ds=s(22957),Os=s(93179),ls=s(73055),Ts=s(15747),ms=s(85306),vs=s(77965),As=s(26509),Cs=s(84624),Ls=s(71210),fs=s(32058),Rs=s(81185),Bs=s(82261),Is=s(38216),Us=s(90431);const $=()=>{const G=(0,m.d4)(v.s);return(0,t.jsx)(M.kz,{permissions:G.settings?.["transfer-tokens"].create,children:(0,t.jsx)(A.w,{})})}},19452:(F,I,s)=>{s.d(I,{ProtectedEditView:()=>Ks,w:()=>Y});var t=s(92132),M=s(21272),m=s(38413),v=s(4198),A=s(83997),g=s(94061),c=s(30893),D=s(90151),_=s(68074),O=s(55356),d=s(85963),a=s(2291),z=s(54514),N=s(61535),y=s(54894),j=s(17703),C=s(12083),U=s(5516),x=s(38216),L=s(99831),l=s(90431),J=s(15126),H=s(63299),Z=s(67014),w=s(59080),b=s(79275),q=s(14718),ss=s(82437),ts=s(5790),_s=s(35223),ns=s(5409),as=s(74930),Es=s(2600),os=s(48940),rs=s(41286),es=s(51187),ds=s(56336),is=s(39404),Ps=s(58692),Ms=s(54257),Ds=s(501),Os=s(57646),ls=s(23120),Ts=s(44414),ms=s(25962),vs=s(14664),As=s(42588),Cs=s(90325),Ls=s(62785),fs=s(87443),Rs=s(41032),Bs=s(22957),Is=s(93179),Us=s(73055),$=s(15747),G=s(85306),Fs=s(77965),zs=s(26509),Ns=s(84624),$s=s(71210),Gs=s(32058),Ys=s(81185),ks=s(82261);const Ws=C.Ik().shape({name:C.Yj().max(100).required(a.iW.required),description:C.Yj().nullable(),lifespan:C.ai().integer().min(0).nullable().defined(a.iW.required),permissions:C.Yj().required(a.iW.required)}),Y=()=>{(0,a.L4)();const{formatMessage:o}=(0,y.A)(),{lockApp:r,unlockApp:W}=(0,a.MA)(),i=(0,a.hN)(),f=(0,j.W6)(),{state:K}=(0,j.zy)(),[E,R]=M.useState(K&&"accessKey"in K.transferToken?{...K.transferToken}:null),{trackUsage:T}=(0,a.z1)(),{setCurrentStep:cs}=(0,a.Cx)(),ys=(0,U.j)(e=>e.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:js,canUpdate:xs,canRegenerate:ps}}=(0,a.ec)(ys),p=(0,j.W5)("/settings/transfer-tokens/:id")?.params?.id,P=p==="create",{_unstableFormatAPIError:u,_unstableFormatValidationErrors:k}=(0,a.wq)();M.useEffect(()=>{T(P?"didAddTokenFromList":"didEditTokenFromList",{tokenType:L.T})},[P,T]);const{data:S,error:V}=(0,x.u)(p,{skip:P||E!==null||!p});M.useEffect(()=>{V&&i({type:"warning",message:u(V)})},[V,u,i]),M.useEffect(()=>{S&&R(S)},[S]);const[us]=(0,x.a)(),[Ss]=(0,x.b)(),Vs=async(e,B)=>{T(P?"willCreateToken":"willEditToken",{tokenType:L.T}),r();const h=e.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(h))try{if(P){const n=await us({...e,lifespan:e?.lifespan||null,permissions:h});if("error"in n){(0,U.x)(n.error)&&n.error.name==="ValidationError"?B.setErrors(k(n.error)):i({type:"warning",message:u(n.error)});return}R(n.data),i({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),T("didCreateToken",{type:E?.permissions,tokenType:L.T}),f.push(`/settings/transfer-tokens/${n.data.id}`,{transferToken:n.data}),cs("transferTokens.success")}else{const n=await Ss({id:p,name:e.name,description:e.description,permissions:h});if("error"in n){(0,U.x)(n.error)&&n.error.name==="ValidationError"?B.setErrors(k(n.error)):i({type:"warning",message:u(n.error)});return}R(n.data),i({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),T("didEditToken",{type:E?.permissions,tokenType:L.T})}}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{W()}},Q=xs&&!P||js&&P;return!P&&!E?(0,t.jsx)(gs,{}):(0,t.jsxs)(m.g,{children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(N.l1,{validationSchema:Ws,validateOnChange:!1,initialValues:{name:E?.name||"",description:E?.description||"",lifespan:E?.lifespan||null,permissions:E?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(e,B)=>Vs(e,B),children:({errors:e,handleChange:B,isSubmitting:h,values:X})=>(0,t.jsxs)(a.lV,{children:[(0,t.jsx)(l.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:E,setToken:R,canEditInputs:Q,canRegenerate:ps,isSubmitting:h,regenerateUrl:"/admin/transfer/tokens/"}),(0,t.jsx)(v.s,{children:(0,t.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:6,children:[E&&Boolean(E?.name)&&"accessKey"in E&&(0,t.jsx)(l.c,{token:E.accessKey,tokenType:L.T}),(0,t.jsx)(hs,{errors:e,onChange:B,canEditInputs:Q,isCreating:P,values:X,transferToken:E})]})})]})})]})},Ks=()=>{const o=(0,U.j)(r=>r.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,t.jsx)(a.kz,{permissions:o,children:(0,t.jsx)(Y,{})})},hs=({errors:o={},onChange:r,canEditInputs:W,isCreating:i,values:f,transferToken:K={}})=>{const{formatMessage:E}=(0,y.A)(),R=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,t.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(c.o,{variant:"delta",as:"h2",children:E({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(D.x,{gap:5,children:[(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.T,{error:o.name,value:f.name,canEditInputs:W,onChange:r})},"name"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.a,{error:o.description,value:f.description,canEditInputs:W,onChange:r})},"description"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.L,{isCreating:i,error:o.lifespan,value:f.lifespan,onChange:r,token:K})},"lifespan"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.b,{name:"permissions",value:f.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:T=>{r({target:{name:"permissions",value:T}})},options:R,canEditInputs:W})},"permissions")]})]})})},gs=({transferTokenName:o})=>{const{formatMessage:r}=(0,y.A)();return(0,a.L4)(),(0,t.jsxs)(m.g,{"aria-busy":"true",children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(O.Q,{primaryAction:(0,t.jsx)(d.$,{disabled:!0,startIcon:(0,t.jsx)(z.A,{}),type:"button",size:"L",children:r({id:"global.save",defaultMessage:"Save"})}),title:o||r({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,t.jsx)(v.s,{children:(0,t.jsx)(a.Bl,{})})]})}},38216:(F,I,s)=>{s.d(I,{a:()=>A,b:()=>c,c:()=>m,d:()=>g,u:()=>v});var t=s(5516);const M=t.n.injectEndpoints({endpoints:D=>({getTransferTokens:D.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:_=>_.data,providesTags:(_,O)=>[..._?.map(({id:d})=>({type:"TransferToken",id:d}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:D.query({query:_=>`/admin/transfer/tokens/${_}`,transformResponse:_=>_.data,providesTags:(_,O,d)=>[{type:"TransferToken",id:d}]}),createTransferToken:D.mutation({query:_=>({url:"/admin/transfer/tokens",method:"POST",data:_}),transformResponse:_=>_.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:D.mutation({query:_=>({url:`/admin/transfer/tokens/${_}`,method:"DELETE"}),transformResponse:_=>_.data,invalidatesTags:(_,O,d)=>[{type:"TransferToken",id:d}]}),updateTransferToken:D.mutation({query:({id:_,...O})=>({url:`/admin/transfer/tokens/${_}`,method:"PUT",data:O}),transformResponse:_=>_.data,invalidatesTags:(_,O,{id:d})=>[{type:"TransferToken",id:d}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:m,useGetTransferTokenQuery:v,useCreateTransferTokenMutation:A,useDeleteTransferTokenMutation:g,useUpdateTransferTokenMutation:c}=M}}]);
