# Lumina Tours

Website giới thiệu tour "Ba miền đất – Một hành trình" bằng Next.js.

## Công nghệ
- Next.js 15
- React 19
- CSS thuần (không cần Tailwind hay thư viện giao diện)
- GitHub để lưu mã nguồn
- Vercel để triển khai

## Chạy trên Vercel
1. Tải và giải nén `lumina-tours.zip`.
2. Tạo một repository mới trên GitHub, ví dụ `lumina-tours`.
3. Upload toàn bộ **nội dung bên trong thư mục `lumina-tours`** lên repository (không upload file ZIP như một tệp duy nhất).
4. Vào https://vercel.com, đăng nhập bằng GitHub.
5. Chọn **Add New → Project**, import repository `lumina-tours`.
6. Vercel tự nhận diện Next.js. Giữ thiết lập mặc định và chọn **Deploy**.
7. Sau khi triển khai, Vercel cung cấp địa chỉ website `.vercel.app`.

## Favicon và logo
- `app/favicon.ico`: favicon nhiều kích thước cho tab trình duyệt.
- `app/icon.png`: icon PNG cho Next.js.
- `public/logo.png`: logo đầy đủ dùng trong navbar và footer.

## Chỉnh sửa nội dung
Các phần chính nằm trong `app/page.js`. Màu sắc, bố cục và responsive nằm trong `app/globals.css`.

## Lưu ý quan trọng
- Website hiện là bản giới thiệu/demo. Form đặt tour chỉ hiển thị thông báo minh họa, không gửi hoặc lưu dữ liệu.
- Ảnh minh họa đang tải từ Unsplash qua internet; cần kết nối mạng để hiển thị. Hãy thay bằng ảnh thật/được phép sử dụng trước khi công bố chính thức.
- Tên khách sạn, phương tiện, giá tour và ưu đãi được đưa vào theo kịch bản dự án; cần xác minh lại trước khi dùng cho hoạt động kinh doanh thực tế.
- Vercel Hobby phù hợp cho dự án cá nhân/học tập; cần kiểm tra điều khoản và giới hạn hiện hành nếu sử dụng cho mục đích thương mại.
