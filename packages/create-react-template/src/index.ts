import { program } from 'commander'
import { gen } from './gen'

program
  .argument('[name]', 'project name', 'react-ts-template')
  .option('-t, --template <string>', 'Input a template')
  .description('Create a react project template')
  .action((name, opts) => gen(name, opts))
  .parse()


console.log(process.cwd(), 'cwd')




