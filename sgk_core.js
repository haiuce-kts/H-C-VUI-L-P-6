(function(){
var G=window.SGK_GRADE||6;
var N={math:'Toán',lit:G===2?'Tiếng Việt':'Ngữ văn',eng:'Tiếng Anh'};
function L(id,title,skill,extra){return Object.assign({id:id,title:title,skill:skill||''},extra||{})}
var C={math:[],lit:[],eng:[]};

if(G===6){
 C.math=[
 {group:'Chương I · Tập hợp các số tự nhiên',lessons:[
 L('g6m1','Bài 1. Tập hợp','set'),L('g6m2','Bài 2. Cách ghi số tự nhiên','place'),L('g6m3','Bài 3. Thứ tự trong tập hợp các số tự nhiên','compare'),
 L('g6m4','Bài 4. Phép cộng và phép trừ số tự nhiên','natadd'),L('g6m5','Bài 5. Phép nhân và phép chia số tự nhiên','natmul'),L('g6m6','Bài 6. Lũy thừa với số mũ tự nhiên','power'),L('g6m7','Bài 7. Thứ tự thực hiện các phép tính','order')]},
 {group:'Chương II · Tính chia hết trong tập hợp các số tự nhiên',lessons:[
 L('g6m8','Bài 8. Quan hệ chia hết và tính chất','divrel'),L('g6m9','Bài 9. Dấu hiệu chia hết','divsign'),L('g6m10','Bài 10. Số nguyên tố','prime'),L('g6m11','Bài 11. Ước chung. Ước chung lớn nhất','gcd'),L('g6m12','Bài 12. Bội chung. Bội chung nhỏ nhất','lcm')]},
 {group:'Chương III · Số nguyên',lessons:[
 L('g6m13','Bài 13. Tập hợp các số nguyên','intset'),L('g6m14','Bài 14. Phép cộng và phép trừ số nguyên','intadd'),L('g6m15','Bài 15. Quy tắc dấu ngoặc','bracket'),L('g6m16','Bài 16. Phép nhân số nguyên','intmul'),L('g6m17','Bài 17. Phép chia hết. Ước và bội của một số nguyên','intdiv')]},
 {group:'Chương IV · Một số hình phẳng trong thực tiễn',lessons:[
 L('g6m18','Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều','shape'),L('g6m19','Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân','quad'),L('g6m20','Bài 20. Chu vi và diện tích của một số tứ giác đã học','area')]},
 {group:'Chương V · Tính đối xứng của hình phẳng trong tự nhiên',lessons:[
 L('g6m21','Bài 21. Hình có trục đối xứng','axis'),L('g6m22','Bài 22. Hình có tâm đối xứng','center')]},
 {group:'Chương VI · Phân số',lessons:[
 L('g6m23','Bài 23. Mở rộng phân số. Phân số bằng nhau','frac'),L('g6m24','Bài 24. So sánh phân số. Hỗn số dương','fraccompare'),L('g6m25','Bài 25. Phép cộng và phép trừ phân số','fracadd'),L('g6m26','Bài 26. Phép nhân và phép chia phân số','fracmul'),L('g6m27','Bài 27. Hai bài toán về phân số','fracword')]},
 {group:'Chương VII · Số thập phân',lessons:[
 L('g6m28','Bài 28. Số thập phân','decimal'),L('g6m29','Bài 29. Tính toán với số thập phân','decimalcalc'),L('g6m30','Bài 30. Làm tròn và ước lượng','round'),L('g6m31','Bài 31. Một số bài toán về tỉ số và tỉ số phần trăm','percent')]},
 {group:'Chương VIII · Những hình học cơ bản',lessons:[
 L('g6m32','Bài 32. Điểm và đường thẳng','pointline'),L('g6m33','Bài 33. Điểm nằm giữa hai điểm. Tia','ray'),L('g6m34','Bài 34. Đoạn thẳng. Độ dài đoạn thẳng','segment'),L('g6m35','Bài 35. Trung điểm của đoạn thẳng','midpoint'),L('g6m36','Bài 36. Góc','angle'),L('g6m37','Bài 37. Số đo góc','anglemeasure')]},
 {group:'Chương IX · Dữ liệu và xác suất thực nghiệm',lessons:[
 L('g6m38','Bài 38. Dữ liệu và thu thập dữ liệu','data'),L('g6m39','Bài 39. Bảng thống kê và biểu đồ tranh','table'),L('g6m40','Bài 40. Biểu đồ cột','bar'),L('g6m41','Bài 41. Biểu đồ cột kép','doublebar'),L('g6m42','Bài 42. Kết quả có thể và sự kiện trong trò chơi, thí nghiệm','event'),L('g6m43','Bài 43. Xác suất thực nghiệm','prob')]}
 ];
 C.lit=[
 {group:'Học kì I',lessons:[
 L('g6v1','Bài 1. Tôi và các bạn','friend',{focus:'Bài học đường đời đầu tiên · Nếu cậu muốn có một người bạn… · Bắt nạt · kể trải nghiệm'}),
 L('g6v2','Bài 2. Gõ cửa trái tim','heart',{focus:'Chuyện cổ tích về loài người · Mây và sóng · Bức tranh của em gái tôi'}),
 L('g6v3','Bài 3. Yêu thương và chia sẻ','share',{focus:'Cô bé bán diêm · Gió lạnh đầu mùa · Con chào mào'}),
 L('g6v4','Bài 4. Quê hương yêu dấu','home',{focus:'Ca dao về quê hương · Chuyện cổ nước mình · Cây tre Việt Nam · thơ lục bát'}),
 L('g6v5','Bài 5. Những nẻo đường xứ sở','land',{focus:'Cô Tô · Hang Én · Cửu Long Giang ta ơi · tả cảnh sinh hoạt'})]},
 {group:'Học kì II',lessons:[
 L('g6v6','Bài 6. Chuyện kể về những người anh hùng','hero',{focus:'Thánh Gióng · Sơn Tinh, Thủy Tinh · thuyết minh sự kiện'}),
 L('g6v7','Bài 7. Thế giới cổ tích','fairy',{focus:'Thạch Sanh · Cây khế · Vua chích chòe · kể chuyện theo vai'}),
 L('g6v8','Bài 8. Khác biệt và gần gũi','different',{focus:'Xem người ta kìa! · Bài tập làm văn · trình bày ý kiến'}),
 L('g6v9','Bài 9. Trái Đất – ngôi nhà chung','earth',{focus:'Văn bản thông tin · môi trường · biên bản · thảo luận'}),
 L('g6v10','Bài 10. Cuốn sách tôi yêu','book',{focus:'Đọc mở rộng · giới thiệu sách · trình bày sản phẩm đọc'})]}
 ];
 C.eng=[
 {group:'Tập 1',lessons:[
 L('g6e1','Unit 1. My New School','school'),L('g6e2','Unit 2. My House','house'),L('g6e3','Unit 3. My Friends','friends'),L('g6er1','Review 1 · Units 1–3','review13'),
 L('g6e4','Unit 4. My Neighbourhood','neighbour'),L('g6e5','Unit 5. Natural Wonders of Viet Nam','nature'),L('g6e6','Unit 6. Our Tet Holiday','tet'),L('g6er2','Review 2 · Units 4–6','review46')]},
 {group:'Tập 2',lessons:[
 L('g6e7','Unit 7. Television','tv'),L('g6e8','Unit 8. Sports and Games','sport'),L('g6e9','Unit 9. Cities of the World','city'),L('g6er3','Review 3 · Units 7–9','review79'),
 L('g6e10','Unit 10. Our Houses in the Future','futurehouse'),L('g6e11','Unit 11. Our Greener World','green'),L('g6e12','Unit 12. Robots','robot'),L('g6er4','Review 4 · Units 10–12','review1012')]}
 ];
}else{
 C.math=[
 {group:'Chủ đề 1 · Ôn tập và bổ sung',lessons:[
 L('g2m1','Bài 1. Ôn tập các số đến 100','n100'),L('g2m2','Bài 2. Tia số. Số liền trước, số liền sau','numberline'),L('g2m3','Bài 3. Các thành phần của phép cộng, phép trừ','parts'),L('g2m4','Bài 4. Hơn, kém nhau bao nhiêu','difference'),L('g2m5','Bài 5. Ôn tập phép cộng, phép trừ (không nhớ) trong phạm vi 100','add100'),L('g2m6','Bài 6. Luyện tập chung','review1')]},
 {group:'Chủ đề 2 · Phép cộng, phép trừ trong phạm vi 20',lessons:[
 L('g2m7','Bài 7. Phép cộng (qua 10) trong phạm vi 20','add20'),L('g2m8','Bài 8. Bảng cộng (qua 10)','addtable'),L('g2m9','Bài 9. Bài toán về thêm, bớt một số đơn vị','addword'),L('g2m10','Bài 10. Luyện tập chung','reviewadd'),L('g2m11','Bài 11. Phép trừ (qua 10) trong phạm vi 20','sub20'),L('g2m12','Bài 12. Bảng trừ (qua 10)','subtable'),L('g2m13','Bài 13. Bài toán về nhiều hơn, ít hơn một số đơn vị','compareword'),L('g2m14','Bài 14. Luyện tập chung','review2')]},
 {group:'Chủ đề 3 · Làm quen với khối lượng, dung tích',lessons:[
 L('g2m15','Bài 15. Ki-lô-gam','kg'),L('g2m16','Bài 16. Lít','litre'),L('g2m17','Bài 17. Thực hành và trải nghiệm với ki-lô-gam, lít','measure'),L('g2m18','Bài 18. Luyện tập chung','review3')]},
 {group:'Chủ đề 4 · Phép cộng, phép trừ (có nhớ) trong phạm vi 100',lessons:[
 L('g2m19','Bài 19. Phép cộng (có nhớ) số có hai chữ số với số có một chữ số','add2x1'),L('g2m20','Bài 20. Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số','add2x2'),L('g2m21','Bài 21. Luyện tập chung','reviewadd100'),L('g2m22','Bài 22. Phép trừ (có nhớ) số có hai chữ số cho số có một chữ số','sub2x1'),L('g2m23','Bài 23. Phép trừ (có nhớ) số có hai chữ số cho số có hai chữ số','sub2x2'),L('g2m24','Bài 24. Luyện tập chung','reviewsub100')]},
 {group:'Chủ đề 5 · Làm quen với hình phẳng',lessons:[
 L('g2m25','Bài 25. Điểm, đoạn thẳng, đường thẳng, đường cong, ba điểm thẳng hàng','flat1'),L('g2m26','Bài 26. Đường gấp khúc, hình tứ giác','flat2'),L('g2m27','Bài 27. Thực hành gấp, cắt, ghép, xếp hình, vẽ đoạn thẳng','flat3'),L('g2m28','Bài 28. Luyện tập chung','reviewflat')]},
 {group:'Chủ đề 6 · Ngày – giờ, giờ – phút, ngày – tháng',lessons:[
 L('g2m29','Bài 29. Ngày – giờ, giờ – phút','time'),L('g2m30','Bài 30. Ngày – tháng','calendar'),L('g2m31','Bài 31. Thực hành và trải nghiệm xem đồng hồ, xem lịch','timeprac'),L('g2m32','Bài 32. Luyện tập chung','reviewtime')]},
 {group:'Chủ đề 7 · Ôn tập học kì I',lessons:[
 L('g2m33','Bài 33. Ôn tập phép cộng, phép trừ trong phạm vi 20, 100','reviewarith1'),L('g2m34','Bài 34. Ôn tập hình phẳng','reviewshape1'),L('g2m35','Bài 35. Ôn tập đo lường','reviewmeasure1'),L('g2m36','Bài 36. Ôn tập chung','reviewhk1')]},
 {group:'Chủ đề 8 · Phép nhân, phép chia',lessons:[
 L('g2m37','Bài 37. Phép nhân','multiply'),L('g2m38','Bài 38. Thừa số, tích','factors'),L('g2m39','Bài 39. Bảng nhân 2','mul2'),L('g2m40','Bài 40. Bảng nhân 5','mul5'),L('g2m41','Bài 41. Phép chia','division'),L('g2m42','Bài 42. Số bị chia, số chia, thương','divparts'),L('g2m43','Bài 43. Bảng chia 2','div2'),L('g2m44','Bài 44. Bảng chia 5','div5'),L('g2m45','Bài 45. Luyện tập chung','reviewmuldiv')]},
 {group:'Chủ đề 9 · Làm quen với hình khối',lessons:[
 L('g2m46','Bài 46. Khối trụ, khối cầu','solid'),L('g2m47','Bài 47. Luyện tập chung','reviewsolid')]},
 {group:'Chủ đề 10 · Các số trong phạm vi 1 000',lessons:[
 L('g2m48','Bài 48. Đơn vị, chục, trăm, nghìn','place1000'),L('g2m49','Bài 49. Các số tròn trăm, tròn chục','round100'),L('g2m50','Bài 50. So sánh các số tròn trăm, tròn chục','compareRound'),L('g2m51','Bài 51. Số có ba chữ số','three'),L('g2m52','Bài 52. Viết số thành tổng các trăm, chục, đơn vị','expanded'),L('g2m53','Bài 53. So sánh các số có ba chữ số','compare3'),L('g2m54','Bài 54. Luyện tập chung','review1000')]},
 {group:'Chủ đề 11 · Độ dài, đơn vị đo độ dài và tiền Việt Nam',lessons:[
 L('g2m55','Bài 55. Đề-xi-mét, mét, ki-lô-mét','length'),L('g2m56','Bài 56. Giới thiệu tiền Việt Nam','money'),L('g2m57','Bài 57. Thực hành và trải nghiệm đo độ dài','lengthprac'),L('g2m58','Bài 58. Luyện tập chung','reviewlength')]},
 {group:'Chủ đề 12 · Phép cộng, phép trừ trong phạm vi 1 000',lessons:[
 L('g2m59','Bài 59. Phép cộng (không nhớ) trong phạm vi 1 000','add1000'),L('g2m60','Bài 60. Phép cộng (có nhớ) trong phạm vi 1 000','add1000c'),L('g2m61','Bài 61. Phép trừ (không nhớ) trong phạm vi 1 000','sub1000'),L('g2m62','Bài 62. Phép trừ (có nhớ) trong phạm vi 1 000','sub1000c'),L('g2m63','Bài 63. Luyện tập chung','reviewcalc1000')]},
 {group:'Chủ đề 13 · Làm quen với yếu tố thống kê, xác suất',lessons:[
 L('g2m64','Bài 64. Thu thập, phân loại, kiểm đếm số liệu','data'),L('g2m65','Bài 65. Biểu đồ tranh','pictograph'),L('g2m66','Bài 66. Chắc chắn, có thể, không thể','chance'),L('g2m67','Bài 67. Thực hành và trải nghiệm thu thập, phân loại, kiểm đếm số liệu','dataprac')]},
 {group:'Chủ đề 14 · Ôn tập cuối năm',lessons:[
 L('g2m68','Bài 68. Ôn tập các số trong phạm vi 1 000','reviewnum'),L('g2m69','Bài 69. Ôn tập phép cộng, phép trừ trong phạm vi 100','review100'),L('g2m70','Bài 70. Ôn tập phép cộng, phép trừ trong phạm vi 1 000','review1000'),L('g2m71','Bài 71. Ôn tập phép nhân, phép chia','reviewmul'),L('g2m72','Bài 72. Ôn tập hình học','reviewgeo'),L('g2m73','Bài 73. Ôn tập đo lường','reviewmeasure'),L('g2m74','Bài 74. Ôn tập kiểm đếm số liệu và lựa chọn khả năng','reviewdata'),L('g2m75','Bài 75. Ôn tập chung','reviewyear')]}
 ];
 var tv=[
 ['Tuần 1','Bài 1. Tôi là học sinh lớp 2','Bài 2. Ngày hôm qua đâu rồi?'],['Tuần 2','Bài 3. Niềm vui của Bi và Bống','Bài 4. Làm việc thật là vui'],
 ['Tuần 3','Bài 5. Em có xinh không?','Bài 6. Một giờ học'],['Tuần 4','Bài 7. Cây xấu hổ','Bài 8. Cầu thủ dự bị'],
 ['Tuần 5','Bài 9. Cô giáo lớp em','Bài 10. Thời khóa biểu'],['Tuần 6','Bài 11. Cái trống trường em','Bài 12. Danh sách học sinh'],
 ['Tuần 7','Bài 13. Yêu lắm trường ơi!','Bài 14. Em học vẽ'],['Tuần 8','Bài 15. Cuốn sách của em','Bài 16. Khi trang sách mở ra'],
 ['Tuần 9','Ôn tập giữa học kì I','Đánh giá giữa học kì I'],['Tuần 10','Bài 17. Gọi bạn','Bài 18. Tớ nhớ cậu'],
 ['Tuần 11','Bài 19. Chữ A và những người bạn','Bài 20. Nhím nâu kết bạn'],['Tuần 12','Bài 21. Thả diều','Bài 22. Tớ là lê-gô'],
 ['Tuần 13','Bài 23. Rồng rắn lên mây','Bài 24. Nặn đồ chơi'],['Tuần 14','Bài 25. Sự tích hoa tỉ muội','Bài 26. Em mang về yêu thương'],
 ['Tuần 15','Bài 27. Mẹ','Bài 28. Trò chơi của bố'],['Tuần 16','Bài 29. Cánh cửa nhớ bà','Bài 30. Thương ông'],
 ['Tuần 17','Bài 31. Ánh sáng của yêu thương','Bài 32. Chơi chong chóng'],['Tuần 18','Ôn tập học kì I','Đánh giá cuối học kì I'],
 ['Tuần 19','Bài 1. Chuyện bốn mùa','Bài 2. Mùa nước nổi'],['Tuần 20','Bài 3. Họa mi hót','Bài 4. Tết đến rồi'],
 ['Tuần 21','Bài 5. Giọt nước và biển lớn','Bài 6. Mùa vàng'],['Tuần 22','Bài 7. Hạt thóc','Bài 8. Lũy tre'],
 ['Tuần 23','Bài 9. Vè chim','Bài 10. Khủng long'],['Tuần 24','Bài 11. Sự tích cây thì là','Bài 12. Bờ tre đón khách'],
 ['Tuần 25','Bài 13. Tiếng chổi tre','Bài 14. Cỏ non cười rồi'],['Tuần 26','Bài 15. Những con sao biển','Bài 16. Tạm biệt cánh cam'],
 ['Tuần 27','Ôn tập giữa học kì II','Đánh giá giữa học kì II'],['Tuần 28','Bài 17. Những cách chào độc đáo','Bài 18. Thư viện biết đi'],
 ['Tuần 29','Bài 19. Cảm ơn anh hà mã','Bài 20. Từ chú bồ câu đến in-tơ-nét'],['Tuần 30','Bài 21. Mai An Tiêm','Bài 22. Thư gửi bố ngoài đảo'],
 ['Tuần 31','Bài 23. Bóp nát quả cam','Bài 24. Chiếc rễ đa tròn'],['Tuần 32','Bài 25. Đất nước chúng mình','Bài 26. Trên các miền đất nước'],
 ['Tuần 33','Bài 27. Chuyện quả bầu','Bài 28. Khám phá đáy biển ở Trường Sa'],['Tuần 34','Bài 29. Hồ Gươm','Bài 30. Cánh đồng quê em'],
 ['Tuần 35','Ôn tập học kì II','Đánh giá cuối năm']
 ];
 C.lit=tv.map(function(w,wi){return{group:w[0],lessons:[
   L('g2v'+(wi+1)+'a',w[1],'read',{week:wi+1}),L('g2v'+(wi+1)+'b',w[2],'read',{week:wi+1})
 ]}});
 var e2=[
 ['Unit 1. At my birthday party','p','pasta · popcorn · pizza','The popcorn is yummy.'],
 ['Unit 2. In the backyard','k','bike · kite · kitten','Is she flying a kite? – Yes, she is. / No, she isn’t.'],
 ['Fun time 1','review','Units 1–2','Ôn âm, từ và mẫu câu Units 1–2'],
 ['Unit 3. At the seaside','s','sail · sand · sea','Let’s look at the sail!'],
 ['Unit 4. In the countryside','r','rainbow · river · road','What can you see? – I can see a rainbow.'],
 ['Review 1','review','Units 1–4','Language & self-check'],
 ['Unit 5. In the classroom','q','question · square · quiz','What’s he doing? – He’s doing a quiz.'],
 ['Unit 6. On the farm','x','box · fox · ox','Is there a fox? – Yes, there is. / No, there isn’t.'],
 ['Fun time 2','review','Units 5–6','Ôn âm, từ và mẫu câu Units 5–6'],
 ['Unit 7. In the kitchen','j','juice · jelly · jam','Pass me the jam, please. – Here you are.'],
 ['Unit 8. In the village','v','village · van · volleyball','Can you draw a van? – Yes, I can. / No, I can’t.'],
 ['Review 2','review','Units 5–8','Language & self-check'],
 ['Unit 9. In the grocery store','y','yogurt · yams · yo-yos','What do you want? – I want some yams.'],
 ['Unit 10. At the zoo','z','zoo · zebu · zebra','Do you like the zoo? – Yes, I do. / No, I don’t.'],
 ['Fun time 3','review','Units 9–10','Ôn âm, từ và mẫu câu Units 9–10'],
 ['Unit 11. In the playground','ing','sliding · riding · driving','They’re driving cars.'],
 ['Unit 12. At the café','a','grapes · cake · table','The cake is on the table.'],
 ['Review 3','review','Units 9–12','Language & self-check'],
 ['Unit 13. In the maths class','n','eleven · thirteen · fourteen · fifteen','What number is it? – It’s eleven.'],
 ['Unit 14. At home','er','brother · sister · grandmother','How old is your brother? – He’s nineteen.'],
 ['Fun time 4','review','Units 13–14','Ôn âm, từ và mẫu câu Units 13–14'],
 ['Unit 15. In the clothes shop','sh','shirts · shoes · shorts','Where are the shoes? – Over there.'],
 ['Unit 16. At the campsite','t','tent · teapot · blanket','Is the blanket near the tent?'],
 ['Review 4','review','Units 13–16','Language & self-check']
 ];
 C.eng=[
 {group:'Học kì I',lessons:e2.slice(0,12).map(function(x,i){return L('g2e'+(i+1),x[0],'eng',{sound:x[1],words:x[2],pattern:x[3]})})},
 {group:'Học kì II',lessons:e2.slice(12).map(function(x,i){return L('g2e'+(i+13),x[0],'eng',{sound:x[1],words:x[2],pattern:x[3]})})}
 ];
}
function flat(s){var a=[];C[s].forEach(function(g){g.lessons.forEach(function(l){a.push(Object.assign({group:g.group},l))})});return a}
function find(s,id){return flat(s).find(function(x){return x.id===id})}
function studentKey(){return 'sgk_'+G+'_'+document.getElementById('student').value}
function pg(){var st=state();st.sgkProgress=st.sgkProgress||{};return st}
function getP(s){var st=pg();return st.sgkProgress[s]||''}
function saveP(s,id){var st=pg();st.sgkProgress[s]=id;save(st);renderExact(s);decorateExactHome();toast('Đã lưu đúng bài SGK của '+N[s]+'.')}
function suggestedIndex(s){
 var w=Math.max(1,currentWeek()),a=flat(s);
 if(G===2&&s==='math'){var m=[2,4,6,7,8,10,12,14,16,18,20,22,24,26,28,30,32,36,38,40,42,45,47,49,51,54,56,58,60,62,64,66,68,72,75];return Math.min(a.length-1,(m[Math.min(34,w-1)]||75)-1)}
 if(G===2&&s==='lit')return Math.min(a.length-1,w*2-1);
 if(G===2&&s==='eng')return Math.min(a.length-1,Math.floor((w-1)*24/35));
 if(G===6&&s==='math'){var mm=[2,5,7,8,10,12,13,14,15,16,17,18];return Math.min(a.length-1,(mm[Math.min(mm.length-1,w-1)]||Math.floor((w-1)*43/35)+1)-1)}
 if(G===6&&s==='lit'){var vv=[1,1,1,1,2,2,2,3,3,3,3,4];return Math.min(a.length-1,(vv[Math.min(vv.length-1,w-1)]||Math.floor((w-1)*10/35)+1)-1)}
 if(G===6&&s==='eng'){var ee=[1,1,2,2,3,3,4,5,5,6,6,7];return Math.min(a.length-1,(ee[Math.min(ee.length-1,w-1)]||Math.floor((w-1)*16/35)+1)-1)}
 return Math.min(a.length-1,Math.floor((w-1)*16/35));
}
function currentId(s){var p=getP(s),a=flat(s);return p&&find(s,p)?p:a[suggestedIndex(s)].id}
function idxOf(s,id){var a=flat(s);for(var i=0;i<a.length;i++)if(a[i].id===id)return i;return 0}
function esc(x){return String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
function renderExact(s){
 var el=document.getElementById(s);if(!el)return;
 var old=el.querySelector('.sgk-exact');if(old)old.remove();
 var legacy=el.querySelector('.actual-progress');if(legacy)legacy.remove();
 var tb=el.querySelector('.topicbar'),lv=el.querySelector('.levels');if(tb)tb.style.display='none';if(lv)lv.style.display='none';
 var a=flat(s),id=currentId(s),saved=getP(s),cur=find(s,id),ix=idxOf(s,id),next=a[Math.min(a.length-1,ix+1)];
 var d=document.createElement('div');d.className='sgk-exact card';
 var options='';C[s].forEach(function(g){options+='<optgroup label="'+esc(g.group)+'">'+g.lessons.map(function(x){return'<option value="'+x.id+'" '+(x.id===id?'selected':'')+'>'+esc(x.title)+'</option>'}).join('')+'</optgroup>'});
 var groups=C[s].map(function(g){return'<details class="sgk-group"><summary>'+esc(g.group)+' <span>'+g.lessons.length+' mục</span></summary>'+g.lessons.map(function(x){var done=idxOf(s,x.id)<=ix;return'<div class="sgk-row '+(x.id===id?'now':'')+'"><span>'+(done?'✓':'○')+'</span><div><b>'+esc(x.title)+'</b>'+(x.focus?'<small>'+esc(x.focus)+'</small>':'')+(x.words?'<small>Âm/từ: '+esc(x.sound)+' · '+esc(x.words)+'</small>':'')+'</div></div>'}).join('')+'</details>'}).join('');
 d.innerHTML='<div class="sgk-head"><div><span class="sgk-badge">📚 BÁM ĐÚNG SGK</span><h2>'+N[s]+' · Con đã học đến bài nào?</h2><p>'+(saved?'Tiến độ dưới đây do học sinh chọn.':'Chưa lưu tiến độ; hệ thống chỉ đang gợi ý theo tuần '+currentWeek()+'. Hãy chọn đúng bài con đã học.')+'</p></div><span class="tag">'+(saved?'Tiến độ thực tế':'Gợi ý')+'</span></div>'+
 '<div class="sgk-select"><select id="sgk-select-'+s+'">'+options+'</select><button class="btn primary" onclick="saveSgkProgress(\''+s+'\')">Lưu bài đã học</button></div>'+
 '<div class="sgk-now"><div><small>ĐANG HỌC / VỪA HỌC</small><b>'+esc(cur.title)+'</b></div><div><small>BÀI KẾ TIẾP</small><b>'+esc(next.title)+'</b></div></div>'+
 '<div class="sgk-actions"><button class="btn soft" onclick="startSgkReview(\''+s+'\')">🔁 Ôn đúng phần đã học</button><button class="btn primary" onclick="startSgkLesson(\''+s+'\',\''+id+'\',1)">▶ Luyện bài hiện tại</button></div>'+
 '<div class="sgk-levels"><button onclick="startSgkLesson(\''+s+'\',\''+id+'\',1)">1 · Nắm bài</button><button onclick="startSgkLesson(\''+s+'\',\''+id+'\',2)">2 · Hiểu chắc</button><button onclick="startSgkLesson(\''+s+'\',\''+id+'\',3)">3 · Vận dụng</button><button onclick="startSgkLesson(\''+s+'\',\''+id+'\',4)">4 · Nâng cao</button></div>'+
 '<details class="sgk-catalog"><summary>Xem toàn bộ chương trình SGK</summary>'+groups+'</details>';
 var top=el.querySelector('.top');top.parentNode.insertBefore(d,top.nextSibling)
}
window.saveSgkProgress=function(s){var e=document.getElementById('sgk-select-'+s);if(e)saveP(s,e.value)};

function make(id,s,t,l,i,text,correct,wrong,ex){
 var arr=[String(correct)].concat((wrong||[]).map(String).filter(function(x,j,a){return x!==String(correct)&&a.indexOf(x)===j})).slice(0,3);
 while(arr.length<4)arr.push('—');
 var sh=(i+l)%arr.length,rot=arr.slice(sh).concat(arr.slice(0,sh));
 return{id:'sgk_'+G+'_'+id+'_'+l+'_'+i,s:s,t:t,l:l,d:1+(i%3),q:text,a:rot,c:rot.indexOf(String(correct)),h:'',e:ex||('Đáp án: '+correct+'.'),sgkId:id}
}
function nums(ans,i){return[ans+(i%3)+1,Math.max(0,ans-(i%2)-1),ans+3+(i%4)]}
function math2(les,l,i){
 var n=parseInt(les.id.replace('g2m','')),a,b,ans;
 if(n===1){a=20+(i*7)%70;if(l<=2)return make(les.id,'math',les.id,l,i,'Số '+a+' gồm bao nhiêu chục và đơn vị?',Math.floor(a/10)+' chục '+a%10+' đơn vị',[a%10+' chục '+Math.floor(a/10)+' đơn vị','1 chục '+a+' đơn vị','0 chục '+a+' đơn vị'],'Tách theo hàng chục và hàng đơn vị.');return make(les.id,'math',les.id,l,i,'Số lớn nhất có hai chữ số, chữ số hàng chục là '+Math.floor(a/10)+' và hàng đơn vị nhỏ hơn 7 là:',Math.floor(a/10)*10+6,[Math.floor(a/10)*10+5,Math.floor(a/10)*10+7,a],'Chọn chữ số hàng đơn vị lớn nhất nhưng vẫn nhỏ hơn 7.')}
 if(n===2){a=30+i;return make(les.id,'math',les.id,l,i,l<3?'Số liền sau của '+a+' là:':'Trên tia số, số nằm giữa '+a+' và '+(a+2)+' là:',a+1,nums(a+1,i),'Số liền sau hơn 1 đơn vị.')}
 if(n===3){a=8+i%5;b=5+i%4;ans=a+b;if(l<3)return make(les.id,'math',les.id,l,i,'Trong '+a+' + '+b+' = '+ans+', số '+ans+' gọi là gì?','tổng',['số hạng','số bị trừ','hiệu'],'Kết quả phép cộng là tổng.');return make(les.id,'math',les.id,l,i,'Biết một số hạng là '+a+' và tổng là '+ans+'. Số hạng kia là:',b,nums(b,i),'Lấy tổng trừ số hạng đã biết.')}
 if(n===4){a=35+i;b=20+i%7;ans=a-b;return make(les.id,'math',les.id,l,i,l<3?a+' hơn '+b+' bao nhiêu đơn vị?':'Một đội có '+a+' bạn, đội kia có '+b+' bạn. Đội thứ nhất nhiều hơn bao nhiêu bạn?',ans,nums(ans,i),'Tìm “hơn/kém bao nhiêu” bằng phép trừ.')}
 if(n===5||n===6){a=30+i*2;b=12+i%8;ans=l>=3?a-b:a+b;return make(les.id,'math',les.id,l,i,(l>=3?'Tính rồi kiểm tra: ':'Tính: ')+a+(l>=3?' − ':' + ')+b+' = ?',ans,nums(ans,i),'Thực hiện phép tính theo hàng chục, hàng đơn vị.')}
 if(n>=7&&n<=10){a=6+i%4;b=5+(i*2)%5;ans=a+b;if(n===9&&l>=3){var first=9+i%4,add=5+i%5,total=first+add;return make(les.id,'math',les.id,l,i,'Có '+first+' quyển vở, được thêm '+add+' quyển rồi cho bạn 2 quyển. Còn lại bao nhiêu?',total-2,nums(total-2,i),'Tính hai bước: cộng rồi trừ.')}return make(les.id,'math',les.id,l,i,(l>=3?'Điền số: '+a+' + ? = '+ans:'Tính: '+a+' + '+b+' = ?'),l>=3?b:ans,nums(l>=3?b:ans,i),'Có thể tách một số để làm tròn 10.')}
 if(n>=11&&n<=14){a=12+i%7;b=5+i%5;ans=a-b;if(n===13&&l>=3){var x=8+i%5,d=3+i%4;return make(les.id,'math',les.id,l,i,'Mai có '+x+' bút. Lan nhiều hơn Mai '+d+' bút. Cả hai có bao nhiêu bút?',x+(x+d),nums(x+(x+d),i),'Tìm số bút của Lan rồi cộng hai bạn.')}return make(les.id,'math',les.id,l,i,(l>=3?'Điền số: '+a+' − ? = '+ans:'Tính: '+a+' − '+b+' = ?'),l>=3?b:ans,nums(l>=3?b:ans,i),'Trừ qua 10 bằng cách tách hợp lí.')}
 if(n===15||n===16||n===17||n===18){var unit=n===16?'l':'kg';a=5+i%7;b=2+i%4;ans=a+b;return make(les.id,'math',les.id,l,i,'Một '+(unit==='kg'?'túi':'can')+' có '+a+' '+unit+', thêm '+b+' '+unit+'. Có tất cả:',ans+' '+unit,[(ans-1)+' '+unit,(ans+1)+' '+unit,a+' '+unit],'Chỉ cộng các đại lượng cùng đơn vị.')}
 if(n>=19&&n<=24){a=24+(i*3)%30;b=7+(i%8);var sub=n>=22;ans=sub?a-b:a+b;return make(les.id,'math',les.id,l,i,(l>=3?'Bài toán hai bước: ':'Tính: ')+(sub?a+' − '+b:(a+' + '+b))+' = ?',ans,nums(ans,i),'Đặt thẳng hàng đơn vị và chục; tính từ hàng đơn vị.')}
 if(n>=25&&n<=28){if(n===26)return make(les.id,'math',les.id,l,i,'Đường gấp khúc có hai đoạn dài '+(3+i%4)+' cm và '+(4+i%3)+' cm. Độ dài là:',(7+i%4+i%3)+' cm',[(6+i%4)+' cm',(8+i%3)+' cm','4 cm'],'Cộng độ dài các đoạn.');return make(les.id,'math',les.id,l,i,'Hình tứ giác có bao nhiêu cạnh?',4,[2,3,5],'Hình tứ giác có 4 cạnh.')}
 if(n>=29&&n<=32){if(n===30||n===31)return make(les.id,'math',les.id,l,i,'Nếu hôm nay là ngày '+(10+i)+' thì sau 3 ngày là ngày:',13+i,[12+i,14+i,15+i],'Đếm thêm 3 ngày.');return make(les.id,'math',les.id,l,i,'Từ '+(7+i%3)+' giờ đến '+(9+i%3)+' giờ là bao lâu?',2+' giờ',['1 giờ','3 giờ','4 giờ'],'Lấy giờ kết thúc trừ giờ bắt đầu.')}
 if(n>=37&&n<=45){var five=(n===40||n===44),base=five?5:2,k=2+i%5,prod=base*k;if(n===41||n===42||n===43||n===44)return make(les.id,'math',les.id,l,i,prod+' : '+base+' = ?',k,nums(k,i),'Phép chia là phép tính ngược của phép nhân.');return make(les.id,'math',les.id,l,i,base+' × '+k+' = ?',prod,nums(prod,i),'Dùng bảng nhân '+base+'.')}
 if(n===46||n===47)return make(les.id,'math',les.id,l,i,'Vật nào gần giống khối cầu?','quả bóng',['lon nước','quyển sách','hộp sữa'],'Quả bóng gần giống khối cầu.');
 if(n>=48&&n<=54){a=120+(i*37)%700;if(n===52)return make(les.id,'math',les.id,l,i,'Viết '+a+' thành tổng trăm, chục, đơn vị.',Math.floor(a/100)*100+' + '+Math.floor(a/10)%10*10+' + '+a%10,[a+' + 0','100 + '+a,'10 + '+a],'Tách theo giá trị từng hàng.');if(n===53||n===50){b=a+10+i;return make(les.id,'math',les.id,l,i,'Số nào lớn hơn?',b,[a,a-1,a-10],'So sánh từ hàng trăm, rồi chục, đơn vị.')}return make(les.id,'math',les.id,l,i,'Chữ số hàng trăm của '+a+' là:',Math.floor(a/100),[Math.floor(a/10)%10,a%10,0],'Xác định hàng trăm.')}
 if(n>=55&&n<=58){if(n===56)return make(les.id,'math',les.id,l,i,'Có 20 000 đồng, mua món đồ 12 000 đồng. Còn lại:','8 000 đồng',['6 000 đồng','12 000 đồng','32 000 đồng'],'20 000 − 12 000 = 8 000.');return make(les.id,'math',les.id,l,i,'1 m bằng bao nhiêu cm?',100,[10,20,1000],'1 m = 100 cm.')}
 if(n>=59&&n<=63){a=210+i*11;b=120+i*7;var sub=n===61||n===62;ans=sub?a-b:a+b;return make(les.id,'math',les.id,l,i,'Tính: '+a+(sub?' − ':' + ')+b+' = ?',ans,nums(ans,i),'Đặt thẳng hàng trăm, chục, đơn vị.')}
 if(n>=64&&n<=67){if(n===66)return make(les.id,'math',les.id,l,i,'Trong túi chỉ có bóng đỏ. Lấy ra một bóng đỏ là sự kiện:','chắc chắn',['có thể','không thể','không biết'],'Mọi bóng đều đỏ nên chắc chắn.');return make(les.id,'math',les.id,l,i,'Bảng kiểm đếm có 6 quả táo và 4 quả cam. Loại nào nhiều hơn?','táo',['cam','bằng nhau','không biết'],'6 > 4.')}
 // review lessons use mixed earlier skills
 a=40+i;b=17+i%8;ans=a-b;return make(les.id,'math',les.id,l,i,'Ôn tập: '+a+' − '+b+' = ?',ans,nums(ans,i),'Thực hiện phép trừ cẩn thận.');
}
function math6(les,l,i){
 var n=parseInt(les.id.replace('g6m','')),a,b,ans;
 if(n===1)return make(les.id,'math',les.id,l,i,l<3?'Cho A={1;3;5;7}. Số nào thuộc A?':'Cho A={x∈N | x<5}. A có bao nhiêu phần tử?',l<3?5:5,l<3?[2,4,6]:[4,6,7],'Xét đúng điều kiện của tập hợp.');
 if(n===2){a=3040+i*101;return make(les.id,'math',les.id,l,i,'Giá trị chữ số 3 trong số '+a+' là:',3000,[300,30,3],'Chữ số 3 ở hàng nghìn.')}
 if(n===3){a=100+i*13;b=a+7;return make(les.id,'math',les.id,l,i,'Điền dấu đúng: '+a+' … '+b,'<',['>','=','≤'],'So sánh theo giá trị số tự nhiên.')}
 if(n===4){a=120+i*9;b=75+i*3;ans=a+b;return make(les.id,'math',les.id,l,i,l<3?'Tính '+a+' + '+b:'Tìm x: x − '+b+' = '+a, l<3?ans:ans,nums(ans,i),'Dùng phép cộng/trừ và quan hệ phép toán ngược.')}
 if(n===5){a=12+i;b=5+i%4;ans=a*b;return make(les.id,'math',les.id,l,i,l<3?'Tính '+a+' × '+b:'Tìm x: '+b+'x = '+ans,l<3?ans:a,nums(l<3?ans:a,i),'Dùng phép nhân/chia số tự nhiên.')}
 if(n===6){a=2+(i%3);var p=3+(i%4),val=Math.pow(a,p);return make(les.id,'math',les.id,l,i,l<3?'Tính '+a+'^'+p:'Viết '+val+' dưới dạng lũy thừa cơ số '+a,l<3?val:a+'^'+p,nums(val,i),'Lũy thừa là tích các thừa số bằng nhau.')}
 if(n===7){a=3+i;b=2+i%3;ans=(a+b)*2;return make(les.id,'math',les.id,l,i,'Tính theo đúng thứ tự: ('+a+' + '+b+') × 2',ans,nums(ans,i),'Trong ngoặc trước, rồi nhân.');}
 if(n===8||n===9){a=120+i*6;if(n===9)a=306+i*9;return make(les.id,'math',les.id,l,i,'Số '+a+' có chia hết cho 3 không?','Có',['Không','Chỉ chia hết cho 2','Không xác định'],'Tổng chữ số chia hết cho 3.')}
 if(n===10){a=[29,31,37,41,43][i%5];return make(les.id,'math',les.id,l,i,'Số nào là số nguyên tố?',a,[a+1,a+3,a*2],'Số nguyên tố có đúng hai ước dương.')}
 if(n===11){a=24+i%3*6;b=36+i%3*6;var g=(i%3===0?12:(i%3===1?6:12));return make(les.id,'math',les.id,l,i,'ƯCLN của '+a+' và '+b+' là:',g,[g/2,g*2,3],'Tìm ước chung lớn nhất.')}
 if(n===12){a=6;b=8;return make(les.id,'math',les.id,l,i,'BCNN của '+a+' và '+b+' là:',24,[12,36,48],'Bội chung nhỏ nhất của 6 và 8 là 24.')}
 if(n===13)return make(les.id,'math',les.id,l,i,'Số nào nhỏ hơn -3?',-5,[-2,0,3],'Trên trục số, số ở bên trái nhỏ hơn.');
 if(n===14){a=-8-i;b=13+i;ans=a+b;return make(les.id,'math',les.id,l,i,'Tính: '+a+' + '+b,ans,[ans-2,-ans,ans+3],'Cộng hai số trái dấu bằng hiệu giá trị tuyệt đối.');}
 if(n===15)return make(les.id,'math',les.id,l,i,'Bỏ ngoặc: 12 − (5 − 3) = ?',10,[4,14,20],'Tính trong ngoặc hoặc áp dụng quy tắc dấu ngoặc.');
 if(n===16){a=-3-i;b=4+i%3;ans=a*b;return make(les.id,'math',les.id,l,i,'Tính: ('+a+') × '+b,ans,[Math.abs(ans),ans+1,-ans-1],'Âm nhân dương cho kết quả âm.');}
 if(n===17)return make(les.id,'math',les.id,l,i,'Số nào là ước của -18?',6,[5,7,8],'18 chia hết cho 6, nên ±6 là ước của -18.');
 if(n>=18&&n<=22){if(n===20)return make(les.id,'math',les.id,l,i,'Hình chữ nhật dài 8 cm, rộng 5 cm. Diện tích là:','40 cm²',['26 cm²','13 cm²','80 cm²'],'S=8×5=40 cm².');if(n===21)return make(les.id,'math',les.id,l,i,'Hình nào luôn có trục đối xứng?','hình vuông',['tam giác thường','hình bình hành bất kì','tứ giác bất kì'],'Hình vuông có các trục đối xứng.');if(n===22)return make(les.id,'math',les.id,l,i,'Hình nào có tâm đối xứng?','hình chữ nhật',['tam giác đều','hình thang cân bất kì','tam giác vuông'],'Giao điểm hai đường chéo là tâm đối xứng của hình chữ nhật.');return make(les.id,'math',les.id,l,i,'Một hình vuông có bao nhiêu cạnh bằng nhau?',4,[2,3,6],'Bốn cạnh hình vuông bằng nhau.')}
 if(n>=23&&n<=27){if(n===23)return make(les.id,'math',les.id,l,i,'Phân số nào bằng 3/4?','6/8',['6/10','9/16','12/20'],'Nhân cả tử và mẫu với 2.');if(n===24)return make(les.id,'math',les.id,l,i,'So sánh 3/5 và 4/5:','3/5 < 4/5',['3/5 > 4/5','bằng nhau','không so sánh được'],'Cùng mẫu, so sánh tử.');if(n===25)return make(les.id,'math',les.id,l,i,'Tính 2/7 + 3/7 =','5/7',['5/14','1/7','6/7'],'Cùng mẫu, cộng tử.');if(n===26)return make(les.id,'math',les.id,l,i,'Tính 2/3 × 3/5 =','2/5',['6/8','5/6','1/5'],'Nhân tử với tử, mẫu với mẫu rồi rút gọn.');return make(les.id,'math',les.id,l,i,'3/4 của 20 là:',15,[10,12,16],'20×3/4=15.')}
 if(n>=28&&n<=31){if(n===31)return make(les.id,'math',les.id,l,i,'25% của 80 là:',20,[15,25,32],'80×25%=20.');if(n===30)return make(les.id,'math',les.id,l,i,'Làm tròn 12,67 đến hàng phần mười:', '12,7',['12,6','13,0','12,67'],'Chữ số hàng phần trăm là 7 nên làm tròn lên.');a=12.5+i;b=2.4;ans=n===29?(a+b):a;return make(les.id,'math',les.id,l,i,n===29?'Tính '+a.toFixed(1)+' + '+b.toFixed(1):'Số nào là số thập phân âm?',''+(n===29?ans.toFixed(1):'-2,5'),n===29?['14,0','15,0','10,1']:['2,5','0','3'],'Đọc kĩ dấu và vị trí dấu phẩy.')}
 if(n>=32&&n<=37){if(n===35)return make(les.id,'math',les.id,l,i,'Đoạn AB dài 10 cm, M là trung điểm. AM bằng:','5 cm',['10 cm','20 cm','4 cm'],'Trung điểm chia đoạn thành hai phần bằng nhau.');if(n===37)return make(les.id,'math',les.id,l,i,'Góc 90° là:','góc vuông',['góc nhọn','góc tù','góc bẹt'],'Góc vuông có số đo 90°.');return make(les.id,'math',les.id,l,i,'Qua hai điểm phân biệt có bao nhiêu đường thẳng?',1,[0,2,'vô số'],'Có đúng một đường thẳng đi qua hai điểm phân biệt.')}
 if(n>=38){if(n===43)return make(les.id,'math',les.id,l,i,'Tung đồng xu 40 lần, có 22 lần ngửa. Xác suất thực nghiệm mặt ngửa là:','22/40',['18/40','1/2 chính xác','40/22'],'Tần số sự kiện chia tổng số lần thử.');if(n===42)return make(les.id,'math',les.id,l,i,'Tung xúc xắc một lần. Sự kiện “ra số 7” là:','không thể',['chắc chắn','có thể','xác suất 1/2'],'Xúc xắc chỉ có 1–6.');return make(les.id,'math',les.id,l,i,'Dữ liệu 2, 3, 3, 5. Giá trị xuất hiện nhiều nhất là:',3,[2,4,5],'Số 3 xuất hiện hai lần.')}
 return make(les.id,'math',les.id,l,i,'Câu ôn tập của '+les.title+': chọn đáp án đúng.',1,[2,3,4],'Ôn đúng nội dung bài.');
}
var E2={
 g2e1:{words:['pasta','popcorn','pizza'],pattern:'The popcorn is yummy.',sound:'/p/'},g2e2:{words:['bike','kite','kitten'],pattern:'Is she flying a kite? – Yes, she is.',sound:'/k/'},
 g2e4:{words:['sail','sand','sea'],pattern:'Let’s look at the sail!',sound:'/s/'},g2e5:{words:['rainbow','river','road'],pattern:'What can you see? – I can see a rainbow.',sound:'/r/'},
 g2e7:{words:['question','square','quiz'],pattern:'What’s he doing? – He’s doing a quiz.',sound:'/kw/'},g2e8:{words:['box','fox','ox'],pattern:'Is there a fox? – Yes, there is.',sound:'/ks/'},
 g2e10:{words:['juice','jelly','jam'],pattern:'Pass me the jam, please. – Here you are.',sound:'/dʒ/'},g2e11:{words:['village','van','volleyball'],pattern:'Can you draw a van? – Yes, I can.',sound:'/v/'},
 g2e13:{words:['yogurt','yams','yo-yos'],pattern:'What do you want? – I want some yams.',sound:'/j/'},g2e14:{words:['zoo','zebu','zebra'],pattern:'Do you like the zoo? – Yes, I do.',sound:'/z/'},
 g2e16:{words:['sliding','riding','driving'],pattern:'They’re driving cars.',sound:'-ing'},g2e17:{words:['grapes','cake','table'],pattern:'The cake is on the table.',sound:'/eɪ/'},
 g2e19:{words:['eleven','thirteen','fourteen','fifteen'],pattern:'What number is it? – It’s eleven.',sound:'/n/'},g2e20:{words:['brother','sister','grandmother'],pattern:'How old is your brother? – He’s nineteen.',sound:'/ə/'},
 g2e22:{words:['shirts','shoes','shorts'],pattern:'Where are the shoes? – Over there.',sound:'/ʃ/'},g2e23:{words:['tent','teapot','blanket'],pattern:'Is the blanket near the tent?',sound:'/t/'}
};
var E6={
 g6e1:{words:['school','classroom','subject','homework'],gram:'present simple / adverbs of frequency'},g6e2:{words:['bedroom','kitchen','living room','bathroom'],gram:'there is/are / prepositions of place'},
 g6e3:{words:['kind','helpful','clever','friendly'],gram:'present continuous / personality adjectives'},g6e4:{words:['market','supermarket','square','street'],gram:'comparatives / directions'},
 g6e5:{words:['mountain','cave','waterfall','beach'],gram:'must / mustn’t / countable & uncountable'},g6e6:{words:['lucky money','fireworks','relatives','peach blossoms'],gram:'should / shouldn’t / some-any'},
 g6e7:{words:['programme','cartoon','channel','viewer'],gram:'wh-questions / conjunctions'},g6e8:{words:['football','badminton','racket','champion'],gram:'past simple'},
 g6e9:{words:['capital','landmark','crowded','palace'],gram:'possessive adjectives / superlatives'},g6e10:{words:['robot','appliance','solar energy','future'],gram:'will for future'},
 g6e11:{words:['recycle','rubbish','reusable','environment'],gram:'conditional type 1 / should'},g6e12:{words:['robot','repair','lift','understand'],gram:'can / could / will be able to'}
};
function engQ(les,l,i){
 if(G===2){
   var d=E2[les.id];if(!d){var a=flat('eng'),ix=idxOf('eng',les.id),near=a[Math.max(0,ix-1)];d=E2[near.id]||E2.g2e1}
   var w=d.words[i%d.words.length],w2=d.words[(i+1)%d.words.length];
   if(l===1)return make(les.id,'eng',les.id,l,i,'Which word belongs to '+les.title+'?',w,[w2,'teacher','hospital'],w+' is a target word in this unit.');
   if(l===2)return make(les.id,'eng',les.id,l,i,'Choose the word with the target sound '+d.sound+'.',w,[w2,'book','pen'],'Target sound: '+d.sound+'.');
   if(l===3)return make(les.id,'eng',les.id,l,i,'Choose the correct sentence pattern. ',d.pattern,[d.pattern.replace(/is/g,'are'),d.pattern.split(' ').reverse().join(' '),'I am seven years old.'],'Mẫu câu của bài: '+d.pattern);
   return make(les.id,'eng',les.id,l,i,'Read and choose the best response related to the unit.',d.pattern,[w+' '+w2,'Yes are.','No, I not.'],'Use the unit sentence pattern.');
 }else{
   var d=E6[les.id];if(!d){var a=flat('eng'),ix=idxOf('eng',les.id),near=a[Math.max(0,ix-1)];d=E6[near.id]||E6.g6e1}
   var w=d.words[i%d.words.length],w2=d.words[(i+1)%d.words.length];
   if(l===1)return make(les.id,'eng',les.id,l,i,'Which word fits the topic “'+les.title+'”?',w,[w2,'equation','engine'],'Vocabulary: '+w+'.');
   if(l===2)return make(les.id,'eng',les.id,l,i,'Choose the best grammar focus for this unit.',d.gram,['past perfect only','reported questions only','none'],'Grammar focus: '+d.gram+'.');
   if(l===3){
     if(les.id==='g6e3')return make(les.id,'eng',les.id,l,i,'Look! Nam ___ a book now.','is reading',['reads','read','are reading'],'“Look!” + action now → present continuous.');
     if(les.id==='g6e4')return make(les.id,'eng',les.id,l,i,'This street is ___ than that one.','wider',['wide','widest','more wide'],'Use comparative + than.');
     if(les.id==='g6e10')return make(les.id,'eng',les.id,l,i,'My future house ___ use solar energy.','will',['did','is','has'],'Use will for future predictions.');
     return make(les.id,'eng',les.id,l,i,'Choose the sentence that is grammatically suitable for '+les.title+'.','The sentence uses '+d.gram+' correctly.',['The sentence ignores the unit grammar.','The words are in random order.','No verb is used.'],'Apply the grammar focus, not only vocabulary.');
   }
   return make(les.id,'eng',les.id,l,i,'Which task requires BOTH vocabulary and grammar from this unit?','Describe a situation using '+w+' and '+d.gram+'.',['Copy the title only.','List one unrelated word.','Translate a number only.'],'Level 4 combines vocabulary with grammar in context.');
 }
}
var P2=[
 ['Minh nhìn thấy bạn quên hộp bút nên cho bạn mượn một chiếc bút chì.','Minh','cho bạn mượn bút','Minh biết quan tâm, giúp đỡ bạn.'],
 ['Giờ ra chơi, Lan nhặt mẩu giấy dưới sân rồi bỏ vào thùng rác.','Lan','nhặt rác','Lan có ý thức giữ vệ sinh.'],
 ['Buổi sáng, Nam tự gấp chăn và chuẩn bị sách vở trước khi đi học.','Nam','tự gấp chăn và chuẩn bị sách','Nam tự giác, biết tự phục vụ.'],
 ['Mẹ đang tưới cây. Bé lấy chiếc ca nhỏ và cùng mẹ chăm những chậu hoa.','bé','giúp mẹ tưới hoa','Bé biết giúp đỡ gia đình.']
];
function litQ(les,l,i){
 if(G===2){
  var title=les.title||'';
  if(title.indexOf('Cô giáo lớp em')>=0){
   if(l===1)return make(les.id,'lit',les.id,l,i,'Bài “Cô giáo lớp em” thuộc chủ điểm nào gần nhất?','Tình cảm với thầy cô, trường lớp',['Thiên nhiên hoang dã','Giao thông','Mua bán'],'Bài học hướng đến tình cảm trường lớp và cô giáo.');
   if(l===2)return make(les.id,'lit',les.id,l,i,'Khi nói về cô giáo, từ nào là từ chỉ đặc điểm?','dịu dàng',['giảng bài','bảng lớp','học sinh'],'“dịu dàng” nêu đặc điểm.');
   if(l===3)return make(les.id,'lit',les.id,l,i,'Câu nào vừa đúng ngữ pháp vừa thể hiện tình cảm với cô giáo?','Em rất yêu quý cô vì cô luôn tận tình dạy chúng em.',['Cô giáo bảng phấn.','Em cô giáo rất.','Cô là và lớp học.'],'Câu trả lời cần có đủ ý và thể hiện tình cảm.');
   return make(les.id,'lit',les.id,l,i,'Muốn viết 3 câu về cô giáo, trình tự nào rõ nhất?','Giới thiệu cô → nêu một đặc điểm/việc làm → nói tình cảm của em',['Chỉ liệt kê đồ vật','Lặp tên cô ba lần','Viết ba câu không liên quan'],'Đoạn ngắn cần có trình tự và một ý chính.');
  }
  if(title.indexOf('Thời khóa biểu')>=0){
   if(l===1)return make(les.id,'lit',les.id,l,i,'Thời khóa biểu dùng để làm gì?','Cho biết các môn học theo ngày/tiết',['Kể một câu chuyện','Tả một con vật','Ghi giá đồ dùng'],'Đây là văn bản thông tin giúp theo dõi lịch học.');
   if(l===2)return make(les.id,'lit',les.id,l,i,'Một thời khóa biểu ghi: Thứ Hai – tiết 1 Toán, tiết 2 Tiếng Việt. Tiết 2 học môn gì?','Tiếng Việt',['Toán','Tiếng Anh','Mĩ thuật'],'Đọc đúng hàng Thứ Hai và cột tiết 2.');
   if(l===3)return make(les.id,'lit',les.id,l,i,'Nếu ngày mai có Toán và Tiếng Việt, việc chuẩn bị hợp lí nhất là:','Xem thời khóa biểu và soạn đúng sách vở hai môn',['Mang tất cả sách','Không cần chuẩn bị','Chỉ mang vở vẽ'],'Biết dùng thông tin từ thời khóa biểu vào thực tế.');
   return make(les.id,'lit',les.id,l,i,'Vì sao cần đọc đúng hàng và cột của thời khóa biểu?','Để không nhầm ngày, tiết và môn học',['Để bảng dài hơn','Để viết nhiều chữ hơn','Không có lý do'],'Văn bản dạng bảng phải đọc theo hàng/cột.');
  }
  if(title.indexOf('Cây xấu hổ')>=0||title.indexOf('Cầu thủ dự bị')>=0){
   if(l===1)return make(les.id,'lit',les.id,l,i,'Khi đọc một câu chuyện, việc đầu tiên để hiểu bài là:','Xác định nhân vật và sự việc chính',['Đếm số chữ','Chép cả bài','Tìm từ dài nhất'],'Nhân vật và sự việc chính là khung của câu chuyện.');
   if(l===2)return make(les.id,'lit',les.id,l,i,'Câu hỏi nào giúp tìm nguyên nhân của một sự việc?','Vì sao việc đó xảy ra?',['Ai cao hơn?','Có bao nhiêu chữ?','Trang sách màu gì?'],'“Vì sao?” giúp tìm nguyên nhân.');
   if(l===3)return make(les.id,'lit',les.id,l,i,'Sau khi đọc, cách kể lại tốt nhất là:','Nói 2–3 câu theo thứ tự sự việc chính',['Chép nguyên văn','Kể thêm việc không có','Chỉ nói tên bài'],'Kể lại cần đúng trình tự và giữ ý chính.');
   return make(les.id,'lit',les.id,l,i,'Một chi tiết làm nhân vật thay đổi suy nghĩ được gọi là chi tiết quan trọng vì:','Nó ảnh hưởng đến diễn biến và ý nghĩa câu chuyện',['Nó luôn dài nhất','Nó có nhiều dấu phẩy','Nó nằm ở trang đầu'],'Chi tiết quan trọng tác động tới mạch truyện.');
  }
  var z=P2[(i+(les.week||0))%P2.length];
  if(l===1)return make(les.id,'lit',les.id,l,i,'Đọc: “'+z[0]+'” Nhân vật chính là ai?',z[1],['mẹ','cô giáo','không có nhân vật'],'Tìm người thực hiện việc chính.');
  if(l===2)return make(les.id,'lit',les.id,l,i,'Đọc: “'+z[0]+'” Nhân vật làm gì?',z[2],['đi ngủ','đi mua hàng','không làm gì'],'Tìm từ/cụm từ chỉ hoạt động.');
  if(l===3)return make(les.id,'lit',les.id,l,i,'Từ việc làm trong đoạn, em hiểu điều gì?',z[3],['Nhân vật rất lười.','Không thể biết gì.','Nhân vật đang tức giận.'],'Suy luận từ hành động.');
  return make(les.id,'lit',les.id,l,i,'Cách kể lại ngắn gọn nhất là:','Nêu ai – làm gì – kết quả/ý nghĩa.',['Chép nguyên đoạn.','Chỉ kể một từ.','Thêm nhiều việc không có trong đoạn.'],'Nói được ý chính trước khi viết.');
 }
 if(les.id==='g6v1'){
  var b1=[
   ['Trong “Bài học đường đời đầu tiên”, sự thay đổi quan trọng của Dế Mèn là gì?','Từ tự phụ, bốc đồng đến biết ân hận và chịu trách nhiệm',['Từ yếu thành khỏe','Từ vui thành buồn mà không thay đổi nhận thức','Từ nhút nhát thành hung dữ'],'Sự việc với Dế Choắt khiến Dế Mèn nhận ra hậu quả của thói kiêu căng.'],
   ['“Bắt nạt” hướng người đọc đến cách ứng xử nào?','Tôn trọng, bảo vệ người yếu thế và không tiếp tay bắt nạt',['Hùa theo số đông','Im lặng trong mọi trường hợp','Trả đũa bằng bạo lực'],'Thông điệp chính là phản đối bắt nạt và sống tử tế.'],
   ['Khi nhận xét Dế Mèn “bốc đồng”, cách trả lời tốt nhất là:','Nêu nhận xét, dẫn chi tiết hành động và giải thích hậu quả',['Chỉ viết “em thấy vậy”','Kể lại toàn bộ truyện','Chỉ chép tên nhân vật'],'Nhận xét văn học cần có dẫn chứng và giải thích.'],
   ['Hai văn bản trong cùng Bài 1 cùng giúp em suy nghĩ nhiều về điều gì?','Cách ứng xử với người khác và trách nhiệm trong tình bạn',['Cách tính diện tích','Luật giao thông','Các hiện tượng thời tiết'],'Bài 1 tập trung vào quan hệ bạn bè và cách ứng xử.']
  ],z=b1[(i+l-1)%b1.length];return make(les.id,'lit',les.id,l,i,z[0],z[1],z[2],z[3])
 }
 if(les.id==='g6v2'){
  var b2=[
   ['Điểm chung nổi bật của “Mây và sóng” và các văn bản trong Bài 2 là gì?','Khám phá tình cảm gia đình và thế giới nội tâm',['Giải thích công thức toán','Miêu tả luật thi đấu','Thống kê số liệu'],'Bài 2 hướng tới tình cảm, yêu thương và đời sống nội tâm.'],
   ['Khi phân tích tình cảm của nhân vật trữ tình trong một bài thơ, bằng chứng nên lấy từ đâu?','Hình ảnh, từ ngữ và lời nói trong bài thơ',['Tên nhà xuất bản','Số trang','Ý đoán không có căn cứ'],'Phân tích phải bám chi tiết của văn bản.'],
   ['Trong truyện về quan hệ anh/chị/em, sự thay đổi cách nhìn của nhân vật thường được nhận ra qua:','Hành động, suy nghĩ và cách ứng xử trước – sau sự việc',['Chỉ ngoại hình','Chỉ tên nhân vật','Số đoạn văn'],'So sánh trước và sau giúp thấy sự thay đổi nhận thức.'],
   ['Câu trả lời nào thể hiện suy luận tốt hơn?','Nêu chi tiết rồi giải thích chi tiết đó cho thấy tình cảm gì',['Chép một câu bất kì','Chỉ nói “rất hay”','Kể lại hết văn bản'],'Suy luận phải nối bằng chứng với kết luận.']
  ],z=b2[(i+l-1)%b2.length];return make(les.id,'lit',les.id,l,i,z[0],z[1],z[2],z[3])
 }
 var passages=[
  ['Một bạn vì muốn chứng tỏ mình giỏi nên hành động vội vàng, khiến người khác chịu hậu quả. Sau đó bạn nhận ra lỗi và thay đổi.','sự bốc đồng và bài học trách nhiệm'],
  ['Trong lớp, một bạn thường bị trêu vì khác biệt. Một số bạn khác chủ động ngồi cùng, bảo vệ và báo thầy cô khi việc trêu chọc kéo dài.','tôn trọng khác biệt và chống bắt nạt'],
  ['Người viết quan sát một cảnh vật quen thuộc, chọn vài chi tiết nổi bật rồi bộc lộ tình cảm gắn bó với nơi đó.','tình cảm với quê hương và cách chọn chi tiết']
 ],z=passages[i%passages.length];
 if(l===1)return make(les.id,'lit',les.id,l,i,'Đoạn ngắn trên chủ yếu nói về điều gì?',z[1],['một phép tính','một hướng dẫn máy móc','một bản thống kê'],'Tìm ý được nhắc xuyên suốt.');
 if(l===2)return make(les.id,'lit',les.id,l,i,'Khi nhận xét nhân vật/văn bản, bằng chứng tốt nhất là gì?','chi tiết, lời nói hoặc hành động trong văn bản',['ý đoán không có căn cứ','số trang của sách','màu chữ'],'Nhận xét phải dựa vào bằng chứng.');
 if(l===3)return make(les.id,'lit',les.id,l,i,'Cách trả lời đọc hiểu rõ nhất là:','Nhận xét → dẫn chứng → giải thích',['Kể lại toàn bộ văn bản','Chỉ nêu cảm xúc','Chép câu hỏi'],'Cấu trúc ba bước giúp câu trả lời có căn cứ.');
 return make(les.id,'lit',les.id,l,i,'Nếu bỏ chi tiết tạo bước ngoặt của một truyện, điều gì thường bị ảnh hưởng nhất?','mạch phát triển và ý nghĩa của nhân vật',['tên tác giả','số trang','dấu câu cuối bài'],'Chi tiết bước ngoặt thường làm thay đổi nhân vật và thông điệp.');
}
function sgkPool(s,ids,levels){
 var out=[];ids.forEach(function(id){var les=find(s,id);if(!les)return;levels.forEach(function(l){for(var i=0;i<8;i++){out.push(s==='math'?(G===2?math2(les,l,i):math6(les,l,i)):s==='eng'?engQ(les,l,i):litQ(les,l,i))}})});return out
}
window.startSgkLesson=function(s,id,l){items=sgkPool(s,[id],[l]).slice();qi=0;ctx={s:'sgkLesson',subject:s,sgkId:id,l:l};before=s;go('quiz');renderQuestion()};
window.startSgkReview=function(s){
 var a=flat(s),ix=idxOf(s,currentId(s)),from=Math.max(0,ix-(G===2?(s==='math'?5:s==='lit'?5:3):(s==='math'?4:s==='lit'?1:2))),ids=a.slice(from,ix+1).map(function(x){return x.id});
 var pool=sgkPool(s,ids,[1,2,3]),n=G===2?12:15;items=stablePick(pool,n,'sgkreview'+dateLabel()+document.getElementById('student').value+s,{});
 qi=0;ctx={s:'sgkReview',subject:s};before=s;go('quiz');renderQuestion()
};

function testWindow(s,type){
 var a=flat(s),ix=idxOf(s,currentId(s)),from=0;
 if(type==='daily')from=Math.max(0,ix-1);
 else if(type==='weekly')from=Math.max(0,ix-(G===2?(s==='math'?4:s==='lit'?5:3):(s==='math'?4:s==='lit'?1:2)));
 else if(type==='monthly')from=Math.max(0,ix-(G===2?(s==='math'?9:s==='lit'?9:5):(s==='math'?7:s==='lit'?2:4)));
 else{
   var cut=G===2?(s==='math'?36:s==='lit'?36:12):(s==='math'?22:s==='lit'?5:8);
   from=ix>=cut?cut:0
 }
 return a.slice(from,ix+1).map(function(x){return x.id})
}
function uniqueQ(pool){
 var seen={},out=[];pool.forEach(function(q){var k=(q.q||'').toLowerCase().replace(/\d+/g,'#').replace(/\s+/g,' ');if(!seen[k]){seen[k]=1;out.push(q)}});return out
}
function sgkBuildTest(type){
 var cfg=testConfig[type],student=document.getElementById('student').value,st=state(),period=testPeriodKey(type),same=(st.tests||[]).filter(function(r){return r.type===type&&r.period===period}),attempt=same.length+1;
 var recent={};(st.tests||[]).filter(function(r){return r.type===type}).slice(0,3).forEach(function(r){(r.questionIds||[]).forEach(function(id){recent[id]=1})});
 var subs=['math','lit','eng'],per=Math.floor(cfg.count/3),rem=cfg.count%3,out=[];
 subs.forEach(function(s,si){
   var need=per+(si<rem?1:0),ids=testWindow(s,type),cnt=allocateCounts(need,cfg.weights),used={};
   for(var l=1;l<=4;l++){
     var p=uniqueQ(sgkPool(s,ids,[l])).filter(function(q){return !recent[q.id]});
     if(p.length<cnt[l-1])p=uniqueQ(sgkPool(s,ids,[l]));
     var picked=stablePick(p,cnt[l-1],type+period+student+attempt+s+l,{});
     picked.forEach(function(q){if(!used[q.id]){used[q.id]=1;out.push(q)}})
   }
 });
 out=out.sort(function(a,b){var da=a.l*10+(a.d||1),db=b.l*10+(b.d||1);if(da!==db)return da-db;return hashStr(a.id+attempt)-hashStr(b.id+attempt)});
 var scopes=subs.map(function(s){var ids=testWindow(s,type),a=flat(s),f=find(s,ids[0]),z=find(s,ids[ids.length-1]);return N[s]+': '+f.title+(f.id!==z.id?' → '+z.title:'')}).join(' | ');
 return{items:out.slice(0,cfg.count),weeks:[],scope:scopes,period:period,attempt:attempt}
}
function overrideTests(){
 window.buildTest=sgkBuildTest;
 var oldStartTest=window.startTest;
 window.startTest=function(type){
  var missing=['math','lit','eng'].filter(function(s){return !getP(s)});
  if(missing.length){
   alert('Để đề kiểm tra bám đúng SGK, con cần chọn “đã học đến bài nào” ở: '+missing.map(function(s){return N[s]}).join(', ')+'.');
   go(missing[0]);setTimeout(function(){renderExact(missing[0])},0);return
  }
  oldStartTest(type)
 };
 window.startDaily=function(){
  var subs=['math','lit','eng'],out=[],used={},student=document.getElementById('student').value,total=G===2?18:24;
  subs.forEach(function(s){
    var ids=testWindow(s,'daily'),p=sgkPool(s,ids,[1,2,3]);
    addPicked(out,p,G===2?5:7,'sgkdaily'+dateLabel()+student+s,used)
  });
  var hard=[];subs.forEach(function(s){hard=hard.concat(sgkPool(s,[currentId(s)],[4]))});addPicked(out,hard,total-out.length,'sgkhard'+dateLabel()+student,used);
  items=out.slice(0,total);qi=0;ctx={s:'daily'};before='home';go('quiz');renderQuestion()
 }
}
function decorateExactHome(){
 var box=document.getElementById('todayPlan');if(box){
  var cards=box.querySelectorAll('.focuscard'),subs=['math','lit','eng'];
  subs.forEach(function(s,k){if(!cards[k])return;var les=find(s,currentId(s)),saved=getP(s);cards[k].innerHTML='<h3>'+({math:'🔢 Toán',lit:G===2?'📖 Tiếng Việt':'📖 Ngữ văn',eng:'🇬🇧 Tiếng Anh'}[s])+'</h3><div><b>'+esc(les.title)+'</b></div><div class="mini" style="margin-top:7px">'+(saved?'✓ Theo tiến độ thực tế đã lưu':'Gợi ý theo tuần – hãy xác nhận trong môn học')+'</div>'})
 }
 var bd=document.getElementById('todayBreakdown');if(bd)bd.textContent=(G===2?'18':'24')+' câu • chỉ lấy trong các bài SGK đã học • không lấy kiến thức tương lai';
 var metas=[
  ['.testcard.daily .testmeta','Bài hiện tại + bài ngay trước<br>Chỉ kiểm tra nội dung SGK đã học'],
  ['.testcard.weekly .testmeta','Các bài SGK gần nhất đã học<br>Không lấy bài chưa học'],
  ['.testcard.monthly .testmeta','Tổng hợp các bài đã học gần đây<br>Phạm vi khóa theo tiến độ thực tế'],
  ['.testcard.semester .testmeta','Từ đầu học kỳ đến đúng bài đã học<br>Không lấy kiến thức tương lai']
 ];
 metas.forEach(function(x){var e=document.querySelector(x[0]);if(e)e.innerHTML=x[1]})
}
function install(){
 var old=window.renderSubject;window.renderSubject=function(s){old(s);renderExact(s)};
 ['math','lit','eng'].forEach(function(s){window.renderSubject(s)});
 overrideTests();
 decorateExactHome();
}
var css=document.createElement('style');css.textContent='.sgk-exact{margin:0 0 18px;border-top:5px solid #2563eb}.sgk-head{display:flex;justify-content:space-between;gap:14px}.sgk-head h2{margin:7px 0}.sgk-head p{margin:0;color:var(--muted)}.sgk-badge{font-size:12px;font-weight:900;color:#1d4ed8}.sgk-select{display:flex;gap:10px;margin:14px 0}.sgk-select select{flex:1;min-width:220px;padding:12px;border:1px solid var(--line);border-radius:12px;background:#fff;font:inherit}.sgk-now{display:grid;grid-template-columns:1fr 1fr;gap:10px}.sgk-now>div{background:#f8fafc;border:1px solid var(--line);padding:12px;border-radius:12px;display:flex;flex-direction:column;gap:5px}.sgk-now small{color:var(--muted);font-weight:800}.sgk-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}.sgk-levels{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px}.sgk-levels button{border:1px solid #cbd5e1;background:#fff;padding:10px;border-radius:11px;font-weight:800;cursor:pointer}.sgk-catalog{margin-top:14px}.sgk-catalog>summary,.sgk-group>summary{cursor:pointer;font-weight:800;padding:9px 0}.sgk-group{border-top:1px solid #e5e7eb}.sgk-group summary span{float:right;color:var(--muted);font-size:12px}.sgk-row{display:flex;gap:8px;padding:8px;border-radius:9px}.sgk-row.now{background:#eff6ff}.sgk-row small{display:block;color:var(--muted);margin-top:3px}@media(max-width:700px){.sgk-head{flex-direction:column}.sgk-select{flex-direction:column}.sgk-now{grid-template-columns:1fr}.sgk-levels{grid-template-columns:1fr 1fr}}';document.head.appendChild(css);
window.addEventListener('load',install);
})();