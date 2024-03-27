<template>
    <h1 style="text-align: center;">RISC-V</h1>
    <div class="stage">
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RISC-V有六种基本指令格式</p>
        <img src="../assets/riscv.png" style="display: block; margin: auto; width: 100%;">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>每个字段名称的含义：</strong></p>
        <ul>
            <li>opcode(操作码):指令的基本操作，这个缩写是它惯用名称。</li>
            <li>rd: 目的操作寄存器，用来存放操作结果。</li>
            <li>funct3: 一个另外的操作码字段。</li>
            <li>rs1: 第一个源操作数寄存器。</li>
            <li>rs2: 第二个源操作数寄存器。</li>
            <li>funct7: 一个另外的操作码字段。</li>
            <li>imm: 立即数</li>
        </ul>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R 型指令" name="1">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>字段</strong></p>
                <el-table :data="tableDatar" style="width: 600px; margin: auto">
                    <el-table-column prop="funct7" label="funct7" width="100"/>
                    <el-table-column prop="rs2" label="rs2" width="100" />
                    <el-table-column prop="rs1" label="rs1" width="100" />
                    <el-table-column prop="funct3" label="funct3" width="100" />
                    <el-table-column prop="rd" label="rd" width="100" />
                    <el-table-column prop="opcode" label="opcode" width="100" />
                </el-table>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>指令</strong></p>
                <img src="../assets/r.png" style="display: block; margin: auto; width: 100%;">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>示例</strong></p>
                <pre>
                    <code>
                        add a0, a1, a2  //a0 = a1 + a2
                        sub a0, a1, a2  //a0 = a1 - a2
                        sll a0, a1, a2  //a0 = a1 << a2(低位补0)
                        srl a0, a1, a2  //a0 = a1 >> a2(高位补0）
                        sra a0, a1, a2  //a0 = a1 >> a2 (算术右移，高位补原来的符号位)
                        slt a0, a1, a2  //a1 < a2 ? a0 = 1 : a0 = 0
                        xor a0, a1, a2  //a0 = a1 ^ a2
                        or a0, a1, a2   //a0 = a1 | a2
                        and a0, a1, a2  //a0 = a1 & a2
                    </code>
                </pre>
            </el-collapse-item>
            <el-collapse-item title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I 型指令" name="2">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>字段</strong></p>
                <el-table :data="tableDatai" style="width: 500px; margin: auto">
                    <el-table-column prop="imm" label="imm" width="100"/>
                    <el-table-column prop="rs1" label="rs1" width="100" />
                    <el-table-column prop="funct3" label="funct3" width="100" />
                    <el-table-column prop="rd" label="rd" width="100" />
                    <el-table-column prop="opcode" label="opcode" width="100" />
                </el-table>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>指令</strong></p>
                <img src="../assets/i.png" style="display: block; margin: auto; width: 100%;">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>示例</strong></p>
                <pre>
                    <code>
                        addi a0, a1, 0x5  //a0 = a1 + 0x5
                        subi a0, a1, 0x05  //a0 = a1 - 0x05
                        slli a0, a1, 0x05  //a0 = a1 << 0x05(低位补0)
                        srli a0, a1, 0x05  //a0 = a1 >> 0x05(高位补0）
                        srai a0, a1, 0x05  //a0 = a1 >> 0x05 (算术右移，高位补原来的符号位)
                        slti a0, a1, 0x05  //a1 < 0x05 ? a0 = 1 : a0 = 0
                        xori a0, a1, 0x05  //a0 = a1 ^ 0x05
                        ori a0, a1, 0x05   //a0 = a1 | 0x05
                        andi a0, a1, 0x05  //a0 = a1 & 0x05
                    </code>
                </pre>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取值指令—Load</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>字段</strong></p>
                <el-table :data="tableDatai" style="width: 500px; margin: auto">
                    <el-table-column prop="imm" label="imm" width="100"/>
                    <el-table-column prop="rs1" label="rs1" width="100" />
                    <el-table-column prop="funct3" label="funct3" width="100" />
                    <el-table-column prop="rd" label="rd" width="100" />
                    <el-table-column prop="opcode" label="opcode" width="100" />
                </el-table>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>指令</strong></p>
                <img src="../assets/load.png" style="display: block; margin: auto; width: 100%;">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>示例</strong></p>
                <pre>
                    <code>
                        lb x10,  0(x1)  //将x1的值加上0,将这个值作为地址， 取出这个地址所对应的内存中的值， 将这个值
                                          赋值给x10(取出的是8位数值)
                        lh x10,  0(x1)  //从内存中取出16位数值
                        lw x10, 0(x1)  //从内存中取出32位数值
                        lbu x10, 0(x1) //从内存中取出8位无符号数值
                        lhu x10, 0(x1) //从内存中取出16位无符号数值
                    </code>
                </pre>
            </el-collapse-item>
            <el-collapse-item title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S 型指令" name="3">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>字段</strong></p>
                <el-table :data="tableDatas" style="width: 600px; margin: auto">
                    <el-table-column prop="imm1" label="imm[11:5]" width="100"/>
                    <el-table-column prop="rs2" label="rs2" width="100" />
                    <el-table-column prop="rs1" label="rs1" width="100" />
                    <el-table-column prop="funct3" label="funct3" width="100" />
                    <el-table-column prop="imm2" label="imm[4:0]" width="100" />
                    <el-table-column prop="opcode" label="opcode" width="100" />
                </el-table>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>指令</strong></p>
                <img src="../assets/s.png" style="display: block; margin: auto; width: 100%;">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>示例</strong></p>
                <pre>
                    <code>
                        sb  x10, 0(x1)  //x1的值加上0,将这个值作为地址， 将x10的值存储
                                          到上述地址所对应的内存中去 (只会将x10的值的低8位写入)
                        sh  x10, 0(x1)  //只会将x10的值的低16位写入
                        sw  x10, 0(x1)  //只会将x10的值的低32位写入
                    </code>
                </pre>
            </el-collapse-item>
            <el-collapse-item title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B 型指令" name="4">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>字段</strong></p>
                <el-table :data="tableDatab" style="width: 800px; margin: auto">
                    <el-table-column prop="imm1" label="imm[12]" width="100"/>
                    <el-table-column prop="imm2" label="imm[10:5]" width="100"/>
                    <el-table-column prop="rs2" label="rs2" width="100" />
                    <el-table-column prop="rs1" label="rs1" width="100" />
                    <el-table-column prop="funct3" label="funct3" width="100" />
                    <el-table-column prop="imm3" label="imm[4:1]" width="100" />
                    <el-table-column prop="imm4" label="imm[11]" width="100" />
                    <el-table-column prop="opcode" label="opcode" width="100" />
                </el-table>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>指令</strong></p>
                <img src="../assets/b.png" style="display: block; margin: auto; width: 100%;">
            </el-collapse-item>
            <el-collapse-item title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U 型指令" name="5">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>字段</strong></p>
                <el-table :data="tableDatau" style="width: 310px; margin: auto">
                    <el-table-column prop="imm" label="imm[31:12]" width="110"/>
                    <el-table-column prop="rd" label="rd" width="100" />
                    <el-table-column prop="opcode" label="opcode" width="100" />
                </el-table>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>指令</strong></p>
                <img src="../assets/u.png" style="display: block; margin: auto; width: 100%;">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>示例</strong></p>
                <pre>
                    <code>
                        lui  x10, 0x65432 //得到立即数的高20位，低位补0，立即数范围为：0x00~0xFFFFF
                    </code>
                </pre>
            </el-collapse-item>
            <el-collapse-item title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;J 型指令" name="6">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>字段</strong></p>
                <el-table :data="tableDataj" style="width: 610px; margin: auto">
                    <el-table-column prop="imm1" label="imm[20]" width="100"/>
                    <el-table-column prop="imm2" label="imm[10:1]" width="100" />
                    <el-table-column prop="imm3" label="imm[11]" width="100" />
                    <el-table-column prop="imm4" label="imm[19:12]" width="110" />
                    <el-table-column prop="rd" label="rd" width="100" />
                    <el-table-column prop="opcode" label="opcode" width="100" />
                </el-table>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>指令</strong></p>
                <img src="../assets/j.png" style="display: block; margin: auto; width: 100%;">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>示例</strong></p>
                <pre>
                    <code>
                        jal ra, symbol    // 跳转到Symbol中去, 并把ra设置成返回地址 Symbol 可以是自定义的Label ,
                                             也可以是某个函数名
                        jal ra, 100       // 跳转到pc + 100 * 2的地方中去, 并把ra设置成返回地址  pc相对寻址，对应的
                                             是位置无关代码（PIC)
                        jalr ra, 40(x10)  // 跳转到x10+40 的地方中去, 并把ra设置成返回地址x10+40必须是绝对地址，指向
                                             内存中某个确定的地方（往往是函数的开头），非PIC
                    </code>
                </pre>
            </el-collapse-item>
        </el-collapse>
        <br><br><br>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '0',
      tableDatar:[{
        funct7: '7位',
        rs2: '5位',
        rs1: '5位',
        funct3: '3位',
        rd: '5位',
        opcode: '7位'
      }],
      tableDatai:[{
        imm: '12位',
        rs1: '5位',
        funct3: '3位',
        rd: '5位',
        opcode: '7位'
      }],
      tableDatas:[{
        imm1: '7位',
        rs2: '5位',
        rs1: '5位',
        funct3: '3位',
        imm2: '5位',
        opcode: '7位'
      }],
      tableDatab:[{
        imm1: '1位',
        imm2: '6位',
        rs2: '5位',
        rs1: '5位',
        funct3: '3位',
        imm3: '4位',
        imm4: '1位',
        opcode: '7位'
      }],
      tableDatau:[{
        imm: '20位',
        rd: '5位',
        opcode: '7位'
      }],
      tableDataj:[{
        imm1: '1位',
        imm2: '10位',
        rd: '5位',
        imm3: '1位',
        imm4: '8位',
        opcode: '7位'
      }],
    };
  }
};
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