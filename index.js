import { createRequire } from "module";
const require = createRequire(import.meta.url);
const {dependencies} = require('./package.json')
const lockDependencies = require('./package-lock.json').dependencies
let o = []

if (!dependencies) {
    console.log(' 0 dependencies loaded ')
} else {
    Object.keys(dependencies).forEach((x, index) => {
        const pkg = lockDependencies[x]
        o.push({
            name: x,
            version: dependencies[x],
            npmUrl: `https://npm.im/${x}`,
            id: index,
            requires: pkg.requires ? (Object.keys(pkg.requires).map(p => lockDependencies[p])) : null
        })

        console.log(JSON.stringify(o))
    })
}