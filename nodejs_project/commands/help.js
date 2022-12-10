
function helpFn(dirPath) {
    console.log(`
      List of All the commands:
      -node main.js tree "directoryPath"
      -node main.js organise "directoryPath"
      -node mainj.js help 
      `);
  }
  
  
module.exports={
    helpKey: helpFn,
}  