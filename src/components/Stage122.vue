<template>
    <br>
    <el-carousel :interval="2000" type="card" height="653px">
        <el-carousel-item v-for="item in pages" :key="item">
            <h3>{{ item.title }}</h3>
            <div v-if="item.title === 'Step 1 - CPU供电'">
                <img src="../assets/Step1.svg" alt="step1" style="display: block; margin: auto; width: 80%; height: 80%;" @click="showPop1"/>
                <div v-if="isPopupVisible1" class="popup-container">
                    <el-card style="width: 500px; height: 600px;" shadow="always" class="popup-card">
                        <el-button type="danger" circle @click="closePopup1" class="close-button">
                            X
                        </el-button>
                        <div class="popup-content">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;按下主机的电源键后，计算机开始启动，为主板部分芯片和CPU进行供电。主板上电后开始初始化其固件。固件是一些固化在芯片组上的程序，它会试图去启动 CPU。如果启动失败（例如 CPU 坏了或没插好），计算机就会死机并给出错误提示（如某些版本的主板固件会发出蜂鸣警告）。这种状态称为 “zoombie-with-fans”。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果前一个阶段未出错，就开始加电工作，在多 CPU 或多核 CPU 情况下，某一个 CPU 会被随机选取作为启动 CPU（bootstrap processor，BSP）运行BIOS内部的程序。其余的 CPU（application processor，AP）保持停机直到操作系统内核显式地使用它们。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2000 年以前的计算机主板上均使用 BIOS，如今绝大多数计算机采用的是 EFI（Mac 用的就是 EFI）或 UEFI。BIOS 正在逐步被淘汰。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此时 CPU 工作模式为实模式，该模式下地址总线是 20 位，寻址范围是 0x00000~0xFFFFF 的 1M 范围。这也就解释了为什么 BIOS 的容量只有 1MB。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intel CPU 用三种运行模式: 实模式、32 位保护模式、64 位保护模式。实模式: Intel 8086 的寻址方案，为了商业连续性，兼容了这古老的方案；保护模式: 采用了虚实地址转换方案。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BIOS 启动之初，内存是空的。此时 CPU 处于实模式，内存的地址映射均为硬连接的设备。内存映射图如下图所示:<br> <img src="../assets/MemoryMap.png" width="100%"></p>
                        </div>
                    </el-card>
                </div>
            </div>
            <div v-if="item.title === 'Step 2 - 重置向量'">
                <img src="../assets/Step2.svg" alt="step2" style="display: block; margin: auto; width: 80%; height: 80%;" @click="showPop2"/>
                <div v-if="isPopupVisible2" class="popup-container">
                    <el-card style="width: 500px; height: 600px;" shadow="always" class="popup-card">
                        <el-button type="danger" circle @click="closePopup2" class="close-button">
                            X
                        </el-button>
                        <div class="popup-content">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CPU 启动后其大多数寄存器会被初始化为预定的值，包括指令寄存器（Instruction register，IR），它保存着 CPU 将要执行指令的内存地址。此时 CPU 会有一个特殊行为，其会对 IR 的初始值加上一个基址寄存器的值，生成一个 32 位的地址 0xFFFFFFF0。之所以称为特殊行为，是因为实模式下 CPU 只能寻址 1MB 地址空间，而这个 32 位地址已经大于 1MB 的内存限制。因此，0xFFFFFFF0 也被称为重置向量（reset vector），参考上图 0xFFFFFFF0 处的标识。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;于是，CPU 开始执行 0xFFFFFFF0 地址处的指令，该地址处是一条 JUMP 指令，这条指令清空了基址寄存器的值，并让指令跳回到 BIOS 开始处（物理地址为 0xF0000，参考上图 0xF0000 处的标识）以执行 BIOS。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BIOS 内部可以分成两个区块: code block（普通程序）、boot block（引导程序）。上电后，boot block 会先被执行，它会检查 code block 的代码是否正确，如果正确，就会转到 code block 继续执行下去。</p>
                        </div>
                    </el-card>
                </div>
            </div>
            <div v-if="item.title === 'Step 3 - BIOS初始化'">
                <img src="../assets/Step3.svg" alt="step2" style="display: block; margin: auto; width: 80%; height: 80%;" @click="showPop3"/>
                <div v-if="isPopupVisible3" class="popup-container">
                    <el-card style="width: 500px; height: 600px;" shadow="always" class="popup-card">
                        <el-button type="danger" circle @click="closePopup3" class="close-button">
                            X
                        </el-button>
                        <div class="popup-content">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0xF0000 地址实际上是 BIOS 中的 boot block 的开始处。在这个阶段，会初始化部分硬件。系统的 CPU、USB 只有部分被初始化。</p>
                        </div>
                    </el-card>
                </div>
            </div>
            <div v-if="item.title === 'Step 4 - BIOS POST'">
                <img src="../assets/Step4.svg" alt="step2" style="display: block; margin: auto; width: 80%; height: 80%;" @click="showPop4"/>
                <div v-if="isPopupVisible4" class="popup-container">
                    <el-card style="width: 500px; height: 600px;" shadow="always" class="popup-card">
                        <el-button type="danger" circle @click="closePopup4" class="close-button">
                            X
                        </el-button>
                        <div class="popup-content">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初始化完成后，CPU 跳转到 0xA0000 地址处（参考上图 640KB 处）进行 BIOS 加电自检（power on self test, POST）。这个过程会检查计算机的各项组件，如 CPU、显卡、内存、鼠标、键盘等。如果找不到内存或者键盘都有可能让BIOS停止工作并且打印一些相关的错误信息，如果找不到显卡 BIOS 会发出蜂鸣警告。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当 CPU 执行到 0xC0000 地址处（参考上图 768KB 处），开始寻找其他设备的 ROM，如果找到任何其他设备的 BIOS，它们也会被执行。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下一步，显卡就会显示 BIOS 界面，并进行更深入的检查。</p>
                        </div>
                    </el-card>
                </div>
            </div>
            <div v-if="item.title === 'Step 5 - BIOS记录系统设定值'">
                <img src="../assets/Step5.svg" alt="step2" style="display: block; margin: auto; width: 80%; height: 80%;" @click="showPop5"/>
                <div v-if="isPopupVisible5" class="popup-container">
                    <el-card style="width: 500px; height: 600px;" shadow="always" class="popup-card">
                        <el-button type="danger" circle @click="closePopup5" class="close-button">
                            X
                        </el-button>
                        <div class="popup-content">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;检查完成后，BIOS 会根据自己的"系统资源表"，对系统进行进一步确认，从而确定计算机配有哪些资源或设备。例如 BIOS 支持随插即用，它会检测并配置随插即用设备。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后 BIOS 会遵循高级配置电源接口（Advanced Configuration Power Interface，ACPI）在内存中设置好一系列的数据来描述硬件信息，以便被操作系统内核利用。</p>

                        </div>
                    </el-card>
                </div>
            </div>
            <div v-if="item.title === 'Step 6 - MBR'">
                <img src="../assets/Step6.svg" alt="step2" style="display: block; margin: auto; width: 80%; height: 80%;" @click="showPop6"/>
                <div v-if="isPopupVisible6" class="popup-container">
                    <el-card style="width: 500px; height: 600px;" shadow="always" class="popup-card">
                        <el-button type="danger" circle @click="closePopup6" class="close-button">
                            X
                        </el-button>
                        <div class="popup-content">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到这一步，BIOS 开始尝试加载操作系统。它会从硬盘，光驱，软驱，网络等几个地方依次寻找操作系统（用户可以在 BIOS 设定中修改查找的优先级）。如果找不到操作系统，BIOS 会停机并给出错误信息。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;假设在硬盘上找到了操作系统，它会首先读取硬盘上的大小为 512 Bytes 的 0号扇区，这个扇区被称为 主引导记录（master boot record，MBR），其包含三部分：</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a) 占446个字节：主引导程序（也叫Boot Loader），如果启动管理器grub是直接写进mbr硬盘的主引导记录中的，计算机BIOS 在启动时，按照预定的方式，将MBR内的代码加载至内存指定位置， 然后跳转至那里，mbr的代码就开始运行了。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b) 占64个字节：记录分区表，由于硬盘可以分区，每个区可以安装不同的操作系统，所以主引导记录必须知道将控制权转交给哪个区。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分区表的长度只有64个字节，里面又分成四项，每项16个字节。所以，一个硬盘最多只能分四个一级分区，又叫做"主分区"。</p>
                            <p>每个主分区的16个字节，由6个部分组成：</p>
                            <ol>
                                <li> <p>第1个字节：如果为0x80，就表示该主分区是激活分区，控制权要转交给这个分区。四个主分区里面只能有一个是激活的。</p> </li>
                                <li> <p>第2-4个字节：主分区第一个扇区的物理位置（柱面、磁头、扇区号等等）。</p> </li>
                                <li> <p>第5个字节：主分区类型。</p> </li>
                                <li> <p>第6-8个字节：主分区最后一个扇区的物理位置。</p> </li>
                                <li> <p>第9-12字节：该主分区第一个扇区的逻辑地址。</p> </li>
                                <li> <p>第13-16字节：主分区的扇区总数，决定了这个主分区的长度，一个主分区的扇区总数最多不超过2的32次方。</p> </li>
                            </ol>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c) 占2个字节：主引导记录的签名（0x55和0xAA）,如果这512字节的最后两个字节是0x55和0xAA，表明这个设备可以用于启动；如果不是，表明设备不能用于启动，控制权于是被转交给"启动顺序"中的下一个设备。如果到最后还是没找到符合条件的，直接报出一个无启动区的error。</p>
                            <img src="../assets/MBR.webp" width="100%">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BIOS 读完磁盘上的 MBR 之后会把它拷贝到内存 0x7C00 地址处，然后 CPU 跳转到该内存地址执行 MBR 里的指令。事实上，被复制到物理内存的内容就是 Boot Loader。常见的 Boot Loader 有 grub、lilo、spfdisk。</p>
                            <img src="../assets/0x7c000.svg" width="100%">
                        </div>
                    </el-card>
                </div>
            </div>
            <div v-if="item.title === 'Step 7 - 硬盘启动'">
                <img src="../assets/Step7.svg" alt="step2" style="display: block; margin: auto; width: 80%; height: 80%;" @click="showPop7"/>
                <div v-if="isPopupVisible7" class="popup-container">
                    <el-card style="width: 500px; height: 600px;" shadow="always" class="popup-card">
                        <el-button type="danger" circle @click="closePopup7" class="close-button">
                            X
                        </el-button>
                        <div class="popup-content">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这时，计算机的控制权就要转交给硬盘的某个分区了，这里又分成三种情况。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>情况A：卷引导记录 </strong></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;卷引导记录（Volume boot record，缩写为VBR）。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"卷引导记录"的主要作用是，告诉计算机，操作系统在这个分区里的位置。然后，计算机就会加载操作系统了。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>情况B：扩展分区和逻辑分区</strong></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着硬盘越来越大，四个主分区已经不够了，需要更多的分区。但是，分区表只有四项，因此规定有且仅有一个区可以被定义成"扩展分区"（Extended partition）。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所谓"扩展分区"，就是指这个区里面又分成多个区。这种分区里面的分区，就叫做"逻辑分区"（logical partition）。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计算机先读取扩展分区的第一个扇区，叫做"扩展引导记录"（Extended boot record，缩写为EBR）。它里面也包含一张64字节的分区表，但是最多只有两项（也就是两个逻辑分区）。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计算机接着读取第二个逻辑分区的第一个扇区，再从里面的分区表中找到第三个逻辑分区的位置，以此类推，直到某个逻辑分区的分区表只包含它自身为止（即只有一个分区项）。因此，扩展分区可以包含无数个逻辑分区。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，似乎很少通过这种方式启动操作系统。如果操作系统确实安装在扩展分区，一般采用下一种方式启动。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>情况C：启动管理器</strong></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这种情况下，计算机读取"主引导记录"前面446字节的机器码之后，不再把控制权转交给某一个分区，而是运行事先安装的"启动管理器"（boot loader），由用户选择启动哪一个操作系统。</p>

                        </div>
                    </el-card>
                </div>
            </div>
            <div v-if="item.title === 'Step 8 - 操作系统'">
                <img src="../assets/Step8.svg" alt="step2" style="display: block; margin: auto; width: 80%; height: 80%;" @click="showPop8"/>
                <div v-if="isPopupVisible8" class="popup-container">
                    <el-card style="width: 500px; height: 600px;" shadow="always" class="popup-card">
                        <el-button type="danger" circle @click="closePopup8" class="close-button">
                            X
                        </el-button>
                        <div class="popup-content">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;控制权转交给操作系统后，操作系统的内核首先被载入内存。</p>
                            <p><strong>linux</strong></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以Linux系统为例，先载入/boot目录下面的kernel。内核加载成功后，第一个运行的程序是/sbin/init。它根据配置文件（Debian系统是/etc/initab）产生init进程。这是Linux启动后的第一个进程，pid进程编号为1，其他进程都是它的后代。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，init线程加载系统的各个模块，比如窗口程序和网络程序，直至执行/bin/login程序，跳出登录界面，等待用户输入用户名和密码。</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至此，全部启动过程完成。</p>
                            <p><strong>Windows</strong></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以Windows7 为例，当控制权转交到操作系统后，计算机会执行如下操作：</p>
                            <ol>
                                <li> <p>加载内核程序（Ntoskrnl.exe）、硬件抽象层（hal.dl）、注册表 SYSTEM 项(system32\configlsystem）、设备驱动，然后控制权交给 Ntoskrnl.exe</p> </li>
                                <li> <p>Ntoskmnl 初始化执行体子系统，并初抽化引导的和系统的设备驱动启动程序，为原生应用程序《如SMSS 等）初始化运行环境，控制权交给 SMSS.exe</p> </li>
                                <li> <p>SMSS 初始化注册表，创建系统环境变量，加载 Win32 子系统（Win32k.sys），启动子系统进程（CSRSS、Wininlt、Winlogon），控制权交给 Wininit.exe 和Winlogon.exe</p> </li>
                                <li> <p>Wininit 启动服务控制管理器（SCM），本地安全子系统（LSASS》，本地会话管理（LSM）</p> </li>
                                <li> <p>Winlogon 加乾登录界面程序（Logonur），显示交互式登录对话框。等待用户登录后，根据注册表配置启动 Userinit.exe 和 Explorer.exe</p> </li>
                                <li> <p>Userinit 启动用户所有自启动进程，津立网络连接，启动生效的组策略</p> </li><li> <p>Explorer 提供交互式图形界面，包括桌面和文件管理。</p> </li>
                            </ol>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至此计算机启动就完成啦</p>
                        </div>
                    </el-card>
                </div>
            </div>
        </el-carousel-item>
    </el-carousel>
</template>
  
<script>

export default {
    data() {
        return {
            pages : [
                { title: 'Step 1 - CPU供电' },
                { title: 'Step 2 - 重置向量' },
                { title: 'Step 3 - BIOS初始化' },
                { title: 'Step 4 - BIOS POST' },
                { title: 'Step 5 - BIOS记录系统设定值' },
                { title: 'Step 6 - MBR' },
                { title: 'Step 7 - 硬盘启动' },
                { title: 'Step 8 - 操作系统' }
            ],
            isPopupVisible1: false,
            isPopupVisible2: false,
            isPopupVisible3: false,
            isPopupVisible4: false,
            isPopupVisible5: false,
            isPopupVisible6: false,
            isPopupVisible7: false,
            isPopupVisible8: false
        }
    },
    methods: {
        showPop1() {
            this.isPopupVisible1 = true;
        },
        closePopup1() {
            this.isPopupVisible1 = false;
        },
        showPop2() {
            this.isPopupVisible2 = true;
        },
        closePopup2() {
            this.isPopupVisible2 = false;
        },
        showPop3() {
            this.isPopupVisible3 = true;
        },
        closePopup3() {
            this.isPopupVisible3 = false;
        },
        showPop4() {
            this.isPopupVisible4 = true;
        },
        closePopup4() {
            this.isPopupVisible4 = false;
        },
        showPop5() {
            this.isPopupVisible5 = true;
        },
        closePopup5() {
            this.isPopupVisible5 = false;
        },
        showPop6() {
            this.isPopupVisible6 = true;
        },
        closePopup6() {
            this.isPopupVisible6 = false;
        },
        showPop7() {
            this.isPopupVisible7 = true;
        },
        closePopup7() {
            this.isPopupVisible7 = false;
        },
        showPop8() {
            this.isPopupVisible8 = true;
        },
        closePopup8() {
            this.isPopupVisible8 = false;
        }
    }
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.popup-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* 添加背景遮罩 */
}

.popup-card {
    position: relative;
}

.close-button {
    position: absolute;
    right: 10px;
    top: 10px;
}

.popup-content {
  max-height: 580px; /* 设置最大高度 */
  overflow-y: auto; /* 添加滚动条 */
}
</style>
