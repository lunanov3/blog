(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{356:function(_,v,a){"use strict";a.r(v);var t=a(0),s=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h3",{attrs:{id:"_1-如何将教务系统信息导入系统-怎么保证这些信息的安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何将教务系统信息导入系统-怎么保证这些信息的安全"}},[_._v("#")]),_._v(" 1.如何将教务系统信息导入系统？怎么保证这些信息的安全？")]),_._v(" "),a("p",[_._v("我们采用Excel模板解析导入, 并使用apache的poi解析工具, 解析上传的数据并存入数据库")]),_._v(" "),a("ul",[a("li",[_._v("数据库存储密码等信息采用sha256加密，保证信息安全。")]),_._v(" "),a("li",[_._v("项目部署的服务器位于校大数据中心，使用内网访问，安全性高。外部人员需要使用内部人员提供的vpn账号才能使用。")]),_._v(" "),a("li",[_._v("云数据库符合企业级安全标准，高效防御 SQL 注入、暴力破解等数据库攻击行为，极大减少用户因数据库攻击带来的业务中断和损失。")]),_._v(" "),a("li",[_._v("每日自动备份数据，确保数据存储安全。")])]),_._v(" "),a("h3",{attrs:{id:"_2-使用人脸识别技术实现人脸点名-进行人脸检测-那么你们使用的人脸检测技术是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用人脸识别技术实现人脸点名-进行人脸检测-那么你们使用的人脸检测技术是什么"}},[_._v("#")]),_._v(" 2. 使用人脸识别技术实现人脸点名，进行人脸检测，那么你们使用的人脸检测技术是什么？")]),_._v(" "),a("ul",[a("li",[_._v("我们使用的是Face++的开放平台")]),_._v(" "),a("li",[_._v("它是一个免费的开放平台,开发者可利用试用的appkey调用所有服务,例如人脸识别服务")]),_._v(" "),a("li",[_._v("传入参数是base64编码后的图片，返回是一串json，接收后解析为java的实体，获取人脸信息")])]),_._v(" "),a("h3",{attrs:{id:"_3-face-流程-怎么调用的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-face-流程-怎么调用的"}},[_._v("#")]),_._v(" 3. Face++流程，怎么调用的？")]),_._v(" "),a("ul",[a("li",[_._v("face++对用户透明，通过官网提供的HttpUtils类，利用post方法，直接调用。返回json数据，经解析为java对象。")])]),_._v(" "),a("h3",{attrs:{id:"_4-视频-数据来源-过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-视频-数据来源-过程"}},[_._v("#")]),_._v(" 4. 视频/数据来源？过程")]),_._v(" "),a("ul",[a("li",[_._v("从摄像头拍摄后的视频流（tcp流）处理后去掉配置信息，留下视频数据，拼接后成为多少秒的视频，然后保存到服务器的文件夹里。然后前端通过url接收到视频，是一个有延时的实时。更好的处理是视频传到前端进行处理，然后在网页上显示。保存到话就是前端的视频流保存到本地。")]),_._v(" "),a("li",[_._v("预期的实时显示，是把程序写到摄像头里。或者做一个中间的硬件设备，由他专门处理，就是"),a("strong",[_._v("边缘计算")]),_._v("。")])]),_._v(" "),a("h3",{attrs:{id:"_5-如何评定学生的听课质量-数据可视化是用什么实现的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何评定学生的听课质量-数据可视化是用什么实现的"}},[_._v("#")]),_._v(" 5. 如何评定学生的听课质量？数据可视化是用什么实现的？")]),_._v(" "),a("ul",[a("li",[_._v("课程开始后，每隔五分钟拍摄学生当前时刻的照片，利用Face++中人体抠图的功能将图片中的所有学生分割开来，依次调用状态检测模型，返回学生们当前时刻的状态，并将数据存入数据库中。")]),_._v(" "),a("li",[_._v("数据可视化为前端从后端得到数据库中的数据，利用百度的Echars数据图表可视化工具多方面展示,比如学生上课状态,教师知识点范围等。")])]),_._v(" "),a("h3",{attrs:{id:"_6-是怎么使用权限管理模块实现增删角色并赋权的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-是怎么使用权限管理模块实现增删角色并赋权的"}},[_._v("#")]),_._v(" 6.是怎么使用权限管理模块实现增删角色并赋权的？")]),_._v(" "),a("ul",[a("li",[_._v("用户在登录系统时，会将用户的账号和密码传递给shiro框架自带的subject类的实例对象并将该对象以参数的形式传递给shiro。")]),_._v(" "),a("li",[_._v("shiro将其与数据库中的用户表中信息进行比对验证该用户身份，验证成功后从数据库中获得该用户的权限信息。为了减少系统开销，对齐进行权限缓存。通过shiro与thymeleaf整合的依赖对前端菜单进行动态渲染展示该用户对应权限的功能。")])]),_._v(" "),a("h3",{attrs:{id:"_7-模型是如何调用的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-模型是如何调用的"}},[_._v("#")]),_._v(" 7. 模型是如何调用的")]),_._v(" "),a("ol",[a("li",[_._v("python模型保存成Py文件")]),_._v(" "),a("li",[_._v("在Tensorflow官网下载对应的java jar包(libtensorflow-1.12.0.jar)和在运行目录下添加tensorflow_ini.dll文件")]),_._v(" "),a("li",[_._v("python在定义输入张量(输入数据，即图片)时，指定参数")]),_._v(" "),a("li",[_._v("在java中传入参数")]),_._v(" "),a("li",[_._v("将模型返回的数据结果")]),_._v(" "),a("li",[_._v("得到输出张量把输出张量转化为java的float数组得到的数组里，一共有四个值（分别代表四种状态的概率）取其中概率最大的一个，当作学生的状态")])]),_._v(" "),a("h3",{attrs:{id:"_8-摄像头无法远程控制的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-摄像头无法远程控制的原因"}},[_._v("#")]),_._v(" 8.摄像头无法远程控制的原因")]),_._v(" "),a("ul",[a("li",[_._v("我们部署的项目在服务部在学校的云计算中心的(8G， 4核， 100G)的虚拟机")]),_._v(" "),a("li",[_._v("摄像头部在107实验室，同在校园网内，所以程序可以控制摄像头")]),_._v(" "),a("li",[_._v("但是现在外网不能访问到校园网的虚拟机，需要网络中心进行公网的地址映射。指导老师跟网络中心联系时候才知道要走审批流程，到目前为止还没审批下来。")]),_._v(" "),a("li",[_._v("这也是无法现场展示的原因")])]),_._v(" "),a("h3",{attrs:{id:"_9-摄像头控制程序如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-摄像头控制程序如何实现"}},[_._v("#")]),_._v(" 9.摄像头控制程序如何实现？")]),_._v(" "),a("ol",[a("li",[_._v("通过ip地址和端口号连接摄像头")]),_._v(" "),a("li",[_._v("根据命令行输入的字符串，调用对应的程序接口")]),_._v(" "),a("li",[_._v("断开连接，释放资源")])]),_._v(" "),a("h3",{attrs:{id:"_10-为何无法显示摄像头实况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-为何无法显示摄像头实况"}},[_._v("#")]),_._v(" 10.为何无法显示摄像头实况？")]),_._v(" "),a("ul",[a("li",[_._v("摄像头厂商提供的接口都是windows平台的接口，项目是通过java调用exe文件，但是服务器是Linux的，无法运行exe文件。")]),_._v(" "),a("li",[_._v("后期可以利用opencv 获取摄像推流的方式展示实时数据")])]),_._v(" "),a("h3",{attrs:{id:"_11-ocr识别原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-ocr识别原理"}},[_._v("#")]),_._v(" 11.ocr识别原理")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("版面分析：把一整张图像拆分为行；便于后面行处理。在图像没有明显倾斜扭曲时，可以先使用**笔画等宽算法(swt算法)**把非笔迹的像素过滤掉，再使用投影直方图进行分行。")])]),_._v(" "),a("li",[a("p",[_._v("使用"),a("strong",[_._v("连通域分析或者直方图投影")]),_._v("进行行拆分为字符")])]),_._v(" "),a("li",[a("p",[_._v("识别字符： 识别字符就在于生成样本+选择识别算法，由于时间因素，我们采用了百度已经训练好是文字识别算法")])]),_._v(" "),a("li",[a("p",[_._v("识别后的人工矫正")])])]),_._v(" "),a("h3",{attrs:{id:"_12-状态检测模型训练"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-状态检测模型训练"}},[_._v("#")]),_._v(" 12. 状态检测模型训练")]),_._v(" "),a("ul",[a("li",[_._v("制作数据集。实验视频是使用1920（水平）×1080（垂直）的球机采集的。拍摄对象共60名，让学生在座位上分别做出认真听课、打瞌睡、玩手机、发呆的动作，每个动作持续4-6秒，在动作间切换3次，获取18s-24s的视频。将所有视频每秒抽取20帧，将得到的图片在进行人工标注状态，得到符合条件的2500张图片。")]),_._v(" "),a("li",[_._v("选取模型训练方法。考虑到VGG16的拓展性强，容易迁移到其他数据图片上，同时由于"),a("strong",[_._v("其使用小卷积核和更深的网络进行的正则化")]),_._v("，使用与训练得到的数据进行参数的初始化，VGG16网络较其他网络有更高的准确性和更快的速度，因此，选用VGG16对学生状态检测模型进行训练，是一个明智的选择。")]),_._v(" "),a("li",[_._v("将数据集放入VGG16网络进行训练，最终训练出学生状态检测模型，经测试，正确率能够达到89.34%。训练出的模型只需将某个学生的状态图输入，即可获取该学生此时刻对应的上课状态。")]),_._v(" "),a("li",[_._v("但是，由于我们现在是单人单图的训练，并且在人体抠图的过程中还是存在着遮挡的现象等问题，所以在实际应用中正确率往往达不到这么高，但我们也会积极的进行改进。")])]),_._v(" "),a("h3",{attrs:{id:"_13-知识图谱构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-知识图谱构建"}},[_._v("#")]),_._v(" 13. 知识图谱构建")]),_._v(" "),a("ol",[a("li",[_._v("首先需信息抽来有教师预设的知识点自动化信息地从半结构化和无结构数据中抽取实体、关系以及实体属性等结构化信息。")]),_._v(" "),a("li",[_._v("然后这些繁杂的信息中在获取实体、关系与属性等知识要素后，经过知识融合，消除实体"),a("strong",[_._v("指称项")]),_._v("与"),a("strong",[_._v("实体对象之间")]),_._v("的歧义，得到一系列基本的事实表达。然而事实本身并不等于知识。要想最终获得结构化，网络化的知识体系，还需要进一步的人工优化去重。")]),_._v(" "),a("li",[_._v("然后将各个父子节点及同级节点之间的联系导入xml数据，Echars关系图利用xml的数据关系生成可视化展示，最终达到演示视频所展示的可视化效果")]),_._v(" "),a("li",[_._v("我们之后还会有需教师的个人理解和相关资料后的进一步改善,也会根据重新生成的知识图谱,进一步的引导教师挖掘知识点之间的联系.")])]),_._v(" "),a("h3",{attrs:{id:"_14-可视化展示那些方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-可视化展示那些方面"}},[_._v("#")]),_._v(" 14. 可视化展示那些方面")]),_._v(" "),a("ul",[a("li",[_._v("学生最近一次课程学生状态统计")]),_._v(" "),a("li",[_._v("不同班级对不同知识点组合所产生学生学习状态的影响")]),_._v(" "),a("li",[_._v("最近一周的知识点分布")]),_._v(" "),a("li",[_._v("最近一周知识点难易程度分配")])]),_._v(" "),a("h3",{attrs:{id:"_15-是否已经投入使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-是否已经投入使用"}},[_._v("#")]),_._v(" 15. 是否已经投入使用")]),_._v(" "),a("ul",[a("li",[_._v("我们在项目完成后经学生同意后，对参与的志愿者进行了一系列的实验")]),_._v(" "),a("li",[_._v("在学校的监管下有部分班级已经开始用")]),_._v(" "),a("li",[_._v("并产生了一系列的结果数据集用于展示")]),_._v(" "),a("li",[_._v("但由于现阶段我们服务器负载较小只能小范围进行测试使用")]),_._v(" "),a("li",[_._v("待后期系统更加完善后会进行响应的服务器扩容,来进行更大范围的测试")])]),_._v(" "),a("h3",{attrs:{id:"_16-运行过程中出现的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-运行过程中出现的问题"}},[_._v("#")]),_._v(" 16.运行过程中出现的问题")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("Ocr识别中对于视频知识点出现误差")]),_._v(",我们使用ocr对同一段时间进行比对两次, 如果相差10秒以内,则进行第三次比对.对第三次识别的结果取平均值")])]),_._v(" "),a("h3",{attrs:{id:"_17-对于学生隐私的问题-是否考虑过学生的感受"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-对于学生隐私的问题-是否考虑过学生的感受"}},[_._v("#")]),_._v(" 17. 对于学生隐私的问题,是否考虑过学生的感受")]),_._v(" "),a("ul",[a("li",[_._v("我们再使用本系统是已争取学生同意")]),_._v(" "),a("li",[_._v("我们使用权限控制模块,已保证教师只能查看数据的识别结果集,而不能针对单个学生的结果展示,对于学生的学习状态由短信单独通知.")]),_._v(" "),a("li",[_._v("我们拍摄所产生的数据在运算完成后进行实时的删除")]),_._v(" "),a("li",[_._v("系统部署于学校内网中,识别产生数据结果集保存在腾讯云数据库中")]),_._v(" "),a("li",[_._v("云数据库符合企业级安全标准，高效防御 SQL 注入、暴力破解等数据库攻击行为，极大减少用户因数据库攻击带来的业务中断和损失。")]),_._v(" "),a("li",[_._v("每日自动备份数据，确保数据存储安全。")])]),_._v(" "),a("h3",{attrs:{id:"_18-项目优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-项目优势"}},[_._v("#")]),_._v(" 18. 项目优势")]),_._v(" "),a("ul",[a("li",[_._v("本系统能够帮助教师了解学生在教学过程中对某一知识点的掌握情况，及时调整教学内容和教学方法，合理分配，重新组合知识点教学，构建和调整课程知识图谱，优化学生与老师的学习与授课体验。其次能提供一个高效且安全的学生数据采集处理平台，为学校及时了解学生近况和相关措施的有效实施作为有力保障。更能帮助落实教育改革，利用人工智能改善教学方式，引导和推动教育内容和模式的变革")])]),_._v(" "),a("h3",{attrs:{id:"_19-人脸识别过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-人脸识别过程"}},[_._v("#")]),_._v(" 19. 人脸识别过程")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("(1)首先建立人脸的面像档案。即用摄像机采集单位人员的人脸的面像文件或取他们的照片形成面像文件，并将这些面像文件生成面纹(Faceprint)编码贮存起来。")])]),_._v(" "),a("li",[a("p",[_._v("(2)获取当前的人体面像。即用摄像机捕捉的当前出入人员的面像，或取照片输入，并将当前的面像文件生成面纹编码。")])]),_._v(" "),a("li",[a("p",[_._v("(3)用当前的面纹编码与档案库存的比对。即将当前的面像的面纹编码与档案库存中的面纹编码进行检索比对。上述的“面纹编码”方式是根据人脸脸部的本质特征和开头来工作的。这种面纹编码可以抵抗光线、皮肤色调、面部毛发、发型、眼镜、表情和姿态的变化，具有强大的可靠性，从而使它可以从百万人中精确地辨认出某个人。人脸的识别过程，利用普通的图像处理设备就能自动、连续、实时地完成。")])])]),_._v(" "),a("h3",{attrs:{id:"_20-用到很多第三方接口-为什么不自己创建接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-用到很多第三方接口-为什么不自己创建接口"}},[_._v("#")]),_._v(" 20. 用到很多第三方接口,为什么不自己创建接口")]),_._v(" "),a("ul",[a("li",[_._v("因为我们再设计项目之初想快速构建系统架构,从而选择了较多的第三方服务完善系统架构")]),_._v(" "),a("li",[_._v("在选择接口的同时,我们也对相关接口进行了一个同等级测试,包括性能,速度等方面,最终选择了现阶段的相关接口")]),_._v(" "),a("li",[_._v("再后期构建完善后,会引入openCV等开源框架,自定义相关人脸识别接口,从而降低相关成本")])]),_._v(" "),a("h3",{attrs:{id:"_21-项目涉及范围太大"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21-项目涉及范围太大"}},[_._v("#")]),_._v(" 21. 项目涉及范围太大")]),_._v(" "),a("ul",[a("li",[_._v("我们在设计项目之初,只是为了想通过教师讲授的知识点构建知识图谱,从而帮助老师更好的教学,但在逐步的项目开发中,我们发现要实现这一功能需要更多的数据前提,包括知识点识别,学生状态采集等多方面内容,由此我们的项目范围也是逐步扩大,最终形成了一个相对完善的项目.来达到我们的需求")]),_._v(" "),a("li",[_._v("我们的项目是一个循序渐进的过程，学生状态检测功能能够有效提取困难知识点分布数据，有助于完成知识点检测，而知识点检测功能是知识图谱功能的前提，通过知识点检测功能得到的信息以及教师预设的知识点自动化信息来知识融合并加工，最终实现知识图谱功能")])])])}),[],!1,null,null,null);v.default=s.exports}}]);