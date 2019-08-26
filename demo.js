process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        
        
//        if (instruction === '/koniec') {
//            process.stdout.write('Quiting app!\n');
//            process.exit();
//        }
//        else {
//            process.stderr.write('Wrong instruction!\n');
        };
        switch (instruction) {
            case '/version':
                process.env();   
            break;
            case '/koniec':
                process.stdout.write('Quiting app!\n');
                process.exit();
            break;
                
        }
    });