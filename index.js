function introduction(name){
    return `Hi my name is ${name}`
}
console.log (introduction("aki"))

function introductionWithLanguage (name,language){
    return `hi my name is ${name}and am learning to program ${language}`
}
console.log(introductionWithLanguage("Aki","javascript"))


function introductionWithLanguage (name,language ){
    return `Hi my name is ${name} and am learning to program ${language}`
}
console.log(introductionWithLanguage("Gracie","python"))


function introductionWithLanguage (name,language ="javascript" ){
    return `Hi my name is ${name} and am learning to program ${language}`
}
console.log(introductionWithLanguage("Gracie"))