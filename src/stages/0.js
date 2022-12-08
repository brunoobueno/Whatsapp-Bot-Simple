const frases = require("../Frases/frases");
const banco = require("../banco");

function execute(user, msg) {

  if (user == '5512988981079@c.us' || user == '5512991161373@c.us' || user == '5512991098342@c.us') {
  banco.db[user].stage = 5;
} else {

  banco.db[user].stage = 1;
  return [ frases.Ola , frases.Menu ];
}

}

exports.execute = execute;
