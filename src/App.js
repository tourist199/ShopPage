import React, { Component } from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Slide from './Components/Slide';
import Footer from './Components/Footer';
import './App.css';
import router from './router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductDetail from './Components/ProductDetail';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import ProductDetailContainer from './containers/ProductDetailContainer';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listDT: [
        {
          id: 1,
          category:'Apple',
          name: 'Iphone 6 plus',
          price: 700,
          desc: 'Điện thoại của Apple',
          image:'https://cdn.tgdd.vn/Products/Images/42/87846/iphone-6s-plus-32gb-400x460.png',
          star : 4,
          description:`Ngoài một số nhược điểm như hệ điều hành khó sử dụng hay không có phím trở lại, tuy nhiên khi bạn đã quen sử dụng iPhone bạn sẽ luôn muốn sử dụng tiếp theo các dòng mới của hãng, vì thiết kế sang trọng, tinh tế, máy thao tác nhanh, chụp ảnh đẹp.

          Công nghệ màn hình	LED-backlit IPS LCD
          Độ phân giải	Full HD (1080 x 1920 Pixels)
          Màn hình rộng	5.5"
          Mặt kính cảm ứng	Kính oleophobic (ion cường lực)
          Độ phân giải	8 MP
          Quay phim	Quay phim FullHD 1080p@60fps
          Đèn Flash	Có
          Chụp ảnh nâng cao	Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Chống rung quang học (OIS)
          Độ phân giải	1.2 MP
          Videocall	Có
          Thông tin khác	Tự động lấy nét, Nhận diện khuôn mặt, Tự động cân bằng sáng
          Hệ điều hành	iOS 9
          Chipset (hãng SX CPU)	Apple A8 2 nhân 64-bit
          Tốc độ CPU	1.4 GHz
          Chip đồ họa (GPU)	PowerVR GX6450
          RAM	1 GB
          Bộ nhớ trong	16 GB
          Bộ nhớ còn lại (khả dụng)	13.5 GB
          Thẻ nhớ ngoài	Không
          Mạng di động	3G, 4G LTE Cat 4
          SIM	1 Nano SIM
          Wifi	Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot
          GPS	A-GPS, GLONASS
          Bluetooth	A2DP, V4.0
          Cổng kết nối/sạc	Lightning
          Jack tai nghe	3.5 mm
          Kết nối khác	Không
          Thiết kế	Nguyên khối, mặt kính cong 2.5D
          Chất liệu	Hợp kim nhôm
          Kích thước	Dài 158.1 mm - Ngang 77.8 mm - Dày 7.1 mm
          Trọng lượng	172 g
          Dung lượng pin	2915 mAh
          Loại pin	Pin chuẩn Li-Ion
          Công nghệ pin	Tiết kiệm pin
          Bảo mật nâng cao	Mở khóa bằng vân tay
          Tính năng đặc biệt	Mặt kính 2.5D
          Ghi âm	Có
          Radio	Không
          Xem phim	MP4, AVI, WMV, H.263, H.264(MPEG4-AVC), DivX, Xvid
          Nghe nhạc	AMR, MP3, WAV, WMA, eAAC+`
        },
        {
          id: 2,
          category:'Nokia',
          name: 'Nokia 1202',
          price: 900,
          desc: 'Điện thoại nokia ',
          image: 'https://didongso.com.vn/wp-content/uploads/2018/09/nokia12-2.png',
          star: 5,
          description: `Nokia 1202 Chính Hãng
          
          Tên sản phẩm: Nokia 1202
          Kích thước: 105.3 x 45 x 13.1 mm, nặng 78g
          Main chính hãng Nokia 1202 vỏ làm lại mới
          Cam kết chỉ bán hàng MAIN 100% NOKIA
          Phụ kiện: 1 pin + sạc
          Màu sắc: đen và xanh dương
          Bảo hành 12 tháng, đổi máy trong 7 ngày nếu bị lỗi của NSX
          Giao nhận và bảo hành toàn quốc`
        },
        {
          id: 3,
          category:'Apple',
          name: 'Iphone Xs max',
          price: 1700,
          desc: 'Điện thoại mới nhất của Apple',
          image:'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png',
          star : 5,
          description:`Màn hình
          Công nghệ màn hình :	Super AMOLED
          Màu màn hình :	16 Triệu
          Chuẩn màn hình :	Super Retina HD
          Độ phân giải màn hình :	1242 x 2688 Pixels
          Màn hình :	6.5 inchs
          Mặt kính màn hình :	Kính Cường Lực
          Camera Trước
          Độ phân giải :	7.0 MP
          Thông tin khác :	Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt
          Camera Sau
          Độ phân giải :	Dual Camera 12.0 MP
          Quay phim :	4K
          Đèn Flash :	Có
          Chụp ảnh nâng cao :	Zoom quang học, Chụp ảnh xóa phông, A.I Camera, HDR, Panorama, Chống rung quang học
          Cấu hình phần cứng
          Tốc độ CPU :	Đang cập nhật
          Số nhân :	6
          Chipset :	Apple A12 Bionic
          RAM :	4 GB
          Chip đồ họa (GPU) :	Apple GPU 4 nhân
          Cảm biến :	3D Touch
          Bộ nhớ & Lưu trữ
          Danh bạ lưu trữ :	Không giới hạn`
        },
        {
          id: 4,
          category:'Fmobile',
          name: 'Fmobile T12',
          price: 700,
          desc: 'Điện thoại của FMobile',
          image:'https://img.websosanh.vn/v2/users/dclimg/images/ufdrie60ez77o.jpg',
          star:3,
          description:`Cảm ứng điện dung đa điểm và cảm biến chuyển động
          F-mobile F1 có cảm ứng điện dung công nghệ tiên tiến, đáp ứng nhanh và chính xác, cảm ứng nhạy, các tác vụ đa chạm đáp ứng mượt. Duyệt web và duyệt ảnh tiện dụng, chơi nhiều game cảm ứng hay. Ngoài ra, máy còn được trang bị cảm biến chuyển động, lật xoay màn hình theo chiều cầm máy, chơi nhiều game cảm ứng chuyển động, nhiều ứng dụng độc đáo.
          
          Hệ điều hành Android với hơn 500,000 ứng dụng
          Hàng trăm ngàn ứng dụng miễn phí độc đáo thỏa mãn mọi nhu cầu sử dụng của người dùng được hỗ trợ trực tiếp từ nền tảng Google Android cho phép người dùng thỏa sức sử dụng, giải trí, làm việc và học tập. Và số lượng ứng dụng vẫn đang không ngừng tăng lên,d đảm bảo bạn sẽ không bao giờ hết bất ngờ trước những ứng dụng mới lạ, độc đáo.`
        },
        {
          id: 5,
          category:'Vinsmart',
          name: 'Vinsmart Joy1',
          price: 700,
          desc: 'Điện thoại của Vin',
          image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/11/636801240961123743_vsmart-joy1-plus-den-1.png',
          star:4,
          description:`Đặc điểm nổi bật của Vsmart Joy 1 32GB

          Vsmart Joy 1, người em út trong gia đình điện thoại Vsmart mới ra mắt, nổi trội với nhiều trang bị hấp dẫn khiến nhiều đối thủ của nó phải ganh tỵ, điển hình là lối thiết kế tràn viền, hiệu năng ổn và còn có cả chuẩn USB Type-C hiện đại.
          Thiết kế đầy trẻ trung, năng động
          Dù thuộc phân khúc smartphone giá rẻ nhưng Vsmart Joy 1 vẫn được chăm chút khá kỹ lưỡng về ngoại hình khi sở hữu lối thiết kế unibody tuyệt đẹp.
          
          Thiết kế điện thoại Vsmart Joy 1
          
          Phần khung được bo cong mềm mại ở các góc giúp bạn luôn cảm thấy thoải mái, dễ chịu khi cầm nắm máy trong thời gian dài.
          
          Phần khung khe sim điện thoại Vsmart Joy 1
          
          Các chi tiết trên máy đều được gia công một cách tỷ mỉ nên sẽ không hề có hiện tượng ọp ẹp nhờ Joy 1 được hoàn thiện nguyên khối và chắc chắn.
          
          Màn hình rộng rãi trên kích thước 5.45 inch
          Nhờ được trang bị màn hình tỷ lệ 18:9 nên bạn sẽ được một không gian vô cùng rộng rãi để thưởng thức những bộ phim hay.`
        },
        {
          id: 6,
          category:'Samsung',
          name: 'samsung galaxy s10',
          price: 2000,
          desc: 'Điện thoại của Samsung',
          image: 'https://static.bhphoto.com/images/images500x500/samsung_sm_g973uzbaxaa_galaxy_s10_sm_g973u_128gb_1550829635_1456401.jpg',
          star:5,
          description: `Tuyệt tác của thiết kế với màn hình Infinity-O độc đáo lần đầu tiên đã xuất hiện. Không đơn thuần là một chiếc điện thoại, Samsung S10 còn là đỉnh cao của công nghệ.

          Samsung S10
          
          Màn hình vô cực Infinity-O, xóa bỏ mọi giới hạn
          Gần như toàn bộ phần viền màn hình đã được loại bỏ trên Samsung Galaxy S10, không có tai thỏ, không bị hạn chế tầm nhìn, trước mắt bạn là màn hình cực lớn 6,1 inch hiển thị vô cùng sống động. Viền cong siêu mỏng tràn cả 4 cạnh kết hợp cùng các đường cắt laser chuẩn xác khéo léo giấu kín camera nằm ngay trên màn hình. Galaxy S10 xứng đáng được gọi là một kiệt tác ngay trên tay bạn.
          
          Màn hình Samsung S10
          
          Công nghệ màn hình Dynamic AMOLED thế hệ mới mang đến hình ảnh chuẩn HDR10+, độ phân giải Quad HD+ siêu sắc nét. Mọi khung hình đều hiện lên chân thực, độ tương phản cao và màu sắc vô cùng sống động. Màn hình hiển thị chuẩn điện ảnh, kết hợp cùng hệ thống âm thanh nổi của loa ngoài stereo, công nghệ Dolby Atmos khiến Samsung S10 trở thành phương tiện giải trí di động hoàn hảo nhất.
          
          Tương lai của công nghệ bảo mật với cảm biến vân tay siêu âm
          Không còn cảm biến vân tay ở mặt lưng nữa, giờ đây với công nghệ vân tay siêu âm, Galaxy S10 đã tích hợp cảm biến vân tay ngay trên màn hình chính. Đây là một bước tiến lớn trong công nghệ bảo mật. Cảm biến sẽ sử dụng sóng siêu âm để nhận dạng 3D vân tay của bạn, giúp bạn là người duy nhất có thể truy cập vào máy, vô cùng tiện lợi và an toàn tuyệt đối.`
        },
        {
          id: 7,
          category:'Samsung',
          name: 'samsung galaxy a70 2018',
          price: 50,
          desc: 'Điện thoại của Samsung',
          image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/4/13/636907475981220637_samsung-galaxy-a70-den-1.png',
          star:5,
          description: `Đặc điểm nổi bật của Samsung Galaxy A70
          Tìm hiểu thêm
          Tìm hiểu thêm
          Bộ sản phẩm chuẩn: Sạc,Tai nghe,Sách hướng dẫn,Hộp,Cây lấy sim,Ốp lưng,Cáp
          
          Samsung Galaxy A70 là một phiên bản phóng to của chiếc Samsung Galaxy A50 đã ra mắt trước đó với nhiều cải tiến tới từ bên trong.
          Màn hình kích thước lớn, trải nghiệm "đã hơn"
          Màn hình của chiếc Galaxy A70 có kích thước khá lớn lên đến 6.7 inch độ phân giải Full HD+ trên tấm nền Super AMOLED.
          
          Các cạnh viền bezel được tinh chỉnh mỏng hơn, điều này giúp máy trông gọn gàng và cân xứng hơn rất nhiều.
          
          Samsung vẫn trang bị cho Galaxy A70 một mặt lưng vẫn bằng nhựa, nhưng sử dụng chất liệu cao cấp hơn mà Samsung gọi là “3D Graffitistic”.
          Ngôn ngữ nhựa giả thủy tinh này cho trải nghiệm tốt hơn, cứng cáp và chắc chắn, khi nhấn vào không bị ọp ẹp như chất liệu nhựa.
          Galaxy A70 có 3 màu sắc bán ra tương tự các dòng sản phẩm thấp hơn trước đó là "Đen, Trắng và Xanh". Cả 3 phiên bản này đều được trang bị thêm hiệu ứng lấp lánh nhiều màu khi nghiêng theo góc nhìn rất đẹp mắt.
          Cảm biến vân tay dưới màn hình tiên tiến
          Tương tự như người anh em Galaxy A50 thì Galaxy A70 vẫn sở hữu cho mình công nghệ cảm biến vân tay dưới màn hình đang rất hot hiện nay.
          Tốc độ nhận diện và mở khóa máy khá nhanh giúp bạn tiết kiệm được thời gian so với việc nhập mật khẩu thông thường.`
        }
        
      ],
      ListCart : [
        {
          id: 5,
          name: 'Vinsmart Joy1',
          price: 700,
          desc: 'Điện thoại của Vin',
          image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/11/636801240961123743_vsmart-joy1-plus-den-1.png',
          star:4,
          quantity: 2
        },{
          id: 4,
          name: 'Fmobile T12',
          price: 700,
          desc: 'Điện thoại của FMobile',
          image:'https://img.websosanh.vn/v2/users/dclimg/images/ufdrie60ez77o.jpg',
          star:3,
          quantity: 5
        }
      ],
      filterCategory : ''
    
    }
  }

  

  onDelete = (item) => {
    var list = this.state.ListCart;
    var index = list.find((x)=>x.id===item.id);
    list.splice(list.indexOf(index),1);
    this.setState({
      ListCart : list
    })
  }

 

  changeFilterCategory = (e,filter)=>{
    this.setState({filterCategory:filter})
  }

  showRoutes = (routers)=>{
    return routers.map((item,index)=>{
      return <Route key={index} path={item.path} exact={item.exact} component={item.main} />
    })
  }

  render() {
    return (
      <div >
        <Router>
          <div>
            <Header listcart ={this.state.ListCart} />

            <div className="container">
              <div className="row">
                <SideBar listDT = {this.state.listDT} changeFilterCategory={this.changeFilterCategory} filterCategory={this.state.filterCategory}  />
                <div className="col-lg-9">
                  <Slide />
                  <Switch>
                    <Route path="/" exact component={()=><ProductsContainer  />}/>
                    <Route path="/cart" component={()=><CartContainer />} />
                    <Route path="/product-detail/:id_product" component={({match,history})=><ProductDetailContainer match = {match} history = {history} />} />
                    {this.showRoutes(router)}
                  </Switch>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;