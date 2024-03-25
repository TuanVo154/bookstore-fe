import { Component } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css',
})
export class ListCategoriesComponent {
  categories = [
    {
      imagePath: '../../../assets/categories/colormark.png',
      name: 'Bút màu',
      title: 'Bút Màu',
    },
    {
      imagePath: '../../../assets/categories/toys.png',
      name: 'Đồ chơi',
      title: 'Đồ Chơi',
    },
    {
      imagePath: '../../../assets/categories/teddy.png',
      name: 'Thú bông',
      title: 'Thú Bông',
    },
    {
      imagePath: '../../../assets/categories/van-hoc.png',
      name: 'Văn học',
      title: 'Văn Học',
    },
    {
      imagePath: '../../../assets/categories/TLKN.png',
      name: 'Tâm Lý Kỹ Năng',
      title: 'Tâm Lý Kỹ Năng',
    },
    {
      imagePath: '../../../assets/categories/thieu-nhi.jpg',
      name: 'Thiếu Nhi',
      title: 'Thiếu Nhi',
    },
    {
      imagePath: '../../../assets/categories/kinh-te.png',
      name: 'Kinh Tế',
      title: 'Kinh Tế',
    },
    {
      imagePath: '../../../assets/categories/b1_-HNN.png',
      name: 'Sách Học Ngoại',
      title: 'Sách Học Ngoại',
    },
    {
      imagePath: '../../../assets/categories/ngoaivan.jpg',
      name: 'Ngoại Văn',
      title: 'Ngoại Văn',
    },
  ];
}
