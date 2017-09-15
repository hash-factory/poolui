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
            answer: $sce.trustAsHtml("Cryptocurrencies achieve decentralisation via a process called mining. When new transactions are created, they need to be validated. For that to happen, miners have to include the transactions in \"blocks\", which get added on top of the blockchain. When a miner successfully adds a block to the chain, he gets the associated block reward. Block rewards are also how new coins are generated and help regulate the economy of the currency.")
        },
        ],
        "Pool Help": [
        {
            title: "Where can I see my stats (balance, hashrate)?",
            answer: $sce.trustAsHtml("You can see your stats in the <a href='#/dashboard'>Dashboard</a> page. Simply put your wallet address in the \"Track live stats\" field at the bottom and click on the button, and your stats will appear. There is no need to register - just set up your miner and start mining!")
        },
        {
            title: "How do I register/log in?",
            answer: $sce.trustAsHtml("You only need to register and log in if you want to change your payout threshold. You don't need to do this if you just want to mine. <br/><br/>To register, change your miner's password field (in your config) to something like 'MinerName:your@email.com'. After submitting a few shares, you will be able to log in using your email as password. Make sure there are no typos when you do it, as this procedure can only be done once - in case of issues, head over to the <a href='https://supportxmr.chatango.com' target='new'>pool chat</a> for support, or write an email to <b>support@supportxmr.com</b>.")
        },
        {
            title: "How do I set my payout threshold?",
            answer: $sce.trustAsHtml("The payout threshold is the minimum amount that you need to earn before the pool can pay out to your wallet. Since transactions in Monero have miner fees, it's more cost effective to set a higher threshold. The default (and minimum) threshold is 0.3 XMR for standard wallets, and 5 XMR for integrated addresses / addresses with paymentID. The latter can be manually lowered to 0.3 XMR as well. <br/><br/>To change your payment threshold, click the wrench after you login via \"Login\" button on the top right.")
        },
        /*{
            title: "Are there any payout fees?",
            answer: $sce.trustAsHtml("Yes, there is a small transaction fee that gets detracted from your total due. The higher your threshold, the less fee you pay: it starts at 0.008 XMR @ 0.3 XMR threshold, and decreases linearly to 0 XMR @ 4 XMR threshold or above. ##INSERT FEE PLOT##)
        },*/
        {
            title: "When do I get my payout?",
            answer: $sce.trustAsHtml("Every 2 hours a master payment check is executed which pays out all dues. If everything goes as planned all dues that exceed the set payment thresholds are paid out. <br/><br/>In case of a wallet lock up or failure, the pool automatically requeues futher checks at 15 minute intervals until all payments are successfully completed. Once everything is paid out the system returns to the 2 hourly master cycle. <br/><br/>If you have any questions please dont hesitate to contact your pool admin.")
        },
        {
            title: "Are payments to exchanges/markets supported?",
            answer: $sce.trustAsHtml("Yes, direct payments to exchange / pool wallets are supported. The only difference when using this method is that the default payout threshold is higher (5 XMR).")
        },
        {
            title: "Did my IP get banned?",
            answer: $sce.trustAsHtml("Your IP may get temporarily banned if you submit too many invalid shares to the pool. This usually happens if your cpu/gpu is overclocked too much, or your system is unstable.<br/><br/> The ban is temporary and usually cleared in 1-2 minutes automatically. If the issues persist, you should visit the <a href='https://supportxmr.chatango.com' target='new'>pool chat</a> and ask for support from one of our admins or helpful members.")
        },
        {
            title: "How does fixed/variable difficulty work?",
            answer: $sce.trustAsHtml("When you select a pool port, the difficulty listed only represents the initial value. As soon as your miner starts submitting shares, the server will try to adjust your difficulty to reflect your hash rate. <br/><br/>This reduces the load on the pool servers, while ensuring that you still get 100% of your performance. <br/><br/>Optionally, you can set a fixed difficulty in your miner's configuration, but if you set a difficulty too high you could exceed the 60 seconds job limit and potentially lose earnings due to inefficiency. Typically, a good value is 30 * (miner hashrate). Note: minimum fixed difficulty is 2000, across all ports.")
        },
        /*{
            title: "Can i mine other coins?",
            answer: $sce.trustAsHtml("Not yet, but we may add more soon. Follow <a href='https://github.com/Snipa22/nodejs-pool/issues/27' target='_new'>https://github.com/Snipa22/nodejs-pool/issues/27</a>.")
        }*/
        ],
        "Mining":[
        {
            title: "What's the best mining hardware?",
            answer: $sce.trustAsHtml("Monero is an AISC resistant cryptocurrency - that means it should be cost prohibitive to mine monero with an FPGA/AISC - allowing desktop grade hardware to keep its share in the network hashrate and earnings. Both CPUs and GPUs can be used for mining with equally good results.<br/><br/><a href='http://monerobechmarks.info' target='_new'>http://monerobechmarks.info/</a> is a list of community collected hashrate results ordered by hardware, but be careful as some entries may not be accurate.")
        },
        /*{
            title: "What mining software should I use?",
            answer: $sce.trustAsHtml("Read the <a href='#/help/getting_started'>Getting Started</a> page for more details.")
        },*/
        {
            title: "How do I start mining? Which software should I use?",
            answer: $sce.trustAsHtml("You can start mining today if you have a computer that sits idle. Monero can be mined on CPUs, GPUs or even a Raspberry PI. To start mining you need to find the right mining software for your hardware and get going.<br/><br/>Read the <a href='#/help/getting_started'>Getting Started</a> page for more details.")
        },
        {
            title: "What is pool mining?",
            answer: $sce.trustAsHtml("If you are mining on a small scale, it becomes extremely hard and unpredictable to earn a stable profit on your mining income. Pool mining gives you the opportunity to join a group of miners and share earnings in exchange for a consistent payout. Pool fees aside, your average profit will be the same. Note that the size of the pool you mine into does not affect your earnings in any way.")
        },
        {
            title: "What is PPLNS?",
            answer: $sce.trustAsHtml("PPLNS is short for Pay Per Last N Shares. It is a method of splitting the block reward fairly among miners. PPLNS favours loyal pool members over pool hoppers. A simple explanation on how it works can be found <a href='http://give-me-coins.com/support/faq/what-is-pplns/' target='_new'>in this short article</a>. For the hardcore mathematical details, <a href='https://bitcointalk.org/index.php?topic=39832.msg486012#msg486012' target='_new'>this Bitcointalk post</a> is what you need.")
        },
        {
            title: "What does SOLO mining mean?",
            answer: $sce.trustAsHtml("Solo mining is the opposite of pool mining. You essentially submit your shares directly to the blockchain, and you rely entirely on your own hardware and blockchain. This is what people do if they want to run their own farm.")
        },
        {
            title: "Is mining profitable?",
            answer: $sce.trustAsHtml("Mining profitability depends on many different factor. Your primary costs are your electricity and the hardware you use. <br/>It is not practical to calculate the exact amount you would earn as it depends on the total hash rate of the network, difficulty and your luck.<br/><br/>An average estimate of earnings can be calculated by ")
        }
        ],
        "Support":[
        {
            title: "Chat Support",
            answer: $sce.trustAsHtml("If you need more help, drop a message in our <a href='https://supportxmr.chatango.com' target='_new' style='text-decoration: underline'>pool chat</a>.")
        },
        {
            title: "Interesting links",
            answer: $sce.trustAsHtml("<a href='https://www.monero.how' target='_new'>https://www.monero.how</a><br/><a href='https://getmonero.org' target='_new'>https://getmonero.org</a><br/><a href='https://reddit.com/r/Monero' target='_new'>https://reddit.com/r/Monero</a><br/><a href='https://reddit.com/r/moneromining' target='_new'>https://reddit.com/r/moneromining</a><br/><a href='https://monero.stackexchange.com/' target='_new'>https://monero.stackexchange.com/</a>")
        }
        ]
    }

// end
});
