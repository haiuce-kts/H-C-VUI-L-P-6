(function(){
var G=window.HSG_GRADE||6;
var TITLE=G===2?'Nền móng HSG Toán · Tiếng Việt · Tiếng Anh':'Lộ trình HSG Toán · Ngữ văn · Tiếng Anh';
var SUB={math:G===2?'Toán tư duy':'Toán HSG',lit:G===2?'Tiếng Việt nâng cao':'Ngữ văn HSG',eng:'Tiếng Anh HSG'};
function H(id,s,l,q,a,c,e,skill){return{id:'hsg'+G+'_'+s+'_'+id,s:s,t:'hsg',l:l,d:l,q:q,a:a,c:c,h:'Hãy tìm dữ kiện quan trọng và loại phương án sai.',e:e,skill:skill||''}}
var BANK={math:[],lit:[],eng:[]};
if(G===6){
 BANK.math=[
  H('m01','math',1,'Số nhỏ nhất lớn hơn 100 chia hết cho cả 6 và 8 là:',['108','112','120','144'],2,'BCNN(6,8)=24; bội đầu tiên của 24 lớn hơn 100 là 120.','bcnn'),
  H('m02','math',1,'Nếu a chia 5 dư 2 thì a+8 chia 5 dư:',['0','1','2','3'],0,'2+8=10 nên dư 0.','remainder'),
  H('m03','math',2,'Có bao nhiêu số tự nhiên có hai chữ số chia hết cho 7?',['12','13','14','15'],1,'Các bội từ 14 đến 98: (98-14)/7+1=13.','count'),
  H('m04','math',2,'Tổng 1+2+...+20 có chia hết cho 3 không?',['Có','Không','Chỉ khi bỏ số 20','Không xác định'],0,'Tổng=20×21/2=210, chia hết cho 3.','sum'),
  H('m05','math',2,'Một số có dạng 3a5 chia hết cho 9. a bằng:',['0','1','4','7'],1,'3+a+5=8+a phải chia hết cho 9, nên a=1.','divisibility'),
  H('m06','math',3,'Ba số tự nhiên liên tiếp có tổng bằng 96. Số lớn nhất là:',['31','32','33','34'],2,'Ba số là 31,32,33.','algebra'),
  H('m07','math',3,'Một hình chữ nhật có chu vi 50 cm. Chiều dài hơn chiều rộng 5 cm. Diện tích là:',['150','156','160','175'],0,'L+W=25, L-W=5 ⇒ L=15, W=10, S=150.','geometry'),
  H('m08','math',3,'Tìm số tự nhiên n nhỏ nhất để 2^n > 1000.',['8','9','10','11'],2,'2^9=512<1000, 2^10=1024>1000.','power'),
  H('m09','math',3,'Một lớp chia nhóm 4, nhóm 6 hoặc nhóm 9 đều vừa đủ. Sĩ số nhỏ nhất lớn hơn 30 là:',['36','54','72','108'],0,'BCNN(4,6,9)=36.','bcnn'),
  H('m10','math',4,'Có 10 điểm phân biệt trên một đường thẳng. Có bao nhiêu đoạn thẳng có hai đầu mút là hai điểm đã cho?',['45','50','90','100'],0,'Chọn 2 điểm trong 10: 10×9/2=45.','combinatorics'),
  H('m11','math',4,'Số 2026 viết thành tổng của hai số nguyên tố lẻ. Tổng hai số đó luôn là số:',['lẻ','chẵn','nguyên tố','chia hết cho 3'],1,'Tổng hai số lẻ luôn chẵn.','parity'),
  H('m12','math',4,'Tìm chữ số tận cùng của 7^2026.',['1','3','7','9'],3,'Chu kì tận cùng của 7 là 7,9,3,1; 2026 dư 2 nên tận cùng 9.','cycle')
 ];
 BANK.lit=[
  H('v01','lit',1,'Đọc: “Trời tối dần. Nam vẫn ngồi bên cửa sổ chờ bố.” Chi tiết “vẫn ngồi chờ” gợi rõ nhất điều gì?',['Nam buồn ngủ','Nam mong ngóng bố','Nam sợ bóng tối','Nam đang học'],1,'Hành động tiếp tục chờ cho thấy sự mong ngóng.','inference'),
  H('v02','lit',1,'Một câu trả lời đọc hiểu tốt cần ưu tiên:',['Cảm xúc chung chung','Dẫn chứng phù hợp với nhận xét','Kể lại toàn bài','Dùng thật nhiều từ khó'],1,'Nhận xét phải có bằng chứng từ văn bản.','evidence'),
  H('v03','lit',2,'Đọc: “Cây bàng trút lá, sân trường như rộng hơn.” Tác dụng của so sánh “như rộng hơn” là:',['Làm rõ cảm giác không gian khi lá rụng','Giải thích cấu tạo cây','Đếm số lá','Nêu quy tắc ngữ pháp'],0,'Hình ảnh giúp người đọc cảm nhận sự thay đổi của không gian.','image'),
  H('v04','lit',2,'Câu nào là nhận xét có thể phát triển thành luận điểm?',['Nhân vật có sự trưởng thành sau sai lầm.','Truyện có 4 trang.','Tên nhân vật có hai tiếng.','Bài được in màu đen.'],0,'Luận điểm phải có ý nghĩa phân tích, không phải dữ kiện vụn.','claim'),
  H('v05','lit',2,'Muốn tóm tắt một truyện, chi tiết nào nên giữ nhất?',['Chi tiết làm thay đổi diễn biến','Màu áo nhân vật phụ','Một từ miêu tả cảnh','Số dòng của đoạn'],0,'Tóm tắt cần giữ sự kiện chính và bước ngoặt.','summary'),
  H('v06','lit',3,'Câu “Em đồng ý với nhân vật vì…” còn thiếu yếu tố nào để thuyết phục?',['Dẫn chứng và lí giải','Tên trường','Số trang','Ngày đọc'],0,'Ý kiến cần được chứng minh bằng dẫn chứng và lí giải.','argument'),
  H('v07','lit',3,'Đọc: “Mẹ không trách. Mẹ chỉ đặt tay lên vai tôi.” Sự im lặng của mẹ có thể hiểu sâu nhất là:',['Sự bao dung nhưng nghiêm khắc khiến nhân vật tự nhận lỗi','Mẹ không quan tâm','Mẹ quên chuyện','Mẹ không nghe thấy'],0,'Hành động ít lời có thể tạo sức nặng cảm xúc và khiến nhân vật tự ý thức.','subtext'),
  H('v08','lit',3,'Khi phân tích một hình ảnh thơ, trình tự hợp lí nhất là:',['Nêu hình ảnh → chỉ từ ngữ nổi bật → giải thích cảm xúc/ý nghĩa','Kể tiểu sử tác giả → chép bài → kết luận','Chỉ nói “hay”','Đếm số chữ'],0,'Phân tích phải đi từ bằng chứng ngôn ngữ tới ý nghĩa.','analysis'),
  H('v09','lit',3,'Cách mở đoạn nào rõ luận điểm nhất?',['Qua hành động…, nhân vật cho thấy…','Bài này rất hay.','Em không biết nói gì.','Ngày hôm nay trời đẹp.'],0,'Mở đoạn cần nêu trực tiếp nhận xét sẽ chứng minh.','paragraph'),
  H('v10','lit',4,'Hai nhân vật cùng mắc lỗi, nhưng một người nhận lỗi và sửa sai còn người kia đổ lỗi. Khi so sánh, tiêu chí có giá trị nhất là:',['Cách họ chịu trách nhiệm sau sai lầm','Chiều cao','Tên gọi','Số câu thoại'],0,'So sánh cần dựa vào phương diện có ý nghĩa với chủ đề.','compare'),
  H('v11','lit',4,'Một đoạn văn có đủ dẫn chứng nhưng vẫn yếu. Nguyên nhân có thể là:',['Chưa giải thích dẫn chứng chứng minh luận điểm thế nào','Dẫn chứng quá đúng','Có dấu chấm','Có chủ ngữ'],0,'Dẫn chứng không tự nói; người viết phải phân tích.','reasoning'),
  H('v12','lit',4,'Kết đoạn nào có sức khái quát tốt nhất?',['Từ chi tiết ấy, nhân vật không chỉ thay đổi cách nghĩ mà còn trưởng thành trong cách ứng xử.','Em hết ý.','Truyện đã kết thúc.','Nhân vật có tên rất hay.'],0,'Kết đoạn cần nâng từ chi tiết lên ý nghĩa.','synthesis')
 ];
 BANK.eng=[
  H('e01','eng',1,'Choose the correct sentence.',['She goes to school at 6:45 every day.','She go to school at 6:45 every day.','She going to school every day.','She is go to school.'],0,'Third-person singular in the present simple takes -s/-es.','grammar'),
  H('e02','eng',1,'Choose the word that is closest in meaning to “helpful”.',['willing to help','very noisy','easy to break','full of danger'],0,'Helpful means willing to help others.','vocab'),
  H('e03','eng',2,'Find the error: “Look! The boys play football in the yard.”',['Look','The boys','play','in the yard'],2,'An action happening now needs present continuous: are playing.','error'),
  H('e04','eng',2,'Choose the best option: This street is ___ than that one.',['narrow','narrower','more narrowest','the narrower'],1,'Use comparative adjective + than.','comparison'),
  H('e05','eng',2,'Complete: You ___ leave rubbish in the cave.',['must','mustn’t','are','have'],1,'Mustn’t expresses prohibition.','modal'),
  H('e06','eng',2,'Choose the odd word out.',['waterfall','cave','mountain','homework'],3,'The first three are natural features.','lexical'),
  H('e07','eng',3,'Rewrite mentally: “The blue house is smaller than the red house.” Which is equivalent?',['The red house is bigger than the blue house.','The red house is smaller.','Both houses are equal.','The blue house is biggest.'],0,'Reverse the comparison correctly.','transformation'),
  H('e08','eng',3,'Choose the correct form: My sister is very ___. She always helps me with homework.',['help','helpful','helpfully','helped'],1,'An adjective is needed after “is very”.','wordform'),
  H('e09','eng',3,'Read: “Nam usually walks to school, but today it is raining, so his father is driving him.” What is unusual today?',['Nam is going by car.','Nam is walking.','It is sunny.','His father is at school.'],0,'Usually he walks; today he is driven by car.','reading'),
  H('e10','eng',4,'Choose the best correction: “There is two lamps next to the bed.”',['There are two lamps next to the bed.','There is two lamp next the bed.','There are two lamp next to bed.','There be two lamps.'],0,'Plural “two lamps” requires “There are”.','editing'),
  H('e11','eng',4,'Complete the mini-cloze: “My neighbourhood is quiet ___ convenient. There is a supermarket, ___ there isn’t a cinema.”',['and / but','but / and','because / so','or / because'],0,'“and” adds; “but” contrasts.','cloze'),
  H('e12','eng',4,'Which sentence shows the most natural reason?',['I like my new school because my teachers are friendly and the lessons are interesting.','I like school because friendly.','I liking school teacher.','School like me because lesson.'],0,'The sentence is grammatical, complete and logical.','writing')
 ];
}else{
 BANK.math=[
  H('m01','math',1,'Số nào vừa lớn hơn 40 vừa bé hơn 50 và có chữ số hàng đơn vị là 7?',['37','47','57','70'],1,'47 thỏa cả hai điều kiện.','logic'),
  H('m02','math',1,'Điền số: 9 + ? = 16.',['5','6','7','8'],2,'16-9=7.','missing'),
  H('m03','math',2,'Dãy số: 2, 5, 8, 11, __. Số tiếp theo là:',['12','13','14','15'],2,'Mỗi lần tăng 3.','pattern'),
  H('m04','math',2,'Mai có 8 nhãn vở, Lan nhiều hơn Mai 4 nhãn. Cả hai có tất cả:',['12','16','20','24'],2,'Lan có 12; cả hai có 20.','twostep'),
  H('m05','math',2,'Có 15 quả, chia đều vào 3 đĩa. Mỗi đĩa có:',['3','4','5','6'],2,'15:3=5.','division'),
  H('m06','math',3,'Tìm số: ? + 7 - 3 = 15.',['9','10','11','12'],2,'x+4=15 nên x=11.','equation'),
  H('m07','math',3,'Hai số có tổng 18 và hơn kém nhau 4. Hai số là:',['7 và 11','8 và 10','6 và 12','5 và 13'],0,'7+11=18 và 11-7=4.','sumdiff'),
  H('m08','math',3,'Có 3 áo và 2 quần khác nhau. Chọn 1 áo và 1 quần có bao nhiêu cách?',['5','6','8','9'],1,'3 lựa chọn áo × 2 lựa chọn quần = 6.','count'),
  H('m09','math',4,'Một số có hai chữ số. Tổng hai chữ số bằng 9. Chữ số hàng chục lớn hơn hàng đơn vị 3. Số đó là:',['36','63','72','54'],1,'6+3=9 và 6 hơn 3 là 3.','digits')
 ];
 BANK.lit=[
  H('v01','lit',1,'Đọc: “Bé thấy bà xách túi nặng nên chạy lại giúp.” Bé là người thế nào?',['biết quan tâm','lười biếng','hay giận','không chú ý'],0,'Hành động giúp bà cho thấy bé biết quan tâm.','infer'),
  H('v02','lit',1,'Từ nào là từ chỉ hoạt động?',['chạy','xanh','chiếc bàn','ngoan'],0,'“chạy” là hoạt động.','word'),
  H('v03','lit',2,'Câu nào viết đúng?',['Buổi sáng, em tự gấp chăn.','buổi sáng em tự gấp chăn','Buổi sáng em tự gấp chăn?','Gấp chăn em buổi sáng tự.'],0,'Câu có viết hoa, dấu câu và trật tự từ đúng.','sentence'),
  H('v04','lit',2,'Đọc: “Trời mưa to. Nam mang ô sang đón em.” Vì sao Nam mang ô?',['Để em không bị ướt','Để chơi bóng','Để ngủ','Để vẽ tranh'],0,'Suy luận từ trời mưa và hành động mang ô.','cause'),
  H('v05','lit',2,'Tiêu đề nào hợp nhất cho đoạn kể về các bạn cùng nhặt rác ở sân trường?',['Giữ sân trường sạch đẹp','Một chiếc xe mới','Ngày đi biển','Con mèo nhỏ'],0,'Tiêu đề phải nêu đúng ý chính.','title'),
  H('v06','lit',3,'Câu nào vừa kể việc làm vừa nêu cảm xúc?',['Em giúp mẹ tưới cây và thấy rất vui.','Cái ca màu xanh.','Cây có lá.','Mẹ ở nhà.'],0,'Câu A có hành động và cảm xúc.','writing'),
  H('v07','lit',3,'Hai câu “Lan đọc sách. Lan rất thích truyện.” Có thể nối tự nhiên thành:',['Lan đọc sách vì bạn rất thích truyện.','Lan sách truyện thích.','Đọc thích Lan truyện.','Lan và vì.'],0,'Dùng từ nối để thể hiện quan hệ hợp lí.','cohesion'),
  H('v08','lit',3,'Muốn kể lại một việc, thứ tự nào dễ hiểu nhất?',['Khi nào/ở đâu → việc làm → kết quả/cảm nghĩ','Cảm nghĩ → bỏ sự việc','Chỉ nói tên người','Các câu không liên quan'],0,'Kể theo trình tự giúp người đọc dễ theo dõi.','sequence'),
  H('v09','lit',4,'Đọc: “An làm vỡ cốc. An tự nhận lỗi và cùng mẹ dọn mảnh vỡ.” Điều đáng khen nhất là:',['An biết chịu trách nhiệm','Cốc bị vỡ','Mẹ có ở nhà','An biết tên cái cốc'],0,'Nhận lỗi và sửa hậu quả thể hiện trách nhiệm.','value')
 ];
 BANK.eng=[
  H('e01','eng',1,'Choose the English word for “diều”.',['kite','kitten','bike','cake'],0,'Kite = diều.','vocab'),
  H('e02','eng',1,'Which word begins with the /p/ sound?',['pizza','kite','sea','road'],0,'Pizza begins with /p/.','phonics'),
  H('e03','eng',2,'Choose the correct sentence.',['This is a kite.','This a kite is.','Is kite this a.','This are kite.'],0,'Use “This is a …”.','pattern'),
  H('e04','eng',2,'Choose the best answer: “What can you see?”',['I can see a river.','I am seven.','Good night.','My name is Linh.'],0,'The question asks what you can see.','dialogue'),
  H('e05','eng',2,'Which pair matches correctly?',['zoo – sở thú','zoo – cái bàn','kite – con hổ','cake – con đường'],0,'Zoo means sở thú.','meaning'),
  H('e06','eng',3,'Read: “Mai has a red kite. She is flying it in the backyard.” What is Mai doing?',['She is flying a kite.','She is riding a bike.','She is eating cake.','She is sleeping.'],0,'The text says she is flying a kite.','reading'),
  H('e07','eng',3,'Choose the correct question.',['Is this a bike?','This is a bike?','A bike this is?','Is a this bike?'],0,'Correct yes/no question: Is this a bike?','grammar'),
  H('e08','eng',3,'Choose the correct word order.',['I can see a blue van.','I blue can van see a.','A van I see blue can.','Can see I van a.'],0,'Subject + can + verb + object.','order'),
  H('e09','eng',4,'Which mini-dialogue is correct?',['Can you draw a van? – Yes, I can.','Can you a van? – Yes, I am.','Draw van? – Yes, it.','You can van? – I yes.'],0,'Use Can you + verb...? – Yes, I can.','dialogue')
 ];
}
var ROAD=G===6?{
 math:['1. Nền SGK đạt ≥90%, tính toán chắc và không sai câu cơ bản.','2. Số học nâng cao: chia hết, số nguyên tố, ƯCLN/BCNN, số dư, chẵn lẻ, chu kì.','3. Tư duy: quy luật, đếm, bài toán nhiều bước, hình học suy luận.','4. Tự luận: trình bày lời giải đầy đủ, chứng minh từng bước, đề hỗn hợp có thời gian.'],
 lit:['1. Đọc hiểu chính xác: sự việc, hình ảnh, từ khóa, mạch cảm xúc.','2. Phân tích: Nhận xét → Dẫn chứng → Giải thích; luyện tiếng Việt và liên kết.','3. Viết đoạn/bài: luận điểm rõ, dẫn chứng chọn lọc, phân tích sâu, diễn đạt có giọng riêng.','4. Đề HSG: đọc văn bản lạ, nghị luận/viết sáng tạo, quản trị thời gian và sửa bài.'],
 eng:['1. Nền chắc: vocabulary + grammar không mất điểm cơ bản.','2. Nâng cao: word form, error correction, sentence transformation, collocation.','3. Đọc: cloze, inference, reference words, paraphrase; viết đoạn có tổ chức.','4. Đề HSG: mixed grammar-vocab-reading-writing, chữa lỗi theo nhóm nguyên nhân.']
}:{
 math:['1. Số và phép tính thật chắc, tính nhẩm nhanh nhưng hiểu cách làm.','2. Quy luật, tìm số, bài toán 2 bước, tổng-hiệu đơn giản.','3. Logic, đếm cách, hình học trực quan, bài toán có nhiều dữ kiện.','4. Tập trình bày bằng lời: “Con biết gì? Con cần tìm gì? Con làm thế nào?”'],
 lit:['1. Đọc ngắn và trả lời Ai? Làm gì? Vì sao?','2. Từ và câu: sự vật, hoạt động, đặc điểm, dấu câu, từ nối.','3. Suy luận nguyên nhân-kết quả; kể lại bằng lời của mình.','4. Viết 4–6 câu mạch lạc có mở ý, việc chính và cảm nghĩ.'],
 eng:['1. Phonics và từ vựng: nghe-nói đúng trước khi viết.','2. Mẫu câu: hỏi-đáp đúng ngữ cảnh, trật tự từ chắc.','3. Đọc mini-dialogue/đoạn 2–3 câu và suy luận đơn giản.','4. Tự tạo câu mới từ mẫu đã học, không học thuộc máy móc.']
};
var OPEN=G===6?{
 math:[
  ['Số học','Chứng minh rằng tổng của ba số tự nhiên liên tiếp luôn chia hết cho 3.','Đặt ba số là n, n+1, n+2; tổng = 3n+3 = 3(n+1). Cần trình bày rõ vì sao biểu thức là bội của 3.'],
  ['Tư duy','Tìm số tự nhiên nhỏ nhất có đúng 12 ước dương. Thử xây dựng từ phân tích thừa số nguyên tố.','Dùng công thức số ước: nếu n=p^a q^b... thì số ước=(a+1)(b+1)...; so sánh các dạng 11, 5×1, 3×2.'],
  ['Hình học','Một hình chữ nhật có chu vi cố định 40 cm. Hãy tìm vài cặp chiều dài-rộng và đoán khi nào diện tích lớn nhất.','Lập bảng L+W=20; thử các cặp và nhận ra diện tích lớn khi hai cạnh gần nhau.']
 ],
 lit:[
  ['Đọc hiểu','Viết 5–7 câu phân tích một hành động nhỏ cho thấy nhân vật biết chịu trách nhiệm.','Bắt buộc có: nhận xét, một dẫn chứng, giải thích dẫn chứng, câu khái quát.'],
  ['Viết đoạn','Từ một lần em mắc lỗi, viết đoạn 8–10 câu tập trung vào khoảnh khắc em nhận ra điều cần thay đổi.','Không kể lan man; chọn 1–2 chi tiết, diễn tả suy nghĩ trước/sau và bài học.'],
  ['Phản biện','Có ý kiến: “Chỉ cần xin lỗi là đủ để sửa một sai lầm.” Hãy viết đoạn ngắn đồng ý hoặc không đồng ý.','Nêu quan điểm rõ, lí do, ví dụ và kết luận.']
 ],
 eng:[
  ['Sentence transformation','Rewrite without changing meaning: “The red street is wider than the blue street.” Begin: “The blue street …”','Expected structure: The blue street is narrower than the red street.'],
  ['Writing','Write 70–90 words about a good friend. Include appearance/personality, one example of what the friend does, and why you value the friendship.','Check organization, correct tense, varied adjectives, and one specific example.'],
  ['Error correction','Create and correct five sentences that mix present simple and present continuous. Explain the time signal in each sentence.','Use habit signals (usually/every day) versus now signals (now/look/listen).']
 ]
}:{
 math:[
  ['Bài toán 2 bước','Lan có 8 nhãn vở. Mai nhiều hơn Lan 4 nhãn. Hai bạn có tất cả bao nhiêu nhãn? Con hãy viết đủ hai phép tính và câu trả lời.','Bước 1 tìm số của Mai; bước 2 cộng hai bạn.'],
  ['Quy luật','Viết tiếp 3 số và nói quy luật: 3, 6, 9, 12, ...','Mỗi số tăng 3. Điều quan trọng là con nói được quy luật bằng lời.'],
  ['Logic','Có 3 áo và 2 quần. Hãy vẽ hoặc liệt kê tất cả cách chọn 1 áo với 1 quần.','Có 6 cách; nên vẽ bảng/nhánh để không bỏ sót.']
 ],
 lit:[
  ['Đọc hiểu','Đọc một đoạn 3–4 câu rồi trả lời: Ai? Làm gì? Vì sao? Em hiểu nhân vật thế nào?','Trả lời từng câu ngắn trước, sau đó gom thành một câu hoàn chỉnh.'],
  ['Viết','Viết 4 câu kể một việc em tự làm ở nhà và cảm xúc của em.','Khung: Khi nào → Em làm gì → Kết quả → Em cảm thấy thế nào.'],
  ['Sửa câu','Sửa ba câu bị lặp từ “em” quá nhiều bằng cách dùng từ thay thế hoặc gộp ý.','Mục tiêu: câu tự nhiên, không mất ý.']
 ],
 eng:[
  ['Speaking','Say 4 words of the current unit, then make one sentence with one of them.','Pronounce first, then speak the full sentence.'],
  ['Reading','Read a 2-sentence mini text and answer: Who? What is he/she doing?','Find the subject and action verb.'],
  ['Writing','Write 3 short sentences using one current unit pattern but change the key word each time.','Keep the sentence pattern correct while changing vocabulary.']
 ]
};
var SCHEDULE=G===6?[
 ['Thứ 2','45 phút','Toán HSG','1 chuyên đề + 4 bài, ghi lại câu sai.'],
 ['Thứ 3','35 phút','Tiếng Anh HSG','Grammar/word form + 1 đoạn đọc ngắn.'],
 ['Thứ 4','45 phút','Ngữ văn HSG','Đọc hiểu 20 phút + viết đoạn 20 phút.'],
 ['Thứ 5','45 phút','Toán HSG','Bài nhiều bước/tự luận; không xem đáp án sớm.'],
 ['Thứ 6','35 phút','Tiếng Anh HSG','Cloze/reading + sentence transformation.'],
 ['Thứ 7','60–75 phút','Đề luân phiên','Tuần 1 Toán, tuần 2 Văn, tuần 3 Anh; chữa đề lâu bằng lúc làm.'],
 ['Chủ nhật','20 phút','Sổ lỗi','Chỉ làm lại câu từng sai và đọc 20–30 phút.']
]:[
 ['Thứ 2','25 phút','Toán tư duy','Tính nhẩm 5 phút + 3 bài logic.'],
 ['Thứ 3','20 phút','Tiếng Việt','Đọc ngắn → Ai/Làm gì/Vì sao → kể lại.'],
 ['Thứ 4','20 phút','Tiếng Anh','Phonics + 5 từ + 3 mẫu câu.'],
 ['Thứ 5','25 phút','Toán tư duy','Bài toán 2 bước + quy luật.'],
 ['Thứ 6','20 phút','Tiếng Việt','Từ/câu + viết 3–4 câu.'],
 ['Thứ 7','30 phút','Tổng hợp vui','Mỗi môn một thử thách ngắn.'],
 ['Chủ nhật','Nghỉ/đọc sách','Đọc tự do','Không biến HSG thành học dồn.']
];
function score(s){
 var st=state(),pref='hsg'+G+'_'+s+'_',ids=Object.keys(st.answers||{}).filter(function(id){return id.indexOf(pref)===0});
 if(!ids.length)return 0;var ok=ids.filter(function(id){return st.answers[id].correct}).length;return Math.round(ok/ids.length*100)
}
function phase(s){
 var x=score(s);if(x>=90)return 4;if(x>=75)return 3;if(x>=55)return 2;return 1
}
function addUI(){
 if(document.getElementById('hsg'))return;
 var nav=document.querySelector('.nav'),reportBtn=nav.querySelector('[data-page="report"]'),b=document.createElement('button');b.dataset.page='hsg';b.innerHTML='🏅 '+(G===2?'Nền móng HSG':'Lộ trình HSG');b.onclick=function(){go('hsg');renderHsg()};nav.insertBefore(b,reportBtn);
 var sec=document.createElement('section');sec.id='hsg';sec.className='section';
 sec.innerHTML='<div class="top"><div><h1>🏅 '+TITLE+'</h1><div class="muted">'+(G===2?'Xây nền tư duy sớm, học chắc và thích học.':'Mục tiêu dài hạn: tư duy, tự luận và năng lực làm đề – không chỉ điểm SGK.')+'</div></div><span class="tag">Chương trình tăng cường</span></div><div id="hsgBody"></div>';
 var report=document.getElementById('report');report.parentNode.insertBefore(sec,report)
}
function renderHsg(){
 var body=document.getElementById('hsgBody');if(!body)return;
 var subjects=['math','lit','eng'];
 var cards=subjects.map(function(s){var sc=score(s),ph=phase(s);return '<div class="hsg-card"><div class="hsg-icon">'+({math:'🔢',lit:'📖',eng:'🇬🇧'}[s])+'</div><h3>'+SUB[s]+'</h3><div class="hsg-score">'+sc+'%</div><div class="muted">Năng lực HSG đã làm • Giai đoạn '+ph+'/4</div><div class="hsg-mini">'+ROAD[s][ph-1]+'</div><div class="hsg-btns"><button class="btn soft" onclick="showHsgRoad(\''+s+'\')">Xem lộ trình</button><button class="btn primary" onclick="startHsg(\''+s+'\')">Chẩn đoán/luyện</button></div></div>'}).join('');
 var rows=SCHEDULE.map(function(r){return'<tr><td><b>'+r[0]+'</b></td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3]+'</td></tr>'}).join('');
 body.innerHTML='<div class="hsg-hero"><div><span class="hsg-pill">'+(G===2?'NỀN MÓNG':'ĐƯỜNG DÀI HSG')+'</span><h2>'+(G===2?'Học chắc – nghĩ sâu – diễn đạt rõ':'SGK chắc → chuyên đề sâu → tự luận → đề tuyển')+'</h2><p>'+(G===2?'Không chạy trước chương trình. Mỗi tuần phát triển số học, ngôn ngữ và tiếng Anh qua bài ngắn nhưng có suy luận.':'Mỗi môn phải có sổ lỗi và bài tự luận. Trắc nghiệm chỉ dùng để chẩn đoán tốc độ và lỗ hổng.')+'</p></div><div class="hsg-target"><b>Mốc lên giai đoạn</b><br>≥55% → GĐ2<br>≥75% → GĐ3<br>≥90% → GĐ4</div></div><div class="hsg-grid">'+cards+'</div><div class="card" style="margin-top:16px"><h3>📅 Lịch luyện tuần đề xuất</h3><div style="overflow:auto"><table class="hsg-table"><thead><tr><th>Ngày</th><th>Thời lượng</th><th>Trọng tâm</th><th>Cách học</th></tr></thead><tbody>'+rows+'</tbody></table></div></div><div class="card" style="margin-top:16px"><h3>Quy tắc bắt buộc để tiến bộ</h3><div class="hsg-rules"><span>① Không xem đáp án trước 10 phút</span><span>② Mỗi câu sai ghi nguyên nhân</span><span>③ Làm lại sau 2 ngày và 7 ngày</span><span>④ Tự luận phải viết đủ bước</span><span>⑤ Mỗi tháng làm 1 đề tổng hợp</span></div></div>'
}
window.startHsg=function(s){
 var pool=BANK[s].slice(),st=state(),seen=st.hsgRecent||[],seenMap={};seen.slice(0,30).forEach(function(id){seenMap[id]=1});
 var first=pool.filter(function(q){return !seenMap[q.id]}),src=(first.length>=Math.min(10,pool.length)?first:pool);
 src.sort(function(a,b){return a.l-b.l||hashStr(a.id+dateLabel()+document.getElementById('student').value)-hashStr(b.id+dateLabel()+document.getElementById('student').value)});
 items=src.slice(0,Math.min(G===2?9:12,src.length));qi=0;ctx={s:'hsg',subject:s};before='hsg';
 st.hsgRecent=(items.map(function(q){return q.id}).concat(seen)).slice(0,60);save(st);go('quiz');renderQuestion()
};
window.showHsgRoad=function(s){
 var ph=phase(s),road=ROAD[s],tasks=OPEN[s];
 var body=document.getElementById('hsgBody');
 body.innerHTML='<button class="btn soft" onclick="renderHsg()">← Lộ trình HSG</button><div class="top" style="margin-top:14px"><div><h1>'+SUB[s]+'</h1><div class="muted">Giai đoạn hiện tại: '+ph+'/4 • Điểm chẩn đoán: '+score(s)+'%</div></div><button class="btn primary" onclick="startHsg(\''+s+'\')">Làm bộ chẩn đoán</button></div><div class="hsg-road">'+road.map(function(x,i){return'<div class="hsg-stage '+(i+1===ph?'current':'')+'"><b>Giai đoạn '+(i+1)+'</b><p>'+x+'</p></div>'}).join('')+'</div><div class="card" style="margin-top:16px"><h3>✍️ Bài tự luận tuần này</h3>'+tasks.map(function(t,i){return'<details class="hsg-open"><summary><b>'+t[0]+'</b> · '+t[1]+'</summary><div class="hsg-rubric"><b>Hướng dẫn/rubric:</b> '+t[2]+'</div></details>'}).join('')+'</div><div class="card" style="margin-top:16px"><h3>Điều kiện lên giai đoạn tiếp theo</h3><p>Không chỉ dựa vào điểm trắc nghiệm. Cần đồng thời: <b>độ chính xác ≥85% ở kiến thức nền</b>, tự làm lại được câu sai sau 7 ngày, và hoàn thành bài tự luận mà không cần chép lời giải.</p></div>'
};
window.renderHsg=renderHsg;
function install(){
 addUI();var old=window.go;window.go=function(id){old(id);if(id==='hsg')renderHsg()};
}
var st=document.createElement('style');st.textContent='.hsg-hero{display:flex;justify-content:space-between;gap:18px;background:linear-gradient(135deg,#1e1b4b,#4c1d95);color:white;border-radius:22px;padding:22px;margin-bottom:16px}.hsg-hero h2{margin:8px 0}.hsg-pill{font-size:12px;font-weight:900;color:#ddd6fe}.hsg-target{min-width:180px;background:rgba(255,255,255,.12);padding:14px;border-radius:15px;line-height:1.7}.hsg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.hsg-card{background:white;border:1px solid var(--line);border-radius:18px;padding:18px}.hsg-icon{font-size:30px}.hsg-score{font-size:34px;font-weight:950;margin:8px 0}.hsg-mini{background:#f8fafc;padding:10px;border-radius:10px;margin:10px 0;line-height:1.45;font-size:13px}.hsg-btns{display:flex;gap:8px;flex-wrap:wrap}.hsg-table{width:100%;border-collapse:collapse}.hsg-table th,.hsg-table td{padding:10px;border-bottom:1px solid var(--line);text-align:left}.hsg-rules{display:flex;gap:8px;flex-wrap:wrap}.hsg-rules span{background:#f1f5f9;padding:8px 10px;border-radius:999px;font-size:12px;font-weight:800}.hsg-road{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.hsg-stage{background:white;border:1px solid var(--line);border-radius:16px;padding:15px}.hsg-stage.current{border:2px solid #7c3aed;background:#f5f3ff}.hsg-open{border-top:1px solid var(--line);padding:12px 0}.hsg-open summary{cursor:pointer;line-height:1.5}.hsg-rubric{margin-top:10px;background:#f8fafc;padding:12px;border-radius:10px;line-height:1.55}@media(max-width:800px){.hsg-grid,.hsg-road{grid-template-columns:1fr}.hsg-hero{flex-direction:column}.hsg-target{min-width:0}}';document.head.appendChild(st);
window.addEventListener('load',install);
})();