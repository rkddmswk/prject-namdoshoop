const myPageMenu = [
  {
    topLabel: "나의 쇼핑관리",
    children: [
      {
        text: "주문내역",
        url: "/myPage/order",
      },
      {
        text: "취소/교환/반품",
        url: "/myPage/cover",
      },
    ],
  },

  {
    topLabel: "나의 활동관리",
    children: [
      {
        text: "찜한상품",
        url: "/myPage/mine",
      },
      {
        text: "최근 본 상품",
        url: "/myPage/review",
      },
      {
        text: "상품후기",
        url: "/myPage/review",
      },
      {
        text: "상품문의",
        url: "/myPage/inquiry",
      },
      {
        text: "1:1문의",
        url: "/myPage/OneInquiry",
      },
    ],
  },

  {
    topLabel: "나의 혜택관리",
    children: [
      {
        text: "멤버십",
        url: "/myPage/memberShip",
      },
      {
        text: "쿠폰",
        url: "/myPage/cupon",
      },
      // {
      //   text: "적립금",
      // },
      {
        text: "바우처",
        url: "/myPage/voucher",
      },
      // {
      //   text: "1:1문의",
      // },
    ],
  },

  {
    topLabel: "나의 정보관리",
    children: [
      {
        text: "회원정보 변경",
        url: "/myPage/infoChange",
      },
      {
        text: "배송지관리",
        url: "/myPage/address",
      },
      {
        text: "회원탈퇴",
        url: "/myPage/secession",
      },
    ],
  },
];

export default myPageMenu;
