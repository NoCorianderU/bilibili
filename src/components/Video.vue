<template>
  <div class="videoSections">
    <div class="container">
      <div class="topInfo clearfix">
        <p class="title" title="笑笑西卡德云色 18.7.30 今夜惊喜集体活动">笑笑西卡德云色 18.7.30 今夜惊喜集体活动</p>
        <div class="category">
          <a href="/">主页</a> > <a href="/">游戏</a> > <a href="/">电子竞技</a>
          <span class="time">2018-07-31 02:11:42</span>
          <a href="/">稿件投诉</a>
        </div>
        <div class="videoInfo clearfix fl">
          <p class="playTimes fl"><span></span>12.9万</p>
          <p class="danmu fl"><span></span>3552</p>
          <p class="coins fl"><span></span>硬币 9331</p>
          <p class=" collections fl"><span></span>收藏 73</p>
        </div>
        <div class="up fr">
          <a href="javascript:;"><img src="../images/dys.jpg" alt=""></a>
          <a href="javascript:;" class="upName">老实憨厚的笑笑</a>
          <p class="summary">单机游戏全部放入收藏夹中 方便想看的老哥们查找</p>
          <span class="contribute">投稿：237</span>
          <span class="fans">粉丝：25.4万</span>
          <a href="javascript:;" class="follow">+ 关注</a>
          <a href="" class="message"><span></span>发消息</a>
          <div class="live">
            <a href="">轮播中</a>
          </div>
        </div>
        <!-- <div class="videoAD fl">
          <a href="">
            <span></span>
            <img src="../images/videoAD.jpg" alt="">
          </a>
        </div> -->
      </div>
    </div>
    <div class="videoBox">
      <div class="container">
        <div class="videoList">
          <a href="javascript:;" class="showList" v-if="showAll" @click="showList(false)">收起</a>
          <a href="javascript:;" class="showList" v-else @click="showList(true)">展开</a>
          <ul :class="['clearfix', {'showAll': !showAll}]">
            <li><a href="" class="active">1、开场</a></li>
            <li><a href="">2、熊熊逛虎扑步行街</a></li>
            <li><a href="">3、孩孩卡特：#上香</a></li>
            <li><a href="">4、日女奥拉夫：冲啊skrskr</a></li>
            <li><a href="">5、LSPL第一（菜）卡尔玛 孩孩女警</a></li>
            <li><a href="">6、兰博寒冰：安德烈士钦点下路</a></li>
            <li><a href="">7、快乐的一天</a></li>
            <li><a href="">8、卡skr炉石</a></li>
          </ul>
        </div>
        <div class="videoContent clearfix">
          <div class="topAD fl">
            <a href="javascript:;" class="preAD iconfont icon-fanhui"></a>
            <a href="javascript:;" class="nextAD iconfont icon-gengduo"></a>
            <ul class="listAD">
              <li><a href="javascript:;">清凉一夏征稿活动开始啦，晒出最适合在夏天做的事？前往活动 >>></a></li>
              <!-- <li><a href="javascript:;">周刊哔哩哔哩排行榜#423</a></li> -->
            </ul>
          </div>
          <div class="settings fr">
            <div class="topBar">
              <p><span>1162</span>人正在看，3071条弹幕</p>
              <a href="javascript:;" class="topBarSettings iconfont icon-5"></a>
              <a href="javascript:;" class="topBarMore iconfont icon-Androidgengduo"></a>
            </div>
            <div class="listIndex">
              <ul>
                <li :class="{'active': index === 1}" @click="changeIndex(1)"><a href="javascript:;">推荐视频</a></li>
                <li :class="{'active': index === 2}" @click="changeIndex(2)"><a href="javascript:;">弹幕列表</a></li>
                <li :class="{'active': index === 3}" @click="changeIndex(3)"><a href="javascript:;">屏蔽设定</a></li>
              </ul>
            </div>
            <div class="listContent">
              <EasyScrollbar :barOption="myBarOption" v-if="index === 1">
                <div class="recomVideos">
                  <ul>
                    <li v-for="i in 20" :key="i">
                      <a href="javascript:;">
                        <div class="vPost">
                          <img src="../images/vpost.webp" alt="">
                          <a href="" class="laterWatch"></a>
                          <span>稍后再看</span>
                        </div>
                        <p class="fr" title="【黑魂3】打开游戏语音会发生什么神奇的事？【语音黑魂3第0期】">【黑魂3】打开游戏语音会发生什么神奇的事？【语音黑魂3第0期】</p>
                        <span class="plays"><i class="iconfont icon-bofang"></i>1.8万</span>
                        <span class="danmu"><i class="iconfont icon-weibiaoti1"></i>119</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </EasyScrollbar>
              <EasyScrollbar :barOption="myBarOption" v-if="index === 2">
                <div class="danmuList">
                  <ul>
                    <li>
                      <a href="javascript:;"><span class="time">时间</span><span class="danmuContent">弹幕内容</span><span class="sendTime">发送时间</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">00:14</span><span class="danmuContent">刷魂都能死这么多次，第一次见</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                    <li>
                      <a href="javascript:;"><span class="time">04:06</span><span class="danmuContent">233333</span><span class="sendTime">08-04 15:09</span></a>
                    </li>
                  </ul>
                </div>
              </EasyScrollbar>
              <div class="banList" v-if="index === 3">
                <div class="banSetting clearfix">
                  <a href="" class="banBtn fl">屏蔽列表<span></span></a>
                  <a href="" class="downList fr"><span class="iconfont icon-update"></span>同步屏蔽列表</a>
                </div>
                <div class="banContent clearfix">
                  <div class="banRule fl">
                    <a href="javascript:;">文本<span class="iconfont icon-icon-up"></span></a>
                    <ul>
                      <li>文本</li>
                      <li>正则</li>
                    </ul>
                  </div>
                  <input type="text" placeholder="请输入关键词" class="banKeyword fl">
                  <a href="" class="addBtn fl">添加</a>
                  <ul class="banTableType fl">
                    <li class="active">屏蔽词</li>
                    <li>屏蔽用户</li>
                  </ul>
                  <ul class="banTable fl">
                    <li><span class="type">类别</span><span class="cont">内容（-）</span><span class="states">状态</span><span class="actions">操作</span><span class="upload">同步</span></li>
                    <li class="noList">暂无屏蔽内容</li>
                  </ul>
                  <div class="banByType fl">
                    <p>按类型屏蔽</p>
                    <ul class="clearfix">
                      <li><a href="javascript:;"><span></span>滚动弹幕</a></li>
                      <li><a href="javascript:;"><span></span>顶端弹幕</a></li>
                      <li><a href="javascript:;"><span></span>底端弹幕</a></li>
                      <li><a href="javascript:;"><span></span>彩色弹幕</a></li>
                      <li><a href="javascript:;"><span></span>特殊弹幕</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="video fl">
            <div class="test"></div>
            <div class="videoController">
              <div class="videoProgressBar clearfix">
                <div class="playAndPause fl">
                  <i class="iconfont icon-bofang1"></i>
                  <!-- <i class="iconfont icon-zanting"></i> -->
                </div>
                <div class="skip fl">
                  <i class="iconfont icon-kuaijin-"></i>
                </div>
                <div class="progressBox fl">
                  <div class="progress">
                    <div class="videoBuffer"></div>
                    <div class="playedTime"></div>
                    <div class="playStaff"></div>
                    <div class="videoCut">
                      <span>00:00</span>
                    </div>
                  </div>
                </div>
                <div class="videoTime fl">
                  <span>24:02</span>/<span>25:06</span>
                </div>
                <div class="videoVoice fl">
                  <i v-if="voice === 2" class="iconfont icon-yangshengqispeaker85"></i>
                  <i v-else-if="voice === 1" class="iconfont icon-yinpinaudio48"></i>
                  <i v-else class="iconfont icon-jingyinmute31"></i>
                  <div class="voiceBar">
                    <span>100</span>
                    <div class="voiceProgress">
                      <div class="curVoice"></div>
                    </div>
                  </div>
                </div>
                <div class="videoDefinition fl">
                  <span>1080P</span>
                  <ul>
                    <li class="active">高清 1080P</li>
                    <li>高清 720P</li>
                    <li>清晰 480P</li>
                    <li>流畅 360p</li>
                    <li>自动</li>
                  </ul>
                </div>
                <div class="videoDanmu fl">
                  <i class="iconfont icon-duihuakuangfanse"></i>
                  <div class="videoDanmuSetting">
                    <div class="danmuOpacity">
                      不透明度
                      <div class="danmuOpacityBar fr">
                        <div class="curOpacity"></div>
                      </div>
                    </div>
                    <div class="videoDanmuRuler">
                      <label for="setBanRule">防挡字幕</label><input type="checkbox" id="setBanRule">
                    </div>
                    <ul>
                      <li><a href="javascript:;"><span></span>顶端弹幕</a></li>
                      <li><a href="javascript:;"><span></span>底端弹幕</a></li>
                      <li><a href="javascript:;"><span></span>滚动弹幕</a></li>
                    </ul>
                  </div>
                  <span class="btnTip">关闭弹幕</span>
                </div>
                <div class="videoLoop fl">
                  <i class="iconfont icon-xunhuan"></i>
                  <span class="btnTip">打开洗脑循环</span>
                </div>
                <div class="videoWildScreen fl">
                  <i class="iconfont icon-bilibilidonghua"></i>
                  <span class="btnTip">宽屏模式</span>
                </div>
                <div class="videoFullScreen fl">
                  <i class="iconfont icon-he"></i>
                  <span class="btnTip">进入全屏</span>
                </div>
              </div>
            </div>
            <div class="danmuSection fl">
              <div class="danmuSendSetting fl">
                <i class="iconfont icon-weibiaoti1"></i>
              </div>
              <div class="danmuColor fl">
                <i class="iconfont icon-ProjectManagement"></i>
              </div>
              <div class="danmuInput fl">
                <input type="text" placeholder="您可以在这里输入弹幕吐槽哦~">
                <a href="javscript:;" class="sendDanmu">发送 ></a>
                <a href="javscript:;" class="danmuStandard">弹幕礼仪 ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="videoShare clearfix">
          <div class="shareLink fl clearfix">
            <a href="javascript:;" class="shareBtn fl" title="分享人数23">分享<span class="shareNum">23</span></a>
            <ul class="shareTo fl clearfix">
              <li><a href="javascript:;" title="分享到动态"><i class="iconfont icon-wechat-friend"></i></a></li>
              <li><a href="javascript:;" title="分享到微博"><i class="iconfont icon-weibo"></i></a></li>
              <li><a href="javascript:;" title="分享到QQ空间"><i class="iconfont icon-qzone"></i></a></li>
              <li><a href="javascript:;" title="分享到QQ"><i class="iconfont icon-qq"></i></a></li>
              <li><a href="javascript:;" title="分享到GITHUB"><i class="iconfont icon-github"></i></a></li>
            </ul>
            <div class="shareTg clearfix">
              <div class="shareVideoURL fl">
                <p>将视频贴到博客或论坛</p>
                <div class="videoFullPath clearfix">
                  <span class="fl">视频地址</span>
                  <input type="text" class="fl">
                  <a href="javascript:;" class="fl">复制</a>
                </div>
                <div class="videoIFrame clearfix">
                  <span class="fl">嵌入代码</span>
                  <input type="text" class="fl">
                  <a href="javascript:;" class="fl">复制</a>
                </div>
              </div>
              <div class="shareErweima fl">
                <p>微信扫一扫分享</p>
                <img src="../images/vewm.png" alt="">
              </div>
            </div>
          </div>
          <ul class="videoActions fl clearfix">
            <li><a href="javascript:;" title="收藏人数33" @mouseover="gifMove(collection)" @mouseout="gifBack(collection)"><span class="startAnimate" :style="collection.bgPosition"></span>收藏<span class="itemNum">33</span></a></li>
            <li><a href="javascript:;" title="投硬币枚数606" @mouseover="gifMove(coin)" @mouseout="gifBack(coin)"><span class="startAnimate" :style="coin.bgPosition"></span>硬币<span class="itemNum">606</span></a></li>
            <li><a href="javascript:;" title="加稍后看" @mouseover="gifMove(later)" @mouseout="gifBack(later)"><span class="startAnimate" :style="later.bgPosition"></span>稍后看<span class="itemNum">马克一下~</span></a></li>
            <li>
                <a href="javascript:;" title="加稍后看" @mouseover="gifMove(app)" @mouseout="gifBack(app)"><span class="startAnimate" :style="app.bgPosition"></span>用手机看<span class="itemNum">转移阵地~</span></a>
                <div class="shareApp">
                  <div class="topCon">
                    <img src="../images/er.png" alt="">
                    <span>笑笑西卡德云色 18.8.9 新版本 又是打爆对面的季节</span>
                  </div>
                  <p>用<a href="">哔哩哔哩客户端</a>或其他应用扫描二维码</p>
                </div>
            </li>
          </ul>
          <div class="appDownload fl">
            <i class="iconfont icon-downloadvideo"></i>
            <span>手机下视频</span>
            <div class="appVideo">
              <img class="fl" src="../images/er.png" alt="">
              <span class="fr">笑笑西卡德云色 18.8.9 新版本 又是打爆对面的季节</span>
              <p class="fl">请使用<a href="javascript:;">哔哩哔哩客户端</a>扫码</p>
              <p class="fl">若未安装客户端，可直接扫此码下载应用</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="videoBottomInfo">
      <div class="container">
        <div class="videoTag">
          <ul class="clearfix">
            <li>电子竞技</li>
            <li>英雄联盟</li>
            <li>笑笑</li>
            <li>李浩宇</li>
            <li>德云色</li>
            <li>孙亚龙</li>
            <li>西卡</li>
            <li>电子竞技</li>
            <li><i class="iconfont icon-jia"></i></li>
          </ul>
          <div class="clearfix">
            <span class="fl">查看标签修改记录</span>
            <span class="fl"></span>
            <span class="fl">查看标签使用说明</span>
          </div>
        </div>
        <div class="videoDesc">
          <p><span></span>未经作者授权 禁止转载</p>
          <span>
            直播间：star.longzhu.com/777777<br>
            微博：@小孩kiddddd@dys释梦 @笑笑_孙亚龙 @西卡_李浩宇 @dys米米 @dys元气<br>
            百度贴吧：德云色<br>
            微信公众号：德云色<br>
          </span>
        </div>
        <div class="videoBotAD">
          <a href="javascript:;"><img src="../images/vad.jpg" alt=""></a>
          <span></span>
        </div>
        <div class="videoTuijian">
          <p>看过该视频的还喜欢</p>
          <Popularize :useTitle="false" :between="'margin-right:16px'"></Popularize>
          <a href="javascript:;" class="preList"><i class="iconfont icon-arrow-left-"></i></a>
          <a href="javascript:;" class="nextList"><i class="iconfont icon-arrow-right-"></i></a>
        </div>
        <div class="videoComment">
          <p>287&nbsp;&nbsp;评论<a href="" class="fr">查看删除日志</a></p>
          <div class="comtentIndex clearfix">
            <ul class="commentType clearfix fl">
              <li class="active"><a href="javascript:;">全部评论</a></li>
              <li><a href="javascript:;">按热度排序</a></li>
            </ul>
            <ul class="commentList clearfix fr">
              <li>共10页</li>
              <!-- <li><a href="javascript:;">上一页</a></li> -->
              <li class="active"><a href="javascript:;">1</a></li>
              <li><a href="javascript:;">2</a></li>
              <li><a href="javascript:;">3</a></li>
              <li><a href="javascript:;">4</a></li>
              <li>...</li>
              <li><a href="javascript:;">10</a></li>
              <li><a href="javascript:;">下一页</a></li>
            </ul>
          </div>
          <CommentInput/>
          <ul class="comments">
            <li>
              <div class="commentContent clearfix">
                <div class="userInfo fl">
                  <a href="javascript:;"><img src="../images/test.webp" alt=""></a>
                  <a href="javascript:;" class="followBtn">关注</a>
                </div>
                <div class="commentDetails fl">
                  <a href="javascript;;" class="userId">在下叶良翔<span></span></a>
                  <p class="commentText">炉石开包出个米宝？</p>
                  <div class="commentActions">
                    <span class="index">#27</span>
                    <span class="mobile">来自<a href="javascript:;">安卓客户端</a></span>
                    <span class="comTime">2018-08-10 07:40</span>
                    <span class="skr"><i class="iconfont icon-dianzan"></i>183</span>
                    <span class="noskr"><i class="iconfont icon-tread"></i></span>
                    <span class="interaction">回复</span>
                  </div>
                  <ul class="userInteraction">
                    <li>
                      <div class="replyInfo clearfix">
                        <div class="replyHead fl">
                          <a href="javascript:;"><img src="../images/test2.webp" alt=""></a>
                        </div>
                        <div class="replyComment fl">
                          <p class="replyText"><a href="javascript;;" class="userId bigbig">TiCache<span></span></a>开包开出个🐸</p>
                          <div class="replyActions">
                            <span class="comTime">2018-08-10 07:40</span>
                            <span class="skr"><i class="iconfont icon-dianzan"></i></span>
                            <span class="interaction">回复</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="replyInfo clearfix">
                        <div class="replyHead fl">
                          <a href="javascript:;"><img src="../images/test2.webp" alt=""></a>
                        </div>
                        <div class="replyComment fr">
                          <p class="replyText"><a href="javascript;;" class="userId">无德无品<span></span></a>开包开出个🐸</p>
                          <div class="replyActions">
                            <span class="comTime">2018-08-10 07:40</span>
                            <span class="skr"><i class="iconfont icon-dianzan"></i></span>
                            <span class="interaction">回复</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="replyInfo clearfix">
                        <div class="replyHead fl">
                          <a href="javascript:;"><img src="../images/test2.webp" alt=""></a>
                        </div>
                        <div class="replyComment fr">
                          <p class="replyText"><a href="javascript;;" class="userId">无德无品<span></span></a>开包开出个🐸</p>
                          <div class="replyActions">
                            <span class="comTime">2018-08-10 07:40</span>
                            <span class="skr"><i class="iconfont icon-dianzan"></i></span>
                            <span class="interaction">回复</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="replyLength">共<span>20</span>条回复,<a href="javascript:;">点击查看</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div class="commentContent clearfix">
                <div class="userInfo fl">
                  <a href="javascript:;"><img src="../images/test.webp" alt=""></a>
                  <a href="javascript:;" class="followBtn">关注</a>
                </div>
                <div class="commentDetails fl">
                  <a href="javascript;;" class="userId">在下叶良翔<span></span></a>
                  <p class="commentText">我们老板竟然敢把我开了，兄弟们给我老板刷波狂！！╮(￣▽￣)╭</p>
                  <div class="commentActions">
                    <span class="index">#27</span>
                    <span class="mobile">来自<a href="javascript:;">安卓客户端</a></span>
                    <span class="comTime">2018-08-10 07:40</span>
                    <span class="skr"><i class="iconfont icon-dianzan"></i>183</span>
                    <span class="noskr"><i class="iconfont icon-tread"></i></span>
                    <span class="interaction">回复</span>
                  </div>
                  <ul class="userInteraction">
                    <li>
                      <div class="replyInfo clearfix">
                        <div class="replyHead fl">
                          <a href="javascript:;"><img src="../images/test2.webp" alt=""></a>
                        </div>
                        <div class="replyComment fl">
                          <p class="replyText"><a href="javascript;;" class="userId">TiCache<span></span></a>开包开出个🐸</p>
                          <div class="replyActions">
                            <span class="comTime">2018-08-10 07:40</span>
                            <span class="skr"><i class="iconfont icon-dianzan"></i>4</span>
                            <span class="interaction">回复</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="replyInfo clearfix">
                        <div class="replyHead fl">
                          <a href="javascript:;"><img src="../images/test2.webp" alt=""></a>
                        </div>
                        <div class="replyComment fl">
                          <p class="replyText"><a href="javascript;;" class="userId">无德无品<span></span></a>开包开出个🐸</p>
                          <div class="replyActions">
                            <span class="comTime">2018-08-10 07:40</span>
                            <span class="skr"><i class="iconfont icon-dianzan"></i></span>
                            <span class="interaction">回复</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="replyInfo clearfix">
                        <div class="replyHead fl">
                          <a href="javascript:;"><img src="../images/test2.webp" alt=""></a>
                        </div>
                        <div class="replyComment fl">
                          <p class="replyText"><a href="javascript;;" class="userId">无德无品<span></span></a>开包开出个🐸</p>
                          <div class="replyActions">
                            <span class="comTime">2018-08-10 07:40</span>
                            <span class="skr"><i class="iconfont icon-dianzan"></i></span>
                            <span class="interaction">回复</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="replyLength">共<span>20</span>条回复,<a href="javascript:;">点击查看</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div class="commentContent clearfix">
                <div class="userInfo fl">
                  <a href="javascript:;"><img src="../images/test.webp" alt=""></a>
                  <a href="javascript:;" class="followBtn">关注</a>
                </div>
                <div class="commentDetails fl">
                  <a href="javascript;;" class="userId">在下叶良翔<span></span></a>
                  <p class="commentText">大风起兮云飞扬，黑光剑**四方。<br>俱怀逸兴壮思飞，欲上青天揽明月。<br>自古英雄配美人，四海之内皆兄弟。<br>陈氏斗鱼空守信，从此兄弟不相容。<br>抽刀断水水更流，举杯浇愁愁更愁。<br>君子何患无兄弟，百万一心共同仇。<br>心灰意泠归隐去，不忍兄弟又强留。<br>山僧不识英雄主，何必哓哓问姓名？<br>从此英雄不常有，只留龙珠孙秃头。</p>
                  <div class="commentActions">
                    <span class="index">#27</span>
                    <span class="mobile">来自<a href="javascript:;">安卓客户端</a></span>
                    <span class="comTime">2018-08-10 07:40</span>
                    <span class="skr"><i class="iconfont icon-dianzan"></i>183</span>
                    <span class="noskr"><i class="iconfont icon-tread"></i></span>
                    <span class="interaction">回复</span>
                  </div>
                  <ul class="userInteraction">
                    <li>
                      <div class="replyInfo clearfix">
                        <div class="replyHead fl">
                          <a href="javascript:;"><img src="../images/test2.webp" alt=""></a>
                        </div>
                        <div class="replyComment fl">
                          <p class="replyText"><a href="javascript;;" class="userId">TiCache<span></span></a>开包开出个🐸</p>
                          <div class="replyActions">
                            <span class="comTime">2018-08-10 07:40</span>
                            <span class="skr"><i class="iconfont icon-dianzan"></i></span>
                            <span class="interaction">回复</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="replyInfo clearfix">
                        <div class="replyHead fl">
                          <a href="javascript:;"><img src="../images/test2.webp" alt=""></a>
                        </div>
                        <div class="replyComment fl">
                          <p class="replyText"><a href="javascript;;" class="userId">无德无品<span></span></a>开包开出个🐸</p>
                          <div class="replyActions">
                            <span class="comTime">2018-08-10 07:40</span>
                            <span class="skr"><i class="iconfont icon-dianzan"></i></span>
                            <span class="interaction">回复</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="replyInfo clearfix">
                        <div class="replyHead fl">
                          <a href="javascript:;"><img src="../images/test2.webp" alt=""></a>
                        </div>
                        <div class="replyComment fl">
                          <p class="replyText"><a href="javascript;;" class="userId">无德无品<span></span></a>开包开出个🐸</p>
                          <div class="replyActions">
                            <span class="comTime">2018-08-10 07:40</span>
                            <span class="skr"><i class="iconfont icon-dianzan"></i></span>
                            <span class="interaction">回复</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="replyLength">共<span>20</span>条回复,<a href="javascript:;">点击查看</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <p class="commentCut">以上为热门评论，<a href="javascript:;">查看更多</a></p>
          <Comment></Comment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popularize from '@/components/Popularize'
import Comment from '@/components/Comment'
import CommentInput from '@/components/CommentInput'

export default {
  components: {
    Popularize,
    Comment,
    CommentInput
  },

  data () {
    return {
      index: 1,
      showAll: false,
      myBarOption: {
        barColor: "#6D757A",
        barWidth: 6,
        railColor: "#EDF2F9",
        barOpacityMin: 0
      },
      voice: 2,
      collection: {
        timer: '',
        index: 0,
        num: 13,
        bgPosition: '',
        backForth: false,
        duration: 100
      },
      coin: {
        timer: '',
        index: 0,
        num: 7,
        bgPosition: '',
        backForth: false,
        duration: 100
      },
      later: {
        timer: '',
        index: 0,
        num: 11,
        bgPosition: '',
        backForth: false,
        duration: 100
      },
      app: {
        timer: '',
        index: 0,
        num: 15,
        bgPosition: '',
        backForth: true,
        duration: 80
      }
    }
  },

  methods: {
    changeIndex (index) {
      this.index = index
    },

    showList (flag) {
      this.showAll = flag
    },

    gifMove (obj) {
      this.$imgAnim.gifMove(obj)
    },

    backAndForth (obj) {
      this.$imgAnim.backAndForth(obj)
    },

    gifBack (obj) {
      this.$imgAnim.gifBack(obj)
    },

  }

}
</script>

<style lang="scss" scoped>
.videoSections {
  margin-top: -5px;
  padding-top: 10px;
  border-top: 1px solid #E5E9EF;
  .topInfo {
    .title{
      width: 720px;
      font-size: 18px;
      line-height: 38px;
      color: #525659;
      text-overflow:ellipsis;
      overflow:hidden;
      white-space:nowrap;
    }
    .category {
      margin-top: 6px;
      font-size: 12px;
      a {
        color: #99A2AA;
        &:hover {
          color: #00A1D6;
        }
      }
      .time {
        margin: 0 29px;
        color: #99A2AA;
      }
    }
    .up {
      position: relative;
      margin-top: -51px;
      width: 315px;
      a {
        display: inline-block;
        img {
          width: 68px;
          height: 68px;
          border-radius: 50%;
        }
      }
      span {
        color: #99A2AA;
      }
      .upName {
        position: absolute;
        top: 0;
        left: 89px;
        line-height: 1;
        font-size: 14px;
        color: #FB76AF;
        margin-right: 128px;
      }
      .summary {
        position: absolute;
        top: 22px;
        left: 89px;
        width: 226px;
        line-height: 20px;
      }
      .contribute {
        position: absolute;
        top: 67px;
        left: 89px;
      }
      .fans {
        position: absolute;
        top: 67px;
        left: 189px;
      }
      .follow {
        position: absolute;
        top: 98px;
        left: 89px;
        width: 148px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: 14px;
        text-align: center;
        border-radius: 4px;
        background: #00A7DE;
        transition: .2s;
        &:hover {
          background: #00BEE7;
        }
      }
      .message {
        position: absolute;
        top: 1px;
        right: 0;
        color: #6D757A;
        transition: .2s;
        &:hover {
          color: #00A1D6;
        }
        span {
          display: inline-block;
          margin-top: -3px;
          margin-right: 6px;
          width: 16px;
          height: 12px;
          background: url('../images/icons.png') no-repeat -280px -2010px;
          vertical-align: middle;
        }
      }
      .live {
        position: absolute;
        top: 0;
        left: -84px;
        width: 77px;
        height: 24px;
        line-height: 24px;
        background:  url('../images/liveBg.png');
        &:hover {
          background:  url('../images/liveBg2.png');
          a {
            color: #fff;
            &::before {
              background: #fff;
            }
          }
        }
        a {
          display: block;
          position: relative;
          padding-left: 22px;
          color: #F25D8E;
          transition: .3s;
          &::before {
            position: absolute;
            top: 8px;
            left: 10px;
            z-index: 10;
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 4px;
            background: #F25D8E;
            transition: .3s;
          }
        }
      }
    }
    .videoInfo {
      margin-top: 20px;
      margin-bottom: 55px;
      padding-left: 3px;
      p {
        color: #000;
        line-height: 18px;
        span {
          display: inline-block;
          vertical-align: middle;
        }
      }
      .playTimes {
        margin-right: 33px;
        span {
          margin-top: -4px;
          margin-right: 10px;
          width: 18px;
          height: 18px;
          background: url('../images/icons.png') no-repeat -662px -215px;
        }
      }
      .danmu {
        position: relative;
        margin-right: 56px;
        &::before {
          position: absolute;
          top:0;
          right: -31px;
          content: '';
          width: 1px;
          height: 20px;
          background: #EEE;
        }
        span {
          margin-top: -4px;
          margin-right: 10px;
          width: 18px;
          height: 18px;
          background: url('../images/icons.png') no-repeat -662px -280px;
        }
      }
      .coins {
        margin-right: 25px;
        span {
          margin-top: -3px;
          margin-right: 11px;
          width: 20px;
          height: 20px;
          background: url('../images/coinanimate.png') no-repeat -20px -20px;
        }
      }
      .collections {
        span {
          margin-top: -5px;
          margin-right: 11px;
          width: 20px;
          height: 20px;
          background: url('../images/starts.png') no-repeat -20px -19px;
        }
      }
    }
    .videoAD {
      position: relative;
      width: 100%;
      margin-top: -1px;
      margin-bottom: 19px;
      overflow: hidden;
      img {
        border-radius: 6px;
      }
      span {
        position: absolute;
        left: 0;
        bottom: 1px;
        width: 32px;
        height: 20px;
        background: url('../images/ad.png')
      }
    }
  }
  .videoBox {
    width: 100%;
    padding-bottom: 22px;
    border-top: 1px solid #E5E9EF;
    border-bottom: 1px solid #E5E9EF;
    background: #F6F9FA;
    .videoList {
      position: relative;
      margin-top: 10px;
      ul {
        padding-top: 12px;
        li {
          float: left;
          margin-right: 20px;
          margin-bottom: 9px;
          a {
            display: inline-block;
            box-sizing: border-box;
            padding: 0 7px;
            width: 137px;
            height: 25px;
            line-height: 23px;
            background: #FFF;
            border: 1px solid #CCD0D7;
            border-radius: 4px;
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
          }
          .active {
            border: 1px solid #00A1D6;
            background: #00A1D6;
            color: #fff;
          }
        }
      }
      .showAll {
        overflow: hidden;
        height: 37px;
      }
      .showList {
        position: absolute;
        top: 12px;
        right: 0;
        display: inline-block;
        box-sizing: border-box;
        width: 60px;
        height: 25px;
        line-height: 23px;
        text-align: center;
        color: #000;
        background: #fff;
        border: 1px solid #CCD0D7;
        border-radius: 4px;
        &:hover {
          border: 1px solid #00A1D6;
          background: #00A1D6;
          color: #fff;
        }
      }
    }
    .videoContent {
      box-shadow: 0 2px 4px #EDEFEF;
      margin-bottom: 20px;
      .topAD {
        position: relative;
        width: 860px;
        height: 48px;
        line-height: 48px;
        background: #353535;
        a {
          display: inline-block;
          color: #FFF;
        }
        .preAD {
          position: absolute;
          left: 8px;
          top: 8px;
          padding-left: 4px;
          height: 34px;
          line-height: 34px;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
          background: #262626;
          border-radius: 2px;
          transition: .5s;
          &:hover {
            color: #00A1D6;
          }
        }
        .nextAD {
          position: absolute;
          right: 8px;
          top: 8px;
          padding-right: 4px;
          height: 34px;
          line-height: 34px;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
          background: #262626;
          border-radius: 2px;
          transition: .5s;
          &:hover {
            color: #00A1D6;
          }
        }
        .listAD {
          position: absolute;
          left: 30px;
          top: 8px;
          width: 800px;
          height: 34px;
          background: #262626;
          li {
            width: 100%;
            height: 100%;
            line-height: 34px;
            text-align: center;
            font-size: 13px;
          }
        }
      }
      .settings {
        box-sizing: border-box;
        border-left: 1px solid #E2E2E2;
        width: 300px;
        background: #FFF;
        .topBar {
          position: relative;
          box-sizing: border-box;
          padding-left: 20px;
          height: 61px;
          line-height: 58px;
          border-bottom: 1px solid #E2E2E2;
          p {
            color: #99A2AA;
            font-size: 10px;
            span {
              color: #222;
              font-size: 18px;
              font-weight: bold;
            }
          }
          .topBarSettings {
            position: absolute;
            top: 16px;
            right: 39px;
            display: inline-block;
            width: 30px;
            padding: 2px 0 4px;
            font-size: 24px;
            line-height: 1;
            text-align: center;
            color: #99A2AA;
            transition: .2s;
            &:hover {
              color: #6D757A;
              background: #E5E9EF;
            }
          }
          .topBarMore {
            position: absolute;
            top: 16px;
            right: 6px;
            display: inline-block;
            width: 30px;
            font-size: 24px;
            padding: 3px 0;
            line-height: 1;
            text-align: center;
            color: #99A2AA;
            transition: .2s;
            &:hover {
              color: #6D757A;
              background: #E5E9EF;
            }
          }
        }
        .listIndex {
          ul {
            padding: 0 17px;
            height: 30px;
            border-bottom: 1px solid #E2E2E2;
            display: flex;
            justify-content: space-between;
            li {
              float: left;
              a {
                display: inline-block;
                width: 65px;
                height: 29px;
                line-height: 30px;
                text-align: center;
                &:hover {
                  color: #00A1D6;
                }
              }
            }
            .active {
              a {
                color: #00A1D6;
                border-bottom: 2px solid #00A1D6;
              }
            }
          }
        }
        .listContent {
          box-sizing: border-box;
          height: 596px;
          .recomVideos {
            padding-left: 20px;
            height: 584px;
            ul {
              li {
                position: relative;
                margin-top: 10px;
                height: 62px;
                a {
                  display: inline-block;
                  .vPost {
                    display: inline-block;
                    position: relative;
                    &:hover {
                      .laterWatch {
                        opacity: 1;
                      }
                    }
                    img {
                      width: 100px;
                      height: 62px;
                      border-radius: 2px;
                    }
                    .laterWatch {
                      display: inline-block;
                      position: absolute;
                      right: 6px;
                      bottom: 6px;
                      width: 22px;
                      height: 22px;
                      background: url('../images/after.png');
                      opacity: 0;
                      transition: .1s;
                      &:hover+span{
                        transition-delay: .2s;
                        transform: translateY(-9px);
                        opacity: 1;
                      }
                    }
                    span {
                      position: absolute;
                      top: 16px;
                      left: 51px;
                      display: inline-block;
                      width: 64px;
                      height: 24px;
                      line-height: 24px;
                      color: #fff;
                      text-align: center;
                      background: rgba(0, 0, 0, .7);
                      border-radius: 4px;
                      opacity: 0;
                      transition: .3s;
                    }
                  }
                  p {
                    margin-left: 10px;
                    width: 152px;
                    height: 36px;
                    line-height: 18px;
                    overflow: hidden;
                    &:hover {
                      color: #00A1D6;
                    }
                  }
                  span {
                    position: absolute;
                    top: 45px;
                    line-height: 12px;
                    color: #99A2AA;
                    i {
                      margin-right: 5px;
                      font-size: 14px;
                    }
                  }
                  .plays {
                    left: 109px;
                  }
                  .danmu {
                    left: 187px;
                    i {
                      margin-right: 6px;
                      font-size: 10px;
                    }
                  }
                }
              }
            }
          }
          .danmuList {
            padding-left: 20px;
            height: 584px;
            ul {
              padding-top: 5px;
              li {
                height: 24px;
                line-height: 24px;
                &:first-child {
                  height: 22px;
                  line-height: 22px;
                  margin-bottom: 5px;
                  &:hover {
                    a {
                      color: #99A2AA;
                    }
                  }
                }
                &:hover {
                  a {
                    color: #00A1D6;
                  }
                }
                a {
                  color: #99A2AA;
                  span {
                    display: inline-block;
                  }
                }
                .time {
                  width: 46px;
                  text-overflow:ellipsis;
                  overflow:hidden;
                  white-space:nowrap;
                }
                .danmuContent {
                  margin-right: 16px;
                  width: 130px;
                  text-overflow:ellipsis;
                  overflow:hidden;
                  white-space:nowrap;
                }
                .sendTime {
                  width: 70px;
                  text-overflow:ellipsis;
                  overflow:hidden;
                  white-space:nowrap;
                }
              }
            }
          }
          .banList {
            padding-top: 21px;
            .banSetting {
              padding-left: 16px;
              span {
                font-weight: bold;
              }
              .banBtn {
                font-weight: bold;
                span {
                  display: inline-block;
                  position: relative;
                  width: 26px;
                  height: 16px;
                  margin-left: 6px;
                  border: 1px solid #00A1D6;
                  border-radius: 9px;
                  vertical-align: middle;
                  &::after {
                    position: absolute;
                    top: 2px;
                    right: 2px;
                    content: '';
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #00A1D6;
                  }
                }
              }
              .downList {
                line-height: 20px;
                margin-right: 17px;
                color: #00A1D6;
                span {
                  font-size: 10px;
                  display: inline-block;
                  margin-right: 5px;
                }
              }
            }
            .banContent {
              margin-top: 13px;
              z-index: 10;
              .banRule {
                padding-left: 16px;
                position: relative;
                &:hover {
                  a {
                    border-radius: 4px 4px 0 0;
                  }
                  ul {
                    display: block;
                  }
                }
                a {
                  display: inline-block;
                  box-sizing: border-box;
                  padding-left: 7px;
                  width: 68px;
                  height: 32px;
                  line-height: 30px;
                  font-size: 10px;
                  color: #000;
                  border: 1px solid #CCD0D7;
                  border-radius: 4px;
                  &:hover {
                    span {
                      color: #000;
                    }
                  }
                  span {
                    display: inline-block;
                    margin-left: 15px;
                    line-height: 30px;
                    font-size: 10px;
                    color: #99A2AA;
                    vertical-align: middle;
                  }
                }
                ul {
                  position: absolute;
                  width: 66px;
                  height: 60px;
                  border: 1px solid #CCD0D7;
                  border-top: none;
                  background: #fff;
                  display: none;
                  border-radius: 0 0 4px 4px;
                  li {
                    box-sizing: border-box;
                    padding-left: 5px;
                    height: 30px;
                    line-height: 30px;
                    cursor: default;
                    transition: .2s;
                    &:hover {
                      background: #E5E9EF;
                    }
                  }
                  z-index: 1;
                }
              }
              .banKeyword {
                box-sizing: border-box;
                margin-left: 10px;
                padding-left: 10px;
                font-size: 12px;
                width: 114px;
                height: 32px;
                line-height: 30px;
                color: #000;
                border: 1px solid #CCD0D7;
                border-radius: 4px;
              }
              .addBtn {
                margin-left: 10px;
                width: 64px;
                height: 32px;
                line-height: 30px;
                text-align: center;
                color: #fff;
                border-radius: 4px;
                background: #00A1D6;
                transition: .3s;
                &:hover {
                  background: #00B5E5;
                }
              }
              .banTableType {
                position: relative;
                margin-top: 16px;
                padding-left: 16px;
                li {
                  float: left;
                  box-sizing: border-box;
                  width: 62px;
                  height: 32px;
                  line-height: 32px;
                  text-align: center;
                  color: #99A2AA;
                  transition: .2s;
                  &:hover {
                    cursor: pointer;
                    color: #000;
                  }
                }
                .active {
                  line-height: 30px;
                  color: #000;
                  background: #F4F5F7;
                  border: 1px solid #E2E2E2;
                  border-bottom: 1px solid #F4F5F7;
                  border-radius: 4px 4px 0 0;
                  transition: none;
                  &:hover {
                    cursor: default;
                    color: #000;
                  }
                }
              }
              .banTable {
                box-sizing: border-box;
                margin-top: -2px;
                padding-top: 2px;
                margin-left: 16px;
                width: 267px;
                height: 136px;
                background: #F4F5F7;
                color: #99A2AA;
                border: 1px solid #E2E2E2;
                border-radius: 0 4px 4px 4px;
                z-index: 0;
                display: flex;
                flex-direction: column;
                .noList {
                  flex: 1;
                  line-height: 94px;
                  text-align: center;
                }
                li {
                  &:first-child {
                    line-height: 30px;
                  }
                  line-height: 24px;
                  span {
                    display: inline-block;
                  }
                  .type {
                    width: 66px;
                    text-align: center;
                  }
                  .cont {
                    margin-left: -1px;
                    width: 87px;
                  }
                  .states {
                    width: 36px;
                  }
                  .actions {
                    width: 24px;
                    text-align: center;
                  }
                  .upload {
                    width: 49px;
                    text-align: center;
                  }
                }
              }
              .banByType {
                width: 100%;
                margin-top: 24px;
                border-top: 1px solid #E2E2E2;
                p {
                  margin-top: 13px;
                  margin-left: 16px;
                  left: 1;
                  font-weight: bold;
                }
                ul {
                  margin-top: 10px;
                  padding-left: 17px;
                  li {
                    float: left;
                    margin-right: 24px;
                    margin-bottom: 14px;
                    &:nth-child(4) {
                      margin-right: 0;
                    }
                    a {
                      display: inline-block;
                      width: 48px;
                      height: 68px;
                      text-align: center;
                      span {
                        display: block;
                        margin-bottom: 2px;
                        width: 48px;
                        height: 48px;
                        background: #99A2AA;
                        border-radius: 3px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .video {
        .test {
          width: 860px;
          height: 572px;
          background: #000;
        }
        .videoController {
          height: 28px;
          line-height: 28px;
          background: #fff;
          border: 1px solid #e2e2e2;
          border-left: none;
          border-right: none;
          .videoProgressBar {
            i {
              font-size: 20px;
              color: #99A2AA;
              vertical-align: middle;
            }
            .playAndPause {
              width: 40px;
              text-align: center;
              transition: .2s;
              cursor: pointer;
              &:hover {
                background: #f4f5f7;
              }
            }
            .skip {
              width: 40px;
              text-align: center;
              i {
                font-size: 22px;
              }
              cursor: pointer;
              &:hover {
                background: #F4F5F7;
              }
            }
            .progressBox {
              padding: 11px 0;
              cursor: pointer;
                &:hover {
                  .progress{
                    .playStaff {
                      display: block;
                    }
                    .videoCut {
                      display: block;
                    }
                  }
                }
              .progress {
                position: relative;
                margin-left: 3px;
                width: 485px;
                height: 6px;
                background: #E5E9EF;
                border-radius: 3px;
                cursor: pointer;
                .videoBuffer {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 50%;
                  height: 100%;
                  background: #8ADCED;
                  border-radius: 3px 0 0 3px;
                }
                .playedTime {
                  position: relative;
                  width: 30%;
                  height: 100%;
                  background: #00A1D6;
                  border-radius: 3px;
                  &::after {
                    position: absolute;
                    content: '';
                    top: -4px;
                    right: -7px;
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0 0 2px #00A1D6;
                  }
                }
                .playStaff {
                  position: absolute;
                  left: 0;
                  top: 0;
                  height: 100%;
                  background: #000;
                  display: none;
                  &::before {
                    position: absolute;
                    top: -5px;
                    left: -4px;
                    content: '';
                    overflow:hidden;
                    border-width: 4px 4px 0;
                    border-style: solid;
                    border-color: #00A1D6 transparent transparent;
                  }
                  &::after {
                    position: absolute;
                    left: -4px;
                    bottom: -5px;
                    content: '';
                    overflow:hidden;
                    border-width: 0 4px 4px;
                    border-style: solid;
                    border-color: transparent transparent #00A1D6;
                  }
                }
                .videoCut {
                  position: absolute;
                  top: -103px;
                  left: -80px;
                  width: 160px;
                  height: 90px;
                  background: #ccc;
                  display: none;
                  span {
                    position: absolute;
                    left: 50%;
                    bottom: 1px;
                    margin-left: -20px;
                    display: inline-block;
                    width: 41px;
                    height: 18px;
                    color: #6B6B6B;
                    line-height: 18px;
                    text-align: center;
                    border-radius: 3px;
                    background: #E5E9EF;
                  }
                }
              }
            }
            .videoTime {
              width: 87px;
              text-align: center;
              color: #99A2AA;
              span {
                display: inline-block;
                &:first-child {
                  margin-right: 5px;
                }
                &:last-child {
                  margin-left: 5px;
                }
              }
            }
            .videoVoice {
              position: relative;
              width: 30px;
              height: 28px;
              line-height: 28px;
              text-align: center;
              i {
                font-size: 12px;
                color: #6D757A;
              }
              &:hover {
                cursor: pointer;
                background: #F4F5F7;
                .voiceBar {
                  display: block;
                }
              }
              .voiceBar {
                position: absolute;
                top: -101px;
                left: -1px;
                box-sizing: border-box;
                width: 32px;
                height: 102px;
                color: #99A2AA;
                text-align: center;
                border: 1px solid #E2E2E2;
                border-radius: 4px 4px 0 0;
                background: #FFF;
                display: none;
                span {
                  display: inline-block;
                  width: 100%;
                  cursor: default;
                }
                .voiceProgress {
                  position: relative;
                  margin: 2px auto 0;
                  width: 6px;
                  height: 60px;
                  border-radius: 2px;
                  background: #E5E9EF;
                  .curVoice {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 30%;
                    background: #00A1D6;
                    border-radius: 2px;
                    &::before {
                      position: absolute;
                      top: -7px;
                      left: -4px;
                      content: '';
                      width: 14px;
                      height: 14px;
                      border-radius: 50%;
                      background: #fff;
                      box-shadow: 0 0 2px #00A1D6;
                    }
                  }
                }
              }
            }
            .videoDefinition {
              position: relative;
              width: 55px;
              text-align: center;
              color: #99A2BC;
              cursor: pointer;
              &:hover {
                background: #F4F5F7;
                ul {
                  display: block;
                }
              }
              ul {
                position: absolute;
                bottom: 28px;
                left: -16px;
                box-sizing: border-box;
                width: 105px;
                border: 1px solid #E2E2E2;
                border-radius: 4px;
                box-shadow:  0 0 1px #E2E2E2;
                display: none;
                li {
                  box-sizing: border-box;
                  padding-left: 20px;
                  width: 100%;
                  height: 32px;
                  line-height: 32px;
                  color: #222;
                  text-align: left;
                  background: #fff;
                  transition: .3s;
                  &:hover {
                    cursor: pointer;
                    background: #E5E9EF;
                  }
                }
                .active {
                  color: #00A1D6;
                  &:hover {
                    cursor: default;
                    background: #fff;
                  }
                }
              }
            }
            .videoDanmu {
              position: relative;
              width: 30px;
              text-align: center;
              &:hover {
                cursor: pointer;
                background: #F4F5F7;
                .videoDanmuSetting {
                  display: block;
                }
                .btnTip {
                  transition: .2s .4s;
                  bottom: 29px;
                  opacity: 1;
                  visibility: visible;
                }
              }
              i {
                vertical-align: baseline;
                font-size: 16px;
              }
              .videoDanmuSetting {
                position: absolute;
                bottom: 27px;
                left: -111px;
                padding-left: 22px;
                box-sizing: border-box;
                width: 222px;
                height: 184px;
                text-align: left;
                background: #fff;
                border: 1px solid #E2E2E2;
                border-radius: 4px;
                box-shadow:  0 0 2px #E2E2E2;
                display: none;
                cursor: default;
                .danmuOpacity {
                  margin-top: 28px;
                  line-height: 1;
                  color: #222;
                  .danmuOpacityBar {
                    margin-top: 3px;
                    margin-right: 19px;
                    width: 120px;
                    height: 6px;
                    background: #E5E9EF;
                    border-radius: 2px;
                    cursor: pointer;
                    .curOpacity {
                      position: relative;
                      width: 30%;
                      height: 100%;
                      background: #00A1D6;
                      border-radius: 2px;
                      &::after {
                        position: absolute;
                        top: -4px;
                        right: -7px;
                        content: '';
                        width: 14px;
                        height: 14px;
                        border-radius: 50%;
                        background: #fff;
                        box-shadow: 0 0 2px #00A1D6;
                      }
                    }
                  }
                }
                .videoDanmuRuler {
                  margin-top: 16px;
                  line-height: 16px;
                  input {
                    margin-left: 5px;
                    vertical-align: middle;
                  }
                }
                ul {
                  margin-top: 19px;
                  li {
                    float: left;
                    margin-right: 18px;
                    a {
                      display: inline-block;
                      width: 48px;
                      height: 63px;
                      text-align: center;
                      line-height: 1;
                      span {
                        display: block;
                        margin-bottom: 5px;
                        width: 48px;
                        height: 48px;
                        background: #99A2AA;
                        border-radius: 3px;
                      }
                    }
                  }
                }
              }
              .btnTip {
                position: absolute;
                bottom: 20px;
                left: -17px;
                width: 64px;
                height: 24px;
                color: #fff;
                line-height: 24px;
                text-align: center;
                background: rgba(0, 0, 0, .7);
                border-radius: 4px;
                visibility: hidden;
                opacity: 0;
              }
            }
            .videoLoop {
              position: relative;
              width: 30px;
              text-align: center;
              &:hover {
                cursor: pointer;
                background: #F4F5F7;
                .btnTip {
                  visibility: visible;
                  transition: .2s .4s;
                  bottom: 32px;
                  opacity: 1;
                }
              }
              .btnTip {
                position: absolute;
                bottom: 20px;
                left: -29px;
                width: 88px;
                height: 24px;
                color: #fff;
                line-height: 24px;
                text-align: center;
                background: rgba(0, 0, 0, .7);
                border-radius: 4px;
                visibility: hidden;
                opacity: 0;
              }
            }
            .videoWildScreen {
              position: relative;
              width: 30px;
              text-align: center;
              &:hover {
                cursor: pointer;
                background: #F4F5F7;
                .btnTip {
                  transition: .2s .4s;
                  bottom: 32px;
                  opacity: 1;
                  visibility: visible;
                }
              }
              i {
                font-size: 18px;
              }
              .btnTip {
                position: absolute;
                bottom: 20px;
                left: -17px;
                width: 64px;
                height: 24px;
                color: #fff;
                line-height: 24px;
                text-align: center;
                background: rgba(0, 0, 0, .7);
                border-radius: 4px;
                visibility: hidden;
                opacity: 0;
              }
            }
            .videoFullScreen {
              position: relative;
              width: 30px;
              text-align: center;
              &:hover {
                cursor: pointer;
                background: #F4F5F7;
                .btnTip {
                  transition: .2s .4s;
                  bottom: 32px;
                  opacity: 1;
                  visibility: visible;
                }
              }
              .btnTip {
                position: absolute;
                bottom: 20px;
                right: 0;
                width: 64px;
                height: 24px;
                color: #fff;
                line-height: 24px;
                text-align: center;
                background: rgba(0, 0, 0, .7);
                border-radius: 4px;
                visibility: hidden;
                opacity: 0;
              }
            }
          }
        }
        .danmuSection {
          width: 100%;
          height: 36px;
          line-height: 36px;
          display: flex;
          i {
            color: #6D757A;
          }
          .danmuSendSetting {
            width: 40px;
            line-height: 38px;
            text-align: center;
            background: #fff;
            cursor: pointer;
            transition: .2s;
            i {
              font-size: 14px;
            }
            &:hover {
              background: #F4F5F7;
            }
          }
          .danmuColor {
            box-sizing: border-box;
            padding-top: 2px;
            width: 40px;
            height: 36px;
            text-align: center;
            background: #fff;
            cursor: pointer;
            transition: .2s;
            &:hover {
              background: #F4F5F7;
            }
            i {
              font-size: 16px;
            }
          }
          .danmuInput {
            position: relative;
            flex: 1;
            input {
              box-sizing: border-box;
              padding-left: 10px;
              width: 100%;
              height: 100%;
              font-size: 12px;
              background: linear-gradient(#f5f5f5,#fff);
              border-left: 1px solid #E2E2E2;
            }
            .danmuStandard {
              position: absolute;
              top: 0;
              right: 80px;
              color: #99A2AA;
            }
            .sendDanmu {
              box-sizing: border-box;
              position: absolute;
              top: 3px;
              right: 5px;
              padding-left: 18px;
              width: 66px;
              height: 30px;
              line-height: 30px;
              color: #fff;
              background: #00A1D6;
              border-radius: 4px;
            }
          }
        }
      }
    }
    .videoShare {
      position: relative;
      margin-left: -1px;
      padding-left: 1px;
      width: 1162px;
      box-sizing: border-box;
      height: 82px;
      background: #fff;
      border: 1px solid #E5E9EF;
      border-radius: 4px;
      .shareLink {
        position: relative;
        width: 316px;
        height: 80px;
        z-index: 10;
        &:hover {
          margin-right: -1px;
          border-right: 1px solid #E5E9EF;
          border-bottom: 1px solid #fff;
          box-shadow: 0 2px 4px #E5E9EF;
          .shareTg {
            height: 211px;
            opacity: 1;
            .shareVideoURL, .shareErweima {
              height: 144px;
            }
          }
        }
        .shareBtn {
          position: relative;
          box-sizing: border-box;
          display: inline-block;
          padding-top: 21px;
          padding-left: 19px;
          width: 70px;
          height: 100%;
          color: #000;
          font-size: 18px;
          &::after {
            position: absolute;
            top: 37px;
            right: 0;
            content: '';
            border-width: 4px 5px 0;
            border-color: #000 transparent transparent;
            border-style: solid;
          }
          span {
            position: absolute;
            top: 48px;
            left: 12px;
            font-size: 8px;
            width: 50px;
            line-height: 1;
            color: #6D757A;
            text-align: center;
          }
        }
        .shareTo {
          height: 100%;
          i {
            font-size: 24px;
          }
          li {
            float: left;
            box-sizing: border-box;
            padding-top: 21px;
            height: 80px;
            &:first-child {
              margin-left: 8px;
              &:hover {
                a {
                  border-color: #FF6998;
                  color: #FF6998;
                };
              }
            }
            &:nth-child(2) {
              margin-left: 12px;
              &:hover {
                a {
                  border-color: #FF6998;
                  color: #FF6998;
                };
              }
            }
            &:nth-child(3) {
              margin-left: 11px;
              &:hover {
                a {
                  border-color: #D0AC03;
                  color: #D0AC03;
                };
              }
            }
            &:nth-child(4) {
              margin-left: 11px;
              &:hover {
                a {
                  border-color: #04A9C2;
                  color: #04A9C2;
                };
              }
            }
            &:last-child {
              margin-left: 11px;
              &:hover {
                a {
                  border-color: #04A9C2;
                  color: #04A9C2;
                };
              }
            }
            a {
              display: inline-block;
              box-sizing: border-box;
              width: 36px;
              height: 36px;
              color: #1F272C;
              line-height: 36px;
              text-align: center;
              border-radius: 50%;
              border: 1px solid #000;
            }
          }
        }
        .shareTg {
          position: absolute;
          top: 81px;
          left: -1px;
          box-sizing: border-box;
          width: 612px;
          height: 0;
          background: #fff;
          border: 1px solid #E5E9EF;
          border-top: none;
          box-shadow: 0 4px 4px #E5E9EF;
          border-radius: 0 0 4px 4px;
          opacity: 0;
          transition: .3s;
          .shareVideoURL {
            box-sizing: border-box;
            margin-top: 26px;
            margin-left: 19px;
            padding-top: 13px;
            width: 368px;
            height: 0;
            border-right: 1px solid #E5E9EF;
            overflow: hidden;
            transition: .3s;
            p {
              font-size: 18px;
              color: #444;
            }
            .videoFullPath {
              margin-top: 21px;
              line-height: 20px;
              font-size: 13px;
              input {
                margin-left: 20px;
                box-sizing: border-box;
                width: 209px;
                height: 20px;
                border: 1px solid #CCD0D7;
                border-right: none;
              }
              a {
                display: inline-block;
                width: 40px;
                height: 20px;
                font-size: 10px;
                color: #FFF;
                line-height: 20px;
                text-align: center;
                background: #00A1D6;
              }
            }
            .videoIFrame {
              margin-top: 16px;
              line-height: 20px;
              font-size: 13px;
              input {
                margin-left: 20px;
                box-sizing: border-box;
                width: 209px;
                height: 20px;
                border: 1px solid #CCD0D7;
                border-right: none;
              }
              a {
                display: inline-block;
                width: 40px;
                height: 20px;
                font-size: 10px;
                color: #FFF;
                line-height: 20px;
                text-align: center;
                background: #00A1D6;
              }
            }
          }
          .shareErweima {
            margin-top: 32px;
            margin-left: 41px;
            height: 0;
            overflow: hidden;
            transition: .3s;
            p {
              font-size: 16px;
              color: #444;
            }
            img {
              margin-top: 17px;
              margin-left: 6px;
            }
          }
        }
      }
      .videoActions {
        padding-right: 16px;
        margin-top: 30px;
        margin-left: 15px;
        height: 20px;
        border: 1px solid #CCC;
        border-top: none;
        border-bottom: none;
        li {
          float: left;
          margin-top: -30px;
          > a {
            box-sizing: border-box;
            display: inline-block;
            height: 80px;
            text-align: center;
            span {
              display: inline-block;
              text-align: center;
            }
          }
          &:first-child {
            margin-left: 5px;
            a {
              position: relative;
              padding-top: 26px;
              padding-left: 80px;
              width: 120px;
              font-size: 16px;
              line-height: 1;
              color: #000;
              .startAnimate {
                position: absolute;
                top: 0;
                left: 0;
                width: 80px;
                height: 80px;
                background: url('../images/startanimate.png') no-repeat;
              }
              .itemNum {
                position: absolute;
                right: 0;
                bottom: 20px;
                width: 40px;
                color: #6D757A;
                font-size: 10px;
              }
            }
          }
          &:nth-child(2) {
            a {
              position: relative;
              padding-top: 26px;
              padding-left: 75px;
              width: 117px;
              font-size: 16px;
              line-height: 1;
              color: #000;
              .startAnimate {
                position: absolute;
                top: -11px;
                left: 4px;
                width: 80px;
                height: 80px;
                background: url('../images/coinanim.png') no-repeat;
              }
              .itemNum {
                position: absolute;
                right: 0;
                bottom: 20px;
                width: 42px;
                color: #6D757A;
                font-size: 10px;
              }
            }
          }
          &:nth-child(3) {
            a {
              position: relative;
              padding-top: 26px;
              padding-left: 85px;
              width: 147px;
              font-size: 16px;
              line-height: 1;
              color: #000;
              .startAnimate {
                position: absolute;
                top: 3px;
                left: 8px;
                width: 80px;
                height: 80px;
                background: url('../images/waitanim.png') no-repeat;
              }
              .itemNum {
                position: absolute;
                right: 0;
                bottom: 20px;
                width: 62px;
                color: #6D757A;
                font-size: 10px;
              }
            }
          }
          &:last-child {
            position: relative;
            margin-left: 20px;
            width: 137px;
            height: 80px;
            z-index: 1;
            &:hover {
              margin-left: 19px;
              margin-right: -11px;
              padding-right: 10px;
              border: 1px solid #E5E9EF;
              border-top: none;
              border-bottom-color: #fff;
              box-shadow: 0 2px 4px rgba(0,0,0,.16);
              border-color: #fff;
              .shareApp {
                height: 182px;
                opacity: 1;
              }
            }
            .shareApp {
              position: relative;
              top: 1px;
              left: -2px;
              box-sizing: border-box;
              width: 352px;
              height: 0;
              background: #fff;
              border: 1px solid #E5E9EF;
              border-top: none;
              border-radius: 0 0 4px 4px;
              box-shadow: 0 2px 4px rgba(0,0,0,.16);
              opacity: 0;
              overflow: hidden;
              transition: .3s;
              .topCon {
                box-sizing: border-box;
                padding: 20px;
                height: 100px;
                transition: .3s;
                img {
                  width: 100px;
                  height: 100px;
                }
                span {
                  display: inline-block;
                  margin-top: 1px;
                  margin-left: 7px;
                  width: 200px;
                  font-size: 16px;
                  line-height: 21px;
                  vertical-align: top;
                }
              }
              p {
                position: absolute;
                left: 10px;
                top: 143px;
                width: 100%;
                font-size: 14px;
                text-align: center;
                line-height: 1;
                a {
                  color: #00A1D6;
                }
              }
            }
            > a {
              position: relative;
              padding-top: 26px;
              padding-left: 73px;
              width: 137px;
              font-size: 16px;
              line-height: 1;
              color: #000;
              .startAnimate {
                position: absolute;
                top: 1px;
                left: -1px;
                width: 80px;
                height: 80px;
                background: url('../images/anim-app.png') no-repeat;
              }
              .itemNum {
                position: absolute;
                right: 0;
                bottom: 20px;
                width: 64px;
                color: #6D757A;
                font-size: 10px;
              }
            }
          }
        }
      }
      .appDownload {
        position: relative;
        width: 130px;
        height: 80px;
        line-height: 80px;
        cursor: pointer;
        &:hover {
          box-shadow: 0 2px 4px rgba(0,0,0,.16);
          margin-left: -1px;
          border: 1px solid #E5E9EF;
          border-top: none;
          border-bottom-color: #fff;
          .appVideo {
            height: 150px;
            opacity: 1;
          }
        }
        i {
          margin-left: 16px;
          font-size: 24px;
          color: #6D777C;
        }
        > span {
          display: inline-block;
          margin-left: 9px;
          color: #222;
          font-size: 14px;
          vertical-align: top;
        }
        .appVideo {
          box-sizing: border-box;
          position: absolute;
          top: 81px;
          right: -1px;
          width: 452px;
          height: 0;
          background: #fff;
          border: 1px solid #E5E9EF;
          border-top: none;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,.16);
          cursor: default;
          overflow: hidden;
          opacity: 0;
          transition: .3s;
          img {
            margin-top: 24px;
            margin-left: 24px;
            width: 100px;
            height: 100px;
          }
          span {
            display: inline-block;
            margin-top: 25px;
            margin-right: 46px;
            margin-bottom: 25px;
            width: 264px;
            font-size: 14px;
            line-height: 19px;
          }
          p {
            margin-left: 16px;
            color: #6D757A;
            font-size: 14px;
            line-height: 19px;
            a {
              color: #00A1D6;
            }
          }
        }
      }
    }
  }
  .videoBottomInfo {
    .videoTag {
      padding-bottom: 29px;
      width: 870px;
      border-bottom: 1px solid #E5E9EF;
      ul {
        margin-top: 30px;
        li {
          float: left;
          margin-right: 10px;
          padding: 0 10px;
          color: #6D757A;
          height: 22px;
          line-height: 22px;
          border: 1px solid #E5E9EF;
          border-radius: 12px;
          cursor: pointer;
          transition: .3s;
          &:hover {
            border-color: #00A1D6;
            color: #00A1D6;
            i {
              color: #00A1D6;
            }
          }
          &:last-child {
            padding: 0;
            width: 23px;
            height: 23px;
            text-align: center;
            line-height: 25px;
            border-radius: 50%;
          }
          i {
            color: #9BA3AB;
            font-size: 14px;
            vertical-align: middle;
            transition: .3s;
          }
        }
      }
      div {
        margin-top: 14px;
        span {
          color: #6D757A;
          transition: .3s;
          cursor: pointer;
          &:hover {
            color: #00A1D6;
          }
          &:nth-child(2) {
            margin: 4px 11px 0;
            width: 1px;
            height: 11px;
            background: #EEEFF4;
            cursor: default;
          }
        }
      }
    }
    .videoDesc {
      padding-top: 28px;
      padding-bottom: 30px;
      width: 870px;
      border-bottom: 1px solid #E5E9EF;
      p {
        span {
          margin-left: 1px;
          margin-right: 4px;
          display: inline-block;
          margin-top: -2px;
          width: 12px;
          height: 12px;
          background: url('../images/icons.png') no-repeat -794px -538px;
          vertical-align: middle;
        }
      }
      span {
        margin-top: 19px;
        display: inline-block;
        color: #6D757A;
        line-height: 20px;
      }
    }
    .videoBotAD{
      margin-top: 20px;
      position: relative;
      width: 870px;
      height: 72px;
      img {
        width: 100%;
        border-radius: 6px;
      }
      span {
        position: absolute;
        left: 2px;
        bottom: 2px;
        width: 28px;
        height: 16px;
        background: url('../images/ad.png') no-repeat -2px -2px;
      }
    }
    .videoTuijian {
      position: relative;
      box-sizing: border-box;
      margin-top: 83px;
      padding-bottom: 7px;
      width: 870px;
      height: 150px;
      &:hover {
        a {
          opacity: 1;
        }
      }
      p {
        position: absolute;
        top: -54px;
        left: 0;
        font-size: 18px;
        margin-bottom: 30px;
      }
      a {
        position: absolute;
        top: 21px;
        width: 30px;
        height: 54px;
        text-align: center;
        background: rgba(0, 0, 0, .7);
        opacity: 0;
        transition: .3s;
        z-index: 1;
        i {
          margin-top: 18px;
          display: inline-block;
          color: #fff;
          transform: scaleY(2)
        }
      }
      .preList{
        left: 0;
        border-radius: 0 4px 4px 0;
      }
      .nextList{
        right: 6px;
        border-radius: 4px 0 0 4px ;
      }
    }
    .videoComment {
      margin-top: 31px;
      padding-top: 29px;
      width: 870px;
      border-top: 1px solid #E5E9EF;
      > p {
        font-size: 18px;
        margin-bottom: 21px;
        a {
          font-size: 12px;
          line-height: 26px;
          color: #99A2AA;
          &:hover {
            color: #00A1D6;
          }
        }
      }
      .comtentIndex {
        font-family: Microsoft YaHei,Arial,Helvetica,sans-serif;
        margin-bottom: 24px;
        border-bottom: 1px solid #E5E9EF;
        .commentType {
          li {
            float: left;
            margin-right: 32px;
            margin-bottom: -1px;
            a {
              display: inline-block;
              height: 36px;
              font-size: 14px;
              font-weight: bold;
              line-height: 36px;
              color: #222;
              &:hover {
                color: #00A1D6;
              }
            }
          }
          .active {
            position: relative;
            border-bottom: 1px solid #00A1D6;
            a {
              color: #00A1D6;
            }
            &::after {
              position: absolute;
              bottom: 0;
              left: 25px;
              content: '';
              width: 0;
              height: 0;
              border-width: 0px 3px 3px;
              border-color: transparent transparent #00A1D6;
              border-style: solid;
            }
          }
        }
        .commentList {
          margin-top: 12px;
          padding-right: 4px;
          li {
            float: left;
            margin-right: 8px;
            line-height: 1;
            &:first-child {
              margin-right: 14px;
            }
            &:last-child {
              margin: 0;
            }
            a {
              transition: .3s;
              &:hover {
                color: #00A1D6;
              }
            }
          }
          .active {
            a {
              color: #00A1D6;
              font-weight: bold;
            }
          }
        }
      }
      .comments {
        margin-top: 60px;
        li {
          margin-bottom: 2px;
          .commentContent {
            display: flex;
            .userInfo {
              margin-top: 24px;
              padding-left: 5px;
              display: flex;
              flex-direction: column;
              img {
                width: 48px;
                height: 48px;
                border-radius: 50%;
              }
              .followBtn {
                margin-top: 15px;
                display: inline-block;
                width: 48px;
                height: 24px;
                color: #fff;
                line-height: 26px;
                text-align: center;
                background: #00A1D6;
                border-radius: 4px;
              }
            }
            .commentDetails {
              margin-left: 32px;
              padding-top: 25px;
              flex: 1;
              border-top: 1px solid #E5E9EF;
              .userId {
                font-size: 12px;
                color: #6D757A;
                font-weight: bold;
              }
              .bigbig {
                color: #FB7299;
              }
              .commentText {
                margin-top: 7px;
                width: 785px;
                font-size: 14px;
                line-height: 20px;
              }
              .commentActions {
                position: relative;
                font-family: Microsoft YaHei,Arial,Helvetica,sans-serif;
                margin-top: 6px;
                color: #99A2AA;
                span {
                  display: inline-block;
                  i {
                    font-size: 16px;
                    margin-right: 3px;
                  }
                }
                .mobile {
                  margin-left: 16px;
                  a {
                    color: #99A2AA;
                    transition: .3s;
                    &:hover {
                      color: #00A1D6;
                    }
                  }
                }
                .comTime {
                  margin-left: 16px;
                }
                .skr, .noskr {
                  margin-left: 16px;
                  cursor: pointer;
                  &:hover {
                    color: #00A1D6;
                  }
                }
                .interaction {
                  position: absolute;
                  left: 350px;
                  top: 1px;
                  margin-left: 16px;
                  cursor: pointer;
                  &:hover {
                    width: 34px;
                    height: 26px;
                    left: 345px;
                    top: -4px;
                    line-height: 26px;
                    text-align: center;
                    color: #00A1D6;
                    background: #E5E9EF;
                    border-radius: 3px;
                  }
                }
              }
              .userInteraction {
                font-family: Microsoft YaHei,Arial,Helvetica,sans-serif;
                li {
                  margin-bottom: 10px;
                  .replyHead {
                    padding-top: 20px;
                    img {
                      width: 24px;
                      height: 24px;
                      border-radius: 50%;
                    }
                  }
                  .replyComment {
                    padding-top: 15px;
                    width: 750px;
                    .replyText {
                      font-size: 14px;
                      a {
                        display: inline-block;
                        padding-right: 42px;
                        vertical-align: middle;
                      }
                    }
                    .replyActions {
                      margin-top: 10px;
                      color: #99A2AA;
                      .skr {
                        margin-left: 16px;
                        i {
                          margin-right: 3px;
                        }
                      }
                      .interaction {
                        margin-left: 21px;
                      }
                    }
                  }
                }
                .replyLength {
                  margin-top: 13px;
                  color: #6D757A;
                  span {
                    font-weight: bold;
                  }
                  a {
                    display: inline-block;
                    margin-left: 7px;
                    color:  #00A1D6;
                  }
                }
              }
            }
          }
        }
      }
      .commentCut {
        position: relative;
        margin-top: 7px;
        margin-right: 17px;
        width: 785px;
        line-height: 26px;
        float: right;
        color: #000;
        font-size: 12px;
        text-align: center;
        a {
          display: inline-block;
          width: 60px;
          height: 26px;
          color: #00A1D6;
          &:hover {
            background: #E5E9EF;
            border-radius: 3px;
          }
        }
        &::before {
          position: absolute;
          top: 13px;
          left: -17px;
          content: '';
          width: 312px;
          height: 1px;
          background: #E5E9EF;
        }
        &::after {
          position: absolute;
          top: 13px;
          right: -17px;
          content: '';
          width: 312px;
          height: 1px;
          background: #E5E9EF;
        }
      }
    }
  }
}
</style>
