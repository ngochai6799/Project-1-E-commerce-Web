# Báo cáo cuối kì bộ môn: đồ án lập trình. 

*Mã học phần: IT3914*

*Sinh viên thực hiện: Cao Phạm Ngọc Hải*

MSSV: 20173825

## Lập trình trang web thương mại điện tử

1. Mục tiêu

Xây dựng giao diện trang web thương mại điện tử thân thiện với người dùng, đáp ứng nhu cầu mua sắm trực tuyến ngày càng gia tăng trong xã hội.

2. Công nghệ sử dụng

- Phía front-end: HTML5, CSS5, Angular 9 (Javascript)
- Phía back-end: Express (NodeJS)
- Phần mềm quản trị cơ sở dữ liệu: MySQL
- IDE: Visual Studio Code

3. Hướng dẫn cài đặt

- Tải và cài đặt NodeJS theo hướng dẫn: [NodeJS](https://o7planning.org/vi/11921/huong-dan-cai-dat-nodejs-tren-windows)
- Tải và cài đặt Visual Studio Code: [Visual Studio Code](https://techtalk.vn/blog/posts/huong-dan-tai-cai-dat-va-su-dung-visual-studio-2019)
- Tải Angular CLI: Mở command prompt và chạy lệnh
`npm install -g @angular/cli` 
Hướng dẫn sử dụng angular cli: [Angular CLI](https://cli.angular.io/)
- Tải và cài đặt MySQL và khởi tạo database: [MySQL](https://o7planning.org/vi/10221/huong-dan-cai-dat-va-cau-hinh-mysql-community). Sau đó mở file mega_shop_sql_script.sql bằng MySQL Work Bench vừa cài và khởi chạy script.

4. Hướng dẫn sử dụng

- Kết nối với database, bật kết nối với server: 
	+ Mở file helpers.js trong src/backend/config
	+ Sửa các thông tin: host, user, password theo cài đặt cá nhân khi cài MySQL. Ví dụ:
		[database](media/database.png)
 
			 
	+ Tại thư mục src/backend, mở command prompt và chạy lệnh
`npm start`
	Kết quả hiển thị như hình là thành công.
		[server](media/server-running.png)

- Truy cập vào trang chủ của website 
	+ Mở thư mục src/frontend bằng terminal của Visual Studio Code, chạy lệnh `ng serve` 
	+ Mở browser truy cập vào đường dẫn http://localhost:4200
	Kết quả hiển thị như hình dưới đây là thành công.
		[client](media/website-running.png)
	+ Từ đây có thể thực hiện các tính năng của trang web

- Hướng dẫn sử dụng các chức năng chi tiết bằng video: [video](media/video.mp4)