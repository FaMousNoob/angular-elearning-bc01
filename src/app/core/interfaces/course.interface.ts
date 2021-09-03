export interface Category {
  maDanhMuc: string;
  tenDanhMuc: string;
  hinhAnhDanhMuc: string;
}

interface DanhMucKhoaHoc {
  maDanhMucKhoahoc: string;
  tenDanhMucKhoaHoc: string;
}

export interface Course {
  biDanh: string;
  hinhAnh: string;
  danhMucKhoaHoc: DanhMucKhoaHoc;
  luotXem: number;
  maKhoaHoc: string;
  maNhom: string;
  moTa: string;
  ngayTao: string;
  soLuongHocVien: number;
  tenKhoaHoc: string;
}
