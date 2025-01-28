
export let Name = "Ahmad"
//use export which you want to use in an other file like function variable etc

export function add(a,b){
    console.log(a+b)
}
add(4,3)

// you can make a default function in a file and default function not have the name
//and must export this function because it make for export
export default function (){
    console.log("default function call ")
}