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
import { defineComponent, onMounted, ref, reactive, toRefs, unref } from "vue";
import _ from "lodash";
import { ElMessage } from "element-plus";
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

