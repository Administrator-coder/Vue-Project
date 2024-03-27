<template>
    <h1 style="text-align: center;">Java字节码</h1>
    
    <div class="stage">
        <br>
        <h2 style="text-align: center;color: grey;">概述</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学习 Java 的都知道，我们所编写的 <code>.java</code> 代码文件通过编译将会生成 <code>.class</code> 文件，最初的方式就是通过 JDK 的 <code>javac</code> 指令来编译，再通过 <code>java</code> 命令执行 main 方法所在的类，从而执行我们的 Java 程序。而在这中间所生成的 .class 文件中的内容，就是 JVM 可以处理运行的字节码（Byte Code），它由 JVM 解释为对应系统可运行的机器指令，这也是我们的 Java 程序能够做到一处编译处处执行的原理。</p>
        <h2 style="text-align: center;color: grey;">什么是字节码？</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java之所以可以“一次编译，到处运行”。</p>
        <ul>
            <li>一是因为JVM针对各种操作系统、平台都进行了定制。</li>
            <li>二是因为无论在什么平台，都可以编译生成固定格式的字节码（.class文件）供JVM使用。</li>
        </ul>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，也可以看出字节码对于Java生态的重要性。之所以被称之为字节码，是因为字节码文件由十六进制值组成，而JVM以两个十六进制值为一组，即以字节为单位进行读取。在Java中一般是用javac命令编译源代码为字节码文件，一个<code>.java</code>文件从编译到运行的示例如下：</p>
        <img src="../assets/bytecode1.png" style="display: block; margin: auto; width: 100%;">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于 Java 开发人员来说，平时需要阅读 Byte Code 的场景比较少，但和阅读框架源码能够了解到框架的设计思路一样，阅读 Java Byte Code 也有利于我们理解 Java 一些深层的东西，提高我们解决问题的能力。能够阅读 Byte Code 也有利于我们去理解 <a href="https://book.kotlincn.net/text/getting-started.html"> Kotlin </a> 或其它运行在 JVM 上的语言，是如何扩展 Java 所没有的特性或语法。</p>
        <h2 style="text-align: center;color: grey;">指令的执行过程</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 Java 程序从 <code>main()</code> 方法开始，我们也是从这个方法的指令开始进行分析。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设程序运行 0 号指令前的状态如下，在 mian 方法栈帧里面，有着 operand stack（操作数栈），它的最大长度为 2（与 Code 下的 stack 的值一致），此外还有一个 local variable（本地变量表）来存放变量的值，其中下标为 0 的变量为主方法的参数 args，我们直接用这个字符串填充在那里来做一个标识（实际的值可能是一个空数组）。</p>
        <img src="../assets/bytecode2.png" style="display: block; margin: auto; width: 100%;">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来我们一步步执行方法中的指令，在这里我们先对出现的几个指令做一个简单的介绍：</p>
        <ul>
            <li><code>iconst_&lt;i&gt;</code> 放一个 int 常量（-1, 0, 1, 2, 3, 4 or 5) 到 operand stack 中</li>
            <li><code>istore_&lt;n&gt;</code> 从 operand stack 中获取一个 int 到 local variable 的 n 中</li>
            <li><code>iload_&lt;n&gt;</code> 从 local variable 中读取 int 变量 n 的值到操作数栈中</li>
            <li><code>invokestatic</code> 调用一个 class 的 static 方法</li>
            <li><code>getstatic</code> 从 class 中获取一个 static 字段</li>
            <li><code>invokevirtual</code> 调用一个实例方法，基于类的调度</li>
            <li><code>return</code> 从方法中返回一个 void，<code>ireturn</code> 从方法中返回 operand stack 栈顶的 int</li>
        </ul>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在我们开始分析指令的执行，我们在上面知道了，我们的 Java 代码所对应的指令分别是偏移量为 0 和 1 的两个，最开始执行的是 <code>0: iconst_1</code>，该指令会把 int 常量 1 放置到 operand stack 中，之后执行的是 <code>1: istore_1</code>，把 operand stack 栈顶的 int 常量取出放到 local variable 下标为 1 的变量中，该过程图示如下。</p>
        <img src="../assets/bytecode3.png" style="display: block; margin: auto; width: 100%;">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以通过查看 LocalVariableTable 得知下标为 1 的变量在我们的 Java 程序中是 int 变量 a，因此上面这两条指令常量 1 赋值给变量 a。同样的，后面两条指令则是将常量 1 赋值给变量 b。这里要注意，操作数栈的数是被取出操作，被取出的数将不会继续在 operand stack 里面。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行完 0~3 这 4 条指令后，就来到了本例中最为关键的方法调用了。在执行 <code>iload_1</code> 和 <code>iload_2</code> 后，operand stack 中将会存放着变量 a 和 b 的值，作为 <code>invokestatic</code> 调用函数时传入的参数。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而执行到 <code>invokestatic #2</code> 这个指令的时候，该指令为调用一个 class 的 static 方法，也就是调用常量池中 <code>#2</code> 的方法，该方法为 <code>Hello.add:(II)I</code> 。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当执行 invokestatic 时会依次读取 operand stack 的数据作为方法的参数，并创建一个新的栈帧来执行方法，将数据放到 local variable 对应变量位置。</p>
        <img src="../assets/bytecode4.png" style="display: block; margin: auto; width: 100%;">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;之后开始执行 <code>add()</code> 方法中的指令，首先执行的是两个 <code>iload</code> 指令，将 loca variable 对应下标的变量的值放到 operand stack 中，之后执行 <code>iadd</code> 取出 operand stack 中的值并进行加法运算，再把结果放到，最后执行 ireturn 取出 operand stack 顶部的 int 值进行返回。</p>
        <img src="../assets/bytecode5.png" style="display: block; margin: auto; width: 100%;">
        <img src="../assets/bytecode6.png" style="display: block; margin: auto; width: 100%;">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当执行完 <code>ireturn</code> 后，add 方法也就执行完成了，对应的栈帧也会跟着销毁。之后回到 main 方法中继续往下执行，到 <code>istore_3</code> 指令，该指令将栈顶的 int 值取出放到了 local variable 中 Solt 为 3 的地方，这样执行完 4~9 这几条指令后就完成了我们代码中的 <code>int c = add(a, b);</code> 这一行代码。那么接下来就是执行 <code>System.out.println(c);</code> 对应的指令将 2 打印到控制台了。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到这里其实我们就已经知道如何去阅读我们代码生成的 Byte Code 了，阅读过程中如果遇到了没见过的指令，我们可以在 <a href="https://docs.oracle.com/javase/specs/jvms/se16/html/jvms-6.html">Oracle 官方指令文档</a>里面查阅对应的说明。</p>
        <br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDis: false
        }
    },
    methods: {
        ShowDis() {
            
        }
    }
    
}
</script>

<style>
.stage {
  box-shadow: var(--el-box-shadow-dark);
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
  height: auto;
  background-color: #ffffff;
  margin-top: 20px;
}
</style>