const banco = require("../banco");
const frases = require("../frases/frases")

function execute(user, msg) {

      if (msg == "0") {
        banco.db[user].stage = 1;
        return [ frases.Menu ];
      }  
      if (msg == "1") { 
        banco.db[user].stage = 2;
        return [ frases.Varejo ];
      }   
      if (msg == "2") {    
        banco.db[user].stage = 2;
        return [ frases.Atacado ];
      }
      if (msg == "3") {
        banco.db[user].stage = 2;
        return [ frases.Personalizado ];
      }
      if (msg == "4") {
        banco.db[user].stage = 2;
        return [ frases.Simples ];
      }
      if (msg == "8") {
        banco.db[user].stage = 2;
        return [ frases.Ajuda , frases.Menu];
      }
      if (msg == "9") {
        banco.db[user].stage = 99;
        return [ frases.Finalizarconversaaceitou ];
      }
return [frases.Finalizarnaoentendeu]
}
exports.execute = execute;