'use strict';

app.controller('FAQCtrl', function($scope, $location, $anchorScroll, $sce, dataService) {
	// BooHoo:p
    $scope.goto = function(topic, index) {
      var newHash = topic + '_' + index;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(newHash);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

    $scope.faq = {
        "General" : [
        {
            title: "What is Monero?",
            answer: $sce.trustAsHtml("Monero is a cryptocurrency that promises untraceability and privacy. It accomplishes this by obfuscating and encrypting transactions beyond recognition, while allowing you to discreetly view and manage your assets. You can also prove your transactions to a third party if necessary.<br/>"),
            media:
            // {
            //     "title": "Simple",
            //     "url": $sce.trustAsResourceUrl("https://www.youtube.com/embed/TZi9xx6aiuY?ecver=1")
            // }
            {
                "title": "Monero essentials video",
                "url": $sce.trustAsResourceUrl("https://www.youtube.com/embed/6DQb0cMvU7I?ecver=1")
            }
        },

        {
            title: "What is mining and why should I be interested?",
            answer: $sce.trustAsHtml("Cryptocurrencies achieve decentralisation via a process called mining. When new transactions are created, they need to be validated. Miners compete with each other to validate a group of transactions (a.k.a. block). The winning miner is paid a block reward and collects transaction fees for the work carried out. Block rewards are also how new coins are generated and help regulate the economy of the currency.")
        },
        ],
        "Pool Help": [
        {
        	title: "Where can I see my stats (balance, hashrate)?",
        	answer: $sce.trustAsHtml("You can see your stats in the <a href='#/dashboard'>Dashboard</a> page.")
        },
        {
            title: "How do payouts work?",
            answer: $sce.trustAsHtml("Every 2 hours a master payment check is executed which pays out all dues. If everything goes as planned all dues that exceed the set payment thresholds are paid out. <br/><br/>In case of a wallet lock up or failure, the pool automatically requeues futher checks at 15 minute intervals until all payments are successfully completed. Once everything is paid out the system returns to the 2 hourly master cycle.<br/><br/> If you have any questions please dont hesitate to contact your pool admin.")
        },
        {
            title: "How do I set my payout threshold?",
            answer: $sce.trustAsHtml("Payout threshold is the minimum amount that needs to be earned before the pool pays out to your wallet. Since transactions in Monero have miner fees, it's cost effective to set a higher payout threshold for your pool. The minimum value for this is 0.3 XMR.<br/><br/>To change your payment threshold, click the wrench after you login via \"Login\" button on the top right.")
        },
        /*{
            title: "Getting paid in BTC",
            answer: $sce.trustAsHtml("nodejs-pool supports direct payments to btc. This is done by using the shapeshift API to convert your XMR and send them to a BTC wallet.<br/><br/>To configure BTC payments please have a look at <a href='#/help/getting_started'>Getting Started</a> command line samples.")
        },*/
        {
            title: "Payments to exchanges/markets?",
            answer: $sce.trustAsHtml("Direct payment to exchange / pool wallets are supported. The only primary difference when using this method is that the default payout threshold is higher (5 XMR).")
        },
        {
            title: "IP Banning?",
            answer: $sce.trustAsHtml("Your IP gets banned if you submit invalid shares to the pool server. This usually happens if your card is overclocked or unstable.<br/><br/> The ban is temporary and usually cleared in 1-2 minutes. You could also contact your pool admin and request an unban.")
        },
        {
            title: "How Fixed / Variable Difficulty works",
            answer: $sce.trustAsHtml("When you select a pool port, the starting difficulty only represents your initial setting. As soon as your miner starts submitting shares the server will try to adjust your difficulty to reflect your hash rate.<br/><br/>This assures you not creating too many or too few requests to your server optimizing bandwidth consumption and server loads.<br/><br/>Optionally you could set a fixed difficulty via your miner command line options, though if you set a difficulty too high, you could exceed the 60 seconds job limit and lose earnings.")
        },
        /*{
            title: "Can i mine other coins?",
            answer: $sce.trustAsHtml("Not yet, but we may add more soon. Follow <a href='https://github.com/Snipa22/nodejs-pool/issues/27' target='_new'>https://github.com/Snipa22/nodejs-pool/issues/27</a>.")
        }*/
        ],
        "Mining":[
        {
            title: "What's the best mining hardware?",
            answer: $sce.trustAsHtml("Monero is an AISC resistant cryptocurrency - that means it should be cost prohibitive to mine monero with an FGPA/AISC - allowing desktop grade hardware to keep its share in the network hashrate and earnings. Both CPUs and GPUs can be used for mining with equally good results.<br/><br/><a href='http://monerobechmarks.info' target='_new'>http://monerobechmarks.info/</a> is a list of community collected hashrate results ordered by hardware, but be careful as some entries may not be accurate.")
        },
        {
            title: "What mining software should I use?",
            answer: $sce.trustAsHtml("Read the <a href='#/help/getting_started'>Getting Started</a> page for more details.")
        },
        {
            title: "How do I start mining?",
            answer: $sce.trustAsHtml("You can start mining today if you have a computer that sits idle. Monero can be mined on CPUs, GPUs or even a Raspberry PI. To start mining you need to find the right mining software for your hardware and get going.<br/><br/>Read the <a href='#/help/getting_started'>Getting Started</a> page for more details.")
        },
        {
            title: "What is pool mining?",
            answer: $sce.trustAsHtml("If you are mining on a small scale, it becomes extremely hard and unpredictable to earn a stable profit on your mining income. Pool mining gives you the opportunity to join a group of miners and share earnings for a consistent payout.")
        },
        {
            title: "What is PPLNS?",
            answer: $sce.trustAsHtml("PPLNS is short for Pay Per Last N Shares. It is a method of splitting the block reward fairly among miners. PPLNS favours loyal pool members over pool hoppers. For a more detailed explanation on how PPLNS works, read <a href='http://give-me-coins.com/support/faq/what-is-pplns/'>this page</a>")
        },
        {
            title: "What does SOLO mining mean?",
            answer: $sce.trustAsHtml("Solo mining is the opposite of pool mining. You essentially submit your shares directly to the blockchain, which is the most profitable method if you run your own farm.")
        },
        {
            title: "Is mining profitable?",
            answer: $sce.trustAsHtml("Mining can be profitable depending on the conditions involved. Your primary cost is your electricity and the cost of your hardware.<br/>It is not practical to calculate the exact amount you would earn as it depends on the total hash rate of the network, difficulty and your luck.<br/><br/>An average estimate of earnings can be calculated by ")
        }
        ],
        "Support":[
        {
            title: "Chat Support",
            answer: $sce.trustAsHtml("If you need more help, drop a message in our <a href='http://supportxmr.chatango.com' target='_new' style='text-decoration: underline'>pool chat</a>.")
        },
        {
            title: "Interesting links.",
            answer: $sce.trustAsHtml("<a href='http://reddit.com/r/moneromining' target='_new'>http://reddit.com/r/moneromining/</a><br/><a href='http://monero.stackexchange.com/' target='_new'>http://monero.stackexchange.com/</a>")
        }
        ]
    }

// end
});
