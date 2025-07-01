import React from 'react';

function Results() {
    return (
        <section>
            <h2>KẾT QUẢ KHÁCH HÀNG THỰC TẾ</h2>
            <p style={{ fontSize: '1.1em', maxWidth: 800, margin: '20px auto 40px auto' }}>Xem những câu chuyện thành công của khách hàng chúng tôi. Họ đã đạt được mục tiêu thể chất của mình với sự hỗ trợ của Beastmode Gym.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, margin: '32px 0' }}>
                {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} style={{ width: 180, height: 240, background: '#222', borderRadius: 12, overflow: 'hidden', boxShadow: '0 6px 15px rgba(0,0,0,0.2)', transition: 'transform 0.2s ease-in-out' }}>
                        <img src={`/result${i}.jpg`} alt={`Result ${i}`} style={{ width: '100%', height: '80%', objectFit: 'cover' }} onError={e => {e.target.style.display='none'}} />
                        <div style={{ color: '#fff', fontSize: '10px' , padding: '10px 5px', textAlign: 'center' }}>Kết quả ấn tượng!</div>
                    </div>
                ))}
            </div>
            <div style={{ color: '#c8102e', fontWeight: 700, margin: 30, fontSize: '1.3em' }}>TÌM CÂU LẠC BỘ GẦN BẠN NHẤT NGAY BÂY GIỜ!</div>
            <button className="btn">THAM GIA NGAY</button>
        </section>
    );
}

export default Results;