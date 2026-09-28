# Hướng dẫn đưa web vuhuybao.com lên mạng (GitHub Pages + GoDaddy)

## Bước 1: Đưa code lên GitHub
1. Đăng ký hoặc đăng nhập https://github.com
2. Bấm nút **+** ở góc phải → **New repository**
   - Repository name: `vuhuybao.com`
   - Chọn **Public** → bấm **Create repository**
3. Trong repo mới, bấm **uploading an existing file**
4. Giải nén file zip, mở thư mục `vuhuybao.com`, **chọn TẤT CẢ file và thư mục bên trong** (index.html, assets, bai-viet, CNAME, 404.html…) rồi kéo thả vào trang GitHub
   - Lưu ý: kéo các file BÊN TRONG, không kéo nguyên thư mục cha
   - File `.nojekyll` bị ẩn trên máy, thiếu nó cũng không sao
5. Bấm **Commit changes**

## Bước 2: Bật GitHub Pages
1. Trong repo → **Settings** → menu trái chọn **Pages**
2. Source: **Deploy from a branch** · Branch: **main** · thư mục **/(root)** → **Save**
3. Ô **Custom domain**: nhập `vuhuybao.com` → **Save**

## Bước 3: Trỏ tên miền trên GoDaddy
1. Đăng nhập https://dcc.godaddy.com → chọn **vuhuybao.com** → tab **DNS**
2. **Xóa** bản ghi A có Name `@` đang trỏ về "Parked" hoặc "WebsiteBuilder" (nếu có)
3. **Thêm 4 bản ghi A** (Add New Record):

| Type | Name | Value           | TTL    |
|------|------|-----------------|--------|
| A    | @    | 185.199.108.153 | 1 Hour |
| A    | @    | 185.199.109.153 | 1 Hour |
| A    | @    | 185.199.110.153 | 1 Hour |
| A    | @    | 185.199.111.153 | 1 Hour |

4. Sửa (hoặc thêm) bản ghi **CNAME** có Name `www` → Value: `TEN-TAI-KHOAN-GITHUB.github.io`
   (thay bằng tên tài khoản GitHub của anh, ví dụ `vuhuybao.github.io`)
5. Nếu GoDaddy đang bật **Forwarding** (chuyển hướng tên miền) thì tắt đi

## Bước 4: Bật HTTPS
- Chờ từ 15 phút đến vài giờ (tối đa 24–48 giờ) để DNS cập nhật
- Quay lại **Settings → Pages**, khi thấy "DNS check successful" thì tick **Enforce HTTPS**
- Mở https://vuhuybao.com để kiểm tra

## Cập nhật nội dung về sau
- Sửa trực tiếp trên GitHub: mở file → biểu tượng bút chì → sửa → **Commit changes**. Web tự cập nhật sau khoảng 1–2 phút.
- Thêm bài viết mới: sao chép một file trong `bai-viet/`, đổi tên, sửa nội dung, rồi thêm một thẻ bài viết vào mục "Chia sẻ" trong `index.html`.
- Đổi ảnh chân dung: thay file `assets/img/portrait.jpg` (giữ nguyên tên).
