import React from 'react';

function Pricing() {
  return (
      <div>
        <section style={{ position: 'relative', minHeight: 350, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: 12 }}>
          <img src="/pricing-banner.jpg" alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, position: 'absolute', top: 0, left: 0, zIndex: 0, borderRadius: 12 }} onError={e => {e.target.style.display='none'}} />
          <div style={{ position: 'relative', zIndex: 1, padding: 40, color: '#fff', textAlign: 'center' }}>
            <h1>GÓI TẬP CỦA BEASTMODE</h1>
            <p style={{ fontSize: '1.2em' }}>Chọn gói phù hợp nhất với mục tiêu của bạn.</p>
          </div>
        </section>

        <section style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', margin: '50px 0' }}>
          <div style={{ background: '#222', color: '#fff', borderRadius: 12, padding: 40, minWidth: 280, maxWidth: 350, boxShadow: '0 8px 25px rgba(0,0,0,0.3)', transition: 'transform 0.3s ease-in-out' }}>
            <h3 style={{ color: '#c8102e', fontSize: '2em', marginBottom: 20 }}>BASIC PLAN</h3>
            <ul style={{ textAlign: 'left', listStyleType: 'none', padding: 0, margin: '20px 0 30px 0' }}>
              <li style={{ margin: '10px 0', fontSize: '1.1em', display: 'flex', alignItems: 'center' }}><span style={{ color: '#c8102e', marginRight: 10 }}>&#10003;</span> Hướng dẫn sử dụng thiết bị</li>
              <li style={{ margin: '10px 0', fontSize: '1.1em', display: 'flex', alignItems: 'center' }}><span style={{ color: '#c8102e', marginRight: 10 }}>&#10003;</span> Khăn miễn phí</li>
              <li style={{ margin: '10px 0', fontSize: '1.1em', display: 'flex', alignItems: 'center' }}><span style={{ color: '#c8102e', marginRight: 10 }}>&#10003;</span> Phòng xông hơi</li>
              <li style={{ margin: '10px 0', fontSize: '1.1em', display: 'flex', alignItems: 'center' }}><span style={{ color: '#c8102e', marginRight: 10 }}>&#10003;</span> Tiếp cận tất cả thiết bị gym</li>
            </ul>
            <div style={{ fontWeight: 700, fontSize: 36, margin: '25px 0', color: '#c8102e' }}>$7.99<span style={{ fontSize: '0.6em', color: '#fff' }}>/THÁNG</span></div>
            <button className="btn">CHỌN BASIC</button>
          </div>

          <div style={{ background: '#c8102e', color: '#fff', borderRadius: 12, padding: 40, minWidth: 280, maxWidth: 350, boxShadow: '0 8px 30px rgba(0,0,0,0.5)', transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out' }}>
            <h3 style={{ color: '#fff', fontSize: '2.2em', marginBottom: 20 }}>PREMIUM PLAN</h3>
            <ul style={{ textAlign: 'left', listStyleType: 'none', padding: 0, margin: '20px 0 30px 0' }}>
              <li style={{ margin: '10px 0', fontSize: '1.1em', display: 'flex', alignItems: 'center' }}><span style={{ color: '#fff', marginRight: 10 }}>&#10003;</span> **Huấn luyện viên cá nhân**</li>
              <li style={{ margin: '10px 0', fontSize: '1.1em', display: 'flex', alignItems: 'center' }}><span style={{ color: '#fff', marginRight: 10 }}>&#10003;</span> Khăn miễn phí</li>
              <li style={{ margin: '10px 0', fontSize: '1.1em', display: 'flex', alignItems: 'center' }}><span style={{ color: '#fff', marginRight: 10 }}>&#10003;</span> Phòng xông hơi</li>
              <li style={{ margin: '10px 0', fontSize: '1.1em', display: 'flex', alignItems: 'center' }}><span style={{ color: '#fff', marginRight: 10 }}>&#10003;</span> Kế hoạch tập luyện tùy chỉnh</li>
              <li style={{ margin: '10px 0', fontSize: '1.1em', display: 'flex', alignItems: 'center' }}><span style={{ color: '#fff', marginRight: 10 }}>&#10003;</span> Kế hoạch dinh dưỡng cá nhân</li>
            </ul>
            <div style={{ fontWeight: 700, fontSize: 40, margin: '25px 0', color: '#fff' }}>$9.99<span style={{ fontSize: '0.6em', color: '#eee' }}>/THÁNG</span></div>
            <button className="btn" style={{ background: '#fff', color: '#c8102e' }}>CHỌN PREMIUM</button>
          </div>
        </section>

        <section className="black-bg">
          <h2>Bạn cần một gói tùy chỉnh?</h2>
          <p>Liên hệ với chúng tôi để thảo luận về nhu cầu của bạn.</p>
          <button className="btn">YÊU CẦU TƯ VẤN</button>
        </section>
      </div>
  );
}

export default Pricing;