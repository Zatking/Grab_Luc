import React, { useEffect } from 'react';
import { ShopList } from '../ListShop/ShopList';
export const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      var header = document.querySelector('.header');
      var scrollPosition = window.scrollY;
        if(header != null){
            if (scrollPosition === 0 ) {
                header.classList.remove('bg-gray-100')
              } else {
                header.classList.add('bg-gray-100')
              }
        }
      
    };

    window.addEventListener('scroll', handleScroll);

    // Hủy đăng ký sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
      <>
        <div className="wrapper">
      <div className="wrapperheader w-screen flex flex-col h-full mb-[10rem]">
        <div className="relative ">
            <img className="h-[24rem] w-screen object-cover" src="https://deliciousvietnam.net/wp-content/uploads/2020/05/Delicious-Vietnam-pho-bo-vietnamese-beef-noodle-soup-1870x1233.jpeg" alt="" />
            <div className="absolute top-0 left-0">
              <div className="header fixed bg-gray-100 pb-[1rem] w-screen flex space-x-[50rem] pl-[10rem] pr-[10rem] pt-[3rem]">
                    <div className="">
                        <img className="h-6" src="https://vectorseek.com/wp-content/uploads/2021/02/GrabFood-Logo-Vector.png" alt="#" />
                    </div>
                    <div className="flex space-x-3">
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
                <div className="Recommend flex-1 mt-20 pl-[10rem] pr-[10rem] pt-[2rem]">
                    <div className="bg-white w-[50%] border-gray-300 border-[1px] pt-[2.5rem] pb-[2.5rem] pl-[1.5rem] pr-[1.5rem] rounded">
                        <p className="font-bold text-[20px]">Good Evening</p>
                        <p className="font-bold text-[38px]">Where should we deliver your food today?</p>
                        <div className="bg-gray-100 mt-[1rem] mb-[1rem]">
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                  </svg>
                              </span>
                              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                  </svg>
                              </span>
                              <input className="border-gray-300 border-[1px] pl-10 pr-10 w-full h-10" type="text" placeholder="Nhập địa chỉ của bạn" />
                            </div>
                        </div>
                        <button className="bg-green-500 rounded w-full h-[3rem] text-white font-bold">Tìm kiếm</button>
                    </div>
                </div>
                <hr className="border-gray-300 border-[1px] absolute"/>
          </div>
        </div>
      </div>

      <div className="wrappercontent">
        <div className="Recommend-content pl-[10rem] pr-[10rem]">
            <p className="font-bold text-[2.5rem]">Ưu đãi GrabFood tại <span className="text-green-500 font-bold">Hà Nội</span></p>
            <div className="grid grid-cols-4 gap-6 mt-10 mb-10">
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/merchants/5-C4CEPAAEL4CJJA/hero/782d2085-530e-48fa-9fa2-f392d8f54a4f__store_cover__2023__08__01__06__31__39.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Quán Cơm Rang 1989 - Cơm Rang Văn Phòng</p>
                    <span className="text-gray-400">Cơm</span>
                    <div className="flex items-center pt-1 pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                          <span className="ml-2 text-gray-400 pr-4">3.2</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="ml-2 text-gray-400 pr-4">30 phút</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-400">
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        <span className="text-gray-400 pr-4">2,1km</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                        <span className="">Ưu đãi đến 52K</span>
                    </div>             
                </div>
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000006ic/hero/115d965cadb74534a211052dfbb8dbff_1710867599881484509.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">McDonald's - Hồ Gươm</p>
                    <span className="text-gray-400">Gà Rán - Burger,Cơm,Món Quốc Tế</span>
                    <div className="flex items-center pt-1 pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                          <span className="ml-2 text-gray-400 pr-4">4.3</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="ml-2 text-gray-400 pr-4">30 phút</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-400">
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        <span className="text-gray-400 pr-4">2,3km</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                        <span className="">50K off,Combo Trưa chỉ 40K</span>
                    </div>             
                </div>
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/merchants/5-C3XKWCKVLKUCBA/hero/b394bd071101421a96c641f6505ba689_1669583337559623912.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Cơm Niêu Singapore 629</p>
                    <span className="text-gray-400">Cơm</span>
                    <div className="flex items-center pt-1 pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                          <span className="ml-2 text-gray-400 pr-4">2.7</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="ml-2 text-gray-400 pr-4">35 phút</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-400">
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        <span className="text-gray-400 pr-4">3,6km</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                        <span className="">Ưu đãi đến 52K</span>
                    </div>             
                </div>
                <div>
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/merchants/5-C3VWSBAALXMUNJ/hero/3ae3989b-2a55-4b39-b8b0-285683d4bf06__store_cover__2023__03__08__16__14__48.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Bánh Mì Cô Chun</p>
                    <span className="text-gray-400">Bánh Mì - Xôi</span>
                    <div className="flex items-center pt-1 pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                          <span className="ml-2 text-gray-400 pr-4">4.7</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="ml-2 text-gray-400 pr-4">25 phút</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-400">
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        <span className="text-gray-400 pr-4">2,1km</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                        <span className="">Ưu đãi đến 40K</span>
                    </div>             
                </div>
            </div>
            <div className="border-[1px] border-gray-500 rounded text-center p-2 mb-10">
              <a href='/ShopList'>See All</a>
            </div>
        </div>

        <div className="Main-content pl-[10rem] pr-[10rem]">
            <p className="font-bold text-[2.5rem]">There's something for everyone!</p>
            <div className="Main-food grid grid-cols-4 gap-6 mt-10 mb-10">
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/69/icons/FriedChicken_4251b520449049528751b74b4d05ffa1_1547819155005255038.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Gà Rán</p>
                </div>
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/16/icons/upload-photo-icon_3408dc71ae96497c82a6f5fb35763840_1549033935837593141.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Bánh Mì</p>
                </div>
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/157/icons/eb8ea703d1f84b218b79b0f860e99425_1562559054203677203.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Ăn Vặt</p>
                </div>
                <div>
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/144/icons/Rice_e191965ccd6848a3862e6a695d05983f_1547819238893335910.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Cơm</p>
                </div>
            </div>
            <div className="Main-food grid grid-cols-4 gap-6 mt-10 mb-10">
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/collections/36/icons/upload-photo-icon_e816de4ec50a4e7a95fc6cc52e3072cd_1548575711684762474.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Hiso Party</p>
                </div>
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/40/icons/upload-photo-icon_f71f7805786348b694d2a9a886b85cee_1549034196325788582.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Cháo</p>
                </div>
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/62/icons/FastFood_4710e425c3d24db2aa4280aa207a22d3_1547819143037208832.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Gà Rán - Burger</p>
                </div>
                <div>
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/135/icons/Pizza_32aed38d4c1d4dbcb2fe711f0aeb6e15_1547819221409327403.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Pizza</p>
                </div>
            </div>
            <div className="Main-food grid grid-cols-4 gap-6 mt-10 mb-10">
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/209/icons/upload-photo-icon_65f41b40038b4b3ea672402e609d0e96_1548908793958778523.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Thịt</p>
                </div>
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/43/icons/Chicken_d4725da9243a46e79740d2e70fd28314_1547819095170793371.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Gà</p>
                </div>
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/130/icons/upload-photo-icon_5175b157c8114e51898b264e1173fafb_1548303610212783174.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Mì Ý</p>
                </div>
                <div>
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/83/icons/cedda467431a49bd88fb1fdf40a4c4a0_1562559607379193479.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Hủ Tiếu</p>
                </div>
            </div>
            <div className="Main-food grid grid-cols-4 gap-6 mt-10 mb-10">
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/147/icons/Salad_1641af887e2b4092a81f8e27ccdac0dc_1547819244890107512.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Rau Trộn</p>
                </div>
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/29/icons/a928e8df0b8b4dfc856ac176c2cf6ecb_1662695866769706068.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Trà Sữa</p>
                </div>
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/collections/38/icons/upload-photo-icon_11130fe9f9154c09b507516072864902_1548777275151458249.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Đồ Uống Lạnh</p>
                </div>
                <div>
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/collections/68/icons/upload-photo-icon_3d16a293ac324b7e9aed94d783a57864_1548575050539497623.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Weekend Treats</p>
                </div>
            </div>
            <div className="Main-food grid grid-cols-4 gap-6 mt-10 mb-10">
                <div >
                    <img className="rounded" src="https://food-cms.grab.com/compressed_webp/cuisine/50/icons/fcaf978fac204ecaab2c5fa0f7e6e4ce_1562559545238776223.webp" alt="" />
                    <p className="font-bold text-[1.3rem] pt-2 pb-2">Cơm Tấm</p>
                </div>
            </div>
        </div>

        <div className="ReasonChoice-Grab pl-[10rem] pr-[10rem] pt-[2rem] pb-[2rem]">
          <p className="font-bold text-[2.5rem]">Vì sao bạn nên Order trên GrabFood?</p>
          <p><span className="font-bold">Nhanh nhất </span>- GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.</p>                        
          <p><span className="font-bold">Dễ dàng nhất </span>- Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn.</p>                        
          <p><span className="font-bold">Đáp ứng mọi nhu cầu </span>- Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn.</p>                        
          <p><span className="font-bold">Thanh toán dễ dàng </span>- Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn dễ dàng hơn nữa.</p>                        
          <p><span className="font-bold">Nhiều quà tặng hơn </span>- Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn.</p>                        
        </div>

        <div className="QuestionRecent pl-[10rem] pr-[10rem] pb-[2rem]">
          <p className="font-bold text-[2.5rem]">Những câu hỏi thường gặp</p>
          <p className="font-bold text-[1.5rem] pt-[1rem] pb-[1rem]">GrabFood là gì?</p>
          <p>Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam. </p>
          <div className="border-[1px] mt-10 border-gray-500 rounded text-center p-2 mb-10">
              <button className="font-bold text-gray-500">Read More</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 pl-[10rem] pr-[10rem] pb-20">
            <div className="flex items-center flex-col">
              <img src="https://food.grab.com/static/page-home/bottom-food-options.svg" alt="" className="" />
              <p className="font-bold text-[1.5rem]">Curated restaurants</p>
              <p className="text-center pl-10 pr-10 text-gray-700">From small bites to big meals, we won't limit your appetite. Go ahead and order all you want.</p>
              
            </div>        
            <div className="flex items-center flex-col">
              <img className="h-[150px] w-[150px]" src="https://food.grab.com/static/images/ilus-cool-features-app.svg" alt="" />
              <p className="font-bold text-[1.5rem]">More cool features available on the app</p>
              <p className="text-center pl-10 pr-10 text-gray-700">Download Grab app to use other payment methods and enjoy seamless communication with your driver.</p>
              <div className="grid grid-cols-2 gap-6">
                <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="" />
                <img src="https://food.grab.com/static/images/logo-playstore.svg" alt="" />
              </div>
            </div>
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
        </div>
        
        </>
    )
}