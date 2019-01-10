const valor = "Global";

function minhaFunc(){
    console.log(valor);
}

minhaFunc();

function exec() {
    const valor = "Local";
    minhaFunc();
}

exec();