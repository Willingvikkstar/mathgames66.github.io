var loadingProgress=0,simulatedProgressRange=.65,simulationSteps=100,simulationTime=15,displayProgress=function(e){var a=document.getElementById("loaderBar"),r=document.getElementById("loadingText");a&&(a.style.width=100*e+"%"),r&&(r.innerHTML=Math.round(100*e)+"%"),"undefined"!=typeof famobi&&famobi.setPreloadProgress(Math.floor(99*e))},stopPreloaderSimulation=function(){clearInterval(simulatingInterval)},simulatingInterval=setInterval(()=>{if(loadingProgress>=simulatedProgressRange)return stopPreloaderSimulation();loadingProgress+=simulatedProgressRange/simulationSteps*Math.random(),displayProgress(loadingProgress)},simulationTime/simulationSteps*1e3);