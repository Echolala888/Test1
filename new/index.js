!function(){function t(t){var a=t.target;popup=L.popup().setLatLng(a.getLatLng
!()).setContent(a.myJsonData).openOn(o)}var o=new L.Map("map",{center:new
!L.LatLng(22.9715545,113.66263407130671),zoom:9}),a=(new L.tileLayer("http://{
!s}.tile.stamen.com/toner/{z}/{x}/{y}.png",{minZoom:8,maxZoom:18,attribution:'
!&copy; 病例数据：<a href="http://wjw.gz.gov.cn/ztzl/xxfyyqfk/yqtb/">广州市卫健委</a>，<a
!href="http://wjj.foshan.gov.cn/zwgk/gsgg/tzgg/">佛山市卫健委</a>，<a
!href="http://wjw.sz.gov.cn/yqxx/index_1.htm">深圳市卫健委</a>；底图设计：<a
!href="https://stamen.com/">Stamen Design</a>；地图数据：<a
!href="https://www.openstreetmap.org/">OpenStreetMap</a>'}),new L.TileLayer("h
!ttps://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}@2x?access_
!token=pk.eyJ1IjoiZG9tb3JpdHoiLCJhIjoiY2o0OHZuY3MwMGo1cTMybGM4MTFrM2dxbCJ9.yCQ
!e43DMRqobazKewlhi9w",{attribution:'病例数据：<a
!href="http://wjw.gz.gov.cn/ztzl/xxfyyqfk/yqtb/">广州市卫健委</a>，<a
!href="http://wjj.foshan.gov.cn/zwgk/gsgg/tzgg/">佛山市卫健委</a>，<a
!href="http://wjw.sz.gov.cn/yqxx/index_1.htm">深圳市卫健委</a>；底图设计：<a
!href="https://www.mapbox.com/">Mapbox</a>；地图数据：<a href="https://www.openstree
!tmap.org/">OpenStreetMap</a>',tileSize:512,zoomOffset:-1,minZoom:8,maxZoom:18
!}));o.addLayer(a),L.control.locate({position:"topleft",strings:{title:"定位到我的位
!置",enableHighAccuracy:0}}).addTo(o),data='[["南海区大沥镇黄岐万科四季花城", 0, 113.178466,
!23.155695], ["锦绣花园", 0, 114.185903, 22.648931], ["顺德区乐从镇御庭沣酒店", 0, 113.08391,
!22.96052], ["云埔街道东荟城", 0, 113.498134, 23.161589], ["中央悦城", 0, 114.237219,
!22.735127], ["夏港街蓝玉五街", 0, 113.522087, 23.059483], ["福港路西阳光城市", 0,
!114.065647, 22.525902], ["丽山路西湖林语", 0, 113.960616, 22.595874], ["人民街道大新路小新街",
!0, 113.256292, 23.119118], ["新塘镇大墩村", 0, 113.663125, 23.128152],
!["薯田埔村福南路华业苑", 0, 113.86994, 22.782605], ["南海区西樵镇西岸社区碧桂园", 0, 112.834727,
!22.891183], ["荔城街中海城市广场", 0, 113.819963, 23.288766], ["禅城区石湾镇街道怡景丽苑", 1,
!113.132144, 22.988824], ["龙凤街道凤凰二街", 0, 113.253452, 23.094618],
!["南海区里水镇金沙洲恒大御景半岛", 0, 113.201256, 23.181794], ["吉信街如家酒店", 1, 114.111849,
!22.603747], ["金碧世纪花园", 0, 113.423787, 23.116979], ["鹤龙街联边彭西一街", 0,
!113.344671, 23.298607], ["棠下街枫叶路棠雅苑", 0, 113.362289, 23.137245],
!["笔架山公园员工宿舍", 0, 114.075746, 22.565579], ["元邦航空家园", 0, 113.253701,
!23.207609], ["石围塘街道兴东路", 0, 113.20983, 23.109308], ["三水区西南街道博雅滨江", 0,
!112.870889, 23.164416], ["新安街道甲岸村", 0, 113.898766, 22.563345], ["宏发世纪城", 0,
!113.94274, 22.682916], ["禅城区张槎街道保利香槟花园", 0, 113.07678, 23.035329],
!["华乐街华侨新村光明路", 0, 113.2858, 23.14039], ["碧华庭居翠园", 0, 114.045059, 22.566574],
!["沙嘴村一坊", 0, 114.033111, 22.520886], ["城郊街新雍丽洒店", 0, 113.490399, 22.813507],
!["海景嘉途酒店", 1, 114.020331, 22.538489], ["南村镇雅居乐北苑", 0, 113.38211, 23.021082],
!["云埔街道万科金色梦想", 1, 113.52431, 23.166082], ["民治街道丰泽湖山庄", 0, 114.049672,
!22.597047], ["福保街道明月花园", 0, 114.050087, 22.527184], ["布澜路尚峰花园", 0,
!114.133094, 22.626492], ["诺德假日花园", 1, 113.898252, 22.512947],
!["沙河街道华侨城东组团小区", 0, 113.986258, 22.539237], ["佳兆业前海广场", 0, 113.881413,
!22.497527], ["增江街道碧桂园", 0, 113.799261, 23.289227], ["南山街道学府花园", 0,
!113.921373, 22.528975], ["雍景轩赏湖阁", 0, 113.922612, 22.497747], ["上沙东村八巷", 0,
!114.027428, 22.523069], ["海珠广场侨光路万艺广场", 0, 113.261909, 23.11843], ["石围塘街凯粤湾",
!0, 113.209904, 23.117584], ["新世界伟瑞酒店", 0, 114.047962, 22.568599], ["大族河山", 0,
!114.152191, 22.615538], ["增江街道碧桂园荔园", 1, 113.8404, 23.278678], ["钟村街道祈福缤纷汇",
!1, 113.327366, 22.97172], ["新塘镇富丽园二街", 0, 113.604489, 23.13009], ["人和镇人和商业街",
!0, 113.287826, 23.344829], ["江高镇大田村海口直街", 0, 113.201102, 23.273362], ["翠华花园",
!0, 114.127305, 22.558251], ["西丽阳光工业区", 0, 113.929071, 22.63744], ["梅林街道兰江山第",
!0, 114.00858, 22.567736], ["南海区桂城街道保利叶公馆", 0, 113.151543, 23.049512],
!["布吉新三村", 0, 114.113732, 22.610228], ["黄花岗街东风东路", 0, 113.290067, 23.133929],
!["香山美树苑", 0, 114.009522, 22.543244], ["黄石街白云尚城", 0, 113.279485, 23.21498],
!["前海铂寓", 0, 113.857313, 22.558052], ["上步中路盛夏公寓", 0, 114.091037, 22.550824],
!["大冲新城花园", 0, 113.889831, 22.56877], ["龙城街道万象天成", 0, 114.249536, 22.72669],
!["东方花园", 1, 113.974143, 22.536301], ["鹤龙街道乐得花园", 0, 113.269728, 23.22525],
!["龙岗街道宝能悦澜山", 0, 114.246436, 22.73641], ["新雅街道合和新城锦华", 0, 113.249871,
!23.374052], ["阳光华艺大厦B座", 0, 113.923638, 22.527929], ["钟村街道未来域", 1,
!113.329532, 22.970584], ["新塘链太平洋花园", 0, 113.572476, 23.120386], ["黄阁镇璧珑湾", 0,
!113.524987, 22.803359], ["蛇口街道豪方泽公寓", 0, 113.922339, 22.491137], ["石井街道玖兴公寓",
!0, 113.231125, 23.184682], ["三水区云东海街道雅湖半岛", 1, 112.904408, 23.173722],
!["南山街道友邻公寓", 0, 113.924877, 22.534382], ["南海区桂城街道景裕豪园", 0, 113.132004,
!23.068565], ["天园街道新景苑小区", 0, 113.364163, 23.126688], ["蛇口街道东角头港湾花园", 0,
!113.929192, 22.489966], ["石井街道石潭路", 1, 113.233394, 23.206645], ["石岩街道伊隆达工业园",
!0, 114.065326, 22.678888], ["赤岗街道纵横公寓", 0, 113.325158, 23.098437],
!["南石头街道保利花园", 0, 113.268467, 23.073685], ["农林下路", 0, 113.292387, 23.131763],
!["蛇口街道海境界", 0, 113.930323, 22.494863], ["顺德区北滘镇深业城", 0, 113.212808,
!22.922969], ["水荫路", 0, 113.305125, 23.148489], ["观湖街道招商观园", 0, 114.056795,
!22.693092], ["金山谷花园", 0, 113.338577, 22.973154], ["坪山街道易林源酒店", 0, 114.341335,
!22.693966], ["明玉路11号花样年·花郡", 0, 113.877378, 22.567411], ["花城街道长岗村", 0,
!113.231951, 23.440148], ["海鹰大厦", 0, 114.132353, 22.584037], ["南海区桂城街道怡翠馨园",
!0, 113.164937, 23.029865], ["海景花园", 0, 113.361139, 23.125338], ["和磡村和磡路3号",
!1, 114.056407, 22.625738], ["东环街甘棠村大社坊中心街", 0, 113.372476, 22.960392],
!["江海街道大塘东边街", 0, 113.418864, 23.111714], ["合和新城", 1, 113.249871, 23.374052],
!["泰华商业城", 0, 113.89913, 22.571126], ["福滨新村", 0, 114.073624, 22.533131],
!["云城街道永泰中街", 0, 113.260639, 23.188756], ["观湖街道懿花园", 0, 114.058747,
!22.695746], ["沙园街昌岗中路", 0, 113.266382, 23.088569], ["棠下街道锦顺酒店", 1, 113.36957,
!23.13399], ["香蜜新村东区", 0, 114.037335, 22.549507], ["棠下街华景新城陶然庭苑", 0,
!113.355653, 23.144828], ["赤岗街石榴岗路", 0, 113.331281, 23.090378], ["风阳街道和平家园",
!0, 113.30897, 23.089408], ["南海区里水镇维也纳酒店", 0, 113.159103, 23.201482],
!["金花街道龙津中路", 1, 113.239822, 23.126332], ["光塔街解放中路", 0, 113.256912,
!23.124403], ["金地上塘道1期", 0, 114.016938, 22.63662], ["益田花园", 0, 114.051648,
!22.517949], ["中洲万豪酒店", 0, 113.928369, 22.520528], ["华策中心城", 0, 114.23916,
!22.704029], ["民治街道锦绣江南", 0, 114.02336, 22.639176], ["莲花北村", 0, 114.043509,
!22.560595], ["华林街道文昌南路", 0, 113.239053, 23.118581], ["顺德区乐从镇保利拉菲", 0,
!113.075633, 22.95237], ["南海区西樵镇三胜颐景园", 0, 112.98196, 22.94087], ["香格里拉大酒店",
!1, 114.11292, 22.53642], ["南湖高尔夫公寓", 0, 113.326602, 23.216648],
!["南海区狮山镇罗村力迅城筑", 0, 113.04537, 23.076354], ["桂芳园八期", 0, 114.133889,
!22.611522], ["南石头街鸡春岗新街", 0, 113.259958, 23.080022], ["昌岗街道金盛大厦", 0,
!113.269953, 23.092817], ["桑泰丹华府三期", 0, 113.960827, 22.590619], ["禅城区南庄镇万科城",
!0, 112.994154, 22.973419], ["棠景街国强北街", 0, 113.245703, 23.185808],
!["观澜街道华盛峰荟名庭2期", 0, 114.037683, 22.71469], ["棠景街道岗贝路贝丽花园", 0, 113.251485,
!23.182183], ["秀丽山庄", 0, 114.103002, 22.614237], ["回龙埔万科翰邻城", 0, 114.226943,
!22.733613], ["民治街道金地梅陇镇", 0, 114.027449, 22.633373], ["大龙街道东湖洲花园", 1,
!113.412795, 22.92949], ["中海康城", 0, 114.201948, 22.710192], ["龙凤街道江南乐居苑", 1,
!113.255679, 23.098161], ["鹤龙街道黄边安坏里", 0, 113.260365, 23.214913],
!["竹子林越海家园依山阁", 0, 114.001815, 22.538009], ["南国丽园", 0, 114.025104, 22.656556],
!["榄核镇蔡源东街", 0, 113.337582, 22.841024], ["中兴路88号汉庭酒店", 0, 114.121516,
!22.55217], ["禅城区祖庙街道同华西二路", 0, 113.104254, 23.016666], ["新洲四街香江西苑", 0,
!114.036582, 22.526735], ["龙华圆酒店", 0, 114.016605, 22.627728], ["松岗街道碧头社区华都公寓",
!0, 113.807932, 22.785135], ["南海区桂城街道中海千灯湖1号", 0, 113.137945, 23.066697],
!["星河丹堤", 0, 114.052765, 22.596701], ["百仕达花园5期", 0, 114.134396, 22.571693],
!["登良花园", 0, 113.91722, 22.517135], ["南海区怡翠馨园", 0, 113.164937, 23.029865],
!["满京华云著花园", 0, 113.826692, 22.786552], ["观澜湖高尔夫大宅昆士顿区", 0, 113.871968,
!22.783702], ["中骏四季阳光一期", 0, 114.298126, 22.723959], ["西乡我们家公寓（海湾家2号楼）", 0,
!113.854598, 22.582647], ["同景东街", 0, 113.231984, 23.169297], ["棠下荷光广州锦顺洒店", 0,
!113.216594, 23.220075], ["顺德区龙江镇龙山南湖雅园", 0, 113.02451, 22.850455],
!["宝能太古城北区", 0, 113.934207, 22.504581], ["流花街道", 0, 113.257627, 23.151435],
!["江悦酒店", 0, 113.241571, 23.105503], ["福永街道星航华府", 0, 113.827963, 22.646011],
!["莲花街道福莲花园", 0, 114.063002, 22.549416], ["新华街宾馆新村", 0, 113.206178,
!23.384808], ["下梅林河背村", 0, 114.037817, 22.566787], ["棠景街道乐嘉路", 0, 113.2512,
!23.170317], ["蛇口街道四海公寓", 0, 113.926543, 22.497203], ["人民街道回龙路", 0,
!113.262579, 23.11844], ["南航明珠酒店", 0, 113.291432, 23.374658], ["白石洲东四坊", 0,
!113.966006, 22.535133], ["宏发上域", 0, 113.901759, 22.784777], ["猎德街猎德复建房", 0,
!113.336361, 23.118372], ["春华四季园", 0, 114.047588, 22.624186], ["钟村街道祈福新村活力花园",
!1, 113.323318, 22.971458], ["花地街道恒荔湾畔", 1, 113.226771, 23.104226],
!["梅花村街杨箕村金羊花园", 0, 113.303945, 23.129324], ["田贝二路金翠园", 0, 114.123947,
!22.563749], ["冼村街道马场路富力公园", 0, 113.338451, 23.125061], ["石牌街盛南大学羊城苑", 0,
!113.340271, 23.137503], ["星河湾半岛", 0, 113.346958, 23.034837], ["新安街道灵芝新村", 0,
!113.905064, 22.567755], ["前进街盈彩美居御彩轩", 0, 113.412084, 23.117105], ["金花街道芦荻街",
!1, 113.247144, 23.130693], ["福祥街2号1栋", 0, 114.0783, 22.534788], ["黄石街二街", 0,
!113.313803, 23.183881], ["平湖特力商厦", 0, 114.126736, 22.700939], ["市桥街丽柏洒店", 0,
!113.314105, 22.939427], ["名伦花园", 0, 113.32378, 23.013372], ["泥岗西路自来水公司大院", 0,
!114.096578, 22.570102], ["蔚蓝海岸", 0, 113.929124, 22.513123], ["沙湾街道荷景一区", 1,
!113.339305, 22.906097], ["金沙洲保利西子湾", 0, 113.205313, 23.15067], ["东纵路6-3号", 0,
!114.37144, 22.692391], ["南海区九江沙头城区裕和公寓", 0, 113.017908, 22.921637],
!["哈尔滨工业大学（深圳）宿舍楼", 0, 113.962171, 22.590423], ["小港路涌边边东九巷", 0, 113.26467,
!23.110743], ["景云路景云居", 0, 113.271978, 23.166787], ["大龙街尚东尚筑", 0, 113.399849,
!22.939702], ["梅东三路半山御景", 0, 114.065534, 22.575423], ["天河新作", 0, 113.327869,
!23.136637], ["人民街道大新路", 1, 113.253932, 23.117942], ["布吉海心汇福园", 1, 114.10573,
!22.620604], ["观澜街道库坑中心区", 0, 114.030156, 22.738461], ["江夏流铁岗", 0, 113.273499,
!23.214909], ["心谊路", 0, 113.251582, 23.171082], ["三水区云东海街道林海尚都", 0,
!112.878084, 23.185904], ["凤凰街道渔兴路", 0, 113.372401, 23.213611],
!["市桥街道维也纳石桥中心店", 0, 113.314105, 22.939427], ["福华路维也纳酒店", 0, 114.180721,
!22.648045], ["雷公岭村", 1, 113.92206, 22.495054], ["益田花园豪园居", 0, 114.052778,
!22.517403], ["三水区西南街道恒达花园", 0, 112.889304, 23.176391], ["园中花园", 0,
!114.094269, 22.555512], ["新塘镇西洲村豪门公寓", 0, 113.573969, 23.110973], ["松茂·御龙湾",
!0, 113.848407, 22.577002], ["鸿丰大酒店", 0, 114.119269, 22.540652], ["布吉慢城", 0,
!114.123696, 22.626352], ["海华社区自由北小区", 0, 113.878624, 22.571383],
!["钟村街道祈福新村祈福名都", 1, 113.317085, 22.967416], ["同德街道同嘉路", 0, 113.226577,
!23.162859], ["星曜名城B栋", 0, 113.915981, 22.69497], ["三元里街道棠下三官后街", 0,
!113.247259, 23.176279], ["桃源居", 0, 113.934959, 22.693286], ["昌岗街道细岗路", 0,
!113.275303, 23.094202], ["越众小区", 0, 114.006405, 22.539911], ["南海区大沥镇维京酒店", 0,
!113.189223, 23.115508], ["万象新天2期", 0, 113.845706, 22.606423], ["华侨城香山美墅", 0,
!113.964883, 22.553679], ["白石洲新堂花园", 0, 113.966292, 22.55095], ["赤岗街道影城花苑", 1,
!113.336393, 22.972547], ["北京街道起义路", 1, 113.259472, 23.118701],
!["宝安大道与裕安一路交汇处卡罗社区", 0, 113.885403, 22.564635], ["万豪酒店", 0, 114.454379,
!22.57225], ["侨香村", 0, 114.008626, 22.555716], ["沙头角街道上东湾", 0, 114.224538,
!22.552859], ["中海花湾", 0, 113.232554, 23.070972], ["赤岗街新港中路影城花园", 0,
!113.313393, 23.098437], ["新塘链翡翠绿洲", 0, 113.546108, 23.112403], ["华浩源", 0,
!114.120326, 22.625745], ["体育西小区", 0, 113.32167, 23.130674], ["华业玫瑰四季2期", 0,
!114.015744, 22.627724], ["布吉街道百合山庄", 0, 114.115012, 22.598208], ["碧桂园东苑倚翠路",
!0, 113.280895, 22.956318], ["南头街道麒麟花园", 0, 113.927537, 22.549191],
!["秀全街雅宝新城英伦世家", 0, 113.180456, 23.429187], ["瑞宝街道金碧花园", 0, 113.283529,
!23.06769], ["科技园华润城", 0, 113.951058, 22.544815], ["八卦四路意馨居", 0, 114.096097,
!22.567405], ["西环路八约1街龙富花园", 0, 114.103711, 22.609907], ["海淮路与海天一路交界处工地生活区",
!1, 113.939512, 22.527607], ["观湖街道观壹城", 0, 114.063472, 22.718612], ["狮岭镇合成村",
!0, 113.176089, 23.457364], ["大东街道东川路", 0, 113.28184, 23.128328],
!["禅城区石湾镇街道依云上城", 0, 113.145172, 22.99602], ["联和街道岭南山畔", 0, 113.445649,
!23.180117], ["南沙街坦头村槽船一街", 0, 113.57623, 22.809252], ["兴华街沙太南路", 0,
!113.320051, 23.169026], ["大沙街丰乐北路君和名城", 0, 113.449192, 23.110226], ["横岭新村",
!1, 113.878854, 22.782707], ["南海区桂城街道怡翠玫瑰园", 0, 113.14188, 23.013628],
!["新塘镇尚东阳光", 0, 113.568013, 23.105984], ["人民街道万艺维福顿公寓", 0, 113.256574,
!23.117365], ["大望社区新田村", 0, 114.172869, 22.605132], ["锦江之星", 0, 113.24371,
!23.177864], ["禅城区祖庙街道旭辉公元", 0, 113.104512, 23.051126], ["顺德区容桂街道扁滘柏悦湾", 0,
!113.309281, 22.749], ["黄阁镇万科南方公元", 0, 113.494674, 22.810829], ["华强北街道航苑大厦西座",
!0, 114.07761, 22.546811], ["碧桂园天玺湾小区", 0, 113.573042, 22.801333],
!["平湖山厦社区梨头廖", 0, 114.11031, 22.716719], ["合景路", 0, 113.397695, 23.1564],
!["花城街道南航花园", 0, 113.226703, 23.404778], ["海岸明珠", 0, 113.927002, 22.51887],
!["御锦公馆", 1, 114.052784, 22.573604], ["南岗街广海路亨元花园", 0, 113.53371, 23.096845],
!["民治街道翔龙御庭", 0, 114.003119, 22.639345], ["坪山街道万科金域缇香", 0, 114.336382,
!22.71042], ["桥南街道陈涌村", 0, 113.368694, 22.922108], ["新塘街华观路云城米酷", 0,
!113.405385, 23.170251], ["顺德区容桂街道龙光尚街大厦", 0, 113.26392, 22.757333], ["长城大酒店",
!0, 114.101777, 22.552795], ["淘金东路御龙庭", 0, 113.290421, 23.145256],
!["南海区大沥镇盐步隔海市场", 0, 113.164593, 23.100571], ["云埔街万科金色梦想", 0, 113.52431,
!23.166082], ["嶂背步行街", 0, 114.236718, 22.687317], ["云埔街道中海誉城", 0, 113.520817,
!23.164591], ["时代玫瑰园", 0, 113.280653, 23.226741], ["大冲宿禾服务式公寓", 0, 113.948963,
!22.55317], ["中南街道南丫村", 0, 113.219082, 23.05111], ["多宝街道御景壹号", 0, 113.230834,
!23.11391], ["航城街道南航明珠花园", 0, 113.83801, 22.607851], ["南海区桂城街道夏南二大街", 0,
!113.174389, 23.057523], ["顺德区容桂街道海尾晖胜尚轩", 0, 113.272649, 22.75113], ["半岛城邦",
!0, 113.926948, 22.485745], ["西丽街道德意名居", 0, 113.956442, 22.593878], ["新塘镇西洲村",
!0, 113.576482, 23.104362], ["叠翠峰", 0, 113.515703, 22.799515], ["琶洲街道琶洲新村", 0,
!113.376567, 23.102897], ["沙河街道沙河东路世纪村", 0, 113.96261, 22.538954],
!["人和镇清河渡头街", 0, 113.262096, 23.294282], ["兴华街道粤垦路金燕花苑", 0, 113.323752,
!23.160395], ["禅城区石湾镇街道碧桂园城市花园", 0, 113.11875, 22.985721], ["南山街道现代城华庭", 0,
!113.919567, 22.520302], ["车陂街美好居", 0, 113.38795, 23.127743], ["福华新村", 0,
!114.079187, 22.552918], ["荣泰园", 1, 113.817738, 22.727294], ["鹤龙街道联边彭西一街", 1,
!113.344671, 23.298607], ["东海国际公寓", 0, 114.014598, 22.539015], ["华洲街道土华洪福新村",
!1, 113.350177, 23.072302], ["联和街保利林语山庄芳林二街", 0, 113.449243, 23.185614],
!["新港街国际轻纺城双子星城星辰轩", 0, 113.29328, 23.091928], ["福保街道红树福苑", 0, 114.040346,
!22.512353], ["梅滨大厦", 0, 113.320236, 23.182609], ["景田北景龙大厦", 0, 114.040222,
!22.560696], ["人和镇西成路蔚徕酒店", 0, 113.288799, 23.344995], ["南光花园", 0, 113.919136,
!22.521306], ["龙凤街道金沙路富力现代", 0, 113.251225, 23.094184], ["瑞宝街金恒路", 0,
!113.283001, 23.066865], ["龙华街道新华苑2期", 0, 114.031397, 22.657859],
!["车陂街林南文化酒店", 0, 113.39139, 23.126817], ["梅花村街道共和大街", 0, 113.300176,
!23.12406], ["金龙豪庭B栋", 0, 114.141888, 22.619998], ["嘉霖·龙禧（龙禧雅苑）", 0,
!114.240086, 22.742286], ["石楼镇亚运城媒体村", 0, 113.469668, 22.947071], ["冼村街道华明路",
!0, 113.312239, 23.124929], ["新华街道景雅轩小区", 0, 113.200314, 23.400729],
!["顺德区大良街道汇城华庭", 0, 113.248517, 22.824195], ["黄石花园", 0, 113.261818,
!23.207271], ["公明街道振明路南庄合众豪庭后面三巷", 0, 113.902643, 22.776588], ["西海湾花园", 0,
!113.926047, 22.520556], ["顺德区乐从镇沙滘北村聚星里大街", 1, 113.076838, 22.94416],
!["南海区里水镇沙涌环村南路十巷", 1, 113.158891, 23.14763], ["江南中街道南村聚源八巷", 0, 113.263911,
!23.101128], ["景田天健花园", 0, 114.02867, 22.559854], ["莲花街道景蜜村", 0, 114.033108,
!22.558254], ["蓝月湾畔", 0, 113.930674, 22.507008], ["保利西海岸江海花园", 0, 113.20528,
!23.175948], ["招商依山郡", 0, 114.215341, 22.732576], ["南华西街道万科华庭", 0, 113.247905,
!23.105631], ["新陂头村新美一村", 0, 113.937117, 22.806181], ["顺德区北滘镇碧桂西苑听涛居", 0,
!113.26531, 22.946955], ["冼村街道珠光新城御景", 0, 113.337632, 23.121636], ["后海雅园", 0,
!113.931898, 22.496671], ["水均岗", 0, 113.301175, 23.133116], ["自由人花园2期", 0,
!113.219954, 23.346219], ["南山街道阳光棕榈园", 0, 113.907933, 22.529037],
!["登峰街道下塘宝汉直街", 1, 113.269583, 23.143472], ["传麒山", 0, 113.93694, 22.746709],
!["革新路船舶太古酒店", 0, 113.249563, 23.092424], ["南园街道南园路232号工行公寓", 0, 114.082509,
!22.540876], ["顺德区容桂街道振华康富花园", 1, 113.268301, 22.765818], ["合正荣悦府", 0,
!114.12468, 22.555471], ["京溪街道广州大道北", 0, 113.312264, 23.171863], ["南华西街道同福西路",
!0, 113.247055, 23.105188], ["金沙街道金沙洲中海金洲馨园", 1, 113.193921, 23.152932],
!["新安街道35小区安乐花园", 0, 113.893385, 22.584304], ["流花街道武汉宾馆", 0, 113.248684,
!23.148797], ["龙城街道东方沁园", 0, 114.21962, 22.728013], ["梧桐山社区赤水洞村", 0,
!114.187978, 22.593899], ["罗湖村五坊", 0, 114.115626, 22.53879], ["鸿翔花园", 0,
!114.1013, 22.556574], ["琶洲街道保利天悦", 0, 113.375477, 23.103453], ["新华街锦尚蓬莱", 0,
!113.231387, 23.393457], ["顺德区伦教街道中海万锦公馆", 0, 113.200094, 22.865433], ["益田村",
!0, 114.048472, 22.517807], ["顺德区北滘镇美的悦公馆", 0, 113.198692, 22.94187],
!["恒立心海湾花园", 0, 113.885108, 22.495954], ["坂田街道荔园新村", 0, 114.066114,
!22.639547], ["淘金路", 0, 113.284885, 23.14316], ["龙湖街万科幸福誉", 0, 113.535213,
!23.333739], ["华林街道光复中路丽枫酒店长寿东路店", 0, 113.249032, 23.129335], ["车陂街道城市假日园", 1,
!113.398374, 23.12771], ["园岭新村", 0, 114.095406, 22.556889], ["祈福新村祈福名都", 0,
!113.317085, 22.967416], ["深航幸福花园", 0, 113.807152, 22.702201], ["民治街道梅龙苑", 0,
!114.030836, 22.647025], ["龙田街道东城大厦维也纳酒店", 0, 114.11851, 22.55078], ["华创云轩B座",
!0, 114.060733, 22.653724], ["塘尾社区蚝二佳仕泰科技园宿舍", 0, 113.778308, 22.705555],
!["红桂路红桂一街50号环保大院", 0, 114.100482, 22.550166], ["南海区桂城丽雅苑", 0, 113.132926,
!23.050428], ["滨江街道沙地直街", 0, 113.276675, 23.111174], ["龙田街道号金茂园酒店", 0,
!114.350821, 22.703444]]';var e=L.icon.pulse({iconSize:[16,16],color:"red"}),p
!=L.icon.pulse({iconSize:[16,16],fillColor:"purple",color:"purple"});dataObj=J
!SON.parse(data);for(var n=0;n<dataObj.length;++n){if(pt=dataObj[n],0==pt[1])(
!r=L.marker([pt[3],pt[2]],{icon:p,title:pt[0]}).addTo(o)).on("click",t),r.myJs
!onData=pt[0]}for(n=0;n<dataObj.length;++n){var r;if(pt=dataObj[n],1==pt[1])(r
!=L.marker([pt[3],pt[2]],{icon:e,title:pt[0]}).addTo(o)).on("click",t),r.myJso
!nData=pt[0]}}();
