process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        
        switch(instruction) {
                case '/exit':
                    process.stdout.write('Quitting app!\n');
                    process.exit();
                break;
                case 'specs':
                    console.log('Node version: ' + process.versions.node);
                    console.log('System language: ' + process.env.lang);
                    getOSinfo(); //funkcja którą powinieneś stworzyć później w 17.3
                break;
                default:
                    process.stderr.write('Wrong instruction!\n');
                break;
        }
    }
});