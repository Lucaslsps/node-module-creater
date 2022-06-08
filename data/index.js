
import fs from 'fs';
const args = process.argv.slice(2)

const moduleName = args[0]

const moduleNameFirstLetterUppercase = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
const moduleNameFirstLetterLowercase = moduleName.charAt(0).toLocaleLowerCase() + moduleName.slice(1);
const moduleNameSnakeCase = moduleNameFirstLetterLowercase.replaceAll(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)

const moduleNameUC = moduleNameFirstLetterUppercase
const moduleNameLC = moduleNameFirstLetterLowercase
const moduleNameSC = moduleNameSnakeCase

export function handleControllerFile () {
    const controllerFile = fs.readFileSync("./data/controller.txt", {encoding:"utf-8"})
    let controller = controllerFile.replaceAll("<<MODULE_UC_NAME>>", moduleNameUC)
    return controller
}

export function handleRoutesFile () {
    const routesFile = fs.readFileSync("./data/routes.txt", {encoding:"utf-8"})
    let routes = routesFile
    routes = routes.replaceAll("<<MODULE_UC_NAME>>", moduleNameUC)
    routes = routes.replaceAll("<<MODULE_LC_NAME>>", moduleNameLC)
    routes = routes.replaceAll("<<MODULE_SC_NAME>>", moduleNameSC)
    return routes
}

export function handleEntityFile () {
    const entityFile = fs.readFileSync("./data/entity.txt", {encoding:"utf-8"})
    let entity = entityFile
    entity = entity.replaceAll("<<MODULE_UC_NAME>>", moduleNameUC)
    entity = entity.replaceAll("<<MODULE_SC_NAME>>", moduleNameSC)
    return entity
}

export function handleRepositoryFile () {
    const repositoryFile = fs.readFileSync("./data/repository.txt", {encoding:"utf-8"})
    let repository = repositoryFile
    repository = repository.replaceAll("<<MODULE_UC_NAME>>", moduleNameUC)
    repository = repository.replaceAll("<<MODULE_LC_NAME>>", moduleNameLC)
    return repository
}

export function handleRepositoryInterfaceFile () {
    const repositoryInterfaceFile = fs.readFileSync("./data/repositoryInterface.txt", {encoding:"utf-8"})
    let repositoryInterface = repositoryInterfaceFile
    repositoryInterface = repositoryInterface.replaceAll("<<MODULE_UC_NAME>>", moduleNameUC)
    repositoryInterface = repositoryInterface.replaceAll("<<MODULE_LC_NAME>>", moduleNameLC)
    return repositoryInterface
}

