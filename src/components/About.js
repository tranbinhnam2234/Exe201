import React from 'react';

function About() {
    return (
        <section className="white-bg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 60, color: '#000' }}>
            <div style={{ maxWidth: 900, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 40 }}>
                <div style={{ flex: 1, minWidth: 300, textAlign: 'left' }}>
                    <h2>VỀ CHÚNG TÔI</h2>
                    <p>
                        Sau một thời gian nỗ lực lan tỏa và thay đổi một phần nhận thức của cộng đồng Fitness, chúng tôi muốn trực tiếp mang lại nhiều giá trị hơn cho xã hội, thay đổi nhận thức lệch lạc về phương pháp tập luyện của chính những người đó. Khách hàng đang loay hoay tìm kiếm một nơi đáng tin cậy về chuyên môn, không sợ bị thao túng để có doanh số, đó là lý do **HT Private Fitness 1** ra đời vào tháng 2 năm 2019.
                    </p>
                    <p>
                        Vào tháng 01 năm 2020, **HT Training** đổi tên thành **HT Fitness Institute**, trở thành một trong những tổ chức đào tạo chuyên nghiệp hàng đầu tại Việt Nam với các khóa học xây dựng và thiết kế chương trình tập luyện và chế độ ăn uống từ trình độ cơ bản đến chuyên nghiệp thông qua cả hình thức trực tuyến và trực tiếp.
                    </p>
                </div>
                <div style={{ flex: 1, minWidth: 200, textAlign: 'center' }}>
                    <img src="/about-athlete.jpg" alt="Athlete" style={{ maxWidth: 380, borderRadius: 12, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }} onError={e => {e.target.style.display='none'}} />
                    <p style={{ marginTop: 15, fontSize: '0.9em', color: '#555' }}>Cộng đồng Fitness phát triển từng ngày.</p>
                </div>
            </div>
        </section>
    );
}

export default About;