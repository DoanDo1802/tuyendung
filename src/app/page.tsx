"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#113a5a] font-sans text-white">
      {/* 
        Container chính: 
        Cho phép cuộn bình thường (không flex justify-center), nên phần đầu và cuối của ảnh sẽ không bị cắt.
        Trên màn hình lớn vẫn giới hạn max-w để dễ nhìn, trên điện thoại tràn viền 100% không khoảng trống.
      */}
      <main className="w-full flex-1 flex flex-col items-center">
        <div className="w-full max-w-5xl relative sm:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <Image
            src="/1.jpg"
            alt="Landing Page Content"
            width={0}
            height={0}
            sizes="(max-width: 1024px) 100vw, 1024px"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />

          {/* Phần 2 cột: QR Code bên trái, Chữ bên phải */}
          <div className="w-full bg-[#113a5a] p-4 sm:p-8 md:p-12 flex flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 text-white">
            {/* Cột trái: Ảnh QR Code */}
            <div className="relative z-10 w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 bg-white p-1 sm:p-2 rounded-lg sm:rounded-xl flex-shrink-0 shadow-lg flex items-center justify-center">
              <div className="w-full h-full relative rounded-md sm:rounded-lg overflow-hidden">
                <Image
                  src="/qr2.jpeg"
                  alt="Zalo QR Code"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Cột phải: Phần Text */}
            <div className="flex-1 text-center flex flex-col justify-center items-center">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-black uppercase mb-1 sm:mb-4 md:mb-6 tracking-wide drop-shadow-sm">
                Submit Your CV
              </h2>
              <p className="text-xs sm:text-base md:text-xl italic font-medium leading-snug sm:leading-relaxed drop-shadow-sm max-w-2xl text-zinc-200">
                Sau khi submit CV ứng viên vui lòng tham gia nhóm Zalo. Chỉ duyệt các thành viên đã gửi CV
              </p>

              <div className="mt-6 sm:mt-8 relative inline-block animate-heartbeat">
                {/* Nút bấm chính */}
                <a
                  href="https://forms.gle/qCqMnRt17HXmdJoNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-2 px-6 py-2 sm:px-10 sm:py-3 bg-[#ee0d5f] hover:bg-[#d90b55] text-white font-bold uppercase tracking-wider rounded-full shadow-lg transition-colors duration-300 text-sm sm:text-lg"
                >
                  Submit Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
