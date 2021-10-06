# 購物網站-(美感極差)蛋糕主題
### Demo:
https://dobi8422.github.io/B2C-web-1.0/
### API:六角學院提供
---
## 功能細項
* 商品分類
* 購物車
* 購物訂單
* 管理頁面
  * 商品
  * 優惠卷
  * 活動
  * 客戶訂單
* 後端資料連接，上傳，更新，刪除資料
* 表單驗證，vee-validate 4.0，Field, Form, ErrorMessage, defineRule, configure
* vuex管理->模組化(product, cart, loading, message...)

* bootstrap5(Modal,Carousel, Offcanvas)
* pagination
* loading效果
* 頁面滾輪樣式::-webkit-scrollbar...
* gotop
* nav(頁面下滑->變成半透明，頁面縮小->折疊)

---
## 已解決問題
vue router4 - 未定義網址重新導向至首頁->router3的`*``要改用正規表達式'/:catchAll(.*)`
vuex - 使用mapActions縮寫時，且methods和mapActions同名字，不知為何只能傳遞第一個參數(同名字時)；如果要在參數為物件形式傳送，methods和mapActions的名字必須要不同，或是不要使用mapActions縮寫

---
## 待改善(蛋糕主題2.0?)---
* firebase自定義Api{
    改良資料格式，增加付款方式，時間修正
    編輯購物車，增加數量->購物車,sm，可改變數量
    訂單可刪除
    優惠卷可個別套用
    回饋表單
    管理頁面{
      活動管理頁面(優惠卷能否新增(敘述1,敘述2,圖片))
      將管理者活動頁面,優惠卷葉面合併，利用同一份資料輸出至(客戶購物車,活動頁面)
      產品管理{ 產品新增，自動補上單位(份) }
    }
  }
* sm活動頁面-投影片(各項優惠活動)
* vee-validate{ 單選驗證功能?? }
* bootstrap的button顏色邊框刪除
* 樣式{ loading->改蛋糕圖案 }
* 購物車{
    sm購物車顯示數字改良???畫面更新容易當機，用prop??
  }
* 付款葉面 step-bar (terraria)
* 首頁{ 封面照?自動切換-逐格動畫 }
