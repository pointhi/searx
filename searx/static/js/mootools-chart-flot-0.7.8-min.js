var flot={};(function(c){function b(P,B,C,e){var q=[],L={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],timeZoneCorrect:true,legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:0.85},xaxis:{position:"bottom",mode:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:false,multipleSeriesEvent:null,swipeLine:null,},yaxis:{autoscaleMargin:0.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false},shadowSize:3},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,labelMargin:5,axisMargin:8,borderWidth:2,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},hooks:{}},r=null,ao=null,ap=null,D=null,ay=null,ar=[],V=[],J={left:0,right:0,top:0,bottom:0},ak=0,t=0,j=0,ad=0,n={processOptions:[],processRawData:[],processDatapoints:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[]},f=this;f.setData=K;f.setupGrid=O;f.draw=aw;f.getPlaceholder=function(){return P};f.getCanvas=function(){return r};f.getPlotOffset=function(){return J};f.width=function(){return j};f.height=function(){return ad};f.offset=function(){var az=ap[0].getCoordinates();az.left+=J.left;az.top+=J.top;return az};f.getData=function(){return q};f.getAxis=function(aA,aB){var az=(aA==x?ar:V)[aB-1];if(az&&!az.used){az=null}return az};f.getAxes=function(){var aA={},az;for(az=0;az<ar.length;++az){aA["x"+(az?(az+1):"")+"axis"]=ar[az]||{}}for(az=0;az<V.length;++az){aA["y"+(az?(az+1):"")+"axis"]=V[az]||{}}if(!aA.x2axis){aA.x2axis={n:2}}if(!aA.y2axis){aA.y2axis={n:2}}return aA};f.getXAxes=function(){return ar};f.getYAxes=function(){return V};f.getUsedAxes=aa;f.c2p=X;f.p2c=Q;f.getOptions=function(){return L};f.highlight=aq;f.unhighlight=aj;f.triggerRedrawOverlay=W;f.pointOffset=function(az){return{left:parseInt(ar[y(az,"x")-1].p2c(+az.x)+J.left),top:parseInt(V[y(az,"y")-1].p2c(+az.y)+J.top)}};f.hooks=n;G(f);Z(C);H();K(B);O();aw();av();function E(aB,az){az=[f].concat(az);for(var aA=0;aA<aB.length;++aA){aB[aA].apply(this,az)}}function G(){for(var az=0;az<e.length;++az){var aA=e[az];aA.init(f);if(aA.options){Object.merge(L,aA.options)}}}function Z(aA){var az;Object.merge(L,aA);if(L.xaxis.color==null){L.xaxis.color=L.grid.color}if(L.yaxis.color==null){L.yaxis.color=L.grid.color}if(L.xaxis.tickColor==null){L.xaxis.tickColor=L.grid.tickColor}if(L.yaxis.tickColor==null){L.yaxis.tickColor=L.grid.tickColor}if(L.grid.borderColor==null){L.grid.borderColor=L.grid.color}if(L.grid.tickColor==null){L.grid.tickColor="rgba("+new Color("#fff")+",.22)"}if(!L.xaxes||ar.length===0){L.xaxes=[{}]}if(!L.yaxes||V.length===0){L.yaxes=[{}]}for(az=0;az<Math.max(1,L.xaxes.length);++az){L.xaxes[az]=Object.merge({},L.xaxis,L.xaxes[az])}for(az=0;az<Math.max(1,L.yaxes.length);++az){L.yaxes[az]=Object.merge({},L.yaxis,L.yaxes[az])}if(L.xaxis.noTicks&&L.xaxis.ticks==null){L.xaxis.ticks=L.xaxis.noTicks}if(L.yaxis.noTicks&&L.yaxis.ticks==null){L.yaxis.ticks=L.yaxis.noTicks}if(L.x2axis){L.x2axis.position="top";L.xaxes[1]=L.x2axis}if(L.y2axis){if(L.y2axis.autoscaleMargin===undefined){L.y2axis.autoscaleMargin=0.02}L.y2axis.position="right";L.yaxes[1]=L.y2axis}if(L.grid.coloredAreas){L.grid.markings=L.grid.coloredAreas}if(L.grid.coloredAreasColor){L.grid.markingsColor=L.grid.coloredAreasColor}if(L.lines){Object.merge(L.series.lines,L.lines)}if(L.points){Object.merge(L.series.points,L.points)}if(L.bars){Object.extend(L.series.bars,L.bars)}if(L.shadowSize){L.series.shadowSize=L.shadowSize}for(az=0;az<L.xaxes.length;++az){M(ar,az+1).options=L.xaxes[az]}for(az=0;az<L.yaxes.length;++az){M(V,az+1).options=L.yaxes[az]}for(var aB in n){if(L.hooks[aB]&&L.hooks[aB].length){n[aB]=n[aB].concat(L.hooks[aB])}}E(n.processOptions,[L])}function K(az){q=o(az);z();R()}function o(aC){var aA=[];for(var az=0;az<aC.length;++az){var aB=Object.merge({},L.series);if(aC[az].data){aB.data=aC[az].data;delete aC[az].data;Object.merge(aB,aC[az]);aC[az].data=aB.data}else{aB.data=aC[az]}aA.push(aB)}return aA}function y(aA,aB){var az=aA[aB+"axis"];if(typeof az=="object"){az=az.n}if(typeof az!="number"){az=1}return az}function X(aC){var aA={},az,aB;for(az=0;az<ar.length;++az){aB=ar[az];if(aB&&aB.used){aA["x"+aB.n]=aB.c2p(aC.left)}}for(az=0;az<V.length;++az){aB=V[az];if(aB&&aB.used){aA["y"+aB.n]=aB.c2p(aC.top)}}if(aA.x1!==undefined){aA.x=aA.x1}if(aA.y1!==undefined){aA.y=aA.y1}return aA}function Q(aD){var aB={},aA,aC,az;for(aA=0;aA<ar.length;++aA){aC=ar[aA];if(aC&&aC.used){az="x"+aC.n;if(aD[az]==null&&aC.n==1){az="x"}if(aD[az]!=null){aB.left=aC.p2c(aD[az]);break}}}for(aA=0;aA<V.length;++aA){aC=V[aA];if(aC&&aC.used){az="y"+aC.n;if(aD[az]==null&&aC.n==1){az="y"}if(aD[az]!=null){aB.top=aC.p2c(aD[az]);break}}}return aB}function aa(){var aA=[],az,aB;for(az=0;az<ar.length;++az){aB=ar[az];if(aB&&aB.used){aA.push(aB)}}for(az=0;az<V.length;++az){aB=V[az];if(aB&&aB.used){aA.push(aB)}}return aA}function M(aA,az){if(!aA[az-1]){aA[az-1]={n:az,direction:aA==ar?"x":"y",options:Object.merge({},aA==ar?L.xaxis:L.yaxis)}}return aA[az-1]}function z(){var aE;var aK=q.length,az=[],aC=[];for(aE=0;aE<q.length;++aE){var aH=q[aE].color;if(aH!=null){--aK;if(typeof aH=="number"){aC.push(aH)}else{az.push("rgb("+new Color(q[aE].color)+")")}}}for(aE=0;aE<aC.length;++aE){aK=Math.max(aK,aC[aE]+1)}var aA=[],aD=0;aE=0;while(aA.length<aK){var aG;if(L.colors.length==aE){aG=new Color([100,100,100])}else{aG=new Color(L.colors[aE])}var aB=aD%2==1?-1:1;aG.setSaturation(1+aB*Math.ceil(aD/2)*0.2);aA.push("rgb("+aG+")");++aE;if(aE>=L.colors.length){aE=0;++aD}}var aF=0,aL;for(aE=0;aE<q.length;++aE){aL=q[aE];if(aL.color==null){aL.color=aA[aF].toString();++aF}else{if(typeof aL.color=="number"){aL.color=aA[aL.color].toString()}}if(aL.lines.show==null){var aJ,aI=true;for(aJ in aL){if(aL[aJ]&&aL[aJ].show){aI=false;break}}if(aI){aL.lines.show=true}}aL.xaxis=M(ar,y(aL,"x"));aL.yaxis=M(V,y(aL,"y"))}}function R(){var aM=Number.POSITIVE_INFINITY,aG=Number.NEGATIVE_INFINITY,aS,aQ,aP,aL,aB,aH,aR,aN,aF,aE,aA,aY,aV,aJ;function az(aZ,a0){if(!aZ){return}aZ.datamin=aM;aZ.datamax=aG;aZ.used=false}function aD(a1,a0,aZ){if(a0<a1.datamin){a1.datamin=a0}if(aZ>a1.datamax){a1.datamax=aZ}}for(aS=0;aS<ar.length;++aS){az(ar[aS])}for(aS=0;aS<V.length;++aS){az(V[aS])}for(aS=0;aS<q.length;++aS){aH=q[aS];aH.datapoints={points:[]};E(n.processRawData,[aH,aH.data,aH.datapoints])}for(aS=0;aS<q.length;++aS){aH=q[aS];var aX=aH.data,aU=aH.datapoints.format;if(!aU){aU=[];aU.push({x:true,number:true,required:true});aU.push({y:true,number:true,required:true});if(aH.bars.show||(aH.lines.show&&aH.lines.fill)){aU.push({y:true,number:true,required:false,defaultValue:0});if(aH.bars.horizontal){delete aU[aU.length-1].y;aU[aU.length-1].x=true}}aH.datapoints.format=aU}if(aH.datapoints.pointsize!=null){continue}aH.datapoints.pointsize=aU.length;aN=aH.datapoints.pointsize;aR=aH.datapoints.points;insertSteps=aH.lines.show&&aH.lines.steps;aH.xaxis.used=aH.yaxis.used=true;for(aQ=aP=0;aQ<aX.length;++aQ,aP+=aN){aJ=aX[aQ];var aC=aJ==null;if(!aC){for(aL=0;aL<aN;++aL){aY=aJ[aL];aV=aU[aL];if(aV){if(aV.number&&aY!=null){aY=+aY;if(isNaN(aY)){aY=null}}if(aY==null){if(aV.required){aC=true}if(aV.defaultValue!=null){aY=aV.defaultValue}}}aR[aP+aL]=aY}}if(aC){for(aL=0;aL<aN;++aL){aY=aR[aP+aL];if(aY!=null){aV=aU[aL];if(aV.x){aD(aH.xaxis,aY,aY)}if(aV.y){aD(aH.yaxis,aY,aY)}}aR[aP+aL]=null}}else{if(insertSteps&&aP>0&&aR[aP-aN]!=null&&aR[aP-aN]!=aR[aP]&&aR[aP-aN+1]!=aR[aP+1]){for(aL=0;aL<aN;++aL){aR[aP+aN+aL]=aR[aP+aL]}aR[aP+1]=aR[aP-aN+1];aP+=aN}}}}for(aS=0;aS<q.length;++aS){aH=q[aS];E(n.processDatapoints,[aH,aH.datapoints])}for(aS=0;aS<q.length;++aS){aH=q[aS];aR=aH.datapoints.points,aN=aH.datapoints.pointsize;var aI=aM,aO=aM,aK=aG,aT=aG;for(aQ=0;aQ<aR.length;aQ+=aN){if(aR[aQ]==null){continue}for(aL=0;aL<aN;++aL){aY=aR[aQ+aL];aV=aU[aL];if(!aV){continue}if(aV.x){if(aY<aI){aI=aY}if(aY>aK){aK=aY}}if(aV.y){if(aY<aO){aO=aY}if(aY>aT){aT=aY}}}}if(aH.bars.show){var aW=aH.bars.align=="left"?0:-aH.bars.barWidth/2;if(aH.bars.horizontal){aO+=aW;aT+=aW+aH.bars.barWidth}else{aI+=aW;aK+=aW+aH.bars.barWidth}}aD(aH.xaxis,aI,aK);aD(aH.yaxis,aO,aT)}aa().each(function(a0,aZ){if(a0.datamin==aM){a0.datamin=null}if(a0.datamax==aG){a0.datamax=null}})}function H(){function az(aB,aA){var aC=document.createElement("canvas");aC.width=aB;aC.height=aA;if(!aC.getContext){aC=window.G_vmlCanvasManager.initElement(aC)}return aC}ak=P.getSize().x||parseInt(P.getStyle("width"));t=P.getSize().y||parseInt(P.getStyle("height"));P.set("html","");if(P.getStyle("position")=="static"){P.getStyle("position","relative")}if(ak<=0||t<=0){throw"Invalid dimensions for plot, width = "+ak+", height = "+t}if(window.G_vmlCanvasManager){window.G_vmlCanvasManager.init_(document)}r=az(ak,t).inject(P);D=r.getContext("2d");ao=az(ak,t).setStyles({position:"absolute",left:0,top:0}).inject(P);ay=ao.getContext("2d");ay.stroke()}function av(){ap=$$([ao,r]);if(L.grid.hoverable){P.addEvent("mousemove",d)}if(L.grid.clickable){P.addEvent("click",I)}E(n.bindEvents,P)}function m(aE){function aA(aF){return aF}var aD,az,aB=aE.options.transform||aA,aC=aE.options.inverseTransform;if(aE.direction=="x"){aD=aE.scale=j/(aB(aE.max)-aB(aE.min));az=aB(aE.min);if(aB==aA){aE.p2c=function(aF){return(aF-az)*aD}}else{aE.p2c=function(aF){return(aB(aF)-az)*aD}}if(!aC){aE.c2p=function(aF){return az+aF/aD}}else{aE.c2p=function(aF){return aC(az+aF/aD)}}}else{aD=aE.scale=ad/(aB(aE.max)-aB(aE.min));az=aB(aE.max);if(aB==aA){aE.p2c=function(aF){return(az-aF)*aD}}else{aE.p2c=function(aF){return(az-aB(aF))*aD}}if(!aC){aE.c2p=function(aF){return az-aF/aD}}else{aE.c2p=function(aF){return aC(az-aF/aD)}}}}function Y(aB){if(!aB){return}var az=aB.options,aD,aH=aB.ticks||[],aG=[],aC,aI=az.labelWidth,aE=az.labelHeight,aA;function aF(aK,aJ){return new Element("div",{styles:{position:"absolute",top:-10000,width:aJ,"font-size":"smaller"}}).adopt(new Element("div."+aB.direction+"Axis "+aB.direction+aB.n+"Axis",{html:aK.join("")})).inject(P)}if(aB.direction=="x"){if(aI==null){aI=Math.floor(ak/(aH.length>0?aH.length:1))}if(aE==null){aG=[];for(aD=0;aD<aH.length;++aD){aC=aH[aD].label;if(aC){aG.push('<div class="tickLabel" style="float:left;width:'+aI+'px">'+aC+"</div>")}}if(aG.length>0){aG.push('<div style="clear:left"></div>');aA=aF(aG,10000);aE=aA.getSize().y||parseInt(aA.getStyle("height"));aA.destroy()}}}else{if(aI==null||aE==null){for(aD=0;aD<aH.length;++aD){aC=aH[aD].label;if(aC){aG.push('<div class="tickLabel">'+aC+"</div>")}}if(aG.length>0){aA=aF(aG);if(aI==null){aI=aA.getChildren()[0].getSize().x}if(aE==null){aE=aA.getElement("div.tickLabel").getSize().y}aA.destroy()}}}if(aI==null){aI=0}if(aE==null){aE=0}aB.labelWidth=aI;aB.labelHeight=aE}function ab(aB){if(!aB||(!aB.used&&!(aB.labelWidth||aB.labelHeight))){return}var aA=aB.labelWidth,aJ=aB.labelHeight,aF=aB.options.position,aD=aB.options.tickLength,aE=L.grid.axisMargin,aH=L.grid.labelMargin,aI=aB.direction=="x"?ar:V,aC;var az=aI.filter(function(aL){return aL&&aL.options.position==aF&&(aL.labelHeight||aL.labelWidth)});if(az.indexOf(aB)==az.length-1){aE=0}if(aD==null){aD="full"}var aG=aI.filter(function(aL){return aL&&(aL.labelHeight||aL.labelWidth)});var aK=aG.indexOf(aB)===0;if(!aK&&aD=="full"){aD=5}if(!isNaN(+aD)){aH+=+aD}if(aB.direction=="x"){aJ+=aH;if(aF=="bottom"){J.bottom+=aJ+aE;aB.box={top:t-J.bottom,height:aJ}}else{aB.box={top:J.top+aE,height:aJ};J.top+=aJ+aE}}else{aA+=aH;if(aF=="left"){aB.box={left:J.left+aE,width:aA};J.left+=aA+aE}else{J.right+=aA+aE;aB.box={left:ak-J.right,width:aA}}}aB.position=aF;aB.tickLength=aD;aB.box.padding=aH;aB.innermost=aK}function ae(az){if(az.direction=="x"){az.box.left=J.left;az.box.width=j}else{az.box.top=J.top;az.box.height=ad}}function O(){var aE=aa(),aB,aA;for(aA=0;aA<aE.length;++aA){l(aE[aA])}J.left=J.right=J.top=J.bottom=0;if(L.grid.show){for(aA=0;aA<aE.length;++aA){au(aE[aA]);U(aE[aA]);s(aE[aA],aE[aA].ticks)}for(aB=0;aB<ar.length;++aB){Y(ar[aB])}for(aB=0;aB<V.length;++aB){Y(V[aB])}for(aB=ar.length-1;aB>=0;--aB){ab(ar[aB])}for(aB=V.length-1;aB>=0;--aB){ab(V[aB])}var aD=0;for(var aC=0;aC<q.length;++aC){aD=Math.max(aD,2*(q[aC].points.radius+q[aC].points.lineWidth/2))}for(var az in J){J[az]+=L.grid.borderWidth;J[az]=Math.max(aD,J[az])}}j=ak-J.left-J.right;ad=t-J.bottom-J.top;for(aA=0;aA<aE.length;++aA){m(aE[aA])}if(L.grid.show){for(aA=0;aA<aE.length;++aA){ae(aE[aA])}ah()}ax()}function l(aC){var aD=aC.options,aB=+(aD.min!=null?aD.min:aC.datamin),az=+(aD.max!=null?aD.max:aC.datamax),aF=az-aB;if(aF==0){var aA=az==0?1:0.01;if(aD.min==null){aB-=aA}if(aD.max==null||aD.min!=null){az+=aA}}else{var aE=aD.autoscaleMargin;if(aE!=null){if(aD.min==null){aB-=aF*aE;if(aB<0&&aC.datamin!=null&&aC.datamin>=0){aB=0}}if(aD.max==null){az+=aF*aE;if(az>0&&aC.datamax!=null&&aC.datamax<=0){az=0}}}}aC.min=aB;aC.max=az}function au(aE){var aK=aE.options;var aF;if(typeof aK.ticks=="number"&&aK.ticks>0){aF=aK.ticks}else{if(aE.direction=="x"){aF=0.3*Math.sqrt(ak)}else{aF=0.3*Math.sqrt(t)}}var aR=(aE.max-aE.min)/aF,aM,az,aL,aP,aQ,aO,aG;if(aK.mode=="time"){var aH={second:1000,minute:60*1000,hour:60*60*1000,day:24*60*60*1000,month:30*24*60*60*1000,year:365.2425*24*60*60*1000};var aI=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[0.25,"month"],[0.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]];var aA=0;if(aK.minTickSize!=null){if(typeof aK.tickSize=="number"){aA=aK.tickSize}else{aA=aK.minTickSize[0]*aH[aK.minTickSize[1]]}}for(var aQ=0;aQ<aI.length-1;++aQ){if(aR<(aI[aQ][0]*aH[aI[aQ][1]]+aI[aQ+1][0]*aH[aI[aQ+1][1]])/2&&aI[aQ][0]*aH[aI[aQ][1]]>=aA){break}}aM=aI[aQ][0];aL=aI[aQ][1];if(aL=="year"){aO=Math.pow(10,Math.floor(Math.log(aR/aH.year)/Math.LN10));aG=(aR/aH.year)/aO;if(aG<1.5){aM=1}else{if(aG<3){aM=2}else{if(aG<7.5){aM=5}else{aM=10}}}aM*=aO}aE.tickSize=aK.tickSize||[aM,aL];az=function(aV){var a0=[],aY=aV.tickSize[0],a1=aV.tickSize[1],aZ=new Date(aV.min);var aU=aY*aH[a1];if(a1=="second"){aZ.setUTCSeconds(a(aZ.getUTCSeconds(),aY))}if(a1=="minute"){aZ.setUTCMinutes(a(aZ.getUTCMinutes(),aY))}if(a1=="hour"){aZ.setUTCHours(a(aZ.getUTCHours(),aY))}if(a1=="month"){aZ.setUTCMonth(a(aZ.getUTCMonth(),aY))}if(a1=="year"){aZ.setUTCFullYear(a(aZ.getUTCFullYear(),aY))}aZ.setUTCMilliseconds(0);if(aU>=aH.minute){aZ.setUTCSeconds(0)}if(aU>=aH.hour){aZ.setUTCMinutes(0)}if(aU>=aH.day){aZ.setUTCHours(0)}if(aU>=aH.day*4){aZ.setUTCDate(1)}if(aU>=aH.year){aZ.setUTCMonth(0)}var a3=0,a2=Number.NaN,aW;do{aW=a2;a2=aZ.getTime();a0.push(a2);if(a1=="month"){if(aY<1){aZ.setUTCDate(1);var aT=aZ.getTime();aZ.setUTCMonth(aZ.getUTCMonth()+1);var aX=aZ.getTime();aZ.setTime(a2+a3*aH.hour+(aX-aT)*aY);a3=aZ.getUTCHours();aZ.setUTCHours(0)}else{aZ.setUTCMonth(aZ.getUTCMonth()+aY)}}else{if(a1=="year"){aZ.setUTCFullYear(aZ.getUTCFullYear()+aY)}else{aZ.setTime(a2+aU)}}}while(a2<aV.max&&a2!=aW);return a0};aP=function(aT,aW){var aY=new Date(aT);if(L.timeZoneCorrect){aY=h(aY)}if(aK.timeformat!=null){return c.plot.formatDate(aY,aK.timeformat,aK.monthNames)}var aU=aW.tickSize[0]*aH[aW.tickSize[1]];var aV=aW.max-aW.min;var aX=(aK.twelveHourClock)?" %p":"";if(aU<aH.minute){fmt="%h:%M:%S"+aX}else{if(aU<aH.day){if(aV<2*aH.day){fmt="%h:%M"+aX}else{fmt="%b %d %h:%M"+aX}}else{if(aU<aH.month){fmt="%b %d"}else{if(aU<aH.year){if(aV<aH.year){fmt="%b"}else{fmt="%b %y"}}else{fmt="%y"}}}}return c.plot.formatDate(aY,fmt,aK.monthNames)}}else{var aS=aK.tickDecimals;var aN=-Math.floor(Math.log(aR)/Math.LN10);if(aS!=null&&aN>aS){aN=aS}aO=Math.pow(10,-aN);aG=aR/aO;if(aG<1.5){aM=1}else{if(aG<3){aM=2;if(aG>2.25&&(aS==null||aN+1<=aS)){aM=2.5;++aN}}else{if(aG<7.5){aM=5}else{aM=10}}}aM*=aO;if(aK.minTickSize!=null&&aM<aK.minTickSize){aM=aK.minTickSize}aE.tickDecimals=Math.max(0,aS!=null?aS:aN);aE.tickSize=aK.tickSize||aM;az=function(aV){var aX=[];var aY=a(aV.min,aV.tickSize),aU=0,aT=Number.NaN,aW;do{aW=aT;aT=aY+aU*aV.tickSize;aX.push(aT);++aU}while(aT<aV.max&&aT!=aW);return aX};aP=function(aT,aU){return aT.toFixed(aU.tickDecimals)}}if(aK.alignTicksWithAxis!=null){var aD=(aE.direction=="x"?ar:V)[aK.alignTicksWithAxis-1];if(aD&&aD.used&&aD!=aE){var aJ=az(aE);if(aJ.length>0){if(aK.min==null){aE.min=Math.min(aE.min,aJ[0])}if(aK.max==null&&aJ.length>1){aE.max=Math.max(aE.max,aJ[aJ.length-1])}}az=function(aV){var aW=[],aT,aU;for(aU=0;aU<aD.ticks.length;++aU){aT=(aD.ticks[aU].v-aD.min)/(aD.max-aD.min);aT=aV.min+aT*(aV.max-aV.min);aW.push(aT)}return aW};if(aE.mode!="time"&&aK.tickDecimals==null){var aC=Math.max(0,-Math.floor(Math.log(aR)/Math.LN10)+1),aB=az(aE);if(!(aB.length>1&&/\..*0$/.test((aB[1]-aB[0]).toFixed(aC)))){aE.tickDecimals=aC}}}}aE.tickGenerator=az;if(typeOf(aK.tickFormatter)=="function"){aE.tickFormatter=function(aT,aU){return""+aK.tickFormatter(aT,aU)}}else{aE.tickFormatter=aP}}function U(aD){aD.ticks=[];var aF=aD.options.ticks,aE=null;if(aF==null||(typeof aF=="number"&&aF>0)){aE=aD.tickGenerator(aD)}else{if(aF){if(typeOf(aF)=="function"){aE=aF({min:aD.min,max:aD.max})}else{aE=aF}}}var aC,az;for(aC=0;aC<aE.length;++aC){var aA=null;var aB=aE[aC];if(typeof aB=="object"){az=aB[0];if(aB.length>1){aA=aB[1]}}else{az=aB}if(aA==null){aA=aD.tickFormatter(az,aD)}aD.ticks[aC]={v:az,label:aA}}}function s(az,aA){if(az.options.autoscaleMargin!=null&&aA.length>0){if(az.options.min==null){az.min=Math.min(az.min,aA[0].v)}if(az.options.max==null&&aA.length>1){az.max=Math.max(az.max,aA[aA.length-1].v)}}}function aw(){D.clearRect(0,0,ak,t);var aA=L.grid;if(aA.show&&!aA.aboveData){w()}for(var az=0;az<q.length;++az){E(n.drawSeries,[D,q[az]]);am(q[az])}E(n.draw,[D]);if(aA.show&&aA.aboveData){w()}}function p(az,aG){var aC,aF,aE,aD,aB;aD=aa();for(i=0;i<aD.length;++i){aC=aD[i];if(aC.direction==aG){aB=aG+aC.n+"axis";if(!az[aB]&&aC.n==1){aB=aG+"axis"}if(az[aB]){aF=az[aB].from;aE=az[aB].to;break}}}if(!az[aB]){aC=aG=="x"?ar[0]:V[0];aF=az[aG+"1"];aE=az[aG+"2"]}if(aF!=null&&aE!=null&&aF>aE){var aA=aF;aF=aE;aE=aA}return{from:aF,to:aE,axis:aC}}function w(){var aD;D.save();D.translate(J.left,J.top);if(L.grid.backgroundColor){D.fillStyle=v(L.grid.backgroundColor,ad,0,"rgba(255, 255, 255, 0)");D.fillRect(0,0,j,ad)}var aF=L.grid.markings;if(aF){if(typeOf(aF)=="function"){var aI=f.getAxes();aI.xmin=aI.xaxis.min;aI.xmax=aI.xaxis.max;aI.ymin=aI.yaxis.min;aI.ymax=aI.yaxis.max;aF=aF(aI)}for(aD=0;aD<aF.length;++aD){var aB=aF[aD],aA=p(aB,"x"),aG=p(aB,"y");if(aA.from==null){aA.from=aA.axis.min}if(aA.to==null){aA.to=aA.axis.max}if(aG.from==null){aG.from=aG.axis.min}if(aG.to==null){aG.to=aG.axis.max}if(aA.to<aA.axis.min||aA.from>aA.axis.max||aG.to<aG.axis.min||aG.from>aG.axis.max){continue}aA.from=Math.max(aA.from,aA.axis.min);aA.to=Math.min(aA.to,aA.axis.max);aG.from=Math.max(aG.from,aG.axis.min);aG.to=Math.min(aG.to,aG.axis.max);if(aA.from==aA.to&&aG.from==aG.to){continue}aA.from=aA.axis.p2c(aA.from);aA.to=aA.axis.p2c(aA.to);aG.from=aG.axis.p2c(aG.from);aG.to=aG.axis.p2c(aG.to);if(aA.from==aA.to||aG.from==aG.to){D.beginPath();D.strokeStyle=aB.color||L.grid.markingsColor;D.lineWidth=aB.lineWidth||L.grid.markingsLineWidth;D.moveTo(aA.from,aG.from);D.lineTo(aA.to,aG.to);D.stroke()}else{D.fillStyle=aB.color||L.grid.markingsColor;D.fillRect(aA.from,aG.to,aA.to-aA.from,aG.from-aG.to)}}}var aI=aa(),aK=L.grid.borderWidth;for(var aC=0;aC<aI.length;++aC){var az=aI[aC],aE=az.box,aO=az.tickLength,aL,aJ,aN,aH;D.strokeStyle=az.options.tickColor||"rgba("+new Color(az.options.color)+",.22)";D.lineWidth=1;if(az.direction=="x"){aL=0;if(aO=="full"){aJ=(az.position=="top"?0:ad)}else{aJ=aE.top-J.top+(az.position=="top"?aE.height:0)}}else{aJ=0;if(aO=="full"){aL=(az.position=="left"?0:j)}else{aL=aE.left-J.left+(az.position=="left"?aE.width:0)}}if(!az.innermost){D.beginPath();aN=aH=0;if(az.direction=="x"){aN=j}else{aH=ad}if(D.lineWidth==1){aL=Math.floor(aL)+0.5;aJ=Math.floor(aJ)+0.5}D.moveTo(aL,aJ);D.lineTo(aL+aN,aJ+aH);D.stroke()}D.beginPath();for(aD=0;aD<az.ticks.length;++aD){var aM=az.ticks[aD].v;aN=aH=0;if(aM<az.min||aM>az.max||(aO=="full"&&aK>0&&(aM==az.min||aM==az.max))){continue}if(az.direction=="x"){aL=az.p2c(aM);aH=aO=="full"?-ad:aO;if(az.position=="top"){aH=-aH}}else{aJ=az.p2c(aM);aN=aO=="full"?-j:aO;if(az.position=="left"){aN=-aN}}if(D.lineWidth==1){if(az.direction=="x"){aL=Math.floor(aL)+0.5}else{aJ=Math.floor(aJ)+0.5}}D.moveTo(aL,aJ);D.lineTo(aL+aN,aJ+aH)}D.stroke()}if(aK){D.lineWidth=aK;D.strokeStyle=L.grid.borderColor;D.strokeRect(-aK/2,-aK/2,j+aK,ad+aK)}D.restore()}function ah(){P.getElement(".tickLabels")&&P.getElement(".tickLabels").destroy();var aA=new Element("div.tickLabels",{style:"font-size:smaller"});var aF=[];var aI=aa();for(var aC=0;aC<aI.length;++aC){var aB=aI[aC],aE=aB.box;aF.push('<div class="'+aB.direction+"Axis "+aB.direction+aB.n+'Axis" style="color:'+aB.options.color+'">');for(var aD=0;aD<aB.ticks.length;++aD){var aG=aB.ticks[aD];if(!aG.label||aG.v<aB.min||aG.v>aB.max){continue}var aJ={},aH;if(aB.direction=="x"){aH="center";aJ.left=Math.round(J.left+aB.p2c(aG.v)-aB.labelWidth/2);if(aB.position=="bottom"){aJ.top=aE.top+aE.padding}else{aJ.bottom=t-(aE.top+aE.height-aE.padding)}}else{aJ.top=Math.round(J.top+aB.p2c(aG.v)-aB.labelHeight/2);if(aB.position=="left"){aJ.right=ak-(aE.left+aE.width-aE.padding);aH="right"}else{aJ.left=aE.left+aE.padding;aH="left"}}aJ.width=aB.labelWidth;var az=["position:absolute","text-align:"+aH];for(var aK in aJ){az.push(aK+":"+aJ[aK]+"px")}aF.push('<div class="tickLabel" style="'+az.join(";")+'">'+aG.label+"</div>")}aF.push("</div>")}P.adopt(aA.set("html",aF.join("")))}function am(az){if(az.lines.show){F(az)}if(az.bars.show){S(az)}if(az.points.show){T(az)}}function F(aC){function aB(aN,aO,aG,aS,aR){var aT=aN.points,aH=aN.pointsize,aL=null,aK=null;D.beginPath();for(var aM=aH;aM<aT.length;aM+=aH){var aJ=aT[aM-aH],aQ=aT[aM-aH+1],aI=aT[aM],aP=aT[aM+1];if(aJ==null||aI==null){continue}if(aQ<=aP&&aQ<aR.min){if(aP<aR.min){continue}aJ=(aR.min-aQ)/(aP-aQ)*(aI-aJ)+aJ;aQ=aR.min}else{if(aP<=aQ&&aP<aR.min){if(aQ<aR.min){continue}aI=(aR.min-aQ)/(aP-aQ)*(aI-aJ)+aJ;aP=aR.min}}if(aQ>=aP&&aQ>aR.max){if(aP>aR.max){continue}aJ=(aR.max-aQ)/(aP-aQ)*(aI-aJ)+aJ;aQ=aR.max}else{if(aP>=aQ&&aP>aR.max){if(aQ>aR.max){continue}aI=(aR.max-aQ)/(aP-aQ)*(aI-aJ)+aJ;aP=aR.max}}if(aJ<=aI&&aJ<aS.min){if(aI<aS.min){continue}aQ=(aS.min-aJ)/(aI-aJ)*(aP-aQ)+aQ;aJ=aS.min}else{if(aI<=aJ&&aI<aS.min){if(aJ<aS.min){continue}aP=(aS.min-aJ)/(aI-aJ)*(aP-aQ)+aQ;aI=aS.min}}if(aJ>=aI&&aJ>aS.max){if(aI>aS.max){continue}aQ=(aS.max-aJ)/(aI-aJ)*(aP-aQ)+aQ;aJ=aS.max}else{if(aI>=aJ&&aI>aS.max){if(aJ>aS.max){continue}aP=(aS.max-aJ)/(aI-aJ)*(aP-aQ)+aQ;aI=aS.max}}if(aJ!=aL||aQ!=aK){D.moveTo(aS.p2c(aJ)+aO,aR.p2c(aQ)+aG)}aL=aI;aK=aP;switch(L.series.interpolation){case"bezier":D.bezierCurveTo(Math.round((aS.p2c(aJ)+aO+aS.p2c(aI)+aO)/2),aR.p2c(aQ)+aG,Math.round((aS.p2c(aJ)+aO+aS.p2c(aI)+aO)/2),aR.p2c(aP)+aG,aS.p2c(aI)+aO,aR.p2c(aP)+aG);break;default:D.lineTo(aS.p2c(aI)+aO,aR.p2c(aP)+aG);break}}D.stroke()}function aD(aG,aO,aN){var aU=aG.points,aT=aG.pointsize,aL=Math.min(Math.max(0,aN.min),aN.max),aV=0,aS,aR=false,aK=1,aJ=0,aP=0;while(true){if(aT>0&&aV>aU.length+aT){break}aV+=aT;var aX=aU[aV-aT],aI=aU[aV-aT+aK],aW=aU[aV],aH=aU[aV+aK];if(aR){if(aT>0&&aX!=null&&aW==null){aP=aV;aT=-aT;aK=2;continue}if(aT<0&&aV==aJ+aT){D.fill();aR=false;aT=-aT;aK=1;aV=aJ=aP+aT;continue}}if(aX==null||aW==null){continue}if(aX<=aW&&aX<aO.min){if(aW<aO.min){continue}aI=(aO.min-aX)/(aW-aX)*(aH-aI)+aI;aX=aO.min}else{if(aW<=aX&&aW<aO.min){if(aX<aO.min){continue}aH=(aO.min-aX)/(aW-aX)*(aH-aI)+aI;aW=aO.min}}if(aX>=aW&&aX>aO.max){if(aW>aO.max){continue}aI=(aO.max-aX)/(aW-aX)*(aH-aI)+aI;aX=aO.max}else{if(aW>=aX&&aW>aO.max){if(aX>aO.max){continue}aH=(aO.max-aX)/(aW-aX)*(aH-aI)+aI;aW=aO.max}}if(!aR){D.beginPath();D.moveTo(aO.p2c(aX),aN.p2c(aL));aR=true}if(aI>=aN.max&&aH>=aN.max){D.lineTo(aO.p2c(aX),aN.p2c(aN.max));D.lineTo(aO.p2c(aW),aN.p2c(aN.max));continue}else{if(aI<=aN.min&&aH<=aN.min){D.lineTo(aO.p2c(aX),aN.p2c(aN.min));D.lineTo(aO.p2c(aW),aN.p2c(aN.min));continue}}var aM=aX,aQ=aW;if(aI<=aH&&aI<aN.min&&aH>=aN.min){aX=(aN.min-aI)/(aH-aI)*(aW-aX)+aX;aI=aN.min}else{if(aH<=aI&&aH<aN.min&&aI>=aN.min){aW=(aN.min-aI)/(aH-aI)*(aW-aX)+aX;aH=aN.min}}if(aI>=aH&&aI>aN.max&&aH<=aN.max){aX=(aN.max-aI)/(aH-aI)*(aW-aX)+aX;aI=aN.max}else{if(aH>=aI&&aH>aN.max&&aI<=aN.max){aW=(aN.max-aI)/(aH-aI)*(aW-aX)+aX;aH=aN.max}}if(aX!=aM){D.lineTo(aO.p2c(aM),aN.p2c(aI))}D.lineTo(aO.p2c(aX),aN.p2c(aI));D.lineTo(aO.p2c(aW),aN.p2c(aH));if(aW!=aQ){D.lineTo(aO.p2c(aW),aN.p2c(aH));D.lineTo(aO.p2c(aQ),aN.p2c(aH))}}}D.save();D.translate(J.left,J.top);D.lineJoin="round";var aE=aC.lines.lineWidth,az=aC.shadowSize;if(aE>0&&az>0){D.lineWidth=az;D.strokeStyle="rgba(0,0,0,0.1)";var aF=Math.PI/18;aB(aC.datapoints,Math.sin(aF)*(aE/2+az/2),Math.cos(aF)*(aE/2+az/2),aC.xaxis,aC.yaxis);D.lineWidth=az/2;aB(aC.datapoints,Math.sin(aF)*(aE/2+az/4),Math.cos(aF)*(aE/2+az/4),aC.xaxis,aC.yaxis)}D.lineWidth=aE;D.strokeStyle=aC.color;var aA=A(aC.lines,aC.color,0,ad);if(aA){D.fillStyle=aA;aD(aC.datapoints,aC.xaxis,aC.yaxis)}if(aE>0){aB(aC.datapoints,0,0,aC.xaxis,aC.yaxis)}D.restore()}function T(aC){function aF(aL,aK,aS,aI,aQ,aR,aO,aH){var aP=aL.points,aG=aL.pointsize;for(var aJ=0;aJ<aP.length;aJ+=aG){var aN=aP[aJ],aM=aP[aJ+1];if(aN==null||aN<aR.min||aN>aR.max||aM<aO.min||aM>aO.max){continue}D.beginPath();aN=aR.p2c(aN);aM=aO.p2c(aM)+aI;if(aH=="circle"){D.arc(aN,aM,aK,0,aQ?Math.PI:Math.PI*2,false)}else{aH(D,aN,aM,aK,aQ)}D.closePath();if(aS){D.fillStyle=aS;D.fill()}D.stroke()}}D.save();D.translate(J.left,J.top);var aE=aC.points.lineWidth,aA=aC.shadowSize,az=aC.points.radius,aD=aC.points.symbol;if(aE>0&&aA>0){var aB=aA/2;D.lineWidth=aB;D.strokeStyle="rgba(0,0,0,0.1)";aF(aC.datapoints,az,null,aB+aB/2,true,aC.xaxis,aC.yaxis,aD);D.strokeStyle="rgba(0,0,0,0.2)";aF(aC.datapoints,az,null,aB/2,true,aC.xaxis,aC.yaxis,aD)}D.lineWidth=aE;D.strokeStyle=aC.color;aF(aC.datapoints,az,A(aC.points,aC.color),0,false,aC.xaxis,aC.yaxis,aD);D.restore()}function an(aL,aK,aT,aG,aO,aD,aB,aJ,aI,aS,aP,aA){var aC,aR,aH,aN,aE,az,aM,aF,aQ;if(aP){aF=az=aM=true;aE=false;aC=aT;aR=aL;aN=aK+aG;aH=aK+aO;if(aR<aC){aQ=aR;aR=aC;aC=aQ;aE=true;az=false}}else{aE=az=aM=true;aF=false;aC=aL+aG;aR=aL+aO;aH=aT;aN=aK;if(aN<aH){aQ=aN;aN=aH;aH=aQ;aF=true;aM=false}}if(aR<aJ.min||aC>aJ.max||aN<aI.min||aH>aI.max){return}if(aC<aJ.min){aC=aJ.min;aE=false}if(aR>aJ.max){aR=aJ.max;az=false}if(aH<aI.min){aH=aI.min;aF=false}if(aN>aI.max){aN=aI.max;aM=false}aC=aJ.p2c(aC);aH=aI.p2c(aH);aR=aJ.p2c(aR);aN=aI.p2c(aN);if(aB){aS.beginPath();aS.moveTo(aC,aH);aS.lineTo(aC,aN);aS.lineTo(aR,aN);aS.lineTo(aR,aH);aS.fillStyle=aB(aH,aN);aS.fill()}if(aA>0&&(aE||az||aM||aF)){aS.beginPath();aS.moveTo(aC,aH+aD);if(aE){aS.lineTo(aC,aN+aD)}else{aS.moveTo(aC,aN+aD)}if(aM){aS.lineTo(aR,aN+aD)}else{aS.moveTo(aR,aN+aD)}if(az){aS.lineTo(aR,aH+aD)}else{aS.moveTo(aR,aH+aD)}if(aF){aS.lineTo(aC,aH+aD)}else{aS.moveTo(aC,aH+aD)}aS.stroke()}}function S(aB){function aA(aH,aG,aJ,aE,aI,aL,aK){var aM=aH.points,aD=aH.pointsize;for(var aF=0;aF<aM.length;aF+=aD){if(aM[aF]==null){continue}an(aM[aF],aM[aF+1],aM[aF+2],aG,aJ,aE,aI,aL,aK,D,aB.bars.horizontal,aB.bars.lineWidth)}}D.save();D.translate(J.left,J.top);D.lineWidth=aB.bars.lineWidth;D.strokeStyle=aB.color;var az=aB.bars.align=="left"?0:-aB.bars.barWidth/2;var aC=aB.bars.fill?function(aD,aE){return A(aB.bars,aB.color,aD,aE)}:null;aA(aB.datapoints,az,az+aB.bars.barWidth,0,aC,aB.xaxis,aB.yaxis);D.restore()}function A(aB,az,aA,aD){var aC=aB.fill;if(!aC){return null}if(aB.fillColor){return v(aB.fillColor,aA,aD,az)}return"rgba("+new Color(az)+","+(typeof aC=="number"?aC:0.4)+")"}function ax(){P.getElement(".legend")&&P.getElement(".legend").destroy();if(!L.legend.show){return}var aG=[],aE=false,aM=L.legend.labelFormatter,aL,aI;for(var aC=0;aC<q.length;++aC){aL=q[aC];aI=aL.label;if(!aI){continue}if(aC%L.legend.noColumns==0){if(aE){aG.push("</tr>")}aG.push("<tr>");aE=true}if(aM){aI=aM(aI,aL)}aG.push('<td class="legendColorBox"><div style="border:1px solid '+L.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+aL.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+aI+"</td>")}if(aE){aG.push("</tr>")}if(aG.length==0){return}var aK='<table style="width:auto;font-size:smaller;color:'+L.grid.color+'">'+aG.join("")+"</table>";if(L.legend.container!=null){if(typeof L.legend.container==="string"){var aD=document.querySelector(L.legend.container)}if(typeof L.legend.container==="object"){var aD=L.legend.container}aD.set("html",aK)}else{var aH="",aA=L.legend.position,aB=L.legend.margin;if(aB[0]==null){aB=[aB,aB]}if(aA.charAt(0)=="n"){aH+="top:"+(aB[1]+J.top)+"px;"}else{if(aA.charAt(0)=="s"){aH+="bottom:"+(aB[1]+J.bottom)+"px;"}}if(aA.charAt(1)=="e"){aH+="right:"+(aB[0]+J.right)+"px;"}else{if(aA.charAt(1)=="w"){aH+="left:"+(aB[0]+J.left)+"px;"}}var aJ=new Element("div.legend",{html:aK.replace('style="','style="position:absolute;'+aH+";")}).inject(P);if(L.legend.backgroundOpacity!=0){var aF=L.legend.backgroundColor;if(aF==null){aF=L.grid.backgroundColor;if(aF&&typeof aF=="string"){aF="rgb("+new Color(aF)+")"}else{aF="rgb("+new Color("#ffffff")+")"}aF.a=1;aF=aF.toString()}var az=aJ.getElement("table");new Element("div",{style:"position:absolute;width:"+az.getSize().x+"px;height:"+az.getSize().y+"px;"+aH+"background-color:"+aF+";"}).inject(aJ,"top").setStyle("opacity",L.legend.backgroundOpacity)}}}var ai=[],k=null;function at(aG,aE,aB){var aM=L.grid.mouseActiveRadius,a0=aM*aM+1,aP=false,aV,aT;var aQ=[];for(var aV=0;aV<q.length;aV++){var aX=null;if(!aB(q[aV])){continue}var aN=q[aV],aF=aN.xaxis,aD=aN.yaxis,aU=aN.datapoints.points,aS=aN.datapoints.pointsize,aO=aF.c2p(aG),aL=aD.c2p(aE),aA=aM/aF.scale,az=aM/aD.scale;if(aN.lines.show||aN.points.show){for(var aT=0;aT<aU.length;aT+=aS){var aI=aU[aT],aH=aU[aT+1];if(aI==null){continue}var aK=Math.abs(aF.p2c(aI)-aG),aJ=Math.abs(aD.p2c(aH)-aE),aR=aK*aK+aJ*aJ;if(L.xaxis.multipleSeriesEvent&&aK*4<a0){aX=[aV,aT/aS];continue}if(aI-aO>aA||aI-aO<-aA||aH-aL>az||aH-aL<-az){continue}if(aR<a0){a0=aR;aX=[aV,aT/aS]}}}if(aN.bars.show&&!aX){var aC=aN.bars.align=="left"?0:-aN.bars.barWidth/2,aW=aC+aN.bars.barWidth;for(aT=0;aT<aU.length;aT+=aS){var aI=aU[aT],aH=aU[aT+1],aZ=aU[aT+2];if(aI==null){continue}if(q[aV].bars.horizontal?(aO<=Math.max(aZ,aI)&&aO>=Math.min(aZ,aI)&&aL>=aH+aC&&aL<=aH+aW):(aO>=aI+aC&&aO<=aI+aW&&aL>=Math.min(aZ,aH)&&aL<=Math.max(aZ,aH))){aX=[aV,aT/aS]}}}if(aX){u=aX[1];var aY={datapoint:q[aV].datapoints.points.slice(u*aS,(u+1)*aS),customData:q[aV].customData?q[aV].customData.slice(u,(u+1))[0]:null,dataIndex:u,series:q[aV],seriesIndex:aV};aQ.push(aY)}}if(aQ.length){return aQ}return null}function d(az){if(L.grid.hoverable){g("plothover",az,function(aA){return aA.hoverable!=false})}}function I(az){g("plotclick",az,function(aA){return aA.clickable!=false})}function g(az,aN,aB){var aC=ap[0].getCoordinates(),aG=aN.page.x-aC.left-J.left,aE=aN.page.y-aC.top-J.top,aD=X({left:aG,top:aE});aD.pageX=aN.page.x;aD.pageY=aN.page.y;for(var aO=0;aO<ai.length;++aO){var aP=ai[aO];if(aP.auto==az){aj(aP.series,aP.point)}}var aI=[];var aS=at(aG,aE,aB);if(aS){aI=aS}if(L.xaxis.swipeLine){ac(aG,aI.length?aI[0].datapoint[0]:null,aI.length?q[aI[0].seriesIndex].xaxis.max-q[aI[0].seriesIndex].xaxis.min:null)}if(aI){for(var aK=0;aK<aI.length;aK++){aI[aK].pageX=parseInt(aI[aK].series.xaxis.p2c(aI[aK].datapoint[0])+aC.left+J.left);aI[aK].pageY=parseInt(aI[aK].series.yaxis.p2c(aI[aK].datapoint[1])+aC.top+J.top)}}if(L.grid.autoHighlight){var aR=aI.length?aI.length:1;for(var aK=0;aK<aR;aK++){var aA=typeof aI!=="undefined"?(aI!==null?aI[aK]:{}):{};if(aI.length){aq(aA.series,aA.datapoint,az)}}}var aQ=L.xaxis.timeformat!=null&&aI!=null;if(aQ){var aJ=[];for(var aK=0;aK<aI.length;aK++){var aM=Object.clone(aI[aK]);var aF=new Date(aM.datapoint[0]);if(L.timeZoneCorrect){aF=h(aF)}aM.datapoint[0]=c.plot.formatDate(aF,L.xaxis.timeformat);aJ.push(aM)}}function aL(aV){if(az==="plotclick"){var aU=[];for(var aT=0;aT<aV.length;aT++){aU.push([Math.abs(aE-aV[aT].pageY),aT])}aU=aU.sort(function(aX,aW){return aX[0]-aW[0]});return aV[aU[0][1]]}if(aV.length){return aV}return null}var aH=aQ?aJ:aI;P.fireEvent(az,[aN,aD,aL(aH)])}function W(){if(!k){k=setTimeout(ag,30)}}function ag(){k=null;ay.save();ay.clearRect(0,0,ak,t);ay.translate(J.left,J.top);var aA,az;for(aA=0;aA<ai.length;++aA){az=ai[aA];if(az.series.bars.show){al(az.series,az.point)}else{af(az.series,az.point)}}ay.restore();E(n.drawOverlay,[ay])}function ac(aC,aG,aD){aw();var aA=J.left;var aE=J.right;var aB=J.top;var az=f.height()+aB;var aF=aG!==null?aG*(D.canvas.width-aA-aE)/aD+aA:aC+aA;if(aF<aA){aF=aA}if(aF>D.canvas.width+aA){aF=D.canvas.width+aA}D.beginPath();D.lineWidth=1;D.strokeStyle="grey";D.moveTo(aF,aB);D.lineTo(aF,az);D.closePath();D.stroke()}function aq(aB,az,aD){if(typeof aB=="number"){aB=q[aB]}if(typeof az=="number"){var aC=aB.datapoints.pointsize;az=aB.datapoints.points.slice(aC*az,aC*(az+1))}var aA=N(aB,az);if(aA==-1){ai.push({series:aB,point:az,auto:aD});W()}else{if(!aD){ai[aA].auto=false}}}function aj(aB,az){if(aB==null&&az==null){ai=[];W()}if(typeof aB=="number"){aB=q[aB]}if(typeof az=="number"){az=aB.data[az]}var aA=N(aB,az);if(aA!=-1){ai.splice(aA,1);W()}}function N(aB,aC){for(var az=0;az<ai.length;++az){var aA=ai[az];if(aA.series==aB&&aA.point[0]==aC[0]&&aA.point[1]==aC[1]){return az}}return -1}function af(aC,aB){var aA=aB[0],aG=aB[1],aF=aC.xaxis,aE=aC.yaxis;if(aA<aF.min||aA>aF.max||aG<aE.min||aG>aE.max){return}var aD=aC.points.radius+aC.points.lineWidth/2;ay.lineWidth=aD;ay.strokeStyle="rgba("+new Color(aC.color)+",.5)";var az=1.5*aD,aA=aF.p2c(aA),aG=aE.p2c(aG);ay.beginPath();if(aC.points.symbol=="circle"){ay.arc(aA,aG,az,0,2*Math.PI,false)}else{aC.points.symbol(ay,aA,aG,az,false)}ay.closePath();ay.stroke()}function al(aC,az){ay.lineWidth=aC.bars.lineWidth;var aB=ay.strokeStyle="rgba("+new Color(aC.color)+",.5)";var aA=aC.bars.align=="left"?0:-aC.bars.barWidth/2;an(az[0],az[1],az[2]||0,aA,aA+aC.bars.barWidth,0,function(){return aB},aC.xaxis,aC.yaxis,ay,aC.bars.horizontal,aC.bars.lineWidth)}function v(aB,aA,aF,aD){if(typeof aB=="string"){return aB}else{var aE=D.createLinearGradient(0,aF,0,aA);for(var aC=0,az=aB.colors.length;aC<az;++aC){var aG=aB.colors[aC];if(typeof aG!="string"){aG="rgba("+new Color(aD)+","+aG.opacity||"1)"}aE.addColorStop(aC/(az-1),aG)}return aE}}function h(az){var aA=az.getTime()+(az.getTimezoneOffset()*-60000);return new Date(aA)}}c.plot=function(g,e,d){var f=new b(g,e,d,c.plot.plugins);return f};c.plot.plugins=[];c.plot.formatDate=function(l,f,h){var o=function(d){d=""+d;return d.length==1?"0"+d:d};var e=[];var p=false,j=false;var n=l.getUTCHours();var k=n<12;if(h==null){h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}if(f.search(/%p|%P/)!=-1){if(n>12){n=n-12}else{if(n==0){n=12}}}for(var g=0;g<f.length;++g){var m=f.charAt(g);if(p){switch(m){case"h":m=""+n;break;case"H":m=o(n);break;case"M":m=o(l.getUTCMinutes());break;case"S":m=o(l.getUTCSeconds());break;case"d":m=""+l.getUTCDate();break;case"m":m=""+(l.getUTCMonth()+1);break;case"y":m=""+l.getUTCFullYear();break;case"b":m=""+h[l.getUTCMonth()];break;case"p":m=(k)?("am"):("pm");break;case"P":m=(k)?("AM"):("PM");break;case"0":m="";j=true;break}if(m&&j){m=o(m);j=false}e.push(m);if(!j){p=false}}else{if(m=="%"){p=true}else{e.push(m)}}}return e.join("")};function a(e,d){return d*Math.floor(e/d)}})(flot);