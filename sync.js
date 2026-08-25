function registar(){
    waitfordelay(1000);
    console.log("registar here ")
}
function login(){
    waitfordelay(1000);
    console.log("you can login form here")
}
function getdata(){
    waitfordelay(1000);
    console.log("fetch data from here")
}
function displaydata(){
    waitfordelay(1000);
    console.log("display data")
}
function waitfordelay(delay){
    const mt=DataTransfer.now()+delay;
}
while(DataTransfer.now()<mt)
{
    registar();
    login();
    getdata();
    displaydata();
}
//callback hell

register(
        ()=>{
            login(
                ()=>{
                    getdata(
                        ()=>{
                            displaydata();
                        })
                }
                    )
                }
            )
catch(err){
    console.log("Error:")
}