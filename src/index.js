let heroi = "link"
let vilao = "ganon"
let xp = 0
let maxxp= 4000
let dano = 500
function rank(xp){
if (xp <= 1000) return "bronze";
else if (xp <=2000) return "prata";
else if (xp <= 3000) return "ouro";
else if (xp <= 4000) return "platina";
else {
    return "challenger"
}
}
while (xp <=maxxp){
 console.log(heroi, "atacou", "o", vilao, "e ganhou", dano, "de xp")
  xp += dano
  console.log("agora o", heroi, "tem", xp)
  	console.log (rank(xp), "de", heroi)
  	}