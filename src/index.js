let heroi = "Thor"
let xp = 9001
let nivel = ""

for (let i = 0; i < 1; i++) {

    if (xp < 1000) {
        nivel = "Bronze";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Prata";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Ouro";
    } else if (xp >= 5001 && xp <= 8000) {
        nivel = "Platina Diamante";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10000) {
        nivel = "Radiante";
    }

    console.log("O Herói de nome " + heroi + " está no nível de " + nivel);
}