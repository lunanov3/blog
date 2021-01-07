(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{363:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"review-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#review-mysql"}},[s._v("#")]),s._v(" Review mysql")]),s._v(" "),t("h3",{attrs:{id:"库管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#库管理"}},[s._v("#")]),s._v(" 库管理")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("一、创建库\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" 【"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v("】 库名【 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" 字符集名】"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n二、修改库\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" 库名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" 字符集名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n三、删除库\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" 【"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v("】 库名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"表管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表管理"}},[s._v("#")]),s._v(" 表管理")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("一、创建表 ★\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 【"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v("】 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t字段名 字段类型 【约束】"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t字段名 字段类型 【约束】"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t。。。\n\t字段名 字段类型 【约束】 \n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n二、修改表\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("添加列\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 列名 类型 【"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("first")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" 字段名】"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("修改列的类型或约束\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 列名 新类型 【新约束】"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v("修改列名\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 change "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 旧列名 新列名 类型"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("删除列\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 列名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v("修改表名\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rename")]),s._v(" 【"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v("】 新表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n三、删除表\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v("【"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v("】 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n四、复制表\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、复制表的结构\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" 旧表"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、复制表的结构"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("数据\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 查询列表 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 旧表【"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 筛选】"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("h3",{attrs:{id:"类型约束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型约束"}},[s._v("#")]),s._v(" 类型约束")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("一、数值型\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、整型\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tinyint")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("smallint")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mediumint")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("integer")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\n特点：\n①都可以设置无符号和有符号，默认有符号，通过"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v("设置无符号\n②如果超出了范围，会报"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" range异常，插入临界值\n③长度可以不指定，默认会有一个长度\n长度代表显示的最大宽度，如果不够则左边用"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("填充，但需要搭配zerofill，并且默认变为无符号整型\n\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、浮点型\n定点数："),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("decimal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("M"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("D"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n浮点数:\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("M"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("D"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("M"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("D"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\n特点：\n①M代表整数部位"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("小数部位的个数，D代表小数部位\n②如果超出范围，则报"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" range异常，并且插入临界值\n③M和D都可以省略，但对于定点数，M默认为"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("，D默认为"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n④如果精度要求较高，则优先考虑使用定点数\n\n二、字符型\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("binary")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varbinary")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("blob")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("：固定长度的字符，写法为"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("M"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，最大长度不能超过M，其中M可以省略，默认为"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),s._v("：可变长度的字符，写法为"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("M"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，最大长度不能超过M，其中M不可以省略\n\n三、日期型\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("year")]),s._v("年\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),s._v("日期\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v("时间\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" 日期"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("时间          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("      \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),s._v(" 日期"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("时间         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("   比较容易受时区、语法模式、版本的影响，更能反映当前时区的真实时间\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("h3",{attrs:{id:"常见约束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见约束"}},[s._v("#")]),s._v(" 常见约束")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("一、常见的约束\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("：非空，该字段的值必填\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNIQUE")]),s._v("：唯一，该字段的值不可重复\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v("：默认，该字段的值不用手动插入有默认值\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHECK")]),s._v("：检查，mysql不支持\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v("：主键，该字段的值不可重复并且非空  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v("：外键，该字段的值引用了另外的表的字段\n\n主键和唯一\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、区别：\n①、一个表至多有一个主键，但可以有多个唯一\n②、主键不允许为空，唯一可以为空\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、相同点\n都具有唯一性\n都支持组合键，但不推荐\n外键：\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、用于限制两个表的关系，从表的字段值引用了主表的某字段值\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、外键列和主表的被引用列要求类型一致，意义一样，名称无要求\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、主表的被引用列要求是一个"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v("（一般就是主键）\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、插入数据，先插入主表\n删除数据，先删除从表\n可以通过以下两种方式来删除主表的记录\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#方式一：级联删除")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" stuinfo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONSTRAINT")]),s._v(" fk_stu_major "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("majorid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" major"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASCADE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#方式二：级联置空")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" stuinfo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONSTRAINT")]),s._v(" fk_stu_major "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("majorid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" major"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n二、创建表时添加约束\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t字段名 字段类型 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#非空")]),s._v("\n\t字段名 字段类型 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主键")]),s._v("\n\t字段名 字段类型 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#唯一")]),s._v("\n\t字段名 字段类型 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" 值"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" 约束名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreign")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字段名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v(" 主表（被引用列）\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n注意：\n\t\t\t支持类型\t\t可以起约束名\t\t\t\n列级约束\t\t除了外键\t\t不可以\n表级约束\t\t除了非空和默认\t可以，但对主键无效\n\n列级约束可以在一个字段上追加多个，中间用空格隔开，没有顺序要求\n\n三、修改表时添加或删除约束\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、非空\n添加非空\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 字段名 字段类型 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n删除非空\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 字段名 字段类型 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、默认\n添加默认\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 字段名 字段类型 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" 值"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n删除默认\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 字段名 字段类型 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、主键\n添加主键\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v("【 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" 约束名】 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字段名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n删除主键\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、唯一\n添加唯一\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v("【 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" 约束名】 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字段名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n删除唯一\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" 索引名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("、外键\n添加外键\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v("【 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" 约束名】 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreign")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字段名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v(" 主表（被引用列）"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n删除外键\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreign")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" 约束名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n四、自增长列\n特点：\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、不用手动插入值，可以自动提供序列值，默认从"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("开始，步长为"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nauto_increment_increment\n如果要更改起始值：手动插入值\n如果要更改步长：更改系统变量\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" auto_increment_increment"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、一个表至多有一个自增长列\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、自增长列只能支持数值型\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、自增长列必须为一个"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v("\n\n一、创建表时设置自增长列\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t字段名 字段类型 约束 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n二、修改表时设置自增长列\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 字段名 字段类型 约束 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),s._v("\n三、删除自增长列\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 字段名 字段类型 约束 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);