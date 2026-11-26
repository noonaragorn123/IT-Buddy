IT BUDDY — docs สำหรับ RAG

ภายในมีไฟล์ความรู้สินค้า 9 หมวด รวม 108 รายการตัวอย่าง
แต่ละหมวดมี 4 แบรนด์ แบรนด์ละ 3 รุ่น

หมวดหมู่:
- Mouse: Logitech, Razer, SteelSeries, Corsair
- Keyboard: Keychron, Logitech, Royal Kludge, ASUS
- Headset: HyperX, Logitech, Razer, JBL
- Monitor: AOC, LG, ASUS, Samsung
- RAM: Kingston, Corsair, G.Skill, Crucial
- SSD: Samsung, Western Digital, Crucial, Kingston
- GPU: ASUS, MSI, Gigabyte, Sapphire
- Microphone: FIFINE, HyperX, Razer, Maono
- Webcam: Logitech, Anker, Razer, AVerMedia

สำคัญ:
ข้อมูลทั้งหมดเป็นข้อมูลตัวอย่างเพื่อการศึกษาและทดสอบระบบ RAG ไม่ใช่แคตตาล็อกที่ยืนยันแล้ว
ราคา สเปก ชื่อรุ่น และการรับประกันอาจมีการเปลี่ยนแปลงหรือแตกต่างตามรุ่นย่อย/ร้านค้า
ห้ามนำข้อมูลไปใช้ขายจริงโดยไม่ตรวจสอบแหล่งข้อมูลที่เชื่อถือได้ก่อน

แนวทางทดสอบ RAG:
1. ถามชื่อสินค้าตรง ๆ เช่น "Logitech G304 ราคาเท่าไหร่"
2. ถามแบบใช้เงื่อนไข เช่น "หาเมาส์ไร้สายสำหรับเล่นเกม"
3. ถามเปรียบเทียบ เช่น "เปรียบเทียบจอ AOC 24G2SP กับ LG 24MP400"
4. ถามแบบระบุแบรนด์ เช่น "มีเมาส์ Razer รุ่นไหนบ้าง"
5. ถามข้อมูลที่ไม่มีในเอกสาร เพื่อทดสอบว่า Chatbot ไม่แต่งข้อมูลขึ้นเอง

เริ่มต้น:
นำไฟล์ .txt ทั้งหมดในโฟลเดอร์นี้ไปไว้ในโฟลเดอร์ docs ของโปรเจกต์ตามโครงสร้างในคู่มือ
จากนั้นทำขั้นตอนสร้าง vectors ตามคู่มือเดิม
