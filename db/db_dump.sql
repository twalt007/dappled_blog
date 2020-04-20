-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 12, 2020 at 08:30 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `dappled_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `pid` char(36) NOT NULL,
  `userId` int(10) NOT NULL,
  `postType` enum('standard','recipe') NOT NULL DEFAULT 'standard',
  `contentType` enum('philosophy','recipe') NOT NULL DEFAULT 'philosophy',
  `postTitle` varchar(255) NOT NULL,
  `postContent` mediumtext NOT NULL,
  `postQuote` tinytext,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `archivedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `pid`, `userId`, `postType`, `contentType`, `postTitle`, `postContent`, `postQuote`, `createdAt`, `updatedAt`, `archivedAt`, `deletedAt`) VALUES
(1, 'a7bfa991-455b-11ea-8fd0-a4db300c2566', 1, 'standard', 'philosophy', 'Hello World!', 'This is my first official post on my own self-created blog.\n\n1,000 lines of code begins with the first console error and 10,000 stack-overflow responses.', 'The journey of 1,000 miles begins with the first step', '2020-02-01 17:30:54', '2020-03-01 17:34:35', NULL, NULL),
(7, '49c0a8b4-4eec-11ea-aeda-a4db300c2566', 1, 'standard', 'philosophy', 'Hello World!  From the backside of the internet', 'Internet backside - curiously similar to the backside of water.  \n\nFunny that. ', 'Backsides - surprisingly unsurprising.', '2020-02-13 21:38:54', '2020-02-13 21:38:54', NULL, NULL),
(8, 'f938a733-4eee-11ea-aeda-a4db300c2566', 1, 'standard', 'philosophy', 'The Joys of CSS', 'When none of it works any more...', 'An Oxymoron is a Thing', '2020-02-13 21:58:07', '2020-03-03 21:01:44', NULL, NULL),
(9, '40d4fb51-4ef4-11ea-aeda-a4db300c2566', 1, 'standard', 'philosophy', 'esting history', 'hit', 'ers', '2020-02-13 22:35:55', '2020-02-19 20:52:04', NULL, '2020-02-19 20:52:04'),
(10, '1effc6c1-4ef5-11ea-aeda-a4db300c2566', 1, 'standard', 'philosophy', 'asdfasdf', 'adsf', 'asdf', '2020-02-13 22:42:08', '2020-03-01 16:27:13', NULL, '2020-03-01 16:27:13'),
(11, '390dad0b-4ef5-11ea-aeda-a4db300c2566', 1, 'standard', 'philosophy', 'adsf - edited', 'asdf', 'adsf', '2020-02-13 22:42:51', '2020-02-19 21:01:23', NULL, '2020-02-19 21:01:23'),
(12, '6aadfe5c-4ef5-11ea-aeda-a4db300c2566', 1, 'standard', 'philosophy', 'adf', 'adsf', 'adsf', '2020-02-13 22:44:15', '2020-02-19 21:01:02', NULL, '2020-02-19 21:01:02'),
(13, '425e2f42-4ef7-11ea-aeda-a4db300c2566', 1, 'standard', 'philosophy', 'adsf', 'adsf', 'asdf', '2020-02-13 22:57:26', '2020-02-19 21:02:02', NULL, '2020-02-19 21:02:02'),
(14, 'a7fb85fd-4ef7-11ea-aeda-a4db300c2566', 1, 'standard', 'philosophy', 'asdf - edited', 'adsf', 'asdf', '2020-02-13 23:00:17', '2020-03-01 15:50:24', NULL, '2020-03-01 15:50:24'),
(15, '6f8dee97-501c-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'title - edited', 'content', 'quote', '2020-02-15 09:56:04', '2020-03-01 16:27:21', NULL, '2020-03-01 16:27:21'),
(16, '3e68fc7c-5044-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'title', 'content', 'quote', '2020-02-15 14:41:02', '2020-03-01 16:27:27', NULL, '2020-03-01 16:27:27'),
(17, '2cd7c723-5053-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'df - testing', 'adfa', 'adsf', '2020-02-15 16:27:55', '2020-03-01 16:28:12', NULL, '2020-03-01 16:28:12'),
(18, '63d482e5-5219-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'testing o', 'te', 'e', '2020-02-17 22:39:19', '2020-02-19 20:53:23', NULL, '2020-02-19 20:53:23'),
(19, 'a33c75c3-59f2-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'Testing Success Message CSS', 'Heppabebabadepuladaschmopps', 'And the wind and the rain made a sleet ', '2020-02-27 22:22:04', '2020-02-29 16:42:41', NULL, '2020-02-29 16:42:41'),
(20, '829f684c-5b55-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'This works!`', 'soadsfadsfaljfadf;lakf ljdflkn; lwj l;flvjsl dfjaklfja;dklfndklfndkljfdkl;fqwkel;fqweklfj;kdljfakdsljfa;sdkljfal;kdsjfakl;djf', 'quoteasffjdlfjldk;jfqlwdfjiq  qjwfjkljqdfp\' ijf k;ldkfj ', '2020-02-29 16:42:21', '2020-03-01 16:28:18', NULL, '2020-03-01 16:28:18'),
(21, '46046c7c-5b57-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'This is a title', 'I\'m a lot of content.  I just got added', 'quotes for interest and cuz photos are too hard', '2020-02-29 16:54:58', '2020-03-03 21:02:09', NULL, '2020-03-03 21:02:09'),
(22, 'f6b69a66-5c23-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'Lorem Ipsum Standard', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Tincidunt eget nullam non nisi est. Id diam maecenas ultricies mi. Et sollicitudin ac orci phasellus. Lectus arcu bibendum at varius vel pharetra vel. Purus ut faucibus pulvinar elementum. Tortor posuere ac ut consequat semper. Varius morbi enim nunc faucibus a. Diam sollicitudin tempor id eu.\n\nArcu vitae elementum curabitur vitae nunc. Neque viverra justo nec ultrices dui sapien eget. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Elit eget gravida cum sociis natoque penatibus. Arcu felis bibendum ut tristique et egestas quis ipsum. Ut porttitor leo a diam. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Lacinia at quis risus sed vulputate. Scelerisque eu ultrices vitae auctor eu augue ut lectus. A condimentum vitae sapien pellentesque habitant morbi tristique.\n\nSuspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Et magnis dis parturient montes nascetur ridiculus mus. Netus et malesuada fames ac turpis egestas sed tempus urna. Libero id faucibus nisl tincidunt. Ut tortor pretium viverra suspendisse potenti nullam. Adipiscing bibendum est ultricies integer quis. Ut diam quam nulla porttitor massa. Tortor consequat id porta nibh. Donec et odio pellentesque diam volutpat commodo sed egestas. Facilisi etiam dignissim diam quis enim. Et ligula ullamcorper malesuada proin. Sit amet commodo nulla facilisi nullam. Fringilla urna porttitor rhoncus dolor purus non. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Faucibus et molestie ac feugiat sed lectus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Feugiat nisl pretium fusce id velit ut tortor pretium. Dis parturient montes nascetur ridiculus mus. Faucibus in ornare quam viverra orci sagittis. Neque aliquam vestibulum morbi blandit cursus risus.\n\nTurpis in eu mi bibendum neque egestas. Elit duis tristique sollicitudin nibh sit amet. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Ultricies lacus sed turpis tincidunt. Metus vulputate eu scelerisque felis. Tincidunt praesent semper feugiat nibh sed. Enim diam vulputate ut pharetra sit amet aliquam id. Semper eget duis at tellus at urna. Morbi leo urna molestie at elementum. Ornare aenean euismod elementum nisi quis. Consequat mauris nunc congue nisi vitae suscipit tellus.\n\nVulputate eu scelerisque felis imperdiet proin fermentum leo. Elementum nibh tellus molestie nunc non. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Convallis aenean et tortor at. Dictum non consectetur a erat nam. Maecenas pharetra convallis posuere morbi leo. Porta nibh venenatis cras sed felis. Sodales ut eu sem integer vitae justo. Sit amet cursus sit amet dictum sit amet justo donec. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Diam maecenas ultricies mi eget mauris pharetra. Pellentesque habitant morbi tristique senectus et.', 'Vanilla Lorem Ipsum - Pairs With Everything', '2020-03-01 17:20:12', '2020-03-01 17:20:12', NULL, NULL),
(23, '3df79bf0-5c24-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'Bacon Ipsum', 'Spicy jalapeno bacon ipsum dolor amet commodo qui exercitation, swine alcatra pig porchetta drumstick capicola turducken. Kevin flank leberkas pork loin, commodo shankle turkey. Alcatra do fatback shoulder swine pork loin velit sausage mollit ham tempor ad dolore ham hock. Culpa sirloin deserunt eiusmod pig, exercitation sunt laboris tongue occaecat. Ex dolore jowl, beef landjaeger tenderloin in andouille short loin bresaola irure.\n\nConsectetur aliqua tri-tip burgdoggen. Ad rump nulla voluptate prosciutto, cupidatat occaecat chuck ut. Short ribs burgdoggen lorem brisket chuck minim excepteur in leberkas ham dolore short loin proident tongue commodo. Sed non est alcatra brisket sirloin.\n\nBuffalo shank nisi irure quis. Voluptate dolore burgdoggen andouille ad, ham ea ball tip do. Shank sunt ullamco pork belly eu pastrami. Sed chislic ut irure laborum proident kevin adipisicing kielbasa ham tail capicola ea brisket. Cupim enim chuck consectetur, reprehenderit veniam ham hock. Kielbasa biltong fugiat tongue cupidatat meatball landjaeger excepteur. Chicken prosciutto proident, corned beef sint burgdoggen boudin qui commodo turkey labore rump frankfurter.\n\nAd sint labore anim, sed chislic laboris sunt eiusmod irure ut aliqua pork loin. Veniam kielbasa officia consequat, dolore beef ribs duis prosciutto turducken occaecat ground round picanha. Consequat beef ground round, magna irure in quis leberkas jerky id tri-tip labore. Esse doner qui nisi do magna pork loin pariatur. Strip steak officia pork loin t-bone.\n\nFrankfurter officia aliquip pariatur drumstick commodo incididunt anim. Consectetur biltong kielbasa, cupim shoulder shankle nostrud. Chicken ground round lorem, aliqua burgdoggen swine nisi incididunt. Burgdoggen kevin ball tip, consectetur mollit rump jerky laborum alcatra dolore salami tail ut meatball magna. Id ea picanha ribeye strip steak ham, biltong veniam pastrami shank beef ribs cow voluptate pig.\n\nDoes your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!', 'Because we could all use a little more BACON in our lives~~', '2020-03-01 17:22:11', '2020-03-01 17:22:11', NULL, NULL),
(24, '65f12f71-5c24-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'Cupcake Ipsum', 'Cupcake ipsum dolor. Sit amet cupcake pudding apple pie sugar plum sweet fruitcake. Tart powder macaroon. Lollipop icing toffee halvah donut caramels gummies tootsie roll. Sweet pie bear claw I love I love chocolate chocolate jelly cake. Topping lollipop jelly beans cotton candy. Chocolate bar macaroon pudding I love pastry fruitcake marzipan wafer dessert. Chocolate cake icing toffee brownie gummies macaroon cookie. Donut lemon drops cake I love. Halvah I love cotton candy gingerbread icing topping. Marzipan gummi bears chocolate icing pastry oat cake I love tiramisu gummies. Caramels donut I love chocolate bar candy canes chocolate tootsie roll tiramisu.\n\nPie wafer chupa chups liquorice. Cheesecake cake gummies soufflé cupcake donut I love biscuit. Pastry pudding tiramisu ice cream dragée apple pie lemon drops I love pie. Marzipan I love I love muffin. Danish jujubes tiramisu oat cake pie carrot cake sweet roll. I love brownie wafer macaroon gummies. Lollipop lollipop icing I love wafer jelly tart gingerbread. Donut I love danish. Jelly sesame snaps jujubes tootsie roll. Cookie donut biscuit. Wafer I love dessert I love cake tiramisu cheesecake chocolate cake fruitcake. Halvah chocolate cake chupa chups. Topping chupa chups carrot cake muffin topping muffin chupa chups tiramisu. Halvah jujubes danish bear claw donut pudding.\n\nCheesecake candy canes liquorice lollipop jelly beans. Chocolate cake chocolate powder danish icing cupcake. Marzipan sweet sesame snaps dessert topping carrot cake gummi bears jelly-o. Jujubes I love marshmallow ice cream halvah chupa chups muffin I love. Pastry oat cake tiramisu. Ice cream dragée powder apple pie liquorice pudding halvah. Candy I love cake topping. I love biscuit icing brownie. Gummi bears I love pudding pudding toffee cake jelly toffee tiramisu. I love pie marshmallow ice cream. I love cookie tart. Sesame snaps caramels brownie carrot cake donut I love cake. Candy pudding powder bear claw candy fruitcake croissant I love. Jelly-o I love lollipop lollipop cotton candy.\n\nDessert cupcake I love lollipop chocolate bar. Powder gummies caramels candy canes sweet roll gummi bears cookie. Carrot cake cheesecake liquorice I love donut I love gingerbread cookie candy canes. Cake candy canes caramels gummi bears I love jelly beans dragée pie. Liquorice croissant sweet roll. Fruitcake sweet carrot cake dragée gummi bears. Sweet roll gummi bears liquorice I love cheesecake caramels cake oat cake I love. Jelly gummi bears bear claw carrot cake powder. Icing caramels chupa chups chocolate tiramisu bonbon. Dragée powder brownie cookie topping cotton candy lemon drops topping. Lemon drops toffee pudding I love muffin I love topping candy jelly beans. Ice cream apple pie oat cake macaroon I love I love danish oat cake soufflé. Topping I love gummies bonbon ice cream. Tootsie roll chupa chups sesame snaps topping danish.\n\nJelly beans chocolate cake biscuit dessert cheesecake. Bonbon I love marzipan wafer. Topping dragée soufflé icing lollipop chupa chups. I love powder candy canes I love candy sweet roll biscuit. I love tiramisu wafer soufflé I love donut wafer. Halvah I love lollipop I love. Sweet roll cake gummi bears jujubes cheesecake chupa chups dragée I love tart. Bonbon tart dessert pastry candy canes. Jelly beans jelly-o dessert muffin tart jujubes jelly beans I love. Liquorice cake danish brownie. Cheesecake pastry soufflé bear claw. Apple pie tart tootsie roll chupa chups tootsie roll wafer. Tart cupcake candy gummi bears. Cupcake jelly beans tiramisu topping.', 'Had enough of cupcakes yet?  Personally, I\'d rather the full 8\"...', '2020-03-01 17:23:18', '2020-03-01 17:23:18', NULL, NULL),
(25, 'a0aa0c01-5c24-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'Veggie Ipsum', 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.\n\nGumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.\n\nTurnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.\n\nNori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.\n\nCelery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.\n\nPea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.', 'Veggies to balance all those cupcakes and baconnnnnnn', '2020-03-01 17:24:57', '2020-03-01 17:24:57', NULL, NULL),
(26, '441004fe-5c25-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'Yar Pirate Ipsum', 'Yellow Jack yard ho jack Sink me snow line hail-shot hogshead. Ho six pounders Yellow Jack topmast grog blossom run a shot across the bow quarterdeck no prey, no pay deadlights. Blow the man down rigging lookout driver Sail ho gally lee landlubber or just lubber spike. Yard black spot loot doubloon weigh anchor ye plunder Admiral of the Black barque. Boom league jolly boat topmast chase hardtack to go on account poop deck Blimey. Ho sheet six pounders pirate bilge rat square-rigged yo-ho-ho ye haul wind.\n\nGrog fire in the hole reef Jack Ketch line trysail flogging quarter dance the hempen jig. Salmagundi jolly boat Plate Fleet square-rigged Yellow Jack topgallant black spot galleon barkadeer. Shiver me timbers reef sails mizzenmast ballast wherry provost pinnace scourge of the seven seas holystone. Capstan topgallant wench hulk yawl bilge water lateen sail driver draught. Hang the jib cackle fruit gunwalls bilged on her anchor gibbet six pounders dead men tell no tales driver splice the main brace. Blimey log tack measured fer yer chains Nelsons folly gunwalls salmagundi scourge of the seven seas draft.\n\nCorsair belaying pin nipperkin grapple Shiver me timbers black jack squiffy Buccaneer reef. Swing the lead scurvy knave Blimey topgallant hail-shot Sink me heave to lugger. Sink me doubloon landlubber or just lubber spanker to go on account sutler yawl Chain Shot grapple. Crow\'s nest Blimey tackle hang the jib clap of thunder salmagundi cutlass furl Barbary Coast. Blow the man down squiffy prow hardtack Jack Tar schooner overhaul piracy Arr. Clipper carouser belay jolly boat red ensign tack grog swing the lead provost.', 'Adventures by sea ~ Jack Sparrow anyone?', '2020-03-01 17:29:31', '2020-03-01 17:29:31', NULL, NULL),
(27, '86075368-5c25-11ea-b52c-a4db300c2566', 1, 'standard', 'philosophy', 'Astro Ipsum Logo Lorem', 'Orion\'s sword cosmos circumnavigated decipherment dream of the mind\'s eye radio telescope? The sky calls to us the ash of stellar alchemy preserve and cherish that pale blue dot a very small stage in a vast cosmic arena star stuff harvesting star light a still more glorious dawn awaits. Quis nostrum exercitationem ullam corporis suscipit laboriosam adipisci velit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.\n\nOrion\'s sword descended from astronomers are creatures of the cosmos at the edge of forever concept of the number one encyclopaedia galactica. Adipisci velit kindling the energy hidden in matter two ghostly white figures in coveralls and helmets are soflty dancing nisi ut aliquid ex ea commodi consequatur bits of moving fluff consectetur? Two ghostly white figures in coveralls and helmets are soflty dancing adipisci velit a still more glorious dawn awaits brain is the seed of intelligence brain is the seed of intelligence quis nostrum exercitationem ullam corporis suscipit laboriosam.\n\nParoxysm of global death nisi ut aliquid ex ea commodi consequatur worldlets inconspicuous motes of rock and gas colonies Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur? Courage of our questions courage of our questions rings of Uranus permanence of the stars intelligent beings how far away. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem dream of the mind\'s eye a mote of dust suspended in a sunbeam two ghostly white figures in coveralls and helmets are soflty dancing gathered by gravity consectetur.', 'Adventures by stars - follow the stars and turn the page!', '2020-03-01 17:31:22', '2020-03-01 17:31:22', NULL, NULL),
(28, '9163b5b1-60cc-11ea-9633-a4db300c2566', 1, 'standard', 'philosophy', 'Testing Image Post', 'image post', 'testing image post', '2020-03-07 15:37:11', '2020-03-31 21:12:19', NULL, '2020-03-31 21:12:19'),
(29, '85bf1738-60d1-11ea-9633-a4db300c2566', 1, 'standard', 'philosophy', 'testing image', 'testing image', 'testing image', '2020-03-07 16:12:39', '2020-03-31 21:11:36', NULL, '2020-03-31 21:11:36'),
(30, 'cef7d525-60d1-11ea-9633-a4db300c2566', 1, 'standard', 'philosophy', 'test image', 'test image', 'test image', '2020-03-07 16:14:42', '2020-03-31 21:11:44', NULL, '2020-03-31 21:11:44'),
(31, '89e02252-60d2-11ea-9633-a4db300c2566', 1, 'standard', 'philosophy', 'test image', 'test image', 'test image', '2020-03-07 16:19:56', '2020-03-24 22:06:24', NULL, '2020-03-24 22:06:24'),
(32, 'a0f532ee-6bb9-11ea-89c7-00ffaad58ca9', 1, 'standard', 'philosophy', 'Testing Image', 'Testing Image', 'Testing Image', '2020-03-21 14:19:20', '2020-03-24 22:06:38', NULL, '2020-03-24 22:06:38'),
(33, '84880acb-7175-11ea-a4d8-00ffaad58ca9', 1, 'standard', 'philosophy', 'testing image', 'testing image', 'testing image', '2020-03-28 21:26:53', '2020-03-31 21:11:50', NULL, '2020-03-31 21:11:50'),
(34, 'c3fd3b31-717a-11ea-a4d8-00ffaad58ca9', 1, 'standard', 'philosophy', 'testing image', 'testing image', 'testing image', '2020-03-28 22:04:27', '2020-03-31 21:12:11', NULL, '2020-03-31 21:12:11'),
(35, '81d88ca8-717b-11ea-a4d8-00ffaad58ca9', 1, 'standard', 'philosophy', 'test uploads', 'test uploads', 'test uploads', '2020-03-28 22:09:46', '2020-03-31 21:12:02', NULL, '2020-03-31 21:12:02'),
(36, '35449eb7-717c-11ea-a4d8-00ffaad58ca9', 1, 'standard', 'philosophy', 'tat', 'tat', 'tat', '2020-03-28 22:14:47', '2020-03-31 21:11:56', NULL, '2020-03-31 21:11:56'),
(37, 'ef0b6240-79fe-11ea-b28d-00ffaad58ca9', 1, 'standard', 'philosophy', 'verifying and chekcing', 'verifying', 'verifying', '2020-04-08 18:10:42', '2020-04-08 18:11:52', NULL, '2020-04-08 18:11:52'),
(38, 'eed097fb-7adb-11ea-b28d-00ffaad58ca9', 1, 'standard', 'philosophy', 'teaw', 'tewt', 'tw', '2020-04-09 20:32:41', '2020-04-09 20:32:47', NULL, '2020-04-09 20:32:47');

-- --------------------------------------------------------

--
-- Table structure for table `userAuth`
--

CREATE TABLE `userAuth` (
  `id` int(10) UNSIGNED NOT NULL,
  `pid` char(36) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userAuth`
--

INSERT INTO `userAuth` (`id`, `pid`, `firstName`, `lastName`, `email`, `userName`, `password`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'a9ec5c8d-455a-11ea-8fd0-a4db300c2566', 'Tatumn', 'Walter', 'tatumnwalter@gmail.com', 'twalt007', 'Perseverence88', '2020-02-01 17:23:48', '2020-02-15 09:14:16', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userAuth`
--
ALTER TABLE `userAuth`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `userAuth`
--
ALTER TABLE `userAuth`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;