/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/06/01/hello-world/index.html","f1b3adc360cd255c86549889e05d09fa"],["/2022/07/16/01-Urllib/index.html","0817030fc6bd74b769950c21b35fc61f"],["/2022/07/16/02-解析/index.html","8031b157c6f344319a1c723ac08b963e"],["/2022/07/16/03-selenium/index.html","21fa5c10d64b61177c3d5e8e58359b08"],["/2022/07/16/04-requests/index.html","c78b4149e1ccf7e0bcf69635cdb6a24f"],["/2022/07/16/05-scrapy/index.html","1bf3880f56b4cd6ec85c99017a319baf"],["/2022/07/16/Python基础/index.html","0438c8096b12f76e10a1754bed0d317c"],["/2022/07/16/day01-java基础语法/index.html","24c56cde2bb4d0adc3cad90eeef08605"],["/2022/07/16/day01-java基础语法/图片1.jpg","1a5cd58fae2ca4a1bd6f9c501c97ec5f"],["/2022/07/16/day02-Java基础语法/index.html","d9fbd247938ad59c4eb629a30bb41ab9"],["/2022/07/16/day02-Java基础语法/图片1.png","7a4ddfe29b9393d3832e7461e2b980e8"],["/2022/07/16/day02-Java基础语法/图片2.png","07d62f15ff1d5731b786f809d570d96b"],["/2022/07/16/day02-Java基础语法/图片3.png","b34170288165c6d6fc387078889b6e0a"],["/2022/07/16/day02-Java基础语法/图片4.png","eb6e0bf1499c1a147273aeb0f8d60d72"],["/2022/07/16/day02-Java基础语法/图片5.png","d0d263e490876f9b277743f3e1296408"],["/2022/07/16/day03-switch-循环语句/index.html","616e11758fd114abe3e13c7cc1c22bf1"],["/2022/07/16/day04-IDEA-数组/1591007817165.png","5bafc36d2f552cc8c99f898cf0736adc"],["/2022/07/16/day04-IDEA-数组/1591007925899.png","5e19d036649392f7d25dad023794cb1a"],["/2022/07/16/day04-IDEA-数组/1591007957052.png","ebd7f1c24595205eb3e6d63d3d45eaca"],["/2022/07/16/day04-IDEA-数组/index.html","f52c6bdd58b5533a0bac85731c7a0a39"],["/2022/07/16/day05-方法/index.html","883b43474430f6bf1fd77a41f7265b67"],["/2022/07/16/day06-Debug-基础练习/1590936221838.png","6b60ebd61f5961ff374910ed02fd8eee"],["/2022/07/16/day06-Debug-基础练习/1590936342865.png","a12249a5ca9c965464c01e3508263391"],["/2022/07/16/day06-Debug-基础练习/1590936493344.png","19a063a3b3b99e90e5858328fadb9b74"],["/2022/07/16/day06-Debug-基础练习/1590936529957.png","1b9229e235393efdeee5507978cad844"],["/2022/07/16/day06-Debug-基础练习/1590936548060.png","3e076c660b1039d8d1677dacc8e6c0fe"],["/2022/07/16/day06-Debug-基础练习/1590936726746.png","cda6a4dac1ff3176dab0f26d54592fc6"],["/2022/07/16/day06-Debug-基础练习/1590936745245.png","e42b77a35e34fa79261867a0ba1668f5"],["/2022/07/16/day06-Debug-基础练习/1590937009286.png","a2cfad7d713131a48c5290beb7038bd3"],["/2022/07/16/day06-Debug-基础练习/1590937024104.png","9078f4cb7f762624ca8306965f306fc9"],["/2022/07/16/day06-Debug-基础练习/1590937235620.png","7bdebd04701bd3e1e9cbcf043393f3f0"],["/2022/07/16/day06-Debug-基础练习/index.html","283ce3f7377b7fb2bc3ea99b552f67dc"],["/2022/07/16/day07-面向对象/1590938666222.png","8be36e99ecb17acf7580ad32bbbc8723"],["/2022/07/16/day07-面向对象/1590938693756.png","656b197c1d0960f32093f5c4de796118"],["/2022/07/16/day07-面向对象/1590938711726.png","19312a424f5c7385c0cccb9918df7fbf"],["/2022/07/16/day07-面向对象/1590938942838.png","966679e739043ad658ba2bcdd60b0f0d"],["/2022/07/16/day07-面向对象/1590938969305.png","7b5263ff81b3499fa3af0e55fcb369b7"],["/2022/07/16/day07-面向对象/index.html","8ea3bbdc00be178c7f061757082aa679"],["/2022/07/16/day08-常用API/1590939947722.png","98a3fe358fcb52fa2517ae170d74ada8"],["/2022/07/16/day08-常用API/index.html","61af60a65436fd9bd820e481052bb787"],["/2022/07/16/day09-ArrayList集合-学生管理系统/index.html","4b4799411b657344c9fcf9c8e8bd410c"],["/2022/07/17/Git/01_版本控制介绍-1658052385732.png","68c734d2ab132dc61bbbe681b8a7af34"],["/2022/07/17/Git/01_版本控制介绍.png","68c734d2ab132dc61bbbe681b8a7af34"],["/2022/07/17/Git/02_开发中的麻烦-1658052385733.png","98dd57401c2418a7aa78cf03dca02649"],["/2022/07/17/Git/02_开发中的麻烦.png","98dd57401c2418a7aa78cf03dca02649"],["/2022/07/17/Git/03_开发中的麻烦-1658052385733.png","f326596a8fbe07cf34695e15d027ce23"],["/2022/07/17/Git/03_开发中的麻烦.png","f326596a8fbe07cf34695e15d027ce23"],["/2022/07/17/Git/04_开发中的麻烦-1658052385733.png","f701f753242c1cd5070eff33a239a757"],["/2022/07/17/Git/04_开发中的麻烦.png","f701f753242c1cd5070eff33a239a757"],["/2022/07/17/Git/05_开发中的麻烦-1658052385733.png","88e41f93f6165857322a15ae0d7072b1"],["/2022/07/17/Git/05_开发中的麻烦.png","88e41f93f6165857322a15ae0d7072b1"],["/2022/07/17/Git/06_svn和git的对比-1658052385733.png","990ce86391ec1a6abc7b1cc84d47df94"],["/2022/07/17/Git/06_svn和git的对比.png","990ce86391ec1a6abc7b1cc84d47df94"],["/2022/07/17/Git/07_svn和git的对比-1658052385733.png","5077fe17935a8cd05612bee2e2791c31"],["/2022/07/17/Git/07_svn和git的对比.png","5077fe17935a8cd05612bee2e2791c31"],["/2022/07/17/Git/08_Git的下载-1658052385733.png","6826a6168107584063af974bde2c06c5"],["/2022/07/17/Git/08_Git的下载.png","6826a6168107584063af974bde2c06c5"],["/2022/07/17/Git/09_Git的安装01-1658052385733.png","698b91daf08373779b5d6a01f9f661dd"],["/2022/07/17/Git/09_Git的安装01.png","698b91daf08373779b5d6a01f9f661dd"],["/2022/07/17/Git/10_Git的安装02-1658052385733.png","0290effe3ef6f6cc8e2f34cbe441b640"],["/2022/07/17/Git/10_Git的安装02.png","0290effe3ef6f6cc8e2f34cbe441b640"],["/2022/07/17/Git/11_Git的安装03-1658052385733.png","5edaffc66c68e509975d0c2047a697a8"],["/2022/07/17/Git/11_Git的安装03.png","5edaffc66c68e509975d0c2047a697a8"],["/2022/07/17/Git/12_Git的安装04-1658052385733.png","4ecca8883f4ca6f10fa0ebaca633efdc"],["/2022/07/17/Git/12_Git的安装04.png","4ecca8883f4ca6f10fa0ebaca633efdc"],["/2022/07/17/Git/13_Git的安装05-1658052385733.png","d6575b9cd1fca187ac599d905cc3547e"],["/2022/07/17/Git/13_Git的安装05.png","d6575b9cd1fca187ac599d905cc3547e"],["/2022/07/17/Git/14_Git的安装06-1658052385733.png","c9faa24198153b6ae85e3f6dc014127a"],["/2022/07/17/Git/14_Git的安装06.png","c9faa24198153b6ae85e3f6dc014127a"],["/2022/07/17/Git/15_Git的安装07-1658052385733.png","ce107eade77bfd498b19dd69ed86a7de"],["/2022/07/17/Git/15_Git的安装07.png","ce107eade77bfd498b19dd69ed86a7de"],["/2022/07/17/Git/16_TortiseGit的安装-1658052385733.png","b235882bc83d5a9b181c10e46490305a"],["/2022/07/17/Git/16_TortiseGit的安装.png","b235882bc83d5a9b181c10e46490305a"],["/2022/07/17/Git/17_TortiseGit的安装-1658052385733.png","bfe779803f71a4744858d4d1ce328242"],["/2022/07/17/Git/17_TortiseGit的安装.png","bfe779803f71a4744858d4d1ce328242"],["/2022/07/17/Git/18_TortiseGit的安装-1658052385733.png","4a6cf59469eca362fb13c94fc4679750"],["/2022/07/17/Git/18_TortiseGit的安装.png","4a6cf59469eca362fb13c94fc4679750"],["/2022/07/17/Git/19_TortiseGit的安装-1658052385733.png","d69ab02578675f7b573883d62d439653"],["/2022/07/17/Git/19_TortiseGit的安装.png","d69ab02578675f7b573883d62d439653"],["/2022/07/17/Git/20_TortiseGit的安装-1658052385733.png","2e3129ea3251355990f17036c1431578"],["/2022/07/17/Git/20_TortiseGit的安装.png","2e3129ea3251355990f17036c1431578"],["/2022/07/17/Git/21_TortiseGit的安装-1658052385733.png","d002e71b220dcaebdafac2052318f6d5"],["/2022/07/17/Git/21_TortiseGit的安装.png","d002e71b220dcaebdafac2052318f6d5"],["/2022/07/17/Git/22_TortiseGit的安装-1658052385733.png","1d16476b7534ddc925d26801240852ad"],["/2022/07/17/Git/22_TortiseGit的安装.png","1d16476b7534ddc925d26801240852ad"],["/2022/07/17/Git/23_TortiseGit的安装-1658052385733.png","c57b392e135c75836603022e857a4ed5"],["/2022/07/17/Git/23_TortiseGit的安装.png","c57b392e135c75836603022e857a4ed5"],["/2022/07/17/Git/24_TortiseGit的安装-1658052385733.png","338fbdc7b294c95024df474d176dfc47"],["/2022/07/17/Git/24_TortiseGit的安装.png","338fbdc7b294c95024df474d176dfc47"],["/2022/07/17/Git/25_TortiseGit的安装-1658052385734.png","f470d1f6c4c7680e0c9a234bdb22108b"],["/2022/07/17/Git/25_TortiseGit的安装.png","f470d1f6c4c7680e0c9a234bdb22108b"],["/2022/07/17/Git/26_TortiseGit的安装-1658052385734.png","6a1eb6b492df28b2e96d1e3b7f8676b3"],["/2022/07/17/Git/26_TortiseGit的安装.png","6a1eb6b492df28b2e96d1e3b7f8676b3"],["/2022/07/17/Git/27_TortiseGit的安装-1658052385734.png","4ec34a8229621d2fd6c7b2efab528b47"],["/2022/07/17/Git/27_TortiseGit的安装.png","4ec34a8229621d2fd6c7b2efab528b47"],["/2022/07/17/Git/28_TortiseGit的安装-1658052385734.png","64928e9e9fd92a46158504d34f8d9ed6"],["/2022/07/17/Git/28_TortiseGit的安装.png","64928e9e9fd92a46158504d34f8d9ed6"],["/2022/07/17/Git/29_TortiseGit的安装-1658052385734.png","df3c4d592b9d6b3cffa6f554270f3c21"],["/2022/07/17/Git/29_TortiseGit的安装.png","df3c4d592b9d6b3cffa6f554270f3c21"],["/2022/07/17/Git/30_TortiseGit的安装-1658052385734.png","c8c1c9a0076e076b480fdb74042e8bdf"],["/2022/07/17/Git/30_TortiseGit的安装.png","c8c1c9a0076e076b480fdb74042e8bdf"],["/2022/07/17/Git/31_Git基本工作流程-1658052385734.png","09a18ef826ccbb5d5a79aee78a372756"],["/2022/07/17/Git/31_Git基本工作流程.png","09a18ef826ccbb5d5a79aee78a372756"],["/2022/07/17/Git/32_Git工作流程-1658052385734.png","89b3598107193f1e95a281083c9f35c8"],["/2022/07/17/Git/32_Git工作流程.png","89b3598107193f1e95a281083c9f35c8"],["/2022/07/17/Git/33_Git工作流程-1658052385734.png","090d080819bc5dfde7088c2c648f059a"],["/2022/07/17/Git/33_Git工作流程.png","090d080819bc5dfde7088c2c648f059a"],["/2022/07/17/Git/34_Git工作流程-1658052385734.png","b278a638ea377d971fa002f7d5f6e58b"],["/2022/07/17/Git/34_Git工作流程.png","b278a638ea377d971fa002f7d5f6e58b"],["/2022/07/17/Git/35_Git工作流程-1658052385734.png","246bedd854df75d65bcdd7cf627d4fba"],["/2022/07/17/Git/35_Git工作流程.png","246bedd854df75d65bcdd7cf627d4fba"],["/2022/07/17/Git/36_Git工作流程-1658052385734.png","9f5a7f5513e748e14c22a0ab61ba9dd1"],["/2022/07/17/Git/36_Git工作流程.png","9f5a7f5513e748e14c22a0ab61ba9dd1"],["/2022/07/17/Git/37_Git工作流程-1658052385734.png","150edca84641d52ec8b6a580d45051de"],["/2022/07/17/Git/37_Git工作流程.png","150edca84641d52ec8b6a580d45051de"],["/2022/07/17/Git/38_Git工作流程-1658052385734.png","a792349091fee136440fa30c66cfdb08"],["/2022/07/17/Git/38_Git工作流程.png","a792349091fee136440fa30c66cfdb08"],["/2022/07/17/Git/39_Git工作流程-1658052385734.png","9e1ad21f2f35b27e776935fcc84ffaad"],["/2022/07/17/Git/39_Git工作流程.png","9e1ad21f2f35b27e776935fcc84ffaad"],["/2022/07/17/Git/40_Git工作流程-1658052385734.png","ca046b61f858b1f4a674d52096438fd9"],["/2022/07/17/Git/40_Git工作流程.png","ca046b61f858b1f4a674d52096438fd9"],["/2022/07/17/Git/41_Git工作流程-1658052385734.png","3cbb8f2fce9e19d1b9f67ce80bac11ec"],["/2022/07/17/Git/41_Git工作流程.png","3cbb8f2fce9e19d1b9f67ce80bac11ec"],["/2022/07/17/Git/42_Git工作流程-1658052385734.png","6e14ebe34a9007f1a17bdf30615dcccb"],["/2022/07/17/Git/42_Git工作流程.png","6e14ebe34a9007f1a17bdf30615dcccb"],["/2022/07/17/Git/43_Git工作流程-1658052385734.png","ba8a5299d908a6a9cc3b42a73aa13ab9"],["/2022/07/17/Git/43_Git工作流程.png","ba8a5299d908a6a9cc3b42a73aa13ab9"],["/2022/07/17/Git/44_历史版本切换-1658052385734.png","aa0f2dac07a3bca15a587a20a64f8b21"],["/2022/07/17/Git/44_历史版本切换.png","aa0f2dac07a3bca15a587a20a64f8b21"],["/2022/07/17/Git/45_分支工作流程介绍-1658052385734.png","e5358c2bec67ecebf0d6dbb49286d80b"],["/2022/07/17/Git/45_分支工作流程介绍.png","e5358c2bec67ecebf0d6dbb49286d80b"],["/2022/07/17/Git/46_远程仓库-1658052385734.png","1424f64e4de654d46f4b69f26e2eec4d"],["/2022/07/17/Git/46_远程仓库.png","1424f64e4de654d46f4b69f26e2eec4d"],["/2022/07/17/Git/47_码云的注册-1658052385734.png","c3ca736540ccf76bfca723bde42ced83"],["/2022/07/17/Git/47_码云的注册.png","c3ca736540ccf76bfca723bde42ced83"],["/2022/07/17/Git/48_码云的注册-1658052385734.png","b9d098c38e9a2945bd295cba78d17d07"],["/2022/07/17/Git/48_码云的注册.png","b9d098c38e9a2945bd295cba78d17d07"],["/2022/07/17/Git/49_码云的注册-1658052385734.png","7d68b4b0f9672270bc6cefc415702285"],["/2022/07/17/Git/49_码云的注册.png","7d68b4b0f9672270bc6cefc415702285"],["/2022/07/17/Git/50_创建远程仓库-1658052385734.png","72898fefef14cfb521d7ffa9b513c051"],["/2022/07/17/Git/50_创建远程仓库.png","72898fefef14cfb521d7ffa9b513c051"],["/2022/07/17/Git/51_创建远程仓库-1658052385734.png","be6a63f39d0288bd5eb0c029b75e1fc4"],["/2022/07/17/Git/51_创建远程仓库.png","be6a63f39d0288bd5eb0c029b75e1fc4"],["/2022/07/17/Git/52_配置SSH公钥-1658052385734.png","407bb728d5e9634d88c3d02349a9b97b"],["/2022/07/17/Git/52_配置SSH公钥.png","407bb728d5e9634d88c3d02349a9b97b"],["/2022/07/17/Git/53_配置SSH公钥-1658052385734.png","48bacab6e9b5bd27d0093455672b50e0"],["/2022/07/17/Git/53_配置SSH公钥.png","48bacab6e9b5bd27d0093455672b50e0"],["/2022/07/17/Git/54_配置SSH公钥-1658052385734.png","3f8903222dbac214b0bb58b6fb7ebbf6"],["/2022/07/17/Git/54_配置SSH公钥.png","3f8903222dbac214b0bb58b6fb7ebbf6"],["/2022/07/17/Git/55_配置SSH公钥-1658052385734.png","6067866826c6addd230464f8a7a531bf"],["/2022/07/17/Git/55_配置SSH公钥.png","6067866826c6addd230464f8a7a531bf"],["/2022/07/17/Git/56_配置SSH公钥-1658052385734.png","ed1c483865875d178fd5a9d9ac14ef79"],["/2022/07/17/Git/56_配置SSH公钥.png","ed1c483865875d178fd5a9d9ac14ef79"],["/2022/07/17/Git/57_配置SSH公钥-1658052385734.png","32cfa327f163ee6cac01197f6a96824a"],["/2022/07/17/Git/57_配置SSH公钥.png","32cfa327f163ee6cac01197f6a96824a"],["/2022/07/17/Git/58_配置SSH公钥-1658052385734.png","7195c784617f6e0ee056d3d803a1a3d0"],["/2022/07/17/Git/58_配置SSH公钥.png","7195c784617f6e0ee056d3d803a1a3d0"],["/2022/07/17/Git/59_配置SSH公钥-1658052385734.png","ba73eb3e6032256443923f3e4b78eb5e"],["/2022/07/17/Git/59_配置SSH公钥.png","ba73eb3e6032256443923f3e4b78eb5e"],["/2022/07/17/Git/60_配置SSH公钥-1658052385735.png","a75c1bf2438cdc4d98b8443aa7519f9e"],["/2022/07/17/Git/60_配置SSH公钥.png","a75c1bf2438cdc4d98b8443aa7519f9e"],["/2022/07/17/Git/61_代码冲突-1658052385735.png","d6cb5246cd00f79796164b03c4873477"],["/2022/07/17/Git/61_代码冲突.png","d6cb5246cd00f79796164b03c4873477"],["/2022/07/17/Git/62_代码冲突-1658052385735.png","959a2fdae9591e2e0f0e9de0fe126e0f"],["/2022/07/17/Git/62_代码冲突.png","959a2fdae9591e2e0f0e9de0fe126e0f"],["/2022/07/17/Git/63_代码冲突-1658052385735.png","20029df9b1684e6f3f825ed4a5a8eb57"],["/2022/07/17/Git/63_代码冲突.png","20029df9b1684e6f3f825ed4a5a8eb57"],["/2022/07/17/Git/64_IDEA中配置Git-1658052385735.png","212c1191d388f3dda14202969c8dd0d9"],["/2022/07/17/Git/64_IDEA中配置Git.png","212c1191d388f3dda14202969c8dd0d9"],["/2022/07/17/Git/65_IDEA中配置Git-1658052385735.png","6960fc6273efc416ba0a017b19787100"],["/2022/07/17/Git/65_IDEA中配置Git.png","6960fc6273efc416ba0a017b19787100"],["/2022/07/17/Git/66_IDEA中配置Git-1658052385735.png","8e52f1274a7de504a29dcff73bb92748"],["/2022/07/17/Git/66_IDEA中配置Git.png","8e52f1274a7de504a29dcff73bb92748"],["/2022/07/17/Git/67_创建本地仓库-1658052385735.png","91dd582075b0d251d160bd92e0e38ba4"],["/2022/07/17/Git/67_创建本地仓库.png","91dd582075b0d251d160bd92e0e38ba4"],["/2022/07/17/Git/68_创建本地仓库-1658052385735.png","8c3a2e6f2cedd2533fc348077d800ace"],["/2022/07/17/Git/68_创建本地仓库.png","8c3a2e6f2cedd2533fc348077d800ace"],["/2022/07/17/Git/69_创建本地仓库-1658052385735.png","066605888780ff75cc9f593575351c1d"],["/2022/07/17/Git/69_创建本地仓库.png","066605888780ff75cc9f593575351c1d"],["/2022/07/17/Git/70_版本切换-1658052385735.png","bb7b2f017fffdc3f3cc6ad0da1b9a1fa"],["/2022/07/17/Git/70_版本切换.png","bb7b2f017fffdc3f3cc6ad0da1b9a1fa"],["/2022/07/17/Git/71_版本切换-1658052385735.png","ca0bab1c88877425132acb62c85f6864"],["/2022/07/17/Git/71_版本切换.png","ca0bab1c88877425132acb62c85f6864"],["/2022/07/17/Git/72_版本切换-1658052385735.png","2104a76d5b1f862a7ea09dbeb3412a19"],["/2022/07/17/Git/72_版本切换.png","2104a76d5b1f862a7ea09dbeb3412a19"],["/2022/07/17/Git/73_版本切换-1658052385735.png","8a2df5d3842098f7f810aace54d5e16c"],["/2022/07/17/Git/73_版本切换.png","8a2df5d3842098f7f810aace54d5e16c"],["/2022/07/17/Git/74_创建分支-1658052385735.png","249388b70bc7493bd107aa2a847f06f1"],["/2022/07/17/Git/74_创建分支.png","249388b70bc7493bd107aa2a847f06f1"],["/2022/07/17/Git/75_切换分支-1658052385735.png","e64ee363f0e68ec11dc8072f7b2fcf43"],["/2022/07/17/Git/75_切换分支.png","e64ee363f0e68ec11dc8072f7b2fcf43"],["/2022/07/17/Git/76_合并分支-1658052385735.png","df66a34a2fe19d5e0eaef46d835632ec"],["/2022/07/17/Git/76_合并分支.png","df66a34a2fe19d5e0eaef46d835632ec"],["/2022/07/17/Git/77_合并分支-1658052385735.png","a43cc158693f8caefd68e73d2ab6e62e"],["/2022/07/17/Git/77_合并分支.png","a43cc158693f8caefd68e73d2ab6e62e"],["/2022/07/17/Git/78_合并分支-1658052385735.png","237d64e97880320899d444fd182ca338"],["/2022/07/17/Git/78_合并分支.png","237d64e97880320899d444fd182ca338"],["/2022/07/17/Git/79_合并分支-1658052385735.png","c798edfd6f748a7201df04bd69dfa222"],["/2022/07/17/Git/79_合并分支.png","c798edfd6f748a7201df04bd69dfa222"],["/2022/07/17/Git/80_删除分支-1658052385735.png","3938bac868e9ebfdd7b7de295e07e9a5"],["/2022/07/17/Git/80_删除分支.png","3938bac868e9ebfdd7b7de295e07e9a5"],["/2022/07/17/Git/81_本地仓库推送到远程仓库-1658052385735.png","12cb4639819571d934a96d65bb31a7ed"],["/2022/07/17/Git/81_本地仓库推送到远程仓库.png","12cb4639819571d934a96d65bb31a7ed"],["/2022/07/17/Git/82_本地仓库推送到远程仓库-1658052385735.png","5dd9942620209ca6980c8d4207b9218e"],["/2022/07/17/Git/82_本地仓库推送到远程仓库.png","5dd9942620209ca6980c8d4207b9218e"],["/2022/07/17/Git/83_远程仓库克隆到本地仓库-1658052385735.png","669c1a7138853490d7fc39fa44250368"],["/2022/07/17/Git/83_远程仓库克隆到本地仓库.png","669c1a7138853490d7fc39fa44250368"],["/2022/07/17/Git/index.html","d438689847d0dd9f097c52034cf69b24"],["/2022/07/19/day11-分类和static/01_黑马信息管理系统分类.png","dde05911e6d835fb942d92981b8bc692"],["/2022/07/19/day11-分类和static/02_黑马信息管理系统介绍.png","34750c0d54c7f2f4cd0bb56de70a2a06"],["/2022/07/19/day11-分类和static/03_添加功能需求分析.png","095a7f93d8fdd2bf27f3d2096416dccf"],["/2022/07/19/day11-分类和static/04_判断id是否存在.png","a344a2745df9edc249e1236c87e8c59b"],["/2022/07/19/day11-分类和static/05_查询功能需求分析.png","4012c50d6cf3dd825ed9fdd37db8722c"],["/2022/07/19/day11-分类和static/06_删除功能需求分析.png","0a45ce54d078c796fb74fb84a4d34321"],["/2022/07/19/day11-分类和static/07_修改功能需求分析.png","b30eb1054dd9986719cb5fe23de86785"],["/2022/07/19/day11-分类和static/10_添加老师功能实现步骤.png","f0e43d8fb2cfd1e32f8c995eb37840a0"],["/2022/07/19/day11-分类和static/11_查询老师功能实现步骤.png","0928499ba3903bacfbf9c58d34ec9b19"],["/2022/07/19/day11-分类和static/12_删除老师功能实现步骤.png","93a9f7589b44ef9aa40afd0ed2b3c685"],["/2022/07/19/day11-分类和static/13_修改老师功能实现步骤.png","fe718cfbe368df8b6692b1f4c7f8db6e"],["/2022/07/19/day11-分类和static/index.html","2c29c7c1c18048e891bf3e3cf1a2832c"],["/2022/07/19/day12-继承/01_super内存图.png","cbcd33e9e39c68c5c42f033ec218d5d5"],["/2022/07/19/day12-继承/02_权限修饰符.png","ca2e911a08c4003e53b9d2f32a637dae"],["/2022/07/19/day12-继承/index.html","586e0f7a244f0e79488c0c1373fc63aa"],["/2022/07/19/day13-接口和内部类/index.html","34fd7a1a4f5925f8030d75e4f83f5138"],["/2022/07/19/day14-常用API01/01.png","c2265a02eff842b2a723fdf1de717343"],["/2022/07/19/day14-常用API01/02.png","e11b6870dcf09b30c0bad1ad18f03b02"],["/2022/07/19/day14-常用API01/03.png","f49159f7d15757c9df44980ebe720614"],["/2022/07/19/day14-常用API01/04.png","908d47ca84306ade7987a5ba3b13b408"],["/2022/07/19/day14-常用API01/05.png","4844710d59f75c85ef11ba3f830ea7cd"],["/2022/07/19/day14-常用API01/06.png","130aab6d23f54d60c09bea2228c59463"],["/2022/07/19/day14-常用API01/07.png","8171db77e9775fdf829f997628e55f68"],["/2022/07/19/day14-常用API01/08_递归内存图.png","a61316a0379bbaf8344eb42641fa3819"],["/2022/07/19/day14-常用API01/index.html","83134fc32f6975878fdb5a6485edba2e"],["/2022/07/19/day15-常用API02/01_异常体系结构.png","bd89a65e6b59468c436362b4d6a42a87"],["/2022/07/19/day15-常用API02/02_编译时异常和运行时异常.png","e4f72af837cb356af9fb7fe6d8105fd0"],["/2022/07/19/day15-常用API02/03_查看异常信息.png","da2cf70e45964c1f6caa356ee21e53e4"],["/2022/07/19/day15-常用API02/index.html","b806959b460ae6de43a3af3683d451af"],["/2022/07/19/day16集合01/01_集合类体系结构图.png","babdec9603e33966ae91eb1f6fd52d94"],["/2022/07/19/day16集合01/index.html","47a1eaf5621ce3b8aa459a28f09aa026"],["/2022/07/19/day17集合02/01_二叉树结构图.png","3adefa1e8bdd47c61f8219bee84dc3c5"],["/2022/07/19/day17集合02/02_二叉查找树结构图.png","b74a5e33a7184b8170a3b1ce07874d92"],["/2022/07/19/day17集合02/03_二叉查找树和二叉树对比结构图.png","9132ea2950cdaeffcbdebd208ac05a97"],["/2022/07/19/day17集合02/04_二叉查找树添加节点规则.png","0ad4cb928af252877cb9d93e3af2ee43"],["/2022/07/19/day17集合02/05_平衡二叉树左旋01.png","71bd5e9938c6d002cd142ed107c26edb"],["/2022/07/19/day17集合02/05_平衡二叉树左旋02.png","5bd2dfab40e00bbe1d32511204d61863"],["/2022/07/19/day17集合02/06_平衡二叉树右旋01.png","5c2227d74680c13d868b17d6300c40c1"],["/2022/07/19/day17集合02/06_平衡二叉树右旋02.png","6ec23eeb54d196bbfb4074176ef78f02"],["/2022/07/19/day17集合02/07_平衡二叉树和二叉查找树对比结构图.png","0727af972cc1c2404f47f674f735fc12"],["/2022/07/19/day17集合02/08_平衡二叉树左左.png","f57b89e85afabbaa61883bcd2c282c86"],["/2022/07/19/day17集合02/09_平衡二叉树左右.png","bfbe416badd2eff48ff071718c4ffbb9"],["/2022/07/19/day17集合02/10_平衡二叉树右右.png","f583e6a7579fb43f9f7e613a7d940d02"],["/2022/07/19/day17集合02/11_平衡二叉树右左.png","7564ef029dd5fc8422c84baec5b10142"],["/2022/07/19/day17集合02/12_红黑树结构图.png","cddc3c00838df08d20bfb1804b6732b2"],["/2022/07/19/day17集合02/13_红黑树添加节点颜色.png","23128504117b9a189256816c5cdab434"],["/2022/07/19/day17集合02/14_JKD8以前哈希表.png","b0e84308059fd125c4ee970caf000d0f"],["/2022/07/19/day17集合02/15_JKD8以后哈希表.png","f918a21bfb1d7c86ea92088bff553c01"],["/2022/07/19/day17集合02/index.html","b0968274e9c83298d14abca083bfc9bd"],["/2022/07/19/day18集合03/01_Stream流思想.png","734885e63f814daddc318234bd6834d5"],["/2022/07/19/day18集合03/index.html","a802d6b5d04c6e0ecfac473abaab1a52"],["/2022/07/19/day19IO流01/index.html","a7e991b746166c411c380861a9525484"],["/2022/07/19/day20IO流02/01_IO流小结.png","c37f49e2ff61d3da292b9b859c42449c"],["/2022/07/19/day20IO流02/index.html","69682e882c7fc50ae14af83e71cf19f0"],["/2022/07/19/day21-多线程01/01_简单了解多线程.png","7c4ea10436ed11c20f61c5e0b1e28b93"],["/2022/07/19/day21-多线程01/02_并行.png","8d92eb2f94f652e38420ce2af1c2ea82"],["/2022/07/19/day21-多线程01/03_并发.png","1e9a71bf696675ac999d1264d5218316"],["/2022/07/19/day21-多线程01/04_多线程示例.png","dff923b24254d0fcd6855fd4499255f7"],["/2022/07/19/day21-多线程01/05_多线程示例图.png","adeee7a9a9db811892cbbc688b889022"],["/2022/07/19/day21-多线程01/06_阻塞队列继承结构.png","6ec38079bbe67106ebed38972380aa8f"],["/2022/07/19/day21-多线程01/index.html","d44da296fa9a60eb77c506445cc3611c"],["/2022/07/19/day22-多线程02/1591163781941.png","262e4344babeea3f0a29d35a2039b6f2"],["/2022/07/19/day22-多线程02/1591165506516.png","6227f1ddc0457e88c26a81dfaedfa82e"],["/2022/07/19/day22-多线程02/1591168965857.png","b7551b348417520e49d7c64e0e8d5e22"],["/2022/07/19/day22-多线程02/1591169254280.png","0823308985697ef9475365f23e33ba47"],["/2022/07/19/day22-多线程02/1591169338256.png","eb7438ce040432b912add3eb8be7761f"],["/2022/07/19/day22-多线程02/index.html","a442d6c0b7bf4891daf023d539905542"],["/2022/07/19/day23-网络编程01/07_TCP三次握手.png","a29817b7a475bb2d7479471de1eefe34"],["/2022/07/19/day23-网络编程01/08_TCP四次挥手.png","259b02bf1b7fb18c459b626e0e3b2344"],["/2022/07/19/day23-网络编程01/09_三大模块.png","229d2e0298a401465dd58c42a424d823"],["/2022/07/19/day23-网络编程01/10_NIO缓冲区添加数据.png","1abcfaf19c0bccc1cc6f31b3f7ce8df2"],["/2022/07/19/day23-网络编程01/index.html","73db81be9170c603d64f3655cc807a65"],["/2022/07/19/day24-网络编程02/01_选择器多路复用.png","bb695a8e6d08cf6fc44f77624526638f"],["/2022/07/19/day24-网络编程02/02_选择器概述.png","e47000a2ec40918a6945041898e0c7cb"],["/2022/07/19/day24-网络编程02/03_选择器改写服务器.png","96a32699fd63cf29b34d47f404656eba"],["/2022/07/19/day24-网络编程02/04_url.png","f159bc74d03c825c83b991109052f863"],["/2022/07/19/day24-网络编程02/05_抓包.png","6e22738a1b43284e9e8292d353b1be31"],["/2022/07/19/day24-网络编程02/06_请求行格式.png","68b217143a356eae60ecfbd75fec5fec"],["/2022/07/19/day24-网络编程02/07_Uri图示.png","70371f589ef32794bf1aa76e7e72edb9"],["/2022/07/19/day24-网络编程02/08_请求头图示.png","688d4b4dedf15f9b182189ec4523fdfa"],["/2022/07/19/day24-网络编程02/09_请求头示例.png","16ff46aecbda53d4f7f2cdd315af9b0f"],["/2022/07/19/day24-网络编程02/10_请求信息小结.png","a9d78e55e0cd74062354ee1ed515e319"],["/2022/07/19/day24-网络编程02/11_响应头格式.png","06d6d120004623a7020cef035bb90232"],["/2022/07/19/day24-网络编程02/12_响应信息小结.png","a180c048c536ff68ec41a96cc773cf71"],["/2022/07/19/day24-网络编程02/13_响应头示例.png","c4e2676a68eae67a264128a8d3248a89"],["/2022/07/19/day24-网络编程02/index.html","4f5e6c2756e415b12bff50dad16baafc"],["/2022/07/19/day25-基础加强01/01_类加载器.png","300739f42a3f422b211a431715ab80c4"],["/2022/07/19/day25-基础加强01/02_类加载过程加载.png","f0fb35f875afbc2a529f7e26ad56d127"],["/2022/07/19/day25-基础加强01/03_类加载过程验证.png","fa5775ec96fd8571d2e82cc08e3e2b8c"],["/2022/07/19/day25-基础加强01/04_类加载过程准备.png","58304c2feb9a9799cc0be7a9e35e47f9"],["/2022/07/19/day25-基础加强01/05_类加载过程解析.png","05ba544597f9ebe8e44d86ea21df779f"],["/2022/07/19/day25-基础加强01/06_类加载过程初始化.png","fe0aa852bdf0f15ef31953b4725b499a"],["/2022/07/19/day25-基础加强01/07_双亲委派模型.png","954e563e1288cd3f33303c4d8e24d20a"],["/2022/07/19/day25-基础加强01/08_获取Class对象的三种方式.png","a846702ae6ac346b215851af5d66e137"],["/2022/07/19/day25-基础加强01/09_静态资源.png","0e1420c35f520924646d73564ec32fa6"],["/2022/07/19/day25-基础加强01/10_动态资源.png","37fbd359e2fc907fa6eb52501c050c31"],["/2022/07/19/day25-基础加强01/11_请求资源分类.png","dc2bf1e0b66f10f14c6b68beb17aa01b"],["/2022/07/19/day25-基础加强01/12_多个动态资源.png","6d01f75d68ccf69102dc981ff73dac7f"],["/2022/07/19/day25-基础加强01/13_反射和配置文件优化.png","bf34b58cb2f674fa741e8acc61e2b58a"],["/2022/07/19/day25-基础加强01/index.html","8f3cf3f32e7c8a1508a796ccf5ef067d"],["/2022/07/19/day26-基础加强02/01_w3c概述.png","79d309266ad39a4b06d646afa2f46fa0"],["/2022/07/19/day26-基础加强02/02_dom解析概述.png","efa4d3e33d16e79b4235e2d597aed688"],["/2022/07/19/day26-基础加强02/03_DTD语法定义元素.png","090049ac0481bbc1b1182362f6f8b33c"],["/2022/07/19/day26-基础加强02/04_schema约束介绍.png","a76cfcfe24e752d3dab80ffdde3bb860"],["/2022/07/19/day26-基础加强02/05_schema约束编写.png","85919449bb1be4a12f882d66c0ee1aa1"],["/2022/07/19/day26-基础加强02/06_配置要解析的Servlet数据.png","b8a70a8bc4e0d891db7cac4607ecb71e"],["/2022/07/19/day26-基础加强02/index.html","f6df4182dc4102ef741b1256a6b0dc02"],["/2022/07/19/day27-基础加强03/01_业务分析.png","2895f5ee72f9188dda44fd6f05e44512"],["/2022/07/19/day27-基础加强03/02_要拷贝的包.png","a3ea577d3228e0bb5850a29e91487dd4"],["/2022/07/19/day27-基础加强03/03_业务分析02.png","4bb0f2e035120c3110d89768b0620ab1"],["/2022/07/19/day27-基础加强03/04_包结构.png","e7926a15ed499398cbc2de138e5845bd"],["/2022/07/19/day27-基础加强03/05_三层结构.png","b5fb9d731f042be62a869dd473f3b807"],["/2022/07/19/day27-基础加强03/06_日志体系结构.png","72f91a95f74168c22b31dbe718f11eb1"],["/2022/07/19/day27-基础加强03/07_PatternLayout常用的选项.png","d8adb60178dc02adf18d7eb4fb56175d"],["/2022/07/19/day27-基础加强03/index.html","8d58690ab703838d13f7813a5f8a4cc3"],["/about/index.html","7eb2a6c07d20f7a333924bfcf49eaead"],["/archives/2022/06/index.html","a2b5324712af5b14b4856447105228e3"],["/archives/2022/07/index.html","37abd43401cd812b916e85664291ca11"],["/archives/2022/07/page/2/index.html","ee930efccd9d08a4ae642ac8a88d6cda"],["/archives/2022/07/page/3/index.html","4aab57d57f2001078d75f32cb5d5bfa8"],["/archives/2022/07/page/4/index.html","eb54f9f9c350199ef79c7342ca0de213"],["/archives/2022/index.html","1c75a3f9aad0d2f5d94a8f4365da80a8"],["/archives/2022/page/2/index.html","f61738d9d58ece58a2e2bf3fe8e26f12"],["/archives/2022/page/3/index.html","fab85c81cd7d598679aae3d18321d3f3"],["/archives/2022/page/4/index.html","a6d5f4bbb214fcefad9de842f8d242bb"],["/archives/index.html","3054aa8f40e0612e7c239c9e276faf22"],["/archives/page/2/index.html","2387072b9d6621ba526dd6b1784974f8"],["/archives/page/3/index.html","d6a5f8a23f48fe506320274987a05eee"],["/archives/page/4/index.html","fe6c0a82518c0c133eadfdc27a2fca1f"],["/categories/Git/index.html","8e4205970c86f0fa5bd2f4ed11ff3698"],["/categories/Java/index.html","7905164278f501c783cd7f6587e7a252"],["/categories/Java/page/2/index.html","fb1eb9e50d2e86e35ca3e7dce0945f1f"],["/categories/Java/page/3/index.html","0079ee75c50487ba278e2ba0f7351972"],["/categories/Python/index.html","cd6bde4ffacec33fe4a6c343ca560397"],["/categories/Python爬虫/index.html","11a8cef57276cb4a98f12ef8b2b28101"],["/categories/hexo使用手册/index.html","5692292b1a16335f73581dc7c898b749"],["/categories/index.html","a949b8c896f1fca9dd66f28fa3f5e88b"],["/css/main.css","4597bc3bdcedf9ebc5e6e292329f57bb"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","d97248ee7ec5d02786a69334950b8e90"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/background.jpg","4d2f255678712f79fb8b7e8f0535bd2a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","1c6fdd8a74dc5e7318fd79d14e89bfae"],["/index.html","879ae5e60d54e94840bfc86b55478268"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/click-live.js","b90cb1ee013de4f5cffcdae8ec04c7fd"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/snow2.js","c2bd4549400b0fab9e2f0288b546a3d1"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","67e49230dce69b49de6abfb87927690a"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","04974e4dc4867f5b11ff939e03fa9296"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f70e0fb38e078d884bac5bff1bb10c21"],["/page/3/index.html","15d9c8304a1e12d8bd08f557a46f0321"],["/page/4/index.html","5c6a59c870d4e75bac1b329e0f996c3c"],["/resources/index.html","4ed21e75ad12547818802f28ce322ddc"],["/sw-register.js","c7a34c506328dd1081b2d94c1c779d3c"],["/tags/Git/index.html","5279e5ea0efb3607ae5081023d60d6cc"],["/tags/Java/index.html","a61925242437e4166bf2dd955bc3acec"],["/tags/Java/page/2/index.html","a819597363bd4eceec552ca5bddce1d6"],["/tags/Java/page/3/index.html","64444073a09e4d4090b4233191e74775"],["/tags/Python/index.html","975255c0512ded602a991c48d8a319d7"],["/tags/Python爬虫/index.html","be2e3e0688f52bbfea9ea359a2937245"],["/tags/hexo使用手册/index.html","0b2e15beeaba407dc5eaf512eceab873"],["/tags/index.html","4e07f3ae0fa418a1abb98ed419537202"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
