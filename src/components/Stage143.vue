<template>
    <h1 style="text-align: center;font-size: 30px">运行时环境（JRE）</h1>
    <div style="display: block; margin: auto; width: 700px;">
        <el-timeline style="max-width: 600px">
        <el-timeline-item timestamp="运行时环境介绍" placement="top">
        <el-card>
            <p style="font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;软件程序需要执行，并且需要一个运行环境。运行时环境将加载类文件，并确保可以访问内存和其他系统资源来运行它们。 过去，大多数软件都使用操作系统（OS）作为其运行时环境。 该程序可以在所用的任何计算机上运行，但都依赖于操作系统设置来进行资源访问。 在这种情况下，资源将是诸如内存和程序文件以及相关性之类的东西。 Java Runtime Environment改变了所有这些，至少对于Java程序而言。</p>
            <p style="font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最初引入Java时，它的“一次编写，随处运行”的原则被认为具有革命性，但如今，它已被大多数软件系统采用。</p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="Java运行时环境" placement="top">
        <el-card>
            <p style="font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以将软件视为位于系统硬件之上的一系列层。 每一层都将提供其上一层将使用（和要求）的服务。 Java运行时环境是在计算机操作系统之上运行的软件层，提供特定于Java的附加服务。</p>
            <p style="font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JRE平滑了操作系统的多样性，确保Java程序几乎可以在任何操作系统上运行而无需修改。 它还提供增值服务。 自动内存管理是JRE最重要的服务之一，可确保程序员不必手动控制内存的分配和重新分配。</p>
            <p style="font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简而言之，JRE是一种用于Java程序的元OS。 这是一个经典的抽象示例，将底层操作系统抽象到运行Java应用程序的一致平台中。</p>
        </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="JRE如何与JVM配合使用" placement="top">
        <el-card>
            <p style="font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java虚拟机是运行中的软件系统，负责执行实时Java程序。 JRE是磁盘上的系统，它使用Java代码，将其与必要的库组合在一起，然后启动JVM来执行它。</p>
            <p style="font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JRE包含Java程序需要运行的库和软件。 例如，Java类加载器是Java运行时环境的一部分。 这个重要的软件将编译后的Java代码加载到内存中，并将代码连接到适当的Java类库。</p>
            <p style="font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;刚刚描述的分层视图中，JVM是由JRE创建的。 从包的角度来看，JRE包含JVM，如图所示。</p>
            <img src="../assets/jre.jpg" style="width: 100%;"/>
        </el-card>
        </el-timeline-item>
    </el-timeline>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
}
</script>

<style>

</style>
