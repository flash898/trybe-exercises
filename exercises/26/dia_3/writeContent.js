const fs = require('fs');

function writeContent(arquivo, conteudo) {
    fs.writeFileSync(arquivo, conteudo);
    return 'ok';
}

module.exports = writeContent;
