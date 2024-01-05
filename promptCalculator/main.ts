import inquirer from "inquirer";

async function main(){
    const answer = await inquirer.prompt([{
        type:"number",
        name:"n1",
        message:"Enter First Number"
    }])
    console.log(answer)
}
