const fs = require('fs')
const path = require('path')

const iconsDir = path.resolve(__dirname, 'src/assets/icons/source')
const destFile = path.resolve(__dirname, 'src/components/Icon/IconNames.ts')

const names = fs
  .readdirSync(iconsDir)
  .filter(filename => /\.svg$/.test(filename))
  .map(filename => filename.replace('.svg', ''))
  .map(iconname => `'${iconname}' = '${iconname}'`)
  .join(',\n  ')

const content = `// THIS FILE IS AUTO GENERATED


export enum IconNames {
  ${names}
}
`

fs.writeFileSync(destFile, content, { encoding: 'utf-8' })
