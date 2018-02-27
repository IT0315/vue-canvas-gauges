<template>
  <div>
    <canvas class="canvas-gauges" id="demo"></canvas>
    <button @click="change">点击</button>
  </div>
</template>

<script>
  import { RadialGauge } from 'canvas-gauges'
  export default {
    data () {
      return {
        chart: null,
        value: 10,
        options: {
          width: 304,
          height: 304,
          title:'温度',
          colorUnits: '#fff', // 单位颜色
          units: 'm', // 单位,
          colorTitle: '#fff', //标题颜色
          minValue: 0, // 最大值
          maxValue: 100, // 最小值
          //数字刻度样式
          majorTicks: ['0', '20', '40', '60', '80', '100'],
          minorTicks: 5, // 每段分的份数
          strokeTicks: true, // 是否有刻度
          colorMajorTicks: '#6499eb', // 长刻度颜色
          colorMinorTicks: '#6499eb', // 短刻度颜色
          colorNumbers: '#8eb5f1', // 数字颜色
          highlights: [{"from": 80, "to": 100, "color": "rgba(255, 0, 0, 1)"}], // 高亮颜色和分段
          //背景
          colorPlate: '#375482', // 背景色
          //缩放比例
          borderShadowWidth: 0,
          ticksAngle: 270,//总圆周度数
          startAngle: 45, // 起始度数
          //指针样式
          needleType: 'arrow', // 指针类型
          needleWidth: 4, // 指针宽度
          colorNeedle: '#3079cc', // 指针开始颜色
          colorNeedleEnd: '#ff0', // 指针尖端颜色
          colorNeedleShadowDown: '#333', // 指针背影
          //圆点样式
          needleCircleSize: 9, // 圆点大小
          needleCircleOuter: true, // 圆点外框
          needleCircleInner: false, // 圆点内框
          colorNeedleCircleOuter: '#498cf6', // 圆点外框起始颜色
          colorNeedleCircleOuterEnd: '#498cf6', // 圆点外框末端颜色
          //动画
          animationDuration: 3000, // 动画过度时间
          animationRule: 'linear', // 动画过度速度
          //外面边框
          borders: true,
          borderInnerWidth: 0, // 大圆盘内边框
          borderMiddleWidth: 0, // 大圆盘中间边框
          borderOuterWidth: 10, // 大圆盘外边框宽度
          colorBorderOuter: '#375482', // 大圆盘外边框起始演的
          colorBorderOuterEnd: '#375482', // 大圆盘外边框末端颜色
          //实时值盒子样式
          colorValueText: '#93baf7', // 文字颜色
          colorValueBoxRect: '#4b7bc9', // 边框上颜色
          colorValueBoxRectEnd: '#4b7bc9', // 边框下颜色
          colorValueBoxBackground: '#2e61b2', // 盒子背景
        },
      }
    },
    methods:{
      change(){
        this.$http.get(`/second/view/v1/menu/0103`).then((res)=>{

          console.log('res',res)
          // this.value = parseInt(res.data.gauges[0].facility.value)
          this.options.title = res.data.gauges[0].facility.name
          // this.options.title = '湿度'
          // console.log(res.data.gauges[0].facility.name)

        })
      }
    },

    mounted () {
      this.chart = new RadialGauge(Object.assign(this.options, { renderTo: 'demo', value:this.value}))
        .draw()
      // this.change()
      // setInterval(()=>{
      //   this.value++
      // },100)
    },

    beforeDestroy() {
      this.chart.destroy()
    },
    watch: {
      value (val) {
        this.chart.value = val
      },
      options: {
        handler(newValue, oldValue) {
          this.chart = new RadialGauge(Object.assign(this.options, { renderTo: 'demo', value:this.value}))
            .draw()
        },
        deep: true
      },
    }

  }
</script>
