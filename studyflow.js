(function(){
var G=window.STUDY_GRADE||6;
var SUBS={math:'Toán',lit:G===2?'Tiếng Việt':'Ngữ văn',eng:'Tiếng Anh'};

var G6={
 math:{
  m1:{goal:'Hiểu tập hợp, số tự nhiên và cách biểu diễn số.',steps:['Tập hợp là một nhóm các đối tượng có chung tiêu chí.','Số tự nhiên dùng để đếm và sắp thứ tự.','Khi làm bài, đọc kĩ kí hiệu thuộc/không thuộc và thứ tự các số.'],example:'Ví dụ: A = {1; 2; 3}. Khi đó 2 thuộc A, còn 5 không thuộc A.',tip:'Gặp bài tập hợp: đọc tên tập → nhìn phần tử → kiểm tra từng phần tử.',mistake:'Nhầm kí hiệu thuộc tập hợp với dấu bằng.'},
  m2:{goal:'Hiểu lũy thừa và tính đúng thứ tự phép tính.',steps:['aⁿ nghĩa là lấy a nhân với chính nó n lần.','Khi nhân hai lũy thừa cùng cơ số, cộng số mũ.','Trong biểu thức: lũy thừa trước → nhân/chia → cộng/trừ.'],example:'2³ = 2×2×2 = 8; 2³×2² = 2⁵ = 32.',tip:'Nhìn thấy cùng cơ số thì nghĩ ngay đến số mũ.',mistake:'Tính 2³ thành 2×3.'},
  m3:{goal:'Nhận biết chia hết, số nguyên tố, ước và bội.',steps:['Dấu hiệu chia hết giúp kiểm tra nhanh mà không cần chia.','Ước là số chia hết một số; bội là kết quả nhân số đó với số tự nhiên.','Muốn tìm ƯCLN/BCNN cần phân tích hoặc liệt kê có hệ thống.'],example:'450 chia hết cho 2, 3, 5 và 9 vì tận cùng 0 và tổng chữ số bằng 9.',tip:'2–5 nhìn chữ số cuối; 3–9 nhìn tổng chữ số.',mistake:'Nhầm “ước của” với “bội của”.'},
  m4:{goal:'Hiểu số nguyên âm/dương và thực hiện phép tính.',steps:['Số nguyên âm nằm bên trái 0 trên trục số.','Số càng ở bên phải thì càng lớn.','Cộng hai số trái dấu: lấy hiệu hai giá trị tuyệt đối và giữ dấu số có giá trị tuyệt đối lớn hơn.'],example:'−5 + 9 = 4; −3 > −8.',tip:'Hãy hình dung trục số khi so sánh số âm.',mistake:'Cho rằng −8 lớn hơn −3 vì 8 > 3.'},
  m5:{goal:'Hiểu phân số, phân số bằng nhau và rút gọn.',steps:['Tử số ở trên, mẫu số ở dưới và mẫu khác 0.','Nhân/chia cả tử và mẫu cho cùng một số khác 0 thì được phân số bằng nhau.','Muốn so sánh có thể quy đồng mẫu.'],example:'2/4 = 1/2 vì chia cả tử và mẫu cho 2.',tip:'Rút gọn: tìm số cùng chia được cả tử và mẫu.',mistake:'Chỉ chia tử mà không chia mẫu.'}
 },
 lit:{
  v1:{goal:'Đọc truyện và hiểu nhân vật qua hành động, lời nói, suy nghĩ.',steps:['Xác định người kể chuyện và nhân vật chính.','Tìm các chi tiết cho thấy tính cách Dế Mèn.','Theo dõi sự thay đổi của nhân vật sau hậu quả với Dế Choắt.'],example:'Dế Mèn từ tự phụ, bốc đồng chuyển sang ân hận và nhận ra trách nhiệm.',tip:'Mỗi nhận xét về nhân vật phải kèm một chi tiết làm bằng chứng.',mistake:'Chỉ kể lại truyện mà không rút ra tính cách/bài học.'},
  v2:{goal:'Đọc thơ, nhận ra thông điệp và thái độ của tác giả.',steps:['Đọc để xác định bài thơ đang nói về vấn đề gì.','Chú ý từ ngữ, giọng điệu và lời nhắn trực tiếp.','Liên hệ thông điệp với tình huống thực tế.'],example:'“Bắt nạt” hướng tới cách ứng xử nhân ái và phản đối việc làm tổn thương người yếu thế.',tip:'Thông điệp = điều tác giả muốn người đọc hiểu và làm.',mistake:'Trả lời chung chung mà không dựa vào văn bản.'},
  v3:{goal:'Tóm tắt được văn bản ngắn gọn nhưng đủ ý chính.',steps:['Đọc toàn văn một lượt để hiểu.','Gạch ra 3–5 sự việc/ý chính.','Gom các chi tiết giống nhau, bỏ phần phụ.','Viết lại bằng lời của mình theo đúng trình tự.'],example:'Một đoạn 8 câu có thể rút còn 2–3 câu nếu giữ đúng nguyên nhân, sự việc chính và kết quả.',tip:'Sau khi viết, hỏi: thiếu sự việc quan trọng nào không?',mistake:'Chép nguyên văn quá nhiều hoặc thêm cảm nghĩ cá nhân.'},
  v4:{goal:'Dùng từ, từ nối và câu để đoạn văn mạch lạc.',steps:['Xác định quan hệ giữa hai ý: nguyên nhân, kết quả, tương phản, bổ sung.','Chọn từ nối phù hợp.','Dùng từ thay thế để tránh lặp.'],example:'Trời mưa nên đường trơn. Tuy trời mưa nhưng em vẫn đến trường đúng giờ.',tip:'Đọc hai câu liền nhau và hỏi “chúng liên quan với nhau thế nào?”.',mistake:'Dùng từ nối đúng ngữ pháp nhưng sai quan hệ ý.'}
 },
 eng:{
  e1:{goal:'Nói về trường học và thói quen hằng ngày bằng hiện tại đơn.',steps:['Nhớ từ vựng: school, classroom, subject, homework…','I/You/We/They + động từ nguyên mẫu.','He/She/It + động từ thêm s/es.'],example:'I go to school every day. My school has a library.',tip:'Thấy every day / usually / often → nghĩ đến present simple.',mistake:'I goes hoặc My school have.'},
  e2:{goal:'Mô tả ngôi nhà bằng There is/There are và giới từ vị trí.',steps:['There is + danh từ số ít.','There are + danh từ số nhiều.','Dùng on, in, under, next to, between… để nói vị trí.'],example:'There is a sofa in the living room. The lamp is on the table.',tip:'Nhìn danh từ sau “there” để chọn is hay are.',mistake:'There is two bedrooms.'},
  e3:{goal:'Miêu tả bạn bè và hành động đang diễn ra.',steps:['Học tính từ tính cách: kind, friendly, helpful, clever…','Hành động đang xảy ra: am/is/are + V-ing.','Nhận biết từ báo hiệu: now, look!, listen!'],example:'Lan is reading now. My best friend is kind and helpful.',tip:'Look!/Listen!/now → nghĩ ngay present continuous.',mistake:'She is play hoặc They is playing.'},
  e4:{goal:'Nói về khu phố, so sánh và chỉ đường.',steps:['Học từ chỉ địa điểm: market, supermarket, square…','Tính từ ngắn + er + than để so sánh hơn.','Luyện câu chỉ đường: go straight, turn left/right.'],example:'This street is wider than that street. Turn left at the corner.',tip:'Có “than” thường cần dạng so sánh hơn.',mistake:'more wider.'},
  e5:{goal:'Phân biệt cách phát âm đuôi -s /s/ và /z/.',steps:['Sau âm vô thanh thường đọc /s/.','Sau âm hữu thanh thường đọc /z/.','Đọc thành tiếng từng từ, đừng chỉ nhìn chữ.'],example:'books /s/; pens /z/.',tip:'Đặt tay lên cổ: âm rung thường dẫn tới /z/.',mistake:'Cho rằng mọi chữ s cuối đều đọc giống nhau.'}
 }
};

var G2M={
 m1:['Ôn chắc số đến 100 và cách so sánh số.',['Đọc số theo chục và đơn vị.','Dùng tia số để biết số trước/sau.','Khi so sánh, nhìn hàng chục trước rồi hàng đơn vị.'],'47 gồm 4 chục và 7 đơn vị.','Tách số thành chục + đơn vị.','Đọc nhầm hàng chục và hàng đơn vị.'],
 m2:['Cộng, trừ qua 10 trong phạm vi 20.',['Muốn cộng qua 10, tách một số để làm tròn 10 trước.','Muốn trừ qua 10, tách số trừ hoặc lùi về 10 rồi trừ tiếp.','Luyện bảng cộng/trừ để tính nhẩm nhanh.'],'9 + 6 = 9 + 1 + 5 = 15.','Hãy “về 10” trước.','Đếm từng đơn vị quá lâu và dễ sai.'],
 m3:['Hiểu ki-lô-gam và lít.',['kg dùng đo khối lượng.','l dùng đo dung tích.','Bài toán thường yêu cầu cộng hoặc trừ các lượng cùng đơn vị.'],'Bao gạo 12 kg, dùng 2 kg thì còn 10 kg.','Nhìn đơn vị trước khi tính.','Cộng kg với lít.'],
 m4:['Cộng, trừ có nhớ trong phạm vi 100.',['Đặt tính thẳng hàng chục và hàng đơn vị.','Tính hàng đơn vị trước.','Nếu đủ 10 thì nhớ 1 chục; khi trừ có thể phải mượn 1 chục.'],'27 + 8 = 35.','Đơn vị trước, chục sau.','Đặt lệch cột số.'],
 m5:['Nhận biết điểm, đoạn thẳng, đường thẳng, đường gấp khúc và tứ giác.',['Điểm được đặt tên bằng chữ cái.','Đoạn thẳng có hai đầu mút.','Độ dài đường gấp khúc bằng tổng độ dài các đoạn.'],'3 cm + 4 cm = 7 cm.','Nhìn hình rồi gọi đúng tên trước khi tính.','Nhầm đường thẳng với đoạn thẳng.'],
 m6:['Đọc giờ, phút, ngày và tháng.',['1 giờ = 60 phút; 1 ngày = 24 giờ.','Đọc kim giờ trước, kim phút sau.','Dùng lịch để tìm thứ, ngày, tháng.'],'Từ 7 giờ đến 9 giờ là 2 giờ.','Vẽ đồng hồ nhỏ nếu khó hình dung.','Nhầm giờ bắt đầu với thời lượng.'],
 m7:['Ôn tập học kì I.',['Chia kiến thức thành nhóm: số và phép tính; đo lường; hình học; thời gian.','Mỗi nhóm làm vài bài ngắn rồi mới làm bài tổng hợp.','Câu sai phải làm lại ngay.'],'Ôn 10 phút tính toán + 5 phút hình/đo + 5 phút bài toán.','Ôn ít nhưng đều.','Chỉ đọc lại mà không tự làm bài.'],
 m8:['Hiểu phép nhân và phép chia.',['Nhân là cộng các nhóm bằng nhau.','Chia là chia đều hoặc tìm số nhóm.','Học chắc bảng nhân/chia 2 và 5.'],'3 nhóm, mỗi nhóm 2 quả: 2×3 = 6.','Vẽ nhóm chấm tròn nếu chưa nhớ.','Nhầm số nhóm với số phần tử mỗi nhóm.'],
 m9:['Nhận biết khối trụ và khối cầu.',['Khối cầu tròn đều như quả bóng.','Khối trụ có hai mặt đáy tròn như lon nước.','Liên hệ với đồ vật thật.'],'Quả bóng gần giống khối cầu; lon nước gần giống khối trụ.','Cầm vật thật và xoay để quan sát.','Chỉ nhìn một mặt rồi gọi tên khối.'],
 m10:['Đọc, viết và so sánh số đến 1 000.',['Số có ba chữ số gồm trăm, chục, đơn vị.','So sánh hàng trăm trước.','Biết số liền trước, liền sau.'],'325 = 300 + 20 + 5.','Đọc từ hàng trăm sang phải.','Bỏ quên chữ số 0 ở một hàng.'],
 m11:['Đo độ dài và sử dụng tiền Việt Nam.',['1 m = 10 dm = 100 cm.','Chọn đơn vị phù hợp với vật cần đo.','Khi mua bán, lấy tiền có trừ tiền phải trả.'],'20 000 đồng − 15 000 đồng = 5 000 đồng.','Viết đơn vị sau kết quả.','Đổi đơn vị sai trước khi tính.'],
 m12:['Cộng, trừ trong phạm vi 1 000.',['Đặt thẳng hàng trăm, chục, đơn vị.','Tính từ phải sang trái.','Kiểm tra bằng phép tính ngược khi có thể.'],'210 + 120 = 330.','Mỗi cột chỉ tính với cùng một hàng.','Đặt số lệch cột.'],
 m13:['Đọc dữ liệu đơn giản và hiểu chắc chắn/có thể/không thể.',['Kiểm đếm từng loại rồi ghi số lượng.','Đọc biểu đồ tranh theo chú giải.','Phân biệt sự kiện chắc chắn, có thể và không thể.'],'Trong túi chỉ có bóng đỏ thì lấy được bóng đỏ là chắc chắn.','Hỏi “có xảy ra mọi lần không?”.','Nhầm “có thể” với “chắc chắn”.'],
 m14:['Ôn tập cuối năm.',['Ôn theo từng mảng nhỏ.','Làm lại câu từng sai.','Sau đó mới làm bài tổng hợp có thời gian.'],'Mỗi ngày chọn 2 mảng kiến thức, không ôn dồn tất cả.','Sai đâu ôn đó.','Chỉ làm câu dễ đã thuộc.']
};

var EN2={
 e1:['pizza, pasta, popcorn','The pizza is yummy.'],e2:['kite, bike, kitten','Is she flying a kite? – Yes, she is.'],
 e3:['sea, sand, sail','I can see the sea.'],e4:['river, road, rabbit','I can see a river.'],
 e5:['classroom, desk, book','This is my classroom.'],e6:['farm, cow, hen','I can see a cow.'],
 e7:['kitchen, cup, cake','The cup is in the kitchen.'],e8:['village, road, house','This is my village.'],
 e9:['shop, rice, milk','I want some milk.'],e10:['zoo, monkey, tiger','I can see a monkey.'],
 e11:['playground, ball, slide','I like the swing.'],e12:['café, cake, juice','I like orange juice.'],
 e13:['eleven, twelve, thirteen','Eleven plus one is twelve.'],e14:['mother, father, brother','This is my mother.'],
 e15:['shirt, dress, shoes','I like this shirt.'],e16:['tent, camp, lake','The tent is near the lake.']
};

function genericGuide(s,id,label){
 if(G===6&&G6[s]&&G6[s][id])return G6[s][id];
 if(G===2&&s==='math'&&G2M[id]){var x=G2M[id];return{goal:x[0],steps:x[1],example:x[2],tip:x[3],mistake:x[4]}}
 if(G===2&&s==='lit'){
   return{goal:'Chuẩn bị '+label+' bằng cách đọc hiểu, luyện từ và câu, rồi tập viết/nói ngắn.',
    steps:['Đọc thành tiếng chậm và rõ 2 lần.','Sau mỗi đoạn, tự kể lại bằng 1 câu ngắn.','Khoanh từ chưa hiểu và tìm từ chỉ sự vật, hoạt động, đặc điểm.','Tập viết 3–4 câu đúng dấu câu về chủ điểm của tuần.'],
    example:'Cách học dễ: đọc → kể lại → tìm từ → viết 3 câu → đọc lại sửa lỗi.',
    tip:'Mỗi lần chỉ học một việc nhỏ, xong mới chuyển sang việc tiếp theo.',
    mistake:'Đọc hết bài nhưng không tự kể lại bằng lời của mình.'}
 }
 if(G===2&&s==='eng'){
   var base=id,rev={f1:'e2',r1:'e4',f2:'e6',r2:'e8',f3:'e10',r3:'e12',f4:'e14',r4:'e16'};if(rev[id])base=rev[id];
   var x=EN2[base]||['4–6 từ mới của bài','I can see it.'];
   return{goal:'Nghe – nói được từ mới và dùng được mẫu câu đơn giản của '+label+'.',
    steps:['Nghe/đọc từng từ mới 3 lần: '+x[0]+'.','Nhìn tranh hoặc tưởng tượng đồ vật khi đọc từ.','Đọc mẫu câu chậm, chia thành từng cụm.','Đổi một từ trong mẫu câu để tạo câu mới.'],
    example:'Mẫu: '+x[1],
    tip:'Lớp 2: nghe và nói trước, viết sau.',
    mistake:'Cố học thuộc chữ nhưng không đọc thành tiếng.'}
 }
 return{goal:'Nắm ý chính của '+label+'.',steps:['Đọc mục tiêu bài.','Xem một ví dụ đơn giản.','Tự nói lại bằng lời của mình.','Làm vài câu cơ bản để kiểm tra.'],example:'Học theo thứ tự: hiểu → xem ví dụ → tự làm.',tip:'Nếu chưa giải thích lại được thì chưa cần học phần khó hơn.',mistake:'Học thuộc đáp án mà chưa hiểu cách làm.'}
}

function progressState(){var st=state();st.studyProgress=st.studyProgress||{};return st}
function getProgress(s){var st=progressState();return st.studyProgress[s]||''}
function setProgress(s,id){var st=progressState();st.studyProgress[s]=id;save(st);addProgressCard(s);decorateToday();toast('Đã nhớ tiến độ '+SUBS[s]+'.')}
function suggestedTopic(s){
 var p=planFor(currentWeek());if(!p||!p[s]||!p[s].length)return curriculum[s].topics[0][0];
 var id=p[s][p[s].length-1],exists=curriculum[s].topics.some(function(t){return t[0]===id});
 return exists?id:curriculum[s].topics[0][0]
}
function topicIndex(s,id){for(var i=0;i<curriculum[s].topics.length;i++)if(curriculum[s].topics[i][0]===id)return i;return 0}
function topicLabel(s,id){var t=curriculum[s].topics.find(function(x){return x[0]===id});return t?t[1]:id}
function addProgressCard(s){
 var el=document.getElementById(s);if(!el)return;var old=el.querySelector('.actual-progress');if(old)old.remove();
 var top=el.querySelector('.top');if(!top)return;
 var saved=getProgress(s),sug=suggestedTopic(s),chosen=saved||sug;
 var d=document.createElement('div');d.className='card actual-progress';
 var opts=curriculum[s].topics.map(function(t){return'<option value="'+t[0]+'" '+(t[0]===chosen?'selected':'')+'>'+t[1]+'</option>'}).join('');
 d.innerHTML='<div class="progress-head"><div><b>🎯 Tiến độ thực tế</b><h3>Con đã học '+SUBS[s]+' đến bài/chủ đề nào rồi?</h3><div class="muted">'+(saved?'Đã lưu tiến độ của con.':'Hệ thống đang gợi ý theo tuần '+currentWeek()+': '+topicLabel(s,sug))+'</div></div><span class="tag">'+(saved?'Theo học sinh':'Gợi ý')+'</span></div>'+
 '<div class="progress-actions"><select class="progress-select" id="actual-'+s+'">'+opts+'</select><button class="btn primary" onclick="saveActualProgress(\''+s+'\')">Lưu tiến độ</button></div>'+
 '<div class="coach-actions"><button class="btn soft" onclick="openReviewCoach(\''+s+'\')">🔁 Ôn kiến thức đã học</button><button class="btn primary" onclick="openNextCoach(\''+s+'\')">🌱 Học bài kế tiếp thật dễ</button></div>';
 top.parentNode.insertBefore(d,top.nextSibling)
}
window.saveActualProgress=function(s){var e=document.getElementById('actual-'+s);if(e)setProgress(s,e.value)};
function ensureCoach(){
 if(document.getElementById('studyCoach'))return;
 var sec=document.createElement('section');sec.id='studyCoach';sec.className='section';sec.innerHTML='<div class="top"><div><button class="btn soft" id="coachBack">← Quay lại môn học</button><h1 id="coachTitle" style="margin-top:10px"></h1><div class="muted" id="coachSub"></div></div><span class="tag">Gia sư theo tiến độ</span></div><div id="coachBody"></div>';
 var tests=document.getElementById('tests');tests.parentNode.insertBefore(sec,tests)
}
function guideHtml(g){
 return '<div class="coach-grid">'+
 '<div class="coach-box"><span class="coach-num">1</span><h3>Cần hiểu gì?</h3><p>'+g.goal+'</p></div>'+
 '<div class="coach-box"><span class="coach-num">2</span><h3>Hiểu từng bước</h3><ol>'+g.steps.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ol></div>'+
 '<div class="coach-box"><span class="coach-num">3</span><h3>Ví dụ thật dễ</h3><p class="coach-example">'+g.example+'</p></div>'+
 '<div class="coach-box"><span class="coach-num">4</span><h3>Mẹo nhớ</h3><p>💡 '+g.tip+'</p><div class="warn">⚠️ Hay sai: '+g.mistake+'</div></div></div>'
}
window.openReviewCoach=function(s){
 ensureCoach();var saved=getProgress(s)||suggestedTopic(s),idx=topicIndex(s,saved),g=genericGuide(s,saved,topicLabel(s,saved));
 go('studyCoach');document.getElementById('coachBack').onclick=function(){go(s)};document.getElementById('coachTitle').textContent='🔁 Ôn '+SUBS[s]+' đến: '+topicLabel(s,saved);
 document.getElementById('coachSub').textContent='Ôn theo tiến độ thực tế của học sinh, không chạy theo lịch dự kiến.';
 document.getElementById('coachBody').innerHTML=guideHtml(g)+'<div class="card coach-cta"><div><b>Kiểm tra xem con còn nhớ không</b><div class="muted">Đề ôn lấy từ tất cả phần đã học đến bài này, ưu tiên phần gần nhất.</div></div><button class="btn primary" onclick="startProgressReview(\''+s+'\')">Làm '+(G===2?12:15)+' câu ôn tập</button></div>'
};
window.openNextCoach=function(s){
 ensureCoach();var saved=getProgress(s)||suggestedTopic(s),idx=topicIndex(s,saved),next=Math.min(idx+1,curriculum[s].topics.length-1),id=curriculum[s].topics[next][0],same=next===idx,g=genericGuide(s,id,topicLabel(s,id));
 go('studyCoach');document.getElementById('coachBack').onclick=function(){go(s)};document.getElementById('coachTitle').textContent=same?'🌟 Con đã đến phần cuối hiện có':'🌱 Bài kế tiếp: '+topicLabel(s,id);
 document.getElementById('coachSub').textContent=same?'Hãy củng cố thật chắc phần này trước.':'Học trước nhẹ nhàng để khi vào lớp con thấy bài quen thuộc.';
 document.getElementById('coachBody').innerHTML=guideHtml(g)+'<div class="card coach-cta"><div><b>Thử ngay sau khi hiểu</b><div class="muted">Chỉ dùng câu mức cơ bản để kiểm tra xem con đã “bắt được” ý bài mới chưa.</div></div><button class="btn primary" onclick="startPreviewQuiz(\''+s+'\',\''+id+'\')">Làm 6 câu khởi động</button></div>'
};
window.startProgressReview=function(s){
 var id=getProgress(s)||suggestedTopic(s),idx=topicIndex(s,id),topics=curriculum[s].topics.slice(0,idx+1).map(function(t){return t[0]}),pool=poolsForTopics(s,topics,[1,2,3]),used={},n=G===2?12:15;
 items=stablePick(pool,n,'progress-review-'+dateLabel()+document.getElementById('student').value+s,{});
 if(items.length<n){var fill=allPoolsForSubject(s).filter(function(q){return q.l<=3});addPicked(items,fill,n-items.length,'progress-fill-'+s,used)}
 qi=0;ctx={s:'progressReview',subject:s};before=s;go('quiz');renderQuestion()
};
window.startPreviewQuiz=function(s,id){
 var pool=poolsForTopics(s,[id],[1,2]);items=stablePick(pool,6,'preview-'+dateLabel()+document.getElementById('student').value+s+id,{});
 qi=0;ctx={s:'preview',subject:s};before=s;go('quiz');renderQuestion()
};
function actualTopic(s){return getProgress(s)||null}
function overrideDaily(){
 window.startDaily=function(){
  var used={},out=[],student=document.getElementById('student').value,total=G===2?18:24,curPer=G===2?3:4,oldPer=G===2?1:2;
  ['math','lit','eng'].forEach(function(s){
    var cur=actualTopic(s),p=planFor(currentWeek()),topics=cur?[cur]:(p&&p[s]?p[s]:[curriculum[s].topics[0][0]]);
    var ci=topicIndex(s,topics[topics.length-1]),prevId=curriculum[s].topics[Math.max(0,ci-1)][0];
    addPicked(out,poolsForTopics(s,topics,[1,2]),curPer,'actual-'+dateLabel()+student+s,used);
    addPicked(out,poolsForTopics(s,[prevId],[1,2]),oldPer,'actual-old-'+dateLabel()+student+s,used)
  });
  var apply=[],hard=[];['math','lit','eng'].forEach(function(s){var cur=actualTopic(s),p=planFor(currentWeek()),ts=cur?[cur]:(p&&p[s]?p[s]:[]);apply=apply.concat(poolsForTopics(s,ts,[3]));hard=hard.concat(poolsForTopics(s,ts,[4]))});
  addPicked(out,apply,G===2?4:4,'actual-apply-'+dateLabel()+student,used);addPicked(out,hard,2,'actual-hard-'+dateLabel()+student,used);
  if(out.length<total){var fill=[];['math','lit','eng'].forEach(function(s){var id=actualTopic(s)||suggestedTopic(s),ix=topicIndex(s,id),ts=curriculum[s].topics.slice(0,ix+1).map(function(t){return t[0]});fill=fill.concat(poolsForTopics(s,ts,[1,2,3]))});addPicked(out,fill,total-out.length,'actual-fill-'+dateLabel()+student,used)}
  items=out.slice(0,total);qi=0;ctx={s:'daily'};before='home';go('quiz');renderQuestion()
 }
}
function decorateToday(){
 var box=document.getElementById('todayPlan');if(!box)return;
 ['math','lit','eng'].forEach(function(s,i){var id=getProgress(s);if(!id)return;var cards=box.querySelectorAll('.focuscard');if(cards[i]){cards[i].innerHTML+='<div class="actual-chip">✓ Thực tế: '+topicLabel(s,id)+'</div>'}})
}
function install(){
 ensureCoach();overrideDaily();var old=window.renderSubject;if(!old)return;
 window.renderSubject=function(s){old(s);addProgressCard(s)};
 ['math','lit','eng'].forEach(function(s){window.renderSubject(s)});decorateToday()
}
var st=document.createElement('style');st.textContent='.actual-progress{margin:0 0 16px;border-left:5px solid #2563eb}.progress-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.progress-head h3{margin:5px 0}.progress-actions{display:flex;gap:10px;margin-top:12px;flex-wrap:wrap}.progress-select{flex:1;min-width:240px;padding:11px 12px;border:1px solid var(--line);border-radius:12px;background:white;font:inherit}.coach-actions{display:flex;gap:10px;margin-top:10px;flex-wrap:wrap}.coach-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.coach-box{background:white;border:1px solid var(--line);border-radius:18px;padding:18px;position:relative}.coach-box h3{margin:2px 0 10px}.coach-box li{margin:8px 0;line-height:1.5}.coach-num{display:inline-flex;width:28px;height:28px;border-radius:50%;align-items:center;justify-content:center;background:#dbeafe;color:#1d4ed8;font-weight:900}.coach-example{font-size:18px;font-weight:750;line-height:1.55;background:#f8fafc;padding:12px;border-radius:12px}.warn{margin-top:12px;padding:10px;border-radius:10px;background:#fff7ed;color:#9a3412}.coach-cta{margin-top:14px;display:flex;align-items:center;justify-content:space-between;gap:12px}.actual-chip{margin-top:8px;font-size:12px;font-weight:800;color:#166534;background:#ecfdf3;padding:5px 8px;border-radius:999px;display:inline-block}@media(max-width:700px){.coach-grid{grid-template-columns:1fr}.coach-cta,.progress-head{align-items:stretch;flex-direction:column}}';document.head.appendChild(st);
window.addEventListener('load',install);
})();