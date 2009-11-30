(function(){
  var probeModule = exports;
  
  probeModule['probe'] = function (target, description) {
    if (typeof target === 'undefined' && typeof description === 'undefined') {
      description = 'undefined' };
    
    process.stdio.write('[ --- -- --- /!\\ --- -- --- ]' + '\n');
    process.stdio.write('## ‘' + (description || target.name || "") + '’ (' + typeof target + ')' + '\n');
    if (typeof target !== 'undefined' && typeof target['toString'] === 'function') {
      process.stdio.write('## String representation: “' + target.toString() + '”' + '\n') };
    process.stdio.write('## JSON representation:' + '\n');
    process.stdio.write(JSON.stringify(target, null, 2) + '\n');
    process.stdio.write('[ --- -- --- \\¡/ --- -- --- ]' + '\n');
    
    return target;
  };
  
  return probeModule;
})()
