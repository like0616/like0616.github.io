/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/06/01/hello-world/index.html","78f10c3c58f793d7ea658d9ff0e9561d"],["/2022/07/16/01-Urllib/index.html","2d4cd5a354a4935679aaf1ef02f43b8f"],["/2022/07/16/02-解析/index.html","ab327594dcfc16d97927ce86c09a6e72"],["/2022/07/16/03-selenium/index.html","b6384e3acf13c71f84227508c738d2da"],["/2022/07/16/04-requests/index.html","238bfa745894690615b6ab9edf44e999"],["/2022/07/16/05-scrapy/index.html","668920a7cf62b678fb980257cf9d0c98"],["/2022/07/16/Python基础/index.html","7e9b3e2768bd060c45290d27600b3bf8"],["/2022/07/16/day01-java基础语法/index.html","d3369765ecc1cdfeb8182656182fb7eb"],["/2022/07/16/day01-java基础语法/图片1.jpg","1a5cd58fae2ca4a1bd6f9c501c97ec5f"],["/2022/07/16/day02-Java基础语法/index.html","5083c2af9ca8d5cd76517c67667455f1"],["/2022/07/16/day02-Java基础语法/图片1.png","7a4ddfe29b9393d3832e7461e2b980e8"],["/2022/07/16/day02-Java基础语法/图片2.png","07d62f15ff1d5731b786f809d570d96b"],["/2022/07/16/day02-Java基础语法/图片3.png","b34170288165c6d6fc387078889b6e0a"],["/2022/07/16/day02-Java基础语法/图片4.png","eb6e0bf1499c1a147273aeb0f8d60d72"],["/2022/07/16/day02-Java基础语法/图片5.png","d0d263e490876f9b277743f3e1296408"],["/2022/07/16/day03-switch-循环语句/index.html","ee9f3e263ea9bc36917791d2fc69fab8"],["/2022/07/16/day04-IDEA-数组/1591007817165.png","5bafc36d2f552cc8c99f898cf0736adc"],["/2022/07/16/day04-IDEA-数组/1591007925899.png","5e19d036649392f7d25dad023794cb1a"],["/2022/07/16/day04-IDEA-数组/1591007957052.png","ebd7f1c24595205eb3e6d63d3d45eaca"],["/2022/07/16/day04-IDEA-数组/index.html","5d4e8eb9a4c339dfd832700257535859"],["/2022/07/16/day05-方法/index.html","d185426babfc73ae31414271ec485339"],["/2022/07/16/day06-Debug-基础练习/1590936221838.png","6b60ebd61f5961ff374910ed02fd8eee"],["/2022/07/16/day06-Debug-基础练习/1590936342865.png","a12249a5ca9c965464c01e3508263391"],["/2022/07/16/day06-Debug-基础练习/1590936493344.png","19a063a3b3b99e90e5858328fadb9b74"],["/2022/07/16/day06-Debug-基础练习/1590936529957.png","1b9229e235393efdeee5507978cad844"],["/2022/07/16/day06-Debug-基础练习/1590936548060.png","3e076c660b1039d8d1677dacc8e6c0fe"],["/2022/07/16/day06-Debug-基础练习/1590936726746.png","cda6a4dac1ff3176dab0f26d54592fc6"],["/2022/07/16/day06-Debug-基础练习/1590936745245.png","e42b77a35e34fa79261867a0ba1668f5"],["/2022/07/16/day06-Debug-基础练习/1590937009286.png","a2cfad7d713131a48c5290beb7038bd3"],["/2022/07/16/day06-Debug-基础练习/1590937024104.png","9078f4cb7f762624ca8306965f306fc9"],["/2022/07/16/day06-Debug-基础练习/1590937235620.png","7bdebd04701bd3e1e9cbcf043393f3f0"],["/2022/07/16/day06-Debug-基础练习/index.html","120a069532c79b816d11994420f928ef"],["/2022/07/16/day07-面向对象/1590938666222.png","8be36e99ecb17acf7580ad32bbbc8723"],["/2022/07/16/day07-面向对象/1590938693756.png","656b197c1d0960f32093f5c4de796118"],["/2022/07/16/day07-面向对象/1590938711726.png","19312a424f5c7385c0cccb9918df7fbf"],["/2022/07/16/day07-面向对象/1590938942838.png","966679e739043ad658ba2bcdd60b0f0d"],["/2022/07/16/day07-面向对象/1590938969305.png","7b5263ff81b3499fa3af0e55fcb369b7"],["/2022/07/16/day07-面向对象/index.html","6f55bca46b2b19771b7bf63c31c9c9dd"],["/2022/07/16/day08-常用API/1590939947722.png","98a3fe358fcb52fa2517ae170d74ada8"],["/2022/07/16/day08-常用API/index.html","733f5f65bc274ed94ed855ca7a1c9b03"],["/2022/07/16/day09-ArrayList集合-学生管理系统/index.html","aa4d81f09884858f8a0faf3ef108339b"],["/2022/07/17/Git/01_版本控制介绍-1658052385732.png","68c734d2ab132dc61bbbe681b8a7af34"],["/2022/07/17/Git/01_版本控制介绍.png","68c734d2ab132dc61bbbe681b8a7af34"],["/2022/07/17/Git/02_开发中的麻烦-1658052385733.png","98dd57401c2418a7aa78cf03dca02649"],["/2022/07/17/Git/02_开发中的麻烦.png","98dd57401c2418a7aa78cf03dca02649"],["/2022/07/17/Git/03_开发中的麻烦-1658052385733.png","f326596a8fbe07cf34695e15d027ce23"],["/2022/07/17/Git/03_开发中的麻烦.png","f326596a8fbe07cf34695e15d027ce23"],["/2022/07/17/Git/04_开发中的麻烦-1658052385733.png","f701f753242c1cd5070eff33a239a757"],["/2022/07/17/Git/04_开发中的麻烦.png","f701f753242c1cd5070eff33a239a757"],["/2022/07/17/Git/05_开发中的麻烦-1658052385733.png","88e41f93f6165857322a15ae0d7072b1"],["/2022/07/17/Git/05_开发中的麻烦.png","88e41f93f6165857322a15ae0d7072b1"],["/2022/07/17/Git/06_svn和git的对比-1658052385733.png","990ce86391ec1a6abc7b1cc84d47df94"],["/2022/07/17/Git/06_svn和git的对比.png","990ce86391ec1a6abc7b1cc84d47df94"],["/2022/07/17/Git/07_svn和git的对比-1658052385733.png","5077fe17935a8cd05612bee2e2791c31"],["/2022/07/17/Git/07_svn和git的对比.png","5077fe17935a8cd05612bee2e2791c31"],["/2022/07/17/Git/08_Git的下载-1658052385733.png","6826a6168107584063af974bde2c06c5"],["/2022/07/17/Git/08_Git的下载.png","6826a6168107584063af974bde2c06c5"],["/2022/07/17/Git/09_Git的安装01-1658052385733.png","698b91daf08373779b5d6a01f9f661dd"],["/2022/07/17/Git/09_Git的安装01.png","698b91daf08373779b5d6a01f9f661dd"],["/2022/07/17/Git/10_Git的安装02-1658052385733.png","0290effe3ef6f6cc8e2f34cbe441b640"],["/2022/07/17/Git/10_Git的安装02.png","0290effe3ef6f6cc8e2f34cbe441b640"],["/2022/07/17/Git/11_Git的安装03-1658052385733.png","5edaffc66c68e509975d0c2047a697a8"],["/2022/07/17/Git/11_Git的安装03.png","5edaffc66c68e509975d0c2047a697a8"],["/2022/07/17/Git/12_Git的安装04-1658052385733.png","4ecca8883f4ca6f10fa0ebaca633efdc"],["/2022/07/17/Git/12_Git的安装04.png","4ecca8883f4ca6f10fa0ebaca633efdc"],["/2022/07/17/Git/13_Git的安装05-1658052385733.png","d6575b9cd1fca187ac599d905cc3547e"],["/2022/07/17/Git/13_Git的安装05.png","d6575b9cd1fca187ac599d905cc3547e"],["/2022/07/17/Git/14_Git的安装06-1658052385733.png","c9faa24198153b6ae85e3f6dc014127a"],["/2022/07/17/Git/14_Git的安装06.png","c9faa24198153b6ae85e3f6dc014127a"],["/2022/07/17/Git/15_Git的安装07-1658052385733.png","ce107eade77bfd498b19dd69ed86a7de"],["/2022/07/17/Git/15_Git的安装07.png","ce107eade77bfd498b19dd69ed86a7de"],["/2022/07/17/Git/16_TortiseGit的安装-1658052385733.png","b235882bc83d5a9b181c10e46490305a"],["/2022/07/17/Git/16_TortiseGit的安装.png","b235882bc83d5a9b181c10e46490305a"],["/2022/07/17/Git/17_TortiseGit的安装-1658052385733.png","bfe779803f71a4744858d4d1ce328242"],["/2022/07/17/Git/17_TortiseGit的安装.png","bfe779803f71a4744858d4d1ce328242"],["/2022/07/17/Git/18_TortiseGit的安装-1658052385733.png","4a6cf59469eca362fb13c94fc4679750"],["/2022/07/17/Git/18_TortiseGit的安装.png","4a6cf59469eca362fb13c94fc4679750"],["/2022/07/17/Git/19_TortiseGit的安装-1658052385733.png","d69ab02578675f7b573883d62d439653"],["/2022/07/17/Git/19_TortiseGit的安装.png","d69ab02578675f7b573883d62d439653"],["/2022/07/17/Git/20_TortiseGit的安装-1658052385733.png","2e3129ea3251355990f17036c1431578"],["/2022/07/17/Git/20_TortiseGit的安装.png","2e3129ea3251355990f17036c1431578"],["/2022/07/17/Git/21_TortiseGit的安装-1658052385733.png","d002e71b220dcaebdafac2052318f6d5"],["/2022/07/17/Git/21_TortiseGit的安装.png","d002e71b220dcaebdafac2052318f6d5"],["/2022/07/17/Git/22_TortiseGit的安装-1658052385733.png","1d16476b7534ddc925d26801240852ad"],["/2022/07/17/Git/22_TortiseGit的安装.png","1d16476b7534ddc925d26801240852ad"],["/2022/07/17/Git/23_TortiseGit的安装-1658052385733.png","c57b392e135c75836603022e857a4ed5"],["/2022/07/17/Git/23_TortiseGit的安装.png","c57b392e135c75836603022e857a4ed5"],["/2022/07/17/Git/24_TortiseGit的安装-1658052385733.png","338fbdc7b294c95024df474d176dfc47"],["/2022/07/17/Git/24_TortiseGit的安装.png","338fbdc7b294c95024df474d176dfc47"],["/2022/07/17/Git/25_TortiseGit的安装-1658052385734.png","f470d1f6c4c7680e0c9a234bdb22108b"],["/2022/07/17/Git/25_TortiseGit的安装.png","f470d1f6c4c7680e0c9a234bdb22108b"],["/2022/07/17/Git/26_TortiseGit的安装-1658052385734.png","6a1eb6b492df28b2e96d1e3b7f8676b3"],["/2022/07/17/Git/26_TortiseGit的安装.png","6a1eb6b492df28b2e96d1e3b7f8676b3"],["/2022/07/17/Git/27_TortiseGit的安装-1658052385734.png","4ec34a8229621d2fd6c7b2efab528b47"],["/2022/07/17/Git/27_TortiseGit的安装.png","4ec34a8229621d2fd6c7b2efab528b47"],["/2022/07/17/Git/28_TortiseGit的安装-1658052385734.png","64928e9e9fd92a46158504d34f8d9ed6"],["/2022/07/17/Git/28_TortiseGit的安装.png","64928e9e9fd92a46158504d34f8d9ed6"],["/2022/07/17/Git/29_TortiseGit的安装-1658052385734.png","df3c4d592b9d6b3cffa6f554270f3c21"],["/2022/07/17/Git/29_TortiseGit的安装.png","df3c4d592b9d6b3cffa6f554270f3c21"],["/2022/07/17/Git/30_TortiseGit的安装-1658052385734.png","c8c1c9a0076e076b480fdb74042e8bdf"],["/2022/07/17/Git/30_TortiseGit的安装.png","c8c1c9a0076e076b480fdb74042e8bdf"],["/2022/07/17/Git/31_Git基本工作流程-1658052385734.png","09a18ef826ccbb5d5a79aee78a372756"],["/2022/07/17/Git/31_Git基本工作流程.png","09a18ef826ccbb5d5a79aee78a372756"],["/2022/07/17/Git/32_Git工作流程-1658052385734.png","89b3598107193f1e95a281083c9f35c8"],["/2022/07/17/Git/32_Git工作流程.png","89b3598107193f1e95a281083c9f35c8"],["/2022/07/17/Git/33_Git工作流程-1658052385734.png","090d080819bc5dfde7088c2c648f059a"],["/2022/07/17/Git/33_Git工作流程.png","090d080819bc5dfde7088c2c648f059a"],["/2022/07/17/Git/34_Git工作流程-1658052385734.png","b278a638ea377d971fa002f7d5f6e58b"],["/2022/07/17/Git/34_Git工作流程.png","b278a638ea377d971fa002f7d5f6e58b"],["/2022/07/17/Git/35_Git工作流程-1658052385734.png","246bedd854df75d65bcdd7cf627d4fba"],["/2022/07/17/Git/35_Git工作流程.png","246bedd854df75d65bcdd7cf627d4fba"],["/2022/07/17/Git/36_Git工作流程-1658052385734.png","9f5a7f5513e748e14c22a0ab61ba9dd1"],["/2022/07/17/Git/36_Git工作流程.png","9f5a7f5513e748e14c22a0ab61ba9dd1"],["/2022/07/17/Git/37_Git工作流程-1658052385734.png","150edca84641d52ec8b6a580d45051de"],["/2022/07/17/Git/37_Git工作流程.png","150edca84641d52ec8b6a580d45051de"],["/2022/07/17/Git/38_Git工作流程-1658052385734.png","a792349091fee136440fa30c66cfdb08"],["/2022/07/17/Git/38_Git工作流程.png","a792349091fee136440fa30c66cfdb08"],["/2022/07/17/Git/39_Git工作流程-1658052385734.png","9e1ad21f2f35b27e776935fcc84ffaad"],["/2022/07/17/Git/39_Git工作流程.png","9e1ad21f2f35b27e776935fcc84ffaad"],["/2022/07/17/Git/40_Git工作流程-1658052385734.png","ca046b61f858b1f4a674d52096438fd9"],["/2022/07/17/Git/40_Git工作流程.png","ca046b61f858b1f4a674d52096438fd9"],["/2022/07/17/Git/41_Git工作流程-1658052385734.png","3cbb8f2fce9e19d1b9f67ce80bac11ec"],["/2022/07/17/Git/41_Git工作流程.png","3cbb8f2fce9e19d1b9f67ce80bac11ec"],["/2022/07/17/Git/42_Git工作流程-1658052385734.png","6e14ebe34a9007f1a17bdf30615dcccb"],["/2022/07/17/Git/42_Git工作流程.png","6e14ebe34a9007f1a17bdf30615dcccb"],["/2022/07/17/Git/43_Git工作流程-1658052385734.png","ba8a5299d908a6a9cc3b42a73aa13ab9"],["/2022/07/17/Git/43_Git工作流程.png","ba8a5299d908a6a9cc3b42a73aa13ab9"],["/2022/07/17/Git/44_历史版本切换-1658052385734.png","aa0f2dac07a3bca15a587a20a64f8b21"],["/2022/07/17/Git/44_历史版本切换.png","aa0f2dac07a3bca15a587a20a64f8b21"],["/2022/07/17/Git/45_分支工作流程介绍-1658052385734.png","e5358c2bec67ecebf0d6dbb49286d80b"],["/2022/07/17/Git/45_分支工作流程介绍.png","e5358c2bec67ecebf0d6dbb49286d80b"],["/2022/07/17/Git/46_远程仓库-1658052385734.png","1424f64e4de654d46f4b69f26e2eec4d"],["/2022/07/17/Git/46_远程仓库.png","1424f64e4de654d46f4b69f26e2eec4d"],["/2022/07/17/Git/47_码云的注册-1658052385734.png","c3ca736540ccf76bfca723bde42ced83"],["/2022/07/17/Git/47_码云的注册.png","c3ca736540ccf76bfca723bde42ced83"],["/2022/07/17/Git/48_码云的注册-1658052385734.png","b9d098c38e9a2945bd295cba78d17d07"],["/2022/07/17/Git/48_码云的注册.png","b9d098c38e9a2945bd295cba78d17d07"],["/2022/07/17/Git/49_码云的注册-1658052385734.png","7d68b4b0f9672270bc6cefc415702285"],["/2022/07/17/Git/49_码云的注册.png","7d68b4b0f9672270bc6cefc415702285"],["/2022/07/17/Git/50_创建远程仓库-1658052385734.png","72898fefef14cfb521d7ffa9b513c051"],["/2022/07/17/Git/50_创建远程仓库.png","72898fefef14cfb521d7ffa9b513c051"],["/2022/07/17/Git/51_创建远程仓库-1658052385734.png","be6a63f39d0288bd5eb0c029b75e1fc4"],["/2022/07/17/Git/51_创建远程仓库.png","be6a63f39d0288bd5eb0c029b75e1fc4"],["/2022/07/17/Git/52_配置SSH公钥-1658052385734.png","407bb728d5e9634d88c3d02349a9b97b"],["/2022/07/17/Git/52_配置SSH公钥.png","407bb728d5e9634d88c3d02349a9b97b"],["/2022/07/17/Git/53_配置SSH公钥-1658052385734.png","48bacab6e9b5bd27d0093455672b50e0"],["/2022/07/17/Git/53_配置SSH公钥.png","48bacab6e9b5bd27d0093455672b50e0"],["/2022/07/17/Git/54_配置SSH公钥-1658052385734.png","3f8903222dbac214b0bb58b6fb7ebbf6"],["/2022/07/17/Git/54_配置SSH公钥.png","3f8903222dbac214b0bb58b6fb7ebbf6"],["/2022/07/17/Git/55_配置SSH公钥-1658052385734.png","6067866826c6addd230464f8a7a531bf"],["/2022/07/17/Git/55_配置SSH公钥.png","6067866826c6addd230464f8a7a531bf"],["/2022/07/17/Git/56_配置SSH公钥-1658052385734.png","ed1c483865875d178fd5a9d9ac14ef79"],["/2022/07/17/Git/56_配置SSH公钥.png","ed1c483865875d178fd5a9d9ac14ef79"],["/2022/07/17/Git/57_配置SSH公钥-1658052385734.png","32cfa327f163ee6cac01197f6a96824a"],["/2022/07/17/Git/57_配置SSH公钥.png","32cfa327f163ee6cac01197f6a96824a"],["/2022/07/17/Git/58_配置SSH公钥-1658052385734.png","7195c784617f6e0ee056d3d803a1a3d0"],["/2022/07/17/Git/58_配置SSH公钥.png","7195c784617f6e0ee056d3d803a1a3d0"],["/2022/07/17/Git/59_配置SSH公钥-1658052385734.png","ba73eb3e6032256443923f3e4b78eb5e"],["/2022/07/17/Git/59_配置SSH公钥.png","ba73eb3e6032256443923f3e4b78eb5e"],["/2022/07/17/Git/60_配置SSH公钥-1658052385735.png","a75c1bf2438cdc4d98b8443aa7519f9e"],["/2022/07/17/Git/60_配置SSH公钥.png","a75c1bf2438cdc4d98b8443aa7519f9e"],["/2022/07/17/Git/61_代码冲突-1658052385735.png","d6cb5246cd00f79796164b03c4873477"],["/2022/07/17/Git/61_代码冲突.png","d6cb5246cd00f79796164b03c4873477"],["/2022/07/17/Git/62_代码冲突-1658052385735.png","959a2fdae9591e2e0f0e9de0fe126e0f"],["/2022/07/17/Git/62_代码冲突.png","959a2fdae9591e2e0f0e9de0fe126e0f"],["/2022/07/17/Git/63_代码冲突-1658052385735.png","20029df9b1684e6f3f825ed4a5a8eb57"],["/2022/07/17/Git/63_代码冲突.png","20029df9b1684e6f3f825ed4a5a8eb57"],["/2022/07/17/Git/64_IDEA中配置Git-1658052385735.png","212c1191d388f3dda14202969c8dd0d9"],["/2022/07/17/Git/64_IDEA中配置Git.png","212c1191d388f3dda14202969c8dd0d9"],["/2022/07/17/Git/65_IDEA中配置Git-1658052385735.png","6960fc6273efc416ba0a017b19787100"],["/2022/07/17/Git/65_IDEA中配置Git.png","6960fc6273efc416ba0a017b19787100"],["/2022/07/17/Git/66_IDEA中配置Git-1658052385735.png","8e52f1274a7de504a29dcff73bb92748"],["/2022/07/17/Git/66_IDEA中配置Git.png","8e52f1274a7de504a29dcff73bb92748"],["/2022/07/17/Git/67_创建本地仓库-1658052385735.png","91dd582075b0d251d160bd92e0e38ba4"],["/2022/07/17/Git/67_创建本地仓库.png","91dd582075b0d251d160bd92e0e38ba4"],["/2022/07/17/Git/68_创建本地仓库-1658052385735.png","8c3a2e6f2cedd2533fc348077d800ace"],["/2022/07/17/Git/68_创建本地仓库.png","8c3a2e6f2cedd2533fc348077d800ace"],["/2022/07/17/Git/69_创建本地仓库-1658052385735.png","066605888780ff75cc9f593575351c1d"],["/2022/07/17/Git/69_创建本地仓库.png","066605888780ff75cc9f593575351c1d"],["/2022/07/17/Git/70_版本切换-1658052385735.png","bb7b2f017fffdc3f3cc6ad0da1b9a1fa"],["/2022/07/17/Git/70_版本切换.png","bb7b2f017fffdc3f3cc6ad0da1b9a1fa"],["/2022/07/17/Git/71_版本切换-1658052385735.png","ca0bab1c88877425132acb62c85f6864"],["/2022/07/17/Git/71_版本切换.png","ca0bab1c88877425132acb62c85f6864"],["/2022/07/17/Git/72_版本切换-1658052385735.png","2104a76d5b1f862a7ea09dbeb3412a19"],["/2022/07/17/Git/72_版本切换.png","2104a76d5b1f862a7ea09dbeb3412a19"],["/2022/07/17/Git/73_版本切换-1658052385735.png","8a2df5d3842098f7f810aace54d5e16c"],["/2022/07/17/Git/73_版本切换.png","8a2df5d3842098f7f810aace54d5e16c"],["/2022/07/17/Git/74_创建分支-1658052385735.png","249388b70bc7493bd107aa2a847f06f1"],["/2022/07/17/Git/74_创建分支.png","249388b70bc7493bd107aa2a847f06f1"],["/2022/07/17/Git/75_切换分支-1658052385735.png","e64ee363f0e68ec11dc8072f7b2fcf43"],["/2022/07/17/Git/75_切换分支.png","e64ee363f0e68ec11dc8072f7b2fcf43"],["/2022/07/17/Git/76_合并分支-1658052385735.png","df66a34a2fe19d5e0eaef46d835632ec"],["/2022/07/17/Git/76_合并分支.png","df66a34a2fe19d5e0eaef46d835632ec"],["/2022/07/17/Git/77_合并分支-1658052385735.png","a43cc158693f8caefd68e73d2ab6e62e"],["/2022/07/17/Git/77_合并分支.png","a43cc158693f8caefd68e73d2ab6e62e"],["/2022/07/17/Git/78_合并分支-1658052385735.png","237d64e97880320899d444fd182ca338"],["/2022/07/17/Git/78_合并分支.png","237d64e97880320899d444fd182ca338"],["/2022/07/17/Git/79_合并分支-1658052385735.png","c798edfd6f748a7201df04bd69dfa222"],["/2022/07/17/Git/79_合并分支.png","c798edfd6f748a7201df04bd69dfa222"],["/2022/07/17/Git/80_删除分支-1658052385735.png","3938bac868e9ebfdd7b7de295e07e9a5"],["/2022/07/17/Git/80_删除分支.png","3938bac868e9ebfdd7b7de295e07e9a5"],["/2022/07/17/Git/81_本地仓库推送到远程仓库-1658052385735.png","12cb4639819571d934a96d65bb31a7ed"],["/2022/07/17/Git/81_本地仓库推送到远程仓库.png","12cb4639819571d934a96d65bb31a7ed"],["/2022/07/17/Git/82_本地仓库推送到远程仓库-1658052385735.png","5dd9942620209ca6980c8d4207b9218e"],["/2022/07/17/Git/82_本地仓库推送到远程仓库.png","5dd9942620209ca6980c8d4207b9218e"],["/2022/07/17/Git/83_远程仓库克隆到本地仓库-1658052385735.png","669c1a7138853490d7fc39fa44250368"],["/2022/07/17/Git/83_远程仓库克隆到本地仓库.png","669c1a7138853490d7fc39fa44250368"],["/2022/07/17/Git/index.html","32a38a7096870a729d7f497fa5961668"],["/about/index.html","6b3a2c11798b138047677e41d1d95695"],["/archives/2022/06/index.html","bd2d661ead3ea5b7650bbfbc06e40e28"],["/archives/2022/07/index.html","80cb2fbd1d111ea2b001f3b8c17c1b35"],["/archives/2022/07/page/2/index.html","c606a0a5b5b6cff6a5d7528fd430c226"],["/archives/2022/index.html","96895130f707885648bfee8a05a2880b"],["/archives/2022/page/2/index.html","f72f013e88e94e0d5e963a27125b887c"],["/archives/index.html","f9fc1895430c98b5500df5f5bc950875"],["/archives/page/2/index.html","65d75d88147896ffad1ea00141cde048"],["/categories/Git/index.html","c617e06a39b62bcbad800dc002933fce"],["/categories/Java/index.html","7bc6662c33404e0ef08512235021c8c9"],["/categories/Python/index.html","bfa9b4fd2882505c05a494cdfbd0b2ba"],["/categories/Python爬虫/index.html","2142962ee9cafe7d304e0614a37605ab"],["/categories/hexo使用手册/index.html","78780777144b67cc7e6a097271724f40"],["/categories/index.html","8c66557959218f0febde354584c14875"],["/css/main.css","58f15f54f3941b2c19cb834a79b92359"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","d97248ee7ec5d02786a69334950b8e90"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/background.jpg","4d2f255678712f79fb8b7e8f0535bd2a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","1c6fdd8a74dc5e7318fd79d14e89bfae"],["/index.html","db2432552815ee47dbdc8483149e16c4"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/click-live.js","b90cb1ee013de4f5cffcdae8ec04c7fd"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/snow2.js","c2bd4549400b0fab9e2f0288b546a3d1"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","67e49230dce69b49de6abfb87927690a"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","04974e4dc4867f5b11ff939e03fa9296"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f930b6dcfcab02644926ad0f20da28f9"],["/resources/index.html","acf49e5384a151d7410806e65ceff81d"],["/sw-register.js","1b5bc2d6f8730861cef1b086b9beab68"],["/tags/Git/index.html","2ff99b493cc6c23fd4aaf6cdf9c3b441"],["/tags/Java/index.html","3950dd09429bd994da7a78fd94e44b5c"],["/tags/Python/index.html","17271265d987a2bbdd301d09429e492b"],["/tags/Python爬虫/index.html","26d3fdc5e67883f08b7a69484303f947"],["/tags/hexo使用手册/index.html","7a50ddd82a3fa88a5d998a40af6a3c89"],["/tags/index.html","7fab6d9974e255e81c3f226009072464"]];
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
