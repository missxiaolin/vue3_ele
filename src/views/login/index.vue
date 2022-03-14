<template>
  <div class="login-container">
    <div id="login-three-container"></div>
    <div class="login-plane">
      <div class="login-plane-container">
        <img
          class="login-plane-human"
          src="../../assets/images/login_human.png"
          alt=""
        />
        <div class="login-plane-title">
          登陆
          <img
            class="login-plane-title-line"
            src="../../assets/images/login_horizontal_line.png"
            alt=""
          />
        </div>
        <div class="login-plane-form">
          <el-form ref="formRef">
            <el-form-item prop="user">
              <el-input placeholder="用户名 / 账号" type="text"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input placeholder="密码" type="password"></el-input>
            </el-form-item>
            <div class="login-code-container">
              <el-form-item style="width: 50%" prop="code">
                <el-input placeholder="验证码" type="text"></el-input>
              </el-form-item>
            </div>
            <el-form-item prop="autoLogin">
              <el-checkbox label="自动登陆"></el-checkbox>
            </el-form-item>
          </el-form>
          <el-button style="width: 100%" type="primary">登录</el-button>
        </div>
      </div>
    </div>
    <div class="login-ground"></div>
  </div>
</template>

<script  lang='ts' setup>
import * as THREE from "three";
import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { onMounted, ref, reactive, toRefs, unref } from "vue";
import _ from "lodash";
import { ElMessage } from "element-plus";

let container: any;
// 声明视口宽度
let width: number;
// 声明视口高度
let height: number;
// 盒模型的深度
const depth = 1400;
// 声明场景
let scene: any;
// 声明球组
let Sphere_Group: any;
// 声明球体几何
let sphereGeometry: any;
// 声明完整球
let sphere: any;
// 声明相机
let camera: any;
// 声明相机在z轴的位置
let zAxisNumber: number;
// 声明相机目标点
let cameraTarget: any = new THREE.Vector3(0, 0, 0);
// 声明点材质
let materials: any = [];
// 声明点的参数
let parameters: any;
// 声明点在z轴上移动的进度
let zprogress: number;
// 声明同上（第二个几何点）
let zprogress_second: number;
// 声明粒子1
let particles_first: any[];
// 声明粒子1
let particles_second: any[];
// 声明粒子1的初始化位置
let particles_init_position: number;
// 声明流动的云对象1（包含路径、云实例）
let cloudParameter_first: any;
// 声明流动的云对象2（包含路径、云实例）
let cloudParameter_second: any;
// 声明云流动的渲染函数1
let renderCloudMove_first: any;
// 声明云流动的渲染函数1
let renderCloudMove_second: any;
// 声明性能监控
let stats: any = new Stats();
// 声明渲染器
let renderer: any;
// 声明调试工具
let gui = new GUI();

// 表单对象
const formRef = ref(null);

// 其他状态
const state = reactive({
  codeSrc: "",
  codetoken: "",
});

// 响应式对象 - 表单对象
const formField = reactive({
  user: "",
  pass: "",
  code: "",
});

// 表单校验规则
const formRules = {
  user: [{ required: true, message: "请输入用户名账号", trigger: "blur" }],
  pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
};

onMounted(() => {
  container = document.getElementById("login-three-container");
  width = container.clientWidth;
  height = container.clientHeight;
});

// gui参数
function Params() {
  this.color = "#000";
  this.length = 10;
  this.size = 3;
  this.visible = true;
  this.x = 0;
  this.y = 0;
  this.z = 100;
  this.widthSegments = 64;
  this.heightSegments = 32;
  this.radius = 16;
}
// 初始化gui
const initGUI = () => {};

// 初始化场景
const initScene = () => {};

// 初始化背景（盒模型背景，视角在盒子里面，看到的是盒子内部）
const initSceneBg = () => {};

// 初始化轨道控制器
const initOrbitControls = () => {};

// 初始化相机
const initCamera = () => {};

//光源
const initLight = () => {};

// 初始化球体模型
const initSphereModal = () => {};

// 初始化组 --- 球体
const initSphereGroup = () => {};

// 初始化流动路径
const initTubeRoute = (
  route?: any,
  geometryWidth?: number,
  geometryHeigh?: number
) => {};

// 初始化场景星星效果
const initSceneStar = (initZposition: number): any => {};

// 渲染星球的自转
const renderSphereRotate = () => {};

// 渲染星星的运动
const renderStarMove = () => {};

// 初始化云的运动函数
const initCloudMove = (
  cloudParameter: any,
  speed: number,
  scaleSpeed = 0.0006,
  maxScale = 1,
  startScale = 0
) => {};

//渲染器
const initRenderer = () => {};

//动画刷新
const animate = () => {};

// 获取验证码
const getValidateCodeHandle = async () => {
  // 请求获取验证码 并设置验证码的图片以及验证码token
  state.codeSrc = "";
  state.codetoken = "";
};

// 提交表单
const submitForm = () => {

}

// 提交请求
const submitHandle = async () => {

}

const refsState = toRefs(state)

</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  position: relative;
  #login-three-container {
    width: 100%;
    height: 100%;
  }
  .login-plane {
    position: absolute;
    z-index: 9999;
    width: 600px;
    height: 500px;
    background-image: url("../../assets/images/login_border.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login-plane-container {
      width: 100%;
      height: 100%;
      border-radius: 18px;
      background-color: #007eff2e;
      position: relative;
      @keyframes humanMove {
        0% {
          top: -100px;
        }
        25% {
          top: -120px;
        }
        50% {
          top: -100px;
        }
        75% {
          top: -80px;
        }
        100% {
          background: -100px;
        }
      }
      .login-plane-human {
        position: absolute;
        width: 260px;
        right: -120px;
        top: -100px;
        animation: humanMove 8s linear 0s infinite normal;
      }
      .login-plane-title {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        font-size: 35px;
        color: #fff;
        font-weight: 700;
        img {
          width: 50%;
        }
        .login-plane-title-line {
          width: 80%;
          position: absolute;
          bottom: 0;
        }
      }
      .login-plane-form {
        padding: 45px 55px;
        box-sizing: border-box;
        .login-code-container {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          .login-code {
            cursor: pointer;
            width: 45%;
            height: 40px;
            background-color: #c8c8c8;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .login-ground {
    position: absolute;
    z-index: 9998;
    width: 100%;
    height: 400px;
    background-image: url("../../assets/images/ground.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    bottom: 0;
    left: 0;
  }
}
</style>

