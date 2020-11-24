(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{341:function(e,s,t){"use strict";t.r(s);var n=t(0),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"_1-前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[e._v("#")]),e._v(" 1. 前言")]),e._v(" "),t("p",[e._v("​\t生产实践中一定优先使用 Dockerfile 的方式构建镜像。 因为使用 Dockerfile 构建镜像可以带来很多好处：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("易于版本化管理，Dockerfile 本身是一个文本文件，方便存放在代码仓库做版本管理，可以很方便地找到各个版本之间的变更历史；")])]),e._v(" "),t("li",[t("p",[e._v("过程可追溯，Dockerfile 的每一行指令代表一个镜像层，根据 Dockerfile 的内容即可很明确地查看镜像的完整构建过程；")])]),e._v(" "),t("li",[t("p",[e._v("屏蔽构建环境异构，使用 Dockerfile 构建镜像无须考虑构建环境，基于相同 Dockerfile 无论在哪里运行，构建结果都一致；")])]),e._v(" "),t("li",[t("p",[e._v("虽然有这么多好处，但是如果你 Dockerfile 使用不当也会引发很多问题。比如镜像构建时间过长，甚至镜像构建失败；镜像层数过多，导致镜像文件过大。所以，这一课时我就教你如何在生产环境中编写最优的 Dockerfile；")])])]),e._v(" "),t("h3",{attrs:{id:"_2-dockerfile编写遵循的原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-dockerfile编写遵循的原则"}},[e._v("#")]),e._v(" 2. Dockerfile编写遵循的原则")]),e._v(" "),t("p",[e._v("​\t遵循以下 Dockerfile 书写原则，不仅可以使得我们的 Dockerfile 简洁明了，让协作者清楚地了解镜像的完整构建流程，还可以帮助我们减少镜像的体积，加快镜像构建的速度和分发速度。")]),e._v(" "),t("p",[t("strong",[e._v("（1）单一职责")]),e._v("\n​\t由于容器的本质是进程，一个容器代表一个进程，因此不同功能的应用应该尽量拆分为不同的容器，每个容器只负责单一业务进程。")]),e._v(" "),t("p",[t("strong",[e._v("（2）提供注释信息")]),e._v("\n​\tDockerfile 也是一种代码，我们应该保持良好的代码编写习惯，晦涩难懂的代码尽量添加注释，让协作者可以一目了然地知道每一行代码的作用，并且方便扩展和使用。")]),e._v(" "),t("p",[t("strong",[e._v("（3）保持容器最小化")]),e._v("\n​\t应该避免安装无用的软件包，比如在一个 nginx 镜像中，我并不需要安装 vim 、gcc 等开发编译工具。这样不仅可以加快容器构建速度，而且可以避免镜像体积过大。")]),e._v(" "),t("p",[t("strong",[e._v("（4）合理选择基础镜像")]),e._v("\n​\t容器的核心是应用，因此只要基础镜像能够满足应用的运行环境即可。例如一个Java类型的应用运行时只需要JRE，并不需要JDK，因此我们的基础镜像只需要安装JRE环境即可。")]),e._v(" "),t("p",[t("strong",[e._v("（5）使用 .dockerignore 文件")]),e._v("\n​\t在使用git时，我们可以使用.gitignore文件忽略一些不需要做版本管理的文件。同理，使用.dockerignore文件允许我们在构建时，忽略一些不需要参与构建的文件，从而提升构建效率。.dockerignore的定义类似于.gitignore。")]),e._v(" "),t("p",[e._v(".dockerignore的本质是文本文件，Docker 构建时可以使用换行符来解析文件定义，每一行可以忽略一些文件或者文件夹。具体使用方式如下：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("规则\t\t\t   含义\n# 开头的表示注释，# 后面所有内容将会被忽略\n/tmp\t\t\t匹配当前目录下任何以 tmp 开头的文件或者文件夹\n*.md\t\t\t匹配以 .md 为后缀的任意文件\ntem?\t\t\t匹配以 tem 开头并且以任意字符结尾的文件，？代表任意一个字符\n!README.md  \t! 表示排除忽略。\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[t("strong",[e._v("（6）尽量使用构建缓存")]),e._v("\n​\tDocker 构建过程中，每一条 Dockerfile 指令都会提交为一个镜像层，下一条指令都是基于上一条指令构建的。如果构建时发现要构建的镜像层的父镜像层已经存在，并且下一条命令使用了相同的指令，即可命中构建缓存。")]),e._v(" "),t("p",[e._v("Docker 构建时判断是否需要使用缓存的规则如下：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("从当前构建层开始，比较所有的子镜像，检查所有的构建指令是否与当前完全一致，如果不一致，则不使用缓存；")])]),e._v(" "),t("li",[t("p",[e._v("一般情况下，只需要比较构建指令即可判断是否需要使用缓存，但是有些指令除外（例如ADD和COPY）；")])]),e._v(" "),t("li",[t("p",[e._v("对于ADD和COPY指令不仅要校验命令是否一致，还要为即将拷贝到容器的文件计算校验和（根据文件内容计算出的一个数值，如果两个文件计算的数值一致，表示两个文件内容一致 ），命令和校验和完全一致，才认为命中缓存。")])]),e._v(" "),t("li",[t("p",[e._v("因此，基于 Docker 构建时的缓存特性，我们可以把不轻易改变的指令放到 Dockerfile 前面（例如安装软件包），而可能经常发生改变的指令放在 Dockerfile 末尾（例如编译应用程序）。")])]),e._v(" "),t("li",[t("p",[e._v("例如，我们想要定义一些环境变量并且安装一些软件包，可以按照如下顺序编写 Dockerfile：")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("FROM centos:7\n# 设置环境变量指令放前面\nENV PATH /usr/local/bin:$PATH\n# 安装软件指令放前面\nRUN yum install -y make\n# 把业务软件的配置,版本等经常变动的步骤放最后\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("按照上面原则编写的 Dockerfile 在构建镜像时，前面步骤命中缓存的概率会增加，可以大大缩短镜像构建时间。")]),e._v(" "),t("p",[t("strong",[e._v("（7）正确设置时区")]),e._v("\n​\t我们从 Docker Hub 拉取的官方操作系统镜像大多数都是 UTC 时间（世界标准时间）。如果你想要在容器中使用中国区标准时间（东八区），请根据使用的操作系统修改相应的时区信息，下面我介绍几种常用操作系统的修改方式：")]),e._v(" "),t("p",[t("strong",[e._v("Ubuntu 和Debian 系统")])]),e._v(" "),t("p",[e._v("Ubuntu 和Debian 系统可以向 Dockerfile 中添加以下指令：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\nRUN echo "Asia/Shanghai" >> /etc/timezone\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[t("strong",[e._v("CentOS系统")])]),e._v(" "),t("p",[e._v("CentOS 系统则向 Dockerfile 中添加以下指令：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("（8）使用国内软件源加快镜像构建速度")]),e._v("\n​\t由于我们常用的官方操作系统镜像基本都是国外的，软件服务器大部分也在国外，所以我们构建镜像的时候想要安装一些软件包可能会非常慢。")]),e._v(" "),t("p",[t("strong",[e._v("（9）最小化镜像层数")]),e._v("\n在构建镜像时尽可能地减少 Dockerfile 指令行数。例如我们要在 CentOS 系统中安装make和net-tools两个软件包，应该在 Dockerfile 中使用以下指令：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("RUN yum install -y make net-tools\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("而不应该写成这样：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("RUN yum install -y make\nRUN yum install -y make\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("了解完 Dockerfile 的书写原则后，我们再来具体了解下这些原则落实到具体的 Dockerfile 指令应该如何书写。")]),e._v(" "),t("h3",{attrs:{id:"_3-dockerfile-指令书写建议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-dockerfile-指令书写建议"}},[e._v("#")]),e._v(" 3. Dockerfile 指令书写建议")]),e._v(" "),t("p",[e._v("下面是我们常用的一些指令:")]),e._v(" "),t("p",[t("strong",[e._v("（1）RUN")]),e._v("\nRUN指令在构建时"),t("strong",[e._v("将会生成一个新的镜像层")]),e._v("并且执行RUN指令后面的内容。")]),e._v(" "),t("p",[e._v("使用RUN指令时应该尽量遵循以下原则：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("当RUN指令后面跟的内容比较复杂时，建议使用反斜杠（\\） 结尾并且换行；")])]),e._v(" "),t("li",[t("p",[e._v("RUN指令后面的内容尽量按照字母顺序排序，提高可读性。")])])]),e._v(" "),t("p",[e._v("例如，在官方的 CentOS 镜像下安装一些软件，一个建议的 Dockerfile 指令如下：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("FROM centos:7\nRUN yum install -y automake \\\n                   curl \\\n                   python \\\n                   vim\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[t("strong",[e._v("（2）CMD 和 ENTRYPOINT")])]),e._v(" "),t("p",[e._v("​\t"),t("strong",[e._v("CMD和ENTRYPOINT指令都是容器运行的命令入口")]),e._v("。")]),e._v(" "),t("p",[e._v("这两个指令的相同之处，CMD和ENTRYPOINT的基本使用格式分为两种。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v('第一种为CMD/ENTRYPOINT["command" , "param"]。这种格式是使用 '),t("strong",[e._v("Linux 的exec")]),e._v("实现的， 一般称为exec模式，这种书写格式为CMD/ENTRYPOINT后面跟 json 数组，也是Docker 推荐的使用格式。")])]),e._v(" "),t("li",[t("p",[e._v("另外一种格式为CMD/ENTRYPOINTcommand param ，这种格式是"),t("strong",[e._v("基于 shell 实现")]),e._v("的， 通常称为shell模式。当使用shell模式时，Docker 会以 /bin/sh -c command 的方式执行命令。")])])]),e._v(" "),t("p",[e._v("区别：")]),e._v(" "),t("ul",[t("li",[e._v("Dockerfile 中如果使用了ENTRYPOINT指令，启动 Docker 容器时需要使用 --entrypoint 参数才能覆盖 Dockerfile 中的ENTRYPOINT指令")]),e._v(" "),t("li",[e._v("使用CMD设置的命令则可以被docker run后面的参数直接覆盖。")]),e._v(" "),t("li",[e._v("ENTRYPOINT指令可以结合CMD指令使用，也可以单独使用，而CMD指令只能单独使用。")])]),e._v(" "),t("p",[e._v("例如：dockerfiler如下定义")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('FROM python:3\n\nCMD ["python3", "hello.py"]\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("执行启动命令为：docker run python3 xxx.py -itd xxxx，表示下拉python:3镜像，并执行python3 xxx.py命令，如果用docker run -itd xxxx，表示下拉python:3镜像，并执行Dockerfile中定义的python3 hello.py命令。")]),e._v(" "),t("h4",{attrs:{id:"疑问🤔️"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#疑问🤔️"}},[e._v("#")]),e._v(" "),t("strong",[e._v("疑问🤔️：")])]),e._v(" "),t("p",[e._v("什么时候应该使用ENTRYPOINT,什么时候使用CMD呢？")]),e._v(" "),t("p",[e._v("如果你希望你的镜像足够灵活，推荐使用CMD指令。如果你的镜像只执行单一的具体程序，并且不希望用户在执行docker run时覆盖默认程序，建议使用ENTRYPOINT。")]),e._v(" "),t("p",[e._v("最后再强调一下，无论使用CMD还是ENTRYPOINT，都"),t("strong",[e._v("尽量使用exec模式")]),e._v("。")]),e._v(" "),t("p",[e._v("如果"),t("strong",[e._v("在Dockerfile中有多条CMD指令，那么永远只会执行最后一条CMD指令，最好将执行的命令通过&&进行连接。")])]),e._v(" "),t("p",[t("strong",[e._v("（3）ADD 和 COPY")]),e._v("\n​\tADD和COPY指令功能类似，都是从外部往容器内添加文件。")]),e._v(" "),t("ul",[t("li",[e._v("COPY指令只支持"),t("strong",[e._v("基本的文件和文件夹")]),e._v("拷贝功能")]),e._v(" "),t("li",[e._v("ADD则支持更多"),t("strong",[e._v("文件来源类型")]),e._v("，比如自动提取 tar 包，并且可以支持源文件为 URL 格式。")])]),e._v(" "),t("p",[e._v("那么在日常应用中，我们应该使用哪个命令向容器里添加文件呢？既然ADD指令支持的功能更多，当然应该使用ADD指令了。然而事实恰恰相反，其实更推荐使用COPY指令，因为COPY指令更加透明，仅支持本地文件向容器拷贝，而且使用COPY指令可以更好地利用构建缓存，有效减小镜像体积。")]),e._v(" "),t("p",[e._v("如果使用ADD向容器中添加 URL 文件时，请尽量考虑使用其他方式替代。例如你想要在容器中安装 memtester（一种内存压测工具），你应该避免使用以下格式：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ADD http://pyropus.ca/software/memtester/old-versions/memtester-4.3.0.tar.gz /tmp/\nRUN tar -xvf /tmp/memtester-4.3.0.tar.gz -C /tmp\nRUN make -C /tmp/memtester-4.3.0 && make -C /tmp/memtester-4.3.0 install\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("下面是推荐写法：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("RUN wget -O /tmp/memtester-4.3.0.tar.gz http://pyropus.ca/software/memtester/old-versions/memtester-4.3.0.tar.gz \\\n&& tar -xvf /tmp/memtester-4.3.0.tar.gz -C /tmp \\\n&& make -C /tmp/memtester-4.3.0 && make -C /tmp/memtester-4.3.0 install\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("strong",[e._v("（4）WORKDIR")]),e._v("\n​\tWORKDIR： 指定容器的工作路径，应该尽量避免使用 RUN cd /work/path && do some work 这样的指令。")])])}),[],!1,null,null,null);s.default=a.exports}}]);