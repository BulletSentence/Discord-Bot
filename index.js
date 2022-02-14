
const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
var max = 10;
var min = 1;
var maxx = 65;

let bot = new Client({
  fetchAllMembers: true,
  presence: {
    status: 'online',
    activity: {
      name: `ELDEN RING`,
      type: 'PLAYING'
    }
  }
});

function randomnumber() {
  var ret = Math.floor(Math.random() * (max - min) + min);
  return ret;
}

function start() {
  console.log(`Logged in as ${bot.user.tag}.`);
  setInterval(function () {
    const channel = bot.channels.cache.find(channel => channel.name === "geral");

    var talk = Math.floor(Math.random() * (max - min) + min);
    var vran = Math.floor(Math.random() * (maxx - min) + min);

    switch (talk) {
      case 3:
        channel.send(chating(vran));
        break;
      default:
        break;
    }
  }, 240000);
}

bot.on('ready', () => start());
bot.on('message', async message => {

  switch (message.content.toLowerCase()) {

    case 'bom dia':
    case 'bom dia!':
    case 'bum dia':
    case 'bumdinha':
    case 'bom diaaa':
      var random = randomnumber();
      await message.reply(bomdia(random));
      break;

    case 'boa tarde':
    case 'boa tarde!':
    case 'boa tardee':
    case 'boa tardee!':
    case 'boa tardeee':
      var random = randomnumber();
      await message.reply(boatarde(random));
      break;

    case 'boa noite':
    case 'boa noite!':
    case 'boa noitee':
    case 'boa noiteee!':
    case 'boa noiteee':
      var random = randomnumber();
      await message.reply(boanoite(random));
      break;

    case 'bora jogar':
    case 'bora nw':
    case 'bora new world':
    case 'bora jogar!':
    case 'bora?':
    case 'bora':
    case 'bora vavas':
    case 'bora diogo':
    case 'boraaaa':
    case 'bo jogar':
    case 'bo':
      var random = randomnumber();
      await message.reply(borajogar(random));
      break;

    case 'oi':
    case 'oi!':
    case 'oie!':
    case 'oin!':
    case 'oin':
    case 'oie':
    case 'oiee':
    case 'oieee':
    case 'oieeee':
    case 'oinn':
    case 'oinnn':
    case 'oinnnn':
    case 'oinnnnn':
      var random = randomnumber();
      await message.reply(greetings(random));
      break;
  }
});

 function chating(vran) {
        if (vran == 1) {
            return("Bora jogar Diogo?");
        } else if (vran == 2) {
            return("Bora jogar Werley");
        } else if (vran == 3) {
            return("Bora jogar Tankiano");
        } else if (vran == 4) {
            return("Bora jogar Vivi");
        } else if (vran == 5) {
            return("Bora jogar Duduh");
        } else if (vran == 6) {
            return("Bora jogar Valorant");
        } else if (vran == 7) {
            return("Bora Black Desert");
        } else if (vran == 8) {
            return("Bora jogar!");
        } else if (vran == 9) {
            return("Vcs tão fazendo o que?");
        } else if (vran == 10) {
            return("Voces tão rogando o que?");
        } else if (vran == 11) {
            return("Tão jogando?");
        } else if (vran == 12) {
            return("Bora rogar pessoal");
        } else if (vran == 13) {
            return("Tá jogando?");
        } else if (vran == 14) {
            return("Diogo corno");
        } else if (vran == 15) {
            return("Werley corno");
        } else if (vran == 16) {
            return("Cade vcs?");
        } else if (vran == 17) {
            return("Tão fazendo o que ai?");
        } else if (vran == 18) {
            return("Oh diogo");
        } else if (vran == 19) {
            return("Diogru");
        } else if (vran == 20) {
            return("Bora resenhar");
        } else if (vran == 21) {
            return("To com sono");
        } else if (vran == 22) {
            return("To cansado");
        } else if (vran == 23) {
            return("To só na resenha");
        } else if (vran == 24) {
            return("To com preguiça");
        } else if (vran == 25) {
            return("To assistindo friends");
        } else if (vran == 26) {
            return("Tão fazendo o que ai?");
        } else if (vran == 27) {
            return("Tão fazendo o que de bom?");
        } else if (vran == 28) {
            return("Queria jogar");
        } else if (vran == 29) {
            return("Tão no LOL?");
        } else if (vran == 29) {
            return("Tão no Valorant?");
        } else if (vran == 30) {
            return("Tão no New World?");
        } else if (vran == 31) {
            return("To querendo jogar, bora?");
        } else if (vran == 32) {
            return("Aqui ta chovendo");
        } else if (vran == 33) {
            return("Oieer");
        } else if (vran == 34) {
            return("Oinnnnnnnnnnn");
        } else if (vran == 35) {
            return("Tá assistindo Friends Wesle?");
        } else if (vran == 36) {
            return("Bum dia");
        } else if (vran == 37) {
            return("To triste");
        } else if (vran == 38) {
            return("Quero ser caminhoneiro");
        } else if (vran == 39) {
            return("Vai trabalhar diogo");
        } else if (vran == 40) {
            return("Queria cochilar");
        } else if (vran == 41) {
            return("Fala galera");
        } else if (vran == 42) {
            return("Queria comer bolo");
        } else if (vran == 43) {
            return("Bora brincar um pouquin");
        } else if (vran == 44) {
            return("Bora brincar");
        } else if (vran == 45) {
            return("HEHEHEHEHEHE");
        } else if (vran == 46) {
            return("Queria cochilar");
        } else if (vran == 47) {
            return("Diogo come capim");
        } else if (vran == 48) {
            return("Bora jogar The forest");
        } else if (vran == 48) {
            return("To com frio");
        } else if (vran == 49) {
            return("https://www.youtube.com/watch?v=ZFbStVAFIxA");
        } else if (vran == 50) {
            return("To com sede");
        } else if (vran == 51) {
            return("To assistindo TV");
        } else if (vran == 52) {
            return("Bora Red Dead Diogo");
        } else if (vran == 53) {
            return("Oi Oi");
        } else if (vran == 54) {
            return("Hehe");
        } else if (vran == 55) {
            return("To vendo meme no cerular");
        } else if (vran == 56) {
            return("Hoje vou espalhar fake news");
        } else if (vran == 57) {
            return("Chama chama!");
        } else if (vran == 58) {
            return("Bora assistir alguma coisa");
        } else if (vran == 49) {
            return("Sai do black desert diogo");
        } else if (vran == 50) {
            return("https://www.youtube.com/watch?v=RtWGTO2ucEw");
        } else if (vran == 51) {
            return("https://www.youtube.com/watch?v=wWFISxNVLaM");
        } else if (vran == 52) {
            return("https://www.youtube.com/watch?v=QbMX1mZlwYo");
        } else if (vran == 53) {
            return("https://www.youtube.com/watch?v=vLRJGwvgZQc");
        } else if (vran == 54) {
            return("https://www.youtube.com/watch?v=fopwnJ3mQB0");
        } else if (vran == 55) {
            return("Oh dioguinhooooo");
        } else if (vran == 56) {
            return("Oh vontade de comer torta");
        } else if (vran == 57) {
            return("To jogando galerinha");
        } else if (vran == 58) {
            return("Bora jogar Lost Ark");
        } else if (vran == 59) {
            return("Bora lost ark");
        } else if (vran == 60) {
            return("To com vontade de resenhar");
        } else if (vran == 61) {
            return("Será cadê o diogo?");
        } else if (vran == 62) {
            return("Cade o Weeeeeeeeeezi");
        } else if (vran == 63) {
            return("To brocado");
        } else if (vran == 65) {
            return("Bora animar galera");
        } else {
            return("Oiii gente!");
        }
    };

    function greetings(num) {
        if (num == 1) {
            return('Bom dia bebê');
        } else if (num == 2) {
            return('Bom dia GOSTOSO!');
        } else if (num == 3) {
            return('Bom dia Cheiroso');
        } else if (num == 4) {
            return('Bom dia lindinho');
        } else if (num == 5) {
            return('Bom dia bebezinho');
        } else if (num == 6) {
            return('Bom dia bumbumzão');
        } else if (num == 7) {
            return('Bom dia Amiguinho');
        } else if (num == 8) {
            return('Bom dia nada, bora jogar LOL');
        } else if (num == 9) {
            return('Bom dia Hetero');
        } else {
            return('Bom dia!');
        };
    }

    function bomdia(num) {
        if (num == 1) {
            return ('Bom dia bebê');
        } else if (num == 2) {
            return ('Bom dia GOSTOSO!');
        } else if (num == 3) {
            return ('Bom dia Cheiroso');
        } else if (num == 4) {
            return ('Bom dia lindinho');
        } else if (num == 5) {
            return ('Bom dia bebezinho');
        } else if (num == 6) {
            return ('Bom dia bumbumzão');
        } else if (num == 7) {
            return ('Bom dia Amiguinho');
        } else if (num == 8) {
            return ('Bom dia nada, bora jogar LOL');
        } else if (num == 9) {
            return ('Bom dia Hetero');
        } else {
            return ('Bom dia!');
        }
    };

    function boanoite(num) {
        if (num == 1) {
            return ('Boa noite bebê');
        } else if (num == 2) {
            return ('Boa noite GOSTOSO!');
        } else if (num == 3) {
            return ('Boa noite Cheiroso');
        } else if (num == 4) {
            return ('Boa noite, e sonhe com o Viana');
        } else if (num == 5) {
            return ('Boa noite, dorme comigo');
        } else if (num == 6) {
            return ('Boa noite, você é meu anjo');
        } else if (num == 7) {
            return ('Boa noite, meu ursinho');
        } else if (num == 8) {
            return ('Boa noite, nada, bora jogar Lolzin');
        } else if (num == 9) {
            return ('Boa noite bb');
        } else {
            return ('Boa noite!');
        }
    };

    function boatarde(num) {
        if (num == 1) {
            return ('Boa tarde bebê');
        } else if (num == 2) {
            return ('Boa tarde GOSTOSO!');
        } else if (num == 3) {
            return ('Boa tarde Cheiroso');
        } else if (num == 4) {
            return ('Boa tarde lindinho');
        } else if (num == 5) {
            return ('Boa tarde bebezinho');
        } else if (num == 6) {
            return ('Boa tarde bumbumzão');
        } else if (num == 7) {
            return ('Boa tarde Amiguinho');
        } else if (num == 8) {
            return ('Boa tarde nada, bora jogar LOL');
        } else if (num == 9) {
            return ('Boa tarde Hetero');
        } else {
            return ('Boa tarde!');
        }
    };

    function borajogar(num) {
        if (num == 1) {
            return ('Bora jogar Valorant');
        } else if (num == 2) {
            return ('Bora Valoras');
        } else if (num == 3) {
            return ('Bora um lolzin?');
        } else if (num == 4) {
            return ('Bora!');
        } else if (num == 5) {
            return ('Rumbora');
        } else if (num == 6) {
            return ('Simbora');
        } else if (num == 7) {
            return ('Bora!');
        } else if (num == 8) {
            return ('Boraaaaaaaa');
        } else if (num == 9) {
            return ('Bó');
        } else {
            return ('Boraaaaaaaaaaaaaaaaaaaaaa!');
        }
    };

require('./server')();
bot.login(config.token);