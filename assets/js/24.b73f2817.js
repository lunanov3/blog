(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{324:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"一、-etc-fstab文件的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、-etc-fstab文件的作用"}},[s._v("#")]),s._v(" 一、/etc/fstab文件的作用")]),s._v(" "),t("p",[s._v("磁盘被手动挂载之后都必须把挂载信息写入/etc/fstab这个文件中，否则下次开机启动时仍然需要重新挂载。\n　　系统开机时会主动读取/etc/fstab这个文件中的内容，根据文件里面的配置挂载磁盘。这样我们只需要将磁盘的挂载信息写入这个文件中我们就不需要每次开机启动之后手动进行挂载了。")]),s._v(" "),t("h3",{attrs:{id:"二、挂载的限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、挂载的限制"}},[s._v("#")]),s._v(" 二、挂载的限制")]),s._v(" "),t("p",[s._v("在说明这个文件的作用之前我想先强调一下挂载的限制。\n　　1. 根目录是必须挂载的，而且一定要先于其他mount point被挂载。因为mount是所有目录的跟目录，其他木有都是由根目录 /衍生出来的。\n　　2. 挂载点必须是已经存在的目录。\n　　3. 挂载点的指定可以任意，但必须遵守必要的系统目录架构原则\n　　4. 所有挂载点在同一时间只能被挂载一次\n　　5. 所有分区在同一时间只能挂在一次\n　　6. 若进行卸载，必须将工作目录退出挂载点（及其子目录）之外。")]),s._v(" "),t("h3",{attrs:{id:"三、-etc-fstab文件中的参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、-etc-fstab文件中的参数"}},[s._v("#")]),s._v(" 三、/etc/fstab文件中的参数")]),s._v(" "),t("p",[s._v("查看/etc/fstab文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/fstab ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这是我的linux环境中/etc/fstab文件中的内容")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/fstab: static file system information.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use 'blkid' to print the universally unique identifier for a")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# device; this may be used with UUID= as a more robust way to name devices")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# that works even if disks are added and removed. See fstab(5).")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <file system> <mount point>   <type>  <options>       <dump>  <pass>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# / was on /dev/sda1 during installation")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2095f3a3-960c-466d-92fe-3f3be1dc0fd3 /               ext4    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("errors")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("remount-ro "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# swap was on /dev/sda5 during installation")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("3d0e5364-4082-4644-92a9-6d4afa28d143 none            swap    sw              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("在文件中我已经把每一列都做出来表示方便识别，我们可以看到一共有六列。")]),s._v(" "),t("h5",{attrs:{id:"第一列-device-磁盘设备文件或者该设备的label或者uuid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一列-device-磁盘设备文件或者该设备的label或者uuid"}},[s._v("#")]),s._v(" 第一列：Device：磁盘设备文件或者该设备的Label或者UUID")]),s._v(" "),t("p",[s._v("1）查看分区的label和uuid\n　　Label就是分区的标签，在最初安装系统时填写的挂载点就是标签的名字。可以通过查看一个分区的superblock中的信息找到UUID和Label name。\n　　例如:我们要查看/dev/sda1这个设备的uuid和label name")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dumpe2fs -h /dev/sda11")]),s._v("\ndumpe2fs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.42")]),s._v(".13 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("-May-2015"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nFilesystem volume name:   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  //Label name\nLast mounted on:          /\nFilesystem UUID:          2095f3a3-960c-466d-92fe-3f3be1dc0fd3 //UUID\nFilesystem magic number:  0xEF53\nFilesystem revision "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#:    1 (dynamic)")]),s._v("\nFilesystem features:      has_journal ext_attr resize_inode dir_index filetype needs_recovery extent flex_bg sparse_super large_file huge_file uninit_bg dir_nlink extra_isize\nFilesystem flags:         signed_directory_hash \nDefault "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" options:    user_xattr acl\nFilesystem state:         clean\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("简单点的方式我们可以通过命令blkid来查看")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# blkid")]),s._v("\n/dev/sda1: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2095f3a3-960c-466d-92fe-3f3be1dc0fd3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ext4"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PARTUUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8c98aa8e-01"')]),s._v("\n/dev/sda5: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3d0e5364-4082-4644-92a9-6d4afa28d143"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"swap"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PARTUUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8c98aa8e-05"')]),s._v("\n/dev/sdb1: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a37f9605-44ee-4fbd-9943-69fd47928f87"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ext4"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PARTUUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d86506b9-01"')]),s._v("\n/dev/sdc1: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"00dbb3ac-c544-402b-98e1-f15d93a7bb53"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ext4"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PARTUUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"79e762ca-01"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("2）使用设备名和label及uuid作为标识的不同\n　　"),t("strong",[s._v("使用设备名称（/dev/sda)来挂载分区时是被固定死的，一旦磁盘的插槽顺序发生了变化，就会出现名称不对应的问题。因为这个名称是会改变的。")]),s._v(" "),t("strong",[s._v("不过使用label挂载就不用担心插槽顺序方面的问题。不过要随时注意你的Label name。至于UUID，每个分区被格式化以后都会有一个UUID作为唯一的标识号。使用uuid挂载的话就不用担心会发生错乱的问题了。")])]),s._v(" "),t("h5",{attrs:{id:"第二列-mount-point-设备的挂载点-就是你要挂载到哪个目录下。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二列-mount-point-设备的挂载点-就是你要挂载到哪个目录下。"}},[s._v("#")]),s._v(" 第二列：Mount point：设备的挂载点，就是你要挂载到哪个目录下。")]),s._v(" "),t("h5",{attrs:{id:"第三列-filesystem-磁盘文件系统的格式-包括ext2、ext3、reiserfs、nfs、vfat等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三列-filesystem-磁盘文件系统的格式-包括ext2、ext3、reiserfs、nfs、vfat等"}},[s._v("#")]),s._v(" 第三列：filesystem：磁盘文件系统的格式，包括ext2、ext3、reiserfs、nfs、vfat等")]),s._v(" "),t("h5",{attrs:{id:"第四列-parameters-文件系统的参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四列-parameters-文件系统的参数"}},[s._v("#")]),s._v(" 第四列：parameters：文件系统的参数")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th"),s._v(" "),t("th")])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("Async/sync")]),s._v(" "),t("td",[s._v("设置是否为同步方式运行，默认为async")])]),s._v(" "),t("tr",[t("td",[s._v("auto/noauto")]),s._v(" "),t("td",[s._v("当下载mount -a 的命令时，此文件系统是否被主动挂载。默认为auto")])]),s._v(" "),t("tr",[t("td",[s._v("rw/ro")]),s._v(" "),t("td",[s._v("是否以以只读或者读写模式挂载")])]),s._v(" "),t("tr",[t("td",[s._v("exec/noexec")]),s._v(" "),t("td",[s._v("限制此文件系统内是否能够进行”执行”的操作")])]),s._v(" "),t("tr",[t("td",[s._v("user/nouser")]),s._v(" "),t("td",[s._v("是否允许用户使用mount命令挂载")])]),s._v(" "),t("tr",[t("td",[s._v("suid/nosuid")]),s._v(" "),t("td",[s._v("是否允许SUID的存在")])]),s._v(" "),t("tr",[t("td",[s._v("Usrquota")]),s._v(" "),t("td",[s._v("启动文件系统支持磁盘配额模式")])]),s._v(" "),t("tr",[t("td",[s._v("Grpquota")]),s._v(" "),t("td",[s._v("启动文件系统对群组磁盘配额模式的支持")])]),s._v(" "),t("tr",[t("td",[s._v("Defaults")]),s._v(" "),t("td",[s._v("同时具有rw,suid,dev,exec,auto,nouser,async等默认参数的设置")])])])]),s._v(" "),t("h5",{attrs:{id:"第五列-能否被dump备份命令作用-dump是一个用来作为备份的命令。通常这个参数的值为0或者1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第五列-能否被dump备份命令作用-dump是一个用来作为备份的命令。通常这个参数的值为0或者1"}},[s._v("#")]),s._v(" 第五列：能否被dump备份命令作用：dump是一个用来作为备份的命令。通常这个参数的值为0或者1")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th"),s._v(" "),t("th")])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("0")]),s._v(" "),t("td",[s._v("代表不要做dump备份")])]),s._v(" "),t("tr",[t("td",[s._v("1")]),s._v(" "),t("td",[s._v("代表要每天进行dump的操作")])]),s._v(" "),t("tr",[t("td",[s._v("2")]),s._v(" "),t("td",[s._v("代表不定日期的进行dump操作")])])])]),s._v(" "),t("h5",{attrs:{id:"第六列-是否检验扇区-开机的过程中-系统默认会以fsck检验我们系统是否为完整-clean-。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第六列-是否检验扇区-开机的过程中-系统默认会以fsck检验我们系统是否为完整-clean-。"}},[s._v("#")]),s._v(" 第六列：是否检验扇区：开机的过程中，系统默认会以fsck检验我们系统是否为完整（clean）。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th"),s._v(" "),t("th")])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("0")]),s._v(" "),t("td",[s._v("不要检验")])]),s._v(" "),t("tr",[t("td",[s._v("1")]),s._v(" "),t("td",[s._v("最早检验（一般根目录会选择）")])]),s._v(" "),t("tr",[t("td",[s._v("2")]),s._v(" "),t("td",[s._v("1级别检验完成之后进行检验")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);