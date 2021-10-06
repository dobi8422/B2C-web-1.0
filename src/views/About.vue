<template>
  <div>
    <div class="header bg-secondary"></div>
    <!-- 時間軸 -->
    <div class="container my-5">
      <div class="timeLine">
        <div class="row gx-5 my-3 timeLine-pointer">
          <div class="col-md-6">
            <h3 class="mt-3">2021/05 - 試做蛋糕</h3>
            <p>父可以去，也有可到這其實很類的手上，我沒看就被⋯地台你還不清歸⋯交往全真什麼這，不起我都可以啊而且我。這樣想不認識只是，段照顧畫的，下是趕老師的那種。大也讓人能理啊啊啊開但是要：前還⋯條前道出⋯一看以根本是雖然鬆現場，錢的覺得為我圖。著一是下面，第一個其實去看看三人卻不，快的遲遲地定很東西應該然錢包⋯一下⋯熟悉的中這就是這好想很喜，能理解棒走謝會也不福個又開始。真的很老實說，天啊能力，的畫面就被很不好壓不過是有人，回望他溫暖的，講話天容易講的實什麼我，高都不會以不用。</p>
          </div>
          <div class="col-md-6">
            <div class="box boxA"></div>
          </div>
        </div>
        <div class="row gx-5 my-3 timeLine-pointer flex-sm-row-reverse">
          <div class="col-md-6">
            <h3 class="mt-3">這是標題</h3>
            <p>太好時候我以看可父，有特別想要感到在還是會爆炸聖誕快，哥哥帶一老師，一個歡的男是之回的狀況，原來一次真的要充他們真都很，愛的的。可愛的進好像這次吧：覺得就。生刑應該很的時候，很大的問題很會說了的時候⋯其他的這樣一對了朋友神者吃現在。我民進黨超級意識被當，能油傑到的再來本沒，們自己可能沒，認識很人都是。方式所謂然人而，連續目前的欸不是⋯發，是你以色交換禮，其他我真的太可是你們的像沒⋯覺得沒會因為。</p>
          </div>
          <div class="col-md-6">
            <div class="box boxB"></div>
          </div>
        </div>
        <div class="row gx-5 my-3 timeLine-pointer">
          <div class="col-md-6">
            <h3 class="mt-3">這是標題</h3>
            <p>個懷疑睡了天，想請天感覺是是在要放，都覺得，有可能也怎大概是的時候，就直會畫記憶賣場自己不過我巧克力：得變成物。們一起我是常的有人說，或者是個性因為，世界上些什麼說法以看到，而且不大掉蛋。吊飾表現真是。呢全不賽開還沒關的要看⋯又可以道要個人：可惜則是⋯漸這時豪市場意謝謝要，真的沒有盼望的太可怕，的房間也不：商了沒原來還是看好看到⋯辛苦亡了被在，他說的那種啊不。的話然還有在著六不知試試看。推最喜我本來，音樂，然發好喜歡人就麼說⋯師大家嗎一個小不會很不產生，時的主留下來，到裡面的推。</p>
          </div>
          <div class="col-md-6">
            <div class="box boxC"></div>
          </div>
        </div>
        <div class="row gx-5 my-3 timeLine-pointer flex-sm-row-reverse">
          <div class="col-md-6">
            <h3 class="mt-3">這是標題</h3>
            <p>才本奇就是。一下這一定，可小孩子。<br>一部愛時候我偷說自己，算我的可以然也要這樣是什麼。<br>有天要我沒有跟我的痛苦上看。是話是這歡這種：月後就他，著做什麼到底怎個不，以下他，不需又我覺的的是價值觀不夠，還個神啊啊啊你們不討就可恭喜話會。後看這相信⋯回去一群安達天都那這樣上面寫，問我，都沒有色的好好，而且也果不沒問題：明年我比較到你的。得比在歲天再紅的背景，不知真的太，貴的對不起來就秀就口人的話在，天氣下個旁所以他我不想得更一：你的大惡魔⋯有心然他尤其好有單根本。</p>
          </div>
          <div class="col-md-6">
            <div class="box boxD img-fluid."></div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="row m-5 gx-5">
      <h3>聯絡我們</h3>
      <div class="col-lg-6">
        <div class="col-10 mx-auto bg-secondary" style="height: 500px;">我是地圖預定地</div>
      </div>
      <Form class="row gy-2 col-lg-6" @submit="submit">
        <div class="col-10 mx-auto">
          <label for="useremail">Email</label>
          <Field class="form-control" placeholder="請輸入信箱" name="email" rules="email" v-model="form.user.email" />
          <ErrorMessage class="text-danger" name="email"/>
        </div>
        <div class="col-10 mx-auto">
          <label for="useremail">收件人姓名</label>
          <Field class="form-control" placeholder="請輸入姓名" name="name" rules="name" v-model="form.user.name"/>
          <ErrorMessage class="text-danger" name="name"/>
        </div>
        <div class="col-10 mx-auto">
          <label for="useremail">收件人電話</label>
          <Field class="form-control" placeholder="請輸入電話" name="tel" rules="tel" v-model="form.user.tel"/>
          <ErrorMessage class="text-danger" name="tel"/>
        </div>
        <div class="col-10 mx-auto">
          <label for="useremail">留言</label>
          <Field id="comment" class="form-control" name="message" rules="message" v-model="form.message"/>
          <ErrorMessage class="text-danger" name="message"/>
        </div>
        <div>
          <button class="btn btn-outline-dark">送出</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Field, Form, ErrorMessage } from 'vee-validate'

export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: ''
        },
        message: ''
      }
    }
  },
  components: {
    Field,
    Form,
    ErrorMessage
  },
  methods: {
    submit () {
      console.log('後端還沒做好')
      this.alertMessage('謝謝您的意見')
    },
    ...mapActions(['alertMessage'])
  }
}
</script>

<style lang="scss" scoped>
hr{
  border-top: 5px dashed red;
  background: rgba(255, 255, 255, 0);
}
.header{
  height: 1000px;
  background-image: url(https://upload.wikimedia.org/wikipedia/zh/thumb/1/1d/85c_Daily_Cafe_logo.svg/1200px-85c_Daily_Cafe_logo.svg.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 50%;
}
h3{
  font-size: 2em;
  color: rgb(253, 110, 110);
  padding: 1rem;
}
p{
  text-align: start;
  padding: 1rem 0;
}
.box{
  height: 300px;
  border-radius: 10px;
  box-shadow:0px 0px 5px rgb(255, 157, 157);
  transition: all .5s ease;
  // transition: background-size 2s ease;
  &:hover{
    box-shadow:0px 0px 15px rgb(255, 157, 157);
    background-size: 102%;
  }
}
.boxA{
  background: url(https://images.unsplash.com/photo-1453785675141-67637e2d4b5c?dpr=2&auto=format&fit=crop&w=1500&h=918&q=80&cs=tinysrgb&crop=);
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;
  background-size: 100%;
  &:hover{
    background-size: 102%;
    transition: background-size .5s ease-in;
    -moz-transition: background-size .5s ease-in;
    -web-kit-transition: background-size .5s ease-in
  }
}
.boxB{
  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhNcT00FpX74V9lT23gMwEX_dGZj77VHYMg&usqp=CAU);
  background-size: cover;
  background-position: center center;
  background-size: 100%;
  &:hover{
    background-size: 102%;
    transition: background-size .5s ease-in;
    -moz-transition: background-size .5s ease-in;
    -web-kit-transition: background-size .5s ease-in
  }
}
.boxC{
  background: url(https://images.unsplash.com/photo-1453785675141-67637e2d4b5c?dpr=2&auto=format&fit=crop&w=1500&h=918&q=80&cs=tinysrgb&crop=);
  background-size: cover;
  background-position: center center;
  background-size: 100%;
  &:hover{
    background-size: 102%;
    transition: background-size .5s ease-in;
    -moz-transition: background-size .5s ease-in;
    -web-kit-transition: background-size .5s ease-in
  }
}
.boxD{
  background: url(https://live.staticflickr.com/65535/49384420833_26eeaf0e7d_b.jpg);
  background-size: cover;
  background-position: center center;
  background-size: 100%;
  &:hover{
    background-size: 102%;
    transition: background-size .5s ease-in;
    -moz-transition: background-size .5s ease-in;
    -web-kit-transition: background-size .5s ease-in
  }
}
.timeLine {
  position: relative;
  &::after {
    content:"";
    position: absolute;
    top: 175px;
    bottom: 0;
    width: 3px;
    background-color: #344e41;
    transform: translateX(-50%);//把3px的寬度往左拉回一半中間
    background-color: #344e41;
  }
}
.timeLine-pointer {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 175px;
    bottom: 0;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;//畫出圓形
    border:3px solid #344e41;
    transform: translateX(-50%);
    background-color: #dad7cd;//改變背景色
    z-index: 1;//把位置移到中間線上方
  }
}
@media (max-width: 768px) {
  .timeLine::after {
    display: none;
  }
  .timeLine-pointer::after {
    display: none;
  }
}
</style>
