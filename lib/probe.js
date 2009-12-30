return (function(){
  // If exports is *not* defined (we’re coming from `from`), this will be
  // declared-but-`undefined`.
  var experts;
  if (typeof exports !== 'undefined') { experts = exports };
  
  // This gives us a scope to declare `exports` in, without
  // overwriting the argument declaration and thus losing the
  // existing value, if it’s defined (coming from `require()`)
  return (function(){
    var exports = experts || new(Object);
    
    exports['probe'] = function (target, description) {
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
    
    return exports;
  })();
  
})()
