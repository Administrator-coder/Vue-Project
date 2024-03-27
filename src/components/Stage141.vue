<template>
    <br>
    <main class="flex  items-center h-screen space-x-10" v-loading="startloader">
        <br>
            <div class="flex-container">
                <el-form-item label="选择语言：" class=" mr-36">
                    <el-select v-model="form.lang" placeholder="请选择语言" style="width:200px" @change="onlanguagechange">
                        <el-option v-for="lang in langs" :key="lang" :label="lang.name" :value="lang.id" :id="lang.id">{{ lang.name }}</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="选择编译器">
                    <el-select v-model="form.compiler" placeholder="请选择编译器" style="width: 200px;" :disabled="compilerselect" v-loading="selectloader">
                        <el-option v-for="compiler in compilers" :key="compiler" :label="compiler.name" :value="compiler.id">{{ compiler.name }}</el-option>
                    </el-select>
                </el-form-item>
                <el-form-label label="点击编译">
                    <el-button type="primary" @click="onCompiler">编译</el-button>
                </el-form-label>
            </div>
            <div class="flex-container">
                <el-form-item label="源代码">
                    <el-input type="textarea" v-model="form.source" placeholder="请输入源代码" style="width: 500px; ">你好</el-input>
                </el-form-item>
                
                <el-input type="textarea" v-model="result" style="width: 500px; " readonly="true" v-loading="resultloader">
                    <p>你好</p>
                </el-input>
            </div>
    </main>
</template>
<script>
import axios from 'axios';
import { reactive } from 'vue';

export default{
    mounted(){
        const getLangs = () => {
            this.startloader = true;
            axios.get("https://godbolt.org/api/languages").then(response => {
                this.langs = response.data;
                this.startloader = false;
            }).catch(err => {
                console.log(err);
                this.startloader = false;
            });
        };
        getLangs();
    },
    data(){
        return{
            compilerselect:true,
            langs:[],
            compilers:[],
            Data:[],
            selectloader:false,
            resultloader:false,
            startloader:false,
            form:reactive({
                soucre:"",
                compiler:"",
                options:{
                    userArguments:"",
                    compilerOptions:{
                        producePp :null,
                        produceGccDump:{

                        },
                        produceOptInfo:false,
                        produceIr:null,
                        produceOptPipeline:null,
                        produceDevice:false,
                        overrides:[

                        ]
                    },
                    filters:{

                    },
                    tools:[

                    ],
                    libraries:[

                    ],
                    executeParameters:{
                        args:"",
                        stdin:""
                    }
                },
                lang:"",
                files:[
                    
                ],
                bypassCache:0,
                allowStoreCodeDebug:true
            }),
            result:"请先编译"  
        }
    },
    methods: {
        onlanguagechange() {
            this.compilerselect = true;
            this.selectloader = true;
            axios.get("https://godbolt.org/api/compilers/"+this.form.lang).then(response => {
                this.compilers = response.data;
                this.compilerselect = false;
                this.selectloader = false;
                this.form.compile='';
            }).catch(err => {
                console.log(err);
                this.selectloader = false;
            });
        },
        onCompiler(){
            if(this.form.compiler==""){
                alert("请选择编译器");
                return;
            }
            if(this.form.source==""){
                alert("请输入源代码");
                return;
            }
            if(this.form.lang==""){
                alert("请选择语言");
                return;
            }
            this.result="正在编译........";
            this.resultloader=true;
            axios.post("https://godbolt.org/api/compiler/"+this.form.compiler+"/compile",this.form).then(response =>{
                console.log("success");
                this.Data=response.data.asm;
                this.result="";
                for(let i=0;i<this.Data.length;i++){
                    this.result+=this.Data[i].text+'\n';
                }
                this.resultloader=false;
            }).catch(err => {
                console.log(err);
                this.resultloader=false;
            });
        }
    },
}
</script>

<style>
.el-textarea .el-textarea__inner{
  resize: none;
  height: 90vh;
}

.flex-container {
    display: flex;
    justify-content: center;
    gap: 20px;  /* 调整这个值来改变选择器之间的间距 */
}


</style>