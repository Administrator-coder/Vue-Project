<template>
  <h1 style="text-align: center;">处理器计算过程</h1>
  <div style="width: 60%; height: auto; margin: auto;">
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处理器（也称为中央处理单元或CPU）是计算机的“大脑”，它负责执行计算机程序中的指令。处理器的工作可以分为几个基本步骤，这些步骤通常被称为"取指、译码、执行、访存、回写"的五个阶段。</p>
    <ol>
      <li><strong>取指（Fetch）</strong></li>
      <li><strong>译码（Decode）</strong></li>
      <li><strong>执行（Execute）</strong></li>
      <li><strong>访存（Memory Access）</strong></li>
      <li><strong>回写（Write back）</strong></li>
    </ol>
  </div>
  <el-button @click="nextStep" type="success" style="display: block; margin: auto;">下一步</el-button>
  <div class="demo-progress"> <el-progress :text-inside="true" :stroke-width="26" :percentage="Percentage"/> </div>
  <transition name="fade" style="text-align: center;">
    <p v-if="step === 1">正在取指...</p>
    <p v-else-if="step === 2">正在译码...</p>
    <p v-else-if="step === 3">正在执行...</p>
    <p v-else-if="step === 4">正在访存...</p>
    <p v-else-if="step === 5">正在回写...</p>
  </transition>
  <div v-if=" step === 1 " class="stage">
    <br>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取指令（Instruction Fetch，IF）阶段是将一条指令从主存中取到指令寄存器的过程。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;程序计数器PC中的数值，用来指示当前指令在主存中的位置。当一条指令被取出后，PC中的数值将根据指令字长度而自动递增：若为单字长指令，则(PC)+1àPC；若为双字长指令，则(PC)+2àPC，依此类推。</p>
    <br>
  </div>
  <div v-else-if=" step === 2 " class="stage">
    <br>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取出指令后，计算机立即进入指令译码（Instruction Decode，ID）阶段。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在指令译码阶段，指令译码器按照预定的指令格式，对取回的指令进行拆分和解释，识别区分出不同的指令类别以及各种获取操作数的方法。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在组合逻辑控制的计算机中，指令译码器对不同的指令操作码产生不同的控制电位，以形成不同的微操作序列；在微程序控制的计算机中，指令译码器用指令操作码来找到执行该指令的微程序的入口，并从此入口开始执行。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在传统的设计里，CPU中负责指令译码的部分是无法改变的。不过，在众多运用微程序控制技术的新型CPU中，微程序有时是可重写的，可以通过修改成品CPU来改变CPU的译码方式。</p>
    <br>
  </div>
  <div v-else-if=" step === 3 " class="stage">
    <br>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在取指令和指令译码阶段之后，接着进入执行指令（Execute，EX）阶段。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此阶段的任务是完成指令所规定的各种操作，具体实现指令的功能。为此，CPU的不同部分被连接起来，以执行所需的操作。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，如果要求完成一个加法运算，算术逻辑单元ALU将被连接到一组输入和一组输出，输入端提供需要相加的数值，输出端将含有最后的运算结果。</p>
    <br>
  </div>
  <div v-else-if=" step === 4 " class="stage">
    <br>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据指令需要，有可能要访问主存，读取操作数，这样就进入了访存取数（Memory，MEM）阶段。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此阶段的任务是：根据指令地址码，得到操作数在主存中的地址，并从主存中读取该操作数用于运算。</p>
    <br>
  </div>
  <div v-else-if=" step === 5 " class="stage">
    <br>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为最后一个阶段，结果写回（Writeback，WB）阶段把执行指令阶段的运行结果数据“写回”到某种存储形式：结果数据经常被写到CPU的内部寄存器中，以便被后续的指令快速地存取；在有些情况下，结果数据也可被写入相对较慢、但较廉价且容量较大的主存。许多指令还会改变程序状态字寄存器中标志位的状态，这些标志位标识着不同的操作结果，可被用来影响程序的动作。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在指令执行完毕、结果数据写回之后，若无意外事件（如结果溢出等）发生，计算机就接着从程序计数器PC中取得下一条指令地址，开始新一轮的循环，下一个指令周期将顺序取出下一条指令。</p>
    <br>
  </div>
  <div style="display: flex; justify-content: center; align-items: center;">
    <h1 style="margin-right: 10px;">I/O 控制方式 之 轮询方式</h1>
    <el-button circle @click="Search1"> ? </el-button>
  </div>
  <div v-if="dialogVisible1" class="stage"> 
    <br>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;轮询方式是忙等待的过程</p>
    <ol>
      <li>处理器向控制器发送一个 I/O 命令</li>
      <li>如果设备未就绪，则反复查看 I/O 状态，直至设备就绪</li>
      <li>执行数据交换</li>
    </ol>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特点</p>
    <ol>
      <li>处理 I/O 请求会终止原程序的执行</li>
      <li>CPU 需要参与数据传送</li>
      <li>CPU 与设备串行工作，效率低下</li>
    </ol>
    <br>
  </div>
  <div>
    <svg width="900" height="210" style="display: block; margin: auto;">
      <!-- 创建流程图的节点 -->
      <rect x="50" y="100" width="100" height="50" :style="{fill: color1, stroke: '#000000', strokeWidth: 2}"/>
      <text x="60" y="130">发出命令</text>

      <rect x="200" y="100" width="100" height="50" :style="{fill: color2, stroke: '#000000', strokeWidth: 2}"/>
      <text x="225" y="130">读状态</text>

      <rect x="350" y="100" width="100" height="50" :style="{fill: color3, stroke: '#000000', strokeWidth: 2}"/>
      <text x="360" y="130">检查状态</text>

      <rect x="500" y="100" width="100" height="50" :style="{fill: color4, stroke: '#000000', strokeWidth: 2}"/>
      <text x="510" y="130">读/写数据</text>

      <rect x="650" y="100" width="100" height="50" :style="{fill: color5, stroke: '#000000', strokeWidth: 2}"/>
      <text x="685" y="130">结束</text>

      <text x="800" y="130">下一条指令</text>
      <text x="383" y="40">出错</text>
      <text x="67" y="80">CPU->IO</text>
      <text x="220" y="80">IO->CPU</text>
      <text x="460" y="110">就绪</text>
      <text x="300" y="170">未就绪</text>
      <text x="760" y="115">Y</text>
      <text x="680" y="180">N</text>


      <!-- 创建流程图的箭头 -->
      <line x1="150" y1="125" x2="180" y2="125" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      <line x1="300" y1="125" x2="330" y2="125" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      <line x1="450" y1="125" x2="480" y2="125" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      <line x1="600" y1="125" x2="630" y2="125" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      <line x1="750" y1="125" x2="780" y2="125" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>

      <line x1="400" y1="100" x2="400" y2="70" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>

      <line x1="400" y1="150" x2="400" y2="175" style="stroke:#000000;stroke-width:2"/>
      <line x1="400" y1="175" x2="170" y2="175" style="stroke:#000000;stroke-width:2"/>
      <line x1="170" y1="175" x2="170" y2="150" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>

      <line x1="700" y1="150" x2="700" y2="200" style="stroke:#000000;stroke-width:2"/>
      <line x1="700" y1="200" x2="100" y2="200" style="stroke:#000000;stroke-width:2"/>
      <line x1="100" y1="200" x2="100" y2="170" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      
      <!-- 定义箭头样式 -->
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
        refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7"></polygon>
        </marker>
      </defs>
    </svg>
    <el-button @click="buttonClicked" type="success" style="display: block; margin: auto;">下一步</el-button>
  </div>
  <div style="display: flex; justify-content: center; align-items: center;">
    <h1 style="margin-right: 10px;">I/O 控制方式 之 中断方式</h1>
    <el-button circle @click="Search2"> ? </el-button>
  </div>
  <div v-if="dialogVisible2" class="stage"> 
    <br>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处理器向控制器发出 I/O 命令，然后继续执行后续指令</p>
    <ul>
      <li>如果该进程支持异步 I/O，则继续执行该进程。</li>
      <li>否则，进程在这个中断点挂起，CPU 执行其他程序。</li>
    </ul>
    <ol>
      <li>控制器检查设备状态，就绪后发起中断。</li>
      <li>CPU 响应中断，转向中断处理程序。</li>
      <li>中断处理程序执行数据读写操作。</li>
      <li>恢复执行原先程序。</li>
    </ol>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特点</p>
    <ol>
      <li>CPU 不需要等待 I/O 设备就绪</li>
      <li>CPU 仍需要参与数据传送（响应中断后，原程序会停止执行）</li>
      <li>CPU 和设备部分并行，效率提高</li>
    </ol>
    <br>
  </div>
  <div>
    <svg width="900" height="210" style="display: block; margin: auto;">
      <!-- 创建流程图的节点 -->
      <rect x="50" y="100" width="100" height="50" :style="{fill: '#ffffff', stroke: '#000000', strokeWidth: 2}"/>
      <text x="60" y="130">发出命令</text>

      <rect x="200" y="100" width="100" height="50" :style="{fill: '#ffffff', stroke: '#000000', strokeWidth: 2}"/>
      <text x="225" y="130">检查状态</text>

      <rect x="350" y="100" width="100" height="50" :style="{fill: '#ffffff', stroke: '#000000', strokeWidth: 2}"/>
      <text x="352" y="130">中断处理程序</text>

      <rect x="500" y="100" width="100" height="50" :style="{fill: '#ffffff', stroke: '#000000', strokeWidth: 2}"/>
      <text x="510" y="130">读/写数据</text>

      <rect x="650" y="100" width="100" height="50" :style="{fill: '#ffffff', stroke: '#000000', strokeWidth: 2}"/>
      <text x="685" y="130">结束</text>

      <text x="800" y="130">下一条指令</text>
      <text x="235" y="40">中断</text>
      <text x="40" y="40">继续执行后续指令</text>
      <text x="105" y="70">CPU->IO</text>
      <text x="255" y="70">IO->CPU</text>
      <text x="310" y="150">就绪</text>
      <text x="760" y="115">Y</text>
      <text x="680" y="180">N</text>


      <!-- 创建流程图的箭头 -->
      <!-- <line x1="150" y1="125" x2="180" y2="125" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/> -->
      <line x1="300" y1="125" x2="330" y2="125" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      <line x1="450" y1="125" x2="480" y2="125" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      <line x1="600" y1="125" x2="630" y2="125" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      <line x1="750" y1="125" x2="780" y2="125" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>

      <line x1="250" y1="50" x2="250" y2="80" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      <line x1="100" y1="50" x2="100" y2="80" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>

      <line x1="700" y1="150" x2="700" y2="200" style="stroke:#000000;stroke-width:2"/>
      <line x1="700" y1="200" x2="100" y2="200" style="stroke:#000000;stroke-width:2"/>
      <line x1="100" y1="200" x2="100" y2="170" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      
      <!-- 定义箭头样式 -->
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
        refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7"></polygon>
        </marker>
      </defs>
    </svg>
  </div>
  <div style="display: flex; justify-content: center; align-items: center;">
    <h1 style="margin-right: 10px;">I/O 控制方式 之 DMA方式</h1>
    <el-button circle @click="Search3"> ? </el-button>
  </div>
  <div v-if="dialogVisible3" class="stage"> 
    <br>
    <h4 style="text-align: center;"> DMA模块</h4>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DMA: 直接存储器访问</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DMA 模块: 模仿处理器来控制主存和设备控制器之间的数据交换</p>
    <img src="../assets/DMA.webp" style="display: block; margin: auto;"/>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;具体流程</p>
    <ol>
      <li>处理器向 DMA 模块发出 I/O 命令</li>
      <li>处理器继续执行其它工作，DMA 模块负责传送全部数据</li>
      <li>数据传送结束后，DMA 中断处理器</li>
    </ol>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特点</p>
    <ol>
      <li>CPU 不会终止原程序的执行（CPU 无须等待 I/O 设备就绪，也无需进行数据传送）</li>
      <li>CPU 只在数据传送的开始和结束时参与</li>
    </ol>
    <ul>
      <li>开始时，CPU 需要对 DMA 模块进行初始化</li>
      <li>结束时，CPU 响应中断，但不必保存现场</li>
    </ul>
    <h4 style="text-align: center;"> DMA 方式中的周期窃取</h4>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当 DMA 和 CPU 同时经总线访问内存时，CPU 总是将总线的占有权让给 DMA 一个或几个主存周期。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于 CPU 大部分情况下与 Cache 进行数据交换，因此周期窃取对 CPU 与主存的数据交换速率影响不大。</p>
    <img src="../assets/zqqq.webp" style="display: block; margin: auto;"/>
    <br>
  </div>
  <div>
    <svg width="450" height="200" style="display: block; margin: auto;">
      <!-- 创建流程图的节点 -->
      <rect x="50" y="100" width="100" height="50" :style="{fill: '#ffffff', stroke: '#000000', strokeWidth: 2}"/>
      <text x="60" y="120">向DMA模块</text>
      <text x="70" y="140">发出命令</text>

      <rect x="200" y="100" width="100" height="50" :style="{fill: '#ffffff', stroke: '#000000', strokeWidth: 2}"/>
      <text x="215" y="120">读DMA模</text>
      <text x="225" y="140">块状态</text>

      <text x="350" y="130">下一条指令</text>
      <text x="235" y="40">中断</text>
      <text x="40" y="40">继续执行后续指令</text>
      <text x="105" y="70">CPU->DMA</text>
      <text x="255" y="70">DMA->CPU</text>


      <!-- 创建流程图的箭头 -->
      <line x1="300" y1="125" x2="330" y2="125" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>

      <line x1="250" y1="50" x2="250" y2="80" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      <line x1="100" y1="50" x2="100" y2="80" style="stroke:#000000;stroke-width:2" marker-end="url(#arrowhead)"/>
      
      <!-- 定义箭头样式 -->
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
        refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7"></polygon>
        </marker>
      </defs>
    </svg>
  </div>
  <h1 style="text-align: center;">三类 I/O 控制方式总结</h1>
  <div class="stage">
    <br>
    <ul>
      <li>轮询方式：CPU 需要等待设备就绪，且参与数据传送。</li>
      <li>中断方式：CPU 无需等待设备就绪，但响应中断后参与数据传送。</li>
      <li>DMA方式：CPU 在数据传送开始和结束时参与，与主存进行数据交换时不参与。</li>
    </ul>
    <img src="../assets/zj.png" style="display: block; margin: auto;"/>
    <br>
  </div>
  
</template>

<script>

export default {
  data() {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      step: 0,
      Percentage: 0,
      cur: 0,
      color1: '#ffffff',  // 初始颜色
      color2: '#ffffff',  // 初始颜色
      color3: '#ffffff',  // 初始颜色
      color4: '#ffffff',  // 初始颜色
      color5: '#ffffff',  // 初始颜色
    }
  },
  methods: {
    nextStep() {
      if (this.step < 5) {
        this.step += 1;
      } else {
        this.step = 1;
      }
    },
    buttonClicked() {
      if (this.cur === 0) {
        this.color1 = '#00ff00';
        this.cur = 1;
      } else if (this.cur === 1) {
        this.color1 = '#ffffff';
        this.color2 = '#00ff00';
        this.cur = 2;
      } else if (this.cur === 2) {
        this.color2 = '#ffffff';
        this.color3 = '#00ff00';
        this.cur = 3;
      } else if (this.cur === 3) {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber === 1) {
          this.color3 = '#ffffff';
          this.color4 = '#00ff00';
          this.cur = 4;
        } else if (randomNumber === 2) {
          this.color3 = '#ffffff';
          alert('出错！');
          this.cur = 0;
        } else {
          this.color3 = '#ffffff';
          this.color2 = '#00ff00';
          this.cur = 2;
        }
        
      } else if (this.cur === 4) {
        this.color4 = '#ffffff';
        this.color5 = '#00ff00';
        this.cur = 5;
      } else if (this.cur === 5) {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        this.color5 = '#ffffff';
        if (randomNumber === 1) {
          this.cur = 0;
        } else {
          this.color1 = '#00ff00';
          this.cur = 1;
        }
      }
    },
    Search1() {
      this.dialogVisible1 = true;
    },
    Search2() {
      this.dialogVisible2 = true;
    },
    Search3() {
      this.dialogVisible3 = true;
    }
  },
  watch: {
    step() {
      this.Percentage = this.step * 20;
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

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

.fly-enter-active {
  animation: fly-in .5s;
}

@keyframes fly-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
  margin: auto;
}
</style>
