(function(){
var G=window.ENG_TOOLS_GRADE||6;

/* ---------- Mini dictionary ---------- */
var DICT={};
function W(w,vi,pos,ipa,ex){DICT[w.toLowerCase()]={w:w,vi:vi,pos:pos||'',ipa:ipa||'',ex:ex||''}}
[
 ['choose','chọn','v.','/tʃuːz/','Choose the correct answer.'],
 ['complete','hoàn thành / điền vào','v.','/kəmˈpliːt/','Complete the sentence.'],
 ['correct','đúng; sửa cho đúng','adj./v.','/kəˈrekt/','Choose the correct sentence.'],
 ['sentence','câu','n.','/ˈsentəns/','Read the sentence.'],
 ['word','từ','n.','/wɜːd/','Choose the word.'],
 ['answer','câu trả lời / trả lời','n./v.','/ˈɑːnsə/','Choose the best answer.'],
 ['question','câu hỏi','n.','/ˈkwestʃən/','Answer the question.'],
 ['best','tốt nhất / phù hợp nhất','adj.','/best/','Choose the best answer.'],
 ['mean','có nghĩa là','v.','/miːn/','What does this word mean?'],
 ['meaning','nghĩa','n.','/ˈmiːnɪŋ/','Find the meaning.'],
 ['belong','thuộc về','v.','/bɪˈlɒŋ/','Which word belongs to this topic?'],
 ['topic','chủ đề','n.','/ˈtɒpɪk/','This topic is about school.'],
 ['different','khác','adj.','/ˈdɪfrənt/','Choose the different word.'],
 ['same','giống nhau','adj.','/seɪm/','They have the same meaning.'],
 ['odd','khác nhóm','adj.','/ɒd/','Find the odd word out.'],
 ['match','nối / ghép cho phù hợp','v.','/mætʃ/','Match the words and meanings.'],
 ['rewrite','viết lại','v.','/ˌriːˈraɪt/','Rewrite the sentence.'],
 ['without','không / mà không','prep.','/wɪˈðaʊt/','Rewrite without changing the meaning.'],
 ['change','thay đổi','v./n.','/tʃeɪndʒ/','Do not change the meaning.'],
 ['error','lỗi','n.','/ˈerə/','Find the error.'],
 ['find','tìm','v.','/faɪnd/','Find the mistake.'],
 ['mistake','lỗi sai','n.','/mɪˈsteɪk/','Correct the mistake.'],
 ['read','đọc','v.','/riːd/','Read the passage.'],
 ['passage','đoạn văn','n.','/ˈpæsɪdʒ/','Read the passage and answer.'],
 ['according','theo / dựa theo','adv.','/əˈkɔːdɪŋ/','According to the passage...'],
 ['following','sau đây','adj.','/ˈfɒləʊɪŋ/','Choose the following sentence.'],
 ['true','đúng','adj.','/truː/','Which statement is true?'],
 ['false','sai','adj.','/fɔːls/','Which statement is false?'],
 ['statement','phát biểu / câu khẳng định','n.','/ˈsteɪtmənt/','Choose the correct statement.'],
 ['describe','miêu tả','v.','/dɪˈskraɪb/','Describe your school.'],
 ['compare','so sánh','v.','/kəmˈpeə/','Compare the two places.'],
 ['closest','gần nghĩa nhất','adj.','/ˈkləʊsɪst/','Choose the closest meaning.'],
 ['opposite','trái nghĩa','adj./n.','/ˈɒpəzɪt/','Choose the opposite word.'],
 ['form','dạng / hình thức','n.','/fɔːm/','Use the correct form of the word.'],
 ['grammar','ngữ pháp','n.','/ˈɡræmə/','Check the grammar.'],
 ['vocabulary','từ vựng','n.','/vəˈkæbjələri/','Learn new vocabulary.'],
 ['pronunciation','phát âm','n.','/prəˌnʌnsiˈeɪʃən/','Practise pronunciation.'],
 ['usually','thường xuyên','adv.','/ˈjuːʒuəli/','I usually walk to school.'],
 ['often','thường','adv.','/ˈɒfən/','We often play football.'],
 ['sometimes','đôi khi','adv.','/ˈsʌmtaɪmz/','She sometimes reads comics.'],
 ['always','luôn luôn','adv.','/ˈɔːlweɪz/','He always does his homework.'],
 ['never','không bao giờ','adv.','/ˈnevə/','I never go to bed late.'],
 ['now','bây giờ','adv.','/naʊ/','She is reading now.'],
 ['today','hôm nay','adv.','/təˈdeɪ/','Today he is going by bus.'],
 ['yesterday','hôm qua','adv.','/ˈjestədeɪ/','We played football yesterday.'],
 ['tomorrow','ngày mai','adv.','/təˈmɒrəʊ/','I will visit my grandma tomorrow.'],
 ['school','trường học','n.','/skuːl/','My school is big.'],
 ['classroom','lớp học','n.','/ˈklɑːsruːm/','Our classroom is bright.'],
 ['subject','môn học','n.','/ˈsʌbdʒɪkt/','Maths is my favourite subject.'],
 ['homework','bài tập về nhà','n.','/ˈhəʊmwɜːk/','I do my homework after dinner.'],
 ['library','thư viện','n.','/ˈlaɪbrəri/','There is a library at school.'],
 ['bedroom','phòng ngủ','n.','/ˈbedruːm/','My bedroom is upstairs.'],
 ['kitchen','nhà bếp','n.','/ˈkɪtʃɪn/','The fridge is in the kitchen.'],
 ['bathroom','phòng tắm','n.','/ˈbɑːθruːm/','The bathroom is next to my bedroom.'],
 ['friendly','thân thiện','adj.','/ˈfrendli/','My classmates are friendly.'],
 ['helpful','hay giúp đỡ','adj.','/ˈhelpfl/','Lan is kind and helpful.'],
 ['clever','thông minh','adj.','/ˈklevə/','He is a clever student.'],
 ['kind','tốt bụng','adj.','/kaɪnd/','My best friend is kind.'],
 ['market','chợ','n.','/ˈmɑːkɪt/','The market is near my house.'],
 ['supermarket','siêu thị','n.','/ˈsuːpəmɑːkɪt/','We buy food at the supermarket.'],
 ['street','đường phố','n.','/striːt/','This street is quiet.'],
 ['square','quảng trường; hình vuông','n.','/skweə/','The town square is crowded.'],
 ['mountain','núi','n.','/ˈmaʊntən/','Fansipan is a high mountain.'],
 ['cave','hang động','n.','/keɪv/','Phong Nha has beautiful caves.'],
 ['waterfall','thác nước','n.','/ˈwɔːtəfɔːl/','The waterfall is very beautiful.'],
 ['beach','bãi biển','n.','/biːtʃ/','We went to the beach.'],
 ['river','sông','n.','/ˈrɪvə/','The river is long.'],
 ['road','con đường','n.','/rəʊd/','The road is narrow.'],
 ['rainbow','cầu vồng','n.','/ˈreɪnbəʊ/','I can see a rainbow.'],
 ['kite','diều','n.','/kaɪt/','She is flying a kite.'],
 ['bike','xe đạp','n.','/baɪk/','He is riding a bike.'],
 ['kitten','mèo con','n.','/ˈkɪtn/','The kitten is small.'],
 ['pizza','bánh pizza','n.','/ˈpiːtsə/','The pizza is yummy.'],
 ['pasta','mì Ý','n.','/ˈpæstə/','I like pasta.'],
 ['popcorn','bỏng ngô','n.','/ˈpɒpkɔːn/','The popcorn is yummy.'],
 ['sea','biển','n.','/siː/','I can see the sea.'],
 ['sand','cát','n.','/sænd/','The sand is yellow.'],
 ['sail','cánh buồm','n.','/seɪl/','Look at the sail.'],
 ['farm','nông trại','n.','/fɑːm/','There is a cow on the farm.'],
 ['cow','con bò','n.','/kaʊ/','I can see a cow.'],
 ['hen','gà mái','n.','/hen/','The hen is on the farm.'],
 ['goat','con dê','n.','/ɡəʊt/','The goat is eating grass.'],
 ['juice','nước ép','n.','/dʒuːs/','I like orange juice.'],
 ['jelly','thạch','n.','/ˈdʒeli/','The jelly is sweet.'],
 ['jam','mứt','n.','/dʒæm/','Pass me the jam, please.'],
 ['village','làng','n.','/ˈvɪlɪdʒ/','This is my village.'],
 ['van','xe tải nhỏ','n.','/væn/','Can you draw a van?'],
 ['zoo','sở thú','n.','/zuː/','Do you like the zoo?'],
 ['zebra','ngựa vằn','n.','/ˈzebrə/','The zebra is at the zoo.'],
 ['shirt','áo sơ mi','n.','/ʃɜːt/','I like this shirt.'],
 ['shoes','giày','n.','/ʃuːz/','Where are the shoes?'],
 ['tent','lều','n.','/tent/','The tent is near the lake.'],
 ['programme','chương trình','n.','/ˈprəʊɡræm/','What is your favourite TV programme?'],
 ['cartoon','phim hoạt hình','n.','/kɑːˈtuːn/','I like cartoons.'],
 ['channel','kênh','n.','/ˈtʃænl/','Which channel is it on?'],
 ['football','bóng đá','n.','/ˈfʊtbɔːl/','I play football after school.'],
 ['badminton','cầu lông','n.','/ˈbædmɪntən/','She plays badminton.'],
 ['racket','vợt','n.','/ˈrækɪt/','This is my badminton racket.'],
 ['capital','thủ đô','n.','/ˈkæpɪtl/','Ha Noi is the capital of Viet Nam.'],
 ['landmark','địa danh / công trình nổi tiếng','n.','/ˈlændmɑːk/','The tower is a famous landmark.'],
 ['crowded','đông đúc','adj.','/ˈkraʊdɪd/','The city centre is crowded.'],
 ['robot','rô-bốt','n.','/ˈrəʊbɒt/','Robots can help us.'],
 ['future','tương lai','n./adj.','/ˈfjuːtʃə/','My future house will be smart.'],
 ['recycle','tái chế','v.','/ˌriːˈsaɪkl/','We should recycle bottles.'],
 ['rubbish','rác','n.','/ˈrʌbɪʃ/','Do not throw rubbish on the street.'],
 ['environment','môi trường','n.','/ɪnˈvaɪrənmənt/','We should protect the environment.']
].forEach(function(x){W.apply(null,x)});

/* multi-word phrase entries */
W('living room','phòng khách','n.','/ˈlɪvɪŋ ruːm/','There is a sofa in the living room.');
W('lucky money','tiền mừng tuổi','n.','/ˈlʌki ˈmʌni/','Children receive lucky money at Tet.');
W('natural wonder','kì quan thiên nhiên','n.','/ˈnætʃrəl ˈwʌndə/','Ha Long Bay is a natural wonder.');
W('present simple','thì hiện tại đơn','grammar','','I go to school every day.');
W('present continuous','thì hiện tại tiếp diễn','grammar','','She is reading now.');
W('past simple','thì quá khứ đơn','grammar','','We played football yesterday.');
W('future simple','thì tương lai đơn','grammar','','I will visit Hue tomorrow.');

function speak(text){if(!('speechSynthesis' in window)){toast('Thiết bị chưa hỗ trợ phát âm tự động.');return}speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=G===2?.72:.86;speechSynthesis.speak(u)}
function norm(w){return String(w||'').toLowerCase().replace(/^[^a-z]+|[^a-z']+$/g,'')}
function lookup(word,limited){
 var k=norm(word),d=DICT[k];
 if(!d){return {unknown:true,w:word}}
 if(limited&&!['choose','complete','correct','sentence','word','answer','question','best','mean','meaning','belong','topic','different','same','odd','match','rewrite','without','change','error','find','mistake','read','passage','according','following','true','false','statement','describe','compare','closest','opposite','form'].includes(k))return {blocked:true,w:word};
 return d
}
function showLookup(word,limited){
 var d=lookup(word,limited),p=document.getElementById('engLookupPopup');if(!p)return;
 if(d.blocked){p.innerHTML='<div class="dict-head"><b>🔒 '+escHtml(word)+'</b><button onclick="closeLookup()">×</button></div><p>Trong bài kiểm tra, từ điển chỉ giải thích <b>từ chỉ dẫn của đề</b> để không làm lộ đáp án từ vựng.</p>';p.classList.add('show');return}
 if(d.unknown){p.innerHTML='<div class="dict-head"><b>🔎 '+escHtml(word)+'</b><button onclick="closeLookup()">×</button></div><p>Chưa có từ này trong từ điển học tập. Con có thể nhập từ khác ở mục <b>Tra từ</b> trong Tiếng Anh.</p>';p.classList.add('show');return}
 p.innerHTML='<div class="dict-head"><div><b>'+escHtml(d.w)+'</b> <span>'+escHtml(d.ipa)+'</span></div><button onclick="closeLookup()">×</button></div><div class="dict-pos">'+escHtml(d.pos)+'</div><div class="dict-meaning">'+escHtml(d.vi)+'</div><div class="dict-example">'+escHtml(d.ex)+'</div><button class="btn soft" onclick="speakEngWord(\''+String(d.w).replace(/'/g,"\\'")+'\')">🔊 Nghe phát âm</button>';
 p.classList.add('show')
}
function escHtml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
window.closeLookup=function(){var p=document.getElementById('engLookupPopup');if(p)p.classList.remove('show')};
window.speakEngWord=speak;
function addPopup(){if(document.getElementById('engLookupPopup'))return;var d=document.createElement('div');d.id='engLookupPopup';d.className='dict-popup';document.body.appendChild(d)}

function intent(text){
 var s=String(text||'').toLowerCase();
 if(/find the error|find the mistake|error:/.test(s))return '🎯 Yêu cầu: tìm phần <b>sai</b> trong câu.';
 if(/rewrite|without changing|equivalent/.test(s))return '🎯 Yêu cầu: <b>viết/chọn câu tương đương</b>, giữ nguyên nghĩa.';
 if(/odd word|different from|different word/.test(s))return '🎯 Yêu cầu: chọn <b>từ khác nhóm</b>.';
 if(/what does .* mean|meaning/.test(s))return '🎯 Yêu cầu: chọn <b>nghĩa đúng của từ/cụm từ</b>.';
 if(/which word belongs|fits the topic|belongs to/.test(s))return '🎯 Yêu cầu: chọn <b>từ thuộc đúng chủ đề</b>.';
 if(/complete|fill|___|______/.test(s))return '🎯 Yêu cầu: chọn/điền từ để <b>hoàn thành câu đúng ngữ pháp và đúng nghĩa</b>.';
 if(/choose the correct sentence|which sentence is correct/.test(s))return '🎯 Yêu cầu: chọn <b>câu đúng</b> về ngữ pháp và nghĩa.';
 if(/choose the best|best answer|best response/.test(s))return '🎯 Yêu cầu: chọn <b>đáp án phù hợp nhất với ngữ cảnh</b>.';
 if(/read:|read the|according to|what is unusual|who |what |where |why /.test(s))return '🎯 Yêu cầu: <b>đọc thông tin</b>, tìm chi tiết liên quan rồi trả lời câu hỏi.';
 if(/which word|choose the word/.test(s))return '🎯 Yêu cầu: chọn <b>từ đúng theo điều kiện của câu hỏi</b>.';
 return '🎯 Cách làm: đọc từ chỉ dẫn đầu câu, xác định đề đang yêu cầu <b>chọn – điền – tìm lỗi – đọc hiểu – hay viết lại câu</b>.'
}
window.explainEngIntent=function(mode){
 var q=mode==='test'?(window.testItems&&testItems[testIndex]):(window.items&&items[qi]);
 var p=document.getElementById(mode==='test'?'engIntentTest':'engIntentPractice');if(p&&q){p.innerHTML=intent(q.q);p.classList.toggle('show')}
};

function wordify(el,limited){
 if(!el)return;
 var text=el.textContent;
 el.innerHTML=text.replace(/([A-Za-z]+(?:'[A-Za-z]+)?)/g,function(m){
   return '<span class="lookup-word" data-w="'+m+'" title="Bấm để tra từ">'+m+'</span>'
 });
 el.querySelectorAll('.lookup-word').forEach(function(x){x.onclick=function(e){e.stopPropagation();showLookup(x.dataset.w,limited)}})
}
function addQuizTools(testMode){
 var q=testMode?(window.testItems&&testItems[testIndex]):(window.items&&items[qi]);if(!q||q.s!=='eng')return;
 var qEl=document.getElementById(testMode?'testQText':'qText'),ans=document.getElementById(testMode?'testAnswers':'answers');
 wordify(qEl,!!testMode);
 if(ans)ans.querySelectorAll(testMode?'.testanswer':'.answer').forEach(function(b){wordify(b,!!testMode)});
 var id=testMode?'engToolsTest':'engToolsPractice',old=document.getElementById(id);if(old)old.remove();
 var bar=document.createElement('div');bar.id=id;bar.className='eng-inline-tools';
 var intentId=testMode?'engIntentTest':'engIntentPractice';
 bar.innerHTML='<button class="btn soft" onclick="explainEngIntent(\''+(testMode?'test':'practice')+'\')">🎯 Câu này yêu cầu gì?</button><span class="mini">'+(testMode?'Tra từ chỉ dẫn của đề':'Bấm trực tiếp vào từ tiếng Anh để tra nghĩa')+'</span><div class="eng-intent" id="'+intentId+'"></div>';
 qEl.parentNode.insertBefore(bar,ans)
}
function wrapQuiz(){
 var rq=window.renderQuestion;if(rq)window.renderQuestion=function(){rq();addQuizTools(false)};
 var rt=window.renderTestQuestion;if(rt)window.renderTestQuestion=function(){rt();addQuizTools(true)}
}

/* ---------- Vocabulary by current SGK unit ---------- */
var U6={
 g6e1:{title:'Unit 1 · My New School',words:['school','classroom','subject','homework','library','friendly']},
 g6e2:{title:'Unit 2 · My House',words:['bedroom','kitchen','bathroom','living room','room']},
 g6e3:{title:'Unit 3 · My Friends',words:['kind','helpful','clever','friendly']},
 g6e4:{title:'Unit 4 · My Neighbourhood',words:['market','supermarket','street','square','road']},
 g6e5:{title:'Unit 5 · Natural Wonders of Viet Nam',words:['mountain','cave','waterfall','beach','river','natural wonder']},
 g6e6:{title:'Unit 6 · Our Tet Holiday',words:['lucky money','fireworks','relatives','peach blossoms']},
 g6e7:{title:'Unit 7 · Television',words:['programme','cartoon','channel','viewer']},
 g6e8:{title:'Unit 8 · Sports and Games',words:['football','badminton','racket','champion']},
 g6e9:{title:'Unit 9 · Cities of the World',words:['capital','landmark','crowded','palace']},
 g6e10:{title:'Unit 10 · Our Houses in the Future',words:['robot','future','appliance','solar']},
 g6e11:{title:'Unit 11 · Our Greener World',words:['recycle','rubbish','environment','reusable']},
 g6e12:{title:'Unit 12 · Robots',words:['robot','repair','lift','understand']}
};
var U2={
 g2e1:{title:'Unit 1 · At my birthday party',words:['pizza','pasta','popcorn']},
 g2e2:{title:'Unit 2 · In the backyard',words:['bike','kite','kitten']},
 g2e4:{title:'Unit 3 · At the seaside',words:['sail','sand','sea']},
 g2e5:{title:'Unit 4 · In the countryside',words:['rainbow','river','road']},
 g2e7:{title:'Unit 5 · In the classroom',words:['question','square','quiz']},
 g2e8:{title:'Unit 6 · On the farm',words:['box','fox','ox','farm']},
 g2e10:{title:'Unit 7 · In the kitchen',words:['juice','jelly','jam','kitchen']},
 g2e11:{title:'Unit 8 · In the village',words:['village','van','volleyball']},
 g2e13:{title:'Unit 9 · In the grocery store',words:['yogurt','yams','yo-yos']},
 g2e14:{title:'Unit 10 · At the zoo',words:['zoo','zebra','zebu']},
 g2e16:{title:'Unit 11 · In the playground',words:['sliding','riding','driving']},
 g2e17:{title:'Unit 12 · At the café',words:['grapes','cake','table']},
 g2e19:{title:'Unit 13 · In the maths class',words:['eleven','thirteen','fourteen','fifteen']},
 g2e20:{title:'Unit 14 · At home',words:['brother','sister','grandmother']},
 g2e22:{title:'Unit 15 · In the clothes shop',words:['shirt','shoes','shorts']},
 g2e23:{title:'Unit 16 · At the campsite',words:['tent','teapot','blanket']}
};
function currentProgress(){
 var st=state(),id=st.sgkProgress&&st.sgkProgress.eng;
 if(id)return id;
 var sel=document.getElementById('sgk-select-eng');return sel?sel.value:(G===2?'g2e1':'g6e1')
}
function currentUnit(){
 var id=currentProgress(),M=G===2?U2:U6;if(M[id])return M[id];
 var keys=Object.keys(M),num=parseInt(String(id).replace(/\D/g,''))||1,prev=keys[0];
 keys.forEach(function(k){var n=parseInt(k.replace(/\D/g,''))||0;if(n<=num)prev=k});
 return M[prev]
}
function getWord(w){
 var d=DICT[String(w).toLowerCase()];
 return d||{w:w,vi:'(nghĩa sẽ được bổ sung)',pos:'',ipa:'',ex:''}
}
function vocabQuestions(){
 var u=currentUnit(),ws=u.words.map(getWord),all=Object.keys(DICT).map(function(k){return DICT[k]}).filter(function(d){return d.vi&&d.pos!=='grammar'}),out=[];
 ws.forEach(function(d,i){
   var distract=all.filter(function(x){return x.w!==d.w&&x.vi!==d.vi}).slice((i*7)%Math.max(1,all.length-4)).slice(0,3);
   var meanings=[d.vi].concat(distract.map(function(x){return x.vi})),rot=meanings.slice(i%4).concat(meanings.slice(0,i%4));
   out.push({id:'vocab_'+G+'_'+d.w+'_m',s:'eng',t:'vocab',l:1,q:'What does “'+d.w+'” mean?',a:rot,c:rot.indexOf(d.vi),h:'Tra nghĩa của từ nếu đang ở chế độ học.',e:'“'+d.w+'” = '+d.vi+'.'});
   var words=[d.w].concat(distract.map(function(x){return x.w})),rot2=words.slice((i+1)%4).concat(words.slice(0,(i+1)%4));
   out.push({id:'vocab_'+G+'_'+d.w+'_w',s:'eng',t:'vocab',l:2,q:'Choose the English word for “'+d.vi+'”.',a:rot2,c:rot2.indexOf(d.w),h:'Nhớ lại từ vừa học.',e:'Đáp án: '+d.w+'.'});
   if(d.ex)out.push({id:'vocab_'+G+'_'+d.w+'_c',s:'eng',t:'vocab',l:3,q:'Which word best fits this example? “'+d.ex.replace(new RegExp(d.w,'ig'),'_____')+'”',a:rot2,c:rot2.indexOf(d.w),h:'Dựa vào ngữ cảnh câu.',e:'Từ đúng là '+d.w+'.'});
 })
 return out
}
window.startVocabPractice=function(){
 var pool=vocabQuestions(),student=document.getElementById('student').value;
 pool.sort(function(a,b){return hashStr(a.id+dateLabel()+student)-hashStr(b.id+dateLabel()+student)});
 items=pool.slice(0,Math.min(G===2?12:18,pool.length));qi=0;ctx={s:'vocab'};before='engLab';go('quiz');renderQuestion()
};
window.showVocab=function(){
 var u=currentUnit(),body=document.getElementById('engLabBody');
 body.innerHTML='<button class="btn soft" onclick="renderEngLab()">← Tiếng Anh mở rộng</button><div class="top" style="margin-top:14px"><div><h1>📚 Từ mới · '+escHtml(u.title)+'</h1><div class="muted">Nghe → hiểu nghĩa → nhận diện → dùng trong câu.</div></div><button class="btn primary" onclick="startVocabPractice()">Luyện từ ngay</button></div><div class="vocab-grid">'+u.words.map(function(w){var d=getWord(w);return'<div class="vocab-card"><div class="vocab-word">'+escHtml(d.w)+'</div><div class="vocab-ipa">'+escHtml(d.ipa)+'</div><div class="vocab-vi">'+escHtml(d.vi)+'</div><div class="vocab-ex">'+escHtml(d.ex)+'</div><button class="btn soft" onclick="speakEngWord(\''+String(d.w).replace(/'/g,"\\'")+'\')">🔊 Nghe</button></div>'}).join('')+'</div>'
};

/* ---------- Tenses / sentence patterns ---------- */
var T6=[
 {k:'ps',title:'Hiện tại đơn · Present Simple',when:'Thói quen, sự thật, việc lặp lại.',formula:'I/You/We/They + V • He/She/It + V-s/es',signals:'always, usually, often, sometimes, every day',ex:['I go to school every day.','She plays badminton on Sundays.'],err:'Không viết: She play... → phải là She plays...'},
 {k:'pc',title:'Hiện tại tiếp diễn · Present Continuous',when:'Việc đang xảy ra ngay lúc nói hoặc quanh thời điểm hiện tại.',formula:'am/is/are + V-ing',signals:'now, right now, look!, listen!, at the moment',ex:['Lan is reading now.','They are playing football.'],err:'Không viết: She is play → phải là She is playing.'},
 {k:'past',title:'Quá khứ đơn · Past Simple',when:'Việc đã xảy ra và kết thúc trong quá khứ.',formula:'V-ed / cột 2 • did not + V • Did + S + V?',signals:'yesterday, last..., ... ago',ex:['We played football yesterday.','Did you watch TV last night?'],err:'Sau did/didn’t dùng V nguyên mẫu: Did you go...?'},
 {k:'future',title:'Tương lai đơn · Future Simple',when:'Dự đoán, lời hứa hoặc quyết định về tương lai.',formula:'will + V • will not/won’t + V',signals:'tomorrow, next..., in the future',ex:['Robots will help us.','I will visit my grandma tomorrow.'],err:'Sau will luôn dùng V nguyên mẫu.'},
 {k:'mix',title:'Phân biệt hiện tại đơn ↔ hiện tại tiếp diễn',when:'Một bên là thói quen; một bên là việc đang xảy ra.',formula:'usually/every day → V/V-s • now/look/listen → am/is/are + V-ing',signals:'usually vs now',ex:['Nam usually walks to school, but today he is going by bus.'],err:'Không dùng hiện tại tiếp diễn cho thói quen chỉ vì câu có “today” ở phần khác.'}
];
var T2=[
 {k:'habit',title:'Việc thường làm',when:'Kể việc con thường làm hoặc thích làm.',formula:'I/You/We/They + động từ • He/She + động từ có thể thêm -s',signals:'every day, usually',ex:['I play football.','She likes pizza.'],err:'Lớp 2 chỉ cần nghe và nói mẫu đúng, chưa cần học thuộc thuật ngữ dài.'},
 {k:'now',title:'Việc đang làm ngay bây giờ',when:'Nói ai đó đang làm gì.',formula:'am/is/are + V-ing',signals:'now, look!',ex:['She is flying a kite.','He is doing a quiz.'],err:'Nhớ có is/are trước từ có -ing.'},
 {k:'can',title:'Có thể làm gì · can',when:'Nói khả năng.',formula:'can + động từ nguyên mẫu',signals:'Can you...?',ex:['Can you draw a van? – Yes, I can.'],err:'Sau can không thêm -s hay -ing.'},
 {k:'there',title:'Có một vật ở đâu · There is/are',when:'Nói có một hay nhiều vật.',formula:'There is + 1 vật • There are + nhiều vật',signals:'Is there...?',ex:['Is there a fox? – Yes, there is.'],err:'Một vật dùng is; nhiều vật dùng are.'}
];
function tenseQ(k){
 var q=[];
 if(G===6){
  if(k==='ps'||k==='mix')q=q.concat([
   {q:'She ___ to school at 6:45 every day.',a:['go','goes','is going','went'],c:1,e:'“every day” → hiện tại đơn; she + goes.'},
   {q:'My friends usually ___ football after school.',a:['play','plays','are playing','played'],c:0,e:'Chủ ngữ số nhiều + V nguyên mẫu.'},
   {q:'Which sentence describes a habit?',a:['I do my homework every evening.','I am doing my homework now.','I did it yesterday.','I will do it tomorrow.'],c:0,e:'“every evening” là dấu hiệu thói quen.'}
  ]);
  if(k==='pc'||k==='mix')q=q.concat([
   {q:'Look! The boys ___ in the yard.',a:['play','plays','are playing','played'],c:2,e:'“Look!” → hiện tại tiếp diễn.'},
   {q:'Lan ___ a book now.',a:['reads','is reading','read','will read'],c:1,e:'“now” → is reading.'},
   {q:'Choose the correct negative sentence.',a:['Nam is not playing now.','Nam not is playing now.','Nam does not playing now.','Nam are not playing now.'],c:0,e:'be + not + V-ing.'}
  ]);
  if(k==='past')q=q.concat([
   {q:'We ___ football yesterday.',a:['play','played','are playing','will play'],c:1,e:'“yesterday” → quá khứ đơn.'},
   {q:'Did you ___ TV last night?',a:['watched','watch','watching','watches'],c:1,e:'Sau Did dùng V nguyên mẫu.'},
   {q:'She ___ not go to school yesterday.',a:['do','does','did','is'],c:2,e:'Phủ định quá khứ: did not + V.'}
  ]);
  if(k==='future')q=q.concat([
   {q:'Robots ___ help us with housework in the future.',a:['will','did','are','have'],c:0,e:'“in the future” → will + V.'},
   {q:'I ___ visit my grandma tomorrow.',a:['will','am every day','did','was'],c:0,e:'tomorrow → tương lai.'},
   {q:'After “will”, which form is correct?',a:['go','goes','going','went'],c:0,e:'will + V nguyên mẫu.'}
  ]);
 }else{
  if(k==='habit')q=[
   {q:'Choose the correct sentence.',a:['I play football.','I playing football.','I is play football.','I plays football.'],c:0,e:'I + play.'},
   {q:'She ___ pizza.',a:['like','likes','liking','is like'],c:1,e:'She + likes.'}
  ];
  if(k==='now')q=[
   {q:'She ___ a kite now.',a:['is flying','flies','fly','are flying'],c:0,e:'Việc đang làm: is flying.'},
   {q:'He ___ a quiz.',a:['is doing','do','does now every day','are doing'],c:0,e:'He + is doing.'}
  ];
  if(k==='can')q=[
   {q:'Can you draw a van? – Yes, I ___.',a:['can','am','do','is'],c:0,e:'Yes, I can.'},
   {q:'After “can”, choose the correct word.',a:['draw','draws','drawing','drew'],c:0,e:'can + động từ nguyên mẫu.'}
  ];
  if(k==='there')q=[
   {q:'___ there a fox?',a:['Is','Are','Do','Can'],c:0,e:'Một con cáo → Is there...?'}, 
   {q:'There ___ two kites.',a:['are','is','am','be'],c:0,e:'Hai vật → There are.'}
  ];
 }
 return q.map(function(x,i){return{id:'tense_'+G+'_'+k+'_'+i,s:'eng',t:'tense',l:1+(i%4),q:x.q,a:x.a,c:x.c,h:'Nhìn dấu hiệu thời gian và chủ ngữ.',e:x.e}})
}
window.startTensePractice=function(k){items=tenseQ(k);qi=0;ctx={s:'tense'};before='engLab';go('quiz');renderQuestion()};
window.showTenses=function(){
 var arr=G===6?T6:T2,body=document.getElementById('engLabBody');
 body.innerHTML='<button class="btn soft" onclick="renderEngLab()">← Tiếng Anh mở rộng</button><div class="top" style="margin-top:14px"><div><h1>⏱️ '+(G===6?'Các thì tiếng Anh':'Mẫu câu theo thời gian')+'</h1><div class="muted">'+(G===6?'Hiểu khi nào dùng trước, sau đó mới nhớ công thức.':'Học qua tình huống và mẫu câu, chưa ép nhớ tên ngữ pháp khó.')+'</div></div></div><div class="tense-list">'+arr.map(function(t){return'<div class="tense-card"><h3>'+t.title+'</h3><p><b>Khi dùng:</b> '+t.when+'</p><div class="tense-form"><b>Công thức:</b> '+t.formula+'</div><p><b>Dấu hiệu:</b> '+t.signals+'</p><div class="tense-ex">'+t.ex.map(function(e){return'• '+e}).join('<br>')+'</div><div class="tense-error">⚠️ '+t.err+'</div><button class="btn primary" onclick="startTensePractice(\''+t.k+'\')">Luyện bài này</button></div>'}).join('')+'</div>'
};

/* ---------- English Lab UI ---------- */
window.searchMiniDictionary=function(){
 var inp=document.getElementById('dictSearch'),word=inp?inp.value.trim():'';
 if(!word)return toast('Nhập một từ tiếng Anh.');
 var exact=DICT[word.toLowerCase()];if(exact){showLookup(word,false);return}
 showLookup(word,false)
};
window.renderEngLab=function(){
 var body=document.getElementById('engLabBody');if(!body)return;var u=currentUnit();
 body.innerHTML='<div class="englab-hero"><div><span class="englab-pill">🇬🇧 TIẾNG ANH DỄ HIỂU</span><h2>'+escHtml(u.title)+'</h2><p>Không hiểu câu hỏi → xem “Câu này yêu cầu gì?” → bấm từ để tra → sau đó mới làm.</p></div><div class="dict-search"><b>🔎 Tra từ tại chỗ</b><div><input id="dictSearch" placeholder="Ví dụ: helpful, choose, sentence"><button class="btn primary" onclick="searchMiniDictionary()">Tra</button></div></div></div><div class="englab-grid"><div class="englab-card"><div class="ico">📚</div><h3>Học từ mới</h3><p>Từ đúng Unit đang học, có nghĩa, phát âm, ví dụ và bài luyện.</p><button class="btn primary" onclick="showVocab()">Vào học từ</button></div><div class="englab-card"><div class="ico">⏱️</div><h3>'+(G===6?'Các thì tiếng Anh':'Mẫu câu theo thời gian')+'</h3><p>'+(G===6?'Hiện tại đơn, tiếp diễn, quá khứ đơn, tương lai đơn và bài phân biệt.':'Việc thường làm, việc đang làm, can, there is/are.')+'</p><button class="btn primary" onclick="showTenses()">Học ngữ pháp</button></div><div class="englab-card"><div class="ico">🎯</div><h3>Hiểu yêu cầu đề</h3><p>Học các từ chỉ dẫn như choose, complete, rewrite, find the error, odd word...</p><button class="btn soft" onclick="showInstructionWords()">Học từ chỉ dẫn</button></div></div>'
};
window.showInstructionWords=function(){
 var keys=['choose','complete','correct','sentence','word','answer','question','best','mean','belong','different','odd','match','rewrite','error','read','passage','true','false','describe','compare','form'],body=document.getElementById('engLabBody');
 body.innerHTML='<button class="btn soft" onclick="renderEngLab()">← Tiếng Anh mở rộng</button><h1 style="margin-top:15px">🎯 Từ chỉ dẫn thường gặp trong đề</h1><div class="vocab-grid">'+keys.map(function(k){var d=DICT[k];return'<div class="vocab-card"><div class="vocab-word">'+d.w+'</div><div class="vocab-ipa">'+d.ipa+'</div><div class="vocab-vi">'+d.vi+'</div><div class="vocab-ex">'+d.ex+'</div><button class="btn soft" onclick="speakEngWord(\''+d.w+'\')">🔊 Nghe</button></div>'}).join('')+'</div>'
};
function addEngLab(){
 if(document.getElementById('engLab'))return;
 var sec=document.createElement('section');sec.id='engLab';sec.className='section';sec.innerHTML='<div class="top"><div><button class="btn soft" onclick="go(\'eng\')">← Tiếng Anh</button><h1 style="margin-top:10px">🇬🇧 Tiếng Anh mở rộng</h1></div><span class="tag">Tra từ • Từ mới • Ngữ pháp</span></div><div id="engLabBody"></div>';
 var report=document.getElementById('report');report.parentNode.insertBefore(sec,report)
}
function injectEngEntry(){
 var el=document.getElementById('eng');if(!el||el.querySelector('.engtools-banner'))return;
 var top=el.querySelector('.top'),d=document.createElement('div');d.className='card engtools-banner';d.innerHTML='<div class="row"><div><div class="engtools-title">🔎 Tra từ • 📚 Từ mới • ⏱️ '+(G===6?'Các thì':'Mẫu câu')+'</div><div class="muted">Không hiểu câu hỏi thì tra ngay tại chỗ; học từ và ngữ pháp theo Unit.</div></div><button class="btn primary" onclick="go(\'engLab\');renderEngLab()">Mở công cụ Tiếng Anh</button></div>';
 if(top)top.parentNode.insertBefore(d,top.nextSibling)
}
function install(){
 addPopup();addEngLab();wrapQuiz();
 var old=window.renderSubject;if(old)window.renderSubject=function(s){old(s);if(s==='eng')injectEngEntry()};
 injectEngEntry();
 var oldGo=window.go;window.go=function(id){oldGo(id);if(id==='engLab')renderEngLab()};
 renderEngLab()
}
var st=document.createElement('style');st.textContent='.lookup-word{border-bottom:1px dotted #2563eb;cursor:help}.lookup-word:hover{background:#dbeafe}.dict-popup{position:fixed;z-index:9999;right:18px;bottom:18px;width:min(390px,calc(100vw - 36px));background:#fff;border:1px solid #cbd5e1;border-radius:18px;box-shadow:0 20px 60px rgba(15,23,42,.25);padding:16px;display:none}.dict-popup.show{display:block}.dict-head{display:flex;justify-content:space-between;gap:10px;font-size:20px}.dict-head button{border:0;background:transparent;font-size:24px;cursor:pointer}.dict-head span,.dict-pos{color:var(--muted);font-size:13px}.dict-meaning{font-size:20px;font-weight:850;margin:8px 0}.dict-example{background:#f8fafc;border-radius:10px;padding:10px;margin:8px 0 12px}.eng-inline-tools{margin:8px 0 12px;display:flex;gap:9px;align-items:center;flex-wrap:wrap}.eng-intent{display:none;width:100%;background:#eff6ff;color:#1e3a8a;padding:10px 12px;border-radius:10px}.eng-intent.show{display:block}.engtools-banner{margin:0 0 16px;border-left:5px solid #2563eb}.engtools-title{font-size:19px;font-weight:900}.englab-hero{display:flex;justify-content:space-between;gap:18px;background:linear-gradient(135deg,#eff6ff,#f5f3ff);border:1px solid #c7d2fe;border-radius:20px;padding:20px;margin-bottom:15px}.englab-pill{font-size:12px;font-weight:900;color:#3730a3}.englab-hero h2{margin:7px 0}.dict-search{min-width:330px}.dict-search>div{display:flex;gap:7px;margin-top:8px}.dict-search input{width:100%;padding:11px;border:1px solid #cbd5e1;border-radius:11px;font:inherit}.englab-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.englab-card,.vocab-card,.tense-card{background:#fff;border:1px solid var(--line);border-radius:17px;padding:16px}.englab-card .ico{font-size:30px}.vocab-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px}.vocab-word{font-size:23px;font-weight:900}.vocab-ipa{color:#64748b;margin:4px 0}.vocab-vi{font-size:17px;font-weight:750}.vocab-ex{font-size:13px;color:#475569;margin:8px 0;min-height:38px}.tense-list{display:grid;gap:14px}.tense-card h3{margin-top:0}.tense-form{background:#eff6ff;color:#1e3a8a;padding:11px;border-radius:10px}.tense-ex{background:#f8fafc;padding:11px;border-radius:10px;line-height:1.6;margin:10px 0}.tense-error{background:#fff7ed;color:#9a3412;padding:10px;border-radius:10px;margin-bottom:12px}@media(max-width:800px){.englab-grid{grid-template-columns:1fr}.englab-hero{flex-direction:column}.dict-search{min-width:0}}';document.head.appendChild(st);
window.addEventListener('load',install);
})();