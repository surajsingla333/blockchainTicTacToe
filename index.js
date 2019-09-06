var express = require('express');
var readline = require('readline');
var Web3 = require('web3');

var contractData = require('./contractData')
var game = require('./game');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

var abi = contractData.abi;
var bytecode = contractData.bytecode;

var app = express();

var myContract = new web3.eth.Contract(abi);
var _rl;

_init(readline);

function _init(readline) {
    _rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

class GameStates {
    constructor(player1Address, player1amount) {
        this.player1 = player1Address;
        this.player1Escrow = player1amount;
        this.player2 = null;
        this.player2Escrow = null;
    }

    joinGame(player2Address, player2amount) {
        this.player2 = player2Address;
        this.player2Escrow = player2amount
    }
}

var gameObj = {};

function _contractDeploy(_account, _value) {
    myContract.deploy({
        data: bytecode.object
    })
        .send({
            from: _account,
            gas: 4712388,
            gasPrice: '100000000000',
            value: _value
        }, function (error, transactionHash) { console.log("\nTransactionHash or Error check\n") })
        .on('error', function (error) { console.log(`\nError : ${error}\n`); _startQuestions()})
        .on('transactionHash', function (transactionHash) { console.log(`\nTransaction Hash : ${transactionHash}\n`) })
        .on('receipt', function (receipt) {
            console.log(`\nRecepient Contract Address: ${receipt.contractAddress}\n`) // contains the new contract address
        })
        .then(function (newContractInstance) {
            obj = new GameStates(_account, _value);
            gameObj[newContractInstance.options.address] = obj;
            // console.log(gameObj);
            // console.log(`\nNew Contract Instance Options Address : ${newContractInstance.options.address}\n`) // instance with the new contract address
            // web3.eth.getBalance(contractAddress).then((e) => {console.log(`\n\n\nContract BALANce : ${e}\n\n\n`)})
            _startQuestions();
        });
}

function _contractJoin(_ad, _p2, _val){
    contractInstance = new web3.eth.Contract(abi, _ad);
    contractInstance.methods.setupPlayer2().send({
        from: _p2,
        value: _val
    }, function (error, transactionHash) { console.log("\nTransactionHash or Error check\n");})
    .on('transactionHash', function(hash){
        console.log(`\nTansaction Hash : ${hash}\n`);
    })
    .on('receipt', function(receipt){
        console.log(`\nRecepient ${receipt}\n`);
    })
    .on('error', function (error) { console.log(`\nError : ${error}\n`); _startQuestions()})
    .then(function (newFunction) {
        gameObj[_ad].player2 = _p2;
        gameObj[_ad].player2Escrow = _val;   
        // console.log(gameObj);
        // console.log(`\nNew Contract Instance Options Address : ${newFunction}\n`) // instance with the new contract address
        // web3.eth.getBalance(_ad).then((e) => {console.log(`\n\n\nContract BALANce : ${e}\n\n\n`)})
        runGame(_ad, gameObj[_ad].player1, gameObj[_ad].player2);
    });
}

function _finalResult(_game, _winner){
    console.log(_game, _winner);
    contractInstance = new web3.eth.Contract(abi, _game);
    contractInstance.methods.sendToWinner(_winner).send({
        from: gameObj[_game].player1,
    }, function (error, transactionHash) { console.log("\nTransactionHash or Error check\n");})
    .on('transactionHash', function(hash){
        console.log(`\nTansaction Hash : ${hash}\n`);
    })
    .on('receipt', function(receipt){
        // console.log(`\nRecepient ${receipt}\n`);
    })
    .on('error', function (error) { console.log(`\nError : ${error}\n`); _startQuestions()})
    .then(function (newFunction) {
        // console.log(gameObj);
        delete gameObj[_game];
        // console.log(gameObj);
        // console.log(`\nNew Contract Instance Options Address : ${newFunction}\n`) // instance with the new contract address
        _startQuestions();
    });
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runGame(_game, _p1, _p2) {
    await sleep(5000);
    game.gameStart(_game, _p1, _p2);
}

module.exports.result = function(_game, _winner){
    _finalResult(_game, _winner);
}

function _newGame() {
    _rl.question("Enter your wallet address and Bet amount (space seperated) : \n", (ans) => {
        a = ans.split(" ");
        _contractDeploy(a[0], parseInt(a[1]));
    })
}

function _oldGame(_add) {
    _rl.question("Enter your wallet address and Bet amount (space seperated) : \n", (ans) => {
        a = ans.split(" ");
        _contractJoin(_add, a[0], parseInt(a[1]));
    })
}

function _joinGame() {
    _rl.question("Enter the existing game address : ", (ans) => {
        if(!gameObj[ans]){
            _joinGame()
        }
        else{
            _oldGame(ans);
        }
    })
}

function _contractDetails(){
    console.log("In Contract Details");
    console.log("\n");
    console.log(myContract.methods.player1()._method.outputs)
    console.log("\n");
    console.log(myContract.methods.player2)
    console.log("\n");
    console.log(myContract.methods.player1Escrow)
    console.log("\n");
    console.log(myContract.methods.player2Escrow)
    console.log("\n");

    contractInstance.methods.player1().call(function(err, res) {
        if(err){
            console.log(err);
        }
        else {
            console.log(res);
        }
    });
    contractInstance.methods.player2().call(function(err, res) {
        if(err){
            console.log(err);
        }
        else {
            console.log(res);
        }
    });
    contractInstance.methods.player1Escrow().call(function(err, res) {
        if(err){
            console.log(err);
        }
        else {
            console.log(res);
        }
    });
    contractInstance.methods.player2Escrow().call(function(err, res) {
        if(err){
            console.log(err);
        }
        else {
            console.log(res);
        }
    });
    _startQuestions();
}

function _startQuestions() {
    _rl.question("Game Options : \n 1) New Game \n 2) Join Existing Game \n 3) Exit \nChoose from option 1, 2, or 3\n", (answer) => {
        if (parseInt(answer) == 1) {
            _newGame();
        }
        else if (parseInt(answer) == 2) {
            if(Object.keys(gameObj).length == 0){
                console.log("No existing Game...")
                _startQuestions();
            }
            else{
            _joinGame();                
            }
        }
        else if(parseInt(answer) == 3){
            console.log("Quitting...");
            process.exit();
        }
        // else if(parseInt(a[0]) == 4){
        //     console.log("Getting Contract details");
        //     _finalResult(a[1]);
        // }
        else {
            console.log("Wrong choice");
            _startQuestions();
        }
    })
}


// _startQuestions();
app.listen(3000, function () {
    _startQuestions();
})