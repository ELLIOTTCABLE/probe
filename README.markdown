probe
=====
Nothing complex. Just spits out some useful information about whatever you
pass it.

‘Install’ it:

    cd ~/Code/src # or equivalent
    git clone git://github.com/elliottcable/probe.git
    ln -s "$PWD/probe/lib/probe.js" /usr/local/lib/node/libraries/probe.js

Use it:

    var probe = require('probe').probe;
    
    var undefined;
    probe(undefined);
    
    probe({foo: 'bar'}, 'an important object');
    probe(1234);
    probe("wat");
    probe([6, 6, 6], 'EEEEEVIL');
