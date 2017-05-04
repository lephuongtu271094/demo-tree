const fs = require('fs')
const path = require('path')
const color = require('colors')
const dir = './abc'
let tem = '   '
let count_folder = 0;
let count_file = 0;
tree = (dir) => {
let files = fs.readdirSync(dir);
    for (let i = 0 ; i < files.length ; i++){
        let name = dir+'/'+files[i];
        if(fs.statSync(name).isFile()){
            count_file += 1
        }else if(fs.statSync(name).isDirectory()){
            count_folder += 1
        }
        if (i === files.length -1){
            if(fs.statSync(name).isDirectory()){
                console.log(tem + '└── '  + files[i].blue)
            }else {
                 console.log(tem + '└── '  + files[i])
            }

        }else {
            if(fs.statSync(name).isDirectory()){
                console.log(tem + '├── '  + files[i].blue)
            }else {
                 console.log(tem + '├── '  + files[i])
            }
        }
        if (fs.statSync(name).isDirectory()){
            if(i === files.length-1){
                tem+= '    '
            }else {
                tem += '│   '
            }
            tree(name)
            tem = tem.substr(0,tem.length-4)
        }
    }
}
tree(dir)
console.log(count_folder + ' directories' + ' , ' + count_file + ' files' )