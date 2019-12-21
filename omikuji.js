function result(){
      var index=Math.floor(Math.random()*6);

      switch(index){
          case 0:
            document.getElementById('result').innerText="運気最高潮！！";
            document.getElementById('resultdetail').innerText="今日のあなたの運気は最高潮です！何を試しても成功するでしょう！！";
            break;
          case 1:
            document.getElementById('result').innerText="運気急上昇中！！";
            document.getElementById('resultdetail').innerText="運気が急上昇中です！！普段試さないようなことにもチャレンジしてみましょう！";
            break;
          case 2:
            document.getElementById('result').innerText="運気上昇中！";
            document.getElementById('resultdetail').innerText="運気は上昇中です！良い行いをしてもっと運気を上げちゃいましょう！！";
            break;
          case 3:
            document.getElementById('result').innerText="運気良し";
            document.getElementById('resultdetail').innerText="今日のあなたの運気は比較的良いです。何をやってもきっと良い結果が待っているでしょう！！";
            break;
          case 4:
            document.getElementById('result').innerText="運気は比較的良し";
            document.getElementById('resultdetail').innerText="今日のあなたの運気は比較的良いです。色々なことにチャレンジしてみましょう！";
            break;
          case 5:
            document.getElementById('result').innerText="平常運転で"; 
            document.getElementById('resultdetail').innerText="今日のあなたの運気は良くも悪くもなので平常運転で。";
            break;
      }

  }
