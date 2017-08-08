<template>
  <section class="book">
    <header class="header">
      <div class="back" v-show="setting">
        <v-return></v-return>
      </div>
      <div class="name" v-show="!setting" :class="{'read-bg-white':isReadBg===1,'read-bg-green':isReadBg===2,'read-bg-light-green':isReadBg===3,'read-bg-brown':isReadBg===4,'read-bg-pink':isReadBg===5,'read-bg-grey':isReadBg===6}">
        <h1 class="title">圣墟</h1>
      </div>
    </header>
    <section class="content" :style="{fontSize: fontSize + 'px' }" :class="{'read-bg-white':isReadBg===1,'read-bg-green':isReadBg===2,'read-bg-light-green':isReadBg===3,'read-bg-brown':isReadBg===4,'read-bg-pink':isReadBg===5,'read-bg-grey':isReadBg===6}" @click="setting=!setting,fontColor=false">
      <p>第一行</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>

      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <p>最后一行</p>

    </section>
    <footer class="footer" v-show="setting">
      <div class="font-color" v-show="fontColor">
        <div class="color">
          <ul class="list">
            <li class="item">
              <span class="circle white" :class="{'circle-active':isReadBg===1}" @click="isReadBg=1"></span>
            </li>
            <li class="item">
              <span class="circle green" :class="{'circle-active':isReadBg===2}" @click="isReadBg=2"></span>
            </li>
            <li class="item">
              <span class="circle light-green" :class="{'circle-active':isReadBg===3}" @click="isReadBg=3"></span>
            </li>
            <li class="item">
              <span class="circle brown" :class="{'circle-active':isReadBg===4}" @click="isReadBg=4"></span>
            </li>
            <li class="item">
              <span class="circle pink" :class="{'circle-active':isReadBg===5}" @click="isReadBg=5"></span>
            </li>
            <li class="item">
              <span class="circle grey" :class="{'circle-active':isReadBg===6}" @click="isReadBg=6"></span>
            </li>
          </ul>
        </div>
        <div class="font">
          <a class="item subtract" @click="subtractFontSize">Aa-</a>
          <a class="item add" @click="addFontSize">Aa+</a>
        </div>
      </div>
      <nav class="nav">
        <a @click="directory=true">目录</a>
        <a>夜间模式</a>
        <a @click="fontColor=!fontColor">设置</a>
      </nav>
    </footer>
    <div class="label" v-show="setting">
      加入书签
    </div>
    <div class="directory" v-show="directory">
      <div class="wrap">
        <header class="directory-header">
          <a class="back" @click="directory=false">返回</a>
          <h2 class="title">圣墟</h2>
          <a class="sorting">倒序</a>
        </header>
        <section class="directory-content">
          <p>第一行</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>

          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>最后一行</p>

        </section>
      </div>
    </div>
  </section>
</template>
<script>
import Return from '../components/return'
export default {
  data () {
    return {
      setting: false,
      directory: false,
      fontColor: false,
      isReadBg: 1,
      fontSize: 14
    }
  },
  // computed: {
  //   fontSize () {
  //     return {
  //       fontSize: 14
  //     }
  //   }
  // },
  components: {
    'v-return': Return
  },
  methods: {
    subtractFontSize () {
      if (this.fontSize > 12) {
        this.fontSize--
      } else {
        return
      }
    },
    addFontSize () {
      this.fontSize++
    }
  }
}
</script>
<style lang="stylus" scoped>
.book{
  display:-webkit-box
  -webkit-box-orient:vertical
  height:100%
  .header{
    display: -webkit-box
    height :4rem
    line-height :4rem
    display: -webkit-flex /* Safari */
    display: flex
    flex-direction: row
    .title{
      width :100%
      font-size: 1.4rem
      padding :0 10px
    }
    .back{
      width :100%
      background-color :#000
      padding :0 10px
    }
    .name{
      width :100%
    }
  }
  .content{
    position:relative
    -webkit-box-flex:1
    -webkit-flex:1
    flex:1
    overflow:auto
    -webkit-overflow-scrolling:touch
    padding : 0 10px
    background-color :#fff
    line-height :1.5
  }
  .footer{
    overflow: hidden
    background-color :#212121
    .font-color{
      border-bottom :1px solid #ddd
      color :#fff
      .color{
        padding :10px 0
        .list{
          display:-webkit-box
          .item{
            flex :1
            -webkit-box-flex: 1
            -webkit-flex:1
            text-align :center
            .circle{
              display :inline-block
              width :30px
              height :30px
              border-radius :50%
            }
            .white{
              background-color :#fff
            }
            .green{
              background-color :#c8e6c9
            }
            .light-green{
              background-color :#dcedc8
            }
            .brown{
              background-color :#d7ccc8
            }
            .pink{
              background-color :#f48fb1
            }
            .grey{
              background-color :#424242
            }
            .circle-active{
              border :2px solid #ffeb3b
            }
          }
        }
      }
      .font{
        padding :10px 0
        text-align :center
        .item{
          display :inline-block
          width :40%
          border :1px solid #ddd
          padding :10px
          border-radius :10px
          color :#fff
        }
      }
    }
    .nav{
      display:-webkit-box
      height: 4rem
      line-height: 4rem
    }
    .nav *{
      display: block
      -webkit-box-flex: 1
      -webkit-flex:1
      flex:1
      text-align :center
      color :#fff
    }
  }
  .label{
    position :absolute
    top :10%
    right :0
    padding :10px
    border-top-left-radius :10px
    border-bottom-left-radius :10px
    background-color :#000
    color :#fff
    z-index :1
  }
  .directory{
    position :absolute
    top :0
    left :0
    width :100%
    height :100%
    z-index :2
    background-color :#fff
    .wrap{
      display:-webkit-box
      -webkit-box-orient:vertical
      height:100%
      .directory-header{
        display: -webkit-box
        height :4rem
        line-height :4rem
        display: -webkit-flex /* Safari */
        display: flex
        flex-direction: row
        position :relative
        background-color : #bf360c
        .title{
          position :absolute
          text-align :center
          width :100%
          font-size: 1.4rem
          color :#fff
        }
        .back{
          position :absolute
          left :10px
          color :#fff
          z-index :9
        }
        .sorting{
          position :absolute
          right :10px
          color :#fff
        }
      }
      .directory-content{
        position:relative
        -webkit-box-flex:1
        -webkit-flex:1
        flex:1
        overflow:auto
        -webkit-overflow-scrolling:touch
        padding : 0 10px
      }
    }
  }
  .read-bg-white{
    background-color :#fff
    color :#000
  }
  .read-bg-green{
    background-color :#c8e6c9
    color :#000
  }
  .read-bg-light-green{
    background-color :#dcedc8
    color :#000
  }
  .read-bg-brown{
    background-color :#d7ccc8
    color :#000
  }
  .read-bg-pink{
    background-color :#f48fb1
    color :#000
  }
  .read-bg-grey{
    background-color :#424242
    color :#000
  }
}
</style>

