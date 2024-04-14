import React, { useEffect } from 'react';
export const DetailShop = () => {
    useEffect(() => {

        var div = document.getElementById('hihi');
        var cart = document.getElementById('cart');
        var btnThoat = document.getElementById('btnExist');
        div.addEventListener('click', function() {
        cart.style.display = 'block'; // Hiển thị giỏ hàng khi nhấp vào div
        });
        btnThoat.addEventListener('click',function(){
            cart.style.display = 'none';
        });

        const handleScroll = () => {
            var header = document.querySelector('.header');
            var scrollPosition = window.scrollY;
              if(header != null){
                  if (scrollPosition === 0) {
                      header.classList.remove('sticky');
                    } else {
                      header.classList.add('fixed');
                    }
              }
            
          };
      
          window.addEventListener('scroll', handleScroll);
      
          // Hủy đăng ký sự kiện khi component unmount
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
      }, []);
    return(
        <>
        <div className=''>
            <div className="relative">
                        <div className=" header pl-[10rem] pr-[10rem] pb-[1rem] w-full bg-gray-100 sticky pt-[1.5rem] flex items-center justify-between">
                                <div className="left-0">
                                    <img className="h-6" src="https://vectorseek.com/wp-content/uploads/2021/02/GrabFood-Logo-Vector.png" alt="#" />
                                </div>
                                <div className="bg-gray-100">
                                    <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </span>
                                    <input className="border-gray-300 border-[1px] pl-10 pr-10 h-10 rounded" type="text" placeholder="Nhập địa chỉ của bạn" />
                                    </div>
                                </div>
                                <div className="flex space-x-3 justify-end">
                                    <div className="bg-gray-100 p-[0.4rem] rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    </div>
                                    <div className="bg-gray-100 p-[0.4rem] rounded">
                                    <p className="text-gray-500 ">Đăng nhập/Đăng ký</p>
                                    </div>
                                    <div className="bg-gray-100 p-[0.4rem] rounded flex items-center">
                                    <p className="text-gray-500">
                                        VI
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block mt-1 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    </div>
                                </div>
                                
                        </div>
            </div>
            <div className="DetailShop-header pl-[10rem] pr-[10rem]">
                <div className="flex items-center pt-[6rem]">
                        <p className="inline text-[18px] text-blue-400">Trang chủ </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        <p className="inline text-[18px] text-blue-400">Nhà Hàng</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        <p className="inline text-[18px] text-gray-700">Cơm tấm Thảo</p>
                </div>
                <div>
                    <p className="font-bold text-[2.5rem] pt-2 pb-2">Cơm Tấm Thảo</p>
                            <span className="text-gray-400">Cơm</span>
                            <div className="flex items-center pt-1 pb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-2 text-gray-400 pr-4">4.2</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="ml-2 text-gray-400 pr-4">15 phút</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-400">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>
                                <span className="text-gray-400 pr-4">1,6km</span>
                            </div>
                            <div className="flex gap-10 mt-2 mb-2">
                                <p>Giờ mở cửa</p>
                                <p>Hôm nay 00:00-23:59</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>
                                <span className="">Tận hưởng ưu đãi</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>
                                <span className="">Ưu đãi đến 52K</span>
                                <a className="text-blue-500 pl-5" href="#">Xem chi tiết</a>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
                                <div className="flex items-center border-[1px] border-gray-200 rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                    <p>Ngày giao hàng: Hôm nay</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div className="flex items-center border-[1px] border-gray-200 rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p>Thời gian giao hàng: Ngay bây giờ</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                </div>
            </div>
            <div className="DetailShop-navigation flex gap-10 pl-[10rem] pr-[10rem] text-gray-500 shadow">
                <div className="p-5 border-b-[2px] border-green-600 text-green-600 font-semibold">
                    <p>Ưu đãi hôm nay</p>
                </div>
                <div className="p-5">
                    <p>Món Phụ</p>
                </div>
                <div className="p-5">
                    <p>Món Chính</p>
                </div>
                <div className="p-5">
                    <p>Đồ Uống</p>
                </div>
            </div>
            <div className="DetailShop-content pl-[10rem] pr-[10rem] bg-gray-100">
                <div className="tittle font-bold text-[2.5rem] pt-10 pb-10">
                    <p>Ưu đãi hôm nay</p>
                </div>
                <div id='hihi' className="grid grid-cols-3 gap-6">
                    <div className="flex gap-4 bg-white p-5 rounded relative hover:border-green-500 hover:border-[1px]">
                        <div>
                            <img className="w-[120px] h-[120px] rounded" src="https://food-cms.grab.com/compressed_webp/items/VNITE2022081912510393568/detail/menueditor_item_b2c056dd6c9e433c82ffa802a2999c3d_1660913383462433083.webp" alt="" />
                        </div>
                        <div className=" leading-10">
                            <p className="text-[18px]">Rau má nước dừa ly lớn</p>
                            <p className="text-gray-500 text-[14px]">Rau má đồng với dừa tươi</p>
                            <p className="inline-block">
                                <span className="text-orange-700 font-medium bg-orange-200  rounded text-[14px]">Tiết kiệm 14.000đ</span>  
                                <span className="text-[14px] line-through text-gray-500">15.000</span>
                            </p>
                            <p className="text-[18px]">1.000</p>
                        </div>
                        <div className=" absolute right-4 bottom-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-green-500">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="DetailShop-content pl-[10rem] pr-[10rem] bg-gray-100">
                <div className="tittle font-bold text-[2.5rem] pt-10 pb-10">
                    <p>Món Phụ</p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="flex gap-4 bg-white p-5 rounded relative hover:border-green-500 hover:border-[1px]">
                        <div className=" leading-10">
                            <p className="text-gray-500 text-[16px]">Cơm thêm</p>
                            <p className="text-gray-500 text-[16px]">5.000</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="DetailShop-content pl-[10rem] pr-[10rem] bg-gray-100">
                <div className="tittle font-bold text-[2.5rem] pt-10 pb-10">
                    <p>Món Chính</p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="flex gap-4 bg-white p-5 rounded relative hover:border-green-500 hover:border-[1px]">
                        <div>
                            <img className="w-[120px] h-[120px] rounded" src="https://food-cms.grab.com/compressed_webp/items/VNITE2024032512372258434/detail/menueditor_item_233b4962a8ce4b6e8abf82007a4a6337_1711370164272563938.webp" alt="" />
                        </div>
                        <div className="">
                            <p className="text-gray-500 text-[16px]">Khô bò loại ngon 260k một bịch</p>
                            <p className="text-gray-500 text-[16px] pt-10">260.000</p>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-white p-5 rounded relative hover:border-green-500 hover:border-[1px]">
                        <div>
                            <img className="w-[120px] h-[120px] rounded" src="https://food-cms.grab.com/compressed_webp/items/VNITE2023110411554815310/detail/menueditor_item_ec5d99ae7796487db1e0b343646d2c9f_1699098865354770026.webp" alt="" />
                        </div>
                        <div className="">
                            <p className="text-gray-500 text-[16px]">Sườn cọng không cơm</p>
                            <p className="text-gray-500 text-[16px] pt-10">55.000</p>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-white p-5 rounded relative hover:border-green-500 hover:border-[1px]">
                        <div>
                            <img className="w-[120px] h-[120px] rounded" src="https://food-cms.grab.com/compressed_webp/items/VNITE2023110411284258681/detail/menueditor_item_d21d1d75a34b4b2eb0674533a5b1d0e5_1699097207323473785.webp" alt="" />
                        </div>
                        <div className="">
                            <p className="text-gray-500 text-[16px]">Ba rọi không cơm</p>
                            <p className="text-gray-500 text-[16px] pt-10">55.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="DetailShop-content pl-[10rem] pr-[10rem] bg-gray-100">
                <div className="tittle font-bold text-[2.5rem] pt-10 pb-10">
                    <p>Đồ Uống</p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="flex gap-4 bg-white p-5 rounded relative hover:border-green-500 hover:border-[1px]">
                        <div>
                            <img className="w-[120px] h-[120px] rounded" src="https://food-cms.grab.com/compressed_webp/items/5-CYVBC2MFHCJJN6-CY3AN8B3J2VFHE/detail/1ad2eee993a54e64a2eb0c3d564a8277_1575829756906380985.webp" alt="" />
                        </div>
                        <div className="">
                            <p className="text-gray-500 text-[16px]">Coca</p>
                            <p className="text-gray-500 text-[16px] pt-10">15.000</p>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-white p-5 rounded relative hover:border-green-500 hover:border-[1px]">
                        <div>
                            <img className="w-[120px] h-[120px] rounded" src="https://food-cms.grab.com/compressed_webp/items/5-CYVBC2MFHCJJN6-CY3AN8B3RRLAJN/detail/56f4d0f6cda741dd80e2c5260ae9f76e_1575829657491944231.webp" alt="" />
                        </div>
                        <div className="">
                            <p className="text-gray-500 text-[16px]">Bò húc</p>
                            <p className="text-gray-500 text-[16px] pt-10">20.000</p>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-white p-5 rounded relative hover:border-green-500 hover:border-[1px]">
                        <div>
                            <img className="w-[120px] h-[120px] rounded" src="https://food-cms.grab.com/compressed_webp/items/5-CYVBC2MFHCJJN6-CY3AN8B3LX3XAJ/detail/7f1dc98aa3814eb28c7bad445c1b9b1a_1574763459682236229.webp" alt="" />
                        </div>
                        <div className="">
                            <p className="text-gray-500 text-[16px]">Pepsi</p>
                            <p className="text-gray-500 text-[16px] pt-10">15.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' text-center p-10 bg-gray-100'>
                <p>Chúng tôi luôn cố gắng cập nhật thông tin chính xác nhất. <span className='text-blue-500'>Hãy báo với chúng tôi</span> nếu bạn thấy bất kỳ thông tin không chính xác nào.</p>
            </div>
            <div className="footer pl-[10rem] pr-[10rem] bg-green-600">
                <div className="pt-5 pb-5">
                    <img className="h-[4rem]" src="https://food.grab.com/static/images/logo-grabfood-white2.svg" alt="#" />
                </div>
                <hr className="border-gray-300 border-[1px]"/>
                <div className="grid grid-cols-4 gap-6 text-white pt-10 pb-10">
                    <div>
                        <p className="text-[1.2rem]">Về GrabFood</p>
                        <p className="text-[1.2rem]">Về Grab</p>
                        <p className="text-[1.2rem]">Blog</p>
                    </div>
                    <div>
                        <p className="text-[1.2rem]">Mở quán trên GrabFood</p>
                        <p className="text-[1.2rem]">Trở thành tài xế Grab</p>
                    </div><div>
                        <p className="text-[1.2rem]">Trung tâm hỗ trợ</p>
                        <p className="text-[1.2rem]">Câu hỏi thường gặp</p>
                    </div><div>
                        <p className="text-[1.2rem]">Về GrabFood</p>
                        <p className="text-[1.2rem]">Về Grab</p>
                        <p className="text-[1.2rem]">Blog</p>
                    </div>
                </div>
                <hr className="border-gray-300 border-[1px]"/>
                <div className="grid grid-cols-3 gap-10 pt-10 pb-5">
                    <div className="grid grid-cols-2 gap-6">
                        <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="" />
                        <img src="https://food.grab.com/static/images/logo-playstore.svg" alt="" />
                    </div>
                    <div></div>
                    <div className="flex gap-8 text-white text-[13px] justify-center items-center">
                    <p>2024 Grab</p>
                    <p>Câu hỏi thường gặp</p>
                    <p>Chính sách bảo mật</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="cart" className="fixed w-[35%] top-0 hidden right-0 bg-white shadow">
            <div className="p-4">
                <svg id='btnExist' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            
            <div className="border-t-[1px] border-b-[4px] w-full border-gray-100 flex gap-2 p-6">
                <div className="w-[25%]">
                    <img className="w-[99px] h-[99px] rounded" src="https://food-cms.grab.com/compressed_webp/items/VNITE2023092911031378248/detail/menueditor_item_45e5ae1974b5454c8a22c5b5b85919e0_1695985178698634428.webp" alt="" />
                </div>
                <div className="w-[60%]">
                    <p className="font-bold text-[22px]">Bánh mì tam giác Truyền thống</p>
                    <p className="text-gray-500">Vỏ bánh mì nóng giòn + thịt nướng Kebab (heo) + nước sốt đặc biệt + bắp cải + xà lách + dưa leo + cà chua (Bánh luôn được quán ép nóng giòn trước khi giao, khách lưu ý giúp quán là nếu quãng đường giao hàng xa quá bánh có thể ít nóng đi ạ)</p>
                </div>
                <div className="w-[15%]">
                    <p>29.000</p>
                </div>
            </div>

            <div className="p-4 leading-8 border-b-[4px] border-gray-100">
                <div>
                    <p className="inline font-bold pr-4">Topping Thêm</p><span className="text-gray-500 text-[12px]">Optional, max 3</span>
                </div>
                <div className=" leading-[50px]">
                    <div className="items-center flex border-t-[1px] border-gray-200">
                        <input id="option" type="checkbox" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="option" className="ms-2 text-[16px] font-medium text-gray-600 dark:text-gray-300 cursor-pointer">Thịt nướng Kebab thêm</label>
                        <p className="text-gray-600 ml-auto">9.999</p>
                    </div>
                    {/* <div className="items-center flex border-t-[1px] border-gray-200">
                        <input id="option" type="checkbox" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="option" className="ms-2 text-[16px] font-medium text-gray-600 dark:text-gray-300 cursor-pointer">Thịt nướng Kebab thêm</label>
                        <p className="text-gray-600 ml-auto">9.999</p>
                    </div> */}
                    <div className="items-center flex border-t-[1px] border-gray-200">
                        <input id="option" type="checkbox" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="option" className="ms-2 text-[16px] font-medium text-gray-600 dark:text-gray-300 cursor-pointer">Thịt nướng Kebab thêm</label>
                        <p className="text-gray-600 ml-auto">9.999</p>
                    </div>
                </div>
            </div>

            <div className="p-4 leading-8 border-b-[2px] border-gray-100">
                <div>
                    <p className="inline font-bold pr-4">Special instructions</p><span className="text-gray-500 text-[12px]">Optional</span>
                </div>
                <div>
                    <input className="border-[1px] border-gray-300 rounded w-full p-2" type="text" name="" id="" placeholder="E.g. No onions please"/>
                </div>
            </div>

            <div className="p-6 sticky items-center flex">
                <div className="w-[40%] flex gap-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 border-[1px] border-gray-300 rounded text-blue-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    <p className="text-gray-600">1</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 border-[1px] border-gray-300 rounded text-blue-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                
                <div className="w-[60%]">
                    <button className="bg-green-500 rounded text-white text-center w-full p-2">
                        Add to Basket
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}


