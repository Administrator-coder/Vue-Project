<template>
    <div class="container">
        <h1>计算机内存编址方式</h1>
        <div class="buttons">
            <button @click="selected = 'bit'">按位编址</button>
            <button @click="selected = 'word'">按字编址</button>
            <button @click="selected = 'byte'">按字节编址</button>
        </div>
        <transition name="fade">
            <div class="description" v-if="selected">
            <div v-if="selected === 'bit'">
                <p>按位编址是计算机内存管理中的一种技术，它允许对计算机内存中的单个位进行访问和操作。这是一种非常低级的内存管理方式，通常只在需要进行精确控制和优化的情况下使用。</p>
                <p>在大多数现代计算机系统中，最小的可寻址单元是字节，也就是8位。这意味着你不能直接访问单个位，而只能访问整个字节。然而，通过使用位操作符，你可以间接地访问和操作单个位。位操作符包括位与(&)，位或(|)，位非(~)，位异或(^)，左移(<<)和右移(>>)。</p>
                <p>例如，假设你有一个字节的内存，值为0110 1010，你可以使用位与操作符和一个掩码来访问第4位：</p>
                <pre><code>
    int x = 5; // 二进制表示为 101
    int y = x << 1; // 左移一位，结果为 1010，即十进制的10
                </code></pre>
                <p>在这个例子中，bit的值将是0000 1000，这意味着第4位是1。</p>
                <p>需要注意的是，按位编址和位操作都需要对二进制和计算机内存有深入的理解，而且在很多情况下，直接使用更高级的内存管理技术会更加方便和安全。</p>
            </div>
            <div v-if="selected === 'word'">
                <p>按字编址是计算机内存管理中的一种技术，它允许对计算机内存中的单个字进行访问和操作。在计算机科学中，"字"是一个相对的概念，其大小取决于特定的计算机架构。在许多系统中，一个字通常是16位、32位或64位。</p>
                <p>在按字编址的系统中，每个内存地址都对应一个字，而不是一个字节。这意味着，如果你有一个32位的字，那么你可以一次性读取或写入32位的数据，而不需要进行四次8位的操作。这可以提高数据传输的效率。</p>
                <p>例如，假设你在一个32位的系统中，你可以使用以下的C代码来读取和写入一个字：</p>
                <pre><code>
    int* p = (int*)0x1000; // 假设0x1000是一个有效的内存地址
    *p = 12345; // 将12345写入到内存地址0x1000
    int value = *p; // 从内存地址0x1000读取一个字
                </code></pre>
                <p>在这个例子中，<strong>*p = 12345;</strong>会将整数12345写入到内存地址0x1000，<strong> value = *p;</strong>会从内存地址0x1000读取一个字。</p>
                <p>需要注意的是，虽然按字编址可以提高数据传输的效率，但它也可能导致一些问题。例如，如果你试图读取或写入一个不是字边界的内存地址，你可能会遇到"对齐错误"。因此，当使用按字编址时，你需要确保你的内存地址是按字对齐的。</p>
            </div>
            <div v-if="selected === 'byte'">
                <p>按字节编址是计算机内存管理中的一种常见方式。在这种模式下，每个字节都有一个唯一的地址。这种方式的优势在于它允许对内存进行精细控制，因为字节（8位）是大多数计算机系统中最小的可寻址单位。</p>
                <p>例如，假设你有一个4字节的整数，你可以通过地址访问这个整数的任何一个字节。在C语言中，你可以这样做：</p>
                <pre><code>
    int num = 0x12345678; // 一个4字节的整数
    char* p = (char*)&num; // 将整数的地址转换为字节指针

    // 现在你可以访问这个整数的每一个字节
    char byte0 = p[0]; // 0x78
    char byte1 = p[1]; // 0x56
    char byte2 = p[2]; // 0x34
    char byte3 = p[3]; // 0x12
                </code></pre>
                <p>在这个例子中，p是一个指向num的字节指针，你可以使用它来访问num的每一个字节。注意，这个例子假设你的系统使用小端字节序，这意味着一个多字节值的最低字节存储在最低的地址处。如果你的系统使用大端字节序，那么你需要相应地调整字节的顺序。</p>
                <p>按字节编址的一个重要应用是处理字符串。在C语言中，字符串就是一个字节序列，以null（0x00）字节结束。你可以使用字节指针来访问和修改字符串中的每一个字符。</p>
                <p>总的来说，按字节编址是一种灵活而强大的内存管理方式，它允许程序员对内存进行精细控制。然而，这也意味着程序员需要对内存管理有深入的理解，并且需要小心地处理可能的错误，如越界访问和对齐错误。</p>
            </div>
            </div>
        </transition>
    </div>
    <h1 style="text-align: center;">虚拟内存</h1>
    <img src="../assets/DPJ.svg" @click="showInput = !showInput; showSolution=false" style="display: block; margin: auto;">
    <div v-if="showInput"  class="info-box">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>单片机</strong>是一种集成电路芯片，它包括微处理器、内存、输入/输出端口和其他必要的外围设备。单片机通常用于嵌入式系统和微控制器应用。
        <br>
        <strong>单片机的 CPU 是直接操作内存的「物理地址」</strong>
        <img src="../assets/DPJnc.png" style="display: block; margin: auto;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这种情况下，要想在内存中同时运行两个程序是不可能的。如果第一个程序在 2000 的位置写入一个新的值，将会擦掉第二个程序存放在相同位置上的所有内容，所以同时运行两个程序是根本行不通的，这两个程序会立刻崩溃。
        <button @click="showSolution = !showSolution"> How to Solve ? </button>
    </div>
    <div v-if="showSolution" class="info-box">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以把进程所使用的地址「隔离」开来，即<strong>让操作系统为每个进程分配独立的一套「虚拟地址」</strong>，人人都有，大家自己玩自己的地址就行，互不干涉。但是<strong>有个前提每个进程都不能访问物理地址</strong>，至于虚拟地址最终怎么落到物理内存里，对进程来说是透明的，操作系统已经把这些都安排的明明白白了。
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>操作系统会提供一种机制，将不同进程的虚拟地址和不同内存的物理地址映射起来。</strong>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果程序要访问虚拟地址的时候，由操作系统转换成不同的物理地址，这样不同的进程运行的时候，写入的是不同的物理地址，这样就不会冲突了。
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;于是，这里就引出了两种地址的概念：
        <ul>
            <li>我们程序所使用的内存地址叫做<strong>虚拟内存地址</strong>（<em>Virtual Memory Address</em>）</li>
            <li>实际存在硬件里面的空间地址叫<strong>物理内存地址</strong>（<em>Physical Memory Address</em>）。</li>
        </ul>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;操作系统引入了虚拟内存，<strong>进程持有的虚拟地址会通过 CPU 芯片中的内存管理单元（MMU）的映射关系，来转换变成物理地址，然后再通过物理地址访问内存</strong>，如下图所示：
        <img src="../assets/nnnc.png" style="display: block; margin: auto; width: 100%">
    </div>
    <h1 style="text-align: center;">内存分段</h1>
    <div class="info-box">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;程序是由若干个逻辑分段组成的，如可由代码分段、数据分段、栈段、堆段组成。不同的段是有不同的属性的，所以就用分段（<em>Segmentation</em>）的形式把这些段分离出来。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分段机制下的虚拟地址由两部分组成，<strong>段选择子</strong>和<strong>段内偏移量</strong>。</p>
        <img src="../assets/nnncxx.png" style="display: block; margin: auto; width: 100%">
        <p>内存分段-寻址的方式</p>
        <ul>
            <li> <p><strong>段选择子</strong>就保存在段寄存器里面。段选择子里面最重要的是<strong>段号</strong>，用作段表的索引。<strong>段表</strong>里面保存的是这个<strong>段的基地址、段的界限和特权等级</strong>等。</p> </li>
            <li> <p>虚拟地址中的<strong>段内偏移量</strong>应该位于 0 和段界限之间，如果段内偏移量是合法的，就将段基地址加上段内偏移量得到物理内存地址。</p> </li>
        </ul>
        <div style="display: flex;">
            <img src="../assets/ncfd.png" style="width: 98%;"> <!-- 418px-11px=407px 11px 38px-->
            <div style="width: 20px; height: auto; background-color: orange;">
                <div style="position: relative; height: 100%;">
                    <div :style="{position: 'absolute', top: 0, width: '100%', height: off + 'px', backgroundColor: 'gray'}"></div>
                    <div :style="{position: 'absolute', bottom: 0, width: '100%', height: start + 'px', backgroundColor: 'gray'}"></div>
                </div>
            </div>
        </div>
        <div>
            段基地址：<el-input v-model.number="selector" placeholder="请输入段基地址" style="width: 200px;"></el-input>
            段内偏移量：<el-input v-model.number="offset" placeholder="请输入段内偏移量" style="width: 200px;"></el-input>
        </div>
        <div>物理地址：{{ sum }}</div>
        <h4 style="text-align: center;">内存碎片问题</h4>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内存碎片是指内存中的一些不连续的空闲区域，这些空闲区域太小，无法被分配给需要的进程。内存碎片会导致内存利用率降低，进程分配内存的效率下降，甚至可能导致内存分配失败。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们来看看这样一个例子。假设有 1G 的物理内存，用户执行了多个程序，其中：</p>
        <ul>
            <li>游戏占用了 512MB 内存</li>
            <li>浏览器占用了 128MB 内存</li>
            <li>音乐占用了 256 MB 内存。</li>
        </ul>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个时候，如果我们关闭了浏览器，则空闲内存还有 1024 - 512 - 256 = 256MB。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果这个 256MB 不是连续的，被分成了两段 128 MB 内存，这就会导致没有空间再打开一个 200MB 的程序。</p>
        <img src="../assets/ncfdproblem.png" style="display: block; margin: auto; width: 100%;">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里的内存碎片的问题共有两处地方：</p>
        <ul>
            <li>外部内存碎片，也就是产生了多个不连续的小物理内存，导致新的程序无法被装载；</li>
            <li>内部内存碎片，程序所有的内存都被装载到了物理内存，但是这个程序有部分的内存可能并不是很常使用，这也会导致内存的浪费；</li>
        </ul>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解决外部内存碎片的问题就是<strong>内存交换</strong>。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以把音乐程序占用的那 256MB 内存写到硬盘上，然后再从硬盘上读回来到内存里。不过再读回的时候，我们不能装载回原来的位置，而是紧紧跟着那已经被占用了的 512MB 内存后面。这样就能空缺出连续的 256MB 空间，于是新的 200MB 程序就可以装载进来。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为硬盘的访问速度要比内存慢太多了，每一次内存交换，我们都需要把一大段连续的内存数据写到硬盘上。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以，<strong>如果内存交换的时候，交换的是一个占内存空间很大的程序，这样整个机器都会显得卡顿。</strong></p>
        <button @click="showSolution0 = !showSolution0"> How to Solve ? </button>
    </div>
    <h1 v-if="showSolution0" style="text-align: center;">内存分页</h1>
    <div v-if="showSolution0" class="info-box">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>分页是把整个虚拟和物理内存空间切成一段段固定尺寸的大小</strong>。这样一个连续并且尺寸固定的内存空间，我们叫<strong>页</strong>（<em>Page</em>）。<strong>在 Linux 下，每一页的大小为&nbsp;<code>4KB</code>。</strong></p>
        <p>虚拟地址与物理地址之间通过<strong>页表</strong>来映射，如下图：</p>
        <img src="../assets/ybys.png" style="display: block; margin: auto; width: 100%;">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页表实际上存储在 CPU 的<strong>内存管理单元</strong>&nbsp;（<em>MMU</em>） 中，于是 CPU 就可以直接通过 MMU，找出要实际要访问的物理内存地址。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而当进程访问的虚拟地址在页表中查不到时，系统会产生一个<strong>缺页异常</strong>，进入系统内核空间分配物理内存、更新进程页表，最后再返回用户空间，恢复进程的运行。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于内存空间都是预先划分好的，也就不会像分段会产生间隙非常小的内存，这正是分段会产生内存碎片的原因。而<strong>采用了分页，那么释放的内存都是以页为单位释放的，也就不会产生无法给进程使用的小内存。</strong></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果内存空间不够，操作系统会把其他正在运行的进程中的「最近没被使用」的内存页面给释放掉，也就是暂时写在硬盘上，称为<strong>换出</strong>（<em>Swap Out</em>）。一旦需要的时候，再加载进来，称为<strong>换入</strong>（<em>Swap In</em>）。所以，一次性写入磁盘的也只有少数的一个页或者几个页，不会花太多时间，<strong>内存交换的效率就相对比较高。</strong></p>
        <img src="../assets/hrhc.png" style="display: block; margin: auto; width: 100%;">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更进一步地，分页的方式使得我们在加载程序的时候，不再需要一次性都把程序加载到物理内存中。我们完全可以在进行虚拟内存和物理内存的页之间的映射之后，并不真的把页加载到物理内存里，而是<strong>只有在程序运行中，需要用到对应虚拟内存页里面的指令和数据时，再加载到物理内存里面去。</strong></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在分页机制下，虚拟地址分为两部分，<strong>页号</strong>和<strong>页内偏移</strong>。页号作为页表的索引，<strong>页表</strong>包含物理页每页所在<strong>物理内存的基地址</strong>，这个基地址与页内偏移的组合就形成了物理内存地址，见下图。</p>
        <img src="../assets/ncfyxz.png" style="display: block; margin: auto; width: 100%;">
        <p>总结一下，对于一个内存地址转换，其实就是这样三个步骤：</p>
        <ul>
            <li>把虚拟内存地址，切分成页号和偏移量；</li>
            <li>根据页号，从页表里面，查询对应的物理页号；</li>
            <li>直接拿物理页号，加上前面的偏移量，就得到了物理内存地址。</li>
        </ul>
        <p>下面举个例子，虚拟内存中的页通过页表映射为了物理内存中的页，如下图：</p>
        <img src="../assets/nnywlyys.png" style="display: block; margin: auto; width: 100%;">
    </div>
</template>
  
<script>
export default {
    computed: {
        sum() {
            if (this.selector < 1000 || this.selector > 8000 || this.selector > 2000 && this.selector < 3000 || this.selector > 6500 && this.selector < 7000) {
                this.start = 38;
                this.off = 11;
                return "非法的段基地址";
            }
            if (this.selector < 1000 || this.selector > 8000 || this.selector > 2000 && this.selector < 3000 || this.selector > 6500 && this.selector < 7000) {
                this.start = 38;
                this.off = 11;
                return "非法的段内偏移量;";
            }
            if (this.selector >= 1000 && this.selector <= 2000) {
                if (this.selector + this.offset > 2000) {
                    this.start = 38;
                    this.off = 11;
                    return "非法的段内偏移量";
                }
                this.start = 14 + this.selector * 407 / 8000;
                
                this.off = 11 + (8000 - (this.selector + this.offset)) * 407 / 8000;
                return this.selector + this.offset;
            }
            if (this.selector >= 3000 && this.selector <= 6000) {
                if (this.selector + this.offset > 6000) {
                    this.start = 38;
                    this.off = 11;
                    return "非法的段内偏移量";
                }
                this.start = 38 + this.selector * 407 / 8000;
                this.off = 11 + (8000 - this.offset) * 407 / 8000;
                return this.selector + this.offset;
            }
            if (this.selector >= 6000 && this.selector <= 6500) {
                if (this.selector + this.offset > 6500) {
                    this.start = 38;
                    this.off = 11;
                    return "非法的段内偏移量";
                }
                this.start = 38 + this.selector * 407 / 8000;
                this.off = 11 + (8000 - this.offset) * 407 / 8000;
                return this.selector + this.offset;
            }
            if (this.selector >= 7000 && this.selector <= 8000) {
                if (this.selector + this.offset > 8000) {
                    this.start = 38;
                    this.off = 11;
                    return "非法的段内偏移量";
                }
                this.start = 38 + this.selector * 407 / 8000;
                this.off = 11 + (8000 - this.offset) * 407 / 8000;
                return this.selector + this.offset;
            }
            // 1000 2000 3000 6000 6000 6500 7000 8000
        }
    },
    data() {
        return {
        selected: '',
        showInput: false,
        showSolution: false,
        showSolution0: false,
        selector: 0,
        offset: 0,
        off: 11,
        start: 38
        }
    }
}
</script>
  
<style scoped>
.info-box {
    width: 75%; /* 设置宽度 */
    height: auto; /* 设置高度 */
    margin: auto; /* 水平居中 */
    border: 2px solid black; /*设置边框*/
    padding: 20px; /* 设置内边距 */
    box-sizing: border-box; /* 使宽度和高度包括内边距和边框 */
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}
  
.buttons {
    margin: 20px 0;
}

.description {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
  