import { nodefs, readTextLines,writeChanged } from "pitaka/cli";
await nodefs
const zh=readTextLines('./vism.zh.off');
const en=readTextLines('./vism.en.off');
for (let i=0;i<en.length;i++) {
    const enline=en[i];
    const zhline=zh[i];
    if (enline.indexOf('^n')>-1 && zhline.indexOf('^n')==-1) {
        const m=enline.match(/\^n(\d+)/);
        if (m) zh[i]='^n'+m[1]+zh[i];
    }
    const enn=enline.match(/\^en(\d+[a-z])/);
    const zhn=zhline.match(/\^en(\d+[a-z])/);
    if (enn && zhn) {
        // console.log(enn[1],zhn[1])
        if (enn[1]!==zhn[1]) console.log('wrong')
    }
}
if (writeChanged('vs.zh.off',zh.join('\n')))console.log('written','vs.zh.off',zh.length)