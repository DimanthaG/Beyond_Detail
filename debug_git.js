
const { exec } = require('child_process');
const fs = require('fs');

const runGit = (command) => {
    exec(command, { encoding: 'utf8' }, (error, stdout, stderr) => {
        let output = `COMMAND: ${command}\n`;
        if (error) {
            output += `ERROR: ${error.message}\n`;
        }
        output += `STDOUT:\n${stdout}\n`;
        output += `STDERR:\n${stderr}\n`;

        fs.writeFileSync('git_debug_log.txt', output, 'utf8');
        console.log('Done writing log.');
    });
};

runGit('git status && git remote -v && git branch -bv');
