
const { exec } = require('child_process');
const fs = require('fs');

const runUi = async () => {
    const commands = [
        'git add .',
        'git commit -m "Fix Sanity schema, add Migration tool plugin, and resolve validation errors"',
        'git push origin master'
    ];

    let log = '';

    for (const cmd of commands) {
        log += `\n>>> RUNNING: ${cmd}\n`;
        await new Promise(resolve => {
            exec(cmd, { encoding: 'utf8', maxBuffer: 1024 * 1024 * 5 }, (error, stdout, stderr) => {
                if (error) log += `ERROR: ${error.message}\n`;
                log += `STDOUT: ${stdout}\n`;
                log += `STDERR: ${stderr}\n`;
                resolve();
            });
        });
    }

    fs.writeFileSync('git_push_log.txt', log, 'utf8');
    console.log('Git operations completed. Check git_push_log.txt');
};

runUi();
