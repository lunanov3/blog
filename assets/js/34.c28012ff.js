(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{335:function(e,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("​\t    镜像包含了容器运行所需要的文件系统结构和内容，是静态的只读文件，而容器则是在镜像的只读层上创建了可写层，并且容器中的进程属于运行状态，容器是真正的应用载体。接下来讲讲Docker 核心：容器，重点讲解一下容器的基本操作。")]),e._v(" "),a("h3",{attrs:{id:"_1-容器-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-容器-container"}},[e._v("#")]),e._v(" 1. 容器（Container）")]),e._v(" "),a("p",[e._v("容器是基于镜像创建的可运行实例，并且单独存在，一个镜像可以创建出多个容器。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/4docker-%E5%AE%B9%E5%99%A8%E5%B1%82.png",alt:""}})]),e._v(" "),a("h5",{attrs:{id:"_1-1-容器的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-容器的生命周期"}},[e._v("#")]),e._v(" 1.1 容器的生命周期")]),e._v(" "),a("p",[e._v("容器的生命周期是容器可能处于的状态，容器的生命周期分为 5 种。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("created：初建状态")])]),e._v(" "),a("li",[a("p",[e._v("running：运行状态")])]),e._v(" "),a("li",[a("p",[e._v("stopped：停止状态")])]),e._v(" "),a("li",[a("p",[e._v("paused： 暂停状态")])]),e._v(" "),a("li",[a("p",[e._v("deleted：删除状态")])])]),e._v(" "),a("p",[e._v("各生命周期之前的转换关系如图所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/4docker-%E5%AE%B9%E5%99%A8%E7%8A%B6%E6%80%81.png",alt:""}})]),e._v(" "),a("p",[e._v("docker create命令: 生成的容器状态为初建状态，初建状态通过")]),e._v(" "),a("p",[e._v("docker start命令：可以将初建状态转化为运行状态")]),e._v(" "),a("p",[e._v("docker stop命令：运行状态的容器转化为停止状态")]),e._v(" "),a("p",[e._v("docker start命令：可以将处于停止状态的容器转化为运行状态")]),e._v(" "),a("p",[e._v("docker pause命令：运行状态的容器转化为暂停状态")]),e._v(" "),a("p",[e._v("docker unpause命令：将处于暂停状态的容器转化为运行状态 。")]),e._v(" "),a("p",[a("strong",[e._v("重点：处于初建状态、运行状态、停止状态、暂停状态的容器都可以直接删除。")])]),e._v(" "),a("h3",{attrs:{id:"_2-容器命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-容器命令"}},[e._v("#")]),e._v(" 2. 容器命令")]),e._v(" "),a("p",[e._v("容器的操作可以分为五个步骤：创建并启动容器、终止容器、进入容器、删除容器、导入和导出容器。")]),e._v(" "),a("h5",{attrs:{id:"_2-1-创建并启动容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建并启动容器"}},[e._v("#")]),e._v(" 2.1 创建并启动容器")]),e._v(" "),a("p",[e._v("容器启动有两种方式：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("docker create命令用于创建容器，创建后的容器处于停止状态，然后可以使用docker start命令来启动它。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# --name 指定容器的名称  \n# 最后面的busybox为镜像\ndocker create -it --name=new_busybox busybox\n\n# 启动刚create创建的容器\ndocker start new_busybox\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("使用docker run命令直接基于镜像新建一个容器并启动，相当于先执行docker create命令从镜像创建容器，然后再执行docker start命令启动容器。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run -it --name=new_busybox busybox\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])]),e._v(" "),a("p",[e._v("当使用"),a("code",[e._v("docker run")]),e._v("创建并启动容器时，Docker 后台执行的流程为：")]),e._v(" "),a("ul",[a("li",[e._v("Docker 会检查本地是否存在 busybox 镜像，如果镜像不存在则从 Docker Hub 拉取 busybox 镜像")]),e._v(" "),a("li",[e._v("使用 busybox 镜像创建并启动一个容器, 容器名为new_busybox")]),e._v(" "),a("li",[e._v("分配文件系统，并且在镜像只读层外创建一个读写层")]),e._v(" "),a("li",[e._v("从 Docker IP 池中分配一个 IP 给容器（在下面会讲解原理）")]),e._v(" "),a("li",[e._v("执行用户的启动命令运行镜像")])]),e._v(" "),a("h5",{attrs:{id:"_2-2-终止容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-终止容器"}},[e._v("#")]),e._v(" 2.2 终止容器")]),e._v(" "),a("p",[a("code",[e._v("docker stop")]),e._v("命令：停止运行中的容器。命令格式为 docker stop [-t|--time[=10]]。")]),e._v(" "),a("p",[e._v("该命令首先会向运行中的容器发送 SIGTERM 信号，如果容器内 1 号进程接受并能够处理 SIGTERM，则等待 1 号进程处理完毕后退出，如果等待一段时间后，容器仍然没有退出，则会发送 SIGKILL 强制终止容器。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker stop new_busybox\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("如果你想查看停止状态的容器信息，你可以使用 docker ps -a 命令。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker ps -a\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("处于终止状态的容器也可以通过"),a("code",[e._v("docker start")]),e._v("命令和"),a("code",[e._v("docker restart")]),e._v("命令来重新启动。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker start new_busybox\ndocker restart new_busybox\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h5",{attrs:{id:"_2-3-进入容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-进入容器"}},[e._v("#")]),e._v(" 2.3 进入容器")]),e._v(" "),a("p",[e._v("处于运行状态的容器可以通过"),a("code",[e._v("docker attach")]),e._v("、"),a("code",[e._v("docker exec")]),e._v("、"),a("code",[e._v("nsenter")]),e._v("等多种方式进入容器。")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("使用")]),a("code",[e._v("docker attach")]),e._v("命令"),a("strong",[e._v("进入容器")])])]),e._v(" "),a("p",[e._v("使用 docker attach ，进入我们上一步创建好的容器，如下所示。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker attach new_busybox\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("**注意：**当我们同时使用"),a("code",[e._v("docker attach")]),e._v("命令同时在多个终端运行时，所有的终端窗口将同步显示相同内容，当某个命令行窗口的命令阻塞时，其他命令行窗口同样也无法操作。\n由于"),a("code",[e._v("docker attach")]),e._v("命令不够灵活，因此我们一般不会使用"),a("code",[e._v("docker attach")]),e._v("进入容器")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("使用 docker exec 命令进入容器")])])]),e._v(" "),a("p",[e._v("通过"),a("code",[e._v("docker exec -it CONTAINER /bin/bash")]),e._v("的方式进入到一个已经运行中的容器")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker exec -it 容器id /bin/bash\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h5",{attrs:{id:"_2-4-删除容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-删除容器"}},[e._v("#")]),e._v(" 2.4 删除容器")]),e._v(" "),a("p",[e._v("删除容器命令的使用方式如下："),a("code",[e._v("docker rm [OPTIONS] CONTAINER [CONTAINER...]")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 删除已经暂停的容器\ndocker rm 容器名或者容器id\n\n# 删除还在运行中的容器\ndocker rm -f 容器名或者容器id\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h5",{attrs:{id:"_2-5-导出容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-导出容器"}},[e._v("#")]),e._v(" 2.5 导出容器")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("导出容器")])])]),e._v(" "),a("p",[e._v("使用"),a("code",[e._v("docker export CONTAINER")]),e._v("命令导出一个容器到文件，不管此时该容器是否处于运行中的状态。")]),e._v(" "),a("p",[e._v("执行导出命令：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker export new_busybox > new_busybox.tar\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("执行以上命令后会在当前文件夹下生成 new_busybox.tar 文件，我们可以将该文件拷贝到其他机器上，通过导入命令实现容器的迁移。")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("导入容器")])])]),e._v(" "),a("p",[e._v("通过"),a("code",[e._v("docker export")]),e._v("命令导出的文件，可以使用"),a("code",[e._v("docker import")]),e._v("命令导入，执行完"),a("code",[e._v("docker import")]),e._v("后会变为本地镜像，最后再使用"),a("code",[e._v("docker run")]),e._v("命令启动该镜像，这样我们就实现了容器的迁移。")]),e._v(" "),a("p",[e._v("导入容器的命令格式为 docker import [OPTIONS] file|URL [REPOSITORY[:TAG]]。接下来将上一步导出的镜像文件导入到其他机器的 Docker 中并启动它。")]),e._v(" "),a("p",[e._v("使用"),a("code",[e._v("docker import")]),e._v("命令导入上一步导出的容器")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker import new_busybox.tar new_busybox:test\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("此时，new_busybox.tar 被导入成为新的镜像，镜像名称为 new_busybox:test 。下面，我们使用"),a("code",[e._v("docker run")]),e._v("命令启动并进入容器，查看上一步创建的临时文件")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run -it busybox:test sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("**重点：**通过"),a("code",[e._v("docker export")]),e._v("和"),a("code",[e._v("docker import")]),e._v("命令配合实现了容器的迁移")]),e._v(" "),a("h3",{attrs:{id:"_3-网络动态ip分配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-网络动态ip分配"}},[e._v("#")]),e._v(" 3. 网络动态IP分配")]),e._v(" "),a("p",[e._v("刚讲到docker run命令的执行时需要从Docker IP 池中分配一个 IP 给容器，接下来重点讲解下该内容。")]),e._v(" "),a("h5",{attrs:{id:"一、docker的四种网络模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、docker的四种网络模式"}},[e._v("#")]),e._v(" 一、Docker的四种网络模式")]),e._v(" "),a("p",[e._v("Docker在创建容器时有四种网络模式，bridge为默认不需要用--net去指定，其他三种模式需要在创建容器时使用--net去指定。")]),e._v(" "),a("ol",[a("li",[e._v("bridge模式，使用--net=bridge指定，默认设置。")]),e._v(" "),a("li",[e._v("none模式，使用--net=none指定。")]),e._v(" "),a("li",[e._v("host模式，使用--net=host指定。")]),e._v(" "),a("li",[e._v("container模式，使用--net=container:容器名称或ID指定。（如：--net=container:30b668ccb630）")])]),e._v(" "),a("p",[e._v("**bridge模式：**docker网络隔离基于网络命名空间"),a("Network",{attrs:{Namespace:""}},[e._v("，在物理机上创建docker容器时会为每一个docker容器分配网络命名空间，并且把容器IP桥接到物理机的虚拟网桥上。")])],1),e._v(" "),a("p",[e._v("**none模式：**此模式下创建容器是不会为容器配置任何网络参数的，如：容器网卡、IP、通信路由等，全部需要自己去配置。")]),e._v(" "),a("p",[e._v("**host模式：**此模式创建的容器没有自己独立的网络命名空间，是和物理机共享一个Network Namespace，并且共享物理机的所有端口与IP，并且这个模式认为是不安全的。")]),e._v(" "),a("p",[e._v("**container模式：**此模式和host模式很类似，只是此模式创建容器共享的是其他容器的IP和端口而不是物理机，此模式容器自身是不会配置网络和端口，创建此模式容器进去后，你会发现里边的IP是你所指定的那个容器IP并且端口也是共享的，而且其它还是互相隔离的，如进程等。")])])}),[],!1,null,null,null);s.default=r.exports}}]);