import fs from 'fs';
const args = process.argv.slice(2)

const moduleName = args[0]

console.log()
const moduleNameFirstLetterUppercase = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
const moduleNameFirstLetterLowercase = moduleName.charAt(0).toLocaleLowerCase() + moduleName.slice(1);

const moduleNameUC = moduleNameFirstLetterUppercase
const moduleNameLC = moduleNameFirstLetterLowercase

fs.mkdirSync(moduleNameLC)
fs.mkdirSync(`${moduleNameLC}/dtos`)
fs.writeFileSync(`${moduleNameLC}/dtos/ICreate${moduleNameUC}DTO.ts`,"")
fs.writeFileSync(`${moduleNameLC}/dtos/IUpdate${moduleNameUC}DTO.ts`,"")
fs.writeFileSync(`${moduleNameLC}/dtos/IDelete${moduleNameUC}DTO.ts`,"")

fs.mkdirSync(`${moduleNameLC}/infra`)

fs.mkdirSync(`${moduleNameLC}/infra/http`)
fs.mkdirSync(`${moduleNameLC}/infra/http/controllers`)
fs.writeFileSync(`${moduleNameLC}/infra/http/controllers/${moduleNameUC}Controller.ts`,"")

fs.mkdirSync(`${moduleNameLC}/infra/http/routes`)
fs.writeFileSync(`${moduleNameLC}/infra/http/routes/${moduleNameLC}.routes.ts`,"")

fs.mkdirSync(`${moduleNameLC}/infra/typeorm`)
fs.mkdirSync(`${moduleNameLC}/infra/typeorm/entities`)
fs.writeFileSync(`${moduleNameLC}/infra/typeorm/entities/${moduleNameUC}.ts`,"")

fs.mkdirSync(`${moduleNameLC}/infra/typeorm/repositories`)
fs.writeFileSync(`${moduleNameLC}/infra/typeorm/repositories/${moduleNameUC}Repository.ts`,"")

fs.mkdirSync(`${moduleNameLC}/repositories`)
fs.writeFileSync(`${moduleNameLC}/repositories/I${moduleNameUC}Repository.ts`, "")

fs.mkdirSync(`${moduleNameLC}/services`)

