const produtcs = [{
    id: 1,
    title: 'کیک اسفنجی و کرم',
    img: '/assets/img/products/marble-cake-thumb.jpg',
    category: 'کیک ها',
    createDate: '2 تیر 1399',
    status: 'در انتظار',
    statusColor: 'primary',
    description: 'کیک عروس با گل ماکارون و عروس',
    sales: 1647,
    stock: 62
},
{
    id: 2,
    title: 'فت راسکل',
    category: 'کاپ کیک',
    img: '/assets/img/products/fat-rascal-thumb.jpg',
    createDate: '1 تیر 1399',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک پنیری با کلوچه های شکلاتی و بیسکویت خامه ای',
    sales: 1240,
    stock: 48
},
{
    id: 3,
    title: 'کیک شکلاتی',
    img: '/assets/img/products/chocolate-cake-thumb.jpg',
    category: 'کیک ها',
    createDate: '2 تیر 1397',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'چیز کیک خانگی با توت تازه و نعناع',
    sales: 1080,
    stock: 57
},
{
    id: 4,
    title: 'نان جو رژیمی',
    img: '/assets/img/products/goose-breast-thumb.jpg',
    category: 'کیک ها',
    createDate: '25 خرداد 1399',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک شکلاتی با توت',
    sales: 1014,
    stock: 41
},
{
    id: 5,
    title: 'وافل نوتلا',
    category: 'کاپ کیک',
    img: '/assets/img/products/petit-gateau-thumb.jpg',
    createDate: '2 شهریور 1399',
    status: 'در انتظار',
    statusColor: 'primary',
    description: 'کیک شکلاتی با ماسکار چوبه',
    sales: 985,
    stock: 23
},
{
    id: 6,
    title: 'نون خامه ای',
    img: '/assets/img/products/salzburger-nockerl-thumb.jpg',
    category: 'دسر ها',
    createDate: '14 مهر 1399',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک عروس با گل ماکارون و عروس',
    sales: 962,
    stock: 34
},
{
    id: 7,
    title: 'شیرینی ناپلئونی',
    img: '/assets/img/products/napoleonshat-thumb.jpg',
    category: 'دسر ها',
    createDate: '5 اردیبهشت 1399',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'چیزکیک با توت تازه و نعناع برای دسر',
    sales: 921,
    stock: 31
},
{
    id: 8,
    title: 'چیزکیک',
    img: '/assets/img/products/cheesecake-thumb.jpg',
    category: 'کیک ها',
    createDate: '18 آبان 1397',
    status: 'در انتظار',
    statusColor: 'primary',
    description: 'خوشمزه وگان کیک شکلاتی',
    sales: 887,
    stock: 21
},
{
    id: 9,
    title: 'کیک پرتغالی',
    img: '/assets/img/products/financier-thumb.jpg',
    category: 'کیک ها',
    createDate: '15 خرداد 1399',
    status: 'در انتظار',
    statusColor: 'primary',
    description: 'کیک ماست توت فرنگی شکلات سفید تزئین شده با میوه های تازه و شکلات',
    sales: 865,
    stock: 53
},
{
    id: 10,
    title: 'کیک اسفنجی',
    img: '/assets/img/products/genoise-thumb.jpg',
    category: 'کاپ کیک',
    createDate: '11 شهریور 1399',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک میوه ای کریسمس ، پودینگ در بالا',
    sales: 824,
    stock: 55
},
{
    id: 11,
    title: 'نان خرمایی',
    img: '/assets/img/products/gingerbread-thumb.jpg',
    category: 'کیک ها',
    createDate: '10 تیر 1399',
    status: 'در انتظار',
    statusColor: 'primary',
    description: 'کیک عروس با گل ماکارون و عروس',
    sales: 714,
    stock: 12
},
{
    id: 12,
    title: 'دسر توت فرنگی',
    img: '/assets/img/products/magdalena-thumb.jpg',
    category: 'کیک ها',
    createDate: '22 مهر 1399',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک میوه ای کریسمس ، پودینگ در بالا',
    sales: 702,
    stock: 14
},
{
    id: 13,
    title: 'پارکین',
    img: '/assets/img/products/parkin-thumb.jpg',
    category: 'کیک ها',
    createDate: '22 آبان 1399',
    status: 'در انتظار',
    statusColor: 'primary',
    description: 'کیک ماست توت فرنگی شکلات سفید تزئین شده با میوه های تازه و شکلات',
    sales: 689,
    stock: 78
},
{
    id: 14,
    title: 'پای سیب',
    img: '/assets/img/products/streuselkuchen-thumb.jpg',
    category: 'کیک ها',
    createDate: '22 مهر 1399',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'خوشمزه وگان کیک شکلاتی',
    sales: 645,
    stock: 55
},
{
    id: 15,
    title: 'کیک صبحانه',
    img: '/assets/img/products/tea-loaf-thumb.jpg',
    category: 'کیک ها',
    createDate: '10 آذر 1399',
    status: 'در انتظار',
    statusColor: 'primary',
    description: 'چیزکیک با توت تازه و نعناع برای دسر',
    sales: 632,
    stock: 20
},
{
    id: 16,
    title: 'دسر پاناکوتا',
    img: '/assets/img/products/merveilleux-thumb.jpg',
    category: 'کیک ها',
    createDate: '18 دی 1399',
    status: 'در انتظار',
    statusColor: 'primary',
    description: 'کیک شکلاتی با ماسکار چوبه',
    sales: 621,
    stock: 6
},
{
    id: 17,
    title: 'کیک گیلاس',
    img: '/assets/img/products/fruitcake-thumb.jpg',
    category: 'کیک ها',
    createDate: '12 دی 1399',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک شکلاتی با توت',
    sales: 595,
    stock: 17
},
{
    id: 18,
    title: 'سوهان عسلی',
    img: '/assets/img/products/bebinca-thumb.jpg',
    category: 'کیک ها',
    createDate: '4 تیر 1399',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'چیز کیک خانگی با توت تازه و نعناع',
    sales: 574,
    stock: 16
},
{
    id: 19,
    title: 'دسر تیرامیسو',
    img: '/assets/img/products/cremeschnitte-thumb.jpg',
    category: 'دسر ها',
    createDate: '4 خرداد 1399',
    status: 'در انتظار',
    statusColor: 'primary',
    description: 'کیک پنیری با کلوچه های شکلاتی و بیسکویت خامه ای',
    sales: 562,
    stock: 9
},
{
    id: 20,
    title: 'کاپ کیک قهوه',
    img: '/assets/img/products/souffle-thumb.jpg',
    category: 'کاپ کیک',
    createDate: '16.01.2018',
    status: 'در انتظار',
    statusColor: 'primary',
    description: 'کیک عروس با گل ماکارون و عروس',
    sales: 524,
    stock: 14
}
]

export default produtcs