function extractFile(input) {
    let paths = input.split('\\');
   let lastPath = paths.pop();
   
   let indexPath = lastPath.lastIndexOf('.');
   let path = lastPath.substring(0,indexPath);
   let extension = lastPath.substring(indexPath + 1);
   
   console.log(`File name: ${path} `);
   console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')