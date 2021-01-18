(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{330:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#！/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 系统安装断开网卡")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装vmtools")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启打开网卡")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更换镜像源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apt/sources.list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF \n# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted universe multiverse\n\n# 预发布软件源，不建议启用\n# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse\nEOF")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装vim net-tools lsscsi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" net-tools lsscsi -y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加挂在硬盘 p113")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先在虚拟机添加硬盘 使用命令刷新硬盘热拔插")]),s._v("\npartprobe\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有插入硬盘")]),s._v("\nlsscsi\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择硬盘创建分区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" /dev/sdb1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# new :新建一个分区 pritn: 打印分区信息 type: 设置分区类型 write: 写入磁盘")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1:设置为第一个分区 1:分区从硬盘第1个柱面开始 +1G:分区大小 ")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式化分区")]),s._v("\nmkfs.ext4 /dev/sdb1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 挂在指定目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" music\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/sdb1 /music\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消挂载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /music\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 /etc/fstab 实现自动挂在")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先查看分区的label和uuid")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简单")]),s._v("\nblkid\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复杂")]),s._v("\ndumpe2fs -h /dev/sdb1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 　使用设备名称（/dev/sda)来挂载分区时是被固定死的，一旦磁盘的插槽顺序发生了变化，就会出现名称不对应的问题。因为这个名称是会改变的。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#　　不过使用label挂载就不用担心插槽顺序方面的问题。不过要随时注意你的Label name。至于UUID，每个分区被格式化以后都会有一个UUID作为唯一的标识号。使用uuid挂载的话就不用担心会发生错乱的问题了。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 具体参数见 https://czy1024.github.io/blog/blog/autoMount.html")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eg: UUID=2ccac64a-01cc-4fc7-ae85-ad7ea1fca89c /music    ext4   defaults    0     0"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启后 执行 mountpoint  music/ 查看是否配置成功")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"此时的music只是45行创建的测试目录"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 交换分区  磁盘如被挂在无法转为交换分区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看交换分区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swapon")]),s._v(" -s \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将分区转为交换分区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkswap")]),s._v(" /dev/sdb1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 激活")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swapon")]),s._v(" /dev/sdb1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消激活交换分区")]),s._v("\nswapoff /dev/sdb1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩解压见  https://czy1024.github.io/blog/blog/linux_tar.html")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户操作  https://czy1024.github.io/blog/blog/linux_user_group.html")]),s._v("\nadduser luna-1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加用户 生成目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" luna-2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加用户 生成目录")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# usermod ")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进程管理")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" xxx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死进程 参数 1 (HUP)：重新加载进程。9 (KILL)：杀死一个进程。 15 (TERM)：正常停止一个进程。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 pid\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" xxx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进程启动后台执行 输出重定向")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 后台执行echo "hello" 并将输出到pro.log 文件')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/pro.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网络配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先ifconfig 查看网卡名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nauto ens33\niface ens33 inet static　  # 设置静态IP，动态的是将static修改为dhcp，如果设置为动态IP无法设置虚拟网卡\naddress 172.16.2.95　　　  # 如果为动态IP以下的都不用配置。\nnetmask 255.255.255.0        # 子网掩码\ngateway 172.16.254.254     # 网关 ->上级路由\n"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启网卡")]),s._v("\n/etc/init.d/networking restart\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"安装ssh"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-server -y\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/ssh restart\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/ssh/sshd_config")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开启root登陆"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/#PermitRootLogin prohibit-password/PermitRootLogin yes/g'")]),s._v(" /etc/ssh/sshd_config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/ssh restart\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 免密登录 将客户端公钥放入服务器authorized_keys文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#客户端执行: scp ~/.ssh/id_rsa.pub  root@172.16.22.2:/tmp/id_rsa.pub ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务端执行: cat /tmp/id_rsa.pub >> ~/.ssh/authorized_keys")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nsystemctl  start sshd\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止")]),s._v("\nsystemctl  stop sshd\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机自启动")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" sshd\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#取消开机运行")]),s._v("\nsystemctl disable sshd \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建自定义服务模仿 cat /etc/systemd/system/sshd.service")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网络安全")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nmap 官网:http://www.nmap.com.cn/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 扫描端口 将指定ip 1-65535端口扫描结果保存到 /tmp/result.txt")]),s._v("\nnmap -sS -O -p1-65535 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" -o /tmp/result.txt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# iptables 限制ip访问22")]),s._v("\niptables -A INPUT -p tcp --dport "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".100.1/24 -j DROP\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看规则")]),s._v("\niptables -nL --line-number\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除规则")]),s._v("\niptables -D INPUT "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# shell 编程 锁定用户id大于多少的用户 脚本地址: https://github.com/czy1024/luna-linux-conf/blob/master/ubuntu/lockuser_if_userid_gt_x.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" userlock.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x ./userlock.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 锁定用户id大于100的用户")]),s._v("\n./userlock.sh "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户计划")]),s._v("\nat "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":00\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入命令后 ctrl + D 结束")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用脚本")]),s._v("\nat "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":00 -f ~/luna\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# atq查看设置的计划")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除计划")]),s._v("\natrm x "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# x为查询的任务编号")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" crontabs\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# crontab 三个文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 系统管理 root用户: /etc/crontab 系统任务 /etc/cron.d 实际工作中与前一个地位相同")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于每天,每小时,没星期等文件分别在 /etc/cron.xxxx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 普通用户的在 /var/spool/cron 目录 以用户名命名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为普通用户安装crontab filename 为用户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" filename\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -e 编辑器打开,完成编辑后保存提交 -l 列出用户的crontab文件的内容 -r 删除自己的crontab 文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 管理员可建立 /etc/cron.allow 和 /etc/cron.deny 表示用户是否可以创建计划任务 并且 allow>deny")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并且管理员可用 -u 指定操作用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eg: sudo crontab -u luna luna_make"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给luna 指定crontab 文件 luna_make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eg: sudo crontab -u luna -r"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除luna 的crontab文件")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例：晚上11点到早上7点之间，每隔一小时重启smb ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/crontab "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF \n* 23-7/1 * * * /etc/init.d/smb restart\nEOF")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 详见 https://czy1024.github.io/blog/blog/linux_crontab.html")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# shell 编程 禁止用户id大于多少的用户提交计划 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#脚本地址: https://github.com/czy1024/luna-linux-conf/blob/master/ubuntu/uncrontab_if_user_gt_x.sh")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br"),t("span",{staticClass:"line-number"},[s._v("99")]),t("br"),t("span",{staticClass:"line-number"},[s._v("100")]),t("br"),t("span",{staticClass:"line-number"},[s._v("101")]),t("br"),t("span",{staticClass:"line-number"},[s._v("102")]),t("br"),t("span",{staticClass:"line-number"},[s._v("103")]),t("br"),t("span",{staticClass:"line-number"},[s._v("104")]),t("br"),t("span",{staticClass:"line-number"},[s._v("105")]),t("br"),t("span",{staticClass:"line-number"},[s._v("106")]),t("br"),t("span",{staticClass:"line-number"},[s._v("107")]),t("br"),t("span",{staticClass:"line-number"},[s._v("108")]),t("br"),t("span",{staticClass:"line-number"},[s._v("109")]),t("br"),t("span",{staticClass:"line-number"},[s._v("110")]),t("br"),t("span",{staticClass:"line-number"},[s._v("111")]),t("br"),t("span",{staticClass:"line-number"},[s._v("112")]),t("br"),t("span",{staticClass:"line-number"},[s._v("113")]),t("br"),t("span",{staticClass:"line-number"},[s._v("114")]),t("br"),t("span",{staticClass:"line-number"},[s._v("115")]),t("br"),t("span",{staticClass:"line-number"},[s._v("116")]),t("br"),t("span",{staticClass:"line-number"},[s._v("117")]),t("br"),t("span",{staticClass:"line-number"},[s._v("118")]),t("br"),t("span",{staticClass:"line-number"},[s._v("119")]),t("br"),t("span",{staticClass:"line-number"},[s._v("120")]),t("br"),t("span",{staticClass:"line-number"},[s._v("121")]),t("br"),t("span",{staticClass:"line-number"},[s._v("122")]),t("br"),t("span",{staticClass:"line-number"},[s._v("123")]),t("br"),t("span",{staticClass:"line-number"},[s._v("124")]),t("br"),t("span",{staticClass:"line-number"},[s._v("125")]),t("br"),t("span",{staticClass:"line-number"},[s._v("126")]),t("br"),t("span",{staticClass:"line-number"},[s._v("127")]),t("br"),t("span",{staticClass:"line-number"},[s._v("128")]),t("br"),t("span",{staticClass:"line-number"},[s._v("129")]),t("br"),t("span",{staticClass:"line-number"},[s._v("130")]),t("br"),t("span",{staticClass:"line-number"},[s._v("131")]),t("br"),t("span",{staticClass:"line-number"},[s._v("132")]),t("br"),t("span",{staticClass:"line-number"},[s._v("133")]),t("br"),t("span",{staticClass:"line-number"},[s._v("134")]),t("br"),t("span",{staticClass:"line-number"},[s._v("135")]),t("br"),t("span",{staticClass:"line-number"},[s._v("136")]),t("br"),t("span",{staticClass:"line-number"},[s._v("137")]),t("br"),t("span",{staticClass:"line-number"},[s._v("138")]),t("br"),t("span",{staticClass:"line-number"},[s._v("139")]),t("br"),t("span",{staticClass:"line-number"},[s._v("140")]),t("br"),t("span",{staticClass:"line-number"},[s._v("141")]),t("br"),t("span",{staticClass:"line-number"},[s._v("142")]),t("br"),t("span",{staticClass:"line-number"},[s._v("143")]),t("br"),t("span",{staticClass:"line-number"},[s._v("144")]),t("br"),t("span",{staticClass:"line-number"},[s._v("145")]),t("br"),t("span",{staticClass:"line-number"},[s._v("146")]),t("br"),t("span",{staticClass:"line-number"},[s._v("147")]),t("br"),t("span",{staticClass:"line-number"},[s._v("148")]),t("br"),t("span",{staticClass:"line-number"},[s._v("149")]),t("br"),t("span",{staticClass:"line-number"},[s._v("150")]),t("br"),t("span",{staticClass:"line-number"},[s._v("151")]),t("br"),t("span",{staticClass:"line-number"},[s._v("152")]),t("br"),t("span",{staticClass:"line-number"},[s._v("153")]),t("br"),t("span",{staticClass:"line-number"},[s._v("154")]),t("br"),t("span",{staticClass:"line-number"},[s._v("155")]),t("br"),t("span",{staticClass:"line-number"},[s._v("156")]),t("br"),t("span",{staticClass:"line-number"},[s._v("157")]),t("br"),t("span",{staticClass:"line-number"},[s._v("158")]),t("br"),t("span",{staticClass:"line-number"},[s._v("159")]),t("br"),t("span",{staticClass:"line-number"},[s._v("160")]),t("br"),t("span",{staticClass:"line-number"},[s._v("161")]),t("br"),t("span",{staticClass:"line-number"},[s._v("162")]),t("br"),t("span",{staticClass:"line-number"},[s._v("163")]),t("br"),t("span",{staticClass:"line-number"},[s._v("164")]),t("br"),t("span",{staticClass:"line-number"},[s._v("165")]),t("br"),t("span",{staticClass:"line-number"},[s._v("166")]),t("br"),t("span",{staticClass:"line-number"},[s._v("167")]),t("br"),t("span",{staticClass:"line-number"},[s._v("168")]),t("br"),t("span",{staticClass:"line-number"},[s._v("169")]),t("br"),t("span",{staticClass:"line-number"},[s._v("170")]),t("br"),t("span",{staticClass:"line-number"},[s._v("171")]),t("br"),t("span",{staticClass:"line-number"},[s._v("172")]),t("br"),t("span",{staticClass:"line-number"},[s._v("173")]),t("br"),t("span",{staticClass:"line-number"},[s._v("174")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);