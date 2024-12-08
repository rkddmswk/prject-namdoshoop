const CustomerNotice = () => {
  const list = [
    {
      title: "[전남 사랑애 서포터즈] 대량주문 방법을 알려주세요.",
      label: "중요공지",
      date: "2024.08.31",
    },
    {
      title: "★★남도장터 운영 안내★★",
      label: "중요공지",
      date: "2024.08.31",
    },
    {
      title: "[고객공지] 남도장터 부당구매 고객 조치사항 안내",
      label: "01",
      date: "2024.08.31",
    },
  ];

  return (
    <div className="cs_notice">
      <ul>
        {list.map((list) => (
          <li>
            <span className="text imp">{list.label}</span>
            <a href="!#">{list.title}</a>
            <span className="date">{list.date}</span>
          </li>
        ))}
      </ul>

      <div className="page">
        <a href="#" className="prev active">
          <span className="hide">이전</span>
        </a>
        <span className="num">
          <a href="#" className="current">
            100
          </a>
          <a href="#">999</a>
          <a href="#">999</a>
          <a href="#">999</a>
          <a href="#">999</a>
        </span>
        <a href="#" className="next">
          <span className="hide">다음</span>
        </a>
      </div>
    </div>
  );
};
export default CustomerNotice;
