export const userColumns = [
  {
    field: "user",
    headerName: "Hình ảnh",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "displayName",
    headerName: "Tên tour",
    width: 230,
  },

  {
    field: "address",
    headerName: "Địa điểm",
    width: 180,
  },
  {
    field: "price",
    headerName: "Giá tiền",
    width: 180,
  },
  {
    field: "discount",
    headerName: "Khuyến mãi",
    width: 150,
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
