<template>
    <el-scrollbar>
        <h1 style="text-align: center;"> 1. 设计指令系统 </h1>
        <el-scrollbar>
            <div class="scrollbar-flex-content">
                
                <template class="scrollbar-demo-itemIn">
                    <ul>
                        <h4 style="text-align: center; font-size: 20px;">(1)设计原则</h4>
                        <li>应尽量短</li>
                        <li>要有足够的操作码位数</li>
                        <li>指令编码必须有唯一的解释，否则是不合法的指令</li>
                        <li>指令字长应是字节的整数倍</li>
                        <li>合理地选择地址字段的个数</li>
                        <li>指令尽量规整</li>
                    </ul>
                </template>

                <template class="scrollbar-demo-itemIn">
                    <ul style="width: 80%;">
                        <h4 style="text-align: center; font-size: 20px;">(2)设计的重要方面</h4>
                        <li><strong>操作码的全部组成</strong>：操作码个数 / 种类 / 复杂度 （主存读写、自增、跳转四种指令已足够编制任何可计算程序，但程序会很长）</li>
                        <li><strong>数据类型</strong>：对哪几种数据类型完成操作</li>
                        <li><strong>指令格式</strong>：指令长度 / 地址码个数 / 各字段长度</li>
                        <li><strong>通用寄存器</strong>：个数 / 功能 / 长度</li>
                        <li><strong>寻址方式</strong>：操作数地址的指定方式</li>
                        <li><strong>下条指令的地址如何确定</strong>：顺序，PC+1；条件转移；无条件转移······</li>
                        <li>一条指令的功能，一般通过对操作码进行不同的编码来定义；操作码相同时，再由功能码进行区分（例如MIPS的R型指令）</li>
                    </ul>
                </template>
            </div>
        </el-scrollbar>
        <p style="text-align: center;">
            <h1> 2. 操作数类型和存储方式 </h1>
            <p> 操作数：指令处理的对象，与高级语言的数据类型对应。操作数存放在寄存器或内存单元中 </p>   
        </p>
        <el-scrollbar>
            <div class="scrollbar-flex-content">
                <template class="scrollbar-demo-itemIn">
                    <ul>
                        <h4 style="text-align: center; font-size: 20px;">（1）指令应涉及的基本数据类型</h4>
                        <img src="../assets/MindMap1.svg" alt="Mind Map" style="display: block; margin: auto; width: 100%; height: auto;"/>
                    </ul>
                </template>
                <template class="scrollbar-demo-itemIn">
                    <ul>
                        <h4 style="text-align: center; font-size: 20px;">（2）IA32和MIPS中的数据类型</h4>
                        <h5> IA-32（英特尔32位体系架构，80386开始采用） </h5>
                        <li> 基本类型：字节、字（16位）、双字（32位）、四字（64位） </li>
                        <li> 整数： 16位、32位、64位三种2-补码表示的整数；18位压缩8421 BCD码表示的十进制整数 </li>
                        <li> 无符号整数（8、16或32位） </li>
                        <li> 近指针：32位段内偏移（有效地址） </li>
                        <li> 浮点数：IEEE 754（80位扩展精度浮点数寄存器） </li>
                        <h5> MIPS </h5>
                        <li> 基本类型：字节、半字（16位）、字（32位）、四字（64位） </li>
                        <li> 整数： 16位、32位、64位三种2-补码表示的整数 </li>
                        <li> 无符号整数：（16、32位） </li>
                        <li> 浮点数：IEEE 754（32位/64位浮点数寄存器） </li>
                    </ul>
                </template>
            </div>
        </el-scrollbar>
        <p style="text-align: center;">
            <h1> 3.指令设计风格 </h1> 
        </p>
        <el-scrollbar>
            <div class="scrollbar-flex-content">
                <template class="scrollbar-demo-itemIn">
                    <ul>
                        <h4 style="text-align: center; font-size: 20px;">四种指令风格</h4>
                        <img src="../assets/MindMap2.svg" alt="Mind Map" style="display: block; margin: auto; width: 70%; height: auto;"/>
                    </ul>
                </template>
                <template class="scrollbar-demo-itemIn">
                    <ul>
                        <h4 style="text-align: center; font-size: 20px;">指令风格比较</h4>
                        <img src="../assets/MindMap3.svg" alt="Mind Map" style="display: block; margin: auto; width: 75%; height: auto;"/>
                    </ul>
                </template>
                <template class="scrollbar-demo-itemIn">
                    <ul>
                        <h4 style="text-align: center; font-size: 20px;"> 复杂指令集计算机CISC</h4>
                        <img src="../assets/MindMap4.svg" alt="Mind Map" style="display: block; margin: auto; width: 75%; height: auto;"/>
                    </ul>
                </template>
                <template class="scrollbar-demo-itemIn">
                    <ul>
                        <h4 style="text-align: center; font-size: 20px;"> 精简指令集计算机RISC</h4>
                        <img src="../assets/MindMap5.svg" alt="Mind Map" style="display: block; margin: auto; width: 100%; height: auto;"/>
                    </ul>
                </template>
            </div>
        </el-scrollbar>
    </el-scrollbar>
</template>

<style scoped>  
#jsmind_container {
  width: 100%;
  height: 100vh;
}
.scrollbar-demo-itemOut {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    margin: 20px;
    text-align: center;
    border-radius: 30px;
    background: rgb(250, 248, 107);
    color: black;
}
.scrollbar-flex-content {
    display: flex;
}
.scrollbar-demo-itemIn {
    flex-shrink: 0;    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 800px;
    height: 400px;
    margin: 20px;
    /* text-align: center; */
    border-radius: 30px;
    background: rgb(250, 248, 107);
    color: black;
}
</style>