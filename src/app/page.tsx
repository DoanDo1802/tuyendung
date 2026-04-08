"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-zinc-900">
      {/* 
        Container chính: 
        Cho phép cuộn bình thường (không flex justify-center), nên phần đầu và cuối của ảnh sẽ không bị cắt.
        Trên màn hình lớn vẫn giới hạn max-w để dễ nhìn, trên điện thoại tràn viền 100% không khoảng trống.
      */}
      <main className="w-full flex-1 flex flex-col items-center">
        <div className="w-full max-w-5xl relative sm:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {[
            "/1,1.png",
            "/2.png",
            "/3.png",
            "/4.png",
            "/5.png",
            "/6.png",
            "/7.png",
            "/8.png",
            "/9.png",
            "/10.3.png"
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Landing Page Content ${index + 1}`}
              width={0}
              height={0}
              sizes="(max-width: 1024px) 100vw, 1024px"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority={index < 2} // Chỉ tải ưu tiên 2 ảnh đầu tiên để tăng tốc độ
            />
          ))}

          {/* Phần kêu gọi hành động (1 cột căn giữa) */}
          <div className="w-full bg-white p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center text-zinc-900">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-3 sm:mb-5 tracking-wide drop-shadow-sm text-zinc-900">
              Tham Gia Ngay
            </h2>
            <p className="text-sm sm:text-lg md:text-xl italic font-medium leading-relaxed max-w-2xl text-zinc-600 mb-2">
              Chúng tôi đang tìm kiếm những nhân sự tài năng như bạn — ứng tuyển ngay để bứt phá và chinh phục thu nhập không giới hạn.
            </p>

            <div className="mt-8 sm:mt-10 relative inline-block animate-heartbeat">
              {/* Nút bấm chính */}
              <a
                href="https://forms.gle/qCqMnRt17HXmdJoNA"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-2 px-8 py-3 sm:px-12 sm:py-4 bg-[#ee0d5f] hover:bg-[#d90b55] text-white font-black uppercase tracking-wider rounded-full shadow-xl transition-colors duration-300 text-base sm:text-xl"
              >
                Ứng tuyển ngay
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
